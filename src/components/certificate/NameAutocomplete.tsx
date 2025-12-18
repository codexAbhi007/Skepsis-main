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
    p.name.toLowerCase().includes(query.toLowerCase())
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
        className="w-full border rounded px-3 py-2"
      />

      {open && query && (
        <div className="absolute z-10 w-full bg-white border rounded mt-1 max-h-60 overflow-y-auto">
          {filtered.length === 0 && (
            <div className="px-3 py-2 text-sm text-gray-500">
              No results
            </div>
          )}

          {filtered.map((p) => (
            <div
              key={p.name}
              className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
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
