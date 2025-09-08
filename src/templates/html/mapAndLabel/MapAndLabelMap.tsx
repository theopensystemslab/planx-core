import * as React from "react";

const osCopyright = `Basemap subject to Crown copyright and database rights ${new Date().getFullYear()} OS AC0000812160`;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "my-map": MapProps;
    }

    interface MapProps {
      areaUnit?: "m2" | "ha";
      ariaLabelOlFixedOverlay?: string;
      basemap?: string;
      clickFeatures?: boolean;
      clipGeojsonData?: string;
      collapseAttributions?: boolean;
      disableVectorTiles?: boolean;
      drawColor?: string;
      drawFillColor?: string;
      drawGeojsonData?: string;
      drawGeojsonDataBuffer?: number;
      drawGeojsonDataCopyright?: string;
      drawMany?: boolean;
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
      showGeojsonDataLabels?: boolean;
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
      osApiKey?: string;
      osCopyright?: string;
      osProxyEndpoint?: string;
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

export default function MapAndLabelMap(props: {
  features: object;
  clipGeojsonData: GeoJSON.Feature;
  drawColor: string;
  osApiKey?: string;
}) {
  return (
    <>
      <my-map
        id="map-and-label-map"
        showNorthArrow={true}
        hideResetControl={true}
        showScale={true}
        useScalebarStyle={true}
        showPrint={true}
        collapseAttributions={true}
        basemap={props.osApiKey ? `OSVectorTile` : `OSM`}
        osApiKey={props.osApiKey || ""}
        geojsonData={JSON.stringify(props.features)}
        geojsonColor={props.drawColor}
        geojsonFill={true}
        showGeojsonDataLabels={true}
        clipGeojsonData={JSON.stringify(props.clipGeojsonData)}
        osCopyright={osCopyright}
      />
    </>
  );
}
