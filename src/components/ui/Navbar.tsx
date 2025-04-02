import Logo from "@/assets/KorxteamIcon.png";
import Button from "../common/Button";
import { Chain, Discord, Github } from "@/assets/icons";

const Navbar = () => {
  return (
    <header
      className="bg-content h-16 w-full sticky top-0 left-0 z-50 border-b-[1px] border-stroke px-2 shadow-lg text-txt-primary"
      style={{
        background: "transparent",
        backdropFilter: "blur(10px)",
      }}
    >
      <nav className="size-full flex py-8 px-4 items-center justify-between mx-auto max-w-screen-2xl ">
        <div className="flex items-center">
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

        <div className="flex">
          <Button
            text="Aprender ahora"
            onClick={() => console.log("Event Button")}
            className="bg-btn py-2 px-4 text-txt-primary"
            iconMargin="0 0 0 4px"
            reverse
          >
            <Chain className="w-4 h-4" />
          </Button>

          <div className="flex gap-4 ml-4" about="Redes">
            <Button redirect toRef="https://discord.com/invite/fhjm8rJAf5">
              <Discord className="w-4 h-4" />
            </Button>
            <Button redirect toRef="instagram.com">
              <Github className="w-4 h-4 " />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
