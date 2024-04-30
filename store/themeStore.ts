import type { ThemeStore } from "@/lib/types";
import { create } from "zustand";

export const themeStore = create<ThemeStore>()((set) => ({
  theme: "dark",
  setTheme: (theme) => set(() => ({ theme })),
}));
