import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

type Args = {
  name: string;
  templatePath: string;
  fontPath: string;
};

export async function generateCertificateFromPDF({
  name,
  templatePath,
  fontPath,
}: Args): Promise<Uint8Array> {
  const pdfRes = await fetch(templatePath);
  if (!pdfRes.ok) throw new Error(`PDF not found: ${templatePath}`);

  const pdfBytes = await pdfRes.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);
  pdfDoc.registerFontkit(fontkit);

  const fontRes = await fetch(fontPath);
  if (!fontRes.ok) throw new Error(`Font not found: ${fontPath}`);

  const fontBytes = await fontRes.arrayBuffer();
  const font = await pdfDoc.embedFont(fontBytes);

  const page = pdfDoc.getPages()[0];
  const { width, height } = page.getSize();

  const fontSize = name.length > 25 ? 32 : 38;
  const textWidth = font.widthOfTextAtSize(name, fontSize);

  page.drawText(name, {
    x: (width - textWidth) / 2,
    y: height / 2 + 10,
    size: fontSize,
    font,
    color: rgb(0.125, 0.267, 0.231), // #20443b
  });

  return await pdfDoc.save();
}
