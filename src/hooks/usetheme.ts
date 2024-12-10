import { PrimeReactContext } from 'primereact/api';
import { useContext, useEffect } from 'react';
import useThemeStore, { setTheme } from '../stores/themeStore';

export const useTheme = () => {
  const darkTheme = 'lara-dark-blue';
  const lightTheme = 'lara-light-blue';
  const themeLink = 'theme-link';
  const changeTheme = useContext(PrimeReactContext)?.changeTheme;
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    handleChange(); // Initial check
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | 'system'
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const applyTheme = () => {
      const rootElement = document.documentElement;
      if (theme === 'dark') {
        // UnoCSS: Add `dark` class in case UNO was used
        rootElement.classList.add('dark');
        // PrimeReact: Apply dark theme
        // @ts-expect-error fix later
        changeTheme(lightTheme, darkTheme, themeLink);
      } else if (theme === 'light') {
        // UnoCSS: Remove `dark` class in case UNO was used
        rootElement.classList.remove('dark');
        // PrimeReact: Apply light theme
        // @ts-expect-error fix later
        changeTheme(darkTheme, lightTheme, themeLink);
      } else if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light';
        if (systemTheme === 'dark') {
          // UnoCSS: Add `dark` class in case UNO was used
          rootElement.classList.add('dark');
          // PrimeReact: Apply dark theme
          // @ts-expect-error fix later
          changeTheme(lightTheme, darkTheme, themeLink);
        } else {
          // UnoCSS: Remove `dark` class in case UNO was used
          rootElement.classList.remove('dark');
          // PrimeReact: Apply light theme
          // @ts-expect-error fix later
          changeTheme(darkTheme, lightTheme, themeLink);
        }
      }
    };

    applyTheme();
  }, [changeTheme, theme]);
};
