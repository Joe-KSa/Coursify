import Styles from "./styles/LanguageStrip.module.css";

const languageList = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "Java",
  "Csharp",
  "C++",
  "PHP",
  "Swift",
  "Go",
  "Kotlin",
  "Git",
  "Dart",
  "Node.js",
  "React",
  "Angular",
  "Vue.js",
  "Laravel",
  "Spring",
  "Flutter",
];

// Componente reutilizable para la sección de lenguajes
const LanguageStripSection = ({
  animationClass,
  languages,
}: {
  animationClass: string;
  languages: string[];
}) => {
  return (
    <div aria-details="Lenguajes" className={Styles.mask}>
      <div className="relative size-full overflow-hidden">
        <div className="flex size-full flex-shrink-0 items-center gap-4 text-txt-primary">
          {[...Array(3)].map((_, idx) => (
            <section
              key={idx}
              className={`${animationClass} flex flex-shrink-0 items-center gap-4 whitespace-nowrap `}
            >
              {languages.map((language, index) => (
                <span
                  key={index}
                  className={`block w-fit flex-shrink-0 rounded-lg border border-[#ffffff1a] bg-transparent bg-gradient-custom px-4 py-2 backdrop-blur-xl `}
                >
                  # {language}
                </span>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LanguageStrip = () => {
  return (
    <div className="mask mx-auto mt-24 flex max-w-screen-2xl flex-col gap-4 overflow-hidden lg:mt-10">
      <LanguageStripSection
        animationClass={Styles.animationStrip}
        languages={languageList.slice(0, 10)}
      />
      <LanguageStripSection
        animationClass={Styles.animationStripReverse}
        languages={languageList.slice(10, 20)}
      />
    </div>
  );
};
