import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Image from "@/assets/biography.png";
import Title from "@/components/title";
import { biography as string } from "@/assets/strings/es.json";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Biography = ({ setSelectedPage }: Props) => {
  return (
    <section id="biografía" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Biografía)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img className="mx-auto rounded-md" alt="davoo-xeneixe" src={Image} />

          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Title>{string.title}</Title>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">{string.first_paragraph}</p>
              <p className="mb-5">{string.second_paragraph}</p>
              <p className="mb-5">{string.third_paragraph}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Biography;
