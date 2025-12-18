"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { useState } from "react";
import { SkepsisLogo } from "../SkepsisLogo";

// ...existing code...
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // full-width sticky wrapper so background + shadow span edge-to-edge
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
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
            isMenuOpen ? "flex bg-white" : "hidden"
          } absolute top-20 left-0 w-full md:static md:flex md:w-auto md:gap-8 items-center flex-col md:flex-row transition-all duration-300 ease-in-out shadow-md md:shadow-none z-50`}
        >
          {content.header.navItems.map((item) => (
            <Link
              key={item}
              href={
                item === "team"
                  ? "/teams"
                  : item === "certificate"
                  ? "/certificate"
                  : `/#${item}`
              }
              className="text-sm font-medium capitalize text-gray-900 hover:text-gray-600 transition-colors duration-200 ease-in-out py-2 md:py-0 px-4 md:px-0"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <a href="https://t.me/skepsis2024">
            <Button
              variant="secondary"
              className="text-blue border-black border-[1px] hover:bg-black/90 rounded-3xl hover:text-white hover:scale-105 hover:opacity-90 transition-transform duration-400 ease-in-out"
            >
              {content.header.cta}
            </Button>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1 justify-center items-center w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-1 w-full bg-black transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </header>
    </div>
  );
}
// ...existing code...
