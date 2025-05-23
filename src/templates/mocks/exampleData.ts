export const exampleData = {
  data: [
    {
      question: "Planning Application Reference",
      responses: "fcdaabb2-1feb-47cb-94fa-f9d5148b2efb",
    },
    {
      question: "Property Address",
      responses:
        "BUCKINGHAMSHIRE COUNCIL COUNCIL OFFICES QUEEN VICTORIA ROAD HIGH WYCOMBE HP11 1BB",
    },
    {
      question: "Does this demo support Checklists?",
      responses: [{ value: "a" }, { value: "b" }],
    },
    { question: "application_type", responses: "lawfulness_certificate" },
    {
      question: "site",
      responses: {
        town: "HIGH WYCOMBE",
        uprn: "200000797602",
        latitude: 51.6274191,
        postcode: "HP11 1BB",
        address_1:
          "BUCKINGHAMSHIRE COUNCIL, COUNCIL OFFICES, QUEEN VICTORIA ROAD",
        longitude: -0.7489513,
      },
    },
    {
      question: "boundary_geojson",
      responses: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-0.7491888117037445, 51.62746573090956],
              [-0.7487475045017631, 51.627460469121615],
              [-0.7490133156060904, 51.627360716173484],
              [-0.7491888117037445, 51.62746573090956],
            ],
          ],
        },
        properties: null,
      },
    },
    {
      question: "constraints",
      responses: {
        tpo: false,
        listed: false,
        articleFour: false,
        monument: false,
        "nature.SAC": false,
        "nature.ASNW": false,
        "nature.SSSI": false,
        "nature.SPA": false,
        "designated.WHS": false,
        registeredPark: false,
        "designated.AONB": false,
        "designated.nationalPark": false,
        "designated.conservationArea": true,
        "articleFour.buckinghamshire.caz": false,
        "designated.nationalPark.broads": false,
      },
    },
    { question: "work_status", responses: "proposed" },
    {
      question: "result",
      responses: {
        flag: "Planning permission / Not development",
        heading: "Not development",
        description:
          "It looks like the proposed changes may not fall within the legal definition of ‘development’, and therefore would not require planning permission.",
      },
    },
    { question: "user_role", responses: "applicant" },
    { question: "applicant_first_name", responses: "test" },
    { question: "applicant_last_name", responses: "test" },
    { question: "applicant_phone", responses: "1234567" },
    { question: "applicant_email", responses: "dafydd@opensystemslab.io" },
    { question: "description", responses: "test" },
    {
      metadata: { portal_name: "_root" },
      question: "Is the property in Buckinghamshire?",
      responses: [{ value: "Yes" }],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "Town and Country Planning Act 1990, Part 7, Section 191 &amp; Section 192",
          },
        ],
        portal_name: "_root",
      },
      question: "What are you applying about?",
      responses: [{ value: "Proposed changes I want to make in the future" }],
    },
    {
      metadata: { portal_name: "permitteddevelopment" },
      question: "List the changes involved in the project",
      responses: [{ value: "Install a security alarm" }],
    },
    {
      metadata: {
        policy_refs: [
          { text: "Town and Country Planning Act 1990, Section 55 (2)" },
        ],
        portal_name: "Alarms",
        auto_answered: true,
      },
      question: "Is the property in a conservation area?",
      responses: [{ value: "Yes" }],
    },
    {
      metadata: {
        policy_refs: [
          { text: "Town and Country Planning Act 1990, Section 55 (2)" },
        ],
        portal_name: "Alarms",
      },
      question: "Do the works include installing a new alarm box to the house?",
      responses: [
        {
          value: "No",
          metadata: { flags: ["Planning permission / Not development"] },
        },
      ],
    },
    {
      metadata: { portal_name: "_root", auto_answered: true },
      question: "Is any part of the property listed?",
      responses: [
        {
          value: "No",
          metadata: { flags: ["Works to listed buildings / Not required"] },
        },
      ],
    },
    {
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
      },
      question: "What types of changes does the project involve?",
      responses: [{ value: "Alteration" }],
    },
    {
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
      },
      question:
        "Have you already told us that you are doing works to a tree or hedge?",
      responses: [{ value: "No" }],
    },
    {
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
      },
      question: "Are there any protected trees on the property?",
      responses: [{ value: "No" }],
    },
    {
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
      },
      question: "Is the site in a conservation area?",
      responses: [{ value: "Yes" }],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Tree Preservation)(England) Regulations 2012 Part 3",
          },
        ],
        portal_name: "works-to-trees-filter",
      },
      question:
        "Might the works affect any tree with a trunk wider than 100mm?",
      responses: [
        {
          value: "No, definitely not",
          metadata: { flags: ["Works to trees & hedges / Not required"] },
        },
      ],
    },
    {
      metadata: { portal_name: "more-details", auto_answered: true },
      question: "What does the project involve?",
      responses: [{ value: "Install a security alarm" }],
    },
    {
      metadata: {
        policy_refs: [{ text: "Greater London Authority Act 1999" }],
        portal_name: "more-details",
      },
      question: "Is the property in the Greater London Authority area?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "about-the-applicant" },
      question: "Are you applying on behalf of someone else?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "about-the-applicant" },
      question: "Which of these best describes you?",
      responses: [{ value: "Private individual" }],
    },
    {
      metadata: { portal_name: "about-the-applicant" },
      question: "Title",
      responses: [{ value: "mr" }],
    },
    {
      metadata: { portal_name: "about-the-applicant" },
      question: "Is your contact address the same as the property address?",
      responses: [{ value: "Yes" }],
    },
    {
      metadata: { portal_name: "about-the-applicant" },
      question:
        "If a planning officer needs to make a site visit, who should they contact?",
      responses: [{ value: "Me, the applicant" }],
    },
    {
      metadata: {
        portal_name: "certificate-of-lawfulness-interest-in-land",
        auto_answered: true,
      },
      question: "Which of these best describes you?",
      responses: [{ value: "Applicant" }],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Development Management Procedure) (England) Order 2015",
          },
        ],
        portal_name: "certificate-of-lawfulness-interest-in-land",
      },
      question: "Which of these best describes your interest in the land?",
      responses: [{ value: "Sole owner" }],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "[Town and Country Planning Act 1990 Section 171B](https://www.legislation.gov.uk/ukpga/1990/8/section/171B)",
          },
        ],
        portal_name: "_root",
        auto_answered: true,
      },
      question: "What are you applying about?",
      responses: [{ value: "Changes that will be made in the future" }],
    },
    {
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        auto_answered: true,
      },
      question: "What types of changes does the project involve?",
      responses: [{ value: "Alteration" }],
    },
    {
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        auto_answered: true,
      },
      question:
        "Have you already told us that the project will involve works to the roof?",
      responses: [{ value: "No" }],
    },
    {
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
      },
      question:
        "Will the works involve altering the appearance or layout of any roof?",
      responses: [{ value: "No" }],
    },
    {
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
      },
      question:
        "Does the work involve any alterations to ground or floor levels?",
      responses: [{ value: "No" }],
    },
    {
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
      },
      question: "Would you like to upload any photographs?",
      responses: [{ value: "No" }],
    },
    {
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
      },
      question:
        "Would you like to upload any additional drawings, documents or images?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "fee-calculator", auto_answered: true },
      question: "What type of planning application are you making?",
      responses: [{ value: "Lawful Development Certificate" }],
    },
    {
      metadata: { portal_name: "fee-calculator", auto_answered: true },
      question: "What type of changes are you applying for?",
      responses: [{ value: "Proposed changes" }],
    },
    {
      metadata: { portal_name: "LDC - Proposed", auto_answered: true },
      question: "Is the property a home?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "LDC - Proposed", auto_answered: true },
      question: "What types of changes does the application relate to?",
      responses: [{ value: "Alteration" }],
    },
    {
      metadata: { portal_name: "LDC - Proposed", auto_answered: true },
      question: "What will the alterations involve?",
      responses: [{ value: "Other alterations" }],
    },
    {
      metadata: { portal_name: "Fee Exemptions", auto_answered: true },
      question: "Is the property a home?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "Fee Exemptions", auto_answered: true },
      question: "What type of changes does the project involve?",
      responses: [{ value: "Alteration" }],
    },
    {
      metadata: { portal_name: "Fee Exemptions" },
      question: "Are the public allowed to access the building?",
      responses: [{ value: "No" }],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 9",
          },
        ],
        portal_name: "Fee Exemptions",
      },
      question: "Is this application a resubmission?",
      responses: [{ value: "Yes" }],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 8",
          },
        ],
        portal_name: "Fee Exemptions",
      },
      question:
        "Is this the first time you have resubmitted an application for this site?",
      responses: [{ value: "Yes" }],
    },
    {
      metadata: { portal_name: "Fee Exemptions", auto_answered: true },
      question: "What type of application is this?",
      responses: [{ value: "Lawful Development Certificate" }],
    },
    {
      metadata: { portal_name: "Fee Exemptions" },
      question: "What was the original application's reference number?",
      responses: [{ value: "test" }],
    },
    {
      metadata: {
        policy_refs: [
          { text: "UK Statutory Instruments 2012 No. 2920 Regulation 8" },
        ],
        portal_name: "Fee Exemptions",
      },
      question:
        "To qualify for a fee exemption, the proposed works must be of a similar description to the original application",
      responses: [{ value: "I understand" }],
    },
    {
      metadata: { portal_name: "Fee Exemptions" },
      question: "What was the result of the original application?",
      responses: [{ value: "It was not determined in time" }],
    },
    {
      metadata: {
        policy_refs: [
          { text: "UK Statutory Instruments 2012 No. 2920 Regulation 8" },
        ],
        portal_name: "Fee Exemptions",
      },
      question: "When did the original application time out?",
      responses: [{ value: "Within the last 12 months" }],
    },
    {
      metadata: { portal_name: "fee-calculator", auto_answered: true },
      question: "Does the application qualify for a disability exemption?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "fee-calculator", auto_answered: true },
      question: "Does the application qualify for a resubmission exemption?",
      responses: [{ value: "Yes" }],
    },
    {
      metadata: { portal_name: "pre-app-advice-check" },
      question:
        "Did you get any pre-application advice before making this application?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "declarations" },
      question: "Connections with Buckinghamshire Council",
      responses: [{ value: "None of the above apply to me" }],
    },
    {
      metadata: {
        policy_refs: [
          {
            text: "The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A.1 (b)",
          },
        ],
        portal_name: "Rear and side extensions to houses",
      },
      question:
        "How much of the property is covered by extensions and outbuilding?",
      responses: [
        {
          value: "50% or less of the available area around the original house",
          metadata: {
            flags: ["Planning permission / Permitted development"],
          },
        },
      ],
    },
    {
      metadata: { portal_name: "declarations" },
      question: "I confirm that:",
      responses: [
        {
          value:
            "The information contained in this application is truthful, accurate and complete, to the best of my knowledge",
        },
      ],
    },
    {
      metadata: { portal_name: "uniform-translator" },
      question:
        "What local planning authority is this application being sent to?",
      responses: [{ value: "Wycombe" }],
    },
    {
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
      },
      question: "What is the user's role?",
      responses: [{ value: "Applicant" }],
    },
    {
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
      },
      question: "What is the application type?",
      responses: [{ value: "Proposed" }],
    },
    {
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
      },
      question: "What is the applicant's interest in the land?",
      responses: [{ value: "Owner" }],
    },
    {
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
      },
      question: "What is the applicant's declared connections?",
      responses: [{ value: "None" }],
    },
    {
      metadata: { portal_name: "_root", auto_answered: true },
      question: "Does the application qualify for a disability exemption?",
      responses: [{ value: "No" }],
    },
    {
      metadata: { portal_name: "_root", auto_answered: true },
      question: "Does the application qualify for a resubmission exemption?",
      responses: [{ value: "Yes" }],
    },
    {
      question: "File upload: Existing, Plan",
      responses:
        "WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
    },
    {
      question: "File upload: Proposed, Plan",
      responses:
        "WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
    },
    {
      question: "File upload: Existing, Elevation",
      responses:
        "WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
    },
    {
      question: "File upload: Proposed, Elevation",
      responses:
        "WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
    },
  ],
  files: [
    "https://api.editor.planx.dev/file/private/cf9yx466/WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
    "https://api.editor.planx.dev/file/private/hgvzjumf/WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
    "https://api.editor.planx.dev/file/private/g3yw5cc3/WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
    "https://api.editor.planx.dev/file/private/nq62zbns/WhatsApp%20Image%202022-07-01%20at%2011.18.03%20AM%20%281%29.jpeg",
  ],
  geojson: {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-0.7491888117037445, 51.62746573090956],
          [-0.7487475045017631, 51.627460469121615],
          [-0.7490133156060904, 51.627360716173484],
          [-0.7491888117037445, 51.62746573090956],
        ],
      ],
    },
    properties: null,
  },
  sessionId: "fcdaabb2-1feb-47cb-94fa-f9d5148b2efb",
};
