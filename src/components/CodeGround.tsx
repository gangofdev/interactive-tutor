import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";

interface CodeGroundProps {
  htmlCode: string;
  onChange: (newValue: string) => void;
}
const CodeGround = ({ htmlCode, onChange }: CodeGroundProps) => {
  return (
    <CodeMirror
      className="text-lg"
      theme={"dark"}
      value={htmlCode}
      height="100%"
      extensions={[html()]}
      onChange={onChange}
    />
  );
};

export default CodeGround;
