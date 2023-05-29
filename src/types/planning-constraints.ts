export type MinimumDigitalLandEntity = {
  "entry-date": string;
  "start-date": string;
  "end-date": string;
  entity: number;
  name: string;
  dataset: string;
  "organisation-entity": string;
};

export type MinimumOSRoadFeature = {
  type: "Feature";
  geometry: {
    type: "MultiLineString";
    coordinates: number[][][];
  };
  properties: {
    OBJECTID: string;
    ID: string;
    RoadClassification: string;
    RoadName1: string;
    FormsPartOf: string;
  };
};

export type Constraint = {
  fn: string;
  value: boolean;
  text?: string;
  data?: Array<MinimumDigitalLandEntity | MinimumOSRoadFeature>;
  category?: string;
};

export type Metadata = {
  dataset?: string;
  description?: string;
  name: string;
  plural: string;
  text?: string;
  typology?: string;
  themes?: string[];
  "entity-count"?: {
    dataset: Metadata["dataset"];
    count: number;
  };
  attribution?: string;
  "attribution-text"?: string;
  license?: string;
  "license-text"?: string;
};

export type GISResponse = {
  url?: string;
  constraints: Record<Constraint["fn"], Constraint>;
  metadata?: Record<Constraint["fn"], Metadata>;
};
