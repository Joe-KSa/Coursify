import { HeroSection } from "@/components/content";
import { LanguageStrip, ReviewsSection } from "@/components/widget";
import styles from "./styles/Landing.module.css";
import { BentoInfo, FeaturedVideos } from "@/components/widget";
import { Footer } from "@/components/layout";

const LandingPage = () => {
  return (
    <div data-id="landing-page">
      {/* Presentation */}
      <div className="relative w-full overflow-hidden px-4 pt-[10vh] mb-10 sm:mb-0">
        <HeroSection />
        <LanguageStrip />
      </div>
      <FeaturedVideos />
      {/* Comments */}
      <div
        className={`${styles.gradientBg} relative top-[-40px] `}
        style={{ height: "150px", clipPath: "ellipse(100% 200px at 50% 100%)" }}
      />
      <div className="w-full">
        <div
          className={`relative top-[-40px] -mt-[80px] w-full pb-20 ${styles.gradientBg}`}
        >
          <BentoInfo />
        </div>
      </div>
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
