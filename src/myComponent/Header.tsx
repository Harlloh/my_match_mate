"use client"
import { Bell, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  showNotifications?: boolean;
}

const Header = ({ title, showNotifications = true }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on system preference or stored preference
  useEffect(() => {
    // Check local storage first
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Fall back to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md p-4 flex justify-between items-center border-b border-border">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Sun size={18} className={`transition-opacity ${isDarkMode ? 'opacity-50' : 'opacity-100'}`} />
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className={`
    transition-shadow
    ${isDarkMode
                ? ""                                 /* no extra shadow in dark */
                : "shadow-md ring-1 ring-gray-300"   /* visible in light mode */
              }
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-match-green
  `}
          />
          <Moon size={18} className={`transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-50'}`} />
        </div>
        {showNotifications && (
          <Link href="/notifications" className="relative p-2">
            <Bell size={24} />
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-match-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-match-red"></span>
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
