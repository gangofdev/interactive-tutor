import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface TestsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  expanded: boolean;
}

const Tests = ({ onMinimize, onMaximize, expanded }: TestsProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between bg-gray-700 px-2 py-1">
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
