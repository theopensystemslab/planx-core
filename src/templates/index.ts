import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { Application } from "../export/digitalPlanning/schemas/application/types.js";
import type {
  DrawBoundaryUserAction
} from "../types/index.js";
import { ApplicationHTML } from "./html/application/ApplicationHTML.js";
import { MapHTML } from "./html/map/MapHTML.js";
import { MapAndLabelHTML } from "./html/mapAndLabel/MapAndLabelHTML.js";

export function generateApplicationHTML({
  planXExportData,
  boundingBox,
  userAction,
}: {
  planXExportData: Application;
  boundingBox: GeoJSON.Feature;
  userAction?: DrawBoundaryUserAction;
}): string {
  return renderToStaticMarkup(
    React.createElement(ApplicationHTML, {
      data: planXExportData,
      boundingBox,
      userAction,
    }),
  );
}

export function generateMapHTML({
  geojson,
  boundingBox,
  userAction,
}: {
  geojson: object;
  boundingBox: GeoJSON.Feature;
  userAction?: DrawBoundaryUserAction;
}): string {
  return renderToStaticMarkup(
    React.createElement(MapHTML, { geojson, boundingBox, userAction }),
  );
}

export function generateMapAndLabelHTML({
  geojson,
  boundingBox,
  drawColor,
  schemaFieldValues,
  schemaName,
}: {
  geojson: GeoJSON.FeatureCollection;
  boundingBox: GeoJSON.Feature;
  drawColor: string;
  schemaFieldValues: string[];
  schemaName: string;
}): string {
  return renderToStaticMarkup(
    React.createElement(MapAndLabelHTML, {
      geojson,
      boundingBox,
      drawColor,
      schemaFieldValues,
      schemaName,
    }),
  );
}
