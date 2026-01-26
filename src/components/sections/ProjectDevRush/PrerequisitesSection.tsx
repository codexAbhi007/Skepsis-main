"use client";

import { projectDevRushData } from "@/data/projectDevRush";
import {
  Code2,
  Terminal,
  GitBranch,
  Github,
  Zap,
  Database,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  Code2,
  Terminal,
  GitBranch,
  Github,
  Zap,
  Database,
};

interface SetupItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

function SetupCard({ item }: { item: SetupItem }) {
  const IconComponent = iconMap[item.icon] || null;

  return (
    <Link href={item.link} target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {IconComponent && (
              <IconComponent
                size={24}
                className="text-blue-600 dark:text-blue-500"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
          </div>
          <span className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            ↗
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-400 text-sm">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export function PrerequisitesSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-gray-900 dark:text-white">
          Prerequisites & Setup
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Tools */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Required Tools & Accounts
            </h3>
            <div className="space-y-5 flex flex-col">
              {projectDevRushData.prerequisites.tools.map((item, index) => (
                <SetupCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Accounts */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Required Accounts
            </h3>
            <div className="space-y-5 flex flex-col">
              {projectDevRushData.prerequisites.accounts.map((item, index) => (
                <SetupCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
