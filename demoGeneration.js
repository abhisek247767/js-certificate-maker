import path from "path";
import { fileURLToPath } from "url";
import { rgb } from "pdf-lib";
import { generateCertificates } from './src/pdfGenerator.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontUrl = path.resolve(__dirname, "./assets/DancingScript-Variable.ttf");
const pdfTemplateUrl = path.resolve(__dirname, "./assets/certificate1.pdf");
const outputDir = path.resolve(__dirname, "output");

const names = ["John Doe", "Jane Smith", "Max Mustermann"];
const customColor = rgb(0.5, 0, 0.5);

generateCertificates(
  fontUrl,
  pdfTemplateUrl,
  names,
  outputDir,
  customColor,
  100,
  -50
)
  .then(() => console.log("All PDFs generated successfully"))
  .catch((error) => console.error("Error generating PDFs:", error));