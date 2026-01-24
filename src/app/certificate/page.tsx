"use client";

import { useState } from "react";
import CertificateGenerator from "@/components/certificate/CertificateGenerator";

export default function CertificatePage() {
  const [event, setEvent] = useState<"cquest" | "dsaquest">("cquest");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Certificates</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
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
      </div>

      <CertificateGenerator event={event} />
    </div>
  );
}
