import type { SectionStore } from "@/lib/types";
import { create } from "zustand";

export const activeSectionStore = create<SectionStore>()((set) => ({
  activeSection: "Home",
  setActiveSection: (activeSection) => set(() => ({ activeSection })),
  timeOfLastClick: 0,
  setTimeOfLastClick: (timeOfLastClick) => set(() => ({ timeOfLastClick })),
}));
