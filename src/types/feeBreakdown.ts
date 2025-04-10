export interface FeeBreakdown {
  amount: {
    calculated: number;
    calculatedVAT?: number;
    payable: number;
    payableVAT?: number;
    fastTrack?: number;
    fastTrackVAT?: number;
    serviceCharge?: number;
    serviceChargeVAT?: number;
    paymentProcessing?: number;
    paymentProcessingVAT?: number;
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
  "application.fee.calculated.VAT"?: number;
  "application.fee.payable": number;
  "application.fee.payable.VAT"?: number;
  "application.fee.fastTrack"?: number;
  "application.fee.fastTrack.VAT"?: number;
  "application.fee.serviceCharge"?: number;
  "application.fee.serviceCharge.VAT"?: number;
  "application.fee.paymentProcessing"?: number;
  "application.fee.paymentProcessing.VAT"?: number;
  "application.fee.reduction.alternative": boolean;
  "application.fee.reduction.parishCouncil": boolean;
  "application.fee.reduction.sports": boolean;
  "application.fee.exemption.disability": boolean;
  "application.fee.exemption.resubmission": boolean;
}
