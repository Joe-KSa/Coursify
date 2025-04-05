import styles from "@/pages/landing/styles/Landing.module.css";
import { DiscordIcon, FacebookIcon, InstagramIcon } from "@/assets/icons";
import KorxteamLogo from "@/assets/KorxteamIcon.png";

const companyLinks = ["About Us", "Careers", "Blog"];
const supportLinks = ["Help Center", "Contact Us", "FAQs"];
const socialIcons = [
  <DiscordIcon className="size-4" />,
  <FacebookIcon className="size-4" />,
  <InstagramIcon className="size-4" />,
];

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div data-test-id={title}>
    <span className="text-sm text-txt-primary font-semibold">{title}</span>
    <ul className="flex flex-col gap-2 text-txt-primary mt-2">
      {links.map((link, index) => (
        <li key={index} className="text-xs cursor-pointer hover:underline">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className={`${styles.gradientBg} mt-12 relative`}>
      <div className="mx-auto max-w-7xl pt-10 pb-5 px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div className="flex flex-col items-start gap-4 text-txt-primary max-w-[200px]">
          <div className="flex items-center">
            <img src={KorxteamLogo} alt="" className="size-8"/>
            <span className="text-sm font-semibold ml-2">Coursify</span>
          </div>
          <span className="text-xs">
            Un lugar para aprender muchas cosas que no sabias, que sabras cuando aprendas
          </span>
          <div data-test-id="Follow us" className="flex-col">
            <span className="text-xs font-semibold">Follow us</span>
            <ul className="flex gap-2 text-txt-primary mt-2">
              {socialIcons.map((icon, index) => (
                <li key={index}>{icon}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col sm:flex-row gap-12">
          <FooterSection title="Company" links={companyLinks} />
          <FooterSection title="Support" links={supportLinks} />
        </div>
      </div>
    </footer>
  );
};
