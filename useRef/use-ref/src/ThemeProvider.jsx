import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const getInitialTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    return theme;
  }

  const prefer = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefer ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = () => {
    const choosedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', choosedTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
