'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-md flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
