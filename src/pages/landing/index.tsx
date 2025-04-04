import { HeroSection } from "@/components/content";
import { LanguageStrip } from "@/components/widget";
import styles from "./styles/Landing.module.css";
import { BentoCursos, FeaturedVideos } from "@/components/widget";

const LandingPage = () => {
  return (
    <div className="mb-6">
      {/* Presentation */}
      <div className="relative w-full overflow-hidden px-4 pt-[10vh] mb-10 sm:mb-0">
        <HeroSection />
        <LanguageStrip />
      </div>
      <FeaturedVideos />
      {/* Comments */}
      <div
        className={`${styles.gradientBg} relative top-[-40px] `}
        style={{ height: "200px", clipPath: "ellipse(100% 200px at 50% 100%)"}}
      ></div>
      <div className="w-full">
        <div
          className={`relative top-[-40px] -mt-[80px] w-full ${styles.gradientBg}`}
        >
          <BentoCursos />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
