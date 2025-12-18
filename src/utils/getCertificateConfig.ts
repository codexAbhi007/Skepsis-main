export function getCertificateConfig(
  event: "cquest" | "dsaquest",
  rank?: number
) {
  if (event === "cquest") {
    if (rank === 1)
      return {
        template: "/certificates/cquest/rank1.pdf",
        font: "/certificates/cquest/Montserrat-Bold.ttf",
      };
    if (rank === 2)
      return {
        template: "/certificates/cquest/rank2.pdf",
        font: "/certificates/cquest/Montserrat-Bold.ttf",
      };
    if (rank === 3)
      return {
        template: "/certificates/cquest/rank3.pdf",
        font: "/certificates/cquest/Montserrat-Bold.ttf",
      };

    return {
      template: "/certificates/cquest/participation.pdf",
      font: "/certificates/cquest/Montserrat-Bold.ttf",
    };
  }

  // ✅ DSA QUEST
  if (rank === 1)
    return {
      template: "/certificates/dsaquest/rank1.pdf",
      font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
    };
  if (rank === 2)
    return {
      template: "/certificates/dsaquest/rank2.pdf",
      font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
    };
  if (rank === 3)
    return {
      template: "/certificates/dsaquest/rank3.pdf",
      font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
    };

  return {
    template: "/certificates/dsaquest/participation.pdf",
    font: "/certificates/dsaquest/AlexBrush-Regular.ttf",
  };
}
