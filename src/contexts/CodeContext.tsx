import { createContext, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

interface CodeContextInterface {
  html: {
    htmlCode: string;
    onHtmlChange: (htmlCode: string) => void;
  };
  css: {
    cssCode: string;
    onCssChange: (cssCode: string) => void;
  };
  js: {
    jsCode: string;
    onJsChange: (jsCode: string) => void;
  };
}

const CodeContext = createContext<CodeContextInterface>({
  html: {
    htmlCode: "",
    onHtmlChange: (newCode: string): void => {},
  },
  css: {
    cssCode: "",
    onCssChange: (newCode: string): void => {},
  },
  js: {
    jsCode: "",
    onJsChange: (newCode: string): void => {},
  },
});

export const CodeProvider = ({ children }: any) => {
  const [htmlCode, setHtmlCode] = useLocalStorage(
    "htmlCode",
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>*{background-color:white}</style>
  </head>
  <body>
    <main>
      <h1>Lorem, ipsum dolor.</h1>
      <article>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet impedit
        unde blanditiis delectus veniam quis illum inventore cum aliquid
        eligendi quam tempore mollitia maiores aperiam, error perferendis nulla
        dolorum. Earum dignissimos quibusdam fugit ipsa placeat consectetur nisi
        ab amet vitae totam, sint, assumenda maxime aliquam porro sapiente rem
        delectus optio omnis explicabo aliquid quam itaque. Vitae ratione, dicta
        commodi nobis iste laboriosam obcaecati enim esse odit dolore itaque ex,
        praesentium aliquam, debitis quis repellendus voluptatum minima
        perspiciatis maxime incidunt reiciendis! Est animi porro eos enim quidem
        illo quis? Facilis accusamus neque obcaecati unde beatae, iste et illum,
        rem vero aliquid mollitia labore natus explicabo dolorum corrupti minima
        tenetur quae dolorem nesciunt soluta tempora laborum quibusdam? Sed
        similique, ratione laudantium et ut officia, ab quis quae asperiores
        libero illo. Incidunt ad accusantium similique nobis quasi sed. Animi
        voluptate nisi, consequuntur assumenda ullam totam magnam sint quisquam
        nesciunt exercitationem quia quidem suscipit possimus explicabo esse!
        Unde temporibus quod libero officia cum nesciunt earum, ullam iure iste,
        voluptas aliquid dolorum ea possimus quos? Velit, recusandae quae
        excepturi, soluta est quam debitis in enim, laborum autem nulla.
        Voluptas dolorem molestiae possimus dolor eos voluptatum, voluptate
        nihil, molestias repellendus tempora perferendis necessitatibus
        accusamus dolores quidem?
      </article>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus
        exercitationem asperiores repellendus tempore molestias ut officia quia
        commodi impedit.
      </section>
    </main>
  </body>
</html>
  `
  );
  const [cssCode, setCssCode] = useLocalStorage("cssCode", "");
  const [jsCode, setJsCode] = useLocalStorage("jsCode", "");
  const onHtmlChange = (newCode: string): void => {
    setHtmlCode(newCode);
  };
  const onCssChange = (newCode: string): void => {
    setCssCode(newCode);
  };
  const onJsChange = (newCode: string): void => {
    setJsCode(newCode);
  };
  return (
    <CodeContext.Provider
      value={{
        html: { htmlCode, onHtmlChange },
        css: { cssCode, onCssChange },
        js: { jsCode, onJsChange },
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
