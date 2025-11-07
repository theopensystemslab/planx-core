import { FlowGraph } from "../../../../types/index.js";

/**
 * Utility functions to lazy-load mock flow data as JSON
 */
export const lazyLoad = async (path: string): Promise<FlowGraph> => {
  const flowData = await import(path, { with: { type: "json" } });
  return flowData.default as FlowGraph;
};

export const getMockPlanningPermissionFlow = () =>
  lazyLoad("./planningPermission.json");

export const getMockPublishedPriorApprovalFlow = () =>
  lazyLoad("./priorApproval.json");

export const getMockReportAPlanningBreachFlow = () =>
  lazyLoad("./reportAPlanningBreach.json");

export const getMockPreApplicationFlow = () =>
  lazyLoad("./preApplication.json");

export const getMockPublishedLDCFlow = () =>
  lazyLoad("../../../bops/mocks/flow.json");

export const getMockPublishedNOCFlow = () =>
  lazyLoad("./notificationOfCommencement.json");

export const getMockPublishedApprovalConditionsFlow = () =>
  lazyLoad("./approvalConditions.json");
