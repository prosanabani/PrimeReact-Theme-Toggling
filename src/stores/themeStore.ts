import { create } from "zustand";
import { getInitialTheme } from "../utils/functions";

type TThemeStore = {
    actions :{
        setTheme: (theme: 'light' | 'dark' | 'system') => void;
    }
    theme: 'light' | 'dark' | 'system';
}

const useThemeStore = create<TThemeStore>((set) => ({
    actions :{
        setTheme: (theme) => set({ theme }),
    },
    theme :getInitialTheme() // get theme from localStorage
}))


export default useThemeStore;
export const { setTheme } = useThemeStore.getState().actions;

