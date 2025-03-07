export const exampleWithSections = {
  data: [
    {
      question: "Planning Application Reference",
      responses: "fcdaabb2-1feb-47cb-94fa-f9d5148b2efb",
    },
    {
      question: "result",
      responses: {
        flag: "Planning permission / Not development",
        heading: "Not development",
        description:
          "It looks like the proposed changes may not fall within the legal definition of ‘development’, and therefore would not require planning permission.",
      },
    },
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
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "_root",
        auto_answered: true,
        section_name: "About the property",
      },
      question: "Is the property in Buckinghamshire?",
    },
    {
      responses: [
        {
          value: "Proposed changes I want to make in the future",
        },
      ],
      metadata: {
        portal_name: "_root",
        section_name: "About the project",
        policy_refs: [
          {
            text: "Town and Country Planning Act 1990, Part 7, Section 191 &amp; Section 192",
          },
        ],
      },
      question: "What are you applying about?",
    },
    {
      responses: [
        {
          value: "Install a security alarm",
        },
      ],
      metadata: {
        portal_name: "permitteddevelopment",
        section_name: "About the project",
        policy_refs: [
          {
            text: "Town and Country Planning Act 1990 (Section 55), The Town and Country Planning (General Permitted Development) (England) Order 2015",
          },
        ],
      },
      question: "List the changes involved in the project",
    },
    {
      responses: [
        {
          value: "No",
          metadata: {
            flags: ["Planning permission / Permitted development"],
          },
        },
      ],
      metadata: {
        portal_name: "Alarms",
        auto_answered: true,
        section_name: "About the project",
        policy_refs: [
          {
            text: "Town and Country Planning Act 1990, Section 55 (2)",
          },
        ],
      },
      question: "Is the property in a conservation area?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "_root",
        auto_answered: true,
        section_name: "About the project",
      },
      question: "Is the property subject to any Article 4 directions?",
    },
    {
      responses: [
        {
          value: "No",
          metadata: {
            flags: ["Works to listed buildings / Not required"],
          },
        },
      ],
      metadata: {
        portal_name: "Warnings",
        auto_answered: true,
        section_name: "About the project",
      },
      question: "Is any part of the property listed?",
    },
    {
      responses: [
        {
          value: "Alteration",
        },
      ],
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "What types of changes does the project involve?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question:
        "Have you already told us that you are doing works to a tree or hedge?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "Are there any protected trees on the property?",
    },
    {
      responses: [
        {
          value: "No",
          metadata: {
            flags: ["Works to trees & hedges / Not required"],
          },
        },
      ],
      metadata: {
        portal_name: "works-to-trees-filter",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "Is the site in a conservation area?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "_root",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "Should the applicant also apply for Works to Trees Consent?",
    },
    {
      responses: [
        {
          value: "Proposed changes I want to make in the future",
        },
      ],
      metadata: {
        portal_name: "more-details",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "What are you applying about?",
    },
    {
      responses: [
        {
          value: "Alterations",
        },
      ],
      metadata: {
        portal_name: "more-details",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "What do the works involve?",
    },
    {
      responses: [
        {
          value: "Install a security alarm",
        },
      ],
      metadata: {
        portal_name: "more-details",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "What does the project involve?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "more-details",
        auto_answered: true,
        section_name: "Works to trees",
      },
      question: "Do the changes involve the creation of any new homes?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "more-details",
        auto_answered: true,
        section_name: "Works to trees",
        policy_refs: [
          {
            text: "Greater London Authority Act 1999",
          },
        ],
      },
      question: "Is the property in the Greater London Authority area?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "about-the-applicant",
        section_name: "About you",
      },
      question: "Are you applying on behalf of someone else?",
    },
    {
      responses: [
        {
          value: "Private individual",
        },
      ],
      metadata: {
        portal_name: "about-the-applicant",
        section_name: "About you",
      },
      question: "Which of these best describes you?",
    },
    {
      responses: [
        {
          value: "mr test test 345 dafydd@opensystemslab.io",
        },
      ],
      metadata: {
        portal_name: "about-the-applicant",
        section_name: "About you",
      },
      question: "Enter your contact details",
    },
    {
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "about-the-applicant",
        section_name: "About you",
      },
      question: "Is your contact address the same as the property address?",
    },
    {
      responses: [
        {
          value: "Me, the applicant",
        },
      ],
      metadata: {
        portal_name: "about-the-applicant",
        section_name: "About you",
      },
      question:
        "If a planning officer needs to make a site visit, who should they contact?",
    },
    {
      responses: [
        {
          value: "Applicant",
        },
      ],
      metadata: {
        portal_name: "ownership",
        auto_answered: true,
        section_name: "Ownership",
      },
      question: "Which of these best describes you?",
    },
    {
      responses: [
        {
          value: "Sole owner",
        },
      ],
      metadata: {
        portal_name: "ownership",
        section_name: "Ownership",
        policy_refs: [
          {
            text: "The Town and Country Planning (Development Management Procedure) (England) Order 2015",
          },
        ],
      },
      question: "Which of these best describes your interest in the land?",
    },
    {
      responses: [
        {
          value: "Changes that will be made in the future",
        },
      ],
      metadata: {
        portal_name: "_root",
        auto_answered: true,
        section_name: "Upload drawings",
        policy_refs: [
          {
            text: "[Town and Country Planning Act 1990 Section 171B](https://www.legislation.gov.uk/ukpga/1990/8/section/171B)",
          },
        ],
      },
      question: "What are you applying about?",
    },
    {
      responses: [
        {
          value: "Alteration",
        },
      ],
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        auto_answered: true,
        section_name: "Upload drawings",
      },
      question: "What types of changes does the project involve?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        auto_answered: true,
        section_name: "Upload drawings",
      },
      question:
        "Have you already told us that the project will involve works to the roof?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        section_name: "Upload drawings",
      },
      question:
        "Will the works involve altering the appearance or layout of any roof?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        section_name: "Upload drawings",
      },
      question:
        "Does the work involve any alterations to ground or floor levels?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        section_name: "Upload drawings",
      },
      question: "Would you like to upload any photographs?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "certificate-of-lawfulness-proposed-drawings",
        section_name: "Upload drawings",
      },
      question:
        "Would you like to upload any additional drawings, documents or images?",
    },
    {
      responses: [
        {
          value: "Lawful Development Certificate",
        },
      ],
      metadata: {
        portal_name: "fee-calculator",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "What type of planning application are you making?",
    },
    {
      responses: [
        {
          value: "Proposed changes",
        },
      ],
      metadata: {
        portal_name: "fee-calculator",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "What type of changes are you applying for?",
    },
    {
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "LDC - Proposed",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "Is the property a home?",
    },
    {
      responses: [
        {
          value: "Alteration",
        },
      ],
      metadata: {
        portal_name: "LDC - Proposed",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "What types of changes does the application relate to?",
    },
    {
      responses: [
        {
          value: "1",
        },
      ],
      metadata: {
        portal_name: "LDC-P - Householder",
        section_name: "About your application",
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Schedule 1, Part 2",
          },
        ],
      },
      question: "How many homes does this application relate to?",
    },
    {
      responses: [
        {
          value: "Other alterations not on this list",
        },
      ],
      metadata: {
        portal_name: "LDC - Proposed",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "What alterations are being made to the building?",
    },
    {
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "Is the property a home?",
    },
    {
      responses: [
        {
          value: "Alteration",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "What works does the project involve?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        section_name: "About your application",
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14UK Statutory Instruments 2012 No. 2920 Regulation 4, Equalities Act 2010, Section 6 Children Act 1989, Part 3",
          },
        ],
      },
      question:
        "Is the sole purpose of the project to support the needs of a disabled resident?",
    },
    {
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        section_name: "About your application",
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 9",
          },
        ],
      },
      question: "Is this application a resubmission?",
    },
    {
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        section_name: "About your application",
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 8",
          },
        ],
      },
      question:
        "Is this the first time you have resubmitted an application for this site?",
    },
    {
      responses: [
        {
          value: "Lawful Development Certificate",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "What type of application is this?",
    },
    {
      responses: [
        {
          value: "test",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        section_name: "About your application",
      },
      question: "What was the original application's reference number?",
    },
    {
      responses: [
        {
          value: "I understand",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        section_name: "About your application",
        policy_refs: [
          {
            text: "The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14",
          },
        ],
      },
      question:
        "To qualify for a fee exemption, the proposed works must be of a similar description to the original application",
    },
    {
      responses: [
        {
          value: "It was not determined in time",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        section_name: "About your application",
      },
      question: "What was the result of the original application?",
    },
    {
      responses: [
        {
          value: "Within the last 12 months",
        },
      ],
      metadata: {
        portal_name: "Fee Exemptions",
        section_name: "About your application",
        policy_refs: [
          {
            text: "UK Statutory Instruments 2012 No. 2920 Regulation 8",
          },
        ],
      },
      question: "When did the original application time out?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "Fee exemptions and adjustments",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "Does the application qualify for a disability exemption?",
    },
    {
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "Fee exemptions and adjustments",
        auto_answered: true,
        section_name: "About your application",
      },
      question: "Does the application qualify for a resubmission exemption?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "pre-app-advice-check",
        section_name: "About your application",
      },
      question:
        "Did you get any pre-application advice before making this application?",
    },
    {
      responses: [
        {
          value: "None of the above apply to me",
        },
      ],
      metadata: {
        portal_name: "declarations",
        section_name: "Review",
      },
      question: "Connections with Buckinghamshire Council",
    },
    {
      responses: [
        {
          value:
            "The information contained in this application is truthful, accurate and complete, to the best of my knowledge",
        },
      ],
      metadata: {
        portal_name: "declarations",
        section_name: "Review",
      },
      question: "I confirm that:",
    },
    {
      responses: [
        {
          value: "South Buckinghamshire",
        },
      ],
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
        section_name: "Review",
      },
      question:
        "What local planning authority is this application being sent to?",
    },
    {
      responses: [
        {
          value: "Lawful Development Certificate",
        },
      ],
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
        section_name: "Review",
      },
      question: "What type of application is it?",
    },
    {
      responses: [
        {
          value: "Proposed",
        },
      ],
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
        section_name: "Review",
      },
      question: "What type of works are you applying about?",
    },
    {
      responses: [
        {
          value: "Owner",
        },
      ],
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
        section_name: "Review",
      },
      question: "What is the applicant's interest in the land?",
    },
    {
      responses: [
        {
          value: "Applicant",
        },
      ],
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
        section_name: "Review",
      },
      question: "What is the user's role?",
    },
    {
      responses: [
        {
          value: "None",
        },
      ],
      metadata: {
        portal_name: "uniform-translator",
        auto_answered: true,
        section_name: "Review",
      },
      question: "What is the applicant's declared connections?",
    },
    {
      responses: [
        {
          value: "No",
        },
      ],
      metadata: {
        portal_name: "_root",
        auto_answered: true,
        section_name: "Review",
      },
      question: "Does the application qualify for a disability exemption?",
    },
    {
      responses: [
        {
          value: "Yes",
        },
      ],
      metadata: {
        portal_name: "_root",
        auto_answered: true,
        section_name: "Review",
      },
      question: "Does the application qualify for a resubmission exemption?",
    },
  ],
  files: [
    {
      filename:
        "http://localhost:7002/file/private/pizza-user-uploads/26fhsw68/Screenshot%202023-03-13%20at%2016.33.24.png",
      tags: ["Existing", "Plan"],
    },
    {
      filename:
        "http://localhost:7002/file/private/pizza-user-uploads/usy0uel6/Screenshot%202023-03-13%20at%2016.33.24.png",
      tags: ["Proposed", "Plan"],
    },
    {
      filename:
        "http://localhost:7002/file/private/pizza-user-uploads/b3ttfvme/Screenshot%202023-03-13%20at%2016.33.24.png",
      tags: ["Existing", "Elevation"],
    },
    {
      filename:
        "http://localhost:7002/file/private/pizza-user-uploads/bpv1cjqf/Screenshot%202023-03-13%20at%2016.33.24.png",
      tags: ["Proposed", "Elevation"],
    },
  ],
  geojson: {
    geometry: {
      coordinates: [
        [
          [-0.6337644159793875, 51.60562104546682],
          [-0.6334143877029441, 51.605623544229644],
          [-0.6338289290590076, 51.60546161233182],
          [-0.6337644159793875, 51.60562104546682],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: null,
  },
  session_id: "6d2a14fa-b683-4a25-827f-a3bf97148090",
};
