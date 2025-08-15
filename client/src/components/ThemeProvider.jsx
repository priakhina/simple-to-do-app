import { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeProvider = ({ children }) => {
  // Check if the user's system has a preference for a dark color scheme by using the `prefers-color-scheme` media query
  // Returns "true" if the system theme is set to dark, otherwise returns "false"
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [theme, setTheme] = useState(() => {
    // Try to get the user's saved theme preference from local storage
    // Possible saved values are "dark" or "light"
    const savedTheme = localStorage.getItem('theme');

    // Return saved preference if it exists
    if (savedTheme) return savedTheme;

    // If there is no saved preference, fall back to the system preference detected above
    return systemPrefersDark;
  });

  useEffect(() => {
    // Add or remove "dark" class on the <html> element based on the theme value
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Return the context provider that will provide the `theme` state and its updater function to all child components
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
