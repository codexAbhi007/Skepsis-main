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
      <div className="absolute left-[-5vw] top-[25%] w-[20vw] h-[20vw] sm:left-[-20px] sm:top-50 sm:w-80 sm:h-80 bg-blue-300 rounded-[40%] blur-md" />
      <div className="absolute right-0 top-[10%] w-[12vw] h-[12vw] sm:top-20 sm:w-48 sm:h-48 bg-purple-400 rounded-[40%] blur-md" />

      {/* Orange squiggly decoration */}
      <div className="absolute left-[5vw] top-[10vw] sm:left-20 sm:top-40">
        <div className="w-[8vw] h-[8vw] sm:w-12 sm:h-12 bg-orange-400 rounded-md transform rotate-45" />
      </div>

      {/* <div className="absolute w-18 h-16 top-40">
        <Image src="/cloud.png" alt="Skepsis Logo" width={200} height={200} />
      </div> */}

      <div className="absolute left-[10vw] top-[40vw] sm:left-0 sm:top-80">
        <Image
          src="/Helix.png"
          alt="Skepsis Logo"
          width={120}
          height={120}
          className="w-[30vw] h-[30vw] sm:w-[200px] sm:h-[200px]"
        />
      </div>

      {/* Insert Vector4 rounded arrow pointing to about section */}

      {/* Green knot decoration */}
      {/* <div className="absolute right-20 top-20">
        <div className="w-16 h-16 bg-emerald-400 rounded-full" />
      </div> */}

      {/* Main Content */}
      <div className="relative space-y-12 max-w-4xl text-center mt-20">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-none">
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
              } transition-opacity duration-1000 border-b-4 border-black pb-2`}
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
            <div className="absolute inset-0 bg-emerald-400 -rotate-2 h-full w-full rounded-xl -z-10" />
          </div>
        </h1>

        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          {content.hero.description}
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button className="bg-black text-white hover:bg-black/90 px-8 py-6 text-lg transition duration-300 rounded-full hover:scale-105">
            Join Community
          </Button>
          {/* <Link
            href="#"
            className="text-sm font-medium underline underline-offset-4 hover:text-blue-500 transition-colors duration-300"
          >
            See more details about us
          </Link> */}
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute right-20 bottom-20">
        <div className="flex flex-col gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-6 h-0.5 bg-black transform -rotate-45" />
          ))}
        </div>
      </div>

      {/* Decorative dot */}
      <div className="absolute right-40 bottom-100">
        <div className="w-6 h-6 bg-blue-500 rounded-full" />
        <div></div>
      </div>
    </div>
  );
}
