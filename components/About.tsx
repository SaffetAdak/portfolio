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
      <p className="mb-3">
        I'm a highly motivated and passionate{" "}
        <span className="font-medium">Computer Engineering</span>, student with
        a deep interest in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">React, Next.js, Node.js, and Prisma</span>
        . I am also familiar with TypeScript and MongoDB, Framer Motion. I am
        always looking to learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">internship, full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, going to gym, watching cat videos. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning{" "}
        <span className="font-medium">video editing and photoshop</span>. I'm
        also learning how to play the chess.
      </p>
    </motion.section>
  );
}
