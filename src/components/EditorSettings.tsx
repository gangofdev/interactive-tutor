import React, { ChangeEvent, Fragment, useContext } from "react";
import {
  Disclosure,
  Menu,
  Popover,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  CheckIcon,
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
  ];

  const { theme, switchTheme } = useContext(ThemeContext);
  const bgColour = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  const menuColour = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
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
          className={`${bgColour} absolute right-2 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
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
                        <div>{currentFontSize}</div>
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
                                {size}
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
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default EditorSettings;
