import { createContext, useState } from "react";

const CodeContext = createContext({
  htmlCode: "",
  onHtmlChange: (newCode: string) => {},
});

export const CodeProvider = ({ children }: any) => {
  const [htmlCode, setHtmlCode] = useState("");
  const onHtmlChange = (newCode: string) => {
    setHtmlCode(newCode);
  };
  return (
    <CodeContext.Provider value={{ htmlCode, onHtmlChange }}>
      {children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
