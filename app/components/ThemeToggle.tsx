"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full transition-colors border hover:opacity-80"
      style={{ backgroundColor: 'var(--card-border)', borderColor: 'var(--card-border)' }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
      ) : (
        <Moon className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
      )}
    </button>
  );
}
