"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Detect system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial value
    setDarkMode(systemPrefersDark.matches);
    if (systemPrefersDark.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Listen for system changes (light ↔ dark)
    const listener = (e) => {
      setDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    systemPrefersDark.addEventListener("change", listener);

    return () => {
      systemPrefersDark.removeEventListener("change", listener);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
