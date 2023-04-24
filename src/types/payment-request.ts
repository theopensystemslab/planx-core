import { Value } from "./data";

export interface PaymentRequest {
  id: string;
  applicantName: string;
  sessionId: string;
  payeeName: string;
  payeeEmail: string;
  paymentAmount: number;
  sessionPreviewData: { [key: string]: Value };
  paidAt: string;
  createdAt: string;
  govPayPaymentId: string;
}
