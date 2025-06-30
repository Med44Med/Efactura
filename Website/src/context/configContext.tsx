import React from "react";
import { ConfigContext } from "./contexts";
import { useState, useEffect } from "react";

const ConfigContextProvider = ({ children }) => {
  const html = document.getElementsByTagName("html")[0];

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const toggleTheme = () => {
    setTheme((perv) => {
      if (perv === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  useEffect(() => {
    if (theme) {
      return;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("theme", "dark");
      setTheme('dark')
    } else {
      localStorage.setItem("theme", "light");
      setTheme('light')
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      html.setAttribute("theme", "dark");
    } else {
      html.setAttribute("theme", "light");
    }
  }, [theme]);

  return <ConfigContext value={{ theme,toggleTheme }}>{children}</ConfigContext>;
};

export default ConfigContextProvider;
