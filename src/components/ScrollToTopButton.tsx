"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function ScrollToTopButton() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Track scroll position to show/hide the scroll button
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.querySelector("#hero-section")?.offsetHeight || 0;
      setShowScrollToTop(window.scrollY > heroSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollToTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed flex items-center justify-center font-extrabold h-12 w-12 bottom-8 right-8 z-50 bg-blue-500 text-white rounded-full p-3 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-600 shadow-lg"
      aria-label="Scroll to Top"
    >
      <Image src={"/arrow-up.png"} className="invert" width={80} height={80} alt="^" />
    </button>
  );
}
