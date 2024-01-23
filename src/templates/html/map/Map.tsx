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
      showNorthArrow: boolean;
      showScale: boolean;
      hideResetControl?: boolean;
      geojsonData: string;
      id?: string;
      showPrint?: boolean;
      useScalebarStyle?: boolean;
      staticMode?: boolean;
      clipGeojsonData: string;
      osCopyright?: string;
      geojsonDataCopyright?: string;
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
      <my-map
        showNorthArrow={true}
        hideResetControl={true}
        showScale={true}
        geojsonData={JSON.stringify(props.boundary)}
        clipGeojsonData={JSON.stringify(props.clipGeojsonData)}
        osCopyright={osCopyright}
        geojsonDataCopyright={titleBoundaryCopyright}
      />
    );
  } else {
    return (
      <my-map
        showNorthArrow={true}
        hideResetControl={true}
        showScale={true}
        geojsonData={JSON.stringify(props.boundary)}
        clipGeojsonData={JSON.stringify(props.clipGeojsonData)}
      />
    );
  }
}
