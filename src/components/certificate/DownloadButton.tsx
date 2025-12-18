"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { getCertificateConfig } from "@/utils/getCertificateConfig";
import { generateCertificateFromPDF } from "@/utils/generateCertificateFromPDF";

type Props = {
  name: string;
  rank: number;
  event: "cquest" | "dsaquest";
};

export default function DownloadButton({ name, rank, event }: Props) {
  const lock = useRef(false);

  const handleDownload = async () => {
    if (lock.current) return;
    lock.current = true;

    try {
      const config = getCertificateConfig(event, rank);

      const pdfBytes = await generateCertificateFromPDF({
        name,
        templatePath: config.template,
        fontPath: config.font,
      });

      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${name}-certificate.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to generate certificate");
    } finally {
      lock.current = false;
    }
  };

  return (
    <button
      onClick={handleDownload}
      title="Download certificate"
      className="p-2 rounded-full text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition"
    >
      <Download size={18} />
    </button>
  );
}
