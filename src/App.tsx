import React, { useState } from "react";
import CodeGround from "./components/CodeGround";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import { CodeProvider } from "./contexts/CodeContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [theme, setTheme] = useState("dark");
  const handleChange = (newValue: string) => {
    setHtmlCode(newValue);
  };
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="bg-[#282C34] h-screen">
      <ThemeProvider>
        <Navbar></Navbar>
        <CodeProvider>
          <div className="grid grid-cols-2 h-full">
            <CodeGround></CodeGround>
            <Description></Description>
          </div>
        </CodeProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
