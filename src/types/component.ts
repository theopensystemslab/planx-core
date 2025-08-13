export enum ComponentType {
  Flow = 1,
  Result = 3,
  TaskList = 7,
  Notice = 8,
  FindProperty = 9,
  DrawBoundary = 10,
  PlanningConstraints = 11,
  PropertyInformation = 12,
  Question = 100,
  ResponsiveQuestion = 101,
  Checklist = 105,
  ResponsiveChecklist = 106,
  TextInput = 110,
  DateInput = 120,
  AddressInput = 130,
  ContactInput = 135,
  FileUpload = 140,
  FileUploadAndLabel = 145,
  NumberInput = 150,
  MapAndLabel = 155,
  Answer = 200, // Response
  Content = 250,
  Folder = 300, // fka InternalPortal
  NestedFlow = 310, // fka ExternalPortal
  Section = 360,
  SetValue = 380,
  SetFee = 381,
  // SetFlag = 382,
  Pay = 400,
  Filter = 500,
  Review = 600,
  Send = 650,
  Calculate = 700,
  Confirmation = 725,
  NextSteps = 730,
  List = 800,
  Page = 810,
  Feedback = 900,
}

// Sourced from editor.planx.uk/src/@planx/components/DrawBoundary/model
export enum DrawBoundaryUserAction {
  Accept = "Accepted the title boundary",
  Amend = "Amended the title boundary",
  Draw = "Drew a custom boundary",
  Upload = "Uploaded a location plan",
}
