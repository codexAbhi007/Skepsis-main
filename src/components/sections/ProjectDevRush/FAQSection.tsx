"use client";

import { projectDevRushData } from "@/data/projectDevRush";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Find answers to common questions about Project Dev Rush
          </p>
        </div>

        <div className="space-y-4">
          {projectDevRushData.faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900/50 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 md:py-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900 dark:text-white text-base md:text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-gray-700 dark:text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 md:py-6 border-t border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
                  <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
