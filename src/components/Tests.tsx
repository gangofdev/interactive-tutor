import { useContext, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ThemeContext from "../contexts/ThemeContext";
import TestCase from "./TestCase";

interface TestsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  expanded: boolean;
}
interface criteriaType {
  text: string;
  classNames: string[];
  element: string;
}
interface testType {
  id: number;
  title: string;
  error: string;
  status: string;
  criteria: criteriaType;
}
const getRandomWords = (num: number) => {
  const words = [
    "hello",
    "world",
    "this",
    "is",
    "a",
    "test",
    "for",
    "random",
    "words",
    "generator",
    "function",
    "that",
    "will",
    "generate",
    "random",
    "words",
    "for",
    "us",
    "to",
    "use",
    "in",
    "our",
    "tests",
    "and",
    "criteria",
    "water",
    "bottle",
    "computer",
    "mouse",
    "keyboard",
    "monitor",
    "chair",
    "table",
    "lamp",
    "phone",
    "headphones",
    "why",
    "are",
    "you",
    "still",
    "reading",
  ];
  const randomWords = [];
  for (let i = 0; i < num; i++) {
    randomWords.push(words[Math.floor(Math.random() * words.length)]);
  }
  return randomWords.join(" ");
};

const generateCriteria = () => {
  const elements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div"];
  const classNames = [
    "text-2xl",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
  ];
  //get random words text
  const text = getRandomWords(3);

  const element = elements[Math.floor(Math.random() * elements.length)];
  const className = classNames[Math.floor(Math.random() * classNames.length)];
  const criteria = {
    text,
    classNames: [className],
    element,
  };
  return criteria;
};
// generate random test
const generateTest = () => {
  const id = Math.floor(Math.random() * 100000);
  const status = "";
  const error = "";
  const criteria = generateCriteria();
  const title = `Create ${criteria.element} with text '${criteria.text}' and classes '${criteria.classNames}'`;
  const test: testType = {
    id,
    title,
    status,
    error,
    criteria,
  };
  return test;
};

const Tests = ({ onMinimize, onMaximize, expanded, iframeRef }: TestsProps) => {
  const [tests, setTests] = useState<testType[]>(
    Array.from({ length: 5 }, generateTest)
  );
  const runTests = () => {
    tests.forEach((test) => {
      testIframe(test.criteria, test.id);
    });
  };
  const testIframe = (criteria: criteriaType, id: number) => {
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
        setTests(
          tests.map((test) => {
            if (test.id === id) {
              test.status = "fail";
              test.error = `Test Failed no element ${element}`;
            }
            return test;
          })
        );
        return;
      }
      if (flag) {
        setTests(
          tests.map((test) => {
            if (test.id === id) test.status = "pass";
            return test;
          })
        );
      } else {
        setTests(
          tests.map((test) => {
            if (test.id === id) {
              test.status = "fail";
              test.error = `Test failed does not contain ${text} and ${classNames}`;
            }
            return test;
          })
        );
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
          <>
            {tests.map((test) => (
              <TestCase
                id={test.id}
                title={test.title}
                errorText={test.error}
                status={test.status}
              />
            ))}
          </>
          <button
            className="btn bg-green-400 rounded-lg w-24"
            onClick={runTests}
          >
            Run
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tests;
