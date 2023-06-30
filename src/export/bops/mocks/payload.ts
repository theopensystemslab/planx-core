import { constraints } from "./constraints";

export const mockExpectedBOPSPayload = {
  site: {
    x: 533584,
    y: 170841,
    town: "LONDON",
    uprn: "100023246931",
    source: "os",
    latitude: 51.4208489,
    postcode: "SE19 1NT",
    address_1: "36, WOODLAND ROAD",
    longitude: -0.0802038,
  },
  files: [
    {
      tags: ["Existing", "Plan"],
      filename:
        "https://api.editor.planx.dev/file/private/vejru1ed/Screenshot%20from%202023-04-25%2013-01-50.png",
      applicant_description: undefined,
    },
    {
      tags: ["Proposed", "Plan"],
      filename:
        "https://api.editor.planx.dev/file/private/ctylcvdk/Screenshot%20from%202023-04-25%2013-01-50.png",
      applicant_description: undefined,
    },
    {
      tags: ["Existing", "Elevation"],
      filename:
        "https://api.editor.planx.dev/file/private/5srbgzu1/Screenshot%20from%202023-04-25%2013-01-50.png",
      applicant_description: undefined,
    },
    {
      tags: ["Proposed", "Elevation"],
      filename:
        "https://api.editor.planx.dev/file/private/12jdv6t0/Screenshot%20from%202023-04-25%2013-01-50.png",
      applicant_description: undefined,
    },
  ],
  works: {
    start_date: "2024-01-01",
    finish_date: "2024-01-15",
  },
  result: {
    flag: "Planning permission / Permitted development",
    heading: "Permitted development",
    description:
      "It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.",
  },
  user_role: "applicant",
  constraints: {
    tpo: false,
    listed: false,
    article4: false,
    monument: false,
    designated: false,
    "nature.SAC": false,
    "nature.ASNW": false,
    "nature.SSSI": false,
    locallyListed: false,
    "designated.SPA": false,
    "designated.WHS": false,
    registeredPark: false,
    "designated.AONB": false,
    "road.classified": false,
    "article4.lambeth.caz": false,
    "designated.nationalPark": false,
    "designated.conservationArea": false,
    "designated.nationalPark.broads": false,
  },
  constraints_proposed: constraints,
  description: "This is a test application.",
  work_status: "proposed",
  payment_amount: 10300,
  applicant_email: "test@opensystemslab.io",
  applicant_phone: "123",
  application_type: "lawfulness_certificate",
  boundary_geojson: {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-0.0803683698177373, 51.42084936515354],
          [-0.0803683698177373, 51.42080420459155],
          [-0.080081373453144, 51.42082093073083],
          [-0.08005186915398022, 51.42082260334442],
          [-0.07982119917869965, 51.42082009442399],
          [-0.07983058691025176, 51.42087529064119],
          [-0.08002907037735366, 51.420871109111914],
          [-0.08005052804947278, 51.42086860019418],
          [-0.08029326796532037, 51.420854382991024],
          [-0.0803683698177373, 51.42084936515354],
        ],
      ],
    },
    properties: null,
  },
  planx_debug_data: {
    passport: {
      data: {
        _nots: {
          "property.constraints.planning": [
            "article4",
            "listed",
            "locallyListed",
            "registeredPark",
            "designated.conservationArea",
            "designated.AONB",
            "designated.nationalPark",
            "designated.nationalPark.broads",
            "designated.WHS",
            "designated.SPA",
            "monument",
            "tpo",
            "nature.SSSI",
            "nature.SAC",
            "nature.ASNW",
            "designated",
            "article4.lambeth.caz",
            "road.classified",
          ],
        },
        _constraints: constraints,
        _address: {
          x: 533584,
          y: 170841,
          pao: "36",
          town: "LONDON",
          uprn: "100023246931",
          usrn: "21901526",
          title: "36, WOODLAND ROAD, LONDON",
          source: "os",
          street: "WOODLAND ROAD",
          latitude: 51.4208489,
          postcode: "SE19 1NT",
          blpu_code: "2",
          longitude: -0.0802038,
          planx_value: null,
          organisation: null,
          planx_description: "Property Shell",
          single_line_address: "36, WOODLAND ROAD, LONDON, LAMBETH, SE19 1NT",
        },
        "user.role": ["applicant"],
        worksToRoof: ["false"],
        "property.EPC": ["false"],
        "property.type": ["residential.dwelling"],
        "proposal.time": ["future"],
        "proposal.type": ["proposed"],
        "applicant.type": ["individual"],
        "applicant.email": "test@opensystemslab.io",
        "property.region": ["London"],
        "application.type": ["ldc.proposed"],
        "proposal.siteArea": 201.43,
        "uniform.isRelated": ["false"],
        "uniform.siteVisit": ["true"],
        "_contact.applicant": {
          applicant: {
            email: "test@opensystemslab.io",
            phone: "123",
            title: "",
            lastName: "Test",
            firstName: "Test",
            organisation: "",
          },
        },
        "applicant.interest": ["owner.sole"],
        "applicant.resident": ["true"],
        "application.reason": [
          "It looks like the changes fall within the scope of permitted development.",
        ],
        digitalLandRequest:
          "https://www.planning.data.gov.uk/entity.json?entries=current&geometry=POLYGON+%28%28-0.0803683698177373+51.42084936515354%2C+-0.0803683698177373+51.42080420459155%2C+-0.080081373453144+51.42082093073083%2C+-0.08005186915398022+51.42082260334442%2C+-0.07982119917869965+51.42082009442399%2C+-0.07983058691025176+51.42087529064119%2C+-0.08002907037735366+51.420871109111914%2C+-0.08005052804947278+51.42086860019418%2C+-0.08029326796532037+51.420854382991024%2C+-0.0803683698177373+51.42084936515354%29%29&geometry_relation=intersects&limit=100&dataset=article-4-direction-area&dataset=central-activities-zone&dataset=listed-building&dataset=listed-building-outline&dataset=locally-listed-building&dataset=park-and-garden&dataset=conservation-area&dataset=area-of-outstanding-natural-beauty&dataset=national-park&dataset=world-heritage-site&dataset=world-heritage-site-buffer-zone&dataset=special-protection-area&dataset=scheduled-monument&dataset=tree&dataset=tree-preservation-order&dataset=tree-preservation-zone&dataset=site-of-special-scientific-interest&dataset=special-area-of-conservation&dataset=ancient-woodland",
        "uniform.personRole": ["Applicant"],
        "applicant.name.last": "Test",
        "proposal.start.date": "2024-01-01",
        "applicant.agent.form": ["No"],
        "applicant.name.first": "Test",
        "property.titleNumber": ["unknown"],
        "proposal.description": "This is a test application.",
        "proposal.projectType": ["alter.equipment.alarm"],
        "applicant.siteContact": ["applicant"],
        "uniform.applicationTo": ["N5660"],
        "uniform.consentRegime": ["Certificate of Lawfulness"],
        "application.about.form": ["Proposed building works"],
        "property.EPCKnown.form": ["The property does not have one"],
        "property.boundary.site": {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-0.0803683698177373, 51.42084936515354],
                [-0.0803683698177373, 51.42080420459155],
                [-0.080081373453144, 51.42082093073083],
                [-0.08005186915398022, 51.42082260334442],
                [-0.07982119917869965, 51.42082009442399],
                [-0.07983058691025176, 51.42087529064119],
                [-0.08002907037735366, 51.420871109111914],
                [-0.08005052804947278, 51.42086860019418],
                [-0.08029326796532037, 51.420854382991024],
                [-0.0803683698177373, 51.42084936515354],
              ],
            ],
          },
          properties: null,
        },
        "proposal.treeWorksOnly": ["false"],
        "uniform.scenarioNumber": ["15"],
        "applicant.interest.form": ["Sole owner"],
        "applicant.phone.primary": "123",
        "application.fee.payable": 103,
        "proposal.vehicleParking": ["none"],
        "application.preAppAdvice": ["false"],
        "application.resubmission": ["false"],
        "proposal.completion.date": "2024-01-15",
        "proposal.droppedKerbOnly": ["false"],
        "property.drawing.sitePlan": [
          {
            url: "https://api.editor.planx.dev/file/private/vejru1ed/Screenshot%20from%202023-04-25%2013-01-50.png",
            filename: "Screenshot from 2023-04-25 13-01-50.png",
            cachedSlot: {
              id: "yf40-jErTO5vcrosxKwUd",
              url: "https://api.editor.planx.dev/file/private/vejru1ed/Screenshot%20from%202023-04-25%2013-01-50.png",
              file: {
                path: "Screenshot from 2023-04-25 13-01-50.png",
                size: 60467,
                type: "image/png",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "proposal.drawing.sitePlan": [
          {
            url: "https://api.editor.planx.dev/file/private/ctylcvdk/Screenshot%20from%202023-04-25%2013-01-50.png",
            filename: "Screenshot from 2023-04-25 13-01-50.png",
            cachedSlot: {
              id: "n7TyFK2WzAD0To8KrZtI2",
              url: "https://api.editor.planx.dev/file/private/ctylcvdk/Screenshot%20from%202023-04-25%2013-01-50.png",
              file: {
                path: "Screenshot from 2023-04-25 13-01-50.png",
                size: 60467,
                type: "image/png",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "uniform.applicantInterest": ["Owner"],
        "uniform.proposedUseStatus": ["permanent"],
        "applicant.sameAddress.form": ["Yes"],
        "application.fee.calculated": 103,
        "property.drawing.elevation": [
          {
            url: "https://api.editor.planx.dev/file/private/5srbgzu1/Screenshot%20from%202023-04-25%2013-01-50.png",
            filename: "Screenshot from 2023-04-25 13-01-50.png",
            cachedSlot: {
              id: "Y9S-PiGb2WoBxuJOcjxND",
              url: "https://api.editor.planx.dev/file/private/5srbgzu1/Screenshot%20from%202023-04-25%2013-01-50.png",
              file: {
                path: "Screenshot from 2023-04-25 13-01-50.png",
                size: 60467,
                type: "image/png",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "proposal.drawing.elevation": [
          {
            url: "https://api.editor.planx.dev/file/private/12jdv6t0/Screenshot%20from%202023-04-25%2013-01-50.png",
            filename: "Screenshot from 2023-04-25 13-01-50.png",
            cachedSlot: {
              id: "W7ZpITiFui0gOwEN0fKgw",
              url: "https://api.editor.planx.dev/file/private/12jdv6t0/Screenshot%20from%202023-04-25%2013-01-50.png",
              file: {
                path: "Screenshot from 2023-04-25 13-01-50.png",
                size: 60467,
                type: "image/png",
              },
              status: "success",
              progress: 1,
            },
          },
        ],
        "proposal.siteArea.hectares": 0.020143,
        "proposal.changeNumberOfHomes": ["other"],
        "application.basisOfLawfulness": ["permittedDevelopment"],
        "application.preAppAdvice.form": ["No"],
        "property.titleNumberKnown.form": ["No"],
        "applicant.ownership.certificate": ["a"],
        "property.localAuthorityDistrict": ["Lambeth"],
        "proposal.visibleFromPublicRealm": ["Information not provided"],
        "application.declaration.accurate": ["true"],
        "application.fee.reduction.sports": ["false"],
        "application.fee.reference.govPay": {
          moto: false,
          state: {
            status: "created",
            finished: false,
          },
          _links: {
            self: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj",
              method: "GET",
            },
            cancel: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj/cancel",
              method: "POST",
            },
            events: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj/events",
              method: "GET",
            },
            refunds: {
              href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj/refunds",
              method: "GET",
            },
            next_url: {
              href: "https://card.payments.service.gov.uk/secure/28343aab-47bb-4511-8b09-129acd6a8b18",
              method: "GET",
            },
            next_url_post: {
              href: "https://card.payments.service.gov.uk/secure",
              type: "application/x-www-form-urlencoded",
              method: "POST",
              params: {
                chargeTokenId: "28343aab-47bb-4511-8b09-129acd6a8b18",
              },
            },
          },
          amount: 103,
          language: "en",
          reference: "969b912c-f196-4ec6-ac73-133f2a516f60",
          payment_id: "34qqn82kdmc7qaodm5a7qqovbj",
          return_url:
            "https://editor.planx.uk/lambeth/apply-for-a-lawful-development-certificate/preview?sessionId=969b912c-f196-4ec6-ac73-133f2a516f60&email=test%40opensystemslab.io",
          description: "New application",
          created_date: "2023-04-27T10:17:44.924Z",
          refund_summary: {
            status: "pending",
            amount_available: 10300,
            amount_submitted: 0,
          },
          delayed_capture: false,
          payment_provider: "sandbox",
          authorisation_mode: "web",
          settlement_summary: {},
        },
        "proposal.changeNumberOfHomes.form": ["No"],
        "application.declaration.connection": ["none"],
        "application.showTreesConsentResult": ["false"],
        "application.fee.exemption.disability": ["false"],
        "application.declaration.accurate.form": ["Yes"],
        "application.fee.reduction.alternative": ["false"],
        "application.fee.exemption.resubmission": ["false"],
        "application.declaration.connection.form": ["No connections"],
        "application.fee.reduction.parishCouncil": ["false"],
      },
    },
    session_id: "969b912c-f196-4ec6-ac73-133f2a516f60",
    breadcrumbs: {
      "0Ssv1a0L4B": {
        auto: true,
        answers: ["v2b6eYzfAa"],
      },
      "0WkoPIRtSH": {
        auto: true,
        data: {
          "application.about.form": ["Proposed building works"],
        },
      },
      "0vyk3XWTXQ": {
        auto: true,
        answers: ["fVDHpGgdVT"],
      },
      "1brLbfr0VI": {
        auto: true,
        data: {
          "application.showTreesConsentResult": ["false"],
        },
      },
      "2fPL5miNqx": {
        auto: true,
        answers: ["ywnW81Ru65"],
      },
      "3SY7XLmpEE": {
        auto: false,
        data: {
          "proposal.drawing.sitePlan": [
            {
              url: "https://api.editor.planx.dev/file/private/ctylcvdk/Screenshot%20from%202023-04-25%2013-01-50.png",
              filename: "Screenshot from 2023-04-25 13-01-50.png",
              cachedSlot: {
                id: "n7TyFK2WzAD0To8KrZtI2",
                url: "https://api.editor.planx.dev/file/private/ctylcvdk/Screenshot%20from%202023-04-25%2013-01-50.png",
                file: {
                  path: "Screenshot from 2023-04-25 13-01-50.png",
                  size: 60467,
                  type: "image/png",
                },
                status: "success",
                progress: 1,
              },
            },
          ],
        },
      },
      "4SS9lmuihO": {
        auto: false,
        data: {
          "proposal.start.date": "2024-01-01",
        },
      },
      "5BvOSdcGqe": {
        auto: false,
        answers: ["phNHyuVqvs"],
      },
      "62LXDzCN9t": {
        auto: false,
      },
      "66LkiZhvhd": {
        auto: true,
        answers: ["ORfHJqcr0D"],
      },
      "6AiepUVV19": {
        auto: true,
        answers: ["CqHwMfPIHR"],
      },
      "6guFEqvCGT": {
        auto: true,
        answers: ["yD843IY3m1"],
      },
      "8Wz7TKJbeD": {
        auto: false,
        answers: ["8qqEbCGj97"],
      },
      "8XMxtVMin2": {
        auto: true,
        answers: ["TTPxO66mEi"],
      },
      "8kaCyhvpH7": {
        auto: false,
        answers: ["PsRnXEO2x7"],
      },
      "8wv6JcQXeC": {
        auto: true,
        data: {
          "property.EPCKnown.form": ["The property does not have one"],
        },
      },
      "9jgV3s3kMq": {
        auto: true,
        data: {
          "property.titleNumber": ["unknown"],
        },
      },
      ADEFuGG2xF: {
        auto: false,
        data: {
          "property.drawing.sitePlan": [
            {
              url: "https://api.editor.planx.dev/file/private/vejru1ed/Screenshot%20from%202023-04-25%2013-01-50.png",
              filename: "Screenshot from 2023-04-25 13-01-50.png",
              cachedSlot: {
                id: "yf40-jErTO5vcrosxKwUd",
                url: "https://api.editor.planx.dev/file/private/vejru1ed/Screenshot%20from%202023-04-25%2013-01-50.png",
                file: {
                  path: "Screenshot from 2023-04-25 13-01-50.png",
                  size: 60467,
                  type: "image/png",
                },
                status: "success",
                progress: 1,
              },
            },
          ],
        },
      },
      AXaUG0hqW3: {
        auto: false,
        answers: ["QRbcuwI2zJ"],
      },
      B3QUuAVXW4: {
        auto: false,
        answers: ["g3GoOjJgaN"],
      },
      BEOIGLHpsD: {
        auto: true,
        answers: ["eCfyydxyzW"],
      },
      BZ7i3DZDA2: {
        auto: true,
        data: {
          "application.reason": [
            "It looks like the changes fall within the scope of permitted development.",
          ],
        },
      },
      BnAgyyY3hX: {
        auto: false,
        answers: ["7ebH217ewZ"],
      },
      Bv7z9hsFNV: {
        auto: true,
        data: {
          "proposal.type": ["proposed"],
        },
      },
      D5kuDFxTjM: {
        auto: false,
        data: {
          _nots: {
            "property.constraints.planning": [
              "article4",
              "listed",
              "locallyListed",
              "registeredPark",
              "designated.conservationArea",
              "designated.AONB",
              "designated.nationalPark",
              "designated.nationalPark.broads",
              "designated.WHS",
              "designated.SPA",
              "monument",
              "tpo",
              "nature.SSSI",
              "nature.SAC",
              "nature.ASNW",
              "designated",
              "article4.lambeth.caz",
              "road.classified",
            ],
          },
          _constraints: constraints,
        },
      },
      DRDCupIVGF: {
        auto: false,
        answers: ["qJOuaBYmPV"],
      },
      E63e1zXlP8: {
        auto: false,
        answers: ["Ldu681Wb3o"],
      },
      Ee6KoNMnoz: {
        auto: false,
        answers: ["dXedv9G09U"],
      },
      Ft7nQ96FWN: {
        auto: true,
        answers: ["HpbTYicfdV"],
      },
      G24OiZ6efK: {
        auto: false,
        answers: ["ApWXpo366q"],
      },
      GzQpqiOMyb: {
        auto: false,
        data: {
          _address: {
            x: 533584,
            y: 170841,
            pao: "36",
            town: "LONDON",
            uprn: "100023246931",
            usrn: "21901526",
            title: "36, WOODLAND ROAD, LONDON",
            source: "os",
            street: "WOODLAND ROAD",
            latitude: 51.4208489,
            postcode: "SE19 1NT",
            blpu_code: "2",
            longitude: -0.0802038,
            planx_value: null,
            organisation: null,
            planx_description: "Property Shell",
            single_line_address: "36, WOODLAND ROAD, LONDON, LAMBETH, SE19 1NT",
          },
          "property.region": ["London"],
          "property.localAuthorityDistrict": ["Lambeth"],
        },
      },
      H149aYxMJs: {
        auto: true,
        data: {
          "application.fee.reduction.alternative": ["false"],
        },
      },
      ID9WMI7OEi: {
        auto: true,
        answers: ["x9Ed6ECDRt"],
      },
      IvhIQ5MqTU: {
        auto: false,
        answers: ["RZBWTrxcPK"],
      },
      JsQ6stbSoR: {
        auto: true,
        data: {
          "uniform.scenarioNumber": ["15"],
        },
      },
      L6RlHOAmz3: {
        auto: false,
        answers: ["JpD8CZ5aCu"],
      },
      LKIH1WsOMk: {
        auto: true,
        answers: ["22Pf5UOwiP"],
      },
      MJXLDEEfQl: {
        auto: false,
        answers: ["htF4WmFFqI"],
      },
      MZxqLLRlpU: {
        auto: true,
        answers: ["iCA0Zh7mWZ"],
      },
      NpxV0KPCFD: {
        auto: true,
        answers: ["kgaFUFF9ER"],
      },
      OE4iwSIBEh: {
        auto: true,
        answers: ["KJYBgEBrp4"],
      },
      OOA81d7i3v: {
        auto: true,
        answers: ["nAQzgzcoRF"],
      },
      OOiDESNCgm: {
        auto: false,
        answers: ["P7W34viuIi"],
      },
      OPdu2dxcS9: {
        auto: true,
        data: {
          "applicant.ownership.certificate": ["a"],
        },
      },
      OjcuaKCgpa: {
        auto: true,
        answers: ["AeLGP7vY6f"],
      },
      PEsJYwW5SO: {
        auto: true,
        answers: ["st8Gv2ju9Q"],
      },
      PrOPyE0sgC: {
        auto: true,
        data: {
          "uniform.proposedUseStatus": ["permanent"],
        },
      },
      PsPDXO23J4: {
        auto: true,
        answers: ["0raZXaqEZk"],
      },
      Q5d9bU965F: {
        auto: true,
        data: {
          "proposal.changeNumberOfHomes": ["other"],
        },
      },
      QAZWTVrm3T: {
        auto: true,
        data: {
          "application.fee.reduction.parishCouncil": ["false"],
        },
      },
      QEw7EiwKAH: {
        auto: true,
        data: {
          "application.declaration.connection.form": ["No connections"],
        },
      },
      QoMCXqj0Jq: {
        auto: true,
        answers: ["SrN40HwUhR"],
      },
      R72aEYrj3F: {
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
                href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj",
                method: "GET",
              },
              cancel: {
                href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj/cancel",
                method: "POST",
              },
              events: {
                href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj/events",
                method: "GET",
              },
              refunds: {
                href: "https://publicapi.payments.service.gov.uk/v1/payments/34qqn82kdmc7qaodm5a7qqovbj/refunds",
                method: "GET",
              },
              next_url: {
                href: "https://card.payments.service.gov.uk/secure/28343aab-47bb-4511-8b09-129acd6a8b18",
                method: "GET",
              },
              next_url_post: {
                href: "https://card.payments.service.gov.uk/secure",
                type: "application/x-www-form-urlencoded",
                method: "POST",
                params: {
                  chargeTokenId: "28343aab-47bb-4511-8b09-129acd6a8b18",
                },
              },
            },
            amount: 103,
            language: "en",
            reference: "969b912c-f196-4ec6-ac73-133f2a516f60",
            payment_id: "34qqn82kdmc7qaodm5a7qqovbj",
            return_url:
              "https://editor.planx.uk/lambeth/apply-for-a-lawful-development-certificate/preview?sessionId=969b912c-f196-4ec6-ac73-133f2a516f60&email=test%40opensystemslab.io",
            description: "New application",
            created_date: "2023-04-27T10:17:44.924Z",
            refund_summary: {
              status: "pending",
              amount_available: 10300,
              amount_submitted: 0,
            },
            delayed_capture: false,
            payment_provider: "sandbox",
            authorisation_mode: "web",
            settlement_summary: {},
          },
        },
      },
      RQsUof5f4e: {
        auto: true,
        answers: ["iMgDYwC1fA"],
      },
      RxPc59DoKO: {
        auto: false,
        answers: ["XE2ySAiGyh"],
      },
      SJRiZ1gkrY: {
        auto: true,
        data: {
          "applicant.sameAddress.form": ["Yes"],
        },
      },
      SY2RlcC2mT: {
        auto: true,
        answers: ["gj7giipgpi"],
      },
      SoLrKSKj7H: {
        auto: true,
        answers: ["QUedStxP6e"],
      },
      Stank2Znpc: {
        auto: false,
      },
      SxNNsZLWST: {
        auto: true,
        answers: ["ZlDSurJAk0"],
      },
      T2QtM64BpR: {
        auto: true,
        data: {
          "applicant.agent.form": ["No"],
        },
      },
      T4MfGcERNk: {
        auto: true,
        answers: ["n2oMskDXup"],
      },
      TfzRoHL6KI: {
        auto: true,
        data: {
          "uniform.personRole": ["Applicant"],
        },
      },
      V4R5ZvdQgz: {
        auto: false,
        answers: ["RDXZDKQc1q"],
      },
      VjKjvZOyUI: {
        auto: false,
        data: {
          "proposal.description": "This is a test application.",
        },
      },
      W8i3I50jmu: {
        auto: true,
        answers: ["UpM0bcIInW"],
      },
      WAUEgMY1RL: {
        auto: true,
        answers: ["AfMV3SF44Q"],
      },
      WBkwbvfPBi: {
        auto: true,
        answers: ["Zuv7Q2EMh7"],
      },
      WtKRa7H01E: {
        auto: true,
        data: {
          "proposal.changeNumberOfHomes.form": ["No"],
        },
      },
      XaYzOFuZeG: {
        auto: true,
        data: {
          "uniform.consentRegime": ["Certificate of Lawfulness"],
        },
      },
      ZVPE5MjeNd: {
        auto: true,
        answers: ["FJCgycNn2P"],
      },
      cmBf4kpgFO: {
        auto: true,
        data: {
          "application.type": ["ldc.proposed"],
        },
      },
      dTKxWBS9rN: {
        auto: true,
        answers: ["Lp0ubA5pu2"],
      },
      dknMGLlZaS: {
        auto: true,
        answers: ["oaEgqmt3Mj"],
      },
      dyszZMv887: {
        auto: true,
        answers: ["pCewlBWKex"],
      },
      e9Gcqw3By0: {
        auto: true,
        answers: ["uHEqz6wfmX"],
      },
      e9KicD0vDS: {
        auto: true,
        data: {
          "proposal.treeWorksOnly": ["false"],
        },
      },
      eUMKf5626P: {
        auto: false,
        data: {
          "proposal.completion.date": "2024-01-15",
        },
      },
      eY70iFnHC8: {
        auto: true,
        data: {
          "property.titleNumberKnown.form": ["No"],
        },
      },
      eiN5C9wgDe: {
        auto: false,
        answers: ["ZtBIcn599M"],
      },
      erMj9LH16l: {
        auto: true,
        data: {
          "application.fee.calculated": 103,
        },
      },
      fLVlIcYbXD: {
        auto: false,
        answers: ["06bA9iXPTC"],
      },
      fVYkQz2pgh: {
        auto: true,
        data: {
          "uniform.applicantInterest": ["Owner"],
        },
      },
      fcVT5E1mS9: {
        auto: true,
        answers: ["lUduBLCNPp"],
      },
      g01FztvfL0: {
        auto: true,
        data: {
          "application.fee.reduction.sports": ["false"],
        },
      },
      gWdARYduWf: {
        auto: false,
        answers: ["fADA2zqqWZ"],
      },
      hwylHZOZXA: {
        auto: false,
        answers: ["o8F4ZxPUdg"],
      },
      hy4BpkgxiS: {
        auto: true,
        data: {
          "application.preAppAdvice.form": ["No"],
        },
      },
      ifKSiqpfjA: {
        auto: true,
        data: {
          "application.fee.exemption.resubmission": ["false"],
        },
      },
      jElHa4maz7: {
        auto: true,
        answers: ["SXIAJm69Ab"],
      },
      jhW9joqZF3: {
        auto: true,
        answers: ["jqor9SqKdC"],
      },
      jkGS7LGAID: {
        auto: true,
        answers: ["pDbALmkBdg"],
      },
      k6Q5dvmXD1: {
        auto: false,
        data: {
          "proposal.drawing.elevation": [
            {
              url: "https://api.editor.planx.dev/file/private/12jdv6t0/Screenshot%20from%202023-04-25%2013-01-50.png",
              filename: "Screenshot from 2023-04-25 13-01-50.png",
              cachedSlot: {
                id: "W7ZpITiFui0gOwEN0fKgw",
                url: "https://api.editor.planx.dev/file/private/12jdv6t0/Screenshot%20from%202023-04-25%2013-01-50.png",
                file: {
                  path: "Screenshot from 2023-04-25 13-01-50.png",
                  size: 60467,
                  type: "image/png",
                },
                status: "success",
                progress: 1,
              },
            },
          ],
        },
      },
      kH8LltzXsC: {
        auto: true,
        answers: ["bKvEooIOQF"],
      },
      kjyrSk55Us: {
        auto: true,
        data: {
          "uniform.applicationTo": ["N5660"],
        },
      },
      lCfRyXcbqm: {
        auto: false,
        answers: ["GCh1PmH3vR"],
      },
      lMy9g3WJeI: {
        auto: false,
        answers: ["9ciucqOCIv"],
      },
      m1ywRbgU2j: {
        auto: true,
        data: {
          "application.declaration.accurate.form": ["Yes"],
        },
      },
      mFKz9j9Teo: {
        auto: true,
        answers: ["Ci4VZyOPcm"],
      },
      mpDYAZBWJO: {
        auto: true,
        answers: ["R34ldvRJHr"],
      },
      o3pjW1Ewvt: {
        auto: true,
        data: {
          "uniform.isRelated": ["false"],
        },
      },
      p11Ci13HQ3: {
        auto: false,
        data: {
          "applicant.email": "test@opensystemslab.io",
          "_contact.applicant": {
            applicant: {
              email: "test@opensystemslab.io",
              phone: "123",
              title: "",
              lastName: "Test",
              firstName: "Test",
              organisation: "",
            },
          },
          "applicant.name.last": "Test",
          "applicant.name.first": "Test",
          "applicant.phone.primary": "123",
        },
      },
      pZnDl2vCR1: {
        auto: true,
        data: {
          "applicant.interest.form": ["Sole owner"],
        },
      },
      sea3PGmxCZ: {
        auto: false,
        answers: ["VrrESbMyxA"],
      },
      t0L64Ni9x5: {
        auto: true,
        answers: ["EyB8pxExzA"],
      },
      tClUld3roO: {
        auto: true,
        answers: ["InXbWQrzAo"],
      },
      uCJDR1VzzH: {
        auto: true,
        data: {
          "application.basisOfLawfulness": ["permittedDevelopment"],
        },
      },
      uCpFOkZnVA: {
        auto: true,
        data: {
          "application.fee.payable": 103,
        },
      },
      uEWi5CUULe: {
        auto: true,
        answers: ["PbjNPpOIfT"],
      },
      wCqwaiL60E: {
        auto: true,
        answers: ["iavOhUUgRh"],
      },
      wMA7jr45yt: {
        auto: false,
        data: {
          "proposal.siteArea": 201.43,
          "property.boundary.site": {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-0.0803683698177373, 51.42084936515354],
                  [-0.0803683698177373, 51.42080420459155],
                  [-0.080081373453144, 51.42082093073083],
                  [-0.08005186915398022, 51.42082260334442],
                  [-0.07982119917869965, 51.42082009442399],
                  [-0.07983058691025176, 51.42087529064119],
                  [-0.08002907037735366, 51.420871109111914],
                  [-0.08005052804947278, 51.42086860019418],
                  [-0.08029326796532037, 51.420854382991024],
                  [-0.0803683698177373, 51.42084936515354],
                ],
              ],
            },
            properties: null,
          },
          "proposal.siteArea.hectares": 0.020143,
        },
      },
      wPBtMEpnx8: {
        auto: false,
      },
      wnfLSSZCat: {
        auto: true,
        data: {
          "proposal.droppedKerbOnly": ["false"],
        },
      },
      x86Gqqn9ol: {
        auto: true,
        data: {
          "uniform.siteVisit": ["true"],
        },
      },
      yPJSNETmd7: {
        auto: true,
        data: {
          "proposal.visibleFromPublicRealm": ["Information not provided"],
        },
      },
      zrzylofeuv: {
        auto: false,
        data: {
          "property.drawing.elevation": [
            {
              url: "https://api.editor.planx.dev/file/private/5srbgzu1/Screenshot%20from%202023-04-25%2013-01-50.png",
              filename: "Screenshot from 2023-04-25 13-01-50.png",
              cachedSlot: {
                id: "Y9S-PiGb2WoBxuJOcjxND",
                url: "https://api.editor.planx.dev/file/private/5srbgzu1/Screenshot%20from%202023-04-25%2013-01-50.png",
                file: {
                  path: "Screenshot from 2023-04-25 13-01-50.png",
                  size: 60467,
                  type: "image/png",
                },
                status: "success",
                progress: 1,
              },
            },
          ],
        },
      },
    },
  },
  proposal_details: [
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Is the property in London Borough of Lambeth?",
      responses: [
        {
          value: "Yes",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Town and Country Planning Act 1990, Part 7, Section 191 &amp; Section 192",
          },
        ],
        portal_name: "",
      },
      question: "What are you applying about?",
      responses: [
        {
          value: "Proposed changes I want to make in the future",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Town and Country Planning Act 1990 (Section 55), The Town and Country Planning (General Permitted Development) (England) Order 2015",
          },
        ],
        portal_name: "",
      },
      question: "List the changes involved in the project",
      responses: [
        {
          value: "Install a security alarm",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Town and Country Planning Act 1990, Section 55 (2)",
          },
        ],
        portal_name: "",
        auto_answered: true,
      },
      question: "Is the property in a conservation area?",
      responses: [
        {
          value: "No",
          metadata: {
            flags: ["Planning permission / Permitted development"],
          },
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Is the property subject to any Article 4 directions?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What types of changes does the project involve?",
      responses: [
        {
          value: "Alteration",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question:
        "Have you already told us that you are doing works to a tree or hedge?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Are there any protected trees on the property?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Is the site in a conservation area?",
      responses: [
        {
          value: "No",
          metadata: {
            flags: ["Works to trees & hedges / Not required"],
          },
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Is any part of the property listed?",
      responses: [
        {
          value: "No",
          metadata: {
            flags: ["Listed building consent / Not required"],
          },
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Should the applicant also apply for Works to Trees Consent?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What are you applying about?",
      responses: [
        {
          value: "Proposed changes I want to make in the future",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What do the works involve?",
      responses: [
        {
          value: "Alterations",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What does the project involve?",
      responses: [
        {
          value: "Install a security alarm",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Do the changes involve the creation of any new homes?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
        portal_name: "",
        auto_answered: true,
      },
      question: "Is the property in the Greater London Authority area?",
      responses: [
        {
          value: "Yes",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
        portal_name: "",
      },
      question: "How many properties are on the site?",
      responses: [
        {
          value: "Only one",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Do you know the title number of the property?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
        portal_name: "",
      },
      question:
        "Does the property have an Energy Performance Certificate (EPC)?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
        portal_name: "",
        auto_answered: true,
      },
      question: "What type of application is this?",
      responses: [
        {
          value: "Lawful Development Certificate - Proposed",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
        portal_name: "",
      },
      question: "When will the works start?",
      responses: [
        {
          value: "2024-01-01",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
        portal_name: "",
      },
      question: "When will the works be completed?",
      responses: [
        {
          value: "2024-01-15",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
        portal_name: "",
      },
      question: "Does the site include parking spaces for any of these?",
      responses: [
        {
          value: "None of these",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Are you applying on behalf of someone else?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Which of these best describes you (or your organisation)?",
      responses: [
        {
          value: "Private individual",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Your contact details",
      responses: [
        {
          value: "test@opensystemslab.io Test Test 123",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Is your contact address the same as the property address?",
      responses: [
        {
          value: "Yes",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question:
        "We may need to visit your site to assess your application. If we do, who should we contact to arrange the visit?",
      responses: [
        {
          value: "Me, the applicant",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Which of these best describes you?",
      responses: [
        {
          value: "Applicant",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Development Management Procedure) (England) Order 2015",
          },
        ],
        portal_name: "",
      },
      question: "Which of these best describes your interest in the land?",
      responses: [
        {
          value: "Sole owner",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "[Town and Country Planning Act 1990 Section 171B](https://www.legislation.gov.uk/ukpga/1990/8/section/171B)",
          },
        ],
        portal_name: "",
        auto_answered: true,
      },
      question: "What are you applying about?",
      responses: [
        {
          value: "Changes that will be made in the future",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What types of changes does the project involve?",
      responses: [
        {
          value: "Alteration",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question:
        "Have you already told us that the project will involve works to the roof?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question:
        "Will the works involve altering the appearance or layout of any roof?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question:
        "Does the work involve any alterations to ground or floor levels?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Would you like to upload any photographs?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question:
        "Would you like to upload any additional drawings, documents or images?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What type of planning application are you making?",
      responses: [
        {
          value: "Lawful Development Certificate",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What type of changes are you applying for?",
      responses: [
        {
          value: "Proposed changes",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Is the property a home?",
      responses: [
        {
          value: "Yes",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What types of changes does the application relate to?",
      responses: [
        {
          value: "Alteration",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Schedule 1, Part 2",
          },
        ],
        portal_name: "",
      },
      question: "How many homes does this application relate to?",
      responses: [
        {
          value: "1",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What alterations are being made to the building?",
      responses: [
        {
          value: "Other alterations not on this list",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Is the property a home?",
      responses: [
        {
          value: "Yes",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What works does the project involve?",
      responses: [
        {
          value: "Alteration",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14UK Statutory Instruments 2012 No. 2920 Regulation 4, Equalities Act 2010, Section 6 Children Act 1989, Part 3",
          },
        ],
        portal_name: "",
      },
      question:
        "Is the sole purpose of the project to support the needs of a disabled resident?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 9",
          },
        ],
        portal_name: "",
      },
      question: "Is this application a resubmission?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Does the application qualify for a disability exemption?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Does the application qualify for a resubmission exemption?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 3",
          },
        ],
        portal_name: "",
        auto_answered: true,
      },
      question: "Is the site a sports field?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11",
          },
        ],
        portal_name: "",
        auto_answered: true,
      },
      question:
        "Is the application being made by (or on behalf of) a parish or community council?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10",
          },
        ],
        portal_name: "",
      },
      question:
        "Are you also submitting another proposal for the same site today?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question:
        "Does the application qualify for the sports club fee reduction?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11",
          },
        ],
        portal_name: "",
        auto_answered: true,
      },
      question:
        "Does the application qualify for the parish council reduction?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question:
        "Does the application qualify for the alternative application reduction?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question:
        "Did you get any pre-application advice before making this application?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What type of application is it?",
      responses: [
        {
          value: "Lawful Development Certificate – Proposed changes",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What does the project involve?",
      responses: [
        {
          value: "Alteration",
          metadata: {
            flags: ["Community infrastructure levy / Not liable"],
          },
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Which Local Planning authority is it?",
      responses: [
        {
          value: "Lambeth",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "Connections with London Borough of Lambeth",
      responses: [
        {
          value: "None of the above apply to me",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
      },
      question: "I confirm that:",
      responses: [
        {
          value:
            "The information contained in this application is truthful, accurate and complete, to the best of my knowledge",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question:
        "What local planning authority is this application being sent to?",
      responses: [
        {
          value: "Lambeth",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What type of application is it?",
      responses: [
        {
          value: "Lawful Development Certificate",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What type of works are you applying about?",
      responses: [
        {
          value: "Proposed",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What is the applicant's interest in the land?",
      responses: [
        {
          value: "Owner",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What is the user's role?",
      responses: [
        {
          value: "Applicant",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "What is the applicant's declared connections?",
      responses: [
        {
          value: "None",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Does the application qualify for a disability exemption?",
      responses: [
        {
          value: "No",
        },
      ],
    },
    {
      metadata: {
        portal_name: "",
        auto_answered: true,
      },
      question: "Does the application qualify for a resubmission exemption?",
      responses: [
        {
          value: "No",
        },
      ],
    },
  ],
  payment_reference: "34qqn82kdmc7qaodm5a7qqovbj",
  applicant_last_name: "Test",
  applicant_first_name: "Test",
};
