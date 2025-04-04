import { motion } from "framer-motion";
import { useScrollAnimations } from "@/hooks/animations/useScrollAnimations";

const descriptionPage =
  "!Prepárate para sumergirte en un universo de aprendizaje continuo y descubrir todo lo nuevo que Coursify tiene para ti!";

export const HeroSection = () => {
  const { textX, textOpacity, imageX, imageOpacity } = useScrollAnimations(600);

  return (
    <div className="flex w-full items-start lg:h-[600px]">
      {/* Contenedor del texto */}
      <motion.div
        style={{ x: textX, opacity: textOpacity }}
        className="mx-auto mt-[5%] w-full max-w-screen-2xl z-[1]"
      >
        <h1 className="text-center text-4xl sm:text-5xl lg:text-start uppercase">

          {/* Text-Decoration */}
          <span className="text-4xl text-primary sm:text-5xl opacity-[1] font-bold" style={{ WebkitTextFillColor: "transparent",background: "linear-gradient(-70deg, #a2facf, #64acff)", backgroundClip: "text" }}>
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
      </motion.div>

      {/* Contenedor de la imagen */}
      <motion.div
        style={{ x: imageX, opacity: imageOpacity }}
        className="absolute left-[55%] hidden aspect-video w-[110dvh] lg:block"
      >
        <img
          src="https://i.pinimg.com/originals/93/6c/ad/936cadb0814fbd5d779f6c5557e95983.gif"
          alt=""
        />
      </motion.div>
    </div>
  );
};
