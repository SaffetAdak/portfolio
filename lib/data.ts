import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dailyJournal from "@/public/dailyJournal.png";
import tinDog from "@/public/tinDog.png";
import toDoList from "@/public/toDoList.png";
import emlakgpt from "@/public/emlakgpt.png";
import shoppie from "@/public/shoppie.png";
import evently from "@/public/evently.png";
import converter from "@/public/converter.png";
import github from "@/public/github.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Volunteer Work",
    location: "Sosyal Inovasyon Ajansı",
    description:
      "Helped to create WordPress website. Took trainings about social inovations, publishing, culture industries",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Engineering Intern",
    location: "Anadolu Birlik Holding",
    description: "Worked on SAP department. Learned ABAP programming",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Volunteer Work ",
    location: "Berka Bilgi Teknolojileri",
    description:
      "Experienced real life SQL database management.Worked in the field with customer support service.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "EmlakGPT",
    description:
      "This is our graduation project. It's a house finder website integrated with OpenAI API. I worked on the front-end and back-end in this project.It has authentication, searching, filtering, database management, data collecting and more features.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "React",
      "Next.js",
      "Prisma",
      "OpenAI API",
      "MongoDB",
      "Clerk",
    ],
    imageUrl: emlakgpt,
  },
  {
    title: "Shoppie",
    description:
      "I made this project when I was learning React. It's a simple e-commerce website where you can add and remove items from the cart. It uses json server REST API.",
    tags: [
      "JavaScript",
      "React",
      "Redux",
      "Reactstrap",
      "json server",
      "REST API",
    ],
    imageUrl: shoppie,
  },
  {
    title: "Currency Converter",
    description:
      "This project is going to look like this concept design and I am still working on it. It's a currency converter app where you can convert currencies. It uses ExchangeRate-API.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "React",
      "NextUI",
      "Framer Motion",
    ],
    imageUrl: converter,
  },
  {
    title: "Evently",
    description:
      "I am coding along this project from a video and still continuing. It's event organization web app with authentication, event management, filtering, payment and more features.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "MongoDB",
      "Stripe",
      "Clerk",
    ],
    imageUrl: evently,
  },
  {
    title: "Daily Journal",
    description:
      "I made this project when I was learning Express and Ejs. It's a simple journal app where you can write your thoughts and save them.",
    tags: ["JavaScript", "HTML", "CSS", "Express", "Ejs"],
    imageUrl: dailyJournal,
  },
  {
    title: "TinDog",
    description:
      "A mockup of Tinder but for dogs. I made this project when I was learning Bootstrap.",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: tinDog,
  },
  {
    title: "To Do List",
    description:
      "A simple to-do list app. I made this project when I was learning Express and Ejs",
    tags: ["JavaScript", "HTML", "CSS", "Express", "Ejs"],
    imageUrl: toDoList,
  },
  {
    title: "More Projects on my Github",
    description: " I have more projects on my Github link. ",
    tags: ["JavaScript"],
    imageUrl: github,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "Redux",
  "MySQL",
  "NextUI",
  "Shadcn",
  "SQL",
  "Express",
  "Bootstrap",
  "OpenAI API",
  "REST API",
  "Python",
  ,
] as const;
