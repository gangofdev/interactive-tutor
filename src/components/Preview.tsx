import React, { useContext } from "react";
import CodeContext from "../contexts/CodeContext";

const Preview = () => {
  const { htmlCode } = useContext(CodeContext);
  return <iframe srcDoc={htmlCode} className="w-full h-full"></iframe>;
};

export default Preview;
