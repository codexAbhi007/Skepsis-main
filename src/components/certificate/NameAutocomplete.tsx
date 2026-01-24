"use client";

import { useMemo, useState, useEffect } from "react";

type Participant = {
  name: string;
  rank?: number;
};

type Props = {
  participants: Participant[];
  onSelect: (p: Participant) => void;
  resetKey: string; // 👈 NEW
};

export default function NameAutocomplete({
  participants,
  onSelect,
  resetKey,
}: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // ✅ CLEAR INPUT WHEN TAB CHANGES
  useEffect(() => {
    setQuery("");
    setOpen(false);
  }, [resetKey]);

  // Remove duplicate names safely
  const uniqueParticipants = useMemo(() => {
    const map = new Map<string, Participant>();
    participants.forEach((p) => {
      if (!map.has(p.name)) map.set(p.name, p);
    });
    return Array.from(map.values());
  }, [participants]);

  const filtered = uniqueParticipants.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        placeholder="Search your name..."
        className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
      />

      {open && query && (
        <div className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded mt-1 max-h-60 overflow-y-auto shadow-lg">
          {filtered.length === 0 && (
            <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
              No results
            </div>
          )}

          {filtered.map((p) => (
            <div
              key={p.name}
              className="px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-white transition-colors"
              onClick={() => {
                onSelect(p);
                setQuery(p.name);
                setOpen(false);
              }}
            >
              {p.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
