"use client";

import React, { useEffect, useState } from "react";
import { Award, Users, Calendar } from "lucide-react";

type Achievement = {
  id: number;
  title: string;
  teamMembers?: string[];
  description?: string;
  achievement?: string;
  prize?: string;
  project?: string;
  date?: string;
  track?: string;
  position?: string;
};

export default function AchivementSection() {
  const [items, setItems] = useState<Achievement[]>([]);
  const [filtered, setFiltered] = useState<Achievement[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/achievements.json")
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load (${r.status})`);
        return r.json();
      })
      .then((data: Achievement[]) => {
        if (!mounted) return;
        setItems(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load achievements");
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const qLower = q.trim().toLowerCase();
    if (!qLower) {
      setFiltered(items);
      return;
    }
    setFiltered(
      items.filter((it) => {
        return (
          String(it.title).toLowerCase().includes(qLower) ||
          String(it.achievement || it.prize || it.project || "")
            .toLowerCase()
            .includes(qLower) ||
          (it.teamMembers || []).some((m) => m.toLowerCase().includes(qLower)) ||
          String(it.description || "").toLowerCase().includes(qLower)
        );
      })
    );
  }, [q, items]);

  if (loading) {
    return (
      <section className="py-12 px-4 container mx-auto">
        <div className="text-center text-gray-600">Loading achievements…</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-4 container mx-auto">
        <div className="text-center text-red-600">Error: {error}</div>
      </section>
    );
  }

  return (
    <section id="achievements" className="py-12 px-4 container mx-auto">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Achievements & Hackathon Wins</h2>
        <p className="text-gray-600 mt-2">Recent accomplishments by Skepsis members and teams.</p>
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-1/2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by title, team member, prize or project..."
              className="w-full rounded-full border border-gray-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <div className="text-sm text-gray-500 hidden sm:block">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </div>
            <button
              onClick={() => {
                setQ("");
                setFiltered(items);
              }}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:shadow-sm transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <article
            key={a.id}
            className="relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col"
          >
            <div className="flex items-start gap-3">
              <div className="flex-none w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white">
                <Award size={20} />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Users size={14} />
                    {(a.teamMembers || []).slice(0, 3).join(", ") || "—"}
                  </span>
                  {a.date && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {a.date}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-700 flex-1">
              {a.achievement ? (
                <p className="font-medium text-gray-800">{a.achievement}</p>
              ) : a.prize ? (
                <p className="font-medium text-gray-800">{a.prize}</p>
              ) : a.project ? (
                <p className="font-medium text-gray-800">Project: {a.project}</p>
              ) : null}

              {a.description && (
                <p className="mt-2 text-sm text-gray-600 line-clamp-4">{a.description}</p>
              )}

              {a.track && (
                <p className="mt-2 text-xs text-indigo-600 font-medium">Track: {a.track}</p>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-gray-500">#{String(a.id).padStart(2, "0")}</div>
              <details className="text-sm">
                <summary className="cursor-pointer text-indigo-600 hover:underline">Details</summary>
                <div className="mt-2 text-sm text-gray-700">
                  {a.description && <div className="mb-2">{a.description}</div>}
                  {a.project && (
                    <div className="text-sm">
                      <span className="font-medium">Project:</span> {a.project}
                    </div>
                  )}
                  {a.achievement && (
                    <div className="text-sm">
                      <span className="font-medium">Achievement:</span> {a.achievement}
                    </div>
                  )}
                  {a.prize && (
                    <div className="text-sm">
                      <span className="font-medium">Prize:</span> {a.prize}
                    </div>
                  )}
                  {a.position && (
                    <div className="text-sm">
                      <span className="font-medium">Position:</span> {a.position}
                    </div>
                  )}
                  {a.teamMembers && a.teamMembers.length > 0 && (
                    <div className="text-sm mt-2">
                      <span className="font-medium">Team:</span> {a.teamMembers.join(", ")}
                    </div>
                  )}
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 text-center text-gray-600">No achievements found.</div>
      )}
    </section>
  );
}