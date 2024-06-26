"use client";

import { Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SunMoon />;

  return (
    <div>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Moon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <SunMoon />
        </button>
      )}
    </div>
  );
}
