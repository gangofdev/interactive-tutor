import { createContext, useState } from "react";

const ThemeContext = createContext({ theme: "dark", switchTheme: () => {} });

export const ThemeProvider = ({ children }: any) => {
  const isDarkPreferred = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useState(isDarkPreferred ? "dark" : "light");
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
