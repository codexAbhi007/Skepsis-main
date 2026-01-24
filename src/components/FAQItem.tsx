"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  id?: string | number;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: (id?: string | number) => void;
}

export function FAQItem({
  id,
  question,
  answer,
  isOpen = false,
  onToggle,
}: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const contentId = `faq-content-${String(id ?? Math.random().toString(36).slice(2, 9))}`;

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      requestAnimationFrame(() => {
        setMaxHeight(`${el.scrollHeight}px`);
      });
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, answer]);

  // Recompute height when window resizes (if open)
  useEffect(() => {
    function onResize() {
      const el = contentRef.current;
      if (el && isOpen) {
        setMaxHeight(`${el.scrollHeight}px`);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950 focus:ring-indigo-300 dark:focus:ring-indigo-600 transition"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => onToggle?.(id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle?.(id);
          }
        }}
      >
        <div>
          <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
            {question}
          </h3>
        </div>

        <div className="ml-4 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </div>
      </button>

      <div
        id={contentId}
        ref={contentRef}
        role="region"
        aria-hidden={!isOpen}
        style={{
          maxHeight,
          transition: "max-height 300ms cubic-bezier(.2,.9,.2,1)",
          overflow: "hidden",
        }}
        className="px-5"
      >
        <div className="py-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
