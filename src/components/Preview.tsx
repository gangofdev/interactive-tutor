import React from "react";
import { useContext } from "react";
import CodeContext from "../contexts/CodeContext";

const Preview = React.forwardRef<HTMLIFrameElement, any>((props, ref) => {
  const { html, css, js } = useContext(CodeContext);
  const linkedHtml = `${html.htmlCode}<style>${css.cssCode}</style><script>${js.jsCode}</script>`; // adding css and js to html
  return (
    <iframe srcDoc={linkedHtml} ref={ref} className="w-full h-full"></iframe>
  );
});

export default Preview;
