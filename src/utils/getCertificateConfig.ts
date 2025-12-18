export type TextLayout = {
  x: number;
  y: number;
  fontSize: number;
  color: [number, number, number];
};

export function getCertificateConfig(
  event: "cquest" | "dsaquest",
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
      color: [0.027, 0.243, 0.475], // blue-ish (matches Canva)
    };

    if (rank === 1)
      return {
        template: "/certificates/cquest/rank1.pdf",
        font: "/certificates/cquest/Montserrat-BoldItalic.ttf",
        layout: baseLayout,
      };

    if (rank === 2)
      return {
        template: "/certificates/cquest/rank2.pdf",
        font: "/certificates/cquest/Montserrat-BoldItalic.ttf",
        layout: baseLayout,
      };

    if (rank === 3)
      return {
        template: "/certificates/cquest/rank3.pdf",
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
  const dsaLayout: TextLayout = {
    x: 420,
    y: 315,
    fontSize: 52,
    color: [0.10, 0.30, 0.20], // dark green (DSA Canva)
  };

  if (rank === 1)
    return {
      template: "/certificates/dsaquest/rank1.pdf",
      font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
      layout: dsaLayout,
    };

  if (rank === 2)
    return {
      template: "/certificates/dsaquest/rank2.pdf",
      font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
      layout: dsaLayout,
    };

  if (rank === 3)
    return {
      template: "/certificates/dsaquest/rank3.pdf",
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
