"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, ImageIcon } from "lucide-react";
import StackedCards from "@/components/StackedCards";

type RawMember = Record<string, any>;
type TeamsJson = {
  technical_teams?: Record<string, RawMember[]>;
  non_technical_teams?: Record<string, any>;
  [k: string]: any;
};

function normalizeUrl(maybe: any) {
  if (!maybe) return null;
  const s = String(maybe).trim();
  if (s === "NaN" || s === "null" || s === "none") return null;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("www.")) return `https://${s}`;
  if (
    s.startsWith("github.com") ||
    s.startsWith("linkedin.com") ||
    s.startsWith("x.com") ||
    s.startsWith("twitter.com")
  )
    return `https://${s}`;
  return s;
}

function avatarFromLink(link?: string, name?: string) {
  if (link && link.startsWith("http")) return link;
  // fallback to ui-avatars with initials
  const initials = (name || "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    initials,
  )}&background=E5E7EB&color=111827&size=256`;
}

export default function TeamsPage() {
  const [data, setData] = useState<TeamsJson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/Skepsis_Core_Team_2025-26.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        return res.json();
      })
      .then((json: TeamsJson) => {
        if (!mounted) return;
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load teams");
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="text-gray-600 dark:text-gray-400">Loading teams…</div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="text-red-600 dark:text-red-400">
          Error loading teams: {error ?? "No data"}
        </div>
      </main>
    );
  }

 
  const groups: Record<string, Record<string, RawMember[]>> = {};
  if (data.technical_teams) groups["Technical Teams"] = data.technical_teams;
  if (data.non_technical_teams)
    groups["Non-Technical Teams"] = data.non_technical_teams;

  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
      <div className="mb-12 sm:mb-16 md:mb-20">
        <header className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Skepsis Leads
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
            Core team directory
          </p>
        </header>
        <StackedCards />
      </div>
      <header className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Skepsis — Teams
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
          Core team directory
        </p>
      </header>

      {Object.entries(groups).map(([groupTitle, teams]) => (
        <section key={groupTitle} className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            {groupTitle}
          </h2>

          {Object.entries(teams).map(([teamName, members]) => (
            <div key={teamName} className="mb-8 sm:mb-10">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                {teamName}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {Array.isArray(members) && members.length > 0 ? (
                  members.map((m: RawMember, idx: number) => {
                    const name = m["NAME"] || m.NAME || m.name || "Unnamed";
                    const teamField = m["TEAM"] || m.TEAM || teamName;
                    const role = (m["ROLE"] ||
                      m.ROLE ||
                      teamField ||
                      m["COURSE"] ||
                      "") as string;
                    const picture = m["NAME"] || m.NAME || m.name || "Unnamed";
                    const github = normalizeUrl(
                      m["GITHUB URL"] || m["GITHUB"] || m.github,
                    );
                    const linkedin = normalizeUrl(
                      m["LINKEDIN URL"] || m["LINKEDIN"] || m.linkedin,
                    );
                    const twitter = normalizeUrl(
                      m["X (FORMERLY TWITTER) URL"] || m["X"] || m.twitter,
                    );
                    const instagram = normalizeUrl(
                      m["INSTAGRAM ID"] || m.instagram,
                    );

                    const avatar =
                      `./members/${name}.jpg` ||
                      avatarFromLink(
                        m["PROFILE PICTURE URL"] ||
                          m["PROFILE PICTURE"] ||
                          m.profile_picture,
                        name,
                      );

                    return (
                      <article
                        key={idx}
                        className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                      >
                        <div className="w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 rounded-full overflow-hidden mb-2 sm:mb-3 md:mb-4 bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                          {avatar ? (
                            // use plain img to avoid next/image constraints for remote urls
                            <img
                              src={avatar}
                              alt={name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <ImageIcon className="text-gray-400 dark:text-gray-600 w-6 h-6 sm:w-8 sm:h-8" />
                          )}
                        </div>

                        <div className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white line-clamp-2">
                          {name}
                        </div>
                        {role ? (
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 line-clamp-2">
                            {role}
                          </div>
                        ) : null}

                        <div className="mt-2 sm:mt-3 md:mt-4 flex gap-2 sm:gap-3">
                          {github ? (
                            <a
                              href={github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                            >
                              <Github
                                size={16}
                                className="sm:w-[18px] sm:h-[18px]"
                              />
                            </a>
                          ) : null}
                          {linkedin ? (
                            <a
                              href={linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                            >
                              <Linkedin
                                size={16}
                                className="sm:w-[18px] sm:h-[18px]"
                              />
                            </a>
                          ) : null}
                          {twitter ? (
                            <a
                              href={twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition"
                            >
                              <Twitter
                                size={16}
                                className="sm:w-[18px] sm:h-[18px]"
                              />
                            </a>
                          ) : null}
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <div className="text-gray-500 dark:text-gray-400">
                    No members listed.
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
