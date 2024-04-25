import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Store = {
  activeSection: SectionName;
  setActiveSection: (activeSection: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (timeOfLastClick: number) => void;
};

export type ContactFormEmailProps = {
  message: string;
  email: string;
};
