import { css, Global } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import { groupBy } from "lodash-es";
import * as React from "react";

import {
  Application,
  OSSiteAddress,
  QuestionAndResponses,
} from "../../../export/digitalPlanning/schemas/application/types.js";
import type { DrawBoundaryUserAction, Response } from "../../../types/index.js";
import Map from "../map/Map.js";
import { prettyResponse } from "./helpers.js";

function Highlights(props: { data: Application }): JSX.Element {
  const appData = props.data;

  const siteAddress = appData.data.property.address as OSSiteAddress;
  const sessionId = appData.metadata.id;

  const appFee = appData.data.application.fee;

  // assume no payment to start
  let feeCarrying = false;
  let payRef: string | undefined = undefined;
  let feePaid: number = 0;

  // if this has a payment, set values
  if (appFee && "payable" in appFee) {
    feeCarrying = true;
    payRef = appFee.reference?.govPay;
    feePaid = appFee.calculated;
  }

  // submitted at value
  const submittedAt = new Date(appData.metadata.submittedAt).toLocaleDateString(
    "en-GB",
  );

  return (
    <Box component="dl" sx={{ ...gridStyles, border: "none" }}>
      <React.Fragment key={"address"}>
        <dt>Property address</dt>
        <dd>
          {[siteAddress?.title, siteAddress?.town, siteAddress?.postcode]
            .filter(Boolean)
            .join(" ")}
        </dd>
        <dd>{""}</dd>
      </React.Fragment>
      <React.Fragment key={"sessionId"}>
        <dt>Planning application reference</dt>
        <dd>{sessionId}</dd>
        <dd>{""}</dd>
      </React.Fragment>
      {feeCarrying && (
        <>
          <React.Fragment key={"payReference"}>
            <dt>GOV.UK Pay reference</dt>
            <dd>{payRef}</dd>
            <dd>{""}</dd>
          </React.Fragment>
          <React.Fragment key={"fee"}>
            <dt>Fee paid</dt>
            <dd>{typeof feePaid === "number" && `£${feePaid.toFixed(2)}`}</dd>
            <dd>{""}</dd>
          </React.Fragment>
        </>
      )}
      <React.Fragment key={"createdDate"}>
        <dt>{feeCarrying ? "Paid and submitted on" : "Submitted on"}</dt>
        <dd>{submittedAt}</dd>
        <dd>{""}</dd>
      </React.Fragment>
    </Box>
  );
}

function Result(props: { data: Application }): JSX.Element {
  const result = props.data.preAssessment?.map((res) => {
    return { ...res, heading: `${res.value}` };
  })[0];

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <h2>It looks like</h2>
      <span
        style={{ fontWeight: 700, padding: ".5em", backgroundColor: "#ffdd00" }}
      >
        {result?.heading}
      </span>
      <p>
        This pre-assessment is based on the information provided by the
        applicant.
      </p>
    </Box>
  );
}

function AboutTheProperty(props: { data: Application }): JSX.Element {
  const siteAddress = props.data.data.property.address as OSSiteAddress;

  return (
    <Box>
      <h2>About the property</h2>
      <Box component="dl" sx={gridStyles}>
        <React.Fragment key={"address"}>
          <dt>Address</dt>
          <dd>
            {[siteAddress?.title, siteAddress?.town, siteAddress?.postcode]
              .filter(Boolean)
              .join(" ")}
          </dd>
          <dd>{""}</dd>
        </React.Fragment>
        <React.Fragment key={"uprn"}>
          <dt>UPRN</dt>
          <dd>{siteAddress?.["uprn"]}</dd>
          <dd>{""}</dd>
        </React.Fragment>
        <React.Fragment key={"coordinate"}>
          <dt>Coordinate (lng, lat)</dt>
          <dd>
            {siteAddress?.longitude}, {siteAddress?.latitude}
          </dd>
          <dd>{""}</dd>
        </React.Fragment>
      </Box>
    </Box>
  );
}

function Boundary(props: { data: Application }): JSX.Element {
  const boundary = props.data.data.proposal.boundary?.site;
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
      <h2>Boundary</h2>
      <pre
        style={{
          display: "block",
          whiteSpace: "pre-wrap",
          padding: ".5em",
          background: "#f2f2f2",
          fontSize: ".8em",
        }}
      >
        {JSON.stringify(boundary, null, 2)}
      </pre>
    </Box>
  );
}

function ProposalDetails(props: {
  data: QuestionAndResponses[];
  title?: string;
}): JSX.Element {
  return (
    <Box>
      <h2>{props.title || "Proposal details"}</h2>
      <Box component="dl" sx={gridStyles}>
        {props.data.map((item, index) => (
          <DataItem key={index} data={item} />
        ))}
      </Box>
    </Box>
  );
}

function SectionList(props: { data: QuestionAndResponses[] }) {
  const sections = groupBy(props.data, "metadata.sectionName");

  const definedSections = Object.entries(sections).filter(
    ([key]) => key !== undefined,
  );

  return (
    <>
      {definedSections.map(
        ([title, data], index) =>
          data.length && (
            <ProposalDetails data={data} title={title} key={index} />
          ),
      )}
    </>
  );
}

function DataItem(props: { data: QuestionAndResponses }) {
  return (
    <React.Fragment>
      <dt>{props.data.question}</dt>
      <dd>
        {Array.isArray(props.data.responses) &&
        props.data.responses.length > 1 ? (
          <ul style={{ lineHeight: "1.5em" }}>
            {props.data.responses.map((response: Response, i: number) => (
              <li key={i}>{response.value}</li>
            ))}
          </ul>
        ) : (
          prettyResponse(props.data.responses)
        )}
      </dd>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <dd style={{ fontStyle: "italic" }}>
        {typeof props.data.metadata === "object" &&
        Boolean(props.data.metadata?.["autoAnswered"])
          ? "Auto-answered"
          : ""}
      </dd>
    </React.Fragment>
  );
}

export function ApplicationHTML(props: {
  data: Application;
  boundingBox: GeoJSON.Feature;
  userAction?: DrawBoundaryUserAction;
}) {
  // Pluck out some key questions & responses to show in special sections
  const applicationType = props.data.data.application.type.description;
  const documentTitle = applicationType
    ? applicationType
    : `PlanX Submission Overview`;
  const boundary: unknown = props.data.data.property.boundary;
  const hasSections = props.data.responses.some(
    (response) => response.metadata?.sectionName,
  );

  const hasPreAssessment =
    "preAssessment" in props.data && props.data.preAssessment !== undefined;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@opensystemslab/map@0.8.3"></script>
        <title>{typeof documentTitle === "string" && documentTitle}</title>
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
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          <h1>{typeof documentTitle === "string" && documentTitle}</h1>
          <>
            {boundary && (
              <Box sx={{ marginBottom: 1 }}>
                <Map
                  boundary={boundary}
                  clipGeojsonData={props.boundingBox}
                  userAction={props.userAction}
                />
              </Box>
            )}
            <Highlights data={props.data} />
            {hasPreAssessment && <Result data={props.data} />}
            <AboutTheProperty data={props.data} />
            <Box sx={{ display: "flex" }}>
              <Boundary data={props.data} />
            </Box>
            {hasSections ? (
              <SectionList data={props.data.responses} />
            ) : (
              <ProposalDetails data={props.data.responses} />
            )}
          </>
        </Grid>
      </body>
    </html>
  );
}

// Inspired by GOV.UK's Summary List, styles borrowed from PlanX's Review page
//   see https://github.com/theopensystemslab/planx-new/blob/main/editor.planx.uk/src/%40planx/components/shared/Preview/SummaryList.tsx
const gridStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr .5fr",
  gridRowGap: "10px",
  marginTop: "1em",
  marginBottom: "1em",
  "& > *": {
    borderBottom: 1,
    borderColor: "divider",
    paddingBottom: ".5em",
    paddingTop: ".5em",
    verticalAlign: "top",
    margin: 0,
  },
  "& ul": {
    listStylePosition: "inside",
    padding: 0,
    margin: 0,
  },
  "& >:nth-child(3n+1)": {
    // left column
    fontWeight: 700,
  },
  "& >:nth-child(3n+2)": {
    // middle column
    paddingLeft: "10px",
  },
  "& >:nth-child(3n+3)": {
    // right column
    textAlign: "right",
  },
};

function Styles() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        body {
          font-family: "Inter", arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 16px;
          font-size: 1rem;
        }
      `}
    />
  );
}
