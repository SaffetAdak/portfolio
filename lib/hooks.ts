import { activeSectionStore } from "@/store/activeSectionStore";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { timeOfLastClick } = activeSectionStore();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      activeSectionStore.getState().setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName]);

  return { ref };
}
