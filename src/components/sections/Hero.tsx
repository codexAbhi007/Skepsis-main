"use client";

import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="hero-section"
      className="container relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center pb-20"
    >
      {/* Decorative Elements */}
      <div className="absolute left-[-10vw] top-[25%] w-[25vw] h-[25vw] sm:left-[-40px] sm:top-20 sm:w-64 sm:h-64 md:left-[-20px] md:top-50 md:w-80 md:h-80 bg-blue-300 dark:bg-blue-900/40 rounded-[40%] blur-md" />
      <div className="absolute right-[-5vw] top-[5%] w-[15vw] h-[15vw] sm:right-[-20px] sm:top-10 sm:w-40 sm:h-40 md:right-0 md:top-20 md:w-48 md:h-48 bg-purple-400 dark:bg-purple-900/40 rounded-[40%] blur-md" />

      {/* Orange squiggly decoration */}
      <div className="absolute left-[2vw] top-[5vw] sm:left-10 sm:top-32 md:left-20 md:top-40 hidden sm:block">
        <div className="w-[6vw] h-[6vw] sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-400 dark:bg-orange-600/40 rounded-md transform rotate-45" />
      </div>

      {/* <div className="absolute w-18 h-16 top-40">
          <Image src="/cloud.png" alt="Skepsis Logo" width={200} height={200} />
        </div> */}

      <div className="absolute left-[5vw] top-[45vw] sm:left-[-40px] sm:top-96 md:left-0 md:top-80 hidden sm:block">
        <Image
          src="/Helix.png"
          alt="Skepsis Logo"
          width={120}
          height={120}
          className="w-[25vw] h-[25vw] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
        />
      </div>

      {/* Insert Vector4 rounded arrow pointing to about section */}

      {/* Green knot decoration */}
      <div className="absolute right-5 top-10 sm:right-10 sm:top-16 md:right-20 md:top-20 hidden sm:block">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-emerald-400 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative space-y-12 max-w-4xl text-center mt-20">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
          <div className="mb-4">
            <span
              className={`inline-block ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              {content.hero.title.line1}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span
              className={`inline-block ${
                isVisible ? "opacity-100 delay-300" : "opacity-0"
              } transition-opacity duration-1000 border-b-4 border-black dark:border-white pb-2`}
            >
              {content.hero.title.line2}
            </span>
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-orange-400 transform rotate-45"
                />
              ))}
            </div>
          </div>
          <div className="relative inline-block">
            <span
              className={`relative z-10 ${
                isVisible ? "opacity-100 delay-500" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              {content.hero.title.line3}
            </span>
            <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-700/60 -rotate-2 h-full w-full rounded-xl -z-10" />
          </div>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
          {content.hero.description}
        </p>

        <div className="flex flex-col items-center gap-4">
          <a href="https://t.me/skepsis2024">
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-gray-200 px-8 py-6 text-lg transition duration-300 rounded-full hover:scale-105">
              Join Community
            </Button>
          </a>

          {/* <Link
            href="#"
            className="text-sm font-medium underline underline-offset-4 hover:text-blue-500 transition-colors duration-300"
          >
            See more details about us
          </Link> */}
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute right-8 bottom-10 sm:right-16 sm:bottom-16 md:right-20 md:bottom-20 hidden sm:block">
        <div className="flex flex-col gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-0.5 sm:w-6 bg-black dark:bg-white transform -rotate-45"
            />
          ))}
        </div>
      </div>

      {/* Decorative dot */}
      <div className="absolute right-20 bottom-80 hidden md:block">
        <div className="w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full" />
      </div>
    </div>
  );
}
