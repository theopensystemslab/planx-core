import * as React from "react";

import { DrawBoundaryUserAction } from "../../../types/index.js";

const osCopyright = `Basemap subject to Crown copyright and database rights ${new Date().getFullYear()} OS AC0000812160`;
const titleBoundaryCopyright = `<a href="https://www.planning.data.gov.uk/dataset/title-boundary" target="_blank">Title boundary</a> subject to Crown copyright and database rights ${new Date().getFullYear()} OS (0)100026316`;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "my-map": MapProps;
    }

    interface MapProps {
      areaUnit?: "m2" | "ha";
      ariaLabelOlFixedOverlay?: string;
      clickFeatures?: boolean;
      clipGeojsonData?: string;
      collapseAttributions?: boolean;
      disableVectorTiles?: boolean;
      drawColor?: string;
      drawFillColor?: string;
      drawGeojsonData?: string;
      drawGeojsonDataBuffer?: number;
      drawGeojsonDataCopyright?: string;
      drawMode?: boolean;
      drawPointColor?: string;
      drawPointer?: "crosshair" | "dot";
      drawType?: "Polygon" | "Point";
      featureBorderNone?: boolean;
      featureBuffer?: number;
      featureColor?: string;
      featureFill?: string;
      geojsonBuffer?: number;
      geojsonColor?: string;
      geojsonData?: string;
      geojsonDataCopyright?: string;
      geojsonFill?: boolean;
      hideResetControl?: boolean;
      id?: string;
      latitude?: number;
      longitude?: number;
      markerColor?: string;
      markerImage?: "circle" | "pin";
      markerLatitude?: number;
      markerLongitude?: number;
      maxZoom?: number;
      minZoom?: number;
      osCopyright?: string;
      osFeaturesApiKey?: string;
      osProxyEndpoint?: string;
      osVectorTilesApiKey?: string;
      projection?: "EPSG:4326" | "EPSG:3857" | "EPSG:27700";
      resetControlImage?: "unicode" | "trash";
      showCentreMarker?: boolean;
      showFeaturesAtPoint?: string;
      showGeojsonDataMarkers?: boolean;
      showNorthArrow?: boolean;
      showPrint?: boolean;
      showScale?: boolean;
      staticMode?: boolean;
      style?: any;
      useScalebarStyle?: boolean;
      zoom?: number;
    }
  }
}

export default function Map(props: {
  boundary: object;
  clipGeojsonData: GeoJSON.Feature;
  userAction?: DrawBoundaryUserAction;
}) {
  if (
    props.userAction &&
    [DrawBoundaryUserAction.Accept, DrawBoundaryUserAction.Amend].includes(
      props.userAction,
    )
  ) {
    return (
      <>
        <my-map
          id="boundary-map"
          showNorthArrow={true}
          hideResetControl={true}
          showScale={true}
          useScalebarStyle={true}
          showPrint={true}
          geojsonData={JSON.stringify(props.boundary)}
          clipGeojsonData={JSON.stringify(props.clipGeojsonData)}
          osCopyright={osCopyright}
          geojsonDataCopyright={titleBoundaryCopyright}
        />
        <p style={{ fontSize: ".7em" }}>
          Source: PlanX user {props.userAction.toLowerCase()}.
        </p>
      </>
    );
  } else {
    return (
      <>
        <my-map
          id="boundary-map"
          showNorthArrow={true}
          hideResetControl={true}
          showScale={true}
          useScalebarStyle={true}
          showPrint={true}
          geojsonData={JSON.stringify(props.boundary)}
          clipGeojsonData={JSON.stringify(props.clipGeojsonData)}
        />
        {props.userAction && (
          <p style={{ fontSize: ".7em" }}>
            Source: PlanX user {props.userAction.toLowerCase()}.
          </p>
        )}
      </>
    );
  }
}
