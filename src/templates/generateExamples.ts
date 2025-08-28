import { existsSync, mkdirSync, writeFileSync } from "node:fs";

import { DrawBoundaryUserAction } from "../types/index.js";
import { generateApplicationHTML, generateMapHTML } from "./index.js";
import {
  buckinghamshireBoundary,
  exampleData,
  exampleWithSections,
} from "./mocks/index.js";

(async () => {
  try {
    await setUpExampleDir();
    await generateHTMLExamples();
  } catch (e) {
    console.log("Example generation failed");
    console.log(e);
  }
})();

async function setUpExampleDir() {
  if (!existsSync("./examples")) {
    mkdirSync("./examples");
  }
}

async function generateHTMLExamples() {
  const applicationHTML = generateApplicationHTML({
    planXExportData: exampleData.data,
    boundingBox: buckinghamshireBoundary,
    userAction: DrawBoundaryUserAction.Draw,
  });
  writeFileSync(`./examples/application.html`, applicationHTML);

  const sectionHTML = generateApplicationHTML({
    planXExportData: exampleWithSections.data,
    boundingBox: buckinghamshireBoundary,
    userAction: DrawBoundaryUserAction.Draw,
  });
  writeFileSync(`./examples/application_with_sections.html`, sectionHTML);

  const mapHTML = generateMapHTML({
    geojson: exampleData.geojson,
    boundingBox: buckinghamshireBoundary,
    userAction: DrawBoundaryUserAction.Draw,
  });
  writeFileSync(`./examples/map.html`, mapHTML);
}
