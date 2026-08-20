export type TextLayout = {
  x: number;
  y: number;
  fontSize: number;
  color: [number, number, number];
};

type CertificateEvent =
  | "cquest"
  | "dsaquest"
  | "pdrparticipation"
  | "pdrappreciation";

export function getCertificateConfig(
  event: CertificateEvent,
  rank: number
): {
  template: string;
  font: string;
  layout: TextLayout;
} {
  /* ---------------- C QUEST ---------------- */

  if (event === "cquest") {
    const baseLayout: TextLayout = {
      x: 420,
      y: 280,
      fontSize: 46,
      color: [0.027, 0.243, 0.475],
    };

    if (rank === 1)
      return {
        template: "/certificates/cquest/participation.pdf",
        font: "/certificates/cquest/Montserrat-BoldItalic.ttf",
        layout: baseLayout,
      };

    if (rank === 2)
      return {
        template: "/certificates/cquest/participation.pdf",
        font: "/certificates/cquest/Montserrat-BoldItalic.ttf",
        layout: baseLayout,
      };

    if (rank === 3)
      return {
        template: "/certificates/cquest/participation.pdf",
        font: "/certificates/cquest/Montserrat-BoldItalic.ttf",
        layout: baseLayout,
      };

    return {
      template: "/certificates/cquest/participation.pdf",
      font: "/certificates/cquest/Montserrat-BoldItalic.ttf",
      layout: {
        ...baseLayout,
        fontSize: 40,
      },
    };
  }

  /* ---------------- DSA QUEST ---------------- */

  if (event === "dsaquest") {
    const dsaLayout: TextLayout = {
      x: 420,
      y: 315,
      fontSize: 52,
      color: [0.10, 0.30, 0.20],
    };

    if (rank === 1)
      return {
        template: "/certificates/dsaquest/participation.pdf",
        font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
        layout: dsaLayout,
      };

    if (rank === 2)
      return {
        template: "/certificates/dsaquest/participation.pdf",
        font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
        layout: dsaLayout,
      };

    if (rank === 3)
      return {
        template: "/certificates/dsaquest/participation.pdf",
        font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
        layout: dsaLayout,
      };

    return {
      template: "/certificates/dsaquest/participation.pdf",
      font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
      layout: {
        ...dsaLayout,
        fontSize: 46,
      },
    };
  }

  /* ---------------- PDR 2026 PARTICIPATION ---------------- */

if (event === "pdrparticipation") {
  return {
    template: "/certificates/pdr2026/participation.pdf",
    font: "/certificates/pdr2026/Niccone-Regular.ttf",
    layout: {
      x: 420,
      y: 287,
      fontSize: 70,
      color: [0.60, 0.482, 0.294],
    },
  };
}

  /* ---------------- PDR 2026 APPRECIATION ---------------- */

  if (event === "pdrappreciation") {
    const appreciationLayout: TextLayout = {
      x: 420,
      y: 285,
      fontSize: 70,
      color: [0.04, 0.02, 0.40],
    };

    return {
      template: "/certificates/pdr2026/appreciation.pdf",
      font: "/certificates/pdr2026/AlexBrush-Regular.ttf",
      layout: appreciationLayout,
    };
  }

  throw new Error(`Unknown certificate event: ${event}`);
}