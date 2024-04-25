import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type SectionStore = {
  activeSection: SectionName;
  setActiveSection: (activeSection: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (timeOfLastClick: number) => void;
};

export type ThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
};

export type ContactFormEmailProps = {
  message: string;
  email: string;
};

export type Theme = "light" | "dark";
