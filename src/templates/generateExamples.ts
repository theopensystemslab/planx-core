import {
  createWriteStream,
  existsSync,
  mkdirSync,
  writeFileSync,
} from "node:fs";

import { Packer } from "docx";

import type { Passport } from "../types";
import { buildTestTemplate } from "./docx/testTemplate";
import {
  generateApplicationHTML,
  generateDocxTemplateStream,
  generateMapHTML,
} from "./index";
import exampleData from "./mocks/example.json";
import exampleLDCEData from "./mocks/exampleLDCE.json";
import exampleLDCPData from "./mocks/exampleLDCP.json";
import exampleSectionData from "./mocks/exampleWithSections.json";
import { buckinghamshireBoundary } from "./mocks/ukBoundary";

(async () => {
  try {
    await setUpExampleDir();
    await generateHTMLExamples();
    await generateTemplateExamples();
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
  });
  writeFileSync(`./examples/application.html`, applicationHTML);

  const sectionHTML = generateApplicationHTML({
    planXExportData: exampleSectionData.data,
    boundingBox: buckinghamshireBoundary,
  });
  writeFileSync(`./examples/application_with_sections.html`, sectionHTML);

  const mapHTML = generateMapHTML({
    geojson: exampleData.geojson,
    boundingBox: buckinghamshireBoundary,
  });
  writeFileSync(`./examples/map.html`, mapHTML);
}

async function generateTemplateExamples() {
  // build test doc
  await Packer.toBuffer(buildTestTemplate()).then((buffer) => {
    writeFileSync(`./examples/test.docx`, buffer);
  });

  // setup test data
  const examples = {
    LDCE: exampleLDCEData as Passport,
    LDCE_redacted: exampleLDCEData as Passport,
    LDCP: exampleLDCPData as Passport,
    LDCP_redacted: exampleLDCPData as Passport,
  };

  // build templates
  const promises: Promise<void>[] = Object.entries(examples).map(
    async ([templateName, passport]) => {
      const file = createWriteStream(`./examples/${templateName}.docx`);
      const docStream = generateDocxTemplateStream({
        templateName,
        passport,
      }).pipe(file);
      return resolveStream(docStream);
    },
  );

  await waitForAllOrExit(promises);
}

async function waitForAllOrExit(promises: Promise<void>[]) {
  return Promise.all(promises).catch((e) => {
    console.log(e);
    process.exit(1); // exit with an error code if examples fail to generate
  });
}

function resolveStream(stream): Promise<void> {
  return new Promise((resolve, reject) => {
    stream.on("error", reject);
    stream.on("finish", resolve);
  });
}
