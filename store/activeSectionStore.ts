import type { Store } from "@/lib/types";
import { create } from "zustand";

export const activeSectionStore = create<Store>()((set) => ({
  activeSection: "Home",
  setActiveSection: (activeSection) => set(() => ({ activeSection })),
  timeOfLastClick: 0,
  setTimeOfLastClick: (timeOfLastClick) => set(() => ({ timeOfLastClick })),
}));
