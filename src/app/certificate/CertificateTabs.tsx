"use client";

import { useMemo, useState } from "react";
import CertificateGenerator from "@/components/certificate/CertificateGenerator";

import cQuestData from "@/data/certificates/c-quest.json";
import dsaQuestData from "@/data/certificates/dsa-quest.json";
import pdrParticipationData from "@/data/certificates/pdr-2026-participation.json";
import pdrAppreciationData from "@/data/certificates/pdr-2026-appreciation.json";

type CertificateEvent =
  | "cquest"
  | "dsaquest"
  | "pdrparticipation"
  | "pdrappreciation";

export default function CertificateTabs() {
  const [event, setEvent] = useState<CertificateEvent>("cquest");

  const participants = useMemo(() => {
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
        return cQuestData;
    }
  }, [event]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Certificates
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">

        {/* C Quest */}
        <button
          onClick={() => setEvent("cquest")}
          className={`px-4 py-2 rounded transition-colors ${
            event === "cquest"
              ? "bg-blue-600 text-white dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          C Quest
        </button>

        {/* DSA Quest */}
        <button
          onClick={() => setEvent("dsaquest")}
          className={`px-4 py-2 rounded transition-colors ${
            event === "dsaquest"
              ? "bg-blue-600 text-white dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          DSA Quest
        </button>

        {/* PDR Participation */}
        <button
          onClick={() => setEvent("pdrparticipation")}
          className={`px-4 py-2 rounded transition-colors ${
            event === "pdrparticipation"
              ? "bg-blue-600 text-white dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          PDR 2026 – Participation
        </button>

        {/* PDR Appreciation */}
        <button
          onClick={() => setEvent("pdrappreciation")}
          className={`px-4 py-2 rounded transition-colors ${
            event === "pdrappreciation"
              ? "bg-blue-600 text-white dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          PDR 2026 – Appreciation
        </button>

      </div>

      <CertificateGenerator
        event={event}
        participants={participants}
      />
    </div>
  );
}