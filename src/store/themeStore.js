import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isSpace: true,
  toggleTheme: () => set((state) => ({ isSpace: !state.isSpace })),
}));