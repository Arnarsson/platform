"use client";
import { useTheme } from "next-themes";
import Button from "./button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = (theme === "system" ? resolvedTheme : theme) || "light";
  return (
    <Button
      variant="secondary"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {mounted ? (current === "dark" ? "🌒" : "🌞") : "🌓"}
    </Button>
  );
}

