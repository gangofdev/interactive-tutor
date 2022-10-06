import { useContext } from "react";
import CodeContext from "../contexts/CodeContext";

const Preview = () => {
  const { html, css, js } = useContext(CodeContext);
  const linkedHtml = `${html.htmlCode}<style>${css.cssCode}</style><script>${js.jsCode}</script>`; // adding css and js to html

  return <iframe srcDoc={linkedHtml} className="w-full h-full"></iframe>;
};

export default Preview;
