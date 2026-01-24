"use client";

import { useMemo, useState, useEffect } from "react";

import DownloadButton from "./DownloadButton";
import NameAutocomplete from "./NameAutocomplete";

import cQuestData from "@/data/certificates/c-quest.json";
import dsaQuestData from "@/data/certificates/dsa-quest.json";

type Participant = {
  name: string;
  rank?: number;
};

type Props = {
  event: "cquest" | "dsaquest";
};

export default function CertificateGenerator({ event }: Props) {
  const participants: Participant[] = useMemo(() => {
    return event === "cquest" ? cQuestData : dsaQuestData;
  }, [event]);

  const [selected, setSelected] = useState<Participant | null>(null);

  // Reset selected participant on tab switch
  useEffect(() => {
    setSelected(null);
  }, [event]);

  return (
    <div className="space-y-6">
      {/* Autocomplete */}
      <NameAutocomplete
        participants={participants}
        onSelect={setSelected}
        resetKey={event}
      />

      {/* Preview */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 text-center bg-gray-50 dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Sample Certificate Preview
        </p>

        <img
          src={
            event === "cquest"
              ? "/certificates/c-quest-template.png"
              : "/certificates/dsa-quest-template.png"
          }
          alt="Certificate Preview"
          className="mx-auto max-h-[350px] opacity-90"
        />
      </div>

      {/* Generate */}
      {selected && (
        <div className="text-center">
          <DownloadButton
            name={selected.name}
            rank={selected.rank ?? 0}
            event={event}
          />
        </div>
      )}
    </div>
  );
}
