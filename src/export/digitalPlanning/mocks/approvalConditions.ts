import { PaymentStatus } from "../../../types/gov-uk-payment.js";
import { Session } from "../../../types/session.js";

// https://api.editor.planx.dev/admin/session/68f3b9ab-662c-4bcc-83c3-592a90563aed/summary
export const mockApprovalConditionsSession: Session = {
  id: "68f3b9ab-662c-4bcc-83c3-592a90563aed",
  flow: {
    id: "eeb315a0-80df-4e92-8c4c-7bd4b9353965",
    name: "Submit details required by a condition",
    slug: "submit-details-required-by-a-condition",
    team: {
      name: "Lambeth",
      slug: "lambeth",
      settings: {
        referenceCode: "LBH",
      },
    },
  },
  createdAt: "2025-09-12T12:24:50.126601+00:00",
  updatedAt: "2025-09-12T12:26:48.566633+00:00",
  submittedAt: "2025-09-12T12:26:48.566633+00:00",
  data: {
    id: "eeb315a0-80df-4e92-8c4c-7bd4b9353965",
    passport: {
      data: {
        _address: {
          x: 531184,
          y: 175183,
          pao: "36",
          town: "LONDON",
          uprn: "100023350216",
          usrn: "21901208",
          ward: "E05014098",
          title: "36, SALTOUN ROAD, LONDON",
          source: "os",
          street: "SALTOUN ROAD",
          latitude: 51.4604296,
          postcode: "SW2 1ER",
          blpu_code: "2",
          longitude: -0.1130669,
          planx_value: "residential.house.terrace",
          organisation: null,
          planx_description: "Terrace",
          single_line_address: "36, SALTOUN ROAD, LONDON, LAMBETH, SW2 1ER",
        },
        "user.role": ["applicant"],
        GsV5Ui0sCu: "2222-02-01",
        HbPhWi0sCu: "1",
        multipleFees: ["false"],
        "property.type": ["residential.house.terrace"],
        "property.ward": ["Brixton Windrush"],
        "proposal.site": {
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [-0.113048, 51.460336],
                  [-0.112975, 51.460349],
                  [-0.113075, 51.460559],
                  [-0.113148, 51.460546],
                  [-0.113048, 51.460336],
                ],
              ],
            ],
          },
          properties: {
            name: "",
            entity: 12000531059,
            prefix: "title-boundary",
            dataset: "title-boundary",
            "end-date": "",
            typology: "geography",
            reference: "37188770",
            "entry-date": "2024-05-06",
            "start-date": "2009-02-26",
            "dataset-name": "",
            "organisation-entity": "13",
          },
        },
        "applicant.type": ["individual"],
        _requestedFiles: {
          optional: [],
          required: ["otherSupporting"],
          recommended: [],
        },
        "applicant.email": "test@opensystemslab.io",
        "applicant.title": "1",
        otherSupporting: [
          {
            id: "scuUpr6bIxWAPDLjmtbg6",
            url: "https://api.editor.planx.dev/file/private/ishozrni/Reference.png",
            file: {
              path: "./Reference.png",
              relativePath: "./Reference.png",
            },
            status: "success",
            progress: 1,
          },
          {
            id: "wXZ3cTl2iZsblHl2zg3hB",
            url: "https://api.editor.planx.dev/file/private/07a0v78n/North%20Star.png",
            file: {
              path: "./North Star.png",
              relativePath: "./North Star.png",
            },
            status: "success",
            progress: 1,
          },
          {
            id: "NjLmFx3YhNhb5zpc1z-Wg",
            url: "https://api.editor.planx.dev/file/private/ir2j8jbp/Reference.png",
            file: {
              path: "./Reference.png",
              relativePath: "./Reference.png",
            },
            status: "success",
            progress: 1,
          },
        ],
        "property.region": ["London"],
        "application.type": ["approval.conditions"],
        emailSendEventId: "712d2b5e-a374-4bee-99ac-bb67a287bef7",
        siteAreaProvided: ["true"],
        "property.boundary": {
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [-0.113048, 51.460336],
                  [-0.112975, 51.460349],
                  [-0.113075, 51.460559],
                  [-0.113148, 51.460546],
                  [-0.113048, 51.460336],
                ],
              ],
            ],
          },
          properties: {
            name: "",
            entity: 12000531059,
            prefix: "title-boundary",
            dataset: "title-boundary",
            "end-date": "",
            typology: "geography",
            reference: "37188770",
            "entry-date": "2024-05-06",
            "start-date": "2009-02-26",
            "dataset-name": "",
            "organisation-entity": "13",
          },
        },
        "_contact.applicant": {
          applicant: {
            email: "test@opensystemslab.io",
            phone: "4",
            title: "1",
            lastName: "3",
            firstName: "2",
            organisation: "",
          },
        },
        "applicant.resident": ["true"],
        "proposal.condition": [
          {
            scope: "full",
            number: "1",
            description: "2",
            otherSupporting: [
              {
                id: "scuUpr6bIxWAPDLjmtbg6",
                url: "https://api.editor.planx.dev/file/private/ishozrni/Reference.png",
                file: {
                  path: "./Reference.png",
                  relativePath: "./Reference.png",
                },
                status: "success",
                progress: 1,
              },
            ],
            "scope.description": "",
          },
          {
            scope: "part",
            number: "4",
            description: "5",
            otherSupporting: [
              {
                id: "wXZ3cTl2iZsblHl2zg3hB",
                url: "https://api.editor.planx.dev/file/private/07a0v78n/North%20Star.png",
                file: {
                  path: "./North Star.png",
                  relativePath: "./North Star.png",
                },
                status: "success",
                progress: 1,
              },
              {
                id: "NjLmFx3YhNhb5zpc1z-Wg",
                url: "https://api.editor.planx.dev/file/private/ir2j8jbp/Reference.png",
                file: {
                  path: "./Reference.png",
                  relativePath: "./Reference.png",
                },
                status: "success",
                progress: 1,
              },
            ],
            "scope.description": "4",
          },
        ],
        "proposal.site.area": 128.11,
        "applicant.name.last": "3",
        "drawBoundary.action": "Accepted the title boundary",
        "findProperty.action": "Selected an existing address",
        "applicant.agent.form": ["No"],
        "applicant.name.first": "2",
        "proposal.description": "2",
        "property.boundary.area": 128.11,
        "proposal.site.buffered": {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-0.11470852652910703, 51.4600290282012],
                [-0.11458150910792923, 51.45983428243445],
                [-0.11439630882175059, 51.459658573117366],
                [-0.11415995293748572, 51.45950856679866],
                [-0.1138814093415598, 51.45938995477508],
                [-0.1135712462758113, 51.45930723719265],
                [-0.11324123140352815, 51.45926355233999],
                [-0.1129038854106209, 51.459260557605006],
                [-0.11257200706538283, 51.45929836660666],
                [-0.1124990085894345, 51.45931136631112],
                [-0.11218132956089447, 51.45938978027757],
                [-0.11189453807979165, 51.45950552617876],
                [-0.11164979562530455, 51.45965409947445],
                [-0.11145662749296693, 51.459829718014916],
                [-0.11132255207609887, 51.46002554703648],
                [-0.11125278820014885, 51.46023396512729],
                [-0.11125005190836648, 51.4604468608189],
                [-0.11131445062309563, 51.46065594826495],
                [-0.11141444365492292, 51.46086594967729],
                [-0.11154145061276775, 51.461060698665165],
                [-0.11172664567367832, 51.46123641227653],
                [-0.1119630024877933, 51.46138642329856],
                [-0.11224155317861123, 51.46150503970801],
                [-0.1125517286012912, 51.46158776068056],
                [-0.1128817594077791, 51.46163144740093],
                [-0.11321912269415134, 51.461634442186664],
                [-0.11355101726947783, 51.461596631401136],
                [-0.11362401879360774, 51.46158363110556],
                [-0.11394171048490517, 51.46150521331792],
                [-0.11422850925535298, 51.46138946253153],
                [-0.11447325259520272, 51.46124088399926],
                [-0.11466641513554661, 51.46106526064615],
                [-0.11480047937680685, 51.46086942795506],
                [-0.11487022821621878, 51.46066100788992],
                [-0.11487294789717317, 51.460448112218884],
                [-0.11480853349693253, 51.46023902678875],
                [-0.11470852652910703, 51.4600290282012],
              ],
            ],
          },
          properties: {
            name: "",
            entity: 12000531059,
            prefix: "title-boundary",
            dataset: "title-boundary",
            "end-date": "",
            typology: "geography",
            reference: "37188770",
            "entry-date": "2024-05-06",
            "start-date": "2009-02-26",
            "dataset-name": "",
            "organisation-entity": "13",
          },
        },
        "proposal.site.hectares": 0.012811000000000001,
        "applicant.phone.primary": "4",
        "application.fee.payable": 86,
        "send.analytics.referrer": "https://card.payments.service.gov.uk/",
        "originalApplication.type": ["pp.full.householder"],
        "send.analytics.userAgent": {
          os: {
            name: "Windows",
            version: "NT 10.0",
            versionName: "10",
          },
          engine: {
            name: "Blink",
          },
          browser: {
            name: "Chrome",
            version: "140.0.0.0",
          },
          platform: {
            type: "desktop",
          },
        },
        "applicant.sameAddress.form": ["Yes"],
        "applicant.siteContact.role": ["applicant"],
        "application.fee.calculated": 86,
        "proposal.visibility.public": ["true"],
        "application.fee.payable.VAT": 0,
        "proposal.condition.one.scope": "full",
        "proposal.condition.two.scope": "part",
        "proposal.condition.one.number": "1",
        "proposal.condition.two.number": "4",
        "property.boundary.area.hectares": 0.012811000000000001,
        "property.localAuthorityDistrict": ["Lambeth"],
        "application.declaration.accurate": ["true"],
        "application.fee.reference.govPay": {
          moto: false,
          state: {
            status: "created",
            finished: false,
          },
          _links: {
            self: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri",
              method: "GET",
            },
            cancel: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/cancel",
              method: "POST",
            },
            events: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/events",
              method: "GET",
            },
            refunds: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/refunds",
              method: "GET",
            },
            next_url: {
              href: "https://card.payments.service.gov.uk/secure/7e915d34-6184-461a-bc68-5100c794a2a1",
              method: "GET",
            },
            next_url_post: {
              href: "https://card.payments.service.gov.uk/secure",
              type: "application/x-www-form-urlencoded",
              method: "POST",
              params: {
                chargeTokenId: "7e915d34-6184-461a-bc68-5100c794a2a1",
              },
            },
          },
          amount: 8600,
          language: "en",
          metadata: {
            flow: "Submit details required by a condition",
            source: "PlanX",
            paidViaInviteToPay: false,
          },
          reference: "68f3b9ab-662c-4bcc-83c3-592a90563aed",
          payment_id: "gak6e6pjm0hpr1meh1gkh0s3ri",
          return_url:
            "https://editor.planx.dev/lambeth/submit-details-required-by-a-condition/published?sessionId=68f3b9ab-662c-4bcc-83c3-592a90563aed&email=test%40opensystemslab.io",
          description: "New application",
          created_date: "2025-09-12T12:25:52.812Z",
          refund_summary: {
            status: "pending",
            amount_available: 8600,
            amount_submitted: 0,
          },
          delayed_capture: false,
          payment_provider: "sandbox",
          authorisation_mode: "web",
          settlement_summary: {},
        },
        "application.declaration.connection": ["none"],
        "proposal.condition.one.description": "2",
        "proposal.condition.total.listItems": 2,
        "proposal.condition.two.description": "5",
        "application.declaration.accurate.form": ["Yes"],
        "application.declaration.connection.form": ["No connections"],
        "proposal.condition.two.scope.description": "4",
      },
    },
    breadcrumbs: {
      "059Vui0sCu": {
        auto: false,
      },
      "1Zk55jTsN1": {
        auto: false,
        data: {
          "applicant.email": "test@opensystemslab.io",
          "applicant.title": "1",
          "_contact.applicant": {
            applicant: {
              email: "test@opensystemslab.io",
              phone: "4",
              title: "1",
              lastName: "3",
              firstName: "2",
              organisation: "",
            },
          },
          "applicant.name.last": "3",
          "applicant.name.first": "2",
          "applicant.phone.primary": "4",
        },
      },
      "4Wpnvi0sCu": {
        auto: false,
      },
      "5IJymy3EjT": {
        auto: true,
      },
      "6eWxivGfSB": {
        auto: false,
        data: {
          _requestedFiles: {
            optional: [],
            required: ["otherSupporting"],
            recommended: [],
          },
          otherSupporting: [
            {
              id: "scuUpr6bIxWAPDLjmtbg6",
              url: "https://api.editor.planx.dev/file/private/ishozrni/Reference.png",
              file: {
                path: "./Reference.png",
                relativePath: "./Reference.png",
              },
              status: "success",
              progress: 1,
            },
            {
              id: "wXZ3cTl2iZsblHl2zg3hB",
              url: "https://api.editor.planx.dev/file/private/07a0v78n/North%20Star.png",
              file: {
                path: "./North Star.png",
                relativePath: "./North Star.png",
              },
              status: "success",
              progress: 1,
            },
            {
              id: "NjLmFx3YhNhb5zpc1z-Wg",
              url: "https://api.editor.planx.dev/file/private/ir2j8jbp/Reference.png",
              file: {
                path: "./Reference.png",
                relativePath: "./Reference.png",
              },
              status: "success",
              progress: 1,
            },
          ],
          "proposal.condition": [
            {
              scope: "full",
              number: "1",
              description: "2",
              otherSupporting: [
                {
                  id: "scuUpr6bIxWAPDLjmtbg6",
                  url: "https://api.editor.planx.dev/file/private/ishozrni/Reference.png",
                  file: {
                    path: "./Reference.png",
                    relativePath: "./Reference.png",
                  },
                  status: "success",
                  progress: 1,
                },
              ],
              "scope.description": "",
            },
            {
              scope: "part",
              number: "4",
              description: "5",
              otherSupporting: [
                {
                  id: "wXZ3cTl2iZsblHl2zg3hB",
                  url: "https://api.editor.planx.dev/file/private/07a0v78n/North%20Star.png",
                  file: {
                    path: "./North Star.png",
                    relativePath: "./North Star.png",
                  },
                  status: "success",
                  progress: 1,
                },
                {
                  id: "NjLmFx3YhNhb5zpc1z-Wg",
                  url: "https://api.editor.planx.dev/file/private/ir2j8jbp/Reference.png",
                  file: {
                    path: "./Reference.png",
                    relativePath: "./Reference.png",
                  },
                  status: "success",
                  progress: 1,
                },
              ],
              "scope.description": "4",
            },
          ],
          "proposal.condition.one.scope": "full",
          "proposal.condition.two.scope": "part",
          "proposal.condition.one.number": "1",
          "proposal.condition.two.number": "4",
          "proposal.condition.one.description": "2",
          "proposal.condition.total.listItems": 2,
          "proposal.condition.two.description": "5",
          "proposal.condition.two.scope.description": "4",
        },
      },
      "8H8WZi0sCu": {
        auto: false,
        data: {
          "proposal.description": "2",
        },
      },
      "9OMGTgLZsn": {
        auto: true,
        answers: ["CHhc4QbuMO"],
      },
      APVNXwxLWJ: {
        auto: true,
        answers: ["vKlKlwxLWJ"],
      },
      BDulPzfy0y: {
        auto: true,
        answers: ["OJvXiKX81f"],
      },
      BH2eL6rZAU: {
        auto: false,
        answers: ["jLEs1HNX6H"],
      },
      BTmmji0sCu: {
        auto: true,
      },
      BpyaOO3Hb2: {
        auto: true,
      },
      Bv9cmi0sCu: {
        auto: false,
      },
      CYhkxPa8F8: {
        auto: true,
        answers: ["KxHVaPa8F8"],
      },
      DILZ1i0sCu: {
        auto: true,
      },
      FiT0f0xl3O: {
        auto: true,
        answers: ["KqRmk0xl3O"],
      },
      Fm7C9O3Hb2: {
        auto: true,
        answers: ["Hs9Z8O3Hb2"],
      },
      GXFLF0xl3O: {
        auto: false,
      },
      GsV5Ui0sCu: {
        auto: false,
        data: {
          GsV5Ui0sCu: "2222-02-01",
        },
      },
      HbPhWi0sCu: {
        auto: false,
        data: {
          HbPhWi0sCu: "1",
        },
      },
      JC0vmi0sCu: {
        auto: false,
      },
      K6vkt6wbWU: {
        auto: false,
        data: {
          "proposal.site": {
            type: "Feature",
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [-0.113048, 51.460336],
                    [-0.112975, 51.460349],
                    [-0.113075, 51.460559],
                    [-0.113148, 51.460546],
                    [-0.113048, 51.460336],
                  ],
                ],
              ],
            },
            properties: {
              name: "",
              entity: 12000531059,
              prefix: "title-boundary",
              dataset: "title-boundary",
              "end-date": "",
              typology: "geography",
              reference: "37188770",
              "entry-date": "2024-05-06",
              "start-date": "2009-02-26",
              "dataset-name": "",
              "organisation-entity": "13",
            },
          },
          "proposal.site.area": 128.11,
          "drawBoundary.action": "Accepted the title boundary",
          "proposal.site.buffered": {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-0.11470852652910703, 51.4600290282012],
                  [-0.11458150910792923, 51.45983428243445],
                  [-0.11439630882175059, 51.459658573117366],
                  [-0.11415995293748572, 51.45950856679866],
                  [-0.1138814093415598, 51.45938995477508],
                  [-0.1135712462758113, 51.45930723719265],
                  [-0.11324123140352815, 51.45926355233999],
                  [-0.1129038854106209, 51.459260557605006],
                  [-0.11257200706538283, 51.45929836660666],
                  [-0.1124990085894345, 51.45931136631112],
                  [-0.11218132956089447, 51.45938978027757],
                  [-0.11189453807979165, 51.45950552617876],
                  [-0.11164979562530455, 51.45965409947445],
                  [-0.11145662749296693, 51.459829718014916],
                  [-0.11132255207609887, 51.46002554703648],
                  [-0.11125278820014885, 51.46023396512729],
                  [-0.11125005190836648, 51.4604468608189],
                  [-0.11131445062309563, 51.46065594826495],
                  [-0.11141444365492292, 51.46086594967729],
                  [-0.11154145061276775, 51.461060698665165],
                  [-0.11172664567367832, 51.46123641227653],
                  [-0.1119630024877933, 51.46138642329856],
                  [-0.11224155317861123, 51.46150503970801],
                  [-0.1125517286012912, 51.46158776068056],
                  [-0.1128817594077791, 51.46163144740093],
                  [-0.11321912269415134, 51.461634442186664],
                  [-0.11355101726947783, 51.461596631401136],
                  [-0.11362401879360774, 51.46158363110556],
                  [-0.11394171048490517, 51.46150521331792],
                  [-0.11422850925535298, 51.46138946253153],
                  [-0.11447325259520272, 51.46124088399926],
                  [-0.11466641513554661, 51.46106526064615],
                  [-0.11480047937680685, 51.46086942795506],
                  [-0.11487022821621878, 51.46066100788992],
                  [-0.11487294789717317, 51.460448112218884],
                  [-0.11480853349693253, 51.46023902678875],
                  [-0.11470852652910703, 51.4600290282012],
                ],
              ],
            },
            properties: {
              name: "",
              entity: 12000531059,
              prefix: "title-boundary",
              dataset: "title-boundary",
              "end-date": "",
              typology: "geography",
              reference: "37188770",
              "entry-date": "2024-05-06",
              "start-date": "2009-02-26",
              "dataset-name": "",
              "organisation-entity": "13",
            },
          },
          "proposal.site.hectares": 0.012811000000000001,
        },
      },
      MKw8hO3Hb2: {
        auto: true,
        data: {
          "application.declaration.connection.form": ["No connections"],
        },
      },
      QI84QPa8F8: {
        auto: true,
      },
      QPo9ki0sCu: {
        auto: false,
        data: {
          "application.fee.reference.govPay": {
            moto: false,
            state: {
              status: "created",
              finished: false,
            },
            _links: {
              self: {
                href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri",
                method: "GET",
              },
              cancel: {
                href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/cancel",
                method: "POST",
              },
              events: {
                href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/events",
                method: "GET",
              },
              refunds: {
                href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/refunds",
                method: "GET",
              },
              next_url: {
                href: "https://card.payments.service.gov.uk/secure/7e915d34-6184-461a-bc68-5100c794a2a1",
                method: "GET",
              },
              next_url_post: {
                href: "https://card.payments.service.gov.uk/secure",
                type: "application/x-www-form-urlencoded",
                method: "POST",
                params: {
                  chargeTokenId: "7e915d34-6184-461a-bc68-5100c794a2a1",
                },
              },
            },
            amount: 8600,
            language: "en",
            metadata: {
              flow: "Submit details required by a condition",
              source: "PlanX",
              paidViaInviteToPay: false,
            },
            reference: "68f3b9ab-662c-4bcc-83c3-592a90563aed",
            payment_id: "gak6e6pjm0hpr1meh1gkh0s3ri",
            return_url:
              "https://editor.planx.dev/lambeth/submit-details-required-by-a-condition/published?sessionId=68f3b9ab-662c-4bcc-83c3-592a90563aed&email=test%40opensystemslab.io",
            description: "New application",
            created_date: "2025-09-12T12:25:52.812Z",
            refund_summary: {
              status: "pending",
              amount_available: 8600,
              amount_submitted: 0,
            },
            delayed_capture: false,
            payment_provider: "sandbox",
            authorisation_mode: "web",
            settlement_summary: {},
          },
        },
      },
      QplkW0NMTU: {
        auto: true,
        data: {
          "application.fee.payable": 86,
          "application.fee.calculated": 86,
          "application.fee.payable.VAT": 0,
        },
      },
      Rkyf1i0sCu: {
        auto: false,
        data: {
          emailSendEventId: "712d2b5e-a374-4bee-99ac-bb67a287bef7",
          "send.analytics.referrer": "https://card.payments.service.gov.uk/",
          "send.analytics.userAgent": {
            os: {
              name: "Windows",
              version: "NT 10.0",
              versionName: "10",
            },
            engine: {
              name: "Blink",
            },
            browser: {
              name: "Chrome",
              version: "140.0.0.0",
            },
            platform: {
              type: "desktop",
            },
          },
        },
      },
      SJRiZ1gkrY: {
        auto: true,
        data: {
          "applicant.sameAddress.form": ["Yes"],
        },
      },
      SLfPBi0sCu: {
        auto: false,
      },
      V6PJfv3iG6: {
        auto: true,
      },
      VmTkpPa8F8: {
        auto: true,
      },
      Wp3dlO3Hb2: {
        auto: false,
        answers: ["TgQ0vYFlaL"],
      },
      XPRBwZ4QNx: {
        auto: true,
      },
      YizU5Pa8F8: {
        auto: true,
        data: {
          "application.fee.calculated": 86,
        },
      },
      bwJffr36wI: {
        auto: false,
        answers: ["9pXb5yKr9s"],
      },
      dVZovwxLWJ: {
        auto: true,
        data: {
          siteAreaProvided: ["true"],
        },
      },
      dknMGPa8F8: {
        auto: true,
        answers: ["WVwzJPa8F8"],
      },
      g3R3gPa8F8: {
        auto: true,
      },
      h0oxMi0sCu: {
        auto: false,
      },
      hYuHtPa8F8: {
        auto: true,
        answers: ["HvA6QPa8F8"],
      },
      heyAli0sCu: {
        auto: true,
        data: {
          "application.type": ["approval.conditions"],
        },
      },
      i5SThi0sCu: {
        auto: true,
        answers: ["Qj05ji0sCu"],
      },
      jePQtsHWGM: {
        auto: true,
        data: {
          "applicant.agent.form": ["No"],
        },
      },
      jxpxcPa8F8: {
        auto: true,
      },
      lMy9gO3Hb2: {
        auto: false,
        answers: ["9ciucO3Hb2"],
      },
      lRnk8aGAQw: {
        auto: false,
        answers: ["k7nh4KPDay"],
      },
      m1ywRO3Hb2: {
        auto: true,
        data: {
          "application.declaration.accurate.form": ["Yes"],
        },
      },
      mE70bl561b: {
        auto: true,
        data: {
          multipleFees: ["false"],
        },
      },
      olkPUPa8F8: {
        auto: true,
        answers: ["AR0xsPa8F8"],
      },
      qidhti0sCu: {
        auto: false,
      },
      t9StTi0sCu: {
        auto: true,
      },
      uWyNBi0sCu: {
        auto: false,
        data: {
          _address: {
            x: 531184,
            y: 175183,
            pao: "36",
            town: "LONDON",
            uprn: "100023350216",
            usrn: "21901208",
            ward: "E05014098",
            title: "36, SALTOUN ROAD, LONDON",
            source: "os",
            street: "SALTOUN ROAD",
            latitude: 51.4604296,
            postcode: "SW2 1ER",
            blpu_code: "2",
            longitude: -0.1130669,
            planx_value: "residential.house.terrace",
            organisation: null,
            planx_description: "Terrace",
            single_line_address: "36, SALTOUN ROAD, LONDON, LAMBETH, SW2 1ER",
          },
          "property.type": ["residential.house.terrace"],
          "property.ward": ["Brixton Windrush"],
          "property.region": ["London"],
          "property.boundary": {
            type: "Feature",
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [-0.113048, 51.460336],
                    [-0.112975, 51.460349],
                    [-0.113075, 51.460559],
                    [-0.113148, 51.460546],
                    [-0.113048, 51.460336],
                  ],
                ],
              ],
            },
            properties: {
              name: "",
              entity: 12000531059,
              prefix: "title-boundary",
              dataset: "title-boundary",
              "end-date": "",
              typology: "geography",
              reference: "37188770",
              "entry-date": "2024-05-06",
              "start-date": "2009-02-26",
              "dataset-name": "",
              "organisation-entity": "13",
            },
          },
          "findProperty.action": "Selected an existing address",
          "property.boundary.area": 128.11,
          "property.boundary.area.hectares": 0.012811000000000001,
          "property.localAuthorityDistrict": ["Lambeth"],
        },
      },
      v3vRZPa8F8: {
        auto: true,
        answers: ["vL6jAPa8F8"],
      },
      yEcLai0sCu: {
        auto: false,
        answers: ["Wb6D2i0sCu"],
      },
      yPVZBqcc1K: {
        auto: false,
        answers: ["SsXkQovF9D"],
      },
      zHTBssREEw: {
        auto: false,
        answers: ["H8jVd74Mv4"],
      },
    },
    govUkPayment: {
      moto: false,
      state: {
        status: PaymentStatus.created,
        finished: false,
      },
      _links: {
        self: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri",
          method: "GET",
        },
        cancel: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/cancel",
          method: "POST",
        },
        events: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/events",
          method: "GET",
        },
        refunds: {
          href: "https://publicapi.payments.service.gov.uk/v1/payments/gak6e6pjm0hpr1meh1gkh0s3ri/refunds",
          method: "GET",
        },
        next_url: {
          href: "https://card.payments.service.gov.uk/secure/7e915d34-6184-461a-bc68-5100c794a2a1",
          method: "GET",
        },
        next_url_post: {
          href: "https://card.payments.service.gov.uk/secure",
          type: "application/x-www-form-urlencoded",
          method: "POST",
          params: {
            chargeTokenId: "7e915d34-6184-461a-bc68-5100c794a2a1",
          },
        },
      },
      amount: 8600,
      language: "en",
      metadata: {
        flow: "Submit details required by a condition",
        source: "PlanX",
        paidViaInviteToPay: false,
      },
      reference: "68f3b9ab-662c-4bcc-83c3-592a90563aed",
      payment_id: "gak6e6pjm0hpr1meh1gkh0s3ri",
      return_url:
        "https://editor.planx.dev/lambeth/submit-details-required-by-a-condition/published?sessionId=68f3b9ab-662c-4bcc-83c3-592a90563aed&email=test%40opensystemslab.io",
      description: "New application",
      created_date: "2025-09-12T12:25:52.812Z",
      refund_summary: {
        status: "pending",
        amount_available: 8600,
        amount_submitted: 0,
      },
      delayed_capture: false,
      payment_provider: "sandbox",
      authorisation_mode: "web",
      settlement_summary: {},
    },
  },
};
