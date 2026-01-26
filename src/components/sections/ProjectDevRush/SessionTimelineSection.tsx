"use client";

import { projectDevRushData } from "@/data/projectDevRush";
import { Calendar, Clock } from "lucide-react";

export function SessionTimelineSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          Session Timeline
        </h2>

        <div className="space-y-16 md:space-y-20">
          {projectDevRushData.sessionTimeline.map((track, trackIndex) => (
            <div key={trackIndex}>
              <h3 className="text-xl md:text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
                {track.track}
              </h3>

              <div className="relative">
                {/* Horizontal Timeline line */}
                <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600" />

                {/* Sessions - Horizontal scroll on mobile, flex on desktop */}
                <div className="overflow-x-auto md:overflow-x-visible">
                  <div className="flex gap-4 md:gap-6 pb-4 md:pb-0 min-w-full md:min-w-0 md:justify-between">
                    {track.sessions.map((session, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 w-40 md:w-auto md:flex-1"
                      >
                        {/* Timeline dot */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-950 shadow-md" />

                        {/* Session content */}
                        <div className="pt-8 text-center">
                          <div className="space-y-2">
                            <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-400 text-xs md:text-sm">
                              <Calendar size={14} className="md:w-4 md:h-4" />
                              <span className="font-semibold">
                                {session.date}
                              </span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-400 text-xs md:text-sm">
                              <Clock size={14} className="md:w-4 md:h-4" />
                              <span>{session.time}</span>
                            </div>
                            <p className="text-gray-900 dark:text-white font-semibold text-sm md:text-base leading-snug">
                              {session.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
