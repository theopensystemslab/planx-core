export interface FeeBreakdown {
  amount: {
    calculated: number;
    payable: number;
    vat: number;
  } & ReductionOrExemption;
  reductions: string[];
  exemptions: string[];
}

export type ReductionOrExemption =
  | {
      reduction: number;
      exemption: 0;
    }
  | {
      reduction: 0;
      exemption: number;
    };

export interface PassportFeeFields {
  "application.fee.calculated": number;
  "application.fee.payable": number;
  "application.fee.payable.includesVAT": boolean;
  "application.fee.reduction.alternative": boolean;
  "application.fee.reduction.parishCouncil": boolean;
  "application.fee.reduction.sports": boolean;
  "application.fee.exemption.disability": boolean;
  "application.fee.exemption.resubmission": boolean;
}
