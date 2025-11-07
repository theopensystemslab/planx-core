import { existsSync, mkdirSync, writeFileSync } from "node:fs";

import { GeoJSON } from "../export/digitalPlanning/schemas/application/types.js";
import { DrawBoundaryUserAction } from "../types/index.js";
import {
  generateApplicationHTML,
  generateMapAndLabelHTML,
  generateMapHTML,
} from "./index.js";
import {
  buckinghamshireBoundary,
  exampleData,
  exampleDataTwo,
  mapAndLabelNodePropsA,
  mapAndLabelNodePropsB,
  mapAndLabelOutputA,
  mapAndLabelOutputB,
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
    planXExportData: exampleDataTwo,
    boundingBox: buckinghamshireBoundary,
    userAction: DrawBoundaryUserAction.Draw,
  });
  writeFileSync(`./examples/application.html`, applicationHTML);

  // DrawBoundary location plan
  const mapHTML = generateMapHTML({
    geojson: exampleDataTwo.data.proposal.boundary?.site as GeoJSON,
    boundingBox: buckinghamshireBoundary,
    userAction: DrawBoundaryUserAction.Draw,
  });
  writeFileSync(`./examples/map.html`, mapHTML);

  // MapAndLabel A
  const mapAndLabelAHTML = generateMapAndLabelHTML({
    geojson: mapAndLabelOutputA,
    boundingBox: mapAndLabelNodePropsA.boundaryBBox,
    drawColor: mapAndLabelNodePropsA.drawColor,
    schemaFieldValues: mapAndLabelNodePropsA.schema.fields.map(
      (field) => field.data.fn as string,
    ),
    schemaName: mapAndLabelNodePropsA.schemaName,
  });
  writeFileSync(`./examples/Sketch plan - TPO.html`, mapAndLabelAHTML);

  // MapAndLabel B
  const mapAndLabelBHTML = generateMapAndLabelHTML({
    geojson: mapAndLabelOutputB,
    boundingBox: mapAndLabelNodePropsB.boundaryBBox,
    drawColor: mapAndLabelNodePropsB.drawColor,
    schemaFieldValues: mapAndLabelNodePropsB.schema.fields.map(
      (field) => field.data.fn as string,
    ),
    schemaName: mapAndLabelNodePropsB.schemaName,
  });
  writeFileSync(
    `./examples/Sketch plan - Conservation area.html`,
    mapAndLabelBHTML,
  );
}
