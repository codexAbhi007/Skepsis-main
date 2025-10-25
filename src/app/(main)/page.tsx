import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { AboutSection } from "@/components/sections/About";
import { ClubsSection } from "@/components/sections/Clubs";
import EventsTimeline from "@/components/sections/EventsNew";
import { FAQSection } from "@/components/sections/FAQS";
import { HeroSection } from "@/components/sections/Hero";
import { TeamsSection } from "@/components/sections/TeamsSection";
import { content } from "@/lib/content";

export default function Home() {
  const events = content.events ?? [];

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <HeroSection />
      <AboutSection />
      <ClubsSection />
      <EventsTimeline events={events} />
      <TeamsSection />
      <FAQSection />
      <ScrollToTopButton />
    </div>
  );
}