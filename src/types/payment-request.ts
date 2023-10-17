import { DataObject } from "./data";

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
}
