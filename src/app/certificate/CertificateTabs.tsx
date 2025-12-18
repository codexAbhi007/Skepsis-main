"use client";

import { useState } from "react";
import ParticipantList from "@/components/certificate/ParticipantList";
import cQuest from "@/data/certificates/c-quest.json";
import dsaQuest from "@/data/certificates/dsa-quest.json";

export default function CertificateTabs() {
  const [event, setEvent] = useState<"cquest" | "dsaquest">("cquest");

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setEvent("cquest")}
          className={`px-4 py-2 rounded ${
            event === "cquest" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          C Quest
        </button>

        <button
          onClick={() => setEvent("dsaquest")}
          className={`px-4 py-2 rounded ${
            event === "dsaquest" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          DSA Quest
        </button>
      </div>

      <ParticipantList
        data={event === "cquest" ? cQuest : dsaQuest}
        event={event}
      />
    </div>
  );
}
