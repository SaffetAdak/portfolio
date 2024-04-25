"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { activeSectionStore } from "@/store/activeSectionStore";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection } = activeSectionStore();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative z-[-1]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/logo.png"
              width="192"
              height="192"
              quality="95"
              alt="Saffet Adak Logo"
              priority={true}
              className="h-24 w-24 object-cover rounded-full shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0 cursor-default"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.75rem] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Saffet.</span> I'm a{" "}
        <span className="font-bold"> junior full-stack developer. </span>I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-md"
          onClick={() => {
            setActiveSection("Contact");
            activeSectionStore.getState().setTimeOfLastClick(Date.now());
          }}
        >
          Contact me!{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer shadow-md borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-[0.15rem] transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/saffet-adak-8b108a2b8/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition cursor-pointer shadow-md borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/SaffetAdak"
          target="_blank"
          className="bg-white text-gray-700 text-[1.15rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition cursor-pointer shadow-md borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
