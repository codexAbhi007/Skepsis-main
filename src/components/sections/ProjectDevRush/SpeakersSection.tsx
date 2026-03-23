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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const speakerImages = [
  "/project_dev_rush/2.png",
  "/project_dev_rush/3.png",
  "/project_dev_rush/4.png",
  "/project_dev_rush/5.png",
  "/project_dev_rush/6.png",
  "/project_dev_rush/7.png",
  "/project_dev_rush/8.png",
];

export function SpeakersSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="py-1 md:py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center text-gray-900 dark:text-white">
          Meet Our Speakers
        </h2>

        <div className="px-8 md:px-16 w-full max-w-5xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {speakerImages.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    
                    {/* 🔥 Dialog Wrapper */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm relative aspect-[4/5] bg-gray-100 dark:bg-gray-900 group">
                          <Image
                            src={src}
                            alt={`Speaker ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </DialogTrigger>

                      {/* 🔥 Fullscreen Image Modal */}
                      <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none">
                        <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh]">
                          <Image
                            src={src}
                            alt={`Speaker ${index + 1}`}
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

            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}