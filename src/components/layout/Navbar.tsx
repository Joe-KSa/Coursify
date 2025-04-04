import Logo from "@/assets/KorxteamIcon.png";
import { Button } from "../ui/button";
import { ChainIcon, DiscordIcon, GithubIcon } from "@/assets/icons";
import { OffCanvas } from "../widget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header
      className="bg-content h-16 w-full sticky top-0 left-0 border-b-[1px] border-stroke px-2 shadow-lg text-txt-primary z-[100]"
      style={{
        background: "transparent",
        backdropFilter: "blur(10px)",
      }}
    >
      <nav className="size-full flex py-8 px-4 items-center justify-between mx-auto max-w-screen-2xl ">
        <div className="hidden lg:flex items-center">
          <figure>
            <img src={Logo} alt="Logo" className="w-10 h-10" />
          </figure>
          <div className="px-4">
            <ul className="flex space-x-8 font-semibold text-xs">
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#Aprender">Aprender</a>
              </li>
              <li>
                <a href="#Blogs">Blogs</a>
              </li>
              <li>
                <a href="#Eventos">Eventos</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Button
            onClick={() => console.log("Event Button")}
            className="bg-secondary py-2 px-4 text-txt-primary text-xs"
          >
            Aprender ahora <ChainIcon className="size-4" />
          </Button>

          <div className="flex" about="Redes">
            <Button variant="ghost">
              <Link to="https://discord.com/invite/fhjm8rJAf5">
                <DiscordIcon className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost">
              <GithubIcon className="size-4" />
            </Button>
          </div>
        </div>
        <OffCanvas />
      </nav>
    </header>
  );
};
