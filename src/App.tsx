import React, { useState } from "react";
import CodeGround from "./components/CodeGround";
import Description from "./components/Description";
import Navbar from "./components/Navbar";

const App = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const handleChange = (newValue: string) => {
    setHtmlCode(newValue);
  };
  return (
    <div className="bg-[#282C34] h-screen">
      <Navbar></Navbar>
      <div className="grid grid-cols-2 h-full">
        <CodeGround htmlCode={htmlCode} onChange={handleChange}></CodeGround>
        <Description htmlCode={htmlCode} onChange={handleChange}></Description>
      </div>
    </div>
  );
};

export default App;
