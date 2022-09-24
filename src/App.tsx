import React, { useState } from "react";
import CodeGround from "./components/CodeGround";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import { CodeProvider } from "./contexts/CodeContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

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
          <Allotment minSize={100}>
            <Allotment.Pane>
              <Allotment vertical>
                <Allotment.Pane minSize={100}>
                  <div className="overflow-auto h-full">
                    <CodeGround />
                  </div>
                </Allotment.Pane>
                <Allotment.Pane snap>
                  <div>bottom</div>
                </Allotment.Pane>
              </Allotment>
            </Allotment.Pane>
            <Allotment.Pane>
              <Description />
            </Allotment.Pane>
          </Allotment>
        </CodeProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
