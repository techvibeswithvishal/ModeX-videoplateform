"use client";

interface ThemeToggleProps {
  dark: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ dark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white transition-colors"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
