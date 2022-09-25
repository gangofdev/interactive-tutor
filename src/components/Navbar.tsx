import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import LogoDark from "../assets/LogoDark.svg";
import LogoLight from "../assets/LogoLight.svg";
import BufferPicker from "./BufferPicker";
import { RadioGroup } from "@headlessui/react";

interface NavbarProps {
  currentDisplayPane: "Preview" | "Description";
  onChangeDisplayPane: (option: "Preview" | "Description") => void;
}

const Navbar = ({ currentDisplayPane, onChangeDisplayPane }: NavbarProps) => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const bgColour = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColour = theme === "dark" ? "text-white" : "text-black";
  return (
    <div
      className={`grid grid-cols-2 py-2 px-4 overflow-clip ${bgColour} ${textColour}`}
    >
      <div className="flex flex-row justify-start items-center h-12">
        <img
          src={theme == "dark" ? LogoDark : LogoLight}
          className="cursor-pointer"
          style={{ height: "inherit" }}
        />
      </div>
      <div className="flex flex-row justify-end items-center gap-4">
        <RadioGroup
          value={currentDisplayPane}
          onChange={onChangeDisplayPane}
          className="flex flex-row justify-center items-center"
        >
          <RadioGroup.Label className="sr-only">Display Pane</RadioGroup.Label>

          <RadioGroup.Option
            value="Preview"
            className={({ checked }) =>
              `${
                checked ? "bg-sky-900 bg-opacity-75 text-white" : ""
              } relative flex rounded-lg cursor-pointer px-4 py-2 outline-none`
            }
          >
            Preview
          </RadioGroup.Option>
          <RadioGroup.Option
            value="Description"
            className={({ checked }) =>
              `${
                checked ? "bg-sky-900 bg-opacity-75 text-white" : ""
              } relative rounded-lg flex cursor-pointer px-4 py-2 outline-none`
            }
          >
            Description
          </RadioGroup.Option>
        </RadioGroup>
        <div className="bg-gray-500 w-0.5 h-6 opacity-50"></div>
        <button
          onClick={switchTheme}
          className={`rounded-lg p-2 ${
            theme == "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
          }`}
        >
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
