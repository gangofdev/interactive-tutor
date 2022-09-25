import React, { useContext, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import ThemeContext from "../contexts/ThemeContext";
import CodeContext from "../contexts/CodeContext";
import BufferPicker from "./BufferPicker";

const CodeGround = () => {
  const buffers = ["HTML", "CSS", "JS"];
  const { theme }: any = useContext(ThemeContext);
  const { htmlCode, onHtmlChange } = useContext(CodeContext);
  const jsCode = "";
  const cssCode = "";
  const [buffer, setBuffer] = useState(buffers[0]);
  const onBufferChange = (buffer: string) => {
    setBuffer(buffer);
  };
  return (
    <div className="overflow-auto h-full flex flex-col">
      <BufferPicker
        buffers={buffers}
        onBufferChange={onBufferChange}
        currentBuffer={buffer}
      />
      <CodeMirror
        className="text-xl"
        theme={theme}
        value={buffer == "HTML" ? htmlCode : buffer == "CSS" ? cssCode : jsCode}
        extensions={
          buffer == "HTML"
            ? [html()]
            : buffer == "CSS"
            ? [css()]
            : [javascript()]
        }
        onChange={
          buffer == "HTML"
            ? onHtmlChange
            : buffer == "CSS"
            ? () => {}
            : () => {}
        }
      />
    </div>
  );
};

export default CodeGround;
