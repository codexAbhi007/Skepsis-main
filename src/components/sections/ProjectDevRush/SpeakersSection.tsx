"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import speakersData from "@/data/speakersData.json";

export function SpeakersSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative background blobs for the glassmorphism effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white inline-block relative">
            Meet Our Speakers
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h2>
        </div>

        <div className="px-8 md:px-16 w-full max-w-6xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {speakersData.map((speaker) => (
                <CarouselItem
                  key={speaker.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2 h-full">
                    {/* 🔥 Dialog Wrapper */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer h-full p-6 sm:p-8 rounded-3xl border border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.3)] transition-all duration-300 group flex flex-col items-center text-center">
                          {/* Image Wrapper */}
                          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 flex-shrink-0">
                            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-gray-100 dark:bg-gray-800 z-10">
                              <Image
                                src={speaker.profileImage}
                                alt={speaker.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500 object-top"
                                onError={(e) => {
                                  // Fallback gracefully if image is not uploaded yet
                                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=random`;
                                }}
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            {speaker.name}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                            {speaker.description}
                          </p>

                          <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                              View Profile
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </DialogTrigger>

                      {/* 🔥 Fullscreen Image Modal */}
                      <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none">
                        <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh]">
                          <Image
                            src={speaker.popupImage}
                            alt={`${speaker.name} Profile`}
                            fill
                            className="object-contain rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 border-none" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
