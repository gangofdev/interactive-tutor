import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import ThemeContext from "../contexts/ThemeContext";
import CodeContext from "../contexts/CodeContext";

const CodeGround = () => {
  const { theme }: any = useContext(ThemeContext);
  const { htmlCode, onHtmlChange } = useContext(CodeContext);
  return (
    <CodeMirror
      className="text-sm"
      theme={theme}
      value={htmlCode}
      height="100%"
      extensions={[html()]}
      onChange={onHtmlChange}
    />
  );
};

export default CodeGround;
