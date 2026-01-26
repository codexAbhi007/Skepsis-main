"use client";

import { projectDevRushData } from "@/data/projectDevRush";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function LearningResourcesSection() {
  const [openSection, setOpenSection] = useState<string>("web");

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Learning Resources
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our curated collection of learning materials designed to
            help you master web development and machine learning concepts.
          </p>
        </div>

        <div className="space-y-4">
          {/* Web Development Resources */}
          <div className="border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900/50 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <button
              onClick={() => setOpenSection(openSection === "web" ? "" : "web")}
              className="w-full px-6 py-4 md:py-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-left font-semibold text-blue-700 dark:text-blue-400 text-base md:text-lg">
                Web Development Resources
              </h3>
              <ChevronDown
                size={20}
                className={`text-gray-700 dark:text-gray-400 flex-shrink-0 transition-transform ${
                  openSection === "web" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "web" && (
              <div className="px-6 py-4 md:py-6 border-t border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
                <ul className="space-y-3">
                  {projectDevRushData.resources.webDevelopment.map(
                    (resource, index) => (
                      <li key={index}>
                        <Link
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm md:text-base"
                        >
                          {resource.title} →
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Machine Learning Resources */}
          <div className="border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900/50 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <button
              onClick={() => setOpenSection(openSection === "ml" ? "" : "ml")}
              className="w-full px-6 py-4 md:py-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-left font-semibold text-blue-700 dark:text-blue-400 text-base md:text-lg">
                Machine Learning Resources
              </h3>
              <ChevronDown
                size={20}
                className={`text-gray-700 dark:text-gray-400 flex-shrink-0 transition-transform ${
                  openSection === "ml" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "ml" && (
              <div className="px-6 py-4 md:py-6 border-t border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
                <ul className="space-y-3">
                  {projectDevRushData.resources.machineLearning.map(
                    (resource, index) => (
                      <li key={index}>
                        <Link
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm md:text-base"
                        >
                          {resource.title} →
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
