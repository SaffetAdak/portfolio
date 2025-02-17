import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import toDoList from "@/public/toDoList.png";
import emlakgpt from "@/public/emlakgpt.png";
import shoppie from "@/public/shoppie.png";
import evently from "@/public/evently.png";
import converter from "@/public/converter.png";
import fastFooood from "@/public/fastFooood.png";
import iphone from "@/public/iphone.png";
import brainwave from "@/public/brainwave.png";
import imaginarium from "@/public/imaginarium.png";
import shoeStop from "@/public/shoeStop.png";
import heatmap from "@/public/heatmap.png";
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
    title: "Engineering Intern",
    location: "Wiser RFID Software",
    description:
      "Worked on a Python Emotion/Face Recognition project with the team.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
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
    link: "https://github.com/osmanyusufakkus/emlakgptnextjs",
  },
  {
    title: "Shoe Stop",
    description:
      "Fully functional e-commerce website. It has authentication, filtering, database management, payment and more features. I made this project to test my knowledge on Full-Stack Web Development.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "React",
      "Next.js",
      "MongoDB",
      "Prisma",
      "Stripe",
      "NextAuth",
      "GSAP",
      "Lottie",
      "Toast",
      "Swiper",
      "qs",
      "swr",
    ],
    imageUrl: shoeStop,
    link: "https://github.com/SaffetAdak/shoe-shop",
  },
  {
    title: "Heatmap",
    description:
      "Implementation of a GitHub heatmap using React. It has different color schemes, database management, and more features. I made this project to improve my knowledge of Back-End Development and Database Management.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "React",
      "MongoDB",
      "Prisma",
      "Swr",
      "Qs",
      "Zustand",
    ],
    imageUrl: heatmap,
    link: "https://github.com/SaffetAdak/heatmap",
  },
  {
    title: "İphone 15 Pro Website Clone",
    description:
      "I made this project along with a video. It's a clone of Apple's iPhone 15 Pro website. The aim of this project is to learn GSAP animations, Three.js and Vite",
    tags: ["JavaScript", "Tailwind", "React", "Vite", "GSAP", "Three.js"],
    imageUrl: iphone,
    link: "https://github.com/SaffetAdak/apple-website-clone",
  },
  {
    title: "Brainwave",
    description:
      "I made this project along with a video to learn creating modern websites with parallax effects, bento box layout and stylish UI design. It's a landing page for a fictional company.",
    tags: ["JavaScript", "Tailwind", "React", "Vite", "ParaLLax Effect", "UI"],
    imageUrl: brainwave,
    link: "https://github.com/SaffetAdak/brainwave-website",
  },

  {
    title: "Imaginarium",
    description:
      "This is a project to test my knowledge of using GSAP animations, parallax effects, bentobox layout and stylish UI design. It's a landing page for a fictional company.",
    tags: [
      "JavaScript",
      "Tailwind",
      "Next.js",
      "React",
      "UI",
      "GSAP",
      "Parallax Effect",
    ],
    imageUrl: imaginarium,
    link: "https://github.com/SaffetAdak/imaginarium",
  },
  {
    title: "Currency Converter",
    description:
      "This is a currency converter web app. It uses Frankfurter API to get the latest exchange rates. I made this project to test my knowledge of using Public APIs.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "React",
      "NextUI",
      "Three.js",
      "Framer Motion",
    ],
    imageUrl: converter,
    link: "https://github.com/SaffetAdak/currency-converter",
  },
  {
    title: "Fast Fooood",
    description:
      "I made this project for my internship application. It's a clone of a company's custom packet page creator page. This project is the different version of the original project but it has the same features.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "React",
      "Zustand",
      "Mui",
    ],
    imageUrl: fastFooood,
    link: "https://github.com/SaffetAdak/fast-fooood-custom-packet",
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
    link: "https://github.com/SaffetAdak/Next.Js-Course-event_platform",
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
    link: "",
  },
  {
    title: "To Do List",
    description:
      "A simple to-do list app. I made this project when I was learning Express and Ejs",
    tags: ["JavaScript", "HTML", "CSS", "Express", "Ejs"],
    imageUrl: toDoList,
    link: "https://github.com/SaffetAdak/todolist-v1",
  },
  {
    title: "More Projects on my Github",
    description: " I have more projects on my Github link. ",
    tags: ["JavaScript", "TypeScript", "React", "Next.js", "MongoDB", "Prisma"],
    imageUrl: github,
    link: "https://github.com/SaffetAdak?tab=repositories",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "SQL",
  "MongoDB",
  "MySQL",
  "Prisma",
  "REST API",
  "OpenAI API",
  "Tailwind",
  "Bootstrap",
  "NextUI",
  "Shadcn",
  "Framer Motion",
  "GSAP",
  "Lottie",
  "Toast",
  "Swiper",
  "Zustand",
  "Parallax Effect",
  "Redux",
  "Clerk",
  "Stripe",
  "NextAuth",
  "json server",
  "Mui",
  "Git",
  "Python",
  "Vite",
  "Three.js",
  "qs",
  "swr",
  "Reactstrap",
  "Ejs",
] as const;
