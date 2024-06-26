"use client";
import { projectsData } from "@/lib/data";
import SectionHeader from "./Section-header";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-0" id="projects">
      <SectionHeader>My Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
