import { motion } from "framer-motion";
import { LanguageStrip } from "@/components/widget/LanguageStrip";

const descriptionPage =
  "!Prepárate para sumergirte en un universo de aprendizaje continuo y descubrir todo lo nuevo que Coursify tiene para ti!";

const Dashboard = () => {
  return (
    <div style={{ height: "2000px" }}>
      {/* Performance */}
      <div className="relative w-full overflow-hidden px-4 py-40 pt-[10vh] lg:min-h-dvh">
        <div className="flex w-full items-start lg:h-[70dvh]">
          <div className="mx-auto mt-[5%] w-full max-w-screen-2xl z-[1]">
            <h1 className="text-center text-4xl sm:text-5xl lg:text-start uppercase">
              <span className="text-4xl text-primary sm:text-5xl opacity-[1] font-bold">
                Coursify
              </span>
              <span className="invisible" />
              <br />
              <span className="mt-6 text-4xl sm:text-5xl opacity-[1] font-bold text-txt-primary">
                Un rincón de aprendizaje
              </span>
            </h1>
            <h2 className="mt-6 text-center font-poppins text-lg font-normal text-neutral-300 sm:text-xl sm:font-semibold lg:max-w-2xl lg:text-start">
              {descriptionPage.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="sm:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.025 }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
          </div>
          <div className="absolute left-[55%] hidden aspect-video w-[110dvh] lg:block">
            <img
              src="https://i.pinimg.com/originals/93/6c/ad/936cadb0814fbd5d779f6c5557e95983.gif"
              alt=""
            />
          </div>
        </div>
        {/* Accordion */}
        <LanguageStrip />
      </div>
    </div>
  );
};

export default Dashboard;
