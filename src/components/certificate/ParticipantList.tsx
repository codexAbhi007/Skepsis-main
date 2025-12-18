"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import DownloadButton from "./DownloadButton";

type Participant = {
  name: string;
  rank?: number;
};

type Props = {
  data: Participant[];
  event: "cquest" | "dsaquest";
};

const rankEmoji = (rank?: number) => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return "";
};

export default function ParticipantList({ data, event }: Props) {
  const [search, setSearch] = useState("");

  const filtered = data.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <SearchBar value={search} onChange={setSearch} />

      <div className="border rounded-lg max-h-[420px] overflow-y-auto">
        <ul className="divide-y">
          {filtered.map((p, i) => (
            <li
              key={i}
              className="flex justify-between items-center px-4 py-3 hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                {rankEmoji(p.rank)}
                {p.name}
              </span>

              <DownloadButton
                name={p.name}
                rank={p.rank ?? 0}
                event={event}
              />
            </li>
          ))}
        </ul>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-6">
          No participant found
        </p>
      )}
    </div>
  );
}
