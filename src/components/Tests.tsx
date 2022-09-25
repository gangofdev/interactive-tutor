import React, { useContext } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ThemeContext from "../contexts/ThemeContext";

interface TestsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  expanded: boolean;
}

const Tests = ({ onMinimize, onMaximize, expanded }: TestsProps) => {
  const { theme } = useContext(ThemeContext);
  const bgColour = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  return (
    <div className="flex flex-col">
      <div
        className={`w-full flex flex-row justify-between px-2 py-1 ${bgColour}`}
      >
        <div>Tests</div>
        {expanded ? (
          <button onClick={onMinimize}>
            <ChevronDownIcon className="h-6 w-6" />
          </button>
        ) : (
          <button onClick={onMaximize}>
            <ChevronUpIcon className="h-6 w-6" onClick={onMaximize} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Tests;
