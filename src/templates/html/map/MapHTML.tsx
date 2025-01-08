import { css, Global } from "@emotion/react";
import * as React from "react";

import Map from "./Map";
import { DrawBoundaryUserAction } from "../../../types";

export function MapHTML(props: {
  geojson: object;
  boundingBox: GeoJSON.Feature;
  userAction?: DrawBoundaryUserAction;
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@opensystemslab/map@0.8.3"></script>
        <title>PlanX Submission Boundary</title>
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
        <h1>Boundary</h1>
        <Map
          boundary={props.geojson}
          clipGeojsonData={props.boundingBox}
          userAction={props.userAction}
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
      `}
    />
  );
}
