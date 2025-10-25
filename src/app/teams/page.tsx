"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, ImageIcon } from "lucide-react";

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
  if (s.startsWith("github.com") || s.startsWith("linkedin.com") || s.startsWith("x.com") || s.startsWith("twitter.com")) return `https://${s}`;
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
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=E5E7EB&color=111827&size=256`;
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
        <div className="text-gray-600">Loading teams…</div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="text-red-600">Error loading teams: {error ?? "No data"}</div>
      </main>
    );
  }

  // combine technical + non-technical top-level groups into a single map for rendering
  const groups: Record<string, Record<string, RawMember[]>> = {};
  if (data.technical_teams) groups["Technical Teams"] = data.technical_teams;
  if (data.non_technical_teams) groups["Non-Technical Teams"] = data.non_technical_teams;

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Skepsis — Teams</h1>
        <p className="text-gray-600 mt-2">Core team directory (data loaded from JSON)</p>
      </header>

      {Object.entries(groups).map(([groupTitle, teams]) => (
        <section key={groupTitle} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{groupTitle}</h2>

          {Object.entries(teams).map(([teamName, members]) => (
            <div key={teamName} className="mb-10">
              <h3 className="text-xl font-medium mb-4">{teamName}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.isArray(members) && members.length > 0 ? (
                  members.map((m: RawMember, idx: number) => {
                    const name = m["NAME"] || m.NAME || m.name || "Unnamed";
                    const teamField = m["TEAM"] || m.TEAM || teamName;
                    const role = (m["ROLE"] || m.ROLE || teamField || m["COURSE"] || "") as string;
                    const picture = typeof m["UPLOAD YOUR PICTURE FOR ONBOARDING PPT and POSTER"] === "string"
                      ? normalizeUrl(m["UPLOAD YOUR PICTURE FOR ONBOARDING PPT and POSTER"])
                      : null;
                    const github = normalizeUrl(m["GITHUB URL"] || m["GITHUB"] || m.github);
                    const linkedin = normalizeUrl(m["LINKEDIN URL"] || m["LINKEDIN"] || m.linkedin);
                    const twitter = normalizeUrl(m["X (FORMERLY TWITTER) URL"] || m["X"] || m.twitter);
                    const instagram = normalizeUrl(m["INSTAGRAM ID"] || m.instagram);

                    const avatar = avatarFromLink(picture || undefined, name);

                    return (
                      <article
                        key={idx}
                        className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                      >
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                          {avatar ? (
                            // use plain img to avoid next/image constraints for remote urls
                            <img src={avatar} alt={name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="text-gray-400" />
                          )}
                        </div>

                        <div className="text-lg font-medium">{name}</div>
                        {role ? <div className="text-sm text-gray-500 mt-1">{role}</div> : null}

                        <div className="mt-4 flex gap-3">
                          {github ? (
                            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                              <Github size={18} />
                            </a>
                          ) : null}
                          {linkedin ? (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                              <Linkedin size={18} />
                            </a>
                          ) : null}
                          {twitter ? (
                            <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500">
                              <Twitter size={18} />
                            </a>
                          ) : null}
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <div className="text-gray-500">No members listed.</div>
                )}
              </div>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}