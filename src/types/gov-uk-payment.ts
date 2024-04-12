// https://docs.payments.service.gov.uk/api_reference/#status-and-finished
export enum PaymentStatus {
  created = "created",
  started = "started",
  submitted = "submitted",
  capturable = "capturable",
  success = "success",
  failed = "failed",
  cancelled = "cancelled",
  error = "error",
  unknown = "unknown", // used when response status is not valid
}

// https://docs.payments.service.gov.uk/making_payments/#receiving-the-api-response
export interface GovUKPayment {
  amount: number;
  reference: string;
  state: {
    status: PaymentStatus;
    finished: boolean;
    message: string;
  };
  payment_id: string;
  payment_provider: string;
  created_date: string;
  _links: {
    self: {
      href: string;
      method: string;
    };
    next_url?: {
      href: string;
      method: string;
    };
    next_url_post: {
      type: string;
      params: {
        chargeTokenId: string;
      };
      href: string;
      method: string;
    };
  };
}

export const GOV_PAY_PASSPORT_KEY = "application.fee.reference.govPay" as const;

export type GovPayMetadataValue = string | boolean | number;

// https://docs.payments.service.gov.uk/making_payments/#creating-a-payment
export interface GovUKCreatePaymentPayload {
  amount: number;
  reference: string;
  description: string;
  return_url: string;
  email?: string;
  prefilled_cardholder_details?: {
    cardholder_name?: string;
    billing_address?: {
      line1: string;
      line2: string;
      postcode: string;
      city: string;
      country: string;
    };
  };
  language?: string;
  metadata?: Record<string, GovPayMetadataValue>;
}

export interface GovPayMetadata {
  key: string;
  value: GovPayMetadataValue;
}
