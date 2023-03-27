import type { NodeId } from "./flow";

export const SectionStatuses = {
  ReadyToStart: "READY TO START",
  CannotStartYet: "CANNOT START YET",
  ReadyToContinue: "READY TO CONTINUE",
  CannotContinueYet: "CANNOT CONTINUE YET",
  Complete: "COMPLETE",
  Updated: "NEW INFORMATION NEEDED",
} as const;

export type SectionStatus =
  typeof SectionStatuses[keyof typeof SectionStatuses];

export type SectionOverview = Array<{
  id: NodeId;
  title: string;
  status: SectionStatus;
}>;
