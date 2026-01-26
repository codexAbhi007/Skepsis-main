"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { useState, useEffect } from "react";
import { SkepsisLogo } from "../SkepsisLogo";
import { Moon, Sun } from "lucide-react";

// ...existing code...
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if dark mode is enabled in localStorage or system preference
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    // full-width sticky wrapper so background + shadow span edge-to-edge
    <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-sm">
      <header className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo Section */}
        <Link
          href="/"
          aria-label="Go to home"
          className="flex items-center gap-4"
        >
          <SkepsisLogo />
        </Link>

        {/* Navigation Section */}
        <nav
          className={`${
            isMenuOpen ? "flex bg-white dark:bg-gray-950" : "hidden"
          } absolute top-20 left-0 w-full md:static md:flex md:w-auto md:gap-8 items-center flex-col md:flex-row transition-all duration-300 ease-in-out shadow-md md:shadow-none z-50`}
        >
          {content.header.navItems.map((item) => (
            <Link
              key={item}
              href={
                item === "team"
                  ? "/teams"
                  : item === "PDR"
                  ? "/project-dev-rush"
                  : item === "certificate"
                    ? "/certificate"
                    : `/#${item}`
              }
              className="text-sm font-medium capitalize text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 ease-in-out py-2 md:py-0 px-4 md:px-0"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div></div>

        {/* Call-to-Action Button and Theme Toggle - Desktop Only */}
        <div className="hidden md:flex items-center gap-4">
          {isMounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          )}
          <a href="https://t.me/skepsis2024">
            <Button
              variant="secondary"
              className="text-blue border-black border-[1px] hover:bg-black/90 rounded-3xl hover:text-white hover:scale-105 hover:opacity-90 transition-transform duration-400 ease-in-out"
            >
              {content.header.cta}
            </Button>
          </a>
        </div>

        {/* Mobile: Theme Toggle + Hamburger Menu */}
        <div className="md:hidden flex items-center gap-2">
          {isMounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          )}
          <button
            className="flex flex-col gap-1 justify-center items-center w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`h-1 w-full bg-black dark:bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-black dark:bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-black dark:bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>
    </div>
  );
}
// ...existing code...
