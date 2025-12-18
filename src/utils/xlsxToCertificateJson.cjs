const XLSX = require("xlsx");
const fs = require("fs");


function toTitleCase(str) {
  return String(str)
    .toLowerCase()
    .split(" ")
    .map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}


function convertXlsxToCertificateJson(xlsxFilePath, outputJsonPath) {
  const workbook = XLSX.readFile(xlsxFilePath);

  const sheetName = "Participant Data";
  if (!workbook.Sheets[sheetName]) {
    throw new Error(`❌ Sheet "${sheetName}" not found`);
  }

  const sheet = workbook.Sheets[sheetName];
  const rawData = XLSX.utils.sheet_to_json(sheet);

  const formattedData = rawData
    .filter(row => row["First Name"] && row["Last Name"])
    .map(row => {
      const firstName = toTitleCase(row["First Name"].trim());
      const lastName = toTitleCase(row["Last Name"].trim());

      return {
        name: `${firstName} ${lastName}`,
      };
    });

  fs.writeFileSync(
    outputJsonPath,
    JSON.stringify(formattedData, null, 2),
    "utf-8"
  );

  console.log(
    `✅ ${formattedData.length} JSON generated`
  );
}

module.exports = { convertXlsxToCertificateJson };
