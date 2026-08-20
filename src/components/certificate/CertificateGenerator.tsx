"use client";

import { useMemo, useState, useEffect } from "react";

import DownloadButton from "./DownloadButton";
import NameAutocomplete from "./NameAutocomplete";

import cQuestData from "@/data/certificates/c-quest.json";
import dsaQuestData from "@/data/certificates/dsa-quest.json";

// TODO: Replace these with the ACTUAL PDR JSON filenames
import pdrParticipationData from "@/data/certificates/pdr-2026-participation.json";
import pdrAppreciationData from "@/data/certificates/pdr-2026-appreciation.json";

type Participant = {
  name: string;
  rank?: number;
};

type Props = {
  event:
    | "cquest"
    | "dsaquest"
    | "pdrparticipation"
    | "pdrappreciation";
};

export default function CertificateGenerator({ event }: Props) {
  const participants: Participant[] = useMemo(() => {
    switch (event) {
      case "cquest":
        return cQuestData;

      case "dsaquest":
        return dsaQuestData;

      case "pdrparticipation":
        return pdrParticipationData;

      case "pdrappreciation":
        return pdrAppreciationData;

      default:
        return [];
    }
  }, [event]);

  const [selected, setSelected] = useState<Participant | null>(null);

  // Reset selected participant whenever the tab changes
  useEffect(() => {
    setSelected(null);
  }, [event]);

const template = useMemo(() => {
  switch (event) {
    case "cquest":
      return "/certificates/c-quest-template.png";

    case "dsaquest":
      return "/certificates/dsa-quest-template.png";

    case "pdrparticipation":
      return "/certificates/pdr2026/participation.png";

    case "pdrappreciation":
      return "/certificates/pdr2026/appreciation.png";

    default:
      return "";
  }
}, [event]);

  return (
    <div className="space-y-6">
      {/* Name Search / Autocomplete */}
      <NameAutocomplete
        participants={participants}
        onSelect={setSelected}
        resetKey={event}
      />

      {/* Certificate Preview */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 text-center bg-gray-50 dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Sample Certificate Preview
        </p>

        {template && (
          <img
            src={template}
            alt="Certificate Preview"
            className="mx-auto max-h-[350px] opacity-90"
          />
        )}
      </div>

      {/* Generate Certificate */}
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