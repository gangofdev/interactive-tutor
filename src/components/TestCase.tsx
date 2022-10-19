import { Disclosure } from "@headlessui/react";
import React from "react";

interface TestCaseProps {
  id: number;
  title: string;
  errorText: string;
  status: string;
}
const TestCase = ({ id, title, errorText, status }: TestCaseProps) => {
  return (
    <Disclosure>
      <Disclosure.Button className="p-2 text-green-400 text-lg">
        <div
          className={`flex  ${
            status === "pass"
              ? "text-green-400"
              : status === "fail"
              ? "text-red-400"
              : "text-yellow-400"
          } text-xl justify-start gap-2`}
        >
          <div>
            {status === "pass" ? "✅" : status === "fail" ? "❌" : "🤔"}
          </div>
          <div className="px-4">{title}</div>
        </div>
      </Disclosure.Button>
      <Disclosure.Panel className="flex font-mono font-light justify-start pl-16 text-red-500">
        {status == "fail" ? errorText : ""}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default TestCase;
