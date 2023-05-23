import { CollectionType } from "./flow";

// This needs to stay in sync with the TYPES enum
// in planx-new/editor.planx.uk/src/@planx/components/types.ts
export enum ComponentType {
  Flow = 1,
  Result = 3,
  TaskList = 7,
  Notice = 8,
  FindProperty = 9,
  DrawBoundary = 10,
  PlanningConstraints = 11,
  PropertyInformation = 12,
  Question = 100, // Statement/DropDown
  Checklist = 105,
  TextInput = 110,
  DateInput = 120,
  AddressInput = 130,
  ContactInput = 135,
  FileUpload = 140,
  MultipleFileUpload = 145,
  NumberInput = 150,
  Answer = 200, // Response
  Content = 250,
  InternalPortal = 300,
  ExternalPortal = 310,
  Section = 360,
  SetValue = 380,
  Pay = 400,
  Filter = 500,
  Review = 600,
  Send = 650,
  Calculate = 700,
  Confirmation = 725,
}

export function component(type: ComponentType): Component {
  return ComponentSchema[ComponentType[type] as keyof typeof ComponentSchema];
}

export type Component = (typeof ComponentSchema)[keyof typeof ComponentSchema];

export type ComponentSchemaEntry = {
  type: ComponentType;
  properties?: {
    reads?: readonly PropertyDefinition[];
    writes?: readonly PropertyDefinition[];
  };
  branching?: BranchingRule;
  placementRestriction?: {
    previous?: readonly ComponentType[]; // previous node must be one of these types
    next?: readonly ComponentType[]; // next node must be one of these types
  };
};

export type PropertyDefinition = {
  reference: string;
  dataType: "text" | "number" | "record" | "any";
  defaultKey?: string;
  defaultValue?: string;
};

export type BranchingRule = {
  collectionType: CollectionType;
  childRestriction?: ComponentType[];
};

const exclusiveAnswers: BranchingRule = {
  collectionType: "oneOf" as CollectionType,
  childRestriction: [ComponentType.Answer],
};

const inclusiveAnswers: BranchingRule = {
  collectionType: "anyOf" as CollectionType,
  childRestriction: [ComponentType.Answer],
};

export const ComponentSchema: Record<
  keyof typeof ComponentType,
  ComponentSchemaEntry
> = {
  // Structure
  Section: {
    type: ComponentType.Section,
  },
  InternalPortal: {
    type: ComponentType.InternalPortal,
    branching: {
      collectionType: "eachOf",
    },
  },
  ExternalPortal: {
    type: ComponentType.ExternalPortal,
    branching: {
      collectionType: "eachOf",
    },
    properties: {
      reads: [
        {
          reference: "flowId",
          defaultKey: "flowId",
          dataType: "text",
        },
      ],
    },
  },

  // Input
  Question: {
    type: ComponentType.Question,
    branching: exclusiveAnswers,
  },
  Checklist: {
    type: ComponentType.Checklist,
    branching: inclusiveAnswers,
  },
  Answer: {
    type: ComponentType.Answer,
    properties: {
      writes: [{ reference: "answer", dataType: "any" }],
    },
  },
  TextInput: {
    type: ComponentType.TextInput,
    properties: {
      writes: [{ reference: "value", dataType: "text" }],
    },
  },
  NumberInput: {
    type: ComponentType.NumberInput,
    properties: {
      writes: [{ reference: "value", dataType: "number" }],
    },
  },
  DateInput: {
    type: ComponentType.DateInput,
  },
  FileUpload: {
    type: ComponentType.FileUpload,
  },
  MultipleFileUpload: {
    type: ComponentType.MultipleFileUpload,
  },

  // Input Groups
  ContactInput: {
    type: ComponentType.ContactInput,
  },
  AddressInput: {
    type: ComponentType.AddressInput,
  },

  // Functional Capabilities
  SetValue: {
    type: ComponentType.SetValue,
    properties: {
      writes: [{ reference: "value", dataType: "any" }],
    },
  },
  Calculate: {
    type: ComponentType.Calculate,
    properties: {
      writes: [{ reference: "value", dataType: "number" }],
    },
  },
  Pay: {
    type: ComponentType.Pay,
    properties: {
      reads: [
        {
          reference: "amount",
          defaultKey: "amount",
          dataType: "number",
        },
      ],
      writes: [
        {
          reference: "govPayPayment",
          defaultKey: "govPayPayment",
          dataType: "record",
        },
      ],
    },
  },

  // Output
  Review: {
    type: ComponentType.Review,
  },
  Send: {
    type: ComponentType.Send,
  },
  Filter: {
    type: ComponentType.Filter,
    branching: exclusiveAnswers,
  },
  Result: {
    type: ComponentType.Result,
  },

  // Content
  Content: {
    type: ComponentType.Content,
  },
  Notice: {
    type: ComponentType.Notice,
  },
  TaskList: {
    type: ComponentType.TaskList,
  },
  Confirmation: {
    type: ComponentType.Confirmation,
    placementRestriction: {
      next: [], // terminal node
    },
  },

  // Planning Specific
  FindProperty: {
    type: ComponentType.FindProperty,
  },
  DrawBoundary: {
    type: ComponentType.DrawBoundary,
    properties: {
      writes: [
        {
          reference: "siteBoundary",
          dataType: "record",
          defaultKey: "property.boundary.site",
        },
        {
          reference: "siteArea",
          dataType: "number",
          defaultKey: "property.boundary.area",
        },
      ],
    },
  },
  PlanningConstraints: {
    type: ComponentType.PlanningConstraints,
    properties: {
      writes: [
        {
          reference: "planningConstraints",
          dataType: "record",
          defaultKey: "property.constraints.planning",
        },
      ],
    },
  },
  PropertyInformation: {
    type: ComponentType.PropertyInformation,
  },

  // Defunct(?)
  Flow: {
    type: ComponentType.Flow,
  },
} as const;
