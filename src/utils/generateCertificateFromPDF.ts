import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

type Args = {
  name: string;
  templatePath: string;
  fontPath: string;
  layout: {
    x: number;
    y: number;
    fontSize: number;
    color: [number, number, number];
  };
};

export async function generateCertificateFromPDF({
  name,
  templatePath,
  fontPath,
  layout,
}: Args) {
  const pdfRes = await fetch(templatePath);
  if (!pdfRes.ok) {
    throw new Error(`PDF not found at ${templatePath}`);
  }

  const pdfBytes = await pdfRes.arrayBuffer();

  const header = new TextDecoder().decode(pdfBytes.slice(0, 5));
  if (!header.startsWith("%PDF")) {
    throw new Error(`Invalid PDF file at ${templatePath}`);
  }

  const fontRes = await fetch(fontPath);
  if (!fontRes.ok) {
    throw new Error(`Font not found at ${fontPath}`);
  }

  const fontBytes = await fontRes.arrayBuffer();

  const pdfDoc = await PDFDocument.load(pdfBytes);
  pdfDoc.registerFontkit(fontkit);

  const font = await pdfDoc.embedFont(fontBytes);
  const page = pdfDoc.getPages()[0];

  const { x, y, fontSize, color } = layout;

  const textWidth = font.widthOfTextAtSize(name, fontSize);

  page.drawText(name, {
    x: x - textWidth / 2,
    y,
    size: fontSize,
    font,
    color: rgb(color[0], color[1], color[2]),
  });

  return await pdfDoc.save();
}
