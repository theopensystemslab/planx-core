import { css, Global } from "@emotion/react";
import * as React from "react";

import Map from "./MapAndLabelMap.js";
import Table from "./MapAndLabelTable.js";

export function MapAndLabelHTML(props: {
  geojson: GeoJSON.FeatureCollection;
  boundingBox: GeoJSON.Feature;
  drawColor: string;
  schemaFieldValues: string[];
  schemaName: string;
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@opensystemslab/map@1.0.0-alpha.9"></script>
        <title>{`PlanX: ${props.schemaName}`}</title>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/Viglino/ol-ext/master/dist/ol-ext.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdn.rawgit.com/Viglino/ol-ext/master/dist/ol-ext.min.js"
        ></script>
      </head>
      <body>
        <Styles />
        <h1>{props.schemaName}</h1>
        <Map
          features={props.geojson}
          clipGeojsonData={props.boundingBox}
          drawColor={props.drawColor}
        />
        <Table
          geojson={props.geojson}
          schemaFieldValues={props.schemaFieldValues}
        />
      </body>
    </html>
  );
}

function Styles() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        body {
          font-family: "Inter", arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 18px;
          font-size: 1.125rem;
        }
        table,
        th,
        td {
          border: 1px solid;
        }
        table {
          border-collapse: collapse;
          margin-top: 20px;
          min-width: 650px;
          max-width: 800px;
        }
        th,
        td {
          padding: 10px;
          word-wrap: break-word;
        }
      `}
    />
  );
}
