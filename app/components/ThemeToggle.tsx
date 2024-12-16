// components/ThemeToggle.tsx
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a preferred theme stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to the system theme preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-300"
    >
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
