"use client";

import { useState } from "react";
import CertificateGenerator from "@/components/certificate/CertificateGenerator";

export default function CertificatePage() {
  const [event, setEvent] = useState<"cquest" | "dsaquest">("cquest");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Certificates</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
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

      <CertificateGenerator event={event} />
    </div>
  );
}
