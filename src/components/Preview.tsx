import { useContext } from "react";
import CodeContext from "../contexts/CodeContext";

const Preview = () => {
  const { html, css, js } = useContext(CodeContext);
  const linkedHtml = html.htmlCode.replace(
    "</head>",
    `<style>${css.cssCode
      .replace(/ /g, "")
      .replace(/  /g, "")
      .replace(/\n/g, "")}</style></head>`
  );
  return <iframe srcDoc={linkedHtml} className="w-full h-full"></iframe>;
};

export default Preview;
