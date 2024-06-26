"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import type { Theme } from "../lib/types";
import { useEffect, useState } from "react";
import { themeStore } from "@/store/themeStore";

export default function ThemeSwitch() {
  const { theme, setTheme } = themeStore();

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-gray-950 dark:border-opacity-40 dark:text-gray-50 dark:text-opacity-80 darkModeShadow"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
