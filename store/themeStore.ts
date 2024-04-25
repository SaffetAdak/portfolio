import type { ThemeStore } from "@/lib/types";
import { create } from "zustand";

export const themeStore = create<ThemeStore>()((set) => ({
  theme: "light",
  setTheme: (theme) => set(() => ({ theme })),
}));
