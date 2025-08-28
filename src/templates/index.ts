import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import type {
  DrawBoundaryUserAction,
  PlanXExportData,
} from "../types/index.js";
import { ApplicationHTML } from "./html/application/ApplicationHTML.js";
import { MapHTML } from "./html/map/MapHTML.js";

export function generateApplicationHTML({
  planXExportData,
  boundingBox,
  userAction,
}: {
  planXExportData: PlanXExportData[];
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
