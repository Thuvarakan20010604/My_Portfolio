'use client';

import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

const getCurrentTheme = (): Theme =>
  typeof document !== "undefined" && document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);

  useEffect(() => {
    const syncTheme = () => setTheme(getCurrentTheme());
    window.addEventListener("themechange", syncTheme);
    return () => window.removeEventListener("themechange", syncTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("themechange"));
    setTheme(nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-card theme-border inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:opacity-90"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <BsSun className="h-4 w-4" /> : <BsMoonStars className="h-4 w-4" />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
