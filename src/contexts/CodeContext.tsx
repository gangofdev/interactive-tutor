import { createContext, useState } from "react";

const CodeContext = createContext({
  htmlCode: "",
  onHtmlChange: (newCode: string) => {},
});

export const CodeProvider = ({ children }: any) => {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
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
  `);
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
