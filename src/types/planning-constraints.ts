export type PlanningConstraintCategory =
  | "Ecology"
  | "Flooding"
  | "General policy"
  | "Heritage and conservation"
  | "Trees";

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
  data?: Array<Record<string, unknown>>; // @todo `Array<MinimumDigitalLandEntity | MinimumOSRoadFeature>`
  category?: string; // `PlanningConstraintCategory`
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

export interface GISResponse {
  sourceRequest: string;
  constraints: Record<string, Constraint>;
  metadata: Record<string, Metadata>;
}

export interface EnhancedGISResponse extends GISResponse {
  planxRequest: string;
}

export interface BasePlanningConstraintSchema {
  name: string;
  neg: string;
  pos: string;
  category: string; // `PlanningConstraintCategory`
}

export interface DigitalLandConstraint extends BasePlanningConstraintSchema {
  source: "Planning Data";
  "digital-land-datasets": string[];
  "digital-land-entities"?: number[];
}

export interface OrdnanceSurveyConstraint extends BasePlanningConstraintSchema {
  source: "Ordnance Survey";
  "os-dataset": string;
}

export type PlanningConstraintSchema = Record<
  string,
  DigitalLandConstraint | OrdnanceSurveyConstraint
>;

export const activePlanningConstraints: PlanningConstraintSchema = {
  articleFour: {
    name: "Article 4 directions",
    neg: "is not in an Article 4 direction area",
    pos: "is in an Article 4 direction area",
    source: "Planning Data",
    "digital-land-datasets": ["article-4-direction-area"],
    category: "General policy",
  },
  "articleFour.caz": {
    // will be renamed to `articleFour.localAuthority.caz` when applicable
    name: "Central Activities Zone (CAZ)",
    neg: "is not in the Central Activities Zone",
    pos: "is in the Central Activities Zone",
    source: "Planning Data",
    "digital-land-datasets": ["central-activities-zone"],
    category: "General policy",
  },
  brownfieldSite: {
    name: "Brownfields",
    neg: "is not on Brownfield land",
    pos: "is on Brownfield land",
    source: "Planning Data",
    "digital-land-datasets": ["brownfield-land", "brownfield-site"],
    category: "General policy",
  },
  "designated.AONB": {
    name: "Areas of Outstanding Natural Beauty (AONB)",
    neg: "is not in an Area of Outstanding Natural Beauty",
    pos: "is in an Area of Outstanding Natural Beauty",
    source: "Planning Data",
    "digital-land-datasets": ["area-of-outstanding-natural-beauty"],
    category: "Heritage and conservation",
  },
  "designated.conservationArea": {
    name: "Conservation Areas",
    neg: "is not in a Conservation Area",
    pos: "is in a Conservation Area",
    source: "Planning Data",
    "digital-land-datasets": ["conservation-area"],
    category: "Heritage and conservation",
  },
  greenBelt: {
    name: "Green Belts",
    neg: "is not in a Green Belt",
    pos: "is in a Green Belt",
    source: "Planning Data",
    "digital-land-datasets": ["green-belt"],
    category: "General policy",
  },
  "designated.nationalPark": {
    name: "National Parks",
    neg: "is not in a National Park",
    pos: "is in a National Park",
    source: "Planning Data",
    "digital-land-datasets": ["national-park"],
    category: "Heritage and conservation",
  },
  "designated.nationalPark.broads": {
    name: "Broads",
    neg: "is not in a Broad",
    pos: "is in a Broad",
    source: "Planning Data",
    "digital-land-datasets": ["national-park"],
    "digital-land-entities": [520007], // https://www.planning.data.gov.uk/entity/520007
    category: "Heritage and conservation",
  },
  "designated.WHS": {
    name: "UNESCO World Heritage Sites (WHS)",
    neg: "is not an UNESCO World Heritage Site",
    pos: "is, or is within, an UNESCO World Heritage Site",
    source: "Planning Data",
    "digital-land-datasets": [
      "world-heritage-site",
      "world-heritage-site-buffer-zone",
    ],
    category: "Heritage and conservation",
  },
  flood: {
    name: "Flood Risk Zones",
    neg: "is not in a Flood Risk Zone",
    pos: "is in a Flood Risk Zone",
    source: "Planning Data",
    "digital-land-datasets": ["flood-risk-zone"],
    category: "Flooding",
  },
  listed: {
    name: "Listed Buildings",
    neg: "is not, or is not within, a Listed Building",
    pos: "is, or is within, a Listed Building",
    source: "Planning Data",
    "digital-land-datasets": ["listed-building", "listed-building-outline"], // HE publishes points, LPAs publish polygons
    category: "Heritage and conservation",
  },
  monument: {
    name: "Scheduled Monuments",
    neg: "is not the site of a Scheduled Monument",
    pos: "is the site of a Scheduled Monument",
    source: "Planning Data",
    "digital-land-datasets": ["scheduled-monument"],
    category: "Heritage and conservation",
  },
  "nature.ASNW": {
    name: "Ancient Semi-Natural Woodlands (ASNW)",
    neg: "is not in an Ancient Semi-Natural Woodland (ASNW)",
    pos: "is in an Ancient Semi-Natural Woodland (ASNW)",
    source: "Planning Data",
    "digital-land-datasets": ["ancient-woodland"],
    category: "Ecology",
  },
  "nature.ramsarSite": {
    name: "Ramsar Sites",
    neg: "is not in a Ramsar Site",
    pos: "is in a Ramsar Site",
    source: "Planning Data",
    "digital-land-datasets": ["ramsar"],
    category: "Ecology",
  },
  "nature.SAC": {
    name: "Special Areas of Conservation (SAC)",
    neg: "is not in a Special Area of Conservation (SAC)",
    pos: "is in a Special Area of Conservation (SAC)",
    source: "Planning Data",
    "digital-land-datasets": ["special-area-of-conservation"],
    category: "Ecology",
  },
  "nature.SPA": {
    name: "Special Protection Areas (SPA)",
    neg: "is not in a Special Protection Area (SPA)",
    pos: "is in a Special Protection Area (SPA)",
    source: "Planning Data",
    "digital-land-datasets": ["special-protection-area"],
    category: "Ecology",
  },
  "nature.SSSI": {
    name: "Sites of Special Scientific Interest (SSSI)",
    neg: "is not a Site of Special Scientific Interest (SSSI)",
    pos: "is a Site of Special Scientific Interest (SSSI)",
    source: "Planning Data",
    "digital-land-datasets": ["site-of-special-scientific-interest"],
    category: "Ecology",
  },
  registeredPark: {
    name: "Historic Parks or Gardens",
    neg: "is not in a Historic Park or Garden",
    pos: "is in a Historic Park or Garden",
    source: "Planning Data",
    "digital-land-datasets": ["park-and-garden"],
    category: "Heritage and conservation",
  },
  "road.classified": {
    name: "Classified Roads",
    neg: "is not on a Classified Road",
    pos: "is on a Classified Road",
    source: "Ordnance Survey",
    "os-dataset": "OS MasterMap Highways",
    category: "General policy",
  },
  tpo: {
    name: "Tree Preservation Orders (TPO) or Zones",
    neg: "is not in a Tree Preservation Order (TPO) Zone",
    pos: "is in a Tree Preservation Order (TPO) Zone",
    source: "Planning Data",
    "digital-land-datasets": [
      "tree",
      "tree-preservation-order",
      "tree-preservation-zone",
    ], // "tree" is points, "-zone" is polygons
    category: "Trees",
  },
};
