
/**
 * Retrieves the initial theme from localStorage, or defaults to 'light' if no theme is stored.
 * @returns 'light', 'dark', or 'system'
 */
export const getInitialTheme = (): 'light' | 'dark' | 'system' => {
    const storedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | 'system'
      | null;
    return storedTheme ? storedTheme : 'light'; // Default to 'light' if no theme is stored
  };
  