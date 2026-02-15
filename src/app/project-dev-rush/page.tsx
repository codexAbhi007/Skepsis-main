import { ProjectDevRushHero } from "@/components/sections/ProjectDevRush/HeroSection";
import { ProjectTracksSection } from "@/components/sections/ProjectDevRush/ProjectTracksSection";
import { SessionTimelineSection } from "@/components/sections/ProjectDevRush/SessionTimelineSection";
import { PrerequisitesSection } from "@/components/sections/ProjectDevRush/PrerequisitesSection";
import { FAQSection } from "@/components/sections/ProjectDevRush/FAQSection";
import { LearningResourcesSection } from "@/components/sections/ProjectDevRush/LearningResourcesSection";
import { CommunitiesSection } from "@/components/sections/ProjectDevRush/CommunitiesSection";

export const metadata = {
  title: "Project Dev Rush | Skepsis",
  description:
    "Join Project Dev Rush - A month-long coding challenge with Web Development and Machine Learning tracks",
};

export default function ProjectDevRushPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <ProjectDevRushHero />
      {/* <ProjectTracksSection /> */}
      {/* <SessionTimelineSection /> */}
      <PrerequisitesSection />
      <FAQSection />
      <LearningResourcesSection />
      <CommunitiesSection />
    </div>
  );
}
