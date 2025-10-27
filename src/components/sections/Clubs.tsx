"use client";
import React, { useState } from "react";
import { Linkedin, Instagram, Globe, ImageIcon } from "lucide-react";

type Club = {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  image?: string; // path in /public or external
  socials?: {
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
};

const CLUBS: Club[] = [
  {
    id: "gdsc",
    name: "GDSC",
    tagline: "Google Developer Student Club",
    description:
      "Community for students to learn web & cloud technologies, collaborate on projects and attend workshops. We run hands-on sessions, mentorship, and collaborative builds.",
    // image: "/clubs/gdsc.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/company/gdsc/",
      instagram: "https://www.instagram.com/gdsc/",
      website: "#"
    }
  },
  {
    id: "nscc",
    name: "Newton School Coding Club",
    tagline: "Coding · Interview Prep · Projects",
    description:
      "Focused on competitive programming, DSA bootcamps and real-world web projects. Regular peer-led sessions and mock interviews to help members get industry-ready.",
    // intentionally no image to demonstrate placeholder
    socials: {
      linkedin: "#",
      instagram: "#",
      website: "#"
    }
  },
  // add more clubs as needed...
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * ClubImage:
 * - Renders the club.image if provided.
 * - If image fails to load or not provided, renders a colorful initials placeholder.
 * - Uses plain <img> so onError can be handled without next/image config.
 */
function ClubImage({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = getInitials(name);

  if (!src || failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white">
        <div className="text-2xl font-semibold">{initials || <ImageIcon />}</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}

export function ClubsSection() {
  return (
    <section className="container relative py-16 md:px-12 lg:px-16 pt-[6rem]" id="clubs">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Clubs</h2>
        <p className="text-gray-600 max-w-2xl text-center">
          Student-run clubs and chapters that power learning, projects and events across Skepsis.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CLUBS.map((club) => {
            const initials = getInitials(club.name);
            return (
              <article
                key={club.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-48 h-44 md:h-auto flex-shrink-0">
                  <ClubImage src={club.image} name={club.name} />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{club.name}</h3>
                        {club.tagline && <p className="text-sm text-gray-500 mt-1">{club.tagline}</p>}
                      </div>
                    </div>

                    <p className="text-gray-700 mt-4 leading-relaxed">{club.description}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-3">
                      {club.socials?.website && (
                        <a
                          href={club.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900"
                          aria-label={`${club.name} website`}
                        >
                          <Globe size={18} />
                        </a>
                      )}
                      {club.socials?.linkedin && (
                        <a
                          href={club.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                          aria-label={`${club.name} linkedin`}
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {club.socials?.instagram && (
                        <a
                          href={club.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800"
                          aria-label={`${club.name} instagram`}
                        >
                          <Instagram size={18} />
                        </a>
                      )}
                    </div>

                    <a
                      href="#"
                      className="text-sm px-4 py-2 border rounded-full text-gray-700 hover:bg-gray-100 transition"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}