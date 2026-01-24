"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? null;

    // If user already chose before, use it.
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
      setTheme(saved);
      return;
    }

    // Otherwise, follow system preference.
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial: Theme = prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  const toggle = () => {
    if (!theme) return;
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        border: "1px solid var(--border)",
        background: "var(--surface)",
        color: "var(--text)",
        borderRadius: 999,
        padding: "10px 12px",
        lineHeight: 1,
        cursor: "pointer",
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
