import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { MapHTML } from "./map/MapHTML";
import { ApplicationHTML } from "./application/ApplicationHTML";
import example from "../mocks/exampleWithSections.json";

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
        <MapHTML geojson={example.geojson} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApplicationHTML data={example.data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ApplicationHTML data={[]} />
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
  Main()
);