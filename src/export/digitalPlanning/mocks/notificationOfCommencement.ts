import { Session } from "../../../types/session.js";

// Not fee-carrying = no `data.govUkPayment`
export const mockNOCSession: Session = {
  id: "b04535f6-9752-42db-a249-269ebab0cf20",
  flow: {
    id: "56750f3b-e94f-4163-817d-b7baa10cac67",
    name: "Notification of commencement",
    slug: "notification-of-commencement",
    team: {
      name: "Buckinghamshire",
      slug: "buckinghamshire",
      settings: {
        referenceCode: "BKM",
      },
    },
  },
  createdAt: "2025-01-07T14:12:59.858297+00:00",
  updatedAt: "2025-01-08T03:00:08.433031+00:00",
  submittedAt: "2025-01-07T14:16:40.761133+00:00",
  data: {
    id: "56750f3b-e94f-4163-817d-b7baa10cac67",
    passport: {
      data: {
        "1AtpbUszBk": "2024-05-01",
        "4I52b5H8rL": "12/34567",
        "site.address": {
          town: "London",
          line1: "40 Stansfield Road",
          line2: "Brixton",
          county: "Greater London",
          country: "UK",
          postcode: "SW9 9RZ",
        },
        "contact.email": "example@example.com",
        "contact.title": "Mr",
        "works.started": ["Commencement"],
        "_contact.contact": {
          contact: {
            email: "example@example.com",
            phone: "123456789",
            title: "Mr",
            lastName: "Bowie",
            firstName: "David",
            organisation: "",
          },
        },
        emailSendEventId: "024bb906-1292-45b1-a6df-c1e87b668670",
        "contact.name.last": "Bowie",
        "contact.name.first": "David",
        "contact.phone.primary": "123456789",
      },
    },
    breadcrumbs: {
      "1AtpbUszBk": {
        auto: false,
        data: {
          "1AtpbUszBk": "2024-05-01",
        },
      },
      "4I52b5H8rL": {
        auto: false,
        data: {
          "4I52b5H8rL": "24/01547",
        },
      },
      "4nnttggnfo": {
        auto: false,
        data: {
          emailSendEventId: "024aa906-1292-45a2-a6df-c1e87b121212",
        },
      },
      "8Mzv0b42Oi": {
        auto: false,
        data: {
          "site.address": {
            town: "London",
            line1: "40 Stansfield Road",
            line2: "Brixton",
            county: "Greater London",
            country: "UK",
            postcode: "SW9 9RZ",
          },
        },
      },
      CReH0ZUnB3: {
        auto: false,
      },
      K1Z8oWKho2: {
        auto: false,
        answers: ["sG3PED8dKU"],
      },
      P4fRVlKmNI: {
        auto: false,
        data: {
          "contact.email": "example@example.com",
          "contact.title": "Mr",
          "_contact.contact": {
            contact: {
              email: "example@example.com",
              phone: "123456789",
              title: "Mr",
              lastName: "Bowie",
              firstName: "David",
              organisation: "",
            },
          },
          "contact.name.last": "Bowie",
          "contact.name.first": "David",
          "contact.phone.primary": "123456789",
        },
      },
      PckGxO4AgQ: {
        auto: false,
      },
      XJtWHBn8KR: {
        auto: false,
      },
      Z28tn2t9BM: {
        auto: false,
      },
      asb0FVgtVm: {
        auto: false,
        answers: ["3NhRaQKv45"],
      },
      s2YTmALWV0: {
        auto: false,
      },
      z0b63MQEEV: {
        auto: true,
        answers: ["1zl0bfRMLa"],
      },
    },
  },
};
