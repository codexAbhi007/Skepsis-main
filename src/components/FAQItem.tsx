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

/**
 * FAQItem
 * - Classic dropdown accordion: clicking header expands/collapses DOWNWARDS only.
 * - Uses max-height transition so width/layout doesn't change.
 * - Accessible: aria-expanded / aria-controls and keyboard support (Enter/Space).
 */
export function FAQItem({ id, question, answer, isOpen = false, onToggle }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const contentId = `faq-content-${String(id ?? Math.random().toString(36).slice(2, 9))}`;

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // When opening, set maxHeight to scrollHeight so it expands to fit content.
    // When closing, set to 0 to collapse.
    if (isOpen) {
      // allow next paint to measure correct scrollHeight (in case fonts/images just loaded)
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 transition"
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
          <h3 className="text-base md:text-lg font-medium text-gray-900">{question}</h3>
        </div>

        <div className="ml-4 flex items-center justify-center">
          {isOpen ? <Minus className="w-5 h-5 text-gray-600" /> : <Plus className="w-5 h-5 text-gray-600" />}
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
          overflow: "hidden"
        }}
        className="px-5"
      >
        <div className="py-3 text-gray-700 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}