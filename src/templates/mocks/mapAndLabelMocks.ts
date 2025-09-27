// Example A is based on schema "Sketch plan - TPO" with 2 features in Southwark
export const mapAndLabelOutputA: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.07627111599063874, 51.485963105125705],
            [-0.07630330249881746, 51.48592886542687],
            [-0.07627513930416108, 51.48590631731852],
            [-0.07622149512386324, 51.4859096577797],
            [-0.07622417733287812, 51.48593972191955],
            [-0.07627111599063874, 51.485963105125705],
          ],
        ],
      },
      properties: {
        label: "1",
        "area.squareMetres": 23.37,
        "area.hectares": 0.002337,
        species: "Elm",
        work: "Trim branches",
        reason:
          "A couple of the branches at the bottom of the trunk have died and should be trimmed for safety before they fall. Healthy branches at the top will remain untouched.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.07581782266712189, 51.48591800893166],
            [-0.07586342022037507, 51.485876253156675],
            [-0.07580172941303254, 51.485851199673306],
            [-0.07574406191921236, 51.48589629593343],
            [-0.07580172941303254, 51.48592134939199],
            [-0.07581782266712189, 51.48591800893166],
          ],
        ],
      },
      properties: {
        label: "2",
        "area.squareMetres": 34.23,
        "area.hectares": 0.003423,
        species: "Oak",
        work: "Trim branches",
        reason:
          "Some branches are overgrowing into the neighbours garden beyond my property curtilege",
      },
    },
  ],
};

export const mapAndLabelNodePropsA: any = {
  id: "D61xuPx9vo",
  fn: "tpos",
  tags: [],
  title: "Tell us about protected trees",
  schema: {
    min: 1,
    type: "Tree",
    fields: [
      {
        data: {
          fn: "species",
          type: "short",
          title: "Species",
        },
        type: "text",
      },
      {
        data: {
          fn: "work",
          type: "short",
          title: "Proposed work",
        },
        type: "text",
        required: false,
      },
      {
        data: {
          fn: "reason",
          type: "short",
          title: "Reasons for the proposed work",
        },
        type: "text",
        required: false,
      },
    ],
  },
  basemap: "MapboxSatellite",
  drawType: "Polygon",
  drawColor: "#de17b4",
  schemaName: "Sketch plan - TPO",
  latitude: 51.4859065,
  longitude: -0.076021,
  boundaryBBox: {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [1.9134116, 49.528423],
          [1.9134116, 61.331151],
          [1.9134116, 61.331151],
          [-10.76418, 61.331151],
          [-10.76418, 49.528423],
        ],
      ],
    },
    properties: {},
  },
};

// Example B is based on schema "Sketch plan - Conservation area" with 3 features in Southwark
export const mapAndLabelOutputB: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-0.0762670926771164, 51.48593304100132],
      },
      properties: {
        label: "1",
        species: "Ash",
        work: "Trim branches",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-0.07585537359333039, 51.485914668471054],
      },
      properties: {
        label: "2",
        species: "Oak",
        work: "Cut down",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-0.075815140458107, 51.485886274546175],
      },
      properties: {
        label: "3",
        species: "Elm",
        work: "Trim branches",
      },
    },
  ],
};

export const mapAndLabelNodePropsB: any = {
  id: "ShnbGtTz7L",
  fn: "trees",
  tags: [],
  title: "Sketch trees in a conservation area",
  schema: {
    min: 1,
    type: "Tree",
    fields: [
      {
        data: {
          fn: "species",
          type: "short",
          title: "Species",
        },
        type: "text",
      },
      {
        data: {
          fn: "work",
          type: "short",
          title: "Proposed work",
        },
        type: "text",
        required: false,
      },
    ],
  },
  basemap: "OSVectorTile",
  drawType: "Point",
  drawColor: "#194d24",
  schemaName: "Sketch plan - Conservation areas",
  latitude: 51.4859065,
  longitude: -0.076021,
  boundaryBBox: {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [1.9134116, 49.528423],
          [1.9134116, 61.331151],
          [1.9134116, 61.331151],
          [-10.76418, 61.331151],
          [-10.76418, 49.528423],
        ],
      ],
    },
    properties: {},
  },
};
