import React from "react";
import styles from "./styles/BentoCursos.module.css";
import { DiscordLogo, FriendLogo } from "@/assets/lottie";
import Lottie from "lottie-react";

const containerClass =
  "relative mx-auto size-full max-w-7xl rounded-[12px] border-1 border-secondary overflow-hidden bg-primary";

const containerLogo =
  "size-full overflow-hidden m-0 outline-0 text-center flex justify-center items-center flex-col p-6";

const Featured: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ gridArea: "featured" }}>
    <div className={containerClass}>
      <div className="relative z-0 w-full flex flex-col gap-2 items-center justify-center h-full p-6">
        {children}
      </div>
      <div className={`absolute inset-[4px] ${styles.gradientMask}`} />
    </div>
  </div>
);

const MinorFeat0: React.FC<{
  gridArea: string;
  children?: React.ReactNode;
}> = ({ gridArea, children }) => (
  <div style={{ gridArea }}>
    <div className={containerClass}>
      <div className="flex flex-col gap-2 items-center justify-center h-full space-y-4 relative z-0">
        {children}
      </div>
      <div className={`absolute inset-[4px] ${styles.gradientMask}`} />
    </div>
  </div>
);

export const MajorFeat1: React.FC<{
  gridArea: string;
  children?: React.ReactNode;
}> = ({ gridArea, children }) => (
  <div style={{ gridArea }}>
    <div className={containerClass}>
      <div className="flex flex-col items-center justify-center h-full space-y-4 relative z-0">
        {children}
        <div className={`absolute inset-[4px] ${styles.gradientMask}`} />
      </div>
    </div>
  </div>
);

export const BentoCursos = () => {
  return (
    <div
      className={`${styles.announcet} size-full mt-4 max-w-7xl mx-auto px-4`}
    >
      <Featured>
        <div
          className="font-bold text-7xl"
          style={{
            WebkitTextFillColor: "transparent",
            background: "linear-gradient(-70deg, #a2facf, #64acff)",
            backgroundClip: "text",
          }}
        >
          Domina
        </div>
        <div className="text-gray-400 text-md text-center max-w-xs">
          <span className="font-bold text-white">
            Herramientas y conocimientos
          </span>
          {" más "}
          <span className="font-bold text-white">
            demandados en el mercado laboral
          </span>
        </div>
      </Featured>
      <MinorFeat0 gridArea="major-feat-0">
        <div
          className="font-bold text-7xl"
          style={{
            WebkitTextFillColor: "transparent",
            background: "linear-gradient(-70deg, #ff7b7b, #64acff)",
            backgroundClip: "text",
          }}
        >
          Explora
        </div>
        <div className="text-white text-xl text-center max-w-xs font-bold">
          Nuevas tendencias
        </div>
      </MinorFeat0>
      <MajorFeat1 gridArea="minor-feat-1">
        <div className={containerLogo}>
          <Lottie animationData={FriendLogo} loop={true} className="size-24" />;
          <div className="text-white text-xl text-center max-w-xs font-bold">
            Invita y comparte con tus amigos
          </div>
        </div>
      </MajorFeat1>
      <MinorFeat0 gridArea="minor-feat-0">
        <div className={containerLogo}>
          <Lottie animationData={DiscordLogo} loop={true} className="size-24" />
          ;
          <div className="text-gray-100 text-xl text-center max-w-xs font-semibold">
            Unete a nuestro Discord
          </div>
        </div>
      </MinorFeat0>
      <MajorFeat1 gridArea="major-feat-1">
        <div className={containerLogo}>
          <div
            className="font-bold text-7xl"
            style={{
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(-70deg, #ff7b7b, #64acff)",
              backgroundClip: "text",
            }}
          >
            69
          </div>
          <div className="text-white text-xl text-center max-w-xs font-bold">
            Cursos disponibles
          </div>
        </div>
      </MajorFeat1>
    </div>
  );
};
