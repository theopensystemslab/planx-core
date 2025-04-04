export interface FeeBreakdown {
  amount: {
    calculated: number;
    payable: number;
    vat?: number;
    serviceCharge?: number;
    fastTrack?: number;
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
  "application.fee.reduction.alternative": boolean;
  "application.fee.reduction.parishCouncil": boolean;
  "application.fee.reduction.sports": boolean;
  "application.fee.exemption.disability": boolean;
  "application.fee.exemption.resubmission": boolean;
  "application.fee.serviceCharge"?: number;
  "application.fee.serviceCharge.VAT"?: number;
  "application.fee.fastTrack"?: number;
  "application.fee.fastTrack.VAT"?: number;
  [key: `${string}.VAT`]: number | undefined;
}
