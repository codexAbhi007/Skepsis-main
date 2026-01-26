"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectDevRushData } from "@/data/projectDevRush";
import { ChevronDown } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function ProjectDevRushHero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Get all sessions and find the next one
      const allSessions = projectDevRushData.sessionTimeline.flatMap((track) =>
        track.sessions.map((session) => ({
          date: session.date,
          time: session.time,
          title: session.title,
          track: track.track,
        })),
      );

      // Parse session date and time to create target date
      // Assuming format like "3rd Jan" and time "7:00 PM"
      const getTargetDate = () => {
        const currentYear = new Date().getFullYear();
        const currentDate = new Date();

        const monthMap: Record<string, number> = {
          jan: 0,
          feb: 1,
          mar: 2,
          apr: 3,
          may: 4,
          jun: 5,
          jul: 6,
          aug: 7,
          sep: 8,
          oct: 9,
          nov: 10,
          dec: 11,
        };

        // Sort sessions by date
        const sortedSessions = allSessions.sort((a, b) => {
          const dateA = a.date.match(/\d+/);
          const dateB = b.date.match(/\d+/);
          const dayA = dateA ? parseInt(dateA[0]) : 1;
          const dayB = dateB ? parseInt(dateB[0]) : 1;

          const monthA = Object.keys(monthMap).find((m) =>
            a.date.toLowerCase().includes(m),
          );
          const monthB = Object.keys(monthMap).find((m) =>
            b.date.toLowerCase().includes(m),
          );

          const monthNumA = monthA ? monthMap[monthA] : 0;
          const monthNumB = monthB ? monthMap[monthB] : 0;

          return monthNumA === monthNumB ? dayA - dayB : monthNumA - monthNumB;
        });

        // Find the next upcoming session
        for (const session of sortedSessions) {
          const dayMatch = session.date.match(/\d+/);
          const day = dayMatch ? parseInt(dayMatch[0]) : 1;

          const monthMatch = Object.keys(monthMap).find((m) =>
            session.date.toLowerCase().includes(m),
          );
          const month = monthMatch ? monthMap[monthMatch] : 0;

          const [time, period] = session.time.split(" ");
          const [hour, minute] = time.split(":");
          let hrs = parseInt(hour);
          if (period === "PM" && hrs !== 12) hrs += 12;
          if (period === "AM" && hrs === 12) hrs = 0;

          const sessionDate = new Date(
            currentYear,
            month,
            day,
            hrs,
            parseInt(minute),
            0,
          );

          if (sessionDate > currentDate) {
            return sessionDate.getTime();
          }
        }

        // If no session found, return the first session date
        return new Date(currentYear, 0, 3, 19, 0, 0).getTime(); // Default to 3rd Jan
      };

      const targetDate = getTargetDate();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-20 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Left side decorative blob */}
      <div className="hidden sm:block absolute left-0 top-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-800/60 rounded-full blur-3xl opacity-60"></div>

      {/* Left orange spring shape */}
      <div className="hidden lg:block absolute left-12 top-1/3">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="text-orange-500"
        >
          <path
            d="M60 10 Q70 30 65 50 Q60 70 70 90 Q75 100 60 110"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Left orange diamond */}
      <div className="hidden lg:block absolute left-24 top-24">
        <div className="w-16 h-16 bg-orange-500 transform rotate-45"></div>
      </div>

      {/* Right side decorative blob */}
      <div className="hidden sm:block absolute right-0 top-1/3 w-96 h-96 bg-purple-300 dark:bg-purple-800/60 rounded-full blur-3xl opacity-60"></div>

      {/* Right green dot */}
      <div className="hidden lg:block absolute right-32 top-1/4 w-12 h-12 bg-green-400 rounded-full"></div>

      {/* Right small blue dot */}
      <div className="hidden sm:block absolute right-20 bottom-1/3 w-6 h-6 bg-blue-600 rounded-full"></div>

      <div className="text-center space-y-8 max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
          {projectDevRushData.hero.title}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          {projectDevRushData.hero.dateRange}
        </p>

        <div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
            {projectDevRushData.hero.countdownMessage}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-blue-700 dark:bg-gray-900 border-2 border-blue-800 dark:border-blue-600 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center shadow-lg"
              >
                <span className="text-2xl md:text-4xl font-bold text-white">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-blue-100 dark:text-gray-400 mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20 animate-bounce relative z-10">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  );
}
