import React from "react";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import LogoDark from "../assets/LogoDark.svg";
import LogoLight from "../assets/LogoLight.svg";

const Navbar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const bgColour = theme === "dark" ? "bg-[#282C34]" : "bg-white";
  const textColour = theme === "dark" ? "text-white" : "text-black";
  return (
    <div
      className={`grid grid-cols-2 py-2 px-4 overflow-clip ${bgColour} ${textColour}`}
    >
      <div className="flex flex-row justify-start h-12">
        <img src={theme == "dark" ? LogoDark : LogoLight} />
      </div>
      <div className="flex flex-row justify-end">
        <button onClick={switchTheme}>
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
