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

const App = () => {
  const { theme }: any = useContext(ThemeContext);
  // refactor TODO
  const bgColour = theme === "dark" ? "bg-[#282C34]" : "bg-white";
  const textColour = theme === "dark" ? "text-white" : "text-black";

  const editorPaneRef = useRef() as React.RefObject<AllotmentHandle>;
  const [testsExpanded, setTestsExpanded] = useState(false);

  type displayPaneEnum = "Preview" | "Description";
  const [displayPane, setDisplayPane] = useState<displayPaneEnum>("Preview");
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
  return (
    <div className={`flex flex-col h-screen ${bgColour} ${textColour}`}>
      <Navbar
        currentDisplayPane={displayPane}
        onChangeDisplayPane={onChangeDisplayPane}
      />
      <CodeProvider>
        <Allotment>
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
              <Preview />
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
