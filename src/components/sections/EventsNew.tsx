"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface TimelineEvent {
  id: string | number;
  title: string;
  date: string;
  location?: string;
  description?: string;
  image?: string;
  images?: string[];
}

interface EventsTimelineProps {
  events: TimelineEvent[];
  initialCount?: number;
  loadIncrement?: number;
}

export default function EventsTimeline({
  events,
  initialCount = 5,
  loadIncrement = 5,
}: EventsTimelineProps) {
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);

  // Helper function to parse DD/MM/YYYY format and date ranges
  const parseDate = (dateString: string): number => {
    // Extract year from the entire string (works for all formats)
    const yearMatch = dateString.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear();

    // Extract the first date part (before any range or separator)
    const firstDatePart = dateString.split(/[–\-\s&]/)[0].trim();
    const parts = firstDatePart.split("/").map(Number);

    const day = parts[0];
    // If month is not in the first part, try to extract it from the full string
    let month = parts[1];
    if (!month) {
      const monthMatch = dateString.match(/\/(\d{1,2})/);
      month = monthMatch ? parseInt(monthMatch[1]) : new Date().getMonth() + 1;
    }

    return new Date(year, month - 1, day).getTime();
  };

  // Sort events by date (latest first)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA; // Descending order (latest first)
  });

  const visibleEvents = sortedEvents.slice(0, visibleCount);
  const isAllVisible = visibleCount >= events.length;

  function handleLoadMore() {
    if (isAllVisible) {
      setVisibleCount(initialCount);
    } else {
      setVisibleCount((prev) =>
        Math.min(prev + loadIncrement, sortedEvents.length),
      );
    }
  }

  return (
    <section id="events" className="container mx-auto px-4 py-12 pt-[6rem]">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center text-gray-900 dark:text-white">
        Events Timeline
      </h2>

      <div className="relative">
        {/* Events wrapper: line is confined to this wrapper so it won't overlap the See more button */}
        <div className="relative">
          {/* Center vertical line (desktop) - confined to events wrapper */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {visibleEvents.map((ev, idx) => {
              const images =
                (ev.images && ev.images.length > 0
                  ? ev.images.slice(0, 4)
                  : ev.image
                    ? [ev.image]
                    : []) || [];

              return (
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  className="relative md:flex md:items-start md:gap-8"
                >
                  {/* Left: date, title, description */}
                  <div className="md:w-1/2 flex flex-col items-start text-left order-1 md:order-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {ev.date}
                    </p>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {ev.title}
                    </h3>
                    {ev.location ? (
                      <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
                        {ev.location}
                      </p>
                    ) : null}
                    {ev.description ? (
                      <p className="text-gray-700 dark:text-gray-300 max-w-[75%]">
                        {ev.description}
                      </p>
                    ) : null}
                  </div>

                  {/* Connector + dot in center (desktop) */}
                  <div className="hidden md:flex md:flex-col md:items-center md:justify-start md:w-[3.5rem]">
                    <div className="w-full h-full flex items-start justify-center">
                      <div className="relative mt-2">
                        <div className="w-4 h-4 bg-black dark:bg-white rounded-full z-10" />
                      </div>
                    </div>
                  </div>

                  {/* Right: image grid */}
                  <div className="md:w-1/2 order-3 md:order-3">
                    <div
                      className={`grid gap-2 ${
                        images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                      }`}
                    >
                      {images.length === 1 ? (
                        <div className="w-3/4 h-[260px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={images[0] || `./events/${ev.title}`}
                            alt={`No Img`}
                            width={800}
                            height={520}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : images.length > 0 ? (
                        images.map((src, i) => (
                          <div
                            key={i}
                            className={`relative w-full h-[120px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 ${
                              images.length === 3 && i === 0
                                ? "md:row-span-2 md:h-[260px]"
                                : ""
                            }`}
                          >
                            <Image
                              src={src}
                              alt={`${ev.title} - ${i}`}
                              width={600}
                              height={400}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))
                      ) : (
                        <div className="w-full h-[180px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600">
                          No images
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile spacing / dot */}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* See more / Show less control (outside events wrapper) */}
        {sortedEvents.length > initialCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition"
              aria-expanded={isAllVisible}
            >
              {isAllVisible
                ? "Show less"
                : `See more (${Math.min(
                    loadIncrement,
                    sortedEvents.length - visibleCount,
                  )} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
