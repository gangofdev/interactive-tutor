import React, { useState, useContext } from "react";
import CodeGround from "./components/CodeGround";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import { CodeProvider } from "./contexts/CodeContext";
import ThemeContext from "./contexts/ThemeContext";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const App = () => {
  const { theme }: any = useContext(ThemeContext);
  // refactor TODO
  const bgColour = theme === "dark" ? "bg-[#282C34]" : "bg-white";
  return (
    <div className={`flex flex-col h-screen ${bgColour}`}>
      <Navbar />
      <CodeProvider>
        <Allotment minSize={100}>
          <Allotment.Pane>
            <Allotment vertical>
              <Allotment.Pane minSize={100}>
                <div className="overflow-auto h-ful">
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
    </div>
  );
};

export default App;
