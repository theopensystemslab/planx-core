import * as React from "react";

// Sourced from editor.planx.uk/src/@planx/components/DrawBoundary/model
export enum DrawBoundaryUserAction {
  Accept = "Accepted the title boundary",
  Amend = "Amended the title boundary",
  Draw = "Drew a custom boundary",
  Upload = "Uploaded a location plan",
}

const osCopyright = `Basemap subject to Crown copyright and database rights ${new Date().getFullYear()} OS (0)100024857`;
const titleBoundaryCopyright = `<a href="https://www.planning.data.gov.uk/dataset/title-boundary" target="_blank">Title boundary</a> subject to Crown copyright and database rights ${new Date().getFullYear()} OS (0)100026316`;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "my-map": MapProps;
    }

    interface MapProps {
      showNorthArrow?: boolean;
      showPrint?: boolean;
      showScale?: boolean;
      useScalebarStyle?: boolean;
      staticMode?: boolean;
      hideResetControl?: boolean;
      resetControlImage?: string;
      geojsonData?: string;
      geojsonColor?: string;
      geojsonFill?: boolean;
      geojsonBuffer?: string;
      geojsonDataCopyright?: string;
      id?: string;
      clipGeojsonData?: string;
      osCopyright?: string;
      osProxyEndpoint?: string;
      drawMode?: boolean;
      drawPointer?: string;
      drawType?: string;
      drawGeojsonData?: string;
      drawGeojsonDataBuffer?: string;
      drawGeojsonDataCopyright?: string;
      zoom?: number;
      maxZoom?: number;
      latitude?: number;
      longitude?: number;
      showMarker?: boolean;
      markerLatitude?: number;
      markerLongitude?: number;
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
