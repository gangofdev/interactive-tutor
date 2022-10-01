import { BookOpenIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import ThemeContext from "../contexts/ThemeContext";
import remarkGfm from "remark-gfm";

const markdown = `
# Introduction To Garlic Bread

The history of garlic bread with cheese is a contentious issue. Some say the food was invented
in ancient Rome, where bread was rubbed with garlic and then baked. Others say the food was
invented in ancient India by great Indian chef Govardhan Ramsay.

## The global pandemic

Garlic bread with cheese has spread across the globe, with restaurants in every major city
offering their own take on the dish. In the United States, garlic bread with cheese is often
served as an appetizer, and is sometimes accompanied by a side of marinara sauce for dipping.

### Table

| Garlics | Breads | Countries | Rating |
|---|---|---|---|
| Nubia | Naan | India | 10 |
| Lomagne | Pita | Greece | 10 |
| Drôme | Croissant | France | 10 |

### Tests
* [x] passed
* [ ] not passed
`;

export default function Description() {
  const { theme } = useContext(ThemeContext);
  const proseColor = theme === "dark" ? "prose-invert" : "";
  const bgColour = theme === "dark" ? "bg-gray-600" : "bg-gray-200";
  const sectionName = "Introduction to Garlic Bread";
  return (
    <React.Fragment>
      <div className="flex flex-col h-full">
        <div
          className={`flex flex-row justify-start gap-2 ${bgColour} px-4 py-2 bg-opacity-50 items-center`}
        >
          <BookOpenIcon className="w-6 h-auto" />
          <h1 className="text-2xl">Study</h1>
        </div>

        <div
          className={`flex flex-row justify-start px-4 pt-4 uppercase opacity-50 gap-2`}
        >
          <a>{sectionName}</a>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={markdown}
          className={`prose ${proseColor} px-4 py-2`}
        />
      </div>
    </React.Fragment>
  );
}
