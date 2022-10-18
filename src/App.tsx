import React, { useState, useContext, useRef, useEffect } from "react";
import CodeGround from "./components/CodeGround";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import { CodeProvider } from "./contexts/CodeContext";
import ThemeContext from "./contexts/ThemeContext";
import { Allotment, AllotmentHandle } from "allotment";
import "allotment/dist/style.css";
import Tests from "./components/Tests";
import Preview from "./components/Preview";
import { useLocalStorage } from "usehooks-ts";

const App = () => {
  const { theme } = useContext(ThemeContext);
  // refactor TODO
  const bgColour = theme === "dark" ? "bg-[#282C34]" : "bg-white";
  const textColour = theme === "dark" ? "text-white" : "text-black";

  const editorPaneRef = useRef() as React.RefObject<AllotmentHandle>;
  const [testsExpanded, setTestsExpanded] = useState(false);

  const iframeRef = useRef() as React.RefObject<HTMLIFrameElement>;

  type displayPaneEnum = "Preview" | "Description";
  const [displayPane, setDisplayPane] = useLocalStorage<displayPaneEnum>(
    "displayPane",
    "Description"
  );

  const onChangeDisplayPane = (option: displayPaneEnum) => {
    setDisplayPane(option);
  };

  // TODO Split Direction Toggle
  // const [splitDirection, setSplitDirection] = useState<
  //   "Vertical" | "Horizontal"
  // >("Vertical");
  // const onChangeSplitDirection = (option: "Vertical" | "Horizontal") => {
  //   setSplitDirection(option);
  // };

  // snippet, get height of an element
  // useEffect(() => {
  //   if (editorPaneRef.current) {
  //     const height = editorPaneRef.current.offsetHeight;
  //     console.log("Input height", height);
  //   }
  // }, [editorPaneRef]);

  const testIframe = () => {
    const criteria = {
      text: "hello world",
      classNames: ["text-2xl", "text-red-500"],
      element: "h1",
    };
    const iframe = iframeRef.current?.contentDocument;
    if (iframe) {
      const { text, classNames, element } = criteria;
      const elementNode = iframe.querySelector(element);
      if (elementNode) {
        const hasText = (elementNode as any).innerText === text;
        const hasClassNames = classNames.every((className) =>
          elementNode.classList.contains(className)
        );
        if (hasText && hasClassNames) {
          alert(`Test Passed contains ${text} and ${classNames}`);
        } else {
          alert(`Test Failed does not contain ${text} and ${classNames}`);
        }
      } else {
        alert(`Test Failed no element ${element}`);
      }
    }
  };

  return (
    <div className={`flex flex-col h-screen ${bgColour} ${textColour}`}>
      <Navbar
        currentDisplayPane={displayPane}
        onChangeDisplayPane={onChangeDisplayPane}
      />
      <CodeProvider>
        <Allotment defaultSizes={[60, 40]}>
          <Allotment.Pane>
            <Allotment vertical defaultSizes={[1000, 0]} ref={editorPaneRef}>
              <Allotment.Pane>
                <CodeGround />
              </Allotment.Pane>
              <Allotment.Pane>
                <Tests
                  expanded={testsExpanded}
                  onMaximize={() => {
                    if (editorPaneRef.current) {
                      editorPaneRef.current.resize([700, 300]);
                    }
                    setTestsExpanded(true);
                  }}
                  handleTest={testIframe}
                  onMinimize={() => {
                    // making sure editorPaneRef is not null
                    if (editorPaneRef.current) {
                      editorPaneRef.current.resize([1000, 0]);
                    }
                    setTestsExpanded(false);
                  }}
                />
              </Allotment.Pane>
            </Allotment>
          </Allotment.Pane>
          <Allotment.Pane>
            {displayPane == "Preview" ? (
              <Preview ref={iframeRef} />
            ) : displayPane == "Description" ? (
              <Description />
            ) : (
              <></>
            )}
          </Allotment.Pane>
        </Allotment>
      </CodeProvider>
    </div>
  );
};

export default App;
