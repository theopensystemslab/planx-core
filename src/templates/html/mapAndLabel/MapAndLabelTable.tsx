import * as React from "react";

export default function MapAndLabelTable(props: {
  geojson: GeoJSON.FeatureCollection;
  schemaFieldValues: string[];
}) {
  return (
    <>
      <table>
        <tr>
          <th key={"label"}>label</th>
          {props.schemaFieldValues.map((val) => (
            <th key={val}>{val}</th>
          ))}
        </tr>
        {props.geojson.features.map((feature) => (
          <tr key={feature.properties?.["label"]}>
            <td key={"label"}>{feature.properties?.["label"]}</td>
            {props.schemaFieldValues.map((val) => (
              <td key={val}>{feature.properties?.[val]}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
}
