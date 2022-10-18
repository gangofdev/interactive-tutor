import { useContext } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ThemeContext from "../contexts/ThemeContext";

interface TestsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  expanded: boolean;
}

const Tests = ({ onMinimize, onMaximize, expanded, iframeRef }: TestsProps) => {
  const testIframe = () => {
    const criteria = {
      text: "hello world",
      classNames: ["text-2xl", "text-red-500"],
      element: "h1",
    };
    let flag = false;
    const iframe = iframeRef.current?.contentDocument;
    if (iframe) {
      const { text, classNames, element } = criteria;
      const elementNodes = iframe.querySelectorAll<HTMLElement>(element);
      if (elementNodes.length) {
        elementNodes.forEach((elementNode) => {
          const hasText = elementNode.innerText === text;
          const hasClassNames = classNames.every((className) =>
            elementNode.classList.contains(className)
          );
          if (hasText && hasClassNames) {
            flag = true;
          }
        });
      } else {
        alert(`Test Failed no element ${element}`);
        return;
      }
      if (flag) {
        alert(`Test Passed contains ${text} and ${classNames}`);
      } else {
        alert(`Test failed does not contain ${text} and ${classNames}`);
      }
    }
  };
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
              onClick={testIframe}
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
