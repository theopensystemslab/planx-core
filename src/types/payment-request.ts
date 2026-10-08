import { DataObject } from "./data.js";
import { FeeBreakdown } from "./feeBreakdown.js";
import { PaymentMetadata } from "./gov-uk-payment.js";

export interface PaymentRequest {
  id: string;
  applicantName: string;
  sessionId: string;
  payeeName: string;
  payeeEmail: string;
  paymentAmount: number;
  sessionPreviewData: DataObject;
  paidAt: string;
  createdAt: string;
  govPayPaymentId: string;
  feeBreakdown?: FeeBreakdown;
  govPayMetadata: PaymentMetadata[];
  stripeMetadata: PaymentMetadata[];
}
