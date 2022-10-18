import { useContext } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ThemeContext from "../contexts/ThemeContext";

interface TestsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  handleTest: () => void;
  expanded: boolean;
}

const Tests = ({
  onMinimize,
  onMaximize,
  expanded,
  handleTest,
}: TestsProps) => {
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
      {expanded ? (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between px-2 py-1">
            <div>
              create h1 with 'hello world' and classes 'text-2xl text-red-500'
            </div>
            <button
              className="btn bg-green-400 rounded-lg w-24"
              onClick={handleTest}
            >
              Run
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tests;
