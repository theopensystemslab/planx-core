import { FlowGraph } from "../../../../types/index.js";

// Utility functions to lazy-load mock flow data as JSON

export const getMockPlanningPermissionFlow = (): FlowGraph =>
  require("./planningPermission.json");

export const getMockPublishedPriorApprovalFlow = (): FlowGraph =>
  require("./priorApproval.json");

export const getMockReportAPlanningBreachFlow = (): FlowGraph =>
  require("./reportAPlanningBreach.json");

export const getMockPreApplicationFlow = (): FlowGraph =>
  require("./preApplication.json");

export const getMockPublishedNOCFlow = (): FlowGraph =>
  require("./notificationOfCommencement.json");

export const getMockPublishedApprovalConditionsFlow = (): FlowGraph =>
  require("./approvalConditions.json");
