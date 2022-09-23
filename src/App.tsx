import React, { useState } from "react";
import CodeGround from "./components/CodeGround";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import { CodeProvider } from "./contexts/CodeContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import "react-reflex/styles.css";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="bg-[#282C34] flex flex-col h-screen">
      <ThemeProvider>
        <Navbar></Navbar>
        <CodeProvider>
          <ReflexContainer orientation="vertical" className="flex flex-grow">
            <ReflexElement>
              <ReflexContainer orientation="horizontal">
                <ReflexElement
                  propagateDimensionsRate={200}
                  propagateDimensions={true}
                  flex={0.8}
                >
                  <CodeGround />
                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement className="bottom-pane">
                  <div className="pane-content">
                    <label className="text-white">Bottom Pane</label>
                  </div>
                </ReflexElement>
              </ReflexContainer>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="right-pane" flex={0.2}>
              <div className="pane-content">
                <Description></Description>
              </div>
            </ReflexElement>
          </ReflexContainer>
        </CodeProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
