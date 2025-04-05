import styles from "../common/styles/InfiniteStrip.module.css"
import { InfiniteStrip } from "../common";

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
const LanguageStripSection = ({ languages }: { languages: string[] }) => {
  return (
    <div aria-details="Lenguajes" className={styles.mask}>
      <div className="flex size-full flex-shrink-0 items-center gap-4 text-txt-primary overflow-hidden relative">
        <InfiniteStrip className="flex flex-shrink-0 items-center gap-4 whitespace-nowrap">
          {languages.map((language, index) => (
            <span
              key={index}
              className={`block w-fit flex-shrink-0 rounded-lg border border-[#ffffff1a] bg-transparent bg-gradient-custom px-4 py-2 backdrop-blur-xl `}
            >
              # {language}
            </span>
          ))}
        </InfiniteStrip>
      </div>
    </div>
  );
};

export const LanguageStrip = () => {
  return (
    <div className="mask mx-auto mt-24 flex max-w-screen-2xl flex-col gap-4 overflow-hidden lg:mt-10">
      <LanguageStripSection languages={languageList.slice(0, 10)} />
      <LanguageStripSection languages={languageList.slice(10, 20)} />
    </div>
  );
};
