"use client";
import SectionHeader from "./Section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-4 text-lg text-gray-800 dark:text-gray-100 tracking-wide">
        I'm a{" "}
        <span className="font-semibold">Computer Engineering graduate</span>{" "}
        with a deep passion for{" "}
        <span className="font-semibold">full-stack web development</span>.
        <span className="italic text-gray-600 dark:text-gray-400">
          My favorite part of programming
        </span>{" "}
        is the problem-solving aspect. I <span className="underline">love</span>{" "}
        the thrill of cracking a tough challenge. My core stack includes{" "}
        <span className="font-semibold">React, Next.js, and Prisma</span>, and
        I'm also experienced with{" "}
        <span className="font-semibold">
          TypeScript, MongoDB, and Framer Motion
        </span>
        . I enjoy working with modern tools and frameworks like{" "}
        <span className="font-semibold">Tailwind, GSAP, and Three.js </span>
        to build dynamic and visually appealing applications. I'm always looking
        to learn new technologies, and I'm currently seeking a{" "}
        <span className="font-semibold">
          full-time software developer position
        </span>
        .
      </p>

      <p className="text-lg text-gray-800 dark:text-gray-100">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, going to the gym, and watching cat videos. I also enjoy{" "}
        <span className="font-semibold">learning new things</span>. I'm
        currently focused on my YouTube channel, where I{" "}
        <span className="font-semibold">edit my own videos</span>. I think I'm a
        good editor and love the creative process behind it. I'm also learning
        how to play chess.
      </p>
    </motion.section>
  );
}
