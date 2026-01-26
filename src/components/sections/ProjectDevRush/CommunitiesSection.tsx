"use client";

import { projectDevRushData } from "@/data/projectDevRush";
import Link from "next/link";
import {
  SiWhatsapp,
  SiDiscord,
  SiTelegram,
  SiYoutube,
  SiInstagram,
  SiX,
  SiLinkedin,
} from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  MessageCircle: SiWhatsapp,
  MessageSquare: SiDiscord,
  Send: SiTelegram,
  Play: SiYoutube,
  Instagram: SiInstagram,
  Twitter: SiX,
  Linkedin: SiLinkedin,
};

export function CommunitiesSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Join Our Communities
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with fellow developers and stay updated
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {projectDevRushData.communities.map((community, index) => {
            const IconComponent = iconMap[community.icon];
            return (
              <Link
                key={index}
                href={community.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-all cursor-pointer group">
                  {IconComponent && (
                    <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <IconComponent size={32} />
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors text-sm md:text-base mb-1">
                    {community.name}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {community.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Social Links Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 md:pt-12">
          <div className="flex justify-center items-center gap-6 md:gap-8 mb-6">
            {[
              { icon: SiInstagram, href: "https://instagram.com" },
              { icon: SiX, href: "https://x.com" },
              { icon: SiLinkedin, href: "https://linkedin.com" },
              { icon: SiYoutube, href: "https://youtube.com" },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <IconComponent size={24} />
                </Link>
              );
            })}
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Organized by Skepsis
          </p>
        </div>
      </div>
    </section>
  );
}
