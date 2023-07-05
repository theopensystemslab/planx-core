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
  FileUploadAndLabel = 145,
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
  NextSteps = 730,
}
