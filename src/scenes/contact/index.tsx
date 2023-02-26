import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Image from "@/assets/contact.jpeg";
import Title from "@/components/title";
import { contact as string } from "@/assets/strings/es.json";

const FORM = "https://formsubmit.co/el/56e43dd9db55935346ccc672680b316c";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg border-black
  px-5 py-3 placeholder-text-gray-900  shadow-md border border-gray-300 focus:border-text-primary focus:outline-none focus:ring`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contacto" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Title>{string.title}</Title>
          <p className="my-5">{string.description}</p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action={FORM}
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder={string.name}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500">
                  {errors.name.type === "required" && string.error_required}
                  {errors.name.type === "maxLength" &&
                    `${string.error_maxlength} 100.`}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder={string.email}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-500">
                  {errors.email.type === "required" && string.error_required}
                  {errors.email.type === "pattern" && string.error_email}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder={string.message}
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-500">
                  {errors.message.type === "required" && string.error_required}
                  {errors.message.type === "maxLength" &&
                    `${string.error_maxlength} 2000.`}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary px-20 py-3 uppercase transition duration-500 hover:text-white"
              >
                {string.button}
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full rounded-md"
                alt="davoo-xeneixe"
                src={Image}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
