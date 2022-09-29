import React, { ChangeEvent, Fragment, useContext } from "react";
import {
  Disclosure,
  Listbox,
  Menu,
  Popover,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";

// Circular Dependency??
import { FontSizeEnum } from "./CodeGround";
import ThemeContext from "../contexts/ThemeContext";

interface EditorSettingsProps {
  currentFontSize: FontSizeEnum;
  onChangeFontSize: (fontSize: FontSizeEnum) => void;
}

const EditorSettings = ({
  currentFontSize,
  onChangeFontSize,
}: EditorSettingsProps) => {
  const sizes: FontSizeEnum[] = [
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    // "text-4xl",
    // "text-5xl",
    // "text-6xl",
    // "text-7xl",
    // "text-8xl",
    // "text-9xl"
  ];
  const fontSizes = {
    "text-xs": "12px",
    "text-sm": "14px",
    "text-base": "16px",
    "text-lg": "18px",
    "text-xl": "20px",
    "text-2xl": "22px",
    "text-3xl": "24px",
    // "text-4xl": "24px",
    // "text-5xl": "24px",
    // "text-6xl": "24px",
    // "text-7xl": "24px",
    // "text-8xl": "24px",
    // "text-9xl": "24px"
  };

  const { theme } = useContext(ThemeContext);
  const bgColour = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  const menuColour = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <Menu.Button
        className={`inline-flex w-full justify-center rounded-md ${bgColour} bg-opacity-20 px-4 py-2 font-medium hover:bg-opacity-30`}
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`${bgColour} absolute right-2 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="px-2 py-2 ">
            <Menu.Item>
              {({ active }) => (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex w-full justify-between rounded-lg ${menuColour} px-4 py-2 text-left text-sm font-medium bg-opacity-80 hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                      >
                        <div>Font Size</div>
                        <div>{fontSizes[currentFontSize]}</div>
                      </Disclosure.Button>

                      {/*
                      Use the `Transition` + `open` render prop argument to add transitions.
                    */}
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        {/*
                        Don't forget to add `static` to your `Disclosure.Panel`!
                      */}
                        <Disclosure.Panel static>
                          <RadioGroup
                            value={currentFontSize}
                            onChange={onChangeFontSize}
                            className="flex flex-row justify-between items-center"
                          >
                            <RadioGroup.Label className="sr-only">
                              Sizes
                            </RadioGroup.Label>
                            {sizes.map((size) => (
                              <RadioGroup.Option
                                key={size}
                                value={size}
                                className={({ checked }) =>
                                  `${
                                    checked
                                      ? "bg-sky-900 bg-opacity-75 text-white"
                                      : ""
                                  } relative flex rounded-lg cursor-pointer p-2 outline-none`
                                }
                              >
                                <CheckIcon className="hidden ui-checked:block" />
                                {fontSizes[size]}
                              </RadioGroup.Option>
                            ))}
                          </RadioGroup>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              )}
            </Menu.Item>
          </div>
          <div
            className={`flex w-full justify-between items-center ${menuColour} px-4 py-2 text-left text-sm font-medium bg-opacity-80 hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
          >
            <div>Font size :</div>
            <Listbox value={currentFontSize} onChange={onChangeFontSize}>
              <div className="relative mt-1">
                <Listbox.Button
                  className={`relative w-28 cursor-default rounded-lg ${bgColour} py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
                >
                  <span className="block truncate">
                    {fontSizes[currentFontSize]}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className={`absolute mt-1 max-h-72 w-28 overflow-auto rounded-md ${bgColour} py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                  >
                    {sizes.map((size, sizeIdx) => (
                      <Listbox.Option
                        key={sizeIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? `bg-sky-400 bg-opacity-75 ${textColor}`
                              : `${bgColour} bg-opacity-75 ${textColor}`
                          }
                          }`
                        }
                        value={size}
                      >
                        {({}: any) => (
                          <>
                            <span
                              className={`block truncate ${
                                size == currentFontSize
                                  ? "font-medium ${textColor}"
                                  : "font-normal"
                              }`}
                            >
                              {fontSizes[size]}
                            </span>
                            {size == currentFontSize ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500 font-extrabold">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default EditorSettings;
