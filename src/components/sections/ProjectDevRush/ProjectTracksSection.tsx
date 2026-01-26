"use client";

import { projectDevRushData } from "@/data/projectDevRush";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectTracksSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          Project Tracks
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projectDevRushData.projectTracks.map((track) => (
            <div
              key={track.id}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {track.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {track.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base">
                {track.description}
              </p>

              <ul className="space-y-3 mb-8">
                {track.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm md:text-base text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 text-xl leading-none">
                      ›
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-blue-600 dark:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-all inline-flex items-center gap-2 transform hover:scale-110 duration-300 shadow-md">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
