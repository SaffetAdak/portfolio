"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeader from "./Section-header";
import { experiencesData } from "@/lib/data";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-0">
      <SectionHeader>My experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal text-gray-500 !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
