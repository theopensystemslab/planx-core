import {
  createWriteStream,
  writeFileSync,
  existsSync,
  mkdirSync,
} from "node:fs";
import { Packer } from "docx";
import {
  generateDocxTemplateStream,
  generateMapHTMLStream,
  generateApplicationHTMLStream,
} from "./index";
import { buildTestTemplate } from "./docx/testTemplate";
import exampleLDCEData from "./mocks/exampleLDCE.json";
import exampleLDCPData from "./mocks/exampleLDCP.json";
import exampleData from "./mocks/example.json";
import exampleSectionData from "./mocks/exampleWithSections.json";

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
  const data = exampleData.data;
  const sectionData = exampleSectionData.data;
  const geojson = exampleData.geojson;

  const promises: Promise<void>[] = [];

  const htmlFile = createWriteStream(`./examples/application.html`);
  const htmlStream = generateApplicationHTMLStream(data).pipe(htmlFile);
  promises.push(resolveStream(htmlStream));

  const sectionHtmlFile = createWriteStream(
    `./examples/application_with_sections.html`
  );
  const sectionHtmlStream =
    generateApplicationHTMLStream(sectionData).pipe(sectionHtmlFile);
  promises.push(resolveStream(sectionHtmlStream));

  const mapFile = createWriteStream(`./examples/map.html`);
  const mapStream = generateMapHTMLStream(geojson).pipe(mapFile);
  promises.push(resolveStream(mapStream));

  await waitForAllOrExit(promises);
}

async function generateTemplateExamples() {
  // build test doc
  await Packer.toBuffer(buildTestTemplate()).then((buffer) => {
    writeFileSync(`./examples/test.docx`, buffer);
  });

  // setup test data
  const examples: Record<string, { data: any }> = {
    LDCE: exampleLDCEData as { data: any },
    LDCE_redacted: exampleLDCEData as { data: any },
    LDCP: exampleLDCPData as { data: any },
    LDCP_redacted: exampleLDCPData as { data: any },
  };

  // build templates
  const promises: Promise<void>[] = Object.keys(examples).map(
    async (templateName) => {
      const file = createWriteStream(`./examples/${templateName}.docx`);
      const docStream = generateDocxTemplateStream({
        templateName,
        passport: examples[templateName],
      }).pipe(file);
      return resolveStream(docStream);
    }
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
