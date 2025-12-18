"use client";

import { useState, useMemo } from "react";
import CertificateGenerator from "@/components/certificate/CertificateGenerator";

import cQuestData from "@/data/certificates/c-quest.json";
import dsaQuestData from "@/data/certificates/dsa-quest.json";

export default function CertificateTabs() {
  const [event, setEvent] = useState<"cquest" | "dsaquest">("cquest");

  // 🔒 force correct data binding
  const participants = useMemo(() => {
    return event === "cquest" ? cQuestData : dsaQuestData;
  }, [event]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Certificates</h1>

      <div className="flex gap-3">
        <button
          onClick={() => setEvent("cquest")}
          className={`px-4 py-2 rounded ${
            event === "cquest"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          C Quest
        </button>

        <button
          onClick={() => setEvent("dsaquest")}
          className={`px-4 py-2 rounded ${
            event === "dsaquest"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          DSA Quest
        </button>
      </div>

      <CertificateGenerator
        event={event}
        participants={participants}
      />
    </div>
  );
}
