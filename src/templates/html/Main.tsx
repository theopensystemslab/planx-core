import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { GeoJSON } from "../../export/digitalPlanning/schemas/application/types.js";
import { DrawBoundaryUserAction } from "../../types/index.js";
import { buckinghamshireBoundary } from "../mocks/buckinghamshireBoundary.js";
import { exampleData as example } from "../mocks/exampleData.js";
import { ApplicationHTML } from "./application/ApplicationHTML.js";
import { MapHTML } from "./map/MapHTML.js";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// This will throw a DOM error `<html> cannot appear as a child of <div>`,
//   but only effects local development environments
function TabPanel(props: TabPanelProps): JSX.Element {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`basic-tabpanel-${index}`}
      aria-labelledby={`basic-tab-${index}`}
    >
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
}

function TemplatesViewer(): JSX.Element {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // rig up an invalid data example
  const exampleWithInvalidData = JSON.parse(JSON.stringify(example))
  exampleWithInvalidData.data.applicant.name = 12345

  return (
    <React.Fragment>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic-tabs">
          <Tab label="boundary.html" />
          <Tab label="overview.html" />
          <Tab label="overview.html (with invalid data)" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MapHTML
          geojson={example.data.property.boundary?.site as GeoJSON}
          boundingBox={buckinghamshireBoundary}
          userAction={DrawBoundaryUserAction.Draw}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApplicationHTML
          data={example}
          boundingBox={buckinghamshireBoundary}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ApplicationHTML data={exampleWithInvalidData} boundingBox={buckinghamshireBoundary} />
      </TabPanel>
    </React.Fragment>
  );
}

function Main(): JSX.Element {
  return (
    <React.StrictMode>
      <TemplatesViewer />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  Main(),
);
