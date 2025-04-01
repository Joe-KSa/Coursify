import React from "react";
import Logo from "@/assets/KorxteamIcon.png";
import Button from "../common/Button";
import { Chain, Discord } from "@/assets/icons";


const Navbar = () => {
  return (
    <div className="h-10 w-full">
      <nav className="h-full w-full flex py-8 px-4 items-center justify-between">
        <div className="flex items-center">
          <figure>
            <img src={Logo} alt="Logo" className="w-10 h-10" />
          </figure>
          <div className="px-4">
            <ul className="flex space-x-8 text-white font-semibold text-xs">
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

        <div className="">
            <Button text="Aprender ahora" onClick={() => console.log("Event Button")} className="bg-amber-700" iconMargin="0 0 0 4px" reverse>
              <Chain className="w-4 h-4"/>
            </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
