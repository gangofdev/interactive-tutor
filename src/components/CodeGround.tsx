import { useContext, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html as htmlPlugin } from "@codemirror/lang-html";
import { css as cssPlugin } from "@codemirror/lang-css";
import { javascript as jsPlugin } from "@codemirror/lang-javascript";
import ThemeContext from "../contexts/ThemeContext";
import CodeContext from "../contexts/CodeContext";
import BufferPicker from "./BufferPicker";
import EditorSettings from "./EditorSettings";

export type FontSizeEnum =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";

const CodeGround = () => {
  const buffers = ["HTML", "CSS", "JS"];
  const { theme }: any = useContext(ThemeContext);
  const { html, css, js } = useContext(CodeContext);
  const { htmlCode, onHtmlChange } = html;
  const { cssCode, onCssChange } = css;
  const { jsCode, onJsChange } = js;
  const [buffer, setBuffer] = useState(buffers[0]);
  const [fontSize, setFontSize] = useState<FontSizeEnum>("text-lg");
  const onBufferChange = (buffer: string) => {
    setBuffer(buffer);
  };
  const onChangeFontSize = (fontSize: FontSizeEnum) => {
    setFontSize(fontSize);
  };

  return (
    <div className="overflow-auto h-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <BufferPicker
          buffers={buffers}
          onBufferChange={onBufferChange}
          currentBuffer={buffer}
        />
        <EditorSettings
          currentFontSize={fontSize}
          onChangeFontSize={onChangeFontSize}
        />
      </div>
      <CodeMirror
        className={fontSize}
        theme={theme}
        value={buffer == "HTML" ? htmlCode : buffer == "CSS" ? cssCode : jsCode}
        extensions={
          buffer == "HTML"
            ? [htmlPlugin()]
            : buffer == "CSS"
            ? [cssPlugin()]
            : [jsPlugin()]
        }
        onChange={
          buffer == "HTML"
            ? onHtmlChange
            : buffer == "CSS"
            ? onCssChange
            : onJsChange
        }
      />
    </div>
  );
};

export default CodeGround;
