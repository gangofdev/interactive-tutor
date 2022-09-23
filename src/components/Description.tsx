import { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import CodeContext from "../contexts/CodeContext";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Description() {
  const { htmlCode } = useContext(CodeContext);

  let [categories] = useState({
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nulla dignissimos doloribus, labore blanditiis temporibus repellat sint quisquam quo in nihil cum sed quas nam cupiditate recusandae, deleniti quae dolorem.",
    Tests:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nulla dignissimos doloribus, labore blanditiis temporibus repellat sint quisquam quo in nihil cum sed quas nam cupiditate recusandae, deleniti quae dolorem.",
  });

  return (
    <div className="p-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-black p-1">
          <Tab
            key={"Preview"}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Preview
          </Tab>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full h-full">
          <Tab.Panel
            key={"Preview"}
            className={classNames(
              "rounded-lg bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              "h-full"
            )}
          >
            <iframe srcDoc={htmlCode} className="w-full h-full"></iframe>
          </Tab.Panel>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {posts}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
