import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import Work from "./work";
import Title from "@/components/title";
import { work as string } from "@/assets/strings/es.json";

const videos: Array<ClassType> = [
  {
    videoId: "XJZeSSOKe40",
  },
  {
    videoId: "sU98axgnPls",
  },
  {
    videoId: "CkrDHrlg83c",
  },
  {
    videoId: "MOEINGAGk4Q",
  },
  {
    videoId: "-O4A695WuUo",
  },
  {
    videoId: "RjRGrmEV2oo",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const WorkPage = ({ setSelectedPage }: Props) => {
  return (
    <section id="micontenido" className="h-full w-full bg-primary py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contenido)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-white md:w-3/5">
            <Title>{string.title}</Title>
            <p className="py-5">{string.description}</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] overflow-x-auto overflow-y-hidden">
          <ul className="w-full whitespace-nowrap">
            {videos.map((item: ClassType, index) => (
              <Work key={`${item.videoId}-${index}`} videoId={item.videoId} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkPage;
