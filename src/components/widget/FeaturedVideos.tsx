import styles from "./styles/FeaturedVideos.module.css";
import MtaImage from "@/assets/Mta.png";

export const FeaturedVideos = () => {
  return (
    <div className="flex flex-col z-10 mx-auto relative justify-center mt-[0px] mb-[100px] sm:mt-[150px] sm:mb-[150px]">
      <section className="flex justify-center lg:ml-[-1em] lg:mr-[-1em] z-10 relative">
        <span className="inline lg:hidden relative p-4">
          <img src={MtaImage} alt="" className="cursor-pointer flex transform-gpu rounded-[12px] bento-gradient transition-transform duration-300 max-w-[400px] relative w-full"/>
        </span>
        <div className="hidden lg:flex lg:flex-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`${styles.embed} rounded-[12px] relative inline`}>
              <img
                src={MtaImage}
                alt=""
                className="cursor-pointer flex transform-gpu rounded-[12px] bento-gradient transition-transform duration-300 max-w-[350px] relative"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
