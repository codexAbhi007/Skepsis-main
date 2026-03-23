import { ProjectDevRushHero } from "@/components/sections/ProjectDevRush/HeroSection";
import { ProjectTracksSection } from "@/components/sections/ProjectDevRush/ProjectTracksSection";
import { TimelineSection } from "@/components/sections/ProjectDevRush/TimelineSection";
import { SpeakersSection } from "@/components/sections/ProjectDevRush/SpeakersSection";
import { PrerequisitesSection } from "@/components/sections/ProjectDevRush/PrerequisitesSection";
import { FAQSection } from "@/components/sections/ProjectDevRush/FAQSection";
import { LearningResourcesSection } from "@/components/sections/ProjectDevRush/LearningResourcesSection";
import { CommunitiesSection } from "@/components/sections/ProjectDevRush/CommunitiesSection";

export const metadata = {
  title: "Project Dev Rush | Skepsis",
  description:
    "Join Project Dev Rush - A month-long coding challenge and learning",
};

export default function ProjectDevRushPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <ProjectDevRushHero />
      {/* <ProjectTracksSection /> */}
      <SpeakersSection />
      <TimelineSection />
      <PrerequisitesSection />
      <FAQSection />
      <LearningResourcesSection />
      <CommunitiesSection />
    </div>
  );
}
