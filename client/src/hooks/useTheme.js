import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isLight = theme === 'light';
  const isDark = theme === 'dark';

  const switchTheme = () => {
    if (isLight) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return { isLight, isDark, switchTheme };
};
