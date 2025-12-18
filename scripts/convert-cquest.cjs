const {
  convertXlsxToCertificateJson
} = require("../src/utils/xlsxToCertificateJson.cjs");

convertXlsxToCertificateJson(
  "./data/C-Quest3.0.xlsx",
  "./src/data/certificates/c-quest.json"
);

convertXlsxToCertificateJson(
  "./data/DSA-Quest2.0.xlsx",
  "./src/data/certificates/dsa-quest.json"
);
