import { FlowGraph } from "../../../types/flow.js";

export const getMockPublishedLDCFlow = async (): Promise<FlowGraph> => {
  const flowData = await import("./flow.json");
  return flowData.default as FlowGraph;
};
