// @ts-nocheck
import { useState, useEffect } from 'react';
import { Moon, Sparkles, Sun } from 'lucide-react';
import { useThemeStore } from '../stores/useThemeStore';

const labels = {
  light: 'Light mode',
  dark: 'Dark mode',
  'dashboard-dark': 'Dashboard Dark mode',
};

export default function ThemeToggle() {
  const { theme, cycleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Sparkles;
  const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'dashboard dark' : 'light';

  return (
    <button
      onClick={cycleTheme}
      className="theme-toggle flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`${labels[theme]}. Click for ${nextTheme}.`}
    >
      <Icon className="h-5 w-5 transition-all duration-300" />
      <span className="sr-only">{labels[theme]}</span>
    </button>
  );
}
