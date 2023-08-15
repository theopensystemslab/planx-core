import * as React from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "my-map": MapProps;
    }

    interface MapProps {
      showNorthArrow: boolean;
      showScale: boolean;
      hideResetControl?: boolean;
      geojsonData: string;
      id?: string;
      showPrint?: boolean;
      useScalebarStyle?: boolean;
      staticMode?: boolean;
      clipGeojsonData: string;
    }
  }
}

export default function Map(props: {
  boundary: object;
  clipGeojsonData: GeoJSON.Feature;
}) {
  return (
    <my-map
      showNorthArrow={true}
      showScale={true}
      geojsonData={JSON.stringify(props.boundary)}
      clipGeojsonData={JSON.stringify(props.clipGeojsonData)}
    />
  );
}
