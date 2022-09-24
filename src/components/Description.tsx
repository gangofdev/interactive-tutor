import { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import CodeContext from "../contexts/CodeContext";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Description() {
  const { htmlCode } = useContext(CodeContext);

  const Description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nulla dignissimos doloribus, labore blanditiis temporibus repellat sint quisquam quo in nihil cum sed quas nam cupiditate recusandae, deleniti quae dolorem.";

  return (
    <div className="p-2 sm:px-0 h-full">
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
          <Tab
            key={"Description"}
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
            "Description"
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full h-full">
          <Tab.Panel key={"Preview"} className={classNames("h-full")}>
            <iframe srcDoc={htmlCode} className="w-full h-full"></iframe>
          </Tab.Panel>
          <Tab.Panel key={"Description"} className="p-4">
            {Description}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
