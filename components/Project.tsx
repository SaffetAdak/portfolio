"use client";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="relative bg-gray-100 max-w-[42rem] borderBlack shadow-lg rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem]  sm:odd:pl-10 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20  darkModeShadow">
        <div className="pt-4 pb-7 px-5 m:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[19rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-black/55 dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Projects of me"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-odd:right-[initial] group-odd:-left-40 transition
        group-hover:scale-110
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-odd:group-hover:translate-x-3
        group-odd:group-hover:translate-y-3
        group-odd:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
}
