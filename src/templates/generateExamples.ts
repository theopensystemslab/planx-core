import {
  createWriteStream,
  existsSync,
  mkdirSync,
  writeFileSync,
} from "node:fs";
import type { Writable as WritableStream } from "node:stream";

import { Packer } from "docx";

import type { Passport as IPassport } from "../types/index.js";
import { DrawBoundaryUserAction } from "../types/index.js";
import { buildTestTemplate } from "./docx/testTemplate.js";
import {
  generateApplicationHTML,
  generateDocxTemplateStream,
  generateMapHTML,
} from "./index.js";
import {
  buckinghamshireBoundary,
  exampleData,
  exampleLDCEPassport,
  exampleLDCPPassport,
  exampleWithSections,
} from "./mocks/index.js";

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

async function generateTemplateExamples() {
  // build test doc
  await Packer.toBuffer(buildTestTemplate()).then((buffer) => {
    writeFileSync(`./examples/test.docx`, buffer);
  });

  // setup test data
  const examples: Record<string, IPassport> = {
    LDCE: exampleLDCEPassport,
    LDCE_redacted: exampleLDCEPassport,
    LDCP: exampleLDCPPassport,
    LDCP_redacted: exampleLDCPPassport,
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

function resolveStream(stream: WritableStream): Promise<void> {
  return new Promise((resolve, reject) => {
    stream.on("error", reject);
    stream.on("finish", resolve);
  });
}
