"use client";

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import timelineData from "@/data/sessionTimelineData.json";
import { Calendar, Clock, User } from "lucide-react";

export function TimelineSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white inline-block relative">
            Sessions Timeline
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-200 dark:border-blue-800 ml-4 md:ml-8">
          {timelineData.map((session, index) => (
            <div key={index} className="mb-10 pl-8 relative group">
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1.5 ring-4 ring-gray-50 dark:ring-[#0f172a] group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300" />

              {/* Session Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between gap-6 md:items-center">
                {/* Left side: Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {session.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {session.date}
                    </div>
                    <div className="flex items-center gap-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      {session.time}
                    </div>
                  </div>
                </div>

                {/* Right side: Speaker */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700 pt-5 md:pt-0 md:pl-6 min-w-[200px] justify-end">
                  {session.speakers && session.speakers.length > 0 ? (
                    session.speakers.map((speaker, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-3">
                        <div className="text-left md:text-right hidden md:block">
                          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold mb-1">
                            Speaker
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white flex items-center justify-end">
                            {speaker.name}
                          </p>
                        </div>

                        {/* Mobile layout text */}
                        <div className="text-left md:hidden flex-1">
                          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">
                            Speaker
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {speaker.name}
                          </p>
                        </div>

                        {/* Speaker Image with Dialog */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="cursor-pointer relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-700 flex-shrink-0 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors shadow-sm bg-gray-200 dark:bg-gray-800">
                              {speaker.image && (
                                <Image
                                  src={speaker.image}
                                  alt={speaker.name}
                                  fill
                                  className="object-cover hover:scale-110 transition-transform duration-300"
                                />
                              )}
                            </div>
                          </DialogTrigger>

                          {/* Dialog Popup for Image */}
                          <DialogContent className="max-w-3xl w-full p-0 bg-transparent border-none shadow-none">
                            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
                              {speaker.image && (
                                <Image
                                  src={speaker.image}
                                  alt={speaker.name}
                                  fill
                                  className="object-contain rounded-lg"
                                />
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="text-left md:text-right w-full">
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold mb-1 hidden md:block">
                          Speaker
                        </p>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 italic bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                          To Be Announced
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
