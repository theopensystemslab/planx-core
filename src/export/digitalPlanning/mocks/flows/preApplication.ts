import { FlowGraph } from "../../../../types/index.js";

// Copied from Doncaster on 24 Jan 2025
export const mockPreApplicationFlow: FlowGraph = {
  _root: {
    edges: [
      "UuiC29B7fi",
      "ttjXS9B7fi",
      "mHuTl9B7fi",
      "3bMKn9B7fi",
      "xrZRM9B7fi",
      "SRANr9B7fi",
      "2hlQL9B7fi",
      "izXCq9B7fi",
      "QMRUv9B7fi",
      "q64TM9B7fi",
      "yRQ759B7fi",
      "DB1Ge9B7fi",
      "Rvqlc9B7fi",
      "3HjU69B7fi",
      "QC32h9B7fi",
      "TKeYx9B7fi",
      "44vVo9B7fi",
      "kt1VH9B7fi",
      "StAUm9B7fi",
      "2Hyo69B7fi",
      "raN0h9B7fi",
      "TrEO99B7fi",
      "PLFhQ9B7fi",
      "cstHt9B7fi",
      "H4mbH9B7fi",
      "ullcc9B7fi",
      "DsZyh9B7fi",
      "1JjVA9B7fi",
      "YkDO99B7fi",
      "EIlRr9B7fi",
      "95zD19B7fi",
      "jEiF79B7fi",
      "4aGc69B7fi",
      "bLfR59B7fi",
      "4oWp69B7fi",
      "uvknt9B7fi",
      "uU0Ii9B7fi",
      "km2Tf9B7fi",
      "vh9eg9B7fi",
      "SDD4o9B7fi",
      "Vz7R49B7fi",
      "gaROsdK6P0",
    ],
  },
  "02aNXeNi17": {
    data: {
      val: "land.amenity.surface.pavement",
      text: "Pavement",
    },
    type: 200,
  },
  "03lsXvHfwM": {
    data: {
      fn: "applicant.ownership.certificate",
      val: "c",
    },
    type: 380,
  },
  "06bA9iXPTC": {
    data: {
      val: "applicant",
      text: "Me, the applicant",
    },
    type: 200,
  },
  "09PJqs6M03": {
    data: {
      fn: "applicant.ownership.certificate",
      val: "d",
    },
    type: 380,
  },
  "0C1tCT525x": {
    data: {
      fn: "siteArea5haOrMore",
      tags: [],
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["eZl84Ge5kI", "cNyUKR4zwH"],
  },
  "0DU3k9B7fi": {
    data: {
      fn: "heritageStatement.rule",
      val: "recommended",
    },
    type: 380,
  },
  "0JBRPHigw7": {
    data: {
      val: "1025",
      text: "10 to 25",
    },
    type: 200,
    edges: ["Whs6yJVJnt"],
  },
  "0T5Mr9B7fi": {
    data: {
      fn: "service.type",
      val: "nonMajor",
    },
    type: 380,
  },
  "0UIhsZcOrf": {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess the application. If we do, who should we contact to arrange the visit?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["l2KWZzWuYo", "2Fypf8lNFx", "xNvvMhOH2e"],
  },
  "0UxHs4GMbr": {
    data: {
      fn: "service.type",
      val: "nonMajor",
      operation: "replace",
    },
    type: 380,
  },
  "0VLezNYroC": {
    data: {
      fn: "proposal.visibility.public",
      info: "<p>For certain projects, we may need to visit your site to assess your application. During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "Can a planning officer see the works from public land?",
      howMeasured:
        "<p>Public land refers to areas that are open and accessible to everyone, such as roads, sidewalks, paths for pedestrians, horse riders (bridleways), or any other land that is available for public use.</p>",
    },
    type: 100,
    edges: ["7erj1hXvse", "b8b4cVyvSC"],
  },
  "0peWRwhuVs": {
    data: {
      fn: "service.type",
      val: "major.large",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  "0soNrGI0ZM": {
    data: {
      fn: "applicant.ownership.noticeGiven",
      text: "Has the applicant given requisite notice to all the agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["HFsxkFSxf9", "OT4NCB37Nj"],
  },
  "0wmnKyNNPC": {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  "10GaG9B7fi": {
    data: {
      fn: "application.fee.payable",
      formula: "585",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "13AhIhkjNx": {
    data: {
      fn: "property.type",
      text: "What type of religious property is it?",
    },
    type: 100,
    edges: [
      "Hx11x57Zy8",
      "PNoPwbkS2L",
      "HaOcUgqqqP",
      "F7lubrvq95",
      "YSoz99VKge",
      "oIqbT6ofX4",
      "pk3SFkfK0r",
      "XrXi3rlRSZ",
      "eR4Uk4wds5",
      "LZ5owtXc8R",
      "wkNZj4EJuR",
      "ok2w6dmuEw",
      "GF2Ubxttu3",
    ],
  },
  "1ElP19Mpqq": {
    data: {
      fn: "property.type",
      info: "<p>This information helps your planning officer understand the site and the impact of the project. The type of property might affect what information you need to submit with your application. </p>",
      text: "What type of industrial property is it?",
    },
    type: 100,
    edges: [
      "nAQtDxo6c4",
      "GJZ7xULXqK",
      "NWT3CsFSCz",
      "xHPFIDDV1V",
      "J4IXSAlPTw",
    ],
  },
  "1JCOOuzQc7": {
    data: {
      fn: "property.ownership.ownerOne.noticeDate",
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      notes:
        "AN 0 reworded for clarity. Previous content: Date on which notice was given to the first owner or agricultural tenant",
      title:
        "When was notice was given to the first owner or agricultural tenant",
    },
    type: 120,
  },
  "1JLbmOL910": {
    data: {
      val: "some",
      text: "Some of them",
    },
    type: 200,
    edges: ["kh6UdHcptk", "UWuOy7JXJL"],
  },
  "1JjVA9B7fi": {
    data: {
      title: "Pre application advice offers",
    },
    type: 360,
  },
  "1Rq2U2xLAF": {
    data: {
      val: "true",
      text: "I confirm that the information contained in this application is truthful, accurate and complete, to the best of my knowledge",
    },
    type: 200,
  },
  "1SVFT9B7fi": {
    data: {
      fn: "proposal.use.mixed.floorspace.description",
      type: "long",
      title:
        "Please provide a breakdown of how much floorspace is to be taken by each use",
    },
    type: 110,
  },
  "1UB7dMl720": {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["fXDEHMl720"],
  },
  "1Zk55jTsN1": {
    data: {
      fn: "applicant",
      title: "Your contact details",
    },
    type: 135,
  },
  "1hYAxGOMY3": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["b5cA4eYyQd", "QX3Pmod219", "aJHwtMYw1a"],
  },
  "1iVuZk8j6s": {
    data: {
      fn: "applicant.ownership.noticeGiven",
      text: "Has the applicant given requisite notice to all the known owners and agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["9g6dPEg4tg", "wPClDaAv9p"],
  },
  "1k5I99B7fi": {
    data: {
      text: "Are there any trees on the property?",
      description: "<p>This includes the areas affected by your works.</p>",
    },
    type: 100,
    edges: ["i08Q29B7fi", "FIlRH9B7fi"],
  },
  "1lwvzUiMOC": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  "1nHpe53Ytm": {
    data: {
      val: "commercial.community",
      text: "Institutions and community buildings",
    },
    type: 200,
    edges: ["XTgtfwSuLQ"],
  },
  "1nkmfl2qUW": {
    data: {
      info: "<p>It is a legal requirement to post &apos;requisite notice&apos; in every parish or ward within which there is situated any part of the land to which the application relates.</p><p>You can&apos;t submit the application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title: "You can't continue if you haven't posted 'requisite notice'",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Save and return to this application at a later time after you have posted the pre-defined notice in at least one place in every parish or ward within which there is situated any part of the land to which the application relates.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means a pre-defined notice, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  "1vdS03hp6A": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["hiS83orZsS", "bZWnD5sIto"],
  },
  "21DL6H3ge9": {
    data: {
      fn: "applicant.interest.form",
      val: "Owner",
    },
    type: 380,
  },
  "22R16OEFAb": {
    data: {
      val: "ldc",
      text: "LDC (new)",
    },
    type: 200,
    edges: ["DIo1vKyqBH"],
  },
  "22n5P9B7fi": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  "284dh1B64r": {
    data: {
      fn: "service.type",
      val: "major",
    },
    type: 380,
  },
  "2ApgIvwpxV": {
    data: {
      text: "At least 10000m2",
    },
    type: 200,
    edges: ["0wmnKyNNPC"],
  },
  "2DxY5Ml720": {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell your close neighbours and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit your property. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 8 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  "2F2nq9B7fi": {
    data: {
      fn: "proposal.alter.description",
      type: "long",
      title: "Please describe the proposed external alterations",
      description:
        "<p>Include all necessary information relating to nature and scale of the external alterations that are part of the change of use.</p>",
    },
    type: 110,
  },
  "2Fypf8lNFx": {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "NPMmcnzCKP"],
  },
  "2GzL79B7fi": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["1SVFT9B7fi"],
  },
  "2Hyo69B7fi": {
    data: {
      fn: "proposal.description",
      type: "long",
      title: "Describe the project",
      description:
        "<p>Include all necessary information relating to nature and scale of the development</p>",
    },
    type: 110,
  },
  "2LGkjFVJIh": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["YmvpVYIaac"],
  },
  "2MlqAY7JKX": {
    data: {
      val: "commercial.medical.dentist",
      text: "Dentist",
    },
    type: 200,
  },
  "2NhAyd1v33": {
    data: {
      fn: "property.ownership.ownerTwo.address",
      title: "Address of the second notified owner or agricultural tenant",
    },
    type: 130,
  },
  "2WNKU9L0ah": {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  "2Z4Ah7QPvE": {
    data: {
      val: "residential.flat",
      text: "Flat (or building containing flats)",
    },
    type: 200,
  },
  "2ZqCcOG7Bt": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  "2ZtIG2fOko": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  "2aI1SceN3J": {
    data: {
      fn: "applicant.ownership.noticePublished.date",
      max: "2200-12-31",
      min: "1900-01-01",
      title: "What date has the notice been published in the newspaper?",
    },
    type: 120,
  },
  "2bAMAWThgA": {
    data: {
      fn: "property.ownership.ownerTwo.name",
      title: "What is the full name of the occupier?",
    },
    type: 110,
  },
  "2dHAjD5BUs": {
    data: {
      text: "Agent acting on the applicant's behalf",
    },
    type: 200,
    edges: ["ZLGcW8Aci7", "dBW8ZZZTq7"],
  },
  "2drp16tLTm": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["jbeWtDb2ar", "SoX4FdXuij"],
  },
  "2eZ0N3YALL": {
    data: {
      val: "charity",
      text: "Charity",
    },
    type: 200,
  },
  "2fKWRTROlR": {
    data: {
      val: "some",
      text: "Some of them",
    },
    type: 200,
    edges: ["ZKoMQtSAuR", "3KytSjA9QE"],
  },
  "2hlQL9B7fi": {
    data: {
      fn: "property.localAuthorityDistrict",
      text: "Is the property in Doncaster?",
      description:
        "<p>This question refers to the local planning authority (LPA)</p>",
    },
    type: 100,
    edges: ["3AwAv9B7fi", "NVPJk9B7fi"],
  },
  "2jH17avhBa": {
    data: {
      val: "true",
      text: "The applicant certifies that the above is true",
    },
    type: 200,
  },
  "2ohEbgCnAW": {
    data: {
      val: "false",
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["qW1dfKGBvj"],
  },
  "2qpRxOK5dz": {
    data: {
      val: "true",
      text: "I certify that the above statement is true",
    },
    type: 200,
  },
  "35lxi9B7fi": {
    data: {
      val: "designated.conservationArea",
      text: "Conservation area",
    },
    type: 200,
  },
  "39H50jtypk": {
    data: {
      fn: "applicant.ownership.interestDescription",
      type: "extraLong",
      title: "What is the nature of the applicant's interest in the land?",
    },
    type: 110,
  },
  "3AwAv9B7fi": {
    data: {
      val: "Doncaster",
      text: "Yes",
    },
    type: 200,
  },
  "3FKghRSwX8": {
    data: {
      fn: "siteArea05haOrMore",
      text: "Is the site area 0.5 hectares or more?",
    },
    type: 100,
    edges: ["sC6xU05kTv", "2LGkjFVJIh"],
  },
  "3FiKmXz0Ct": {
    data: {
      val: "other.unsupported",
      text: "No, none of these",
    },
    type: 200,
    edges: ["hNvEwECRda"],
  },
  "3G4o2YSyLa": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  "3HjU69B7fi": {
    data: {
      fn: "property.constraints.planning",
      info: "<p>You need to complete a flood risk assessment with your planning application if your development is either in:</p><ul><li><p>flood zone 2 or 3</p></li><li><p>flood zone 1 and the site is more than 1 hectare in size</p></li></ul>",
      text: "Is the property in a flood zone?",
      description:
        '<p>Find out <a target="_blank" rel="noopener noreferrer nofollow" href="https://flood-map-for-planning.service.gov.uk/?_ga=2.208951954.1814816420.1687779095-1602504218.1661163784">whether your property is in a flood zone</a>.</p>',
    },
    type: 100,
    edges: ["NRUlG9B7fi", "9rWpZ9B7fi"],
  },
  "3KytSjA9QE": {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>You are required to give notice to the other owners of the land to submit this application. If you do not this application will be returned to you as invalid.</p>",
      text: "Has the applicant given requisite notice to all of the other owners of the land?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description: "<p>Answer to the best of your knowledge. </p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p>',
    },
    type: 100,
    edges: ["HbFvr9knzq", "WeyKKAPNxY"],
  },
  "3Ogga9B7fi": {
    data: {
      val: "nonMajor.siteMeeting",
      text: "Site-based meeting (£670)",
    },
    type: 200,
    edges: ["CDp3l9B7fi", "879rt9B7fi"],
  },
  "3P5FBO9BZI": {
    data: {
      fn: "service.type",
      val: "major",
      operation: "replace",
    },
    type: 380,
  },
  "3Pp2uvwRfG": {
    data: {
      val: "commercial.retail.fuel",
      text: "Fuel station",
    },
    type: 200,
  },
  "3TJYlfAUz6": {
    data: {
      val: "object.religious.building",
      text: "Place of worship",
    },
    type: 200,
    edges: ["13AhIhkjNx"],
  },
  "3bMKn9B7fi": {
    data: {
      fn: "proposal.projectType",
      val: "other",
    },
    type: 380,
  },
  "3fGe2GB4Im": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  "3gz6DPpUeH": {
    data: {
      val: "applicant",
      text: "Applicant",
    },
    type: 200,
    edges: ["ZLGcW8Aci7", "9vIimqCt7f"],
  },
  "3i9Uz8w7le": {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      text: "Have you notified the person with an interest in the land?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["amqDb1sITY", "tYckBGwBFp"],
  },
  "3kxMlzeCY1": {
    data: {
      fn: "applicant.ownership.ownerKnown",
      info: "<p>If the applicant doesn&apos;t know the names and addresses of all the agricultural tenants of the land, on the next page you will need to describe how they have tried to find out this information.</p>",
      tags: [],
      text: "Does the applicant know the names and addresses of all owners and agricultural tenants?",
      notes: "AN - changed answer from 'No, but some of them'",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land that forms part of the site area that is the subject of the application. If this includes land from more than one property you will need to contact all of the owners and tenant of each of the properties.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy,</p></li><li><p>the planned or actual use of the land, and</p></li><li><p>any other relevant circumstances.</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["uiZYaADDzd", "dKPQHBo5T0", "E7TTfmeBpm"],
  },
  "3lXEW5QapY": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["yLUEVZqUR1"],
  },
  "3lblfduLSS": {
    data: {
      fn: "property.type",
      val: "land",
      operation: "replace",
    },
    type: 380,
  },
  "3s74llQcam": {
    data: {
      val: "commercial.retail.drinking",
      text: "Public house, bar or nightclub",
    },
    type: 200,
  },
  "3uLzlsc0DS": {
    data: {
      val: "commercial.leisure.entertainment.theatre",
      text: "Theatre",
    },
    type: 200,
  },
  "3uUq79B7fi": {
    data: {
      fn: "photographs.existing.rule",
      val: "recommended",
    },
    type: 380,
  },
  "3y6n3BZdUm": {
    data: {
      fn: "applicant.siteContact",
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  "413Jh9B7fi": {
    data: {
      fn: "floorArea.atLeast1000",
      formula: "largerEq(proposal.area.internal.new, 1000)",
      samples: {},
      defaults: {
        floorArea: "1",
        "proposal.site.area": "1",
        "newDwellings.number": "1",
        "proposal.area.internal.new": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "42kcrMl720": {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 8 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  "446mLmRaaW": {
    data: {
      val: "1000",
      text: "Between 1000 and 9999m2",
    },
    type: 200,
    edges: ["0C1tCT525x", "5d1WzxU6F9"],
  },
  "44vVo9B7fi": {
    type: 300,
    edges: ["a6bf5fc1-1da0-46b5-8aed-a3e0243f2677"],
  },
  "48TLiCZkpL": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["PULKa56PNZ", "GIQIdrtnvU"],
  },
  "4DI8V9B7fi": {
    data: {
      fn: "floorArea.atLeast1000",
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["L0Ge09B7fi", "WvZxM9B7fi"],
  },
  "4Hs0Z9B7fi": {
    data: {
      fn: "proposal.demolish.dangerousStructure",
      text: "Is the building or structure you plan to demolish or remove dangerous?",
      description:
        '<p>Read more about dangerous structures <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.doncaster.gov.uk/services/planning/dangerous-structures">here</a>.</p>',
    },
    type: 100,
    edges: ["7lg9I9B7fi", "xeiXQ9B7fi"],
  },
  "4OKxc2xLAF": {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am related to, or partnered with, an elected member for City of Doncaster Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  "4SQCo2LF1w": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  "4SVT59B7fi": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  "4WqAA2xLAF": {
    data: {
      val: "relation.employee",
      text: "I am related to, or partnered with, an employee of City of Doncaster Council",
    },
    type: 200,
    edges: ["LhnWd2xLAF", "u74UC2xLAF"],
  },
  "4aGc69B7fi": {
    data: {
      title: "Review and confirm",
      description:
        "<ul><li><p>Review your answers</p></li><li><p>Confirm the provided information</p></li></ul>",
    },
    type: 360,
  },
  "4dFtOxkPcb": {
    data: {
      color: "#e8f1f5",
      title: "Thank you for your feedback",
      description: "<p>Use the button below to go back to the start.</p>",
      resetButton: true,
    },
    type: 8,
  },
  "4eItqVEjHd": {
    data: {
      fn: "property.ownership.ownerTwo.address",
      title: "What is the address of the person with an interest in the land?",
    },
    type: 130,
  },
  "4hSTM9B7fi": {
    data: {
      fn: "newDwellings.50OrMore",
      formula: "largerEq(proposal.newDwellings.number, 50)",
      samples: {},
      defaults: {
        "proposal.site.area": "1",
        "newDwellings.number": "1",
        "proposal.newDwellings.number": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "4hZ1sCXa6Z": {
    data: {
      text: "[To be replaced with list component]",
    },
    type: 100,
  },
  "4iPz8OW9Ds": {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "Address of the notified owner or agricultural tenant",
    },
    type: 130,
  },
  "4n7h4JzAJR": {
    data: {
      val: "commercial.retail.other",
      text: "Other",
    },
    type: 200,
    edges: ["UW5C3zLAVR"],
  },
  "4nnlv9B7fi": {
    data: {
      val: "major.siteMeeting",
      text: "Site-based meeting (£1015)",
    },
    type: 200,
    edges: ["CDp3l9B7fi", "csCEh9B7fi"],
  },
  "4oWp69B7fi": {
    data: {
      title: "Check your answers before sending your application",
    },
    type: 600,
  },
  "4wJRWfAUjA": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["T1FpdDFtID", "62sx6Cya6h"],
  },
  "4xoUWkORDG": {
    data: {
      val: "commercial.community.hall",
      text: "Community hall",
    },
    type: 200,
  },
  "4y1MESzMjz": {
    data: {
      fn: "property.ownership.ownerTwo.interest",
      tags: [],
      text: "What is the second person's interest in the land?",
    },
    type: 100,
    edges: ["bbCAG1PEn1", "jhR7MEjpQP", "tSE9Xv5Pea", "OR9HBwZy7d"],
  },
  "4y48qzfedx": {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  "55Lo64cfZI": {
    data: {
      fn: "applicant.ownership.certificate",
      val: "c",
    },
    type: 380,
  },
  "57y9t5HzPq": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["tpwgMBXkRs"],
  },
  "5BUH862WGs": {
    data: {
      val: "true",
      text: "I certify that the above is true",
    },
    type: 200,
  },
  "5DTRtWGPbK": {
    data: {
      fn: "service.type",
      val: "major",
      operation: "replace",
    },
    type: 380,
  },
  "5EEhLMKS7U": {
    data: {
      info: "<p>It is a legal requirement to provide &apos;requisite notice&apos; to all known owners or agricultural tenants of land that is subject to an application for planning permission. </p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title: "You can't continue if you haven't provided 'requisite notice'",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Save and return to this application at a later time after you have given the pre-defined form to all known owners or agricultural tenants of the land.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  "5L9Ql2xLAF": {
    data: {
      val: "ldc",
      text: "Lawful Development Certificate",
    },
    type: 200,
    edges: ["byEHX2xLAF"],
  },
  "5VBDiKP3Ii": {
    data: {
      fn: "applicant.ownership.certificate",
      val: "b",
    },
    type: 380,
  },
  "5VTsnMl720": {
    data: {
      val: "landDrainageConsent",
      text: "Land Drainage Consent",
    },
    type: 200,
    edges: ["7CeL2Ml720", "cxqGnMl720"],
  },
  "5ao362xLAF": {
    data: {
      text: "PP confirmations",
    },
    type: 300,
    edges: ["BpyaO2xLAF", "Wp3dl2xLAF", "P3LZK2xLAF", "o8ZbZ2xLAF"],
  },
  "5cyzG9B7fi": {
    data: {
      val: "major.written",
      text: "Written advice (£670)",
    },
    type: 200,
    edges: ["HThzM9B7fi"],
  },
  "5d1WzxU6F9": {
    data: {
      fn: "newDwellings.moreThan25",
      text: "How many new dwellings are you creating?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["KgjH2F0mMH", "8AR9T9xB6E", "u8sk8XvFhU"],
  },
  "5jMZUMl720": {
    data: {
      val: "hazardousSubstanceConsent",
      text: "Hazardous Substances Consent",
    },
    type: 200,
    edges: ["7CeL2Ml720", "TKABBMl720"],
  },
  "5lzcg8luJT": {
    data: {
      val: "commercial.utility",
      text: "Utility (water, waste, electricity)",
    },
    type: 200,
  },
  "5rEp2cHPsN": {
    data: {
      text: "Someone else",
    },
    type: 200,
    edges: ["opuz96cgSY", "FHdSt1JW1i"],
  },
  "5yGblc1zi8": {
    data: {
      val: "commercial.education.other",
      text: "Other educational establishment",
    },
    type: 200,
  },
  "5yOFqMl720": {
    data: {
      val: "pp.full.householder",
      text: "Householder",
    },
    type: 200,
    edges: ["xjkWwMl720", "F48O1Ml720"],
  },
  "62sx6Cya6h": {
    data: {
      fn: "applicant.ownership.noticePublished.date",
      max: "2200-12-31",
      min: "1900-01-01",
      title: "What date has the notice been published in the newspaper?",
    },
    type: 120,
  },
  "65HIjjtxBO": {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["DXppxbu3dx", "YkjAbX9WdA"],
  },
  "67TkPJgMT5": {
    data: {
      val: "occupier",
      text: "Occupier",
    },
    type: 200,
    edges: ["GqtqrmkcUl", "wv8kCpNcjF", "gu4Fo8qMPp", "aDKRC5ByP6"],
  },
  "68VY19B7fi": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["rhyuh9B7fi"],
  },
  "6AcRt9B7fi": {
    data: {
      val: "major.large.meeting",
      text: "Meeting (£1235)",
    },
    type: 200,
    edges: ["c0Enc9B7fi"],
  },
  "6C8kqBvpUe": {
    data: {
      val: "false",
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["I6qncASxAn"],
  },
  "6EjWoeEj7j": {
    data: {
      val: "true",
      text: "I certify that the above is true",
    },
    type: 200,
  },
  "6FL5k5zovo": {
    data: {
      text: "This flow always need to live between 'Find Property' and 'About the Property'.",
    },
    type: 100,
  },
  "6IQpHgCEso": {
    data: {
      val: "commercial.retail.shop.gardenCentre",
      text: "Garden centre",
    },
    type: 200,
  },
  "6JPimyq4li": {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      text: "Have you notified the person with an interest in the land?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["KOJzQvSYjm", "stgI7eGnnH"],
  },
  "6SIxU9B7fi": {
    data: {
      text: "Extensions or alterations to existing non-residential buildings",
    },
    type: 200,
    edges: ["aJPFK9B7fi", "z5aA39B7fi"],
  },
  "6TxMlBZqzW": {
    data: {
      val: "commercial.transport.road.terminal.bus",
      text: "Bus station",
    },
    type: 200,
  },
  "6XsO99B7fi": {
    data: {
      val: "flood.zoneThree.b",
      text: "3b",
    },
    type: 200,
  },
  "6ZTrmjer34": {
    data: {
      val: "commercial.community.prison.secureResidential",
      text: "Secure residential accommodation",
    },
    type: 200,
  },
  "6ZkXfAH2gZ": {
    data: {
      text: "What ownership information is required for other application types?",
    },
    type: 100,
  },
  "6s4OYxRuxF": {
    data: {
      text: "[Not currently in CSV]",
    },
    type: 100,
  },
  "77aMg0KaeL": {
    data: {
      val: "commercial.retail.market",
      text: "Market",
    },
    type: 200,
  },
  "7CeL2Ml720": {
    data: {
      text: "8 weeks",
    },
    type: 100,
  },
  "7EBBoe09FA": {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  "7KYkq9B7fi": {
    data: {
      fn: "proposal.utilities.foulSewageDisposal",
      text: "How is foul sewage to be disposed of?",
      allRequired: false,
    },
    type: 105,
    edges: [
      "QamhU9B7fi",
      "kl9Ao9B7fi",
      "Oyhr09B7fi",
      "ABXFf9B7fi",
      "9M4dg9B7fi",
    ],
  },
  "7MvdNl3XE8": {
    data: {
      val: "commercial.education",
      text: "Education",
    },
    type: 200,
    edges: ["MvRUSyqezC"],
  },
  "7PluZeB6NG": {
    data: {
      val: "500",
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["0C1tCT525x"],
  },
  "7QNDP95hq4": {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the parish council or community council",
    },
    type: 110,
  },
  "7U9ffdaOZt": {
    data: {
      val: "500",
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["0C1tCT525x"],
  },
  "7cynvLcVDd": {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
    edges: ["qS5WXN97G5"],
  },
  "7d2kQPQt2A": {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      title:
        "What steps were taken to find out the names and addresses of the owners and agricultural tenants?",
      description:
        "<p>Please describe the steps that have been taken to find out the names and addresses of the owners and agricultural tenants of the land.</p>",
    },
    type: 110,
  },
  "7dztP5MsZy": {
    data: {
      fn: "applicant.ownership.certificate",
      val: "d",
    },
    type: 380,
  },
  "7erj1hXvse": {
    data: {
      val: "true",
      text: "Yes, it's visible from the road or somewhere else",
    },
    type: 200,
  },
  "7gVLmJ50KB": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  "7lg9I9B7fi": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["e8BUk9B7fi"],
  },
  "7pN8IV96pF": {
    data: {
      val: "true",
      text: "I certify that the above statement is true",
    },
    type: 200,
  },
  "80AnzMl720": {
    data: {
      val: "ldc.existing",
      text: "Lawful Development Certificate for existing changes",
    },
    type: 200,
    edges: ["Wu4oQMl720", "cr1HyMl720"],
  },
  "83k3mdWH2O": {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      type: "extraLong",
      title:
        "What steps were taken to find out the names and addresses of the other owners and agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Please describe the steps that have been taken to find out the names and addresses of the other owners and agricultural tenants of the land whose names and addresses are not known to the applicant.</p>",
    },
    type: 110,
  },
  "85RnRvHvLY": {
    data: {
      val: "true",
      text: "The applicant certifies that the above statement is true",
    },
    type: 200,
  },
  "879rt9B7fi": {
    data: {
      fn: "application.fee.payable",
      formula: "670",
      samples: {},
      defaults: {},
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "87KjOi5c82": {
    data: {
      val: "residential.house",
      text: "House",
    },
    type: 200,
    edges: ["QgI87UIDEx"],
  },
  "8AR9T9xB6E": {
    data: {
      val: "1025",
      text: "10 to 25",
    },
    type: 200,
    edges: ["UtSjp4B9zv"],
  },
  "8D1PfejmRQ": {
    data: {
      fn: "applicant.address",
      title: "Applicant's contact address",
    },
    type: 130,
  },
  "8HPcKMl720": {
    data: {
      text: "3 weeks",
    },
    type: 100,
  },
  "8NcP8NqC5M": {
    data: {
      fn: "applicant.siteContact.name",
      val: "Contact applicant",
    },
    type: 380,
  },
  "8UHP6yZ3XY": {
    data: {
      val: "all",
      text: "Yes, all of them",
    },
    type: 200,
    edges: ["QMJrQSxIxp"],
  },
  "8UhzV77hWq": {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  "8Xj9I2LGYC": {
    data: {
      fn: "service.type",
      val: "major",
      operation: "replace",
    },
    type: 380,
  },
  "8ZB2YroEhH": {
    data: {
      text: "Planning permission",
    },
    type: 300,
    edges: ["8kaCyhvpH7"],
  },
  "8asiW3ZHP7": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  "8dOFkLl4zx": {
    data: {
      text: "Yes",
    },
    type: 200,
  },
  "8feMc9B7fi": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  "8iI5ZIhiPT": {
    data: {
      fn: "applicant.interest.form",
      val: "Lessee",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  "8jeld9B7fi": {
    data: {
      val: "major.significant.meeting",
      text: "Meeting (£1685)",
    },
    type: 200,
    edges: ["M9bKt9B7fi"],
  },
  "8kaCyhvpH7": {
    data: {
      fn: "user.role",
      info: "<p>We will use this information to make sure we ask you for the correct information.</p>",
      text: "Are you applying on behalf of someone else?",
      howMeasured:
        "<p>If the applicant is a company or organisation that you work for as an employee, answer &apos;No&apos;.</p>",
    },
    type: 100,
    edges: ["FuyhClwlwt", "PsRnXEO2x7"],
  },
  "8mtSKaatXM": {
    data: {
      fn: "applicant.siteContact",
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  "8oYCYrlcNM": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["QDkOlQfLAO", "ZZZ9N6Y0za"],
  },
  "8obYua4MtY": {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the person with an interest in the land.</p>",
    },
    type: 110,
  },
  "8tOQD9B7fi": {
    data: {
      val: "watercourse",
      text: "Existing watercourse",
    },
    type: 200,
  },
  "8uzwhjo8Yz": {
    data: {
      text: "Agent for a sole owner",
    },
    type: 300,
    edges: ["Az34dbP9sc"],
  },
  "8vJuNgYlhY": {
    data: {
      fn: "applicant.ownership.noticePublished.date",
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      notes:
        "AN changed from question 'What date has the notice been published in the newspaper?' for clarity",
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  "8vftM3EkUi": {
    data: {
      fn: "floorArea.10000OrMore",
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["XTgBISUKrs", "pfq6wDilsB", "7U9ffdaOZt", "MbEz4PJngx"],
  },
  "90R599B7fi": {
    data: {
      fn: "newDwellings.10OrMore",
      formula: "largerEq(proposal.newDwellings.number, 10)",
      samples: {},
      defaults: {
        "proposal.site.area": "1",
        "newDwellings.number": "1",
        "proposal.newDwellings.number": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "95LLw9B7fi": {
    data: {
      val: "designated.WHS",
      text: "World heritage site",
    },
    type: 200,
  },
  "95zD19B7fi": {
    data: {
      title: "Submit your documents",
    },
    type: 360,
  },
  "99rc39B7fi": {
    data: {
      val: "1025",
      text: "10 to 25",
    },
    type: 200,
    edges: ["4DI8V9B7fi"],
  },
  "99voMl2aVh": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["xzcBX6HseZ", "jzkY3Ib0Lk"],
  },
  "9A0JjDN1BY": {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  "9Gz7tHWemJ": {
    data: {
      fn: "applicant.ownership.ownerKnown",
      info: "<p>If the applicant doesn&apos;t know the names and addresses of all the agricultural tenants of the land, on the next page you will need to describe how they have tried to find out this information.</p>",
      tags: [],
      text: "Do you know the names and addresses of all the other owners of the land?",
      notes:
        "AN - changes answers to align with how we ask this question in other flows\nYes\nSome, but not all\nNo",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land that forms part of the site area that is the subject of the application. If this includes land from more than one property you will need to contact all of the owners and tenant of each of the properties.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy,</p></li><li><p>the planned or actual use of the land, and</p></li><li><p>any other relevant circumstances.</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["OmdEDJaP3k", "z7IhvBGqTh", "QutLGe5YjP"],
  },
  "9ICXg6CkCm": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["5EEhLMKS7U"],
  },
  "9M4dg9B7fi": {
    data: {
      val: "other",
      text: "Other",
    },
    type: 200,
    edges: ["f7HDc9B7fi"],
  },
  "9Qk4e9B7fi": {
    data: {
      text: "None of the above",
    },
    type: 200,
  },
  "9SpZxeqZhd": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["jVKAXgq0Lv"],
  },
  "9U2ADk9SOu": {
    data: {
      val: "proxy",
      text: "Me",
    },
    type: 200,
    edges: ["Ag05tgUM17"],
  },
  "9WtEVfy2Je": {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["8oYCYrlcNM", "ikS1q965mq"],
  },
  "9Zcea9B7fi": {
    data: {
      fn: "property.use",
      text: "Is the building vacant?",
    },
    type: 100,
    edges: ["FCUac9B7fi", "WVM7e9B7fi"],
  },
  "9aZ9nEForD": {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["REYE1CIlR8", "gqhUt5Yb7i"],
  },
  "9ciuc2xLAF": {
    data: {
      val: "true",
      text: "I confirm that the information contained in this application is truthful, accurate and complete, to the best of my knowledge",
    },
    type: 200,
  },
  "9e4JD9B7fi": {
    data: {
      val: "pondOrLake",
      text: "Pond/lake",
    },
    type: 200,
  },
  "9emKRkyVOo": {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["sY80TP8rIv", "RUECMCWXSn"],
  },
  "9g6dPEg4tg": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["03lsXvHfwM", "QX3Pmod219", "9gKM44wfCV", "xWOo5novtw"],
  },
  "9gKM44wfCV": {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["Ps7yMHdpFH", "9SpZxeqZhd"],
  },
  "9iMBkxrDfF": {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["AvaitsaM1A", "P4OhWOKMEY"],
  },
  "9ivslf9xtP": {
    data: {
      info: "<p>It is a legal requirement to publish a &apos;requisite notice&apos; of the application in a newspaper circulating in the area where the land is situated.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title:
        "You can't continue if you haven't published a notice in a local newspaper",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>If you can&apos;t notify all owners and agricultural tenants of the land, you need to publish a notice of the application in a local newspaper to the site. You can&apos;t submit an application without a declaration that you have done this.<br><br>Save and return to this application at a later time after you have given the pre-defined form to all known owners or agricultural tenants of the land.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  "9jOJP9B7fi": {
    data: {
      fn: "application.information.harmful.description",
      tags: [],
      type: "long",
      title: "Describe which information and what that harm would entail",
    },
    type: 110,
  },
  "9k4R3Ml720": {
    data: {
      val: "approval.reservedMatters",
      text: "Apply to agree reserved matters",
    },
    type: 200,
    edges: ["DRn7sMl720"],
  },
  "9oUn59B7fi": {
    data: {
      val: "listed",
      text: "Listed buildings",
    },
    type: 200,
    edges: ["0DU3k9B7fi"],
  },
  "9pXb5yKr9s": {
    data: {
      val: "true",
      text: "Yes, it's visible from the road or somewhere else",
    },
    type: 200,
  },
  "9pjmVfdzHW": {
    data: {
      fn: "applicant.resident",
      text: "Is the applicant's contact address the same as the property address?",
    },
    type: 100,
    edges: ["P4VxYlulnY", "oE0KLxVpYQ"],
  },
  "9rWpZ9B7fi": {
    data: {
      text: "No",
    },
    type: 200,
  },
  "9vIimqCt7f": {
    data: {
      fn: "applicant.ownership.interest",
      info: "<p>We need to know your interest in the land, the name and address of any person known to have an interest in the land, and whether anyone has been notified of the application.</p>",
      tags: [],
      text: "Which of these best describes your interest in the land?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2015/595/article/39" target="_self">The Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Please describe your relationship as it was 21 days before the date of this application.</p>",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land which forms part of the site area. If this includes land from more than one property you should list all owners here</p>",
    },
    type: 100,
    edges: ["xpTXs1AhMr", "n5UECLQUGq", "67TkPJgMT5", "FwtvZtxQCz"],
  },
  "9wcLU9B7fi": {
    data: {
      fn: "proposal.projectType",
      text: "Are any external alterations proposed as part of the change of use?",
    },
    type: 100,
    edges: ["VNEm29B7fi", "w8ANc9B7fi"],
  },
  "9zKtZUbSJR": {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      notes:
        "AN - deleted hint text - Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  "9zL2w9B7fi": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  A11fo9B7fi: {
    data: {
      val: "major.large",
      text: "Large major pre application",
    },
    type: 200,
    edges: ["QXlTK9B7fi"],
  },
  A1tiG8eLfg: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "a",
    },
    type: 380,
  },
  A3zEcauz2f: {
    data: {
      val: "pp.full.householder",
      text: "Yes",
    },
    type: 200,
  },
  ABXFf9B7fi: {
    data: {
      val: "pit",
      text: "Cess pit",
    },
    type: 200,
  },
  ABfyMaziTo: {
    data: {
      val: "commercial.transport.water.dock",
      text: "Harbour",
    },
    type: 200,
  },
  AEODp89l6P: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "8D1PfejmRQ"],
  },
  AGlW3Ml720: {
    data: {
      text: "first draft",
    },
    type: 100,
  },
  ALUieGHxpR: {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the occupier.</p>",
    },
    type: 110,
  },
  AOo93WVTqB: {
    data: {
      text: "Yes",
    },
    type: 200,
  },
  ARPYo9B7fi: {
    data: {
      text: "More than 50",
    },
    type: 200,
    edges: ["Wr5oyTdKjx"],
  },
  ATT6WjQ7OW: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>Your application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate C",
      notes:
        "land subject to this application\nnewspaper circulating locally to the site",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have given the requisite notice to everyone whose name and address is known to me who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application</p></li><li><p>I have taken all reasonable steps to find out the names and addresses of everyone else who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but have been unable to do so</p></li><li><p>I have published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["d34Rel56Yi"],
  },
  AVtVy9yEb4: {
    data: {
      fn: "property.ownership.ownerTwo.interestDescription",
      type: "long",
      title: "What is the nature of their interest in the land?",
    },
    type: 110,
  },
  AXUTI9B7fi: {
    data: {
      val: "changeOfUse.mineralExtraction",
      text: "Yes",
    },
    type: 200,
    edges: ["CXp0a9B7fi"],
  },
  Adop1mBxrE: {
    data: {
      fn: "property.type",
      val: "commercial.community",
      operation: "replace",
    },
    type: 380,
  },
  Ag05tgUM17: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  AhFG90gq5e: {
    data: {
      val: "land.open.moor",
      text: "Heath or moorland",
    },
    type: 200,
  },
  AuHE6Ml720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell your close neighbours and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit your property. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision by email within 42 days if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision by email within 42 days. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  AvaTZG6VwS: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["fK4Jrz77On"],
  },
  AvaitsaM1A: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  AxgDSgAxtB: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title: "What is the full name of the owner?",
    },
    type: 110,
  },
  Az34dbP9sc: {
    data: {
      fn: "property.ownership.agriculturalTenants",
      info: "<p>If the land has any agricultural tenants, you need to give them notice in the same way you would to other owners.</p>",
      text: "Does the land have any agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        "<p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy,</p></li><li><p>the planned or actual use of the land, and</p></li><li><p>any other relevant circumstances.</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
    },
    type: 100,
    edges: ["2drp16tLTm", "u6Fz8wasTd"],
  },
  B2AMdGE1oz: {
    data: {
      fn: "property.type",
      val: "commercial.industrial",
      operation: "replace",
    },
    type: 380,
  },
  BCVghMFVdf: {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "Y3468sxJ9S"],
  },
  BDulPzfy0y: {
    data: {
      fn: "application.type",
      tags: [],
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["pUpoxdQoL7", "SqWrYnDdRU", "OJvXiKX81f"],
  },
  BFmJtWFrOa: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["W4UcjyP0g4"],
  },
  BH2eL6rZAU: {
    data: {
      fn: "user.role",
      info: "<p>We will use this information to make sure we ask you for the correct information.</p>",
      text: "Are you applying on behalf of someone else?",
      howMeasured:
        "<p>If the applicant is a company or organisation that you work for as an employee, answer &apos;No&apos;.</p>",
    },
    type: 100,
    edges: ["D95sd8eRww", "jLEs1HNX6H"],
  },
  BSjdOrnGil: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["v3xqNwqJ5h"],
  },
  BT6624VXDz: {
    data: {
      val: "1025",
      text: "Between 10 and 25",
    },
    type: 200,
    edges: ["ufiTceRFpY"],
  },
  BZKQ59B7fi: {
    data: {
      color: "#EFEFEF",
      title:
        "It looks like this property is not in the City of Doncaster Council",
      resetButton: true,
    },
    type: 8,
  },
  BdXeZDGaRO: {
    data: {
      text: "Separate due to reg3/4 sorting",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  BjCuhNXV9a: {
    data: {
      tags: [],
      text: "Who does the site belong to?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["pPp0oBFX6F", "nFX7yRxB7S"],
  },
  BjmH8uTiYk: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate B",
      notes:
        "Original: I have given the requisite notice to everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land to which this application relates",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have given the requisite notice to everyone who, 21 days before the date that this application was sent, was an owner or agricultural tenant of any part of the land that is subject to this application.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["LpzoZfv8e8"],
  },
  Bmd2C0sO6H: {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the occupier.</p>",
    },
    type: 110,
  },
  BpgBkSjjo2: {
    data: {
      val: "pp",
      text: "Planning Permission",
    },
    type: 200,
    edges: ["Phzy95SFEI"],
  },
  BpsvLMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 16 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 16 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  BpyaO2xLAF: {
    data: {
      text: "Add council name to question options and set component",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  BxabOjdFkI: {
    data: {
      fn: "applicant.type",
      text: "Which of these best describes the applicant?",
    },
    type: 100,
    edges: [
      "jgRDYeEjRs",
      "7cynvLcVDd",
      "nFamiJpqwW",
      "oQG15KUGNi",
      "jispH1HMrD",
    ],
  },
  C1Lx39B7fi: {
    data: {
      fn: "service.type",
      val: "major.large",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  C8JdGplv5s: {
    data: {
      img: "https://api.editor.planx.uk/file/public/btyxwr2j/housetypes_midterrace.png",
      val: "residential.house.terrace",
      text: "Terrace",
    },
    type: 200,
  },
  C9bvIUpIgA: {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  CB9ix4WNg5: {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "What is the address of the person with an interest in the land?",
    },
    type: 130,
  },
  CCUoHiXcZ3: {
    data: {
      val: "all",
      text: "Yes, all of them",
    },
    type: 200,
    edges: ["isdVE7X68d"],
  },
  CDp3l9B7fi: {
    data: {
      fn: "property.description.siteVisit",
      type: "long",
      title:
        "Is there anything we need to be aware of in relation to attending a site-based meeting?",
      description: "<p>For example concerns for health and safety matters.</p>",
    },
    type: 110,
  },
  CFzmsa3sQP: {
    data: {
      text: "Have all notices been left in position for not less than seven days in the period of 21 days immediately preceding the making of the application?",
    },
    type: 100,
    edges: ["8dOFkLl4zx", "xHnpsa0mPl"],
  },
  CINNX8Ik3s: {
    data: {
      val: "commercial.leisure.other",
      text: "Another leisure use",
    },
    type: 200,
    edges: ["tM7xu5U0Yr"],
  },
  CJQ4LvaSUj: {
    data: {
      fn: "newDwellings.1OrMore",
      formula: "largerEq(propsal.newDwellings.number,1)",
      defaults: {
        "propsal.newDwellings.number": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  CNJRKsLPHU: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["XBUjjp85TG"],
  },
  CQy0mqTHdH: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["W2MhjoUhoQ", "hTyWHmOPhD"],
  },
  CU1QKGvDwL: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  CXp0a9B7fi: {
    data: {
      fn: "proposal.mineralExtraction.description",
      type: "long",
      title:
        "Provide details of the mineral to be extracted and the amount per annum",
    },
    type: 110,
  },
  CZjviC44Qc: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>It is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["glPYMepqRj", "9ICXg6CkCm"],
  },
  CinvXjoJGj: {
    data: {
      fn: "applicant.siteContact",
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  CrSjVNOOsq: {
    data: {
      text: "We could sort for agr property type (but this risks the data being wrong e.g farmhouses are often resi)",
    },
    type: 100,
  },
  CukbYBECnz: {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess the application. If we do, who should we contact to arrange the visit?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["lHYvRT3I6G", "ykSg9a0Mcg", "FgGRnExGpQ"],
  },
  D1Cm3DVcLk: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  D1NIUv2G73: {
    data: {
      fn: "newDwellings.moreThan25",
      text: "How many new dwellings are you creating?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["lZvtH0zaws", "0JBRPHigw7", "eLw9RUHLSh"],
  },
  D7sakSYLmm: {
    data: {
      fn: "applicant.ownership.noticePublished.newspaperName",
      tags: [],
      type: "short",
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  D95sd8eRww: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: [
      "r2nOxy3raM",
      "xnKlZ5RBSA",
      "9pjmVfdzHW",
      "BxabOjdFkI",
      "0VLezNYroC",
    ],
  },
  D9qusbxsdw: {
    data: {
      val: "other",
      text: "None of these",
    },
    type: 200,
    edges: ["mOTgVsnFFy", "myMKlkJGYJ", "39H50jtypk", "aDKRC5ByP6"],
  },
  DApzb9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  DB1Ge9B7fi: {
    data: {
      fn: "siteArea05haOrMore",
      formula: "largerEq(proposal.site.area, 5000)",
      defaults: {
        "proposal.site.area": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  DF49PSW3OR: {
    data: {
      fn: "property.ownership.multipleOwners",
      type: "extraLong",
      title: "List all people with an interest in the land",
      description:
        "<p>Please give the names and addresses of anyone you know who has an interest in the land, and describe the nature of their interest.</p>",
    },
    type: 110,
  },
  DIo1vKyqBH: {
    data: {
      text: "Ownership - LDC",
    },
    type: 300,
    edges: ["HsIflSKZvO"],
  },
  DJSOxC4CIs: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "d",
    },
    type: 380,
  },
  DOUSyyoivs: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      text: "Has the applicant given requisite notice to all the known agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["rEBkiacgz8", "p0V5i2Xmrh"],
  },
  DRH3H9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  DRn7sMl720: {
    data: {
      text: "In the service main branch",
    },
    type: 100,
  },
  DVCMXFlV7x: {
    data: {
      fn: "service.type",
      val: "major",
      operation: "replace",
    },
    type: 380,
  },
  DVygTvglSe: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["bqTqKxyVXV"],
  },
  DXpeo9B7fi: {
    data: {
      text: "New buildings & structures",
    },
    type: 200,
    edges: [
      "apCOH9B7fi",
      "h8fEf9B7fi",
      "7KYkq9B7fi",
      "GNJIm9B7fi",
      "KqXIT9B7fi",
    ],
  },
  DXppxbu3dx: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["D7sakSYLmm", "qbw0sbnonq"],
  },
  DgoeSGmo91: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "c",
    },
    type: 380,
  },
  DiTpB9B7fi: {
    data: {
      text: "Outline Scope Check",
    },
    type: 300,
    edges: ["bjT5p9B7fi"],
  },
  DmdeHOewPk: {
    data: {
      val: "agent",
      text: "Me, the agent",
    },
    type: 200,
    edges: ["hhW61nDmAS"],
  },
  DnccCNopHN: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  Ds1GIBvci1: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["xWnRrEIkm2", "QX3Pmod219", "gx3GMwbZrZ"],
  },
  DsZyh9B7fi: {
    data: {
      fn: "floorPlan.proposed.rule",
      val: "recommended",
    },
    type: 380,
  },
  Dszw9yiV0C: {
    data: {
      text: "Between 1 and 9",
    },
    type: 200,
    edges: ["0UxHs4GMbr"],
  },
  DvxdLfWY7y: {
    data: {
      fn: "property.type",
      val: "commercial.medical",
      operation: "replace",
    },
    type: 380,
  },
  DxcIe2g6ey: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  Dyi75x20ao: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["ttEt3KA3Wl"],
  },
  E0I7R2xLAF: {
    data: {
      val: "true",
      text: "I hereby apply for planning permission/consent as described in this form and the accompanying plans/drawings and additional information",
    },
    type: 200,
  },
  E63e1zXlP8: {
    data: {
      fn: "applicant.resident",
      text: "Is your contact address the same as the property address?",
    },
    type: 100,
    edges: ["Ldu681Wb3o", "yupLEsUTn2"],
  },
  E7TTfmeBpm: {
    data: {
      val: "none",
      text: "No, none of them",
    },
    type: 200,
    edges: ["jX4FepJiCx", "OOw1dkR02c", "9emKRkyVOo", "X05jwzVKFb"],
  },
  E7hLe9B7fi: {
    data: {
      text: "No",
    },
    type: 200,
  },
  EIlRr9B7fi: {
    data: {
      fn: "application.fee.payable.vat",
      title: "CalculateVAT",
      formula: "application.fee.payable / 1.2 * 0.2",
      samples: {},
      defaults: {
        "application.fee.payable": "0",
      },
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  EImX59B7fi: {
    data: {
      fn: "proposal.renewables.grid",
      type: "long",
      title:
        "Please describe the availability of a grid connection and location of the project",
      description:
        "<p>Please provide references to the National Grid database.</p>",
    },
    type: 110,
  },
  EJSM3VYGwu: {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the owner.</p>",
    },
    type: 110,
  },
  EMiAmjuQPa: {
    data: {
      fn: "property.ownership.agriculturalTenants",
      info: "<p>If the land has any agricultural tenants, you need to give them notice in the same way you would to other owners.</p>",
      tags: [],
      text: "Does the land have any agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        "<p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy</p></li><li><p>the planned or actual use of the land</p></li><li><p>any other relevant circumstances</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["DVygTvglSe", "X5KquCnQdj"],
  },
  ENnRGiHlEF: {
    data: {
      text: "Unknown",
    },
    type: 200,
    edges: ["DiTpB9B7fi"],
  },
  EPhCZssUNU: {
    data: {
      fn: "land.use.current.description",
      tags: [],
      type: "long",
      title: "What is the current use of the land, if known?",
    },
    type: 110,
  },
  Eatja9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  EeheWvihaq: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title: "Full name of the notified owner or agricultural tenant",
    },
    type: 110,
  },
  EmVpl9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  EyTRbAWIl5: {
    data: {
      fn: "applicant.interest.form",
      val: "Owner",
    },
    type: 380,
  },
  F10jdwjqbj: {
    data: {
      val: "commercial.transport",
      text: "Transport",
    },
    type: 200,
    edges: ["ua6mDtxpWH"],
  },
  F1Ebk4qB8m: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["ISpcePDurm"],
  },
  F1Sv79B7fi: {
    data: {
      val: "1000",
      text: "Between 1000 and 9999m2",
    },
    type: 200,
    edges: ["0C1tCT525x", "WEwkS9B7fi"],
  },
  F3yXZIdAAM: {
    data: {
      val: "500",
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["0C1tCT525x"],
  },
  F48O1Ml720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell your close neighbours and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit your property. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 8 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  F5BAJ9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  F7lubrvq95: {
    data: {
      val: "object.religious.building.temple",
      text: "Temple",
    },
    type: 200,
  },
  FBEdV9B7fi: {
    data: {
      val: "flood.zoneThree",
      text: "Zone 3",
    },
    type: 200,
    edges: ["KVuXe9B7fi"],
  },
  FCUac9B7fi: {
    data: {
      val: "vacant",
      text: "Yes",
    },
    type: 200,
  },
  FGsdduaUut: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["ALUieGHxpR"],
  },
  FHdSt1JW1i: {
    data: {
      fn: "proposal.ownership",
      val: "Reg.4LPA",
      operation: "replace",
    },
    type: 380,
  },
  FIlRH9B7fi: {
    data: {
      text: "No",
    },
    type: 200,
  },
  FJnLFg4GBi: {
    data: {
      val: "commercial.transport.rail.terminal",
      text: "Train station",
    },
    type: 200,
  },
  FMTSaAgSJU: {
    data: {
      fn: "applicant.agent",
      title: "Your contact details",
      description:
        "<p>Enter your contact details, not the applicant&apos;s. </p><p>Some of this information may be included on public planning records.</p>",
    },
    type: 135,
  },
  FOtOx9B7fi: {
    data: {
      fn: "service.type",
      text: "Planning Pre-Application Advice Services",
      description:
        "<p>The City of Doncaster Council offer a 1 hour free scoping meeting for significant major pre applications.<strong> </strong>This is in the form of a verbal discussion, held on MS Teams, on the principle of a proposal with a planning officer. In addition, the Council offer the following services:<br></p><h2>Written advice</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p></p><p><strong>The fee for this is £1350.</strong></p><p><br></p><h2><strong>One meeting including a write up of the discussion</strong></h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Meeting with case officer (<strong>1hr maximum - held via MS Teams</strong>)</p><p></p><p><strong>The fee for this is £1685.</strong></p><p><br></p><h2><strong>One site-based meeting including a write up of the discussio</strong>n</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Planning Officer site visit (<strong>2hr maximum</strong>)</p><p></p><p><strong>The fee for this is £1795.</strong></p><p><br></p>",
    },
    type: 100,
    edges: ["r7VkF9B7fi", "pcki29B7fi", "8jeld9B7fi", "HeIzp9B7fi"],
  },
  FQN1PuenBo: {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "What is the address of the person with an interest in the land?",
    },
    type: 130,
  },
  FS40F9B7fi: {
    data: {
      text: "Conversions and change of use of existing building",
    },
    type: 200,
    edges: [
      "aJPFK9B7fi",
      "PuJxS9B7fi",
      "cH5Jx9B7fi",
      "w9eTC9B7fi",
      "9wcLU9B7fi",
      "NUDCv9B7fi",
    ],
  },
  FSBemuDrKM: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
    },
    type: 200,
  },
  FYdJF9B7fi: {
    data: {
      type: "long",
      title: "What is the proposed use of the building, if known?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/1987/764/contents" rel="noopener noreferrer nofollow" target="_blank">https://www.legislation.gov.uk/uksi/1987/764/contents</a></p>',
      description:
        "<p>In your description you may reference use classes. For more information on use classes please select <em>More information</em>.</p>",
      howMeasured:
        "<p>The different use classes are:</p><p>Part B (Schedule 1)</p><p>Class B2 – General Industrial</p><p>Class B8 – Storage and distribution</p><p>Part C (Schedule 1)</p><p>Class C1 – Hotels</p><p>Class C2 – Residential institutions</p><p>Class C2A – Secure residential institutions</p><p>Class C3 – Dwellinghouses</p><p>Class C4 – Small Houses in multiple occupation</p><p>Part A (Schedule 2) Commercial, Business and Service</p><p>Class E – Commercial, Business and Service</p><p>Part B (Schedule 2) Local Community and Learning</p><p>Class F.1 Learning and non-residential institutions</p><p>Class F.2 Local community</p>",
    },
    type: 110,
  },
  FaWdhQxsno: {
    data: {
      fn: "applicant.ownership.interestDescription",
      type: "extraLong",
      title: "What is the nature of your interest in the land?",
    },
    type: 110,
  },
  Ff1vOjzAVD: {
    data: {
      val: "commercial.retail.showroom",
      text: "Showroom",
    },
    type: 200,
  },
  FgGRnExGpQ: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["O95q0Erl7x", "PGTfKw0keI"],
  },
  Fm7C92xLAF: {
    data: {
      fn: "application.type",
      text: "What type of application is this?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["ZrRju2xLAF", "5L9Ql2xLAF", "Hs9Z82xLAF"],
  },
  FuyhClwlwt: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: [
      "WJWP8eaQR3",
      "kP6WjnFuTL",
      "T5hD79qDIv",
      "UpEO0beCvB",
      "mqo1LRHlXn",
    ],
  },
  FwtvZtxQCz: {
    data: {
      val: "other",
      text: "None of these",
    },
    type: 200,
    edges: ["mOTgVsnFFy", "mWBLGfnPga", "FaWdhQxsno", "aDKRC5ByP6"],
  },
  FywdPLnjq0: {
    data: {
      val: "two",
      text: "2",
    },
    type: 200,
    edges: ["UlPqZujYP3", "4y1MESzMjz"],
  },
  FzdTs4nrhr: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["TYUqYhhMmb", "ki7t6yWS2I"],
  },
  GATomCNGX5: {
    data: {
      fn: "property.ownership.numberOfOwners",
      text: "How many other people have an interest in the land?",
      description:
        "<p>This includes owners, co-owners, tenants and occupiers.</p>",
    },
    type: 100,
    edges: ["fyGUfQ9yBx", "FywdPLnjq0", "Q5wtlsvsVJ"],
  },
  GB3a9Uxm42: {
    data: {
      val: "commercial.leisure.museum",
      text: "Museum",
    },
    type: 200,
  },
  GBtnA9B7fi: {
    data: {
      val: "soakaway",
      text: "Soakaway",
    },
    type: 200,
  },
  GCh1PmH3vR: {
    data: {
      val: "individual",
      text: "Private individual",
    },
    type: 200,
  },
  GF2Ubxttu3: {
    data: {
      val: "object.religious.building",
      text: "Another type of religious building",
    },
    type: 200,
  },
  GHMSwFczjZ: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the parish council or community council",
    },
    type: 110,
  },
  GHw8G2XmaC: {
    data: {
      val: "some",
      text: "Some of them",
    },
    type: 200,
    edges: ["83k3mdWH2O", "1iVuZk8j6s"],
  },
  GIQIdrtnvU: {
    data: {
      text: "NOT sole owner WITH agricultural tenants",
    },
    type: 300,
    edges: ["snkEVxWmUW"],
  },
  GIfqiZqsPC: {
    data: {
      val: "commercial.community.other",
      text: "Another institutional building",
    },
    type: 200,
    edges: ["Adop1mBxrE"],
  },
  GJZ7xULXqK: {
    data: {
      val: "commercial.industrial.extraction",
      text: "Extraction",
    },
    type: 200,
  },
  GNJIm9B7fi: {
    data: {
      fn: "proposal.access.description",
      type: "long",
      title:
        "Please describe any existing and proposed new or modified access to the building",
      description:
        "<p>This includes access such as:</p><ul><li><p>New or altered vehicle access proposed to or from the public highway</p></li><li><p>New or altered pedestrian access proposed to or from the public highway</p></li><li><p>New public roads to be provided within the site</p></li><li><p>New public rights of way to be provided within or adjacent to the site</p></li><li><p>Diversions, removal and/or creation of rights of way</p></li></ul>",
      howMeasured:
        "<p><strong>Road</strong> here means any public highway, including roads, pavements or bridleways.</p><p><strong>Right of way</strong> (sometimes known as an “easement over land”) is a right, set out either in the property title, local byelaws or previous planning decisions that allows others access to use part of a property to get access to somewhere else.</p>",
    },
    type: 110,
  },
  GO359Q8Cyp: {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
    edges: ["RfPkyvn983"],
  },
  GPy5gPhULZ: {
    data: {
      fn: "property.ownership.agriculturalTenants",
      info: "<p>If the land has any agricultural tenants, you need to give them notice in the same way you would to other owners.</p>",
      tags: [],
      text: "Does the land have any agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        "<p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy</p></li><li><p>the planned or actual use of the land</p></li><li><p>any other relevant circumstances</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["99voMl2aVh", "yZCebOEUnT"],
  },
  GW6539B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "0",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  GhtCWiIfnx: {
    data: {
      val: "military",
      text: "Military",
    },
    type: 200,
  },
  GnTGdifEPu: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["YlrM0T1WnT"],
  },
  GpHWLHyyfe: {
    data: {
      text: "Ownership - Winning and Working of Minerals or Oil and Natural Gas",
    },
    type: 300,
    edges: ["HMYRFZjTNT"],
  },
  GqtqrmkcUl: {
    data: {
      fn: "applicant.interest.form",
      val: "Occupier",
    },
    type: 380,
  },
  GspcOr57zL: {
    data: {
      val: "commercial.office.workspace",
      text: "Office",
    },
    type: 200,
  },
  H4mbH9B7fi: {
    data: {
      fn: "elevations.proposed.rule",
      val: "recommended",
    },
    type: 380,
  },
  H8jVd74Mv4: {
    data: {
      val: "applicant",
      text: "Me, the applicant",
    },
    type: 200,
  },
  H918QPmzvb: {
    data: {
      val: "owner.sole",
      text: "Yes",
    },
    type: 200,
    edges: ["wpPfWN3xWK"],
  },
  HAJga9B7fi: {
    data: {
      val: "flood.zoneTwo",
      text: "Zone 2",
    },
    type: 200,
  },
  HDEGWV4HPO: {
    data: {
      text: "Mixed",
    },
    type: 200,
    edges: ["yjvubkqzpi", "VaCYI9B7fi"],
  },
  HFsxkFSxf9: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["M8To1bVKxd", "QX3Pmod219", "SQj0Y6hawM"],
  },
  HGju3HsXOU: {
    data: {
      text: "Has a requisite notice been posted, sited and displayed in such a way as to be easily visible and legible by members of the public, in at least one place in every parish or ward within which there is situated any part of the land to which the application relates?",
    },
    type: 100,
    edges: ["sUm5C6VOJ7", "pmJqYol2OR"],
  },
  HM4ffx9N7u: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title: "What is the full name of the owner?",
    },
    type: 110,
  },
  HMYRFZjTNT: {
    data: {
      fn: "user.role",
      tags: [],
      text: "Which of these best describes you?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["Is6drAEQNZ", "VPVCQmEeIo"],
  },
  HPgngm6P4D: {
    data: {
      fn: "applicant.ownership.interest",
      info: "<p>Applications for planning permission require notice to be given to anyone who 21 days before the date of the application was an owner of any of the land to which the application relates.</p>",
      text: "Are you the sole owner of the land?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Please describe the situation as it was 21 days before the date of this application.</p>",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land which forms part of the site area to which the application relates. If this includes land from more than one property you should consider the owners of all the properties here.</p><h2><br>What about married or partnered couples?</h2><p>If both spouses are making the application, they are in sole ownership. If only one spouse is making the application, you should answer no, since the applicant will need to provide notice to their spouse as the other owner.</p>",
    },
    type: 100,
    edges: ["H918QPmzvb", "iALKw0iDnL"],
  },
  HThzM9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "670",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  HaOcUgqqqP: {
    data: {
      val: "object.religious.building.synagogue",
      text: "Synagogue",
    },
    type: 200,
  },
  HbFvr9knzq: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["KMjWqjy6JY", "QX3Pmod219", "ijT4QmezR1", "cXL5Pupz0h"],
  },
  HeIzp9B7fi: {
    data: {
      val: "major.significant.siteMeeting",
      text: "Site-based meeting (£1795)",
    },
    type: 200,
    edges: ["CDp3l9B7fi", "LrTYS9B7fi"],
  },
  HhTDXBPeR4: {
    data: {
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["UdA0OayOqQ"],
  },
  HkTcNMl720: {
    data: {
      val: "pp.full.minor",
      text: "Minor",
    },
    type: 200,
    edges: ["aST8HMl720", "i5rhVMl720"],
  },
  HlWoUL0Qrh: {
    data: {
      text: "I'm acting on the applicant's behalf",
    },
    type: 200,
    edges: ["pTQqtESlmK"],
  },
  HmVIF9B7fi: {
    data: {
      val: "major.large.written",
      text: "Written advice (£1010)",
    },
    type: 200,
    edges: ["pz31k9B7fi"],
  },
  HoX2f4nndB: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  Hq4xJ9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  Hs9Z82xLAF: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["g06hL2xLAF"],
  },
  HsIflSKZvO: {
    data: {
      fn: "user.role",
      tags: [],
      text: "Which of these best describes you?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["3gz6DPpUeH", "2dHAjD5BUs"],
  },
  HvP229B7fi: {
    data: {
      fn: "siteArea05haOrMore",
      text: "Is the site area 0.5 hectares or more?",
    },
    type: 100,
    edges: ["22n5P9B7fi", "Pic5a9B7fi"],
  },
  HwDq0PrbxL: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  Hx11x57Zy8: {
    data: {
      val: "object.religious.building.church",
      text: "Church",
    },
    type: 200,
  },
  I03hRPF3ck: {
    data: {
      fn: "property.type",
      text: "What type of property is it?",
      notes: "Added definition of HMO. \nHA",
      howMeasured:
        "<p><strong>Flats</strong> includes maisonettes (a flat with more than one storey that is within a shared building).</p><p><strong>A house in multiple occupation (HMO)</strong> has:</p><ul><li><p>at least 3 tenants living there, forming more than 1 household</p></li><li><p>a shared toilet, bathroom or kitchen facilities between tenants</p></li></ul>",
    },
    type: 100,
    edges: ["87KjOi5c82", "2Z4Ah7QPvE", "M9bF7tV5Mx", "hrVQ3UrdMQ"],
  },
  I4GFk23Lie: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate C",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has given the requisite notice to everyone whose name and address is known to the applicant who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application</p></li><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone else who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["Jbs3triiZ9"],
  },
  I6qncASxAn: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
    },
    type: 100,
    edges: ["2ZqCcOG7Bt", "dPFGgD0hCf"],
  },
  I7lDTF4k3E: {
    data: {
      type: "extraLong",
      title: "Provide details of the posted notice",
      description:
        "<p>Include the name of the parish or ward, the location of the notice, and the date posted.</p>",
    },
    type: 110,
  },
  IGRkDbAPrv: {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the tenant.</p>",
    },
    type: 110,
  },
  IHYMokATx6: {
    data: {
      type: "extraLong",
      title:
        "Please detail the steps you have taken to protect and replace the notices",
    },
    type: 110,
  },
  IIRUxbN5na: {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the owner.</p>",
    },
    type: 110,
  },
  ILIeQr9pli: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  ISpcePDurm: {
    data: {
      fn: "property.ownership.ownerTwo.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the owner.</p>",
    },
    type: 110,
  },
  IYYZxkL3zb: {
    data: {
      val: "owner",
      text: "Owner",
    },
    type: 200,
    edges: ["EyTRbAWIl5"],
  },
  IZTzISERe3: {
    data: {
      text: "Other",
    },
    type: 200,
    edges: ["6ZkXfAH2gZ"],
  },
  IgSkgLpbLT: {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "What is the address of the occupier?",
    },
    type: 130,
  },
  IhgUxbJ2GC: {
    data: {
      val: "none",
      text: "No, none of them",
    },
    type: 200,
    edges: ["DJSOxC4CIs", "r13mGZW1ZU", "x0JmWPsaEP", "bJ7tCEykk5"],
  },
  IjzPakxp2f: {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
  },
  Imayp9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["Od27M9B7fi"],
  },
  IotBU9B7fi: {
    data: {
      fn: "proposal.projectType",
      text: "Will you do any demolitions as part of your project?",
    },
    type: 100,
    edges: ["dvp9U9B7fi", "E7hLe9B7fi"],
  },
  Is6drAEQNZ: {
    data: {
      val: "applicant",
      text: "I'm the applicant",
    },
    type: 200,
    edges: ["JY0mWBvyjJ", "VUYlA0FvkR", "ODXbQaAlkL", "YSbIPPjAes"],
  },
  J4IXSAlPTw: {
    data: {
      val: "commercial.industrial.other",
      text: "Another industrial use",
    },
    type: 200,
    edges: ["B2AMdGE1oz"],
  },
  J4oi46Q9ZP: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  JMJ60UdgaD: {
    data: {
      fn: "applicant.siteContact",
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  JR13ec91W3: {
    data: {
      fn: "applicant.agent.address",
      title: "Your contact address",
    },
    type: 130,
  },
  JY0mWBvyjJ: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>It is a legal requirement to provide &apos;requisite notice&apos; to all known owners or agricultural tenants of land that is subject to the application.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      text: "Have you given requisite notice to all the owners and agricultural tenants of the land (other than you) whose names and addresses are known to you?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This refers to persons who, on the day 21 days before the date of this application, were owners or agricultural tenants of any part of the land to which the application relates on which surface works are required for the development.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["lBFoRgWFGe", "ZXbRtW8eEr"],
  },
  Jbs3triiZ9: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  Jcf20Eo6GW: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["f7MRGpT8wK", "n9ml4V0KIp"],
  },
  JewE77gtFE: {
    data: {
      val: "commercial.office.broadcasting",
      text: "Broadcasting studio",
    },
    type: 200,
  },
  JhvkdECf4G: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "b",
    },
    type: 380,
  },
  JkyukIyZ5r: {
    data: {
      text: "What about garden of X property? For 'building X in the land around a building'?",
    },
    type: 100,
  },
  JrYMhXdV9e: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
    },
    type: 200,
  },
  JwF5C2XHl7: {
    data: {
      fn: "applicant.address",
      title: "Applicant's contact address",
    },
    type: 130,
  },
  JwcIxMl720: {
    data: {
      text: "5 weeks",
    },
    type: 100,
  },
  JySwfrNHfy: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  Jzcu3mMc78: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["tP9hXISP5p"],
  },
  K3M9xBQJo9: {
    data: {
      fn: "newDwelling.10OrMore",
      tags: [],
      formula: "largerEq(proposal.newDwellings.number,10)",
      samples: {},
      defaults: {
        "proposal.newDwellings.number": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  K7p1nd7ntM: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      tags: [],
      notes:
        "AN - deleted hint text- Please describe the steps that have been taken to find out the names and addresses of the agricultural tenants of the land.",
      title:
        "What steps were taken to find out the names and addresses of the agricultural tenants?",
    },
    type: 110,
  },
  KDGHNAsMqQ: {
    data: {
      fn: "property.ownership.ownerOne.interest",
      tags: [],
      text: "What is the person's interest in the land?",
    },
    type: 100,
    edges: ["zwKja7T43j", "kZ9K4nuRTv", "T9a7EfVW2r", "yNyWw0Zm6L"],
  },
  KDzEOTRnlg: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["8Xj9I2LGYC"],
  },
  KMjWqjy6JY: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "c",
    },
    type: 380,
  },
  KOBzBAzzNG: {
    data: {
      val: "commercial.community.prison",
      text: "Prison",
    },
    type: 200,
  },
  KOJzQvSYjm: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  KR4NWrAxKE: {
    data: {
      info: "<p>It is a legal requirement to provide requisite notice to all known owners or agricultural tenants of land that is subject to an application for planning permission.</p><p>If you cannot contact all the owners or agricultural tenants, you must publish details of the application in a local newspaper instead.</p><p>You cannot submit an application without confirming you have done this.</p>",
      tags: [],
      color: "#ffdd00",
      title: "You cannot continue if you haven't given requisite notice",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>If you&apos;ve been unable to contact all the owners or agricultural tenants, you will need to publish details about the application in a local newspaper. This needs to be done 21 days before you send your application.</p><p>Your application will be saved for 28 days.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants a completed form, as set out in <a target="_blank" rel="noopener noreferrer nofollow" class="css-1rn59kg" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  KRQ35Mnkos: {
    data: {
      val: "none",
      text: "No, none of them",
    },
    type: 200,
    edges: ["09PJqs6M03", "K7p1nd7ntM", "65HIjjtxBO", "hSrM6u3e5N"],
  },
  KRqNWugjAy: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  KTD9JlDmXP: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate B",
      notes:
        "Original: I have given the requisite notice to everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land to which this application relates",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have given the requisite notice to everyone who, 21 days before the date that this application was sent, was an owner or agricultural tenant of any part of the land that is subject to this application.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["iY8ex7kyJg"],
  },
  KVuXe9B7fi: {
    data: {
      fn: "property.constraints.planning",
      text: "Flood Zone 3 details",
      description:
        '<p>The information you have provided suggests the property is in a flood zone 3. Please specify whether it is a flood zone 3a or 3b.</p><p><br><a target="_blank" rel="noopener noreferrer nofollow" class="govuk-link" href="https://flood-map-for-planning.service.gov.uk/?_ga=2.208951954.1814816420.1687779095-1602504218.1661163784">Find out what flood zone you’re in</a>.</p>',
    },
    type: 100,
    edges: ["Pf4YI9B7fi", "6XsO99B7fi", "myiyn9B7fi"],
  },
  KelsJUMvcF: {
    data: {
      val: "commercial.transport.air",
      text: "Airport or airfield",
    },
    type: 200,
  },
  KfN3RBq4zl: {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  KgjH2F0mMH: {
    data: {
      val: "true",
      text: "More than 25",
    },
    type: 200,
    edges: ["RHbcwXCpXI"],
  },
  KhqvCr57zL: {
    data: {
      fn: "property.type",
      text: "What type of commercial property is it?",
    },
    type: 100,
    edges: ["GspcOr57zL", "wenuhnHnzR", "JewE77gtFE", "kGyQVr57zL"],
  },
  Kq2IG1IlSE: {
    data: {
      fn: "applicant.ownership.ownerOne.interestDescription",
      type: "long",
      title: "What is the nature of their interest in the land?",
    },
    type: 110,
  },
  KqXIT9B7fi: {
    data: {
      fn: "proposal.trees.affected",
      text: "Will the project affect any trees?",
    },
    type: 100,
    edges: ["Imayp9B7fi", "sm6cB9B7fi"],
  },
  KviZA372qw: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>Your application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has given the requisite notice to everyone whose name and address is known to the applicant who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li><li><p>the applicant has posted the requisite notices, sited and displayed in such a way as to be easily visible and legible by members of the public, in at least one place in every parish or ward within which there is situated any part of the land to which the application relates</p></li><li><p>these notices were left in position for not less than seven days in the period of 21 days immediately preceding the making of the application</p></li><li><p>any notice left in a position for less than seven days in the period of more than 21 days immediately preceding the making of the application were removed, obscured, or defaced before seven days had passed during the period of 21 days mentioned above without the applicant&apos;s fault or intent.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["tULyhILOyh"],
  },
  KwmCzMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell your close neighbours and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit your property. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision by email within 42 days if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision by email within 42 days. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  KxJWhcP3zL: {
    data: {
      val: "none",
      text: "None",
    },
    type: 200,
  },
  L0Ge09B7fi: {
    data: {
      val: "true",
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["Sv3089B7fi"],
  },
  L5Tv8qztB8: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      tags: [],
      type: "extraLong",
      notes: "AN- reworked question and deleted hint text",
      title:
        "How have you tried to find out the names and addresses of the other owners?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
    },
    type: 110,
  },
  L5XqC9B7fi: {
    data: {
      fn: "floorArea.10000OrMore",
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["e76Q89B7fi", "F1Sv79B7fi", "7PluZeB6NG", "RGd5nTUPX9"],
  },
  L7USHQKRHt: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate D",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["h9wx74CgOv"],
  },
  LAzfL1mysC: {
    data: {
      val: "owner",
      text: "Owner",
    },
    type: 200,
    edges: ["AxgDSgAxtB", "auX5H4P8UG", "igbmzrDA0g"],
  },
  LFnxgD4clh: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>It is a legal requirement to provide &apos;requisite notice&apos; to all known owners or agricultural tenants of land that is subject to the application.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      text: "Has the applicant given requisite notice to all the owners and agricultural tenants of the land (other than the applicant) whose names and addresses are known to the applicant?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This refers to persons who, on the day 21 days before the date of this application, were owners or agricultural tenants of any part of the land to which the application relates on which surface works are required for the development.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["wrqIOaoad4", "3G4o2YSyLa"],
  },
  LJGc0Pji6b: {
    data: {
      text: "negatives fully written out",
    },
    type: 100,
  },
  LTmOL0IFyX: {
    data: {
      text: "NOT sole owner NO agricultural tenants",
    },
    type: 300,
    edges: ["9Gz7tHWemJ"],
  },
  LU5xin8PHs: {
    data: {
      fn: "property.type",
      text: "Which of these best describes the use of the property?",
    },
    type: 100,
    edges: [
      "TCYyJ2dnVQ",
      "xuFhs3Hqr9",
      "jImvxS3FNw",
      "7MvdNl3XE8",
      "xtrFvDHgOI",
      "1nHpe53Ytm",
      "WVQ0zdfUXz",
      "F10jdwjqbj",
      "qEPAzJoB8Y",
      "N1752okA56",
      "3TJYlfAUz6",
      "vXLzCpHPRs",
    ],
  },
  LZ5owtXc8R: {
    data: {
      val: "object.religious.building.minster",
      text: "Minster",
    },
    type: 200,
  },
  Ldu681Wb3o: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  LhnWd2xLAF: {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am related to, or partnered with, an employee of City of Doncaster Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  LpzoZfv8e8: {
    data: {
      val: "true",
      text: "I certify that the above is true",
    },
    type: 200,
  },
  Lqa4x2xLAF: {
    data: {
      val: "true",
      text: "I confirm that the information contained in this application is truthful, accurate and complete, to the best of my knowledge",
    },
    type: 200,
  },
  LrTYS9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "1795",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  M0oc0isZDH: {
    data: {
      tags: [],
      text: "Are you a local planning authority?",
      notes:
        "AN - change LPA to lowercase. And on other questions in this flow",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["TMbaVTXF3d", "fWu8pfkuXl"],
  },
  M4f85bFgll: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "d",
    },
    type: 380,
  },
  M7Y93oTya3: {
    data: {
      fn: "property.type",
      text: "What type of leisure property is it?",
    },
    type: 100,
    edges: [
      "vwLsi2H7oK",
      "VCa3N3ujER",
      "GB3a9Uxm42",
      "OWqVZ4U2Wu",
      "nNw3oBYWf9",
      "NtMJjAqat0",
      "3uLzlsc0DS",
      "r2Y8ydTsCn",
      "PcFmfgw6vr",
      "CINNX8Ik3s",
    ],
  },
  M8To1bVKxd: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "b",
    },
    type: 380,
  },
  M9bF7tV5Mx: {
    data: {
      val: "residential.HMO",
      text: "A house in multiple occupation (HMO)",
    },
    type: 200,
  },
  M9bKt9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "1685",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  MGQJI5GEmp: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["WU3D1n5gAx", "W6TvXZbCsQ"],
  },
  MKw8h2xLAF: {
    data: {
      fn: "application.declaration.connection.form",
      val: "No connections",
    },
    type: 380,
  },
  MPkpf9B7fi: {
    data: {
      text: "Works or extensions to a flat",
    },
    type: 200,
    edges: ["0T5Mr9B7fi", "OobP29B7fi", "e8K0K9B7fi", "3uUq79B7fi"],
  },
  MbEz4PJngx: {
    data: {
      val: "499",
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["0C1tCT525x"],
  },
  Mi7fB2AQMZ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["za2DPIqPPQ", "QX3Pmod219", "hUir78J0Em", "ATT6WjQ7OW"],
  },
  MkLgE9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "450",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  MpcjK22pHR: {
    data: {
      fn: "siteArea05And099ha",
      text: "Is the site area between 0.5 and 0.99 hectares?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["fhInxEBOwZ", "QUlNFY7pIx"],
  },
  MvRUSyqezC: {
    data: {
      fn: "property.type",
      text: "What type of educational building is it?",
      notes:
        "SEND: Education for children and young people aged 3-19 with complex physical disabilities and health needs",
    },
    type: 100,
    edges: [
      "orpJWHhk3f",
      "vUwbhBmVob",
      "q7bavn1mz3",
      "Vv1i0rOiKk",
      "twOdAbGD0c",
      "ZOtL3MUARu",
      "5yGblc1zi8",
    ],
  },
  N1752okA56: {
    data: {
      val: "land",
      text: "Land",
    },
    type: 200,
    edges: ["6s4OYxRuxF", "v9MhybjSFf"],
  },
  N4gIKMl720: {
    data: {
      val: "amendment.minorMaterial",
      text: "Minor material amendment",
    },
    type: 200,
    edges: ["Wtvp1Ml720"],
  },
  N6lbZHYM8C: {
    data: {
      val: "applicant",
      text: "I'm the applicant",
    },
    type: 200,
    edges: ["HPgngm6P4D"],
  },
  NAxKTWNRi3: {
    data: {
      fn: "property.ownership.agriculturalTenants",
      info: "<p>If the land has any agricultural tenants, you need to give them notice in the same way you would to other owners.</p>",
      tags: [],
      text: "Does the land have any agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        "<p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy</p></li><li><p>the planned or actual use of the land</p></li><li><p>any other relevant circumstances</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["48TLiCZkpL", "Pqj4BjpKyA"],
  },
  NCBVF3y1Nw: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["bqjq9kZQ0R", "tGo24tuYYD"],
  },
  NOOsoNqwEz: {
    data: {
      fn: "proposal.visibility.public",
      info: "<p>For certain projects, we may need to visit your site to assess your application. During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "Can a planning officer see the works from public land?",
      howMeasured:
        "<p>Public land refers to areas that are open and accessible to everyone, such as roads, sidewalks, paths for pedestrians, horse riders (bridleways), or any other land that is available for public use.</p>",
    },
    type: 100,
    edges: ["gLsFJbrERP", "Qb0tIxIXOB"],
  },
  NPMmcnzCKP: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      notes:
        "AN - deleted hint text. Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  NRUlG9B7fi: {
    data: {
      val: "flood",
      text: "Yes",
    },
    type: 200,
    edges: ["o63GS9B7fi"],
  },
  NRxZatvY3G: {
    data: {
      val: "commercial.agriculture.land",
      text: "Agricultural",
    },
    type: 200,
  },
  NUDCv9B7fi: {
    data: {
      fn: "proposal.parking.allocatedSpaces",
      title:
        "How many allocated parking spaces are provided for the development?",
    },
    type: 150,
  },
  NVPJk9B7fi: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["BZKQ59B7fi"],
  },
  NWT3CsFSCz: {
    data: {
      val: "commercial.storage",
      text: "Storage",
    },
    type: 200,
  },
  NXbjvdvd5Z: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["uaUmlSCJ2v", "QX3Pmod219", "9WtEVfy2Je", "I4GFk23Lie"],
  },
  NXeHn9B7fi: {
    data: {
      val: "true",
      text: "More than 25",
    },
    type: 200,
    edges: ["c1QOR9B7fi"],
  },
  NYNfRTFhgV: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>You are required to give notice to the other owners of the land (or agricultural tenants) to submit this application. If you do not this application will be returned to you as invalid.</p>",
      text: "Has the applicant given requisite notice to all the owners and agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["Ds1GIBvci1", "3lXEW5QapY"],
  },
  Neu9oBBsT8: {
    data: {
      val: "19",
      text: "Between 1 and 9",
    },
    type: 200,
    edges: ["g2SIjKMagJ"],
  },
  NjVR99B7fi: {
    data: {
      fn: "proposal.demolish.remediation.description",
      type: "long",
      title: "What are the remediation plans?",
      description:
        "<p>Please describe any planned remedial works, such as repairing damages or defects and restoring the property to its condition prior to the demolition.</p>",
    },
    type: 110,
  },
  NqUsSnLvNm: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title:
        "What is the full name of the person with an interest in the land?",
    },
    type: 110,
  },
  Nr84mPikUn: {
    data: {
      fn: "siteArea05And099ha",
      tags: [],
      text: "Is the site area between 0.5 and 0.99 hectares?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["VMTOC9MZB1", "zifhFqXNJz"],
  },
  NsMXE9B7fi: {
    data: {
      val: "2649",
      text: "Between 26 and 49",
    },
    type: 200,
    edges: ["L5XqC9B7fi", "PNyABfQRR1", "8vftM3EkUi"],
  },
  NtMJjAqat0: {
    data: {
      val: "commercial.leisure.entertainment.cinema",
      text: "Cinema",
    },
    type: 200,
  },
  NvnalMJ1d0: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["cHPK8Hu9In", "8vJuNgYlhY"],
  },
  O1blEvHY0c: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VPEyj9RnU8"],
  },
  O94tcglrlJ: {
    data: {
      fn: "property.ownership.numberOfOwners",
      text: "How many owners or agricultural tenants have been notified?",
    },
    type: 100,
    edges: ["SqsWqZNQtg", "R7shSCYifD", "cZ2HPbPHuh", "KxJWhcP3zL"],
  },
  O95q0Erl7x: {
    data: {
      fn: "applicant.siteContact",
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  ODXbQaAlkL: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>It is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["4wJRWfAUjA", "BFmJtWFrOa"],
  },
  OEh9W0lema: {
    data: {
      fn: "property.ownership.ownerOne.name",
      tags: [],
      title: "What is the full name of the lessee?",
    },
    type: 110,
  },
  OJvXiKX81f: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["XQsWKqj72N"],
  },
  OLKatMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 3 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 3 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  OOw1dkR02c: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      tags: [],
      notes:
        "AN - deleted hint text: Please describe the steps that have been taken to find out the names and addresses of the owners and agricultural tenants of the land.",
      title:
        "What steps were taken to find out the names and addresses of the owners and agricultural tenants?",
    },
    type: 110,
  },
  OPNqQ2xLAF: {
    data: {
      fn: "application.declaration.accurate",
      info: "<p>The amended section 194 of the 1990 Act provides that it is an offence to furnish false or misleading information or to withhold material information with intent to deceive. Section 193(7) enables the authority to revoke, at any time, a certificate they may have issued as a result of such false or misleading information.</p>",
      text: "Confirm the information in this application is correct",
      allRequired: true,
      neverAutoAnswer: false,
    },
    type: 105,
    edges: ["ggyBJ2xLAF", "Lqa4x2xLAF"],
  },
  OR9HBwZy7d: {
    data: {
      val: "other",
      text: "Something else",
    },
    type: 200,
    edges: ["AVtVy9yEb4", "t1cJQIk4tq", "4eItqVEjHd", "pHkPS4JTwi"],
  },
  OT4NCB37Nj: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["yLUEVZqUR1"],
  },
  OVbHj9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  OWGjxMl720: {
    data: {
      text: "16 weeks",
    },
    type: 100,
  },
  OWqVZ4U2Wu: {
    data: {
      val: "commercial.leisure.sport",
      text: "Indoor or outdoor sport",
    },
    type: 200,
  },
  Od27M9B7fi: {
    data: {
      fn: "treeSurvey.rule",
      val: "recommended",
      operation: "replace",
    },
    type: 380,
  },
  OeJ2SDwxcO: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["9ivslf9xtP"],
  },
  OmdEDJaP3k: {
    data: {
      val: "all",
      text: "Yes, all of them",
    },
    type: 200,
    edges: ["Q8Fz8943MP"],
  },
  OobP29B7fi: {
    data: {
      fn: "property.constraints.planning",
      text: "Does the site contain a tree protected by a Tree Preservation Order?",
    },
    type: 100,
    edges: ["U7gKY9B7fi", "zRdgt9B7fi"],
  },
  OrTAj69RcJ: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["cyIQk4VAli"],
  },
  OtX5uOvhUE: {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "What is the address of the occupier?",
    },
    type: 130,
  },
  Oyhr09B7fi: {
    data: {
      val: "plant",
      text: "Package treatment plant",
    },
    type: 200,
  },
  P3LZK2xLAF: {
    data: {
      fn: "application.declaration.accurate",
      info: "<p>Any decision issued on the basis of inaccurate or knowingly incomplete information may be legally invalid.</p>",
      tags: [],
      text: "Confirm the information in this application is correct",
      allRequired: true,
      neverAutoAnswer: false,
    },
    type: 105,
    edges: ["E0I7R2xLAF", "1Rq2U2xLAF"],
  },
  P4OhWOKMEY: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  P4VxYlulnY: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  P6jcHXBLnj: {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the person with an interest in the land.</p>",
    },
    type: 110,
  },
  P804o4tRh7: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  PGTfKw0keI: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  PJzquro4oN: {
    data: {
      fn: "property.ownership.ownerOne.address",
      tags: [],
      title: "What is the address of the lessee?",
    },
    type: 130,
  },
  PK4AGHgKYh: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "d",
    },
    type: 380,
  },
  PLFhQ9B7fi: {
    data: {
      fn: "sitePlan.proposed.rule",
      val: "recommended",
    },
    type: 380,
  },
  PNoPwbkS2L: {
    data: {
      val: "object.religious.building.mosque",
      text: "Mosque",
    },
    type: 200,
  },
  PNyABfQRR1: {
    data: {
      fn: "floorArea.10000OrMore",
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["t2EmfnFsLB", "446mLmRaaW", "F3yXZIdAAM", "lrbvok2gUz"],
  },
  PULKa56PNZ: {
    data: {
      text: "same as original that was here",
    },
    type: 100,
  },
  PcFmfgw6vr: {
    data: {
      val: "commercial.leisure.park.zoo",
      text: "Zoo or theme park",
    },
    type: 200,
  },
  Pf4YI9B7fi: {
    data: {
      val: "flood.zoneThree.a",
      text: "3a",
    },
    type: 200,
  },
  Phzy95SFEI: {
    data: {
      text: "Ownership - Planning Permission",
    },
    type: 300,
    edges: ["xYwhRN0XhT"],
  },
  Pic5a9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["x0fKL9B7fi"],
  },
  Pqj4BjpKyA: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["ovwCodcZSH", "LJGc0Pji6b", "LTmOL0IFyX"],
  },
  PqqVT2xLAF: {
    data: {
      val: "employee",
      text: "I am an employee of City of Doncaster Council",
    },
    type: 200,
    edges: ["qCIwd2xLAF", "uxRJJ2xLAF"],
  },
  Ps7yMHdpFH: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["i3gLZT94GI", "cfGBWxqo05"],
  },
  PsRnXEO2x7: {
    data: {
      val: "applicant",
      text: "No",
    },
    type: 200,
    edges: [
      "T2QtM64BpR",
      "lCfRyXcbqm",
      "p11Ci13HQ3",
      "E63e1zXlP8",
      "NOOsoNqwEz",
      "fLVlIcYbXD",
    ],
  },
  PuJxS9B7fi: {
    data: {
      fn: "property.use.description",
      type: "long",
      title: "What is the current use of the building?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/1987/764/contents">https://www.legislation.gov.uk/uksi/1987/764/contents</a></p>',
      description:
        "<p>In your description you may reference use classes. For more information on use classes please select <em>More information</em>.</p>",
      howMeasured:
        "<p>The different use classes are:</p><ul><li><p>Part B (Schedule 1)</p><ul><li><p>Class B2 – General Industrial</p></li><li><p>Class B8 – Storage and distribution</p></li></ul></li><li><p>Part C (Schedule 1)</p><ul><li><p>Class C1 – Hotels</p></li><li><p>Class C2 – Residential institutions</p></li><li><p>Class C2A – Secure residential institutions</p></li><li><p>Class C3 – Dwellinghouses</p></li><li><p>Class C4 – Small Houses in multiple occupation</p></li></ul></li><li><p>Part A (Schedule 2) Commercial, Business and Service</p><ul><li><p>Class E – Commercial, Business and Service</p></li></ul></li><li><p>Part B (Schedule 2) Local Community and Learning</p><ul><li><p>Class F.1 Learning and non-residential institutions</p></li><li><p>Class F.2 Local community</p></li></ul></li></ul>",
    },
    type: 110,
  },
  Q5P6t0AtbV: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["CU1QKGvDwL", "oDFphCABwe"],
  },
  Q5wtlsvsVJ: {
    data: {
      val: "threePlus",
      text: "3 or more",
    },
    type: 200,
    edges: ["DF49PSW3OR"],
  },
  Q6yv8zOaKy: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo:
        "<h2>You will be contacted</h2><ul><li><p>if there is anything missing from the information you have provided so far</p></li><li><p>if any additional information is required</p></li><li><p>to arrange a site visit, if required</p></li></ul>",
      nextSteps: [],
      contactInfo:
        "<p>You can contact us by email at tsi@doncaster.gov.uk or telephone 013 0273 4854 Mon-Fri 08:00-17:00.<br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>",
      description:
        "<p>A payment receipt has been emailed to you. You will also receive an email to confirm when your application has been received.</p>",
    },
    type: 725,
  },
  Q8Fz8943MP: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>You are required to give notice to the other owners of the land to submit this application. If you do not this application will be returned to you as invalid.</p>",
      text: "Have you given requisite notice to all of the other owners?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description: "<p>Answer to the best of your knowledge. </p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p>',
    },
    type: 100,
    edges: ["o75OW9ozay", "ShMUhzldfX"],
  },
  QC32h9B7fi: {
    data: {
      fn: "property.constraints.planning",
      text: "Does the property include any heritage assets?",
      allRequired: false,
    },
    type: 105,
    edges: [
      "35lxi9B7fi",
      "9oUn59B7fi",
      "95LLw9B7fi",
      "blVQo9B7fi",
      "cyYHs9B7fi",
    ],
  },
  QDkOlQfLAO: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  QEGHGMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 28 days if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 28 days. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  QJ0ts9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  QMJrQSxIxp: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>It is a legal requirement to provide requisite notice to all known owners or agricultural tenants of land that is subject to an application for planning permission.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      tags: ["toReview"],
      text: "Have you given requisite notice to all the agricultural tenants?",
      notes:
        "AN - Changed hint text from 'This is a pre-defined form that you need to fill out and give to the tenants. to 'Requisite notice is a form you must complete and give to the tenants' for clarity. \n\nCan we also include where users can find this form?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Requisite notice is a form you must complete and give to the tenants.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["yYiBqQ9RfH", "dzOXYFLIKb"],
  },
  QMRUv9B7fi: {
    data: {
      title: "About the property",
      description:
        "<p>This is the information we currently have about the property.</p><p>The blue line shows the <strong>outline</strong> of the property (known as the title boundary). If this looks incorrect, go back a step and <strong>check you have selected the correct address</strong>.</p><p>We use this outline to create the site boundary where the project will take place. If your project covers a different area, you can change or redraw the site boundary on the next page.</p>",
      showPropertyTypeOverride: true,
    },
    type: 12,
  },
  QOHYUup7ZS: {
    data: {
      fn: "property.ownership.ownerTwo.name",
      tags: [],
      title: "What is the full name of the lessee?",
    },
    type: 110,
  },
  QQYPyFijad: {
    data: {
      img: "https://api.editor.planx.uk/file/public/2jpkk6ei/housetypes_semiDetached.png",
      val: "residential.house.semiDetached",
      text: "Semi-detached",
    },
    type: 200,
  },
  QUlNFY7pIx: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VRil2FwMfz"],
  },
  QX3Pmod219: {
    data: {
      text: "PP – Certificate Contacts",
    },
    type: 300,
    edges: ["4hZ1sCXa6Z", "O94tcglrlJ"],
  },
  QXlTK9B7fi: {
    data: {
      fn: "service.type",
      text: "Planning Pre-Application Advice Services",
      description:
        "<p>The City of Doncaster Council offer the following services:</p><h2>Written advice</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p></p><p><strong>The fee for this is £1010.</strong></p><p><br></p><h2><strong>One meeting including a write up of the discussion</strong></h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Meeting with case officer (<strong>1hr maximum - Held via MS Teams</strong>)</p><p></p><p><strong>The fee for this is £1235.</strong></p><p><br></p><h2><strong>One site-based meeting including a write up of the discussio</strong>n</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Planning Officer site visit (<strong>2hr maximum</strong>)</p><p></p><p><strong>The fee for this is £1350.</strong></p><p><br></p>",
    },
    type: 100,
    edges: ["HmVIF9B7fi", "6AcRt9B7fi", "l5s529B7fi"],
  },
  QamhU9B7fi: {
    data: {
      val: "sewer",
      text: "Main sewer",
    },
    type: 200,
  },
  Qb0tIxIXOB: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  QccbqoOuPQ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["wyVAXQE1Rp"],
  },
  QdOhXGpHUT: {
    data: {
      val: "preApp",
      text: "Pre-application advice",
    },
    type: 200,
    edges: ["Q6yv8zOaKy"],
  },
  QgI87UIDEx: {
    data: {
      fn: "property.type",
      text: "What type of house is it?",
      howMeasured:
        "<p><strong>A detached house</strong> is not joined to another property.</p><p><strong>A semi-detached house </strong>is joined to 1 other property which, in turn, is not attached to any other properties. So together, the 2 properties form a pair.</p><p><strong>A terrace</strong> is a building that forms part of a row of 3 or more adjoining properties. This includes buildings at the end of the row (an <strong>end terrace</strong>).</p>",
    },
    type: 100,
    edges: ["aJzng1LAVi", "QQYPyFijad", "C8JdGplv5s", "jY5LKeMShO"],
  },
  Qm3SvSO9Ml: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
  },
  QutLGe5YjP: {
    data: {
      val: "none",
      text: "No, none of them",
    },
    type: 200,
    edges: ["PK4AGHgKYh", "lNjrHiRlcg", "dBGy4uYIlX", "SF1ibJMwnY"],
  },
  Qxo3IvCneq: {
    data: {
      fn: "property.ownership.ownerOne.name",
      tags: [],
      title: "What is the full name of the lessee?",
    },
    type: 110,
  },
  R7shSCYifD: {
    data: {
      val: "two",
      text: "2",
    },
    type: 200,
    edges: [
      "XDelvNOPN2",
      "UTBVDH03Y9",
      "1JCOOuzQc7",
      "XMot34n2nA",
      "2NhAyd1v33",
      "ZFYPH3TG3e",
    ],
  },
  RA22yIIDzp: {
    data: {
      fn: "applicant.agent.address",
      info: "<p>This address may be published on public planning records.</p>",
      title: "Your contact address",
    },
    type: 130,
  },
  REYE1CIlR8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["eibHWbPrW6"],
  },
  RGd5nTUPX9: {
    data: {
      val: "499",
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["0C1tCT525x"],
  },
  RHbcwXCpXI: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
    },
    type: 100,
    edges: ["mIdZBY3fLA", "DnccCNopHN"],
  },
  RP2nS5ezvR: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  RSBh2I4Vr3: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title: "What is the full name of the occupier?",
    },
    type: 110,
  },
  RUECMCWXSn: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  RfPkyvn983: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the company",
    },
    type: 110,
  },
  RnEKNzq4Am: {
    data: {
      fn: "applicant.researchOptIn",
      tags: [],
      text: "Help us improve this service",
      notes:
        "AN - tweaked content to make it warmer and hopefully more engaging.\n\nPrevious content: \nThis is a new service\n\nYou can help us improve the service by participating in user research and sharing your experience.\n\nAre you happy for us to contact you for paid research opportunities (£50) via the email you provided?\n\nYour choice will not affect your submission and you may continue regardless.\n\nYes\nNo",
      description:
        "<p>This is a new service and we&apos;d love to hear your feedback. </p><p>If you&apos;d like to help improve the experience for everyone, we&apos;re looking for people to take part in research. </p><p>We&apos;ll give you £50 to thank you for your time. </p><p>Taking part in research won&apos;t affect your application.</p><p>Can we contact you via email about research opportunities?</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["1lwvzUiMOC", "Vj8MV8oymb"],
  },
  RoB9NJQBIT: {
    data: {
      text: "Not sole owner but no agricultural tenants",
    },
    type: 100,
  },
  RsYb9MikxW: {
    data: {
      text: "Unknown",
    },
    type: 200,
    edges: ["DiTpB9B7fi"],
  },
  Rvqlc9B7fi: {
    data: {
      fn: "property.constraints.planning",
      title: "Planning constraints",
      disclaimer:
        '<p><strong>This page does not include information about historic planning conditions that may apply to this property</strong>. To view historic applications please view our <a target="_blank" rel="noopener noreferrer nofollow" href="https://planning.doncaster.gov.uk/online-applications/">public register</a> and carry out a search on the property address</p>',
      description:
        "<p>Planning constraints might limit how you can develop or use the property</p>",
    },
    type: 11,
  },
  S5nWpyWVpK: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  S7AofzS7uq: {
    data: {
      fn: "property.ownership.ownerOne.noticeDate",
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      notes:
        "AN - reworded for clarity. Previous content: Date on which notice was given to the owner or agricultural tenant",
      title: "When was notice was given to the owner or agricultural tenant?",
    },
    type: 120,
  },
  SDD4o9B7fi: {
    data: {
      fn: "application.fee.payable",
      title: "Pay for your application",
      hidePay: false,
      bannerTitle: "The fee for this pre-application advice application is",
      description:
        '<p>The planning fee covers the cost of processing your application. <a target="_self" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">Find out more about how planning fees are calculated</a> (opens in new tab).</p>',
      nomineeTitle: "Details of the person paying",
      govPayMetadata: [
        {
          key: "flow",
          value: "Pre application advice",
        },
        {
          key: "source",
          value: "PlanX",
        },
        {
          key: "paidViaInviteToPay",
          value: "@paidViaInviteToPay",
        },
        {
          key: "LedgerCode",
          value: "PLN020",
        },
        {
          key: "VATCode",
          value: "16",
        },
        {
          key: "VATValue",
          value: "@application.fee.payable.vat",
        },
      ],
      allowInviteToPay: true,
      yourDetailsLabel: "Your name or organisation name",
      yourDetailsTitle: "Your details",
      instructionsTitle: "How to pay",
      secondaryPageTitle: "Invite someone else to pay for this application",
      instructionsDescription:
        "<p>You can pay for your application by using GOV.UK Pay.</p>         <p>Your application will be sent after you have paid the fee.          Wait until you see an application sent message before closing your browser.</p>",
    },
    type: 400,
  },
  SF1ibJMwnY: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate D",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["SGa1pryyGp"],
  },
  SGa1pryyGp: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  SJRiZ1gkrY: {
    data: {
      fn: "applicant.sameAddress.form",
      val: "Yes",
    },
    type: 380,
  },
  SKHnXGOeXP: {
    data: {
      val: "commercial.animals",
      text: "Vet,  kennels, cattery or stables",
    },
    type: 200,
  },
  SMxrj9B7fi: {
    data: {
      text: "No",
    },
    type: 200,
  },
  SPRq6xeWoq: {
    data: {
      text: "[Review below structure, then copy for other application types as needed]",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  SQj0Y6hawM: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate B",
      notes:
        "Original: I have given the requisite notice to everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land to which this application relates",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has given the requisite notice to everyone who, 21 days before the date that this application was sent, was an owner or agricultural tenant of any part of the land that is subject to this application.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["2jH17avhBa"],
  },
  SRANr9B7fi: {
    data: {
      title: "Enter the postcode of the property",
      description: "<p>For example, DN1 3BU</p>",
      newAddressTitle:
        "Click or tap at where the property is on the map and name it below",
      allowNewAddresses: true,
      newAddressDescription:
        "<p>You will need to select a location and provide a name to continue.</p>",
    },
    type: 9,
  },
  SWPofZTDDZ: {
    data: {
      val: "none",
      text: "No, none of them",
    },
    type: 200,
    edges: ["M4f85bFgll", "7d2kQPQt2A", "i2xjsTkJqh", "L7USHQKRHt"],
  },
  SWnMP9B7fi: {
    data: {
      text: "Between 10 and 25",
    },
    type: 200,
    edges: ["fSafdV3teR"],
  },
  SXCfHPrkEA: {
    data: {
      val: "proxy",
      text: "No",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "JR13ec91W3", "p6pcH5H3r9"],
  },
  ShMUhzldfX: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["yLUEVZqUR1"],
  },
  SoX4FdXuij: {
    data: {
      fn: "applicant.ownership.ownerKnown",
      info: "<p>If the applicant doesn&apos;t know the names and addresses of all the agricultural tenants of the land, on the next page you will need to describe how they have tried to find out this information.</p>",
      tags: [],
      text: "Does the applicant know the names and addresses of all agricultural tenants?",
      notes: "AN changed 'No, but some of them'",
      howMeasured:
        "<p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["lgj8qAZScl", "e0As0j5aWC", "KRQ35Mnkos"],
  },
  Sq8TC9B7fi: {
    data: {
      text: "Demolitions and removals",
    },
    type: 200,
    edges: [
      "aJPFK9B7fi",
      "YHg0J9B7fi",
      "9Zcea9B7fi",
      "n1aj69B7fi",
      "TSyv79B7fi",
      "nAim29B7fi",
      "NjVR99B7fi",
      "4Hs0Z9B7fi",
    ],
  },
  SqWrYnDdRU: {
    data: {
      val: "trees",
      text: "Apply for works to trees",
    },
    type: 200,
    edges: ["x4UHXAuCAh"],
  },
  SqsWqZNQtg: {
    data: {
      val: "one",
      text: "1",
    },
    type: 200,
    edges: ["EeheWvihaq", "4iPz8OW9Ds", "S7AofzS7uq"],
  },
  SsXkQovF9D: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  StAUm9B7fi: {
    data: {
      title: "About the project",
    },
    type: 360,
  },
  Sv3089B7fi: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["OVbHj9B7fi", "Hq4xJ9B7fi"],
  },
  SxUBh9B7fi: {
    data: {
      fn: "proposal.projectType",
      text: "Is the development for mineral extraction?",
    },
    type: 100,
    edges: ["AXUTI9B7fi", "SMxrj9B7fi"],
  },
  T1FpdDFtID: {
    data: {
      fn: "applicant.ownership.noticePublished.newspaperName",
      type: "short",
      title:
        "What newspaper has the notice of the application been published in?",
    },
    type: 110,
  },
  T2QtM64BpR: {
    data: {
      fn: "applicant.agent.form",
      val: "No",
    },
    type: 380,
  },
  T3Fdj2xLAF: {
    data: {
      val: "relation.electedMember",
      text: "I am related to, or partnered with, an elected member for City of Doncaster Council",
    },
    type: 200,
    edges: ["4OKxc2xLAF", "u74UC2xLAF"],
  },
  T5hD79qDIv: {
    data: {
      fn: "applicant.resident",
      text: "Is the applicant's contact address the same as the property address?",
    },
    type: 100,
    edges: ["3fGe2GB4Im", "AEODp89l6P"],
  },
  T9a7EfVW2r: {
    data: {
      val: "occupier",
      text: "Occupier",
    },
    type: 200,
    edges: ["RSBh2I4Vr3", "OtX5uOvhUE", "Wye0g6JWyF"],
  },
  T9khRirT09: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["1nkmfl2qUW"],
  },
  TCYyJ2dnVQ: {
    data: {
      val: "commercial.retail",
      text: "Retail and services",
    },
    type: 200,
    edges: ["ZA71kgL6Q2"],
  },
  TDwNB9B7fi: {
    data: {
      fn: "proposal.renewables.lifetime",
      type: "long",
      title: "Please describe the lifetime of the renewable energy project",
    },
    type: 110,
  },
  TEojcnNYlP: {
    data: {
      val: "other.leisure",
      text: "Sport or other leisure",
    },
    type: 200,
  },
  TJyv89B7fi: {
    data: {
      val: "nonMajor.meeting",
      text: "Meeting (£585)",
    },
    type: 200,
    edges: ["10GaG9B7fi"],
  },
  TKABBMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 8 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  TKeYx9B7fi: {
    data: {
      title: "About the applicant",
    },
    type: 360,
  },
  TMbaVTXF3d: {
    data: {
      val: "LPA",
      text: "Yes",
    },
    type: 200,
    edges: ["gyW1yFQFDO"],
  },
  TSyv79B7fi: {
    data: {
      fn: "proposal.demolish.reason.description",
      type: "long",
      title: "What are the reasons for the demolition or removal?",
    },
    type: 110,
  },
  TTA9r9B7fi: {
    data: {
      fn: "proposal.materials.boundary",
      type: "long",
      title:
        "Describe the materials of the existing or proposed fences, gates, or walls",
      description:
        "<p>Common fence, wall and gate materials are timber or stone.</p>",
      howMeasured:
        "<p>You should be able to tell the materials from looking at the fences, walls and gates. Alternatively, your home buyers report or the survey you did when buying might tell you. If not, talk to your architect or builder.</p>",
    },
    type: 110,
  },
  TYUqYhhMmb: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["tWi3okGBNe"],
  },
  Td03cxtrHI: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  TrEO99B7fi: {
    data: {
      fn: "sitePlan.existing.rule",
      val: "required",
    },
    type: 380,
  },
  U0Dla2xLAF: {
    data: {
      val: "electedMember",
      text: "I am an elected member for City of Doncaster Council",
    },
    type: 200,
    edges: ["tgtoa2xLAF"],
  },
  U1Rkfacjnv: {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "zJIsnat6Ju"],
  },
  U6SAx9B7fi: {
    data: {
      fn: "newDwellings.50OrMore",
      tags: [],
      text: "How many new dwellings are you creating?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["q7ToU9B7fi", "NsMXE9B7fi", "BT6624VXDz", "Neu9oBBsT8"],
  },
  U771mX7pcX: {
    data: {
      val: "residential.carParkingSpace",
      text: "Car parking for a residential property",
    },
    type: 200,
  },
  U7gKY9B7fi: {
    data: {
      val: "tpo",
      text: "Yes",
    },
    type: 200,
    edges: ["Od27M9B7fi"],
  },
  UEolJ9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "1350",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  UQiC6AkzSX: {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      tags: [],
      text: "Have you notified the lessee?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["D1Cm3DVcLk", "GnTGdifEPu"],
  },
  URAW8XuIIp: {
    data: {
      val: "commercial.retail.restaurant",
      text: "Restaurant",
    },
    type: 200,
  },
  UTBVDH03Y9: {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "Address of the first notified owner or agricultural tenant",
    },
    type: 130,
  },
  UTrsADvRG0: {
    data: {
      val: "commercial.medical.other",
      text: "Another health or care use",
    },
    type: 200,
    edges: ["DvxdLfWY7y"],
  },
  UVoZ0YFBHa: {
    data: {
      val: "true",
      text: "The applicant certifies that the above statement is true",
    },
    type: 200,
  },
  UW5C3zLAVR: {
    data: {
      fn: "property.type",
      val: "commercial.industrial",
      operation: "replace",
    },
    type: 380,
  },
  UWuOy7JXJL: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      text: "Have you given requisite notice to all the known agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["Mi7fB2AQMZ", "hq2oXPLNV2"],
  },
  UaVk99B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  UdA0OayOqQ: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is this site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["zXimgeZ8U6", "sMqkqblUu7"],
  },
  UlPqZujYP3: {
    data: {
      fn: "property.ownership.ownerOne.interest",
      tags: [],
      text: "What is the first person's interest in the land?",
    },
    type: 100,
    edges: ["LAzfL1mysC", "VBryihkG8J", "ipN1iYWL72", "pX85zKqsM1"],
  },
  UpEO0beCvB: {
    data: {
      fn: "applicant.type",
      text: "Which of these best describes the applicant?",
    },
    type: 100,
    edges: [
      "Yq3RbeuQhZ",
      "GO359Q8Cyp",
      "zCLiTGDlnl",
      "qrBqLm0yes",
      "z4cBYRT2RU",
    ],
  },
  UtSjp4B9zv: {
    data: {
      fn: "floorArea.atLeast1000",
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["u3S0aLjGaJ", "6C8kqBvpUe"],
  },
  UuiC29B7fi: {
    data: {
      title: "The property",
    },
    type: 360,
  },
  UxGGj9B7fi: {
    data: {
      val: "major",
      text: "Major pre application",
    },
    type: 200,
    edges: ["Z6bIs9B7fi"],
  },
  VBaXB9B7fi: {
    data: {
      fn: "proposal.alter.boundary.height",
      title: "What is the height of the fence, gate or wall?",
      units: "m",
      description: "<p>If the height varies, answer for the highest part.</p>",
    },
    type: 150,
  },
  VBryihkG8J: {
    data: {
      val: "lessee",
      text: "Lessee",
    },
    type: 200,
    edges: ["OEh9W0lema", "rA91DcAco4", "UQiC6AkzSX"],
  },
  VCa3N3ujER: {
    data: {
      val: "commercial.leisure.holiday",
      text: "Campsite",
    },
    type: 200,
  },
  VGMTbaooaO: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "a",
    },
    type: 380,
  },
  VMTOC9MZB1: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["DVCMXFlV7x"],
  },
  VNEm29B7fi: {
    data: {
      val: "alter",
      text: "Yes",
    },
    type: 200,
    edges: ["2F2nq9B7fi"],
  },
  VPEyj9RnU8: {
    data: {
      info: "<p>It is a legal requirement to provide requisite notice to all known owners or agricultural tenants of land that is subject to an application for planning permission.</p><p>If you cannot contact all the owners or agricultural tenants, you must publish details of the application in a local newspaper instead.</p><p>You cannot submit an application without confirming you have done this.</p>",
      tags: [],
      color: "#ffdd00",
      title: "You cannot continue if you haven't given requisite notice",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        '<p>Find and print the <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">requisite notice form</a> on legislation.gov.uk</p><p>If you&apos;ve been unable to contact all the owners or agricultural tenants, you will need to publish details about the application in a local newspaper. This needs to be done 21 days before you send your application.</p><p>Your application will be saved for 28 days.</p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants a completed form, as set out in <a target="_blank" rel="noopener noreferrer nofollow" class="css-1rn59kg" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  VPVCQmEeIo: {
    data: {
      text: "I'm acting on the applicant's behalf",
    },
    type: 200,
    edges: ["LFnxgD4clh", "HGju3HsXOU", "CZjviC44Qc", "KviZA372qw"],
  },
  VQeVVLKA7Q: {
    data: {
      val: "land.unused",
      text: "Unused land",
    },
    type: 200,
  },
  VRil2FwMfz: {
    data: {
      fn: "service.type",
      val: "non.Major",
      operation: "replace",
    },
    type: 380,
  },
  VUXWhTcInQ: {
    data: {
      fn: "siteArea1And499ha",
      text: "Is the site area between 1 and 4.99 hectares?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["WaaA6uta9L", "KDzEOTRnlg"],
  },
  VUYlA0FvkR: {
    data: {
      text: "Has a requisite notice been posted, sited and displayed in such a way as to be easily visible and legible by members of the public, in at least one place in every parish or ward within which there is situated any part of the land to which the application relates?",
    },
    type: 100,
    edges: ["NCBVF3y1Nw", "T9khRirT09"],
  },
  VaCYI9B7fi: {
    data: {
      text: "Mixed Scope Check",
    },
    type: 300,
    edges: [
      "4hSTM9B7fi",
      "qgpOc9B7fi",
      "K3M9xBQJo9",
      "CJQ4LvaSUj",
      "90R599B7fi",
      "qpPwF9B7fi",
      "413Jh9B7fi",
      "pGl5Z98nSJ",
      "eRhpkXS9bh",
      "U6SAx9B7fi",
    ],
  },
  VcF0slIvik: {
    data: {
      val: "true",
      text: "I certify that the above is true",
    },
    type: 200,
  },
  Vgkf2Ml720: {
    data: {
      val: "pp.full.major",
      text: "Major",
    },
    type: 200,
    edges: ["OWGjxMl720", "AGlW3Ml720", "BpsvLMl720"],
  },
  ViOKPyGTVg: {
    data: {
      text: "Planning Permission applications have further ownership declaration and certificate requirements (agricultural tenancy and agricultural holdings, publication, declaration)",
      description:
        '<p>In addition to any other matters required to be contained in a certificate issued for the purposes of this section, every such certificate shall contain one or other of the following statements, that is to say—</p><p>(a)a statement that none of the land to which the application relates constitutes or forms part of an agricultural holding;</p><p>(b)a statement that the applicant has given the requisite notice of the application to every person (other than the applicant) who, at the beginning of the period of twenty-one days ending with the date of the application, was a tenant of any agricultural holding any part of which was comprised in the land to which the application relates, and setting out the name of each such person, the address at which notice of the application was given to him, and the date of service of that notice.</p><p></p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.e-lindsey.gov.uk/media/4621/Ownership-Certificates/pdf/ownership_certificate_apr-15.pdf">https://www.e-lindsey.gov.uk/media/4621/Ownership-Certificates/pdf/ownership_certificate_apr-15.pdf</a></p><p></p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2015/595/article/13/made">https://www.legislation.gov.uk/uksi/2015/595/article/13/made</a></p>',
    },
    type: 100,
  },
  Vj8MV8oymb: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  Vjw3exrW1k: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  VpqFn9B7fi: {
    data: {
      fn: "service.type",
      text: "Planning Pre-Application Advice Services",
      description:
        "<p>The City of Doncaster Council offer the following services:</p><p></p><h2>Written advice</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p></p><p><strong>The fee for this is £450.</strong></p><p><br></p><h2><strong>One meeting including a write up of the discussion</strong></h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Meeting with case officer (<strong>1hr maximum - Held via MS Teams</strong>)</p><p></p><p><strong>The fee for this is £585.</strong></p><p><br></p><h2><strong>One site-based meeting including a write up of the discussio</strong>n</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Planning Officer site visit (<strong>1hr maximum</strong>)</p><p></p><p><strong>The fee for this is £670.</strong></p><p><br></p>",
    },
    type: 100,
    edges: ["wHPn29B7fi", "TJyv89B7fi", "3Ogga9B7fi"],
  },
  Vrvrb2xLAF: {
    data: {
      val: "none",
      text: "None of the above apply to me",
    },
    type: 200,
    edges: ["MKw8h2xLAF"],
  },
  VthxviIaTD: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the organisation",
    },
    type: 110,
  },
  Vv1i0rOiKk: {
    data: {
      val: "commercial.education.college",
      text: "College",
    },
    type: 200,
  },
  VwGfSAqyoH: {
    data: {
      fn: "applicant.ownership.ownerKnown",
      info: "<p>If the applicant doesn&apos;t know the names and addresses of all the agricultural tenants of the land, on the next page you will need to describe how they have tried to find out this information.</p>",
      tags: [],
      text: "Does the applicant know the names and addresses of all the other owners of the land?",
      notes:
        "AN - changed an answer to align with the format of the other answers: \nYes\nSome, but not all\nNo",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land that forms part of the site area that is the subject of the application. If this includes land from more than one property you will need to contact all of the owners and tenant of each of the properties.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy,</p></li><li><p>the planned or actual use of the land, and</p></li><li><p>any other relevant circumstances.</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["CCUoHiXcZ3", "2fKWRTROlR", "oSpLRyT3Dn"],
  },
  Vz7R49B7fi: {
    data: {
      title: "Send to email",
      destinations: ["email"],
    },
    type: 650,
  },
  W0FTNskB0A: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["qFNPCHSqnc"],
  },
  W2MhjoUhoQ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["lsix4ENZTQ"],
  },
  W3T0E9B7fi: {
    data: {
      fn: "siteArea1And499ha",
      tags: [],
      text: "Is the site area between 1 and 4.99 hectares?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["s5FVm9B7fi", "dmDc49B7fi"],
  },
  W4UcjyP0g4: {
    data: {
      info: "<p>It is a legal requirement to provide &apos;requisite notice&apos; to all known owners or agricultural tenants of land that is subject to an application for planning permission. </p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title: "You can't continue if you haven't provided 'requisite notice'",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Save and return to this application at a later time after you have given the pre-defined form to all known owners or agricultural tenants of the land.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  W6TvXZbCsQ: {
    data: {
      fn: "applicant.ownership.noticePublished.date",
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      notes:
        "AN - changed to past simple for clarity\n\nPrevious content: What date has the notice been published in the newspaper?",
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  W7N5RqjC7L: {
    data: {
      val: "commercial.community.court",
      text: "Law court",
    },
    type: 200,
  },
  WEnBsMl720: {
    data: {
      fn: "application.type",
      tags: [],
      text: "What type of application is this?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "QdOhXGpHUT",
      "lT7QTMl720",
      "kojdsMl720",
      "80AnzMl720",
      "qqDK1Ml720",
      "iesX2Ml720",
      "bPVlqMl720",
      "XAVwRMl720",
      "vpdhxMl720",
      "N4gIKMl720",
      "9k4R3Ml720",
      "eJPwBMl720",
      "kRiNnMl720",
      "5VTsnMl720",
      "5jMZUMl720",
      "1UB7dMl720",
    ],
  },
  WEwkS9B7fi: {
    data: {
      fn: "newDwellings.moreThan25",
      text: "How many new dwellings are you creating?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["NXeHn9B7fi", "99rc39B7fi", "if6K9Qaczf"],
  },
  WJWP8eaQR3: {
    data: {
      fn: "applicant.agent.form",
      val: "Yes",
    },
    type: 380,
  },
  WO8kRX9jH9: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["ftODR5Slkt", "ILIeQr9pli"],
  },
  WU3D1n5gAx: {
    data: {
      fn: "applicant.ownership.noticePublished.newspaperName",
      tags: [],
      type: "short",
      notes:
        "AN - changed from present perfect to past simple for clarity.\nPrevious content: What newspaper has the notice of the application been published in?",
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  WVM7e9B7fi: {
    data: {
      text: "No",
    },
    type: 200,
  },
  WVQ0zdfUXz: {
    data: {
      val: "commercial.medical",
      text: "Health and care",
    },
    type: 200,
    edges: ["mRevTOrtYj"],
  },
  WViyJ3YQxi: {
    data: {
      val: "other.historic",
      text: "Historic site",
    },
    type: 200,
  },
  WaaA6uta9L: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["kd2hXMjKl2"],
  },
  WdiwbIEQUg: {
    data: {
      text: "499 square metres or less",
    },
    type: 200,
    edges: ["ai5yi9d6pF"],
  },
  WeyKKAPNxY: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VPEyj9RnU8"],
  },
  Wgl3GhzX3A: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["yLUEVZqUR1"],
  },
  Whs6yJVJnt: {
    data: {
      fn: "floorArea.atLeast1000",
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["XnOL5fUPOa", "2ohEbgCnAW"],
  },
  WiYk8VCJw1: {
    data: {
      fn: "service.type",
      val: "nonMajor",
      operation: "replace",
    },
    type: 380,
  },
  WjfeLGXseE: {
    data: {
      fn: "applicant.address",
      title: "Your contact address",
      description: "<p>This information will not be published.</p>",
    },
    type: 130,
  },
  WlBAHtMtuv: {
    data: {
      fn: "property.type",
      val: "commercial.transport",
      operation: "replace",
    },
    type: 380,
  },
  Wp3dl2xLAF: {
    data: {
      fn: "application.declaration.connection",
      info: "<p>It is an important principle of the planning system that decision-making processes are open and transparent. <strong>Declaring a connection will not affect the way your application is assessed.</strong> It will simply ensure that it is processed in a way that is fair and impartial.</p>",
      tags: ["placeholder"],
      text: "Connections with City of Doncaster Council",
      allRequired: false,
      description: "<p>This applies to either applicant or agents</p>",
      howMeasured:
        "<p><strong>Partnered</strong><em> </em>includes unmarried couples, as married couples or couples in a civil partnership.</p>\n<p><strong>Related to</strong> can include any relation (whether by birth, marriage or adoption) who is close enough that a fair-minded and informed observer, having considered the facts, might conclude that there was a risk of bias on the part of the decision maker within the planning authority.</p>\n<p>If you are unsure, it is better to declare any connection so steps can be taken to avoid any situation where an accusation of bias could be made.</p>\n<p><strong>Do agents need to declare a connection?</strong></p>\n<p>Yes. You should declare any council connections with either the applicant or an agent completing an application on the applicant's behalf.</p>",
      neverAutoAnswer: false,
    },
    type: 105,
    edges: [
      "PqqVT2xLAF",
      "4WqAA2xLAF",
      "U0Dla2xLAF",
      "T3Fdj2xLAF",
      "Vrvrb2xLAF",
    ],
  },
  Wr5oyTdKjx: {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  Wtvp1Ml720: {
    data: {
      text: "Is this an amendment to a major application?",
    },
    type: 100,
    edges: ["lTQ5DMl720", "g1ZoEMl720"],
  },
  Wu4oQMl720: {
    data: {
      text: "42 days?",
    },
    type: 100,
  },
  WvZxM9B7fi: {
    data: {
      val: "false",
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["haOwC9B7fi"],
  },
  Wye0g6JWyF: {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      text: "Have you notified the occupier?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["HoX2f4nndB", "FGsdduaUut"],
  },
  WzDJP9B7fi: {
    data: {
      val: "major.meeting",
      text: "Meeting (£900)",
    },
    type: 200,
    edges: ["bWYeI9B7fi"],
  },
  X05jwzVKFb: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate D",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["DxcIe2g6ey"],
  },
  X5KquCnQdj: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["RoB9NJQBIT", "iKsSs66PLz"],
  },
  X9JzMG3Ogw: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["HwDq0PrbxL", "C9bvIUpIgA"],
  },
  XAVwRMl720: {
    data: {
      val: "condition.approval",
      text: "Submit details required by a condition",
    },
    type: 200,
    edges: ["a6NBtMl720", "ZKT3EMl720"],
  },
  XBUjjp85TG: {
    data: {
      info: "<p>It is a legal requirement to publish a &apos;requisite notice&apos; of the application in a newspaper circulating in the area where the land is situated.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title:
        "You cannot continue if you have not published a notice in a local newspaper",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>If you cannot notify all owners of the land, you need to publish a notice of the application in a local newspaper to the site. You cannot submit an application without a declaration that you have done this.<br><br>Save and return to this application at a later time after you have given the pre-defined form to all known owners of the land.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  XDelvNOPN2: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title: "Full name of the first notified owner or agricultural tenant",
    },
    type: 110,
  },
  XMot34n2nA: {
    data: {
      fn: "property.ownership.ownerTwo.name",
      title: "Full name of the second notified owner or agricultural tenant",
    },
    type: 110,
  },
  XQsWKqj72N: {
    data: {
      tags: [],
      text: "Other applications (LDC, PA, LBC, PreApp, Amendments, Conditions)",
    },
    type: 300,
    edges: ["BH2eL6rZAU"],
  },
  XTgBISUKrs: {
    data: {
      val: "10000",
      text: "At least 10000m2",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  XTgtfwSuLQ: {
    data: {
      fn: "property.type",
      text: "What type of institutional building is it?",
    },
    type: 100,
    edges: [
      "ZcTXKBc4vS",
      "4xoUWkORDG",
      "W7N5RqjC7L",
      "KOBzBAzzNG",
      "6ZTrmjer34",
      "oAh53Sdhlf",
      "GIfqiZqsPC",
    ],
  },
  XWwiiR7YhB: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["g7ustuQcOA"],
  },
  XakhZrTBN3: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  XhtDEYtUww: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["yLUEVZqUR1"],
  },
  XnOL5fUPOa: {
    data: {
      val: "true",
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["WO8kRX9jH9"],
  },
  XrXi3rlRSZ: {
    data: {
      val: "object.religious.building.chapel",
      text: "Chapel",
    },
    type: 200,
  },
  Xyjs6kLnqz: {
    data: {
      text: "The same local planning authority as the applicant",
    },
    type: 200,
    edges: ["w4FJRRanh7"],
  },
  Y2kRmeO81E: {
    data: {
      val: "land.allotment",
      text: "Allotment",
    },
    type: 200,
  },
  Y3468sxJ9S: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      notes:
        "AN - deleted hint text - Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  Y8XHAX4vhC: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  YDYysY0o43: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["q2bzEirYvg"],
  },
  YHg0J9B7fi: {
    data: {
      fn: "proposal.demolish.asbestosAffected",
      text: "Is it likely that the demolitions or removals affect asbestos-containing material?",
    },
    type: 100,
    edges: ["p0PzY9B7fi", "qf8O79B7fi"],
  },
  YPHMxt1sen: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["lg20zuZ6tR", "ZzyE2JZPuz"],
  },
  YQMdXf0zhd: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>You are required to give notice to the other owners of the land (or agricultural tenants) to submit this application. If you do not this application will be returned to you as invalid.</p>",
      text: "Has the applicant given requisite notice to all the owners and agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["smis3rgjOR", "XhtDEYtUww"],
  },
  YSbIPPjAes: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>Your application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have given the requisite notice to everyone whose name and address is known to me who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application</p></li><li><p>I have published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li><li><p>I have posted the requisite notices, sited and displayed in such a way as to be easily visible and legible by members of the public, in at least one place in every parish or ward within which there is situated any part of the land to which the application relates</p></li><li><p>These notices were left in position for not less than seven days in the period of 21 days immediately preceding the making of the application</p></li><li><p>Any notice left in a position for less than seven days in the period of more than 21 days immediately preceding the making of the application were removed, obscured, or defaced before seven days had passed during the period of 21 days mentioned above without my fault or intent.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["7pN8IV96pF"],
  },
  YSoz99VKge: {
    data: {
      val: "object.religious.building.kingdomHall",
      text: "Kingdom Hall",
    },
    type: 200,
  },
  YaBFmIfrmr: {
    data: {
      text: "sort here for agricultural projects",
    },
    type: 100,
  },
  YddqZMl720: {
    data: {
      text: "28 days",
    },
    type: 100,
  },
  YjzESqJ4qq: {
    data: {
      val: "commercial.retail.post",
      text: "Post office",
    },
    type: 200,
  },
  Yk3FjMl720: {
    data: {
      text: "8 weeks if householder or minor",
    },
    type: 100,
  },
  YkDO99B7fi: {
    data: {
      fn: "service.type",
      text: "What type of pre-application are you applying for?",
      description:
        "<p>Select <em>More information</em> for details on the different pre-application service types.</p>",
      howMeasured:
        "<p><strong>Significant major pre application</strong></p><p>Advice for developments with 50 or more dwellings site area 5ha or more or building floorspace 10,000sqm or more or a development requiring EIA development.</p><p><br></p><p><strong>Large Major pre application</strong></p><p>Advice for developments with 26 to 49 dwellings or site area between 0.5 and 4.99ha or building space 1000sqm to 9999sqm.</p><p><br></p><p><strong>Major pre application</strong></p><p>Advice for developments with 10 to 25 dwellings or less than 0.5ha site area or buildings with a floor space less than 1000sqm.</p><p><br></p><p><strong>Non-major pre application</strong></p><p>Anything other planning advice applications.</p><p><br></p><p><strong>Specialist Listed Building and Tree advice only</strong></p><p>This does not involve any planning input.</p>",
    },
    type: 100,
    edges: ["ljB8Q9B7fi", "A11fo9B7fi", "UxGGj9B7fi", "yFNi39B7fi"],
  },
  YkjAbX9WdA: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  YlrM0T1WnT: {
    data: {
      fn: "property.ownership.ownerOne.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the tenant.</p>",
    },
    type: 110,
  },
  YmvpVYIaac: {
    data: {
      fn: "service.type",
      val: "major",
    },
    type: 380,
  },
  Yq3RbeuQhZ: {
    data: {
      val: "individual",
      text: "Private individual",
    },
    type: 200,
  },
  Z6bIs9B7fi: {
    data: {
      fn: "service.type",
      text: "Planning Pre-Application Advice Services",
      description:
        "<p>The City of Doncaster Council offer the following services:</p><h2>Written advice</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p></p><p><strong>The fee for this is £670.</strong></p><p><br></p><h2><strong>One meeting including a write up of the discussion</strong></h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Meeting with case officer (<strong>1hr maximum - Held via MS Teams</strong>)</p><p></p><p><strong>The fee for this is £900.</strong></p><p><br></p><h2><strong>One site-based meeting including a write up of the discussio</strong>n</h2><p>This will include:</p><p>·        Desktop assessment</p><p>·        Planning history of site</p><p>·        Consideration of relevant policies</p><p>·        Any site constraints</p><p>·        Consultation of relevant internal specialists</p><p>·        Officer opinion on proposal</p><p>·        Guidance for validation requirements</p><p>·        Planning Officer site visit (<strong>2hr maximum</strong>)</p><p></p><p><strong>The fee for this is £1015.</strong></p><p><br></p>",
    },
    type: 100,
    edges: ["5cyzG9B7fi", "WzDJP9B7fi", "4nnlv9B7fi"],
  },
  ZA71kgL6Q2: {
    data: {
      fn: "property.type",
      text: "What type of retail unit is it?",
    },
    type: 100,
    edges: [
      "m6PbWCB1we",
      "mGlGlqZNMY",
      "xCcQJDKF1l",
      "URAW8XuIIp",
      "h4XLYS8afw",
      "YjzESqJ4qq",
      "3s74llQcam",
      "77aMg0KaeL",
      "Ff1vOjzAVD",
      "3Pp2uvwRfG",
      "6IQpHgCEso",
      "4n7h4JzAJR",
    ],
  },
  ZFYPH3TG3e: {
    data: {
      fn: "property.ownership.ownerTwo.noticeDate",
      max: "2200-12-31",
      min: "1900-01-01",
      title:
        "Date on which notice was given to the second owner or agricultural tenant",
    },
    type: 120,
  },
  ZJeyJ9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["djmUK9B7fi", "TDwNB9B7fi", "EImX59B7fi", "quxSG9B7fi"],
  },
  ZKT3EMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 4 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 4 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  ZKoMQtSAuR: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      type: "extraLong",
      title:
        "What steps were taken to find out the names and addresses of the other owners?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Please describe the steps that have been taken to find out the names and addresses of the other owners and agricultural tenants of the land whose names and addresses are not known to the applicant.</p>",
    },
    type: 110,
  },
  ZLGcW8Aci7: {
    data: {
      text: "[Does 21 days before application apply to LDC?]",
    },
    type: 100,
  },
  ZO2dTfCRFg: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VPEyj9RnU8"],
  },
  ZOtL3MUARu: {
    data: {
      val: "commercial.education.specialNeeds",
      text: "Special educational needs",
    },
    type: 200,
  },
  ZXbRtW8eEr: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  ZZZ9N6Y0za: {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  ZZwwFZADLO: {
    data: {
      info: "<p>It is a legal requirement to publish a &apos;requisite notice&apos; of the application in a newspaper circulating in the area where the land is situated.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title:
        "You cannot continue if you have not published a notice in a local newspaper",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>If you cannot notify all owners of the land, you need to publish a notice of the application in a local newspaper to the site. You cannot submit an application without a declaration that you have done this.<br><br>Save and return to this application at a later time after you have given the pre-defined form to all known owners of the land.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  ZbKC18c3Bm: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["3y6n3BZdUm", "ysWVmKBMUP"],
  },
  ZcTXKBc4vS: {
    data: {
      val: "commercial.community.wc",
      text: "Public WC",
    },
    type: 200,
  },
  Zj2JuxK8SA: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["284dh1B64r"],
  },
  ZrRju2xLAF: {
    data: {
      val: "pp",
      text: "Planning permission",
    },
    type: 200,
    edges: ["5ao362xLAF"],
  },
  ZzIT6wyBRK: {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "What is the address of the owner?",
    },
    type: 130,
  },
  ZzyE2JZPuz: {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  a0OE4T9hhz: {
    data: {
      val: "other.unsupported.travellingPersons",
      text: "Travellers site",
    },
    type: 200,
  },
  a6NBtMl720: {
    data: {
      text: "4 weeks?",
    },
    type: 100,
  },
  aDKRC5ByP6: {
    data: {
      text: "LDC – Owner Contacts",
    },
    type: 300,
    edges: ["xnfMkgx9Xn", "GATomCNGX5"],
  },
  aE3y9pavRx: {
    data: {
      text: "Sorting here to add reg3/4 ",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/1992/1492/regulation/3">https://www.legislation.gov.uk/uksi/1992/1492/regulation/3</a><br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/1992/1492/regulation/4">https://www.legislation.gov.uk/uksi/1992/1492/regulation/4</a></p>',
    },
    type: 100,
  },
  aFTbF2MZxs: {
    data: {
      fn: "applicant.company.name",
      title: "Name of the charity",
    },
    type: 110,
  },
  aG8yD8tHWI: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>Your application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate B",
      notes:
        "Original: I have given the requisite notice to everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land to which this application relates",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have given the requisite notice to everyone who, 21 days before the date that this application was sent, was an owner or agricultural tenant of any part of the land that is subject to this application.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["5BUH862WGs"],
  },
  aJHwtMYw1a: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate B",
      notes:
        "Original: I have given the requisite notice to everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land to which this application relates",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have given the requisite notice to everyone who, 21 days before the date that this application was sent, was an owner or agricultural tenant of any part of the land that is subject to this application.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["6EjWoeEj7j"],
  },
  aJPFK9B7fi: {
    data: {
      text: "🚨 Could we sort into Significant/large/mahor/non-major based on site area? 🚨",
    },
    type: 100,
  },
  aJzng1LAVi: {
    data: {
      img: "https://api.editor.planx.uk/file/public/pk8f4g4h/housetypes_detached.png",
      val: "residential.house.detached",
      text: "Detached",
    },
    type: 200,
  },
  aST8HMl720: {
    data: {
      text: "12 weeks",
    },
    type: 100,
  },
  aYIXsyr8Ji: {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess the application. If we do, who should we contact to arrange the visit?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["DmdeHOewPk", "U1Rkfacjnv", "b2bolgXP8u"],
  },
  agBG16PbDM: {
    data: {
      val: "charity",
      text: "Charity",
    },
    type: 200,
  },
  ai5yi9d6pF: {
    data: {
      fn: "service.type",
      val: "nonMajor",
      operation: "replace",
    },
    type: 380,
  },
  akB1O13VNA: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["M0oc0isZDH"],
  },
  akHDWw6e3l: {
    data: {
      text: "Between 1,000 and 9,999 square metres",
    },
    type: 200,
    edges: ["KfN3RBq4zl"],
  },
  amqDb1sITY: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  anZ6X9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["HvP229B7fi"],
  },
  apCOH9B7fi: {
    data: {
      tags: [],
      text: "What are you planning to apply for?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["kshxQ9B7fi", "x82Ln9B7fi", "HDEGWV4HPO"],
  },
  atwOYIwFQp: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  auX5H4P8UG: {
    data: {
      fn: "property.ownership.ownerOne.address",
      title: "What is the address of the owner?",
    },
    type: 130,
  },
  b2bolgXP8u: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["CinvXjoJGj", "Vjw3exrW1k"],
  },
  b5cA4eYyQd: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "b",
    },
    type: 380,
  },
  b6Bd8rgmZ8: {
    data: {
      val: "land.development",
      text: "Development site",
    },
    type: 200,
  },
  b8b4cVyvSC: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  b966NHaRza: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  bBe3BvToEk: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  bEEV4icJnv: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title:
        "What is the full name of the person with an interest in the land?",
    },
    type: 110,
  },
  bJ7tCEykk5: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>Your application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate D",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have taken all reasonable steps to find out the names and addresses of everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but have been unable to do so</p></li><li><p>I have published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site </p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["2qpRxOK5dz"],
  },
  bKyYzKGOAe: {
    data: {
      val: "other.agriculture",
      text: "Agricultural support (pen, pit, ladder etc.)",
    },
    type: 200,
  },
  bLfR59B7fi: {
    type: 300,
    edges: ["9e3b8eb1-862e-41c5-a7f1-3906897b6bd0"],
  },
  bPVlqMl720: {
    data: {
      val: "listed",
      text: "Listed Building Consent",
    },
    type: 200,
    edges: ["g4fkYMl720", "2DxY5Ml720"],
  },
  bWYeI9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "900",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  bZWnD5sIto: {
    data: {
      fn: "applicant.ownership.noticePublished.date",
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  bbCAG1PEn1: {
    data: {
      val: "owner",
      text: "Owner",
    },
    type: 200,
    edges: ["s1v8iYuYxU", "gz4z8onffa", "dxEOG2hGv6"],
  },
  bduOEnQ4zL: {
    data: {
      val: "onshoreExtractionOilAndGas",
      text: "Onshore Oil and Gas Development",
    },
    type: 200,
    edges: ["GpHWLHyyfe"],
  },
  bjT5p9B7fi: {
    data: {
      fn: "siteArea5haOrMore",
      tags: [],
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: true,
    },
    type: 100,
    edges: ["EmVpl9B7fi", "lmkro9B7fi"],
  },
  blVQo9B7fi: {
    data: {
      val: "monument",
      text: "Scheduled monument",
    },
    type: 200,
  },
  bqTqKxyVXV: {
    data: {
      text: "Agent for NOT sole owner WITH agricultural tenants",
    },
    type: 300,
    edges: ["3kxMlzeCY1"],
  },
  bqjq9kZQ0R: {
    data: {
      type: "extraLong",
      title: "Provide details of the posted notice",
      description:
        "<p>Include the name of the parish or ward, the location of the notice, and the date posted.</p>",
    },
    type: 110,
  },
  btOZaPrGqg: {
    data: {
      fn: "property.ownership.ownerTwo.noticeGiven",
      text: "Have you notified the occupier?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["2ZtIG2fOko", "p5k5uSp9A3"],
  },
  btgB4Ml720: {
    data: {
      fn: "application.type",
      text: "What type of application is it?",
    },
    type: 100,
    edges: ["5yOFqMl720", "HkTcNMl720", "Vgkf2Ml720"],
  },
  bvQ1DVdGZn: {
    data: {
      text: "simplest, sole owner and no ag tenants = cert A",
    },
    type: 100,
  },
  bvbmwMw2Zd: {
    data: {
      info: "<p>We need this information in order to categorise your application</p>",
      tags: [],
      text: "How much new non-residential internal floor area will be created by the development, if known?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/publications/measuring-practice-for-voa-property-valuations/code-of-measuring-practice-definitions-for-rating-purposes">https://www.gov.uk/government/publications/measuring-practice-for-voa-property-valuations/code-of-measuring-practice-definitions-for-rating-purposes</a></p>',
      description:
        '<p>This question refers to the <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/publications/measuring-practice-for-voa-property-valuations/code-of-measuring-practice-definitions-for-rating-purposes">Gross Internal Area (GIA)</a>.</p>',
      howMeasured:
        "<p>Gross Internal Area includes the whole enclosed area of a building within the external walls taking each floor into account and excluding the thickness of the external walls.</p><p>It includes:</p><p>areas occupied by internal walls (whether structural or not) and partitions</p><p>service accommodation such as WCs, showers, changing rooms and the like</p><p>columns, piers, whether free standing or projecting inwards from an external wall, chimney breasts, lift wells, stairwells etc</p><p>lift rooms, plant rooms, tank rooms, fuel stores, whether or not above roof level</p><p>open-sided covered areas (should be stated separately)</p><p>It does not include:</p><p>open balconies</p><p>open fire escapes</p><p>open-sided covered ways</p><p>open vehicle parking areas, terraces and the like</p><p>minor canopies</p><p>any area with ceiling height of less than 1.5m (except under stairways)</p><p>any area under the control of service or other external authorities</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "es9u8dX6Yk",
      "akHDWw6e3l",
      "plDFDp62Nx",
      "WdiwbIEQUg",
      "ENnRGiHlEF",
    ],
  },
  bwJffr36wI: {
    data: {
      fn: "proposal.visibility.public",
      info: "<p>For certain projects, we may need to visit your site to assess your application. During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "Can a planning officer see the works from public land?",
      howMeasured:
        "<p>Public land refers to areas that are open and accessible to everyone, such as roads, sidewalks, paths for pedestrians, horse riders (bridleways), or any other land that is available for public use.</p>",
    },
    type: 100,
    edges: ["9pXb5yKr9s", "atwOYIwFQp"],
  },
  byEHX2xLAF: {
    data: {
      text: "LDC confirmations",
    },
    type: 300,
    edges: ["BpyaO2xLAF", "Wp3dl2xLAF", "OPNqQ2xLAF", "xiTuN2xLAF"],
  },
  c0Enc9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "1235",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  c1QOR9B7fi: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
    },
    type: 100,
    edges: ["4SVT59B7fi", "Eatja9B7fi"],
  },
  cDEMhRlIa1: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["JMJ60UdgaD"],
  },
  cH5Jx9B7fi: {
    data: {
      fn: "proposal.use.description",
      type: "long",
      title: "What is the proposed use of the building?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/1987/764/contents">https://www.legislation.gov.uk/uksi/1987/764/contents</a></p>',
      description:
        "<p>In your description you may reference use classes. For more information on use classes please select <em>More information</em>.</p>",
      howMeasured:
        "<p>The different use classes are:</p><ul><li><p>Part B (Schedule 1)</p><ul><li><p>Class B2 – General Industrial</p></li><li><p>Class B8 – Storage and distribution</p></li></ul></li><li><p>Part C (Schedule 1)</p><ul><li><p>Class C1 – Hotels</p></li><li><p>Class C2 – Residential institutions</p></li><li><p>Class C2A – Secure residential institutions</p></li><li><p>Class C3 – Dwellinghouses</p></li><li><p>Class C4 – Small Houses in multiple occupation</p></li></ul></li><li><p>Part A (Schedule 2) Commercial, Business and Service</p><ul><li><p>Class E – Commercial, Business and Service</p></li></ul></li><li><p>Part B (Schedule 2) Local Community and Learning</p><ul><li><p>Class F.1 Learning and non-residential institutions</p></li><li><p>Class F.2 Local community</p></li></ul></li></ul>",
    },
    type: 110,
  },
  cHPK8Hu9In: {
    data: {
      fn: "applicant.ownership.noticePublished.newspaperName",
      tags: [],
      type: "short",
      notes:
        "AN - changed question from 'What newspaper has the notice of the application been published in?' for clarity",
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  cJxMNiqSqg: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate C",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has given the requisite notice to everyone whose name and address is known to the applicant who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application</p></li><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone else who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["lixEx1JyM6"],
  },
  cNyUKR4zwH: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["0peWRwhuVs"],
  },
  cOAA2qBx3D: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      text: "Has the applicant given requisite notice to all the known owners and agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["pPtprJc7QL", "ZO2dTfCRFg"],
  },
  cOxTGeWlYk: {
    data: {
      val: "listed",
      text: "LBC",
    },
    type: 200,
    edges: ["sfQ3A9csng", "Phzy95SFEI"],
  },
  cR39C6xDzK: {
    data: {
      val: "commercial.transport.freight",
      text: "Freight handling facility (such as a shipping container port)",
    },
    type: 200,
  },
  cXL5Pupz0h: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate C",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has given the requisite notice to everyone whose name and address is known to the applicant who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application</p></li><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone else who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["J4oi46Q9ZP"],
  },
  cZ2HPbPHuh: {
    data: {
      val: "threePlus",
      text: "3 or more",
    },
    type: 200,
    edges: ["hmw4awJUIm"],
  },
  cfGBWxqo05: {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  ckmP2Vm9bg: {
    data: {
      title: "Tell us what you think",
      disclaimer:
        "The information collected here isn't monitored by planning officers. Don't use it to give extra information about your project or submission. If you do, it cannot be used to assess your project.",
      description:
        'This service is a work in progress, any feedback you share about your experience will help us to improve it.\n<br>\n<br>\nDon\'t share any personal or financial information in your feedback. If you do we will act according to our <a href="">privacy policy</a>.',
      ratingQuestion:
        "<strong>How would you rate your experience with this service?</strong>",
      feedbackRequired: false,
      freeformQuestion:
        "<strong>Please tell us more about your experience.</strong>",
    },
    type: 900,
  },
  cr1HyMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell your close neighbours and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit your property. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision by email within 42 days if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision by email within 42 days. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  csCEh9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "1015",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  cstHt9B7fi: {
    data: {
      fn: "elevations.existing.rule",
      val: "recommended",
    },
    type: 380,
  },
  cxqGnMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 8 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  cyIQk4VAli: {
    data: {
      fn: "property.ownership.ownerTwo.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the tenant.</p>",
    },
    type: 110,
  },
  cyYHs9B7fi: {
    data: {
      text: "None of these",
    },
    type: 200,
  },
  d34Rel56Yi: {
    data: {
      val: "true",
      text: "I certify that the above statement is true",
    },
    type: 200,
  },
  d3VDtJcupX: {
    data: {
      fn: "siteArea5haOrMore",
      tags: [],
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["rOj3gIBZny", "XWwiiR7YhB"],
  },
  dBGy4uYIlX: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["YPHMxt1sen", "lDYrRM3oVb"],
  },
  dBW8ZZZTq7: {
    data: {
      fn: "applicant.ownership.interest",
      info: "<p>We need to know the applicant&apos;s interest in the land, the name and address of any person known to have an interest in the land, and whether anyone has been notified of the application.</p>",
      tags: [],
      text: "Which of these best describes the applicant's interest in the land?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2015/595/article/39" target="_self">The Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Please describe the applicant&apos;s relationship as it was 21 days before the date of this application.</p>",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land which forms part of the site area. If this includes land from more than one property you should list all owners here</p>",
    },
    type: 100,
    edges: ["IYYZxkL3zb", "dbV3JpOFFY", "miI64XivuJ", "D9qusbxsdw"],
  },
  dKPQHBo5T0: {
    data: {
      val: "some",
      text: "Some of them",
    },
    type: 200,
    edges: ["opeW5owgtD", "cOAA2qBx3D"],
  },
  dPFGgD0hCf: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["3FKghRSwX8"],
  },
  dTwK39B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  dbV3JpOFFY: {
    data: {
      val: "lessee",
      text: "Lessee",
    },
    type: 200,
    edges: ["8iI5ZIhiPT", "wv8kCpNcjF", "gu4Fo8qMPp", "aDKRC5ByP6"],
  },
  djmUK9B7fi: {
    data: {
      fn: "proposal.renewables.generation",
      title: "How much energy is being generated?",
      units: "mw",
      description: "<p>Please provide a number in megawatt (MW).</p>",
    },
    type: 150,
  },
  dmDc49B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["Nr84mPikUn"],
  },
  dmyNsdv2wk: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate D",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["2WNKU9L0ah"],
  },
  drgTHm6Hx8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["MpcjK22pHR"],
  },
  dstHNRpcyt: {
    data: {
      text: "Something else ",
    },
    type: 200,
  },
  duTwH18KKr: {
    data: {
      val: "land.other",
      text: "Another land use",
    },
    type: 200,
    edges: ["3lblfduLSS"],
  },
  dvp9U9B7fi: {
    data: {
      val: "demolish",
      text: "Yes",
    },
    type: 200,
  },
  dxEOG2hGv6: {
    data: {
      fn: "property.ownership.ownerTwo.noticeGiven",
      text: "Have you notified the owner?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["wDw50T0VAl", "F1Ebk4qB8m"],
  },
  dzOXYFLIKb: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["yLUEVZqUR1"],
  },
  e0As0j5aWC: {
    data: {
      val: "some",
      text: "Some of them",
    },
    type: 200,
    edges: ["piUhBlIaAQ", "DOUSyyoivs"],
  },
  e0ERYXHt44: {
    data: {
      type: "extraLong",
      title:
        "Provide details of the notices that were left in a position for less than seven days in the period of more than 21 days immediately preceding the making of the application",
      description:
        "<p>Include the name of the parish or ward, the location of the notice, and the date posted.</p>",
    },
    type: 110,
  },
  e76Q89B7fi: {
    data: {
      val: "10000",
      text: "At least 10000m2",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  e8BUk9B7fi: {
    data: {
      color: "#ffff00",
      title: "Building Control service",
      description:
        '<p>If you wish to report a dangerous structure, please contact Doncaster Council&apos;s Building Control service, immediately following <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.doncaster.gov.uk/services/planning/dangerous-structures">this link</a>.</p>',
      resetButton: false,
    },
    type: 8,
  },
  e8K0K9B7fi: {
    data: {
      fn: "proposal.utilities.buildOver",
      text: "Does the development build over existing utilities?",
    },
    type: 100,
    edges: ["iOFrr9B7fi", "t99ty9B7fi"],
  },
  eF17HAmMEu: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["IIRUxbN5na"],
  },
  eJPwBMl720: {
    data: {
      val: "environmentalImpact.screening",
      text: "Environmental Screening (stage 1)",
    },
    type: 200,
    edges: ["8HPcKMl720", "OLKatMl720"],
  },
  eLw9RUHLSh: {
    data: {
      text: "1 to 9",
      description: "19",
    },
    type: 200,
  },
  eOXYdjmmXq: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  eR4Uk4wds5: {
    data: {
      val: "object.religious.building.cathedral",
      text: "Cathedral",
    },
    type: 200,
  },
  eRVp0IFxqc: {
    data: {
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["FzdTs4nrhr"],
  },
  eRfND9B7fi: {
    data: {
      val: "sewer",
      text: "Main sewer",
    },
    type: 200,
  },
  eRhpkXS9bh: {
    data: {
      fn: "floorArea.1OrMore",
      formula: "largerEq(proposal.area.internal.new, 1)",
      defaults: {
        "proposal.area.internal.new": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  eZl84Ge5kI: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["jamOo7Wf3l"],
  },
  edusteUSo7: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["5DTRtWGPbK"],
  },
  eibHWbPrW6: {
    data: {
      fn: "service.type",
      val: "major.significant",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  es9u8dX6Yk: {
    data: {
      text: "10,000 square metres or more",
    },
    type: 200,
    edges: ["un5nyuzbwq"],
  },
  f75RXHmU92: {
    data: {
      fn: "applicant.agent.address",
      title: "Your contact address",
    },
    type: 130,
  },
  f7HDc9B7fi: {
    data: {
      fn: "proposal.utilities.foulSewageDisposal.description",
      type: "long",
      title: "Please describe the foul sewage disposal arrangements",
    },
    type: 110,
  },
  f7MRGpT8wK: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  f9ecsFngUQ: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>Your application must include a statement describing the current ownership of the land subject to this application. It is an offence to knowingly or recklessly issue a certificate which purports to comply with those requirements and which contains a statement which is false or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate A",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>on the day 21 days before the date of this application nobody except the applicant was an owner of any part of the land subject to this application</p></li><li><p>none of the land to which the application relates is or forms part of an agricultural holding</p></li></ul>",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural holding</strong> refers to land with agricultural tenants. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>",
    },
    type: 100,
    edges: ["b966NHaRza"],
  },
  fFaIGwurhW: {
    data: {
      val: "land.forest",
      text: "Forestry",
    },
    type: 200,
  },
  fHWLxi5ejZ: {
    data: {
      val: "commercial.transport.road.parking",
      text: "Car park",
    },
    type: 200,
  },
  fK4Jrz77On: {
    data: {
      fn: "service.type",
      val: "major",
      operation: "replace",
    },
    type: 380,
  },
  fLVlIcYbXD: {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property form adjoining land or neighbouring properties. </p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess your application. If we do, who should we contact to arrange the visit?",
    },
    type: 100,
    edges: ["06bA9iXPTC", "Dyi75x20ao"],
  },
  fSafdV3teR: {
    data: {
      fn: "service.type",
      val: "major",
      operation: "replace",
    },
    type: 380,
  },
  fW8dbqtWre: {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      text: "Have you notified the occupier?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["mP3iMYljkG", "odvUYWBsxD"],
  },
  fWu8pfkuXl: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["BjCuhNXV9a"],
  },
  fXDEHMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo:
        "<h2>You will be contacted</h2><ul><li><p>if there is anything missing from the information you have provided so far</p></li><li><p>if any additional information is required</p></li></ul>",
      nextSteps: [],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description: "Thank you for your submission.",
    },
    type: 725,
  },
  fhInxEBOwZ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["y2GZT4wgfu"],
  },
  ftODR5Slkt: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  fuXe0eBZhG: {
    data: {
      fn: "siteArea1And499ha",
      text: "Is the site area between 1 and 4.99 hectares?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["QccbqoOuPQ", "edusteUSo7"],
  },
  fyGUfQ9yBx: {
    data: {
      val: "one",
      text: "1",
    },
    type: 200,
    edges: ["KDGHNAsMqQ"],
  },
  g06hL2xLAF: {
    data: {
      text: "Default confirmations",
    },
    type: 300,
    edges: ["BpyaO2xLAF", "Wp3dl2xLAF", "lMy9g2xLAF", "m1ywR2xLAF"],
  },
  g1ZoEMl720: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["Yk3FjMl720", "42kcrMl720"],
  },
  g2SIjKMagJ: {
    data: {
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["oGHsuRujf8", "jhjkoI48KI", "eRVp0IFxqc", "tulIlEizWy"],
  },
  g4fkYMl720: {
    data: {
      text: "8 weeks",
    },
    type: 100,
  },
  g7ustuQcOA: {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  gCvKbbJe0i: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["e0ERYXHt44", "IHYMokATx6"],
  },
  gL3852rbg7: {
    data: {
      val: "commercial.medical.healthCentre",
      text: "Health centre",
    },
    type: 200,
  },
  gLsFJbrERP: {
    data: {
      val: "true",
      text: "Yes, it's visible from the road or somewhere else",
    },
    type: 200,
  },
  gaROsdK6P0: {
    type: 300,
    edges: ["6afa7b28-09d1-4401-9c5f-d4faa09cc223"],
  },
  gejXlV8gjI: {
    data: {
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["CQy0mqTHdH"],
  },
  ggyBJ2xLAF: {
    data: {
      val: "true",
      text: "I hereby apply for a Lawful Development Certificate as described in this form and the accompanying plans/drawings and additional information",
    },
    type: 200,
  },
  glPYMepqRj: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["vCXjRYe7fG", "2aI1SceN3J"],
  },
  gqhUt5Yb7i: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["4y48qzfedx"],
  },
  gu4Fo8qMPp: {
    data: {
      fn: "property.ownership.ownerOne.interest",
      val: "owner",
    },
    type: 380,
  },
  gx3GMwbZrZ: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate B",
      notes:
        "Original: I have given the requisite notice to everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land to which this application relates",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>I have given the requisite notice to everyone who, 21 days before the date that this application was sent, was an owner or agricultural tenant of any part of the land that is subject to this application.</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["VcF0slIvik"],
  },
  gyW1yFQFDO: {
    data: {
      tags: [],
      text: "Who does the site belong to?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["Xyjs6kLnqz", "5rEp2cHPsN"],
  },
  gz4z8onffa: {
    data: {
      fn: "property.ownership.ownerTwo.address",
      title: "What is the address of the owner?",
    },
    type: 130,
  },
  h4XLYS8afw: {
    data: {
      val: "commercial.retail.takeaway",
      text: "Food takeaway",
    },
    type: 200,
  },
  h8fEf9B7fi: {
    data: {
      fn: "proposal.flood.surfaceWaterDisposal",
      text: "How will surface water be disposed of?",
      allRequired: false,
    },
    type: 105,
    edges: [
      "tt1b19B7fi",
      "GBtnA9B7fi",
      "eRfND9B7fi",
      "8tOQD9B7fi",
      "9e4JD9B7fi",
      "k8ZFP9B7fi",
    ],
  },
  h9wx74CgOv: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  hNvEwECRda: {
    data: {
      fn: "property.type.userProvided",
      type: "short",
      title: "What type of property is it?",
    },
    type: 110,
  },
  hSrM6u3e5N: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate D",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["85RnRvHvLY"],
  },
  hTyWHmOPhD: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["hViQQxlXdN"],
  },
  hUir78J0Em: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      tags: [],
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must have been published within 21 days of the date of the application.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["MGQJI5GEmp", "W0FTNskB0A"],
  },
  hUoKC88fgZ: {
    data: {
      fn: "property.ownership.ownerTwo.address",
      tags: [],
      title: "What is the address of the lessee?",
    },
    type: 130,
  },
  hViQQxlXdN: {
    data: {
      fn: "siteArea1And499ha",
      text: "Is the site area between 1 and 4.99 hectares?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["YDYysY0o43", "AvaTZG6VwS"],
  },
  haOwC9B7fi: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
    },
    type: 100,
    edges: ["ijf6a9B7fi", "anZ6X9B7fi"],
  },
  hh5Y3jthQ3: {
    data: {
      info: "<p>It is a legal requirement to publish a &apos;requisite notice&apos; of the application in a newspaper circulating in the area where the land is situated.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title:
        "You cannot continue if you have not published a notice in a local newspaper",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>If you can&apos;t notify all owners and agricultural tenants of the land, you need to publish a notice of the application in a local newspaper to the site. You can&apos;t submit an application without a declaration that you have done this.<br><br>Save and return to this application at a later time after you have given the pre-defined form to all known owners or agricultural tenants of the land.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  hhW61nDmAS: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  hhrn3AfCzX: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "b",
    },
    type: 380,
  },
  hiS83orZsS: {
    data: {
      fn: "applicant.ownership.noticePublished.newspaperName",
      tags: [],
      type: "short",
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  hmQKQrVMC8: {
    data: {
      val: "other",
      text: "No",
    },
    type: 200,
    edges: ["CrSjVNOOsq", "EMiAmjuQPa"],
  },
  hmw4awJUIm: {
    data: {
      fn: "property.ownership.multipleOwners",
      type: "extraLong",
      title: "List all owners and agricultural tenants",
      description:
        "<p>For each owner and agricultural tenant, give their name, address and the date on which they were given notice.</p>",
    },
    type: 110,
  },
  hq2oXPLNV2: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VPEyj9RnU8"],
  },
  hrVQ3UrdMQ: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: ["LU5xin8PHs"],
  },
  hvaAM9B7fi: {
    data: {
      val: "flood.zoneOne",
      text: "Zone 1",
    },
    type: 200,
  },
  i08Q29B7fi: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["Od27M9B7fi"],
  },
  i0SjM7ZGGP: {
    data: {
      type: "extraLong",
      title:
        "Please detail the steps the applicant has taken to protect and replace the notices",
    },
    type: 110,
  },
  i2xjsTkJqh: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["Q5P6t0AtbV", "4SQCo2LF1w"],
  },
  i3gLZT94GI: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  i5rhVMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 12 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 12 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  iA1xE7JB5g: {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  iALKw0iDnL: {
    data: {
      val: "other",
      text: "No",
    },
    type: 200,
    edges: ["YaBFmIfrmr", "CrSjVNOOsq", "NAxKTWNRi3"],
  },
  iKsSs66PLz: {
    data: {
      text: "Agent for NOT sole owner NO agricultural tenants",
    },
    type: 300,
    edges: ["VwGfSAqyoH"],
  },
  iNs05gNF4H: {
    data: {
      val: "owner.sole",
      text: "Yes",
    },
    type: 200,
    edges: ["LJGc0Pji6b", "8uzwhjo8Yz"],
  },
  iOFrr9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  iY8ex7kyJg: {
    data: {
      val: "true",
      text: "I certify that the above is true",
    },
    type: 200,
  },
  iesX2Ml720: {
    data: {
      val: "pa",
      text: "Prior approval",
    },
    type: 200,
    edges: ["DRn7sMl720"],
  },
  if6K9Qaczf: {
    data: {
      text: "1 to 9",
      description: "19",
    },
    type: 200,
  },
  igbmzrDA0g: {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      text: "Have you notified the owner?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["zKqUL7sJNV", "eF17HAmMEu"],
  },
  ijT4QmezR1: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["Jcf20Eo6GW", "CNJRKsLPHU"],
  },
  ijf6a9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  ikS1q965mq: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["ZZwwFZADLO"],
  },
  ipN1iYWL72: {
    data: {
      val: "occupier",
      text: "Occupier",
    },
    type: 200,
    edges: ["zOCzb4kwrd", "IgSkgLpbLT", "fW8dbqtWre"],
  },
  isdVE7X68d: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>You are required to give notice to the other owners of the land to submit this application. If you do not this application will be returned to you as invalid.</p>",
      text: "Has the applicant given requisite notice to all of the other owners?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description: "<p>Answer to the best of your knowledge. </p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p>',
    },
    type: 100,
    edges: ["1hYAxGOMY3", "Wgl3GhzX3A"],
  },
  izXCq9B7fi: {
    type: 300,
    edges: ["6689164d-2a5e-422f-8d6a-d3ea11a2fbb9"],
  },
  j2Z3DB2G57: {
    data: {
      text: "Change of use of land",
    },
    type: 200,
    edges: ["EPhCZssUNU", "we9rNcNDfv", "DiTpB9B7fi"],
  },
  jDtfCeqX5F: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["1vdS03hp6A", "pVvd6pt5kg"],
  },
  jEiF79B7fi: {
    data: {
      tags: [],
      title: "Add drawings, documents and photographs to your application",
      fileTypes: [
        {
          fn: "sitePlan.existing",
          name: "Site plan - existing",
          rule: {
            condition: "AlwaysRecommended",
          },
          moreInformation: {
            info: "<p>Your application must include a plan of the site before the changes. This plan is also known as a block plan. It should show the entire site as it looked before the changes. </p><p>If your project involves demolitions, the site plan should clearly indicate the structure to be demolished.</p><p>If your project results in the loss of existing parking provisions or impacts the existing parking layout, the site plan should show existing and proposed parking if known.</p><p>Upload scans of any physical documents rather than photos.</p>",
            policyRef:
              '<p><a target="_self" rel="noopener noreferrer nofollow" href="http://www.legislation.gov.uk/uksi/2015/595/article/7/made">The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended</a>)</p>',
            howMeasured:
              "<p>Your site plan must:</p><ul><li><p>be drawn to scale. This is usually 1:500 or 1:200 at A3 or A4 size</p></li><li><p>have a scale bar</p></li><li><p>show the direction of north</p></li><li><p>have a unique drawing reference number</p></li><li><p>be based on an up-to-date map or survey</p></li></ul><p>It should include:</p><ul><li><p>buildings including outbuildings and nearby neighbouring buildings</p></li><li><p>trees on or adjoining the site</p></li><li><p>roads</p></li><li><p>public footpaths or rights of way</p></li><li><p>hard surfaces such as patios or decks</p></li><li><p>boundaries such as walls or fences</p></li></ul><p>If you are showing the red site outline on your drawing, it must match the red line boundary you drew earlier.</p><p>Your application may be marked as invalid if the drawings do not clearly and accurately describe the site and the changes.</p>",
            definitionImg:
              "https://api.editor.planx.uk/file/public/6brdmb6z/Site%20Plan%20Existing.svg",
          },
        },
        {
          fn: "sitePlan.proposed",
          name: "Site plan - proposed",
          rule: {
            condition: "AlwaysRequired",
          },
          moreInformation: {
            info: "<p>All applications must include a plan of the site after the changes. This plan is also known as a block plan. It should show the entire site as it looked after the changes.</p><p>If your project involves demolitions, the site plan should clearly indicate the structure to be demolished.</p><p>If your project results in the loss of existing parking provisions or impacts the existing parking layout, the site plan should show existing and proposed parking if known.</p><p>Upload scans of any physical documents rather than photos.</p>",
            policyRef:
              '<p><a target="_self" rel="noopener noreferrer nofollow" href="http://www.legislation.gov.uk/uksi/2015/595/article/7/made">The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended</a>)</p>',
            howMeasured:
              "<p>Your site plan must:</p><ul><li><p>be drawn to scale. This is usually 1:500 or 1:200 at A3 or A4 size</p></li><li><p>have a scale bar</p></li><li><p>show the direction of north</p></li><li><p>have a unique drawing reference number</p></li><li><p>be based on an up-to-date map or survey</p></li></ul><p>It should include:</p><ul><li><p>buildings including outbuildings and nearby neighbouring buildings</p></li><li><p>trees on or adjoining the site</p></li><li><p>roads</p></li><li><p>public footpaths or rights of way</p></li><li><p>hard surfaces such as patios or decks</p></li><li><p>boundaries such as walls or fences</p></li></ul><p>If you are showing the red site outline on your drawing, it must match the red line boundary you drew earlier.</p><p>Your application may be marked as invalid if the drawings do not clearly and accurately describe the site and the changes.</p>",
            definitionImg:
              "https://api.editor.planx.uk/file/public/5lytqn1y/Site%20Plan%20Proposed.svg",
          },
        },
        {
          fn: "elevations.existing",
          name: "Elevation drawing - existing",
          rule: {
            condition: "AlwaysRecommended",
          },
          moreInformation: {
            policyRef:
              '<p><a target="_self" rel="noopener noreferrer nofollow" href="http://www.legislation.gov.uk/uksi/2015/595/article/7/made">The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended</a>)</p>',
            howMeasured:
              "<p>Your elevation drawing must:</p><ul><li><p>be drawn to scale. This is usually 1:50 or 1:100</p></li><li><p>have a scale bar</p></li><li><p>have a unique drawing reference number</p></li></ul>",
            definitionImg:
              "https://api.editor.planx.uk/file/public/sj0z8l3n/Elevations%20Exiting.svg",
          },
        },
        {
          fn: "elevations.proposed",
          name: "Elevation drawing - proposed",
          rule: {
            condition: "AlwaysRecommended",
          },
          moreInformation: {
            policyRef:
              '<p><a target="_self" rel="noopener noreferrer nofollow" href="http://www.legislation.gov.uk/uksi/2015/595/article/7/made">The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended</a>)</p>',
            howMeasured:
              "<p>Your elevation drawing must:</p><ul><li><p>be drawn to scale. This is usually 1:50 or 1:100</p></li><li><p>have a scale bar</p></li><li><p>have a unique drawing reference number</p></li></ul><p></p>",
            definitionImg:
              "https://api.editor.planx.uk/file/public/uzzir6ho/Elevations%20Proposed.svg",
          },
        },
        {
          fn: "floorPlan.existing",
          name: "Floor plan - existing",
          rule: {
            condition: "AlwaysRecommended",
          },
          moreInformation: {
            info: "<p>All applications must include an existing floor plan, unless the project is only to &apos;add an outbuilding&apos;. <br><br>This shows the planning officer how the property is changed by the project.</p>",
            policyRef:
              '<p><a target="_self" rel="noopener noreferrer nofollow" href="http://www.legislation.gov.uk/uksi/2015/595/article/7/made">The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended</a>)</p>',
            howMeasured:
              "<p>Your floor plan must:</p><ul><li><p>be drawn to scale. This is usually 1:50 or 1:100</p></li><li><p>have a scale bar</p></li><li><p>show the direction of north</p></li><li><p>have a unique drawing reference number</p></li></ul>",
            definitionImg:
              "https://api.editor.planx.uk/file/public/xk5jj5mc/Floor%20Plans%20Existing.svg",
          },
        },
        {
          fn: "floorPlan.proposed",
          name: "Floor plan - proposed",
          rule: {
            condition: "AlwaysRecommended",
          },
          moreInformation: {
            info: "<p>All applications must include proposed floor plan showing the changes.</p>",
            policyRef:
              '<p><a target="_self" rel="noopener noreferrer nofollow" href="http://www.legislation.gov.uk/uksi/2015/595/article/7/made">The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended</a>)</p>',
            howMeasured:
              "<p>Your floor plan must:</p><ul><li><p>be drawn to scale. This is usually 1:50 or 1:100</p></li><li><p>have a scale bar</p></li><li><p>show the direction of north</p></li><li><p>have a unique drawing reference number</p></li></ul>",
            definitionImg:
              "https://api.editor.planx.uk/file/public/mri61cp1/Floor%20plans%20proposed.svg",
          },
        },
        {
          fn: "treeSurvey",
          name: "Tree survey",
          rule: {
            fn: "treeSurvey.rule",
            val: "recommended",
            operator: "Equals",
            condition: "RecommendedIf",
          },
        },
        {
          fn: "photographs.existing",
          name: "Photographs",
          rule: {
            condition: "AlwaysRecommended",
          },
          moreInformation: {
            howMeasured:
              "<p>If there are any known species inhabiting the site the photographs should provide guidance on openings for roosting and the condition of the site.</p><p></p><p>Any photos you upload may be published online as part of our planning register. Try to avoid uploading photographs that show:</p><ul><li><p>people</p></li><li><p>indoor areas</p></li><li><p>valuable items</p></li><li><p>vehicles</p></li><li><p>machinery</p></li></ul><p>In most cases, your planning officer will remove photographs that contain any of these, or anything else that they think might be sensitive or highly private. Check our privacy policy for more details.</p>",
          },
        },
        {
          fn: "otherSupporting",
          name: "Other supporting information",
          rule: {
            condition: "AlwaysRecommended",
          },
          moreInformation: {
            howMeasured:
              "<p>You can add any additional documents that could help us understand your project here.</p>",
          },
        },
        {
          fn: "heritageStatement",
          name: "Heritage Statement",
          rule: {
            fn: "HeritategStatement.rule",
            val: "recommended",
            operator: "Equals",
            condition: "RecommendedIf",
          },
          moreInformation: {
            info: "<p>If the property includes any of these heritage assets your application will need to contain a Heritage Statement to support the project:</p><ul><li><p>Conservation area</p></li><li><p>Scheduled monument</p></li><li><p>Listed buildings</p></li><li><p>World heritage site</p></li></ul>",
            policyRef:
              '<p><a target="_self" rel="noopener noreferrer nofollow" href="http://www.legislation.gov.uk/uksi/2015/595/article/7/made">The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended</a>)<br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/national-planning-policy-framework/16-conserving-and-enhancing-the-historic-environment"><br>National Planning Policy Framework, Section 16</a></p>',
            howMeasured:
              '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://historicengland.org.uk/images-books/publications/statements-heritage-significance-advice-note-12/heag279-statements-heritage-significance/">Historic England Advice Notes 12: Statements of Heritage Significance</a></p>',
          },
        },
      ],
      description:
        "<p>You must include all the files in the required files list.</p><p>You can also upload anything else that you think will help us assess your application, like photos or additional drawings. For each file you add, please tell us what it shows.</p>",
      hideDropZone: false,
    },
    type: 145,
  },
  jGHQP9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  jImvxS3FNw: {
    data: {
      val: "commercial.office",
      text: "Commercial",
    },
    type: 200,
    edges: ["KhqvCr57zL"],
  },
  jLEs1HNX6H: {
    data: {
      val: "applicant",
      text: "No",
    },
    type: 200,
    edges: [
      "jePQtsHWGM",
      "lRnk8aGAQw",
      "1Zk55jTsN1",
      "yPVZBqcc1K",
      "bwJffr36wI",
      "zHTBssREEw",
    ],
  },
  jVKAXgq0Lv: {
    data: {
      info: "<p>It is a legal requirement to publish a &apos;requisite notice&apos; of the application in a newspaper circulating in the area where the land is situated.</p><p>You can&apos;t submit an application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title:
        "You can't continue if you haven't published a notice in a local newspaper",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>If you can&apos;t notify all owners and agricultural tenants of the land, you need to publish a notice of the application in a local newspaper to the site. You can&apos;t submit an application without a declaration that you have done this.<br><br>Save and return to this application at a later time after you have given the pre-defined form to all known owners or agricultural tenants of the land.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  jX4FepJiCx: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "d",
    },
    type: 380,
  },
  jY5LKeMShO: {
    data: {
      img: "https://api.editor.planx.uk/file/public/u0lwhiv2/housetypes_endterrace.png",
      val: "residential.house.terrace",
      text: "End terrace",
    },
    type: 200,
  },
  jamOo7Wf3l: {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  jbeWtDb2ar: {
    data: {
      text: 'How to address "not include notice served using electronic communications" in the below?',
    },
    type: 100,
  },
  jePQtsHWGM: {
    data: {
      fn: "applicant.agent.form",
      val: "No",
    },
    type: 380,
  },
  jgRDYeEjRs: {
    data: {
      val: "individual",
      text: "Private individual",
    },
    type: 200,
  },
  jhR7MEjpQP: {
    data: {
      val: "lessee",
      text: "Lessee",
    },
    type: 200,
    edges: ["QOHYUup7ZS", "hUoKC88fgZ", "nZ7dLOARlb"],
  },
  jhjkoI48KI: {
    data: {
      text: "Between 1000 and 9999m2",
    },
    type: 200,
    edges: ["9aZ9nEForD"],
  },
  jispH1HMrD: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
    },
    type: 200,
    edges: ["GHMSwFczjZ"],
  },
  jpVPmXIxVx: {
    data: {
      type: "extraLong",
      title:
        "Provide details of the notices that were left in a position for less than seven days in the period of more than 21 days immediately preceding the making of the application",
      description:
        "<p>Include the name of the parish or ward, the location of the notice, and the date posted.</p>",
    },
    type: 110,
  },
  jraYadQx8q: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nwww2E2Xjo", "8UhzV77hWq"],
  },
  jzkY3Ib0Lk: {
    data: {
      fn: "applicant.ownership.ownerKnown",
      info: "<p>If you don&apos;t know the names and addresses of all the agricultural tenants of the land, on the next page you will need to describe how you have tried to find out this information.</p>",
      tags: [],
      text: "Do you know the names and addresses of all the agricultural tenants?",
      notes: "AN changed 'No, but some of them' to 'Some of them'",
      howMeasured:
        "<p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["8UHP6yZ3XY", "1JLbmOL910", "IhgUxbJ2GC"],
  },
  k4XYW9B7fi: {
    data: {
      text: "Works to agricultural holdings or forestry",
    },
    type: 200,
    edges: ["aJPFK9B7fi", "mD3Ft9B7fi", "pQcq49B7fi"],
  },
  k7Cz4QLtWN: {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
  },
  k7nh4KPDay: {
    data: {
      val: "individual",
      text: "Private individual",
    },
    type: 200,
  },
  k8ZFP9B7fi: {
    data: {
      val: "other",
      text: "Other",
    },
    type: 200,
    edges: ["qZ6879B7fi"],
  },
  kB2AwN1IO6: {
    data: {
      fn: "applicant.agent.address",
      info: "<p>This address may be published on public planning records.</p>",
      title: "Your contact address",
    },
    type: 130,
  },
  kGyQVr57zL: {
    data: {
      val: "commercial.office.other",
      text: "Something else",
    },
    type: 200,
    edges: ["mbOwaGPJuU"],
  },
  kO217QZUpQ: {
    data: {
      fn: "applicant.ownership.noticeGiven",
      info: "<p>You are required to give notice to the other owners of the land to submit this application. If you do not this application will be returned to you as invalid.</p>",
      text: "Has the applicant given requisite notice to all of the other owners of the land?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description: "<p>Answer to the best of your knowledge. </p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants your completed, pre-defined form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p>',
    },
    type: 100,
    edges: ["NXbjvdvd5Z", "O1blEvHY0c"],
  },
  kP6WjnFuTL: {
    data: {
      fn: "user.role",
      info: "<p>This will affect how we handle your data. If you are not a professional agent applying for someone else, your information will not be published as part of the public planning register.</p>",
      tags: ["toReview"],
      text: "Are you a professional planning agent?",
      notes:
        "AN - rephrased the question to make it simpler and more inclusive. \n\nPrevious content: \nWhich of these best describes you?\n- Professional agent \n- Other",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["mK0ZruLgKZ", "SXCfHPrkEA"],
  },
  kRiNnMl720: {
    data: {
      val: "environmentalImpact.scoping",
      text: "Environmental Scoping (stage 2)",
    },
    type: 200,
    edges: ["JwcIxMl720", "qMolCMl720"],
  },
  kUBrJMl720: {
    data: {
      text: "majors 16 weeks",
    },
    type: 100,
  },
  kZ9K4nuRTv: {
    data: {
      val: "lessee",
      text: "Lessee",
    },
    type: 200,
    edges: ["Qxo3IvCneq", "PJzquro4oN", "sJwvAyAaJQ"],
  },
  kd2hXMjKl2: {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  kh6UdHcptk: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      tags: ["toReview"],
      type: "extraLong",
      notes:
        'AN - reworded question for clarity and to avoid the passive voice. Previous question: What steps were taken to find out the names and addresses of the other agricultural tenants?\n\n "What steps have been taken to \n- removed hint text:\nPlease describe the steps that have been taken to find out the names and addresses of the other agricultural tenants of the land whose names and addresses are not known to you.',
      title:
        "How have you tried to find out the names and addresses of the other agricultural tenants?",
    },
    type: 110,
  },
  ki7t6yWS2I: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["fuXe0eBZhG"],
  },
  kjJEU9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["3uUq79B7fi"],
  },
  kjsjV6gLbt: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate C",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has given the requisite notice to everyone whose name and address is known to the applicant who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone else who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["UVoZ0YFBHa"],
  },
  kl9Ao9B7fi: {
    data: {
      val: "tank",
      text: "Septic tank",
    },
    type: 200,
  },
  km2Tf9B7fi: {
    data: {
      fn: "application.information.harmful",
      text: "Would disclosure of any of the information you have provided harm someone's commercial interests?",
    },
    type: 100,
    edges: ["l1GeQ9B7fi", "F5BAJ9B7fi"],
  },
  kojdsMl720: {
    data: {
      val: "ldc.proposed",
      text: "Lawful Development Certificate for proposed changes",
    },
    type: 200,
    edges: ["Wu4oQMl720", "KwmCzMl720"],
  },
  koqsB9B7fi: {
    data: {
      text: "Works to fences, gates, or walls",
    },
    type: 200,
    edges: ["VBaXB9B7fi", "TTA9r9B7fi", "IotBU9B7fi"],
  },
  kshxQ9B7fi: {
    data: {
      text: "Residential",
    },
    type: 200,
    edges: ["p2Fw09B7fi"],
  },
  kt1VH9B7fi: {
    type: 300,
    edges: ["da0b227c-e4f0-42f6-9c9e-171558fb4360"],
  },
  kyclu9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "1350",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  l1GeQ9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["9jOJP9B7fi"],
  },
  l2KWZzWuYo: {
    data: {
      val: "agent",
      text: "Me, the agent",
    },
    type: 200,
    edges: ["XakhZrTBN3"],
  },
  l5s529B7fi: {
    data: {
      val: "major.large.siteMeeting",
      text: "Site-based meeting (£1350)",
    },
    type: 200,
    edges: ["CDp3l9B7fi", "kyclu9B7fi"],
  },
  lBFoRgWFGe: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["QX3Pmod219"],
  },
  lBN432K7b1: {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  lCfRyXcbqm: {
    data: {
      fn: "applicant.type",
      tags: [],
      text: "Which of these best describes you or your organisation?",
      notes:
        "AN - removed 'or your organisation' from the hint text and added it to the question",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "GCh1PmH3vR",
      "k7Cz4QLtWN",
      "2eZ0N3YALL",
      "Qm3SvSO9Ml",
      "FSBemuDrKM",
    ],
  },
  lDYrRM3oVb: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["KR4NWrAxKE"],
  },
  lHYvRT3I6G: {
    data: {
      val: "proxy",
      text: "Me",
    },
    type: 200,
    edges: ["P804o4tRh7"],
  },
  lMy9g2xLAF: {
    data: {
      fn: "application.declaration.accurate",
      info: "<p>Any decision issued on the basis of inaccurate or knowingly incomplete information may be legally invalid.</p>",
      text: "Confirm the information in this application is correct",
      allRequired: true,
      neverAutoAnswer: false,
    },
    type: 105,
    edges: ["9ciuc2xLAF"],
  },
  lNjrHiRlcg: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      info: "<p>You are required to give notice to the other owners of the land to submit this application. If you do not this application will be returned to you as invalid.</p>",
      tags: [],
      notes:
        "AN - changed question from: What steps were taken to find out the names and addresses of the owners?\n\nDeleted hint text: Please describe the steps that have been taken to find out the names and addresses of the owners and agricultural tenants of the land.",
      title:
        "How have you tried to find out the names and addresses of the owners?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
    },
    type: 110,
  },
  lRnk8aGAQw: {
    data: {
      fn: "applicant.type",
      text: "Which of these best describes you?",
      description: "<p>Or your organisation</p>",
    },
    type: 100,
    edges: [
      "k7nh4KPDay",
      "IjzPakxp2f",
      "agBG16PbDM",
      "vjhA0IGt46",
      "JrYMhXdV9e",
    ],
  },
  lT7QTMl720: {
    data: {
      val: "pp",
      text: "Planning permission",
    },
    type: 200,
    edges: ["btgB4Ml720"],
  },
  lTQ5DMl720: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["kUBrJMl720", "oRl5EMl720"],
  },
  lXr7ZAkgUe: {
    data: {
      fn: "applicant.company.name",
      title: "Name of the charity",
    },
    type: 110,
  },
  lZvtH0zaws: {
    data: {
      val: "true",
      text: "More than 25",
    },
    type: 200,
    edges: ["v5IvcL9HRu"],
  },
  lg20zuZ6tR: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  lgj8qAZScl: {
    data: {
      val: "all",
      text: "Yes, all of them",
    },
    type: 200,
    edges: ["0soNrGI0ZM"],
  },
  lixEx1JyM6: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  ljB8Q9B7fi: {
    data: {
      val: "major.significant",
      text: "Significant major pre application",
    },
    type: 200,
    edges: ["FOtOx9B7fi"],
  },
  lmkro9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["W3T0E9B7fi"],
  },
  lrbvok2gUz: {
    data: {
      val: "499",
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["0C1tCT525x"],
  },
  lsix4ENZTQ: {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  m1ywR2xLAF: {
    data: {
      fn: "application.declaration.accurate.form",
      val: "Yes",
    },
    type: 380,
  },
  m6PbWCB1we: {
    data: {
      val: "commercial.retail.shop",
      text: "Shop",
    },
    type: 200,
  },
  mD3Ft9B7fi: {
    data: {
      fn: "proposal.ecology.livestock",
      text: "Will the development house livestock?",
    },
    type: 100,
    edges: ["DRH3H9B7fi", "vvXpq9B7fi"],
  },
  mFrdR1nkao: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["X9JzMG3Ogw", "JySwfrNHfy"],
  },
  mGlGlqZNMY: {
    data: {
      val: "commercial.retail.licensedPremises",
      text: "Off-licence",
    },
    type: 200,
  },
  mHuTl9B7fi: {
    data: {
      color: "#c1bdf9",
      content:
        "<h1><strong>Planning - Pre Application</strong></h1><p>We encourage applicants and agents to obtain pre-application advice before submitting a formal planning application. <br>The submission of a pre-application enquiry enables you to obtain clear, impartial, professional advice at an early stage, regarding key issues that should be addressed before submitting a formal planning application.</p><p>We aim to provide the pre-application advice you specifically require, proactively tailoring the service to answer the questions you&apos;ve raised.</p><p>Pre-applications can help prevent unacceptable schemes from entering the formal planning application process, saving you time and money and improve your chances of having your proposal approved.</p><p></p><h2><strong>What is it going to cost?</strong></h2><p>The cost for this type of request varies depending on the nature of your enquiry.</p><p></p><h2><strong>What we need from you</strong></h2><p>When you submit a pre-application request you will be asked to give your:</p><ul><li><p>name,</p></li><li><p>address,</p></li><li><p>contact details,</p></li><li><p>agent details (if applicable),</p></li><li><p>proposal of works,</p></li><li><p>site location, and</p></li><li><p>any other supporting documentation.</p></li></ul>",
    },
    type: 250,
  },
  mIdZBY3fLA: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  mK0ZruLgKZ: {
    data: {
      val: "agent",
      text: "Yes",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "kB2AwN1IO6", "SPRq6xeWoq", "0UIhsZcOrf"],
  },
  mOTgVsnFFy: {
    data: {
      fn: "applicant.interest.form",
      val: "None",
    },
    type: 380,
  },
  mP3iMYljkG: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  mRViARNa4U: {
    data: {
      val: "commercial.medical.careHome",
      text: "Care home",
    },
    type: 200,
  },
  mRevTOrtYj: {
    data: {
      fn: "property.type",
      text: "What type of medical or care building is it?",
    },
    type: 100,
    edges: [
      "tAEd8K9ih8",
      "2MlqAY7JKX",
      "gL3852rbg7",
      "mRViARNa4U",
      "y1vXEBLI3y",
      "UTrsADvRG0",
    ],
  },
  mWBLGfnPga: {
    data: {
      text: "[Details of everyone with an interest in the land required]",
    },
    type: 100,
  },
  maiYqknBoq: {
    data: {
      val: "proxy",
      text: "No",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "f75RXHmU92", "CukbYBECnz"],
  },
  mbOwaGPJuU: {
    data: {
      fn: "property.type",
      val: "commercial.office",
      operation: "replace",
    },
    type: 380,
  },
  miI64XivuJ: {
    data: {
      val: "occupier",
      text: "Occupier",
    },
    type: 200,
    edges: ["GqtqrmkcUl", "wv8kCpNcjF", "gu4Fo8qMPp", "aDKRC5ByP6"],
  },
  moLaWWxlO5: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["Jzcu3mMc78", "BSjdOrnGil"],
  },
  mqo1LRHlXn: {
    data: {
      fn: "proposal.visibility.public",
      info: "<p>For certain projects, we may need to visit your site to assess your application. During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "Can a planning officer see the works from public land?",
      howMeasured:
        "<p>Public land refers to areas that are open and accessible to everyone, such as roads, sidewalks, paths for pedestrians, horse riders (bridleways), or any other land that is available for public use.</p>",
    },
    type: 100,
    edges: ["syRvMx3CVa", "tjuGcGAMhC"],
  },
  myMKlkJGYJ: {
    data: {
      text: "[Details of everyone with an interest in the land required]",
    },
    type: 100,
  },
  myiyn9B7fi: {
    data: {
      text: "I don't know",
    },
    type: 200,
  },
  n1aj69B7fi: {
    data: {
      fn: "property.ecology.otherSpecies",
      text: "Are there any known species inhabiting the site?",
    },
    type: 100,
    edges: ["kjJEU9B7fi", "jGHQP9B7fi"],
  },
  n5UECLQUGq: {
    data: {
      val: "lessee",
      text: "Lessee",
    },
    type: 200,
    edges: ["8iI5ZIhiPT", "wv8kCpNcjF", "gu4Fo8qMPp", "aDKRC5ByP6"],
  },
  n9ml4V0KIp: {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  nAQtDxo6c4: {
    data: {
      val: "commercial.industrial.manufacturing",
      text: "Manufacturing",
    },
    type: 200,
  },
  nAim29B7fi: {
    data: {
      text: "🚨 Should include guidance on definition and what is to be provided🚨",
    },
    type: 100,
  },
  nEpn3Arfmr: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["7EBBoe09FA"],
  },
  nFX7yRxB7S: {
    data: {
      text: "Someone else",
    },
    type: 200,
  },
  nFamiJpqwW: {
    data: {
      val: "charity",
      text: "Charity",
    },
    type: 200,
    edges: ["aFTbF2MZxs"],
  },
  nNw3oBYWf9: {
    data: {
      val: "commercial.leisure.entertainment",
      text: "Entertainment",
    },
    type: 200,
  },
  nU6aB9B7fi: {
    data: {
      fn: "service.type",
      val: "major.significant",
    },
    type: 380,
  },
  nZ7dLOARlb: {
    data: {
      fn: "property.ownership.ownerTwo.noticeGiven",
      tags: [],
      text: "Have you notified the lessee?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["7gVLmJ50KB", "OrTAj69RcJ"],
  },
  nkUb8igR4m: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      info: "<p>You are required to give notice to the other owners of the land to submit this application. If you do not this application will be returned to you as invalid.</p>",
      title:
        "What steps were taken to find out the names and addresses of the owners?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Please describe the steps that have been taken to find out the names and addresses of the owners and agricultural tenants of the land.</p>",
    },
    type: 110,
  },
  nwww2E2Xjo: {
    data: {
      tags: [],
      title: "What newspaper was the notice of the application published in?",
    },
    type: 110,
  },
  o63GS9B7fi: {
    data: {
      fn: "property.constraints.planning",
      info: "<p>You need to complete a flood risk assessment with your planning application if your development is either in:</p><ul><li><p>flood zone 2 or 3</p></li><li><p>flood zone 1 and the site is more than 1 hectare in size</p></li></ul>",
      text: "Which flood zone is the property in?",
      description:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" class="govuk-link" href="https://flood-map-for-planning.service.gov.uk/?_ga=2.208951954.1814816420.1687779095-1602504218.1661163784">Find out what flood zone you’re in</a>.</p>',
    },
    type: 100,
    edges: ["hvaAM9B7fi", "HAJga9B7fi", "FBEdV9B7fi"],
  },
  o75OW9ozay: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["JhvkdECf4G", "QX3Pmod219", "KTD9JlDmXP"],
  },
  o8ZbZ2xLAF: {
    data: {
      fn: "application.declaration.accurate.form",
      val: "Yes",
    },
    type: 380,
  },
  oAh53Sdhlf: {
    data: {
      val: "commercial.community.cemetery",
      text: "Cemetery or crematorium",
    },
    type: 200,
  },
  oDFphCABwe: {
    data: {
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  oE0KLxVpYQ: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "JwF5C2XHl7"],
  },
  oGHsuRujf8: {
    data: {
      text: "At least 10000m2",
    },
    type: 200,
    edges: ["lBN432K7b1"],
  },
  oGyVlei0Qr: {
    data: {
      val: "all",
      text: "Yes, all of them",
    },
    type: 200,
    edges: ["YQMdXf0zhd"],
  },
  oIqbT6ofX4: {
    data: {
      val: "object.religious.building.gurdwara",
      text: "Gurdwara",
    },
    type: 200,
  },
  oQG15KUGNi: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
    edges: ["VthxviIaTD"],
  },
  oRl5EMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 16 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 16 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  oSpLRyT3Dn: {
    data: {
      val: "none",
      text: "No, none of them",
    },
    type: 200,
    edges: ["7dztP5MsZy", "nkUb8igR4m", "mFrdR1nkao", "dmyNsdv2wk"],
  },
  oVk7XJPH2B: {
    data: {
      fn: "property.ownership.ownerTwo.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the occupier.</p>",
    },
    type: 110,
  },
  odvUYWBsxD: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["Bmd2C0sO6H"],
  },
  oiVGPjA1Of: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>Your application must include a statement describing the current ownership of the land subject to this application.</p><p>It is an offence to knowingly or recklessly issue a certificate which purports to comply with those requirements and which contains a statement which is false or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate A",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>I certify that:</p><ul><li><p>on the day 21 days before the date of this application nobody except myself was an owner of any part of the land to subject to this application</p></li><li><p>none of the land to which the application relates is or forms part of an agricultural holding</p></li></ul>",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural holding</strong> refers to land with agricultural tenants. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>",
    },
    type: 100,
    edges: ["vf4ziR7Up1"],
  },
  ok2w6dmuEw: {
    data: {
      val: "object.religious.building.lychGate",
      text: "Lych Gate",
    },
    type: 200,
  },
  opeW5owgtD: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      tags: [],
      type: "extraLong",
      notes:
        "AN - deleted hint text: Please describe the steps that have been taken to find out the names and addresses of the other owners and agricultural tenants of the land whose names and addresses are not known to the applicant.",
      title:
        "What steps were taken to find out the names and addresses of the other owners and agricultural tenants?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
    },
    type: 110,
  },
  opuz96cgSY: {
    data: {
      text: "Should this be Reg 3 as the LPA is developing the site?",
    },
    type: 100,
  },
  orpJWHhk3f: {
    data: {
      val: "commercial.education.nursery",
      text: "Nursery",
    },
    type: 200,
  },
  ovwCodcZSH: {
    data: {
      text: "Not sole owner AND no agricultural tenants",
    },
    type: 100,
  },
  p0PzY9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  p0V5i2Xmrh: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VPEyj9RnU8"],
  },
  p11Ci13HQ3: {
    data: {
      fn: "applicant",
      title: "Your contact details",
    },
    type: 135,
  },
  p2Fw09B7fi: {
    data: {
      tags: [],
      text: "How many new homes will be created?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "ARPYo9B7fi",
      "t4dVw9B7fi",
      "SWnMP9B7fi",
      "Dszw9yiV0C",
      "RsYb9MikxW",
    ],
  },
  p5k5uSp9A3: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["oVk7XJPH2B"],
  },
  p6pcH5H3r9: {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess the application. If we do, who should we contact to arrange the visit?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["9U2ADk9SOu", "BCVghMFVdf", "ZbKC18c3Bm"],
  },
  pGl5Z98nSJ: {
    data: {
      fn: "floorArea.500OrMore",
      formula: "largerEq(proposal.area.internal.new, 500)",
      defaults: {
        "proposal.area.internal.new": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  pHkPS4JTwi: {
    data: {
      fn: "property.ownership.ownerTwo.noticeGiven",
      text: "Have you notified the person with an interest in the land?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["S5nWpyWVpK", "rEGQn1MuQQ"],
  },
  pLk2UPJemp: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["EJSM3VYGwu"],
  },
  pNZigFwL0f: {
    data: {
      fn: "applicant.address.sameAsSiteAddress",
      val: "No",
    },
    type: 380,
  },
  pPp0oBFX6F: {
    data: {
      text: "The same local planning authority as the applicant",
    },
    type: 200,
    edges: ["FHdSt1JW1i"],
  },
  pPtprJc7QL: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["DgoeSGmo91", "QX3Pmod219", "rPLPRlNHxv", "cJxMNiqSqg"],
  },
  pQcq49B7fi: {
    data: {
      fn: "proposal.storage.slurry",
      text: "Will the development involve storage of slurry?",
    },
    type: 100,
    edges: ["DApzb9B7fi", "9zL2w9B7fi"],
  },
  pTQqtESlmK: {
    data: {
      fn: "applicant.ownership.interest",
      info: "<p>Applications for planning permission require notice to be given to anyone who 21 days before the date of the application was an owner of any of the land to which the application relates.</p>",
      text: "Is the applicant the sole owner of the land?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Please describe the applicant&apos;s situation as it was 21 days before the date of this application.</p>",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land which forms part of the site area to which the application relates. If this includes land from more than one property you should consider the owners of all the properties here.</p><h2><br>What about married or partnered couples?</h2><p>If both spouses are making the application, they are in sole ownership. If only one spouse is making the application, you should answer no, since the applicant will need to provide notice to their spouse as the other owner.</p>",
    },
    type: 100,
    edges: ["iNs05gNF4H", "hmQKQrVMC8"],
  },
  pUpoxdQoL7: {
    data: {
      val: "pp",
      text: "Apply for planning permission",
    },
    type: 200,
    edges: ["BdXeZDGaRO", "8ZB2YroEhH"],
  },
  pVvd6pt5kg: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["hh5Y3jthQ3"],
  },
  pX85zKqsM1: {
    data: {
      val: "other",
      text: "Something else",
    },
    type: 200,
    edges: ["zi2IeYtCaC", "NqUsSnLvNm", "CB9ix4WNg5", "6JPimyq4li"],
  },
  pXOWJjLNWk: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["IGRkDbAPrv"],
  },
  pcki29B7fi: {
    data: {
      val: "major.significant.written",
      text: "Written advice (£1350)",
    },
    type: 200,
    edges: ["UEolJ9B7fi"],
  },
  pfq6wDilsB: {
    data: {
      val: "1000",
      text: "Between 1000 and 9999m2",
    },
    type: 200,
    edges: ["0C1tCT525x", "D1NIUv2G73"],
  },
  piUhBlIaAQ: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      tags: [],
      type: "extraLong",
      notes: "AN - deleted hint text",
      title:
        "What steps were taken to find out the names and addresses of the other agricultural tenants?",
    },
    type: 110,
  },
  pk3SFkfK0r: {
    data: {
      val: "object.religious.building.stupa",
      text: "Stupa",
    },
    type: 200,
  },
  plDFDp62Nx: {
    data: {
      text: "Between 500 and 999 square metres",
    },
    type: 200,
    edges: ["3P5FBO9BZI"],
  },
  pmJqYol2OR: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["sZ07yEc3fB"],
  },
  pz31k9B7fi: {
    data: {
      fn: "application.fee.payable",
      formula: "1010",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  q2bzEirYvg: {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  q64TM9B7fi: {
    data: {
      fn: "proposal.site",
      info: "<p>This outline identifies the location of the proposed changes on a map. This information is required for all planning applications. It is sometimes called a &apos;red line drawing&apos; or &apos;location plan&apos;.</p>",
      title: "Confirm your location plan",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2015/595/article/7">The Town and Country Planning (Development Management Procedure) (England) Order 2015</a>,</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/collections/planning-practice-guidance">Planning Practice Guidance (PPG)</a></p>',
      description:
        "<p>The red line shown below should include:</p><ul><li><p>the outline of your property boundary</p></li><li><p>any works outside the property boundary</p></li><li><p>areas that will be closed off or you&apos;ll need access to during the works</p></li></ul><p>If the red line already includes all these, tap continue. If it does not, tap <em>More information</em> for guidance on how to amend or redraw the outline.</p>",
      howMeasured:
        '<p>We have pre-populated the map with a red outline that includes the entire property, using information from Land Registry.</p><p>In some cases, this outline might not include all the works or the areas that will be closed off. This could be the case if you are proposing works to a public highway (such as a dropped kerb), doing works that involve multiple properties, or works to a building that is part of a larger estate.</p><p>In these cases, you should amend the red outline by dragging the edges, or erase it by clicking the 🗑-icon on the map and draw a new outline.</p><p></p><h1>How to draw and amend the outline</h1><ol><li><p>Move the cursor to the corner you want to start with and click or tap once.</p></li><li><p>Move the cursor to the next corner and click or tap.</p></li><li><p>Repeat until you have the shape you need.</p></li><li><p>Click or tap the last corner again to stop drawing.</p></li><li><p>To amend the outline, click or tap on a line and drag it into a new position.</p></li></ol><img src="https://api.editor.planx.uk/file/public/dni98ojg/Draw_Outline_2.gif">',
      hideFileUpload: false,
      titleForUploading: "Upload a location plan",
      descriptionForUploading:
        "<p>Your location plan must:</p><ul><li><p>be based on an accurate, recognisable map</p></li><li><p>be drawn to a scale, labelled, and/or marked with a scale bar</p></li><li><p>show the site outline in red</p></li><li><p>include a<strong> </strong>north point</p></li></ul>",
    },
    type: 10,
  },
  q7ToU9B7fi: {
    data: {
      val: "50",
      text: "50 or more",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  q7bavn1mz3: {
    data: {
      val: "commercial.education.school.secondary",
      text: "Secondary school",
    },
    type: 200,
  },
  qCIwd2xLAF: {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am an employee of City of Doncaster Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  qEPAzJoB8Y: {
    data: {
      val: "commercial.agriculture",
      text: "Agriculture",
    },
    type: 200,
  },
  qFNPCHSqnc: {
    data: {
      tags: [],
      color: "#ffdd00",
      title: "Requisite notice publication requirements",
      description:
        '<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated. You cannot submit an application without a declaration that you have done so.</p><p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p>You can return to this application at a later time after you have published the required notice in a newspaper circulating in the area where the land that the application relates to is situated. This notice must have been published within 21 days of the date of the application.</p>',
      resetButton: true,
    },
    type: 8,
  },
  qMolCMl720: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Application sent",
      moreInfo: "<p> </p>",
      nextSteps: [
        {
          title: "Checks",
          description:
            "We will check your application and contact you if there are any errors or missing information.",
        },
        {
          title: "Consultation with neighbours and experts",
          description:
            "We will tell the neighbours of the site and in some cases, subject experts about your project. For example Tree Officers or the Environment Agency. They will have the chance to make comments.",
        },
        {
          title: "Assessment",
          description:
            "If there are any objections, we will assess your application against the relevant planning legislation. We will contact you if we need more information.",
        },
        {
          title: "Site visit",
          description:
            "We may need to visit the site. If we do, we will contact you to arrange a date and time.",
        },
        {
          title: "Decision",
          description:
            "You can usually expect a decision in 5 weeks if there are no errors or missing information. If we need more time to make a decision, we will contact you to agree this.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:tsi@doncaster.gov.uk">tsi@doncaster.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 5 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  qS5WXN97G5: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the company",
    },
    type: 110,
  },
  qW1dfKGBvj: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
    },
    type: 100,
    edges: ["bBe3BvToEk", "57y9t5HzPq"],
  },
  qZ6879B7fi: {
    data: {
      fn: "proposal.flood.surfaceWaterDisposal.description",
      type: "long",
      title: "Please describe the surface water disposal arrangements",
    },
    type: 110,
  },
  qbw0sbnonq: {
    data: {
      fn: "applicant.ownership.noticePublished.date",
      max: "2200-12-31",
      min: "1900-01-01",
      tags: [],
      title: "When was the notice published in the newspaper?",
    },
    type: 120,
  },
  qf8O79B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  qgpOc9B7fi: {
    data: {
      fn: "newDwellings.moreThan25",
      tags: [],
      formula: "largerEq(proposal.newDwellings.number, 26)",
      samples: {},
      defaults: {
        "proposal.site.area": "1",
        "newDwellings.number": "1",
        "proposal.newDwellings.number": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  qpPwF9B7fi: {
    data: {
      fn: "floorArea.10000OrMore",
      formula: "largerEq(proposal.area.internal.new, 10000)",
      samples: {},
      defaults: {
        floorArea: "1",
        "proposal.site.area": "1",
        "newDwellings.number": "1",
        "proposal.area.internal.new": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  qqDK1Ml720: {
    data: {
      val: "ldc.condition",
      text: "Lawful Development Certificate (lawful not to comply with condition)",
    },
    type: 200,
    edges: ["Wu4oQMl720", "AuHE6Ml720"],
  },
  qrBqLm0yes: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
    edges: ["ue6pHPPWSn", "aE3y9pavRx", "uFKnvenGK3"],
  },
  quxSG9B7fi: {
    data: {
      fn: "proposal.renewables.decommissioning",
      type: "long",
      title:
        "Please describe the proposed arrangements for the decommissioning phase",
    },
    type: 110,
  },
  r13mGZW1ZU: {
    data: {
      fn: "applicant.ownership.ownerKnown.stepsTaken",
      tags: [],
      type: "extraLong",
      notes:
        "AN - reworded question and removed hint text in similar way to the other question in this section",
      title:
        "How have you tried to find out the names and addresses of the agricultural tenants?",
    },
    type: 110,
  },
  r2Y8ydTsCn: {
    data: {
      val: "commercial.leisure.entertainment.exhibition",
      text: "Exhibition centre",
    },
    type: 200,
  },
  r2nOxy3raM: {
    data: {
      fn: "applicant.agent.form",
      val: "Yes",
    },
    type: 380,
  },
  r7VkF9B7fi: {
    data: {
      val: "major.significant.scoping",
      text: "Free 1 Hour Scoping meeting (£0)",
      description:
        "This is a verbal discussion, held on MS Teams on the principle of a proposal. A paid for pre-application should follow these discussions.",
    },
    type: 200,
    edges: ["GW6539B7fi"],
  },
  rA91DcAco4: {
    data: {
      fn: "property.ownership.ownerOne.address",
      tags: [],
      title: "What is the address of the lessee?",
    },
    type: 130,
  },
  rEBkiacgz8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["55Lo64cfZI", "QX3Pmod219", "jDtfCeqX5F", "kjsjV6gLbt"],
  },
  rEGQn1MuQQ: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["shidgZpBYi"],
  },
  rOj3gIBZny: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["0wmnKyNNPC"],
  },
  rPLPRlNHxv: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must has been published within 21 days of the date of the application.</p>",
    },
    type: 100,
    edges: ["jraYadQx8q", "OeJ2SDwxcO"],
  },
  raN0h9B7fi: {
    data: {
      tags: [],
      text: "Which of these best describes your project?",
      howMeasured:
        "<p><strong>Works or extension to a house </strong>includes projects to alter or enlarge a single house or works within the garden of a house.</p><p></p><p><strong>Works or extensions to a flat </strong>includes projects to alter or enlarge a single flat. A flat is a separate and self-contained dwelling constructed or adapted for use for residential purposes and forming part of a building from some other part of which it is divided horizontally. Flats have to be contained within a dwelling with at least two storeys.</p><p></p><p><strong>New buildings &amp; structures</strong> includes residential, non-residential, and mixed developments.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "usSrb9B7fi",
      "MPkpf9B7fi",
      "koqsB9B7fi",
      "DXpeo9B7fi",
      "Sq8TC9B7fi",
      "k4XYW9B7fi",
      "6SIxU9B7fi",
      "FS40F9B7fi",
      "j2Z3DB2G57",
      "vTCSt9B7fi",
      "9Qk4e9B7fi",
    ],
  },
  rhyuh9B7fi: {
    data: {
      fn: "application.information.sensitive.reason",
      tags: [],
      type: "long",
      title: "Describe the sensitive information",
    },
    type: 110,
  },
  s1v8iYuYxU: {
    data: {
      fn: "property.ownership.ownerTwo.name",
      title: "What is the full name of the owner?",
    },
    type: 110,
  },
  s5FVm9B7fi: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  sC6xU05kTv: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  sJwvAyAaJQ: {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      tags: [],
      text: "Have you notified the lessee?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["8asiW3ZHP7", "pXOWJjLNWk"],
  },
  sMqkqblUu7: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VUXWhTcInQ"],
  },
  sUm5C6VOJ7: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["I7lDTF4k3E", "CFzmsa3sQP"],
  },
  sY80TP8rIv: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["RP2nS5ezvR", "iA1xE7JB5g"],
  },
  sYZiGbSwXS: {
    data: {
      fn: "property.type",
      text: "What type of property is it?",
    },
    type: 100,
    edges: [
      "U771mX7pcX",
      "GhtCWiIfnx",
      "WViyJ3YQxi",
      "SKHnXGOeXP",
      "a0OE4T9hhz",
      "bKyYzKGOAe",
      "TEojcnNYlP",
      "5lzcg8luJT",
      "3FiKmXz0Ct",
    ],
  },
  sZ07yEc3fB: {
    data: {
      info: "<p>It is a legal requirement to post &apos;requisite notice&apos; in every parish or ward within which there is situated any part of the land to which the application relates.</p><p>You can&apos;t submit the application without a declaration that you have done this.</p>",
      color: "#ffdd00",
      title: "You can't continue if you haven't posted 'requisite notice'",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>Save and return to this application at a later time after you have posted the pre-defined notice in at least one place in every parish or ward within which there is situated any part of the land to which the application relates.</p>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means a pre-defined notice, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: true,
    },
    type: 8,
  },
  sfQ3A9csng: {
    data: {
      text: "Section 7 of the Planning (Listed Buildings and Conservation Areas) Act 1990",
    },
    type: 100,
  },
  shidgZpBYi: {
    data: {
      fn: "property.ownership.ownerTwo.noNoticeReason",
      type: "long",
      title: "Why not?",
      description:
        "<p>Explain why you have been unable to notify the person with an interest in the land.</p>",
    },
    type: 110,
  },
  sm6cB9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  smis3rgjOR: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["5VBDiKP3Ii", "QX3Pmod219", "BjmH8uTiYk"],
  },
  snkEVxWmUW: {
    data: {
      fn: "applicant.ownership.ownerKnown",
      info: "<p>If the applicant doesn&apos;t know the names and addresses of all the agricultural tenants of the land, on the next page you will need to describe how they have tried to find out this information.</p>",
      tags: [],
      text: "Do you know the names and addresses of all owners and agricultural tenants?",
      notes:
        "AN - changed an answer for clarity. Previous answer: No, but some of them",
      howMeasured:
        "<p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Land</strong> refers to any land that forms part of the site area that is the subject of the application. If this includes land from more than one property you will need to contact all of the owners and tenant of each of the properties.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p><p>Whether a contract is an agricultural tenancy is determined by:</p><ul><li><p>the terms of the tenancy,</p></li><li><p>the planned or actual use of the land, and</p></li><li><p>any other relevant circumstances.</p></li></ul><p>Normally, if most of the land comprised in a contract of tenancy is used as agricultural land for the purposes of a trade or business, it is an agricultural tenancy.</p><p>Sometimes agricultural tenancy can apply to land that is not commonly understood as agricultural, for example aquaculture. Seek advice from a solicitor if you think the use of the land comprised in a contract of tenancy could legally be agricultural.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["oGyVlei0Qr", "GHw8G2XmaC", "SWPofZTDDZ"],
  },
  stgI7eGnnH: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["8obYua4MtY"],
  },
  syRvMx3CVa: {
    data: {
      val: "true",
      text: "Yes, it's visible from the road or somewhere else",
    },
    type: 200,
  },
  t1cJQIk4tq: {
    data: {
      fn: "property.ownership.ownerTwo.name",
      title:
        "What is the full name of the person with an interest in the land?",
    },
    type: 110,
  },
  t2EmfnFsLB: {
    data: {
      val: "10000",
      text: "At least 10000m2",
    },
    type: 200,
    edges: ["nU6aB9B7fi"],
  },
  t4dVw9B7fi: {
    data: {
      text: "Between 26 and 49",
    },
    type: 200,
    edges: ["9A0JjDN1BY"],
  },
  t7l1q6lUzV: {
    data: {
      val: "pp.full",
      text: "Full planning permission",
    },
    type: 200,
    edges: ["zIm6w1iejy"],
  },
  t91Q7UY3HN: {
    data: {
      fn: "property.ownership.ownerOne.noticeGiven",
      text: "Have you notified the owner?",
      description:
        "<p>Anyone with an interest in the land should be notified before submitting this application.</p>",
    },
    type: 100,
    edges: ["ztkjURtTj9", "pLk2UPJemp"],
  },
  t99ty9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  tAEd8K9ih8: {
    data: {
      val: "commercial.medical.GP",
      text: "Doctors surgery / clinic (GP)",
    },
    type: 200,
  },
  tFH92t2HOk: {
    data: {
      val: "agent",
      text: "Yes",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "RA22yIIDzp", "aYIXsyr8Ji"],
  },
  tGo24tuYYD: {
    data: {
      text: "Have all notices been left in position for not less than seven days in the period of 21 days immediately preceding the making of the application?",
    },
    type: 100,
    edges: ["AOo93WVTqB", "gCvKbbJe0i"],
  },
  tLQQK9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  tM7xu5U0Yr: {
    data: {
      fn: "property.type",
      val: "commercial.leisure",
      operation: "replace",
    },
    type: 380,
  },
  tMFJb23JG2: {
    data: {
      text: "Between 1000 and 9999m2",
    },
    type: 200,
    edges: ["d3VDtJcupX"],
  },
  tP9hXISP5p: {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  tQWCVmwqgU: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  tSE9Xv5Pea: {
    data: {
      val: "occupier",
      text: "Occupier",
    },
    type: 200,
    edges: ["2bAMAWThgA", "uQUV6efrDa", "btOZaPrGqg"],
  },
  tULyhILOyh: {
    data: {
      val: "true",
      text: "The applicant certifies the above",
    },
    type: 200,
  },
  tWi3okGBNe: {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  tYckBGwBFp: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["P6jcHXBLnj"],
  },
  tgtoa2xLAF: {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am an elected member for City of Doncaster Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  tjuGcGAMhC: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  tpwgMBXkRs: {
    data: {
      fn: "siteArea05haOrMore",
      text: "Is the site area 0.5 hectares or more?",
    },
    type: 100,
    edges: ["v4v1TkepaP", "Zj2JuxK8SA"],
  },
  tt1b19B7fi: {
    data: {
      val: "drainageSystem",
      text: "Sustainable drainage system",
    },
    type: 200,
  },
  ttEt3KA3Wl: {
    data: {
      fn: "applicant.siteContact",
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  ttjXS9B7fi: {
    type: 300,
    edges: ["a1cb7594-3e70-4206-bb59-21985ff19dee"],
  },
  tulIlEizWy: {
    data: {
      text: "Less than 500m2",
    },
    type: 200,
    edges: ["moLaWWxlO5"],
  },
  twOdAbGD0c: {
    data: {
      val: "commercial.education.university",
      text: "University",
    },
    type: 200,
  },
  u3S0aLjGaJ: {
    data: {
      val: "true",
      text: "Between 500 and 999m2",
    },
    type: 200,
    edges: ["9iMBkxrDfF"],
  },
  u6Fz8wasTd: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VGMTbaooaO", "f9ecsFngUQ"],
  },
  u74UC2xLAF: {
    data: {
      fn: "application.declaration.connection.description",
      type: "long",
      title: "Describe your connection",
      description:
        "<p>Provide details of their name, role, and your connection to them.</p>",
    },
    type: 110,
  },
  u8sk8XvFhU: {
    data: {
      text: "1 to 9",
      description: "19",
    },
    type: 200,
  },
  uFKnvenGK3: {
    data: {
      fn: "application.type",
      text: "What type of application is this?",
    },
    type: 100,
    edges: ["t7l1q6lUzV", "dstHNRpcyt"],
  },
  uQUV6efrDa: {
    data: {
      fn: "property.ownership.ownerTwo.address",
      title: "What is the address of the occupier?",
    },
    type: 130,
  },
  uU0Ii9B7fi: {
    data: {
      color: "#ffebeb",
      title: "Freedom of Information Act",
      description:
        "<p>Disclosure of the information you have provided may be requested by a third party under the Freedom of Information Act 2000. If so, the Council is obliged to determine whether it would be appropriate to release it, or whether it should be withheld under one of the exemptions under the Act. </p><p>To assist the council in this exercise please answer the following questions.</p><p>Whilst your views will be taken in to account, ultimately the Council reserves the right to determine whether the information should be withheld or released.</p>",
      resetButton: false,
    },
    type: 8,
  },
  ua6mDtxpWH: {
    data: {
      fn: "property.type",
      text: "What type of transport property is it?",
    },
    type: 100,
    edges: [
      "FJnLFg4GBi",
      "6TxMlBZqzW",
      "KelsJUMvcF",
      "fHWLxi5ejZ",
      "cR39C6xDzK",
      "ABfyMaziTo",
      "yScStbKFow",
    ],
  },
  uaUmlSCJ2v: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "c",
    },
    type: 380,
  },
  ue6pHPPWSn: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the organisation",
    },
    type: 110,
  },
  ufiTceRFpY: {
    data: {
      text: "How much new floor area will be created by the development?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["2ApgIvwpxV", "tMFJb23JG2", "HhTDXBPeR4", "gejXlV8gjI"],
  },
  uiZYaADDzd: {
    data: {
      val: "all",
      text: "Yes, all of them",
    },
    type: 200,
    edges: ["NYNfRTFhgV"],
  },
  ullcc9B7fi: {
    data: {
      fn: "floorPlan.existing.rule",
      val: "recommended",
    },
    type: 380,
  },
  un5nyuzbwq: {
    data: {
      fn: "service.type",
      val: "major.significant",
      operation: "replace",
    },
    type: 380,
  },
  usSrb9B7fi: {
    data: {
      text: "Works or extensions to a house",
    },
    type: 200,
    edges: ["0T5Mr9B7fi", "OobP29B7fi", "e8K0K9B7fi", "3uUq79B7fi"],
  },
  uvknt9B7fi: {
    data: {
      title: "Pay and send",
    },
    type: 360,
  },
  uxRJJ2xLAF: {
    data: {
      fn: "application.declaration.connection.description",
      type: "long",
      title: "Describe your connection",
      description: "<p>Provide details of your role within the council</p>\n",
    },
    type: 110,
  },
  v3xqNwqJ5h: {
    data: {
      fn: "siteArea1And499ha",
      text: "Is the site area between 1 and 4.99 hectares?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["nEpn3Arfmr", "drgTHm6Hx8"],
  },
  v4v1TkepaP: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["C1Lx39B7fi"],
  },
  v5IvcL9HRu: {
    data: {
      fn: "siteArea5haOrMore",
      text: "Is the site area 5 hectares or more?",
    },
    type: 100,
    edges: ["Td03cxtrHI", "tQWCVmwqgU"],
  },
  v9MhybjSFf: {
    data: {
      fn: "property.type",
      text: "What type of land is it?",
    },
    type: 100,
    edges: [
      "NRxZatvY3G",
      "fFaIGwurhW",
      "xpaP7v9BUG",
      "Y2kRmeO81E",
      "yRuZtDETJk",
      "AhFG90gq5e",
      "02aNXeNi17",
      "vfA4cZoPKS",
      "b6Bd8rgmZ8",
      "VQeVVLKA7Q",
      "duTwH18KKr",
    ],
  },
  vCXjRYe7fG: {
    data: {
      fn: "applicant.ownership.noticePublished.newspaperName",
      type: "short",
      title:
        "What newspaper has the notice of the application been published in?",
    },
    type: 110,
  },
  vTCSt9B7fi: {
    data: {
      text: "Applications other than building works",
    },
    type: 200,
    edges: ["aJPFK9B7fi", "SxUBh9B7fi", "w1Niv9B7fi"],
  },
  vUwbhBmVob: {
    data: {
      val: "commercial.education.school",
      text: "School",
    },
    type: 200,
  },
  vXLzCpHPRs: {
    data: {
      text: "Other",
    },
    type: 200,
    edges: ["sYZiGbSwXS"],
  },
  vf4ziR7Up1: {
    data: {
      val: "true",
      text: "I certify the above",
    },
    type: 200,
  },
  vfA4cZoPKS: {
    data: {
      val: "land.water",
      text: "Water",
    },
    type: 200,
  },
  vh9eg9B7fi: {
    data: {
      fn: "application.information.sensitive",
      tags: [],
      text: "Is any of the information you have provided sensitive?",
    },
    type: 100,
    edges: ["68VY19B7fi", "dTwK39B7fi"],
  },
  vjhA0IGt46: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
  },
  vpdhxMl720: {
    data: {
      val: "amendment.nonMaterial",
      text: "Non-material amendment",
    },
    type: 200,
    edges: ["YddqZMl720", "QEGHGMl720"],
  },
  vvXpq9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  vwLsi2H7oK: {
    data: {
      val: "commercial.leisure.library",
      text: "Library",
    },
    type: 200,
  },
  w1Niv9B7fi: {
    data: {
      fn: "proposal.renewables",
      text: "Does the proposal involve renewable energy equipment?",
    },
    type: 100,
    edges: ["ZJeyJ9B7fi", "tLQQK9B7fi"],
  },
  w4FJRRanh7: {
    data: {
      fn: "property.ownership",
      val: "Reg.3LPA",
      operation: "replace",
    },
    type: 380,
  },
  w8ANc9B7fi: {
    data: {
      text: "No",
    },
    type: 200,
  },
  w9eTC9B7fi: {
    data: {
      fn: "proposal.use.mixed",
      text: "Are you proposing multiple or mixed uses of the property?",
    },
    type: 100,
    edges: ["2GzL79B7fi", "8feMc9B7fi"],
  },
  wDw50T0VAl: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  wHPn29B7fi: {
    data: {
      val: "nonMajor.written",
      text: "Written advice (£450)",
    },
    type: 200,
    edges: ["MkLgE9B7fi"],
  },
  wPClDaAv9p: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VPEyj9RnU8"],
  },
  we9rNcNDfv: {
    data: {
      fn: "land.use.proposed.description",
      type: "long",
      title: "What is the proposed use of the land?",
    },
    type: 110,
  },
  wenuhnHnzR: {
    data: {
      val: "commercial.office.workspace.film",
      text: "Film studio",
    },
    type: 200,
  },
  wkNZj4EJuR: {
    data: {
      val: "object.religious.building.abbey",
      text: "Abbey",
    },
    type: 200,
  },
  wpPfWN3xWK: {
    data: {
      text: "Sole owner",
    },
    type: 300,
    edges: ["GPy5gPhULZ"],
  },
  wrqIOaoad4: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["QX3Pmod219"],
  },
  wv8kCpNcjF: {
    data: {
      fn: "property.ownership.numberOfOwners",
      val: "one",
    },
    type: 380,
  },
  wvSu1lmvFM: {
    data: {
      fn: "application.type",
      text: "What type of application is this?",
    },
    type: 100,
    edges: [
      "BpgBkSjjo2",
      "22R16OEFAb",
      "cOxTGeWlYk",
      "bduOEnQ4zL",
      "IZTzISERe3",
    ],
  },
  wvyoRpCjBL: {
    data: {
      fn: "applicant.address",
      title: "Your contact address",
      description: "<p>This information will not be published.</p>",
    },
    type: 130,
  },
  wyVAXQE1Rp: {
    data: {
      fn: "service.type",
      val: "major.large",
      operation: "replace",
    },
    type: 380,
  },
  x0JmWPsaEP: {
    data: {
      fn: "applicant.ownership.noticePublished",
      info: "<p>If you have been unable to notify all owners and agricultural tenants of the land, it is a legal requirement to publish a notice of the application in a newspaper circulating in the area where the land is situated.</p>",
      tags: [],
      text: "Has a notice of the application been published in a newspaper circulating in the area where the land is situated?",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        "<p>This notice must have been published within 21 days of the date of the application.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["NvnalMJ1d0", "Y8XHAX4vhC"],
  },
  x0fKL9B7fi: {
    data: {
      fn: "service.type",
      val: "major",
    },
    type: 380,
  },
  x4UHXAuCAh: {
    data: {
      text: "not needed here, in the main branch of service",
    },
    type: 100,
  },
  x82Ln9B7fi: {
    data: {
      text: "Non Residential",
    },
    type: 200,
    edges: ["FYdJF9B7fi", "bvbmwMw2Zd"],
  },
  xCcQJDKF1l: {
    data: {
      val: "commercial.retail.services",
      text: "Bank or financial service",
    },
    type: 200,
  },
  xHPFIDDV1V: {
    data: {
      val: "commercial.storage.distribution",
      text: "Distribution",
    },
    type: 200,
  },
  xHnpsa0mPl: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["jpVPmXIxVx", "i0SjM7ZGGP"],
  },
  xNvvMhOH2e: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["8mtSKaatXM", "KRqNWugjAy"],
  },
  xWOo5novtw: {
    data: {
      fn: "applicant.ownership.certificate.declaration.accurate",
      info: "<p>The application must include a statement describing the current ownership of the land subject to this application.<br><br>It is an offence to knowingly or recklessly issue a false certificate that contains any statement that is untrue or misleading.</p>",
      text: "Certificate of ownership declaration - Certificate C",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p><p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a></p>',
      description:
        "<p>The applicant certifies that:</p><ul><li><p>the applicant has given the requisite notice to everyone whose name and address is known to the applicant who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application</p></li><li><p>the applicant has taken all reasonable steps to find out the names and addresses of everyone else who, on the day 21 days before the date of this application, was an owner or agricultural tenant of any part of the land subject to this application, but has been unable to do so</p></li><li><p>the applicant has published, within 21 days of the date of the application, the requisite notice in a newspaper circulating locally to the site</p></li></ul>",
      howMeasured:
        '<p><strong>Requisite notice</strong> means notice in the appropriate form set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially to the same effect.</p><p><strong>Owner</strong> means anyone with a freehold interest in the land, or a leasehold interest in the land with at least 7 years left to run.</p><p><strong>Agricultural tenants</strong> are tenants that rent agricultural land or an agricultural holding. An agricultural tenant does not have to live on the holding to qualify as a tenant.</p>',
    },
    type: 100,
    edges: ["eOXYdjmmXq"],
  },
  xWnRrEIkm2: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "b",
    },
    type: 380,
  },
  xYwhRN0XhT: {
    data: {
      fn: "user.role",
      tags: [],
      text: "Which of these best describes you?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["N6lbZHYM8C", "HlWoUL0Qrh"],
  },
  xeiXQ9B7fi: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  xiTuN2xLAF: {
    data: {
      fn: "application.declaration.accurate.form",
      val: "Yes",
    },
    type: 380,
  },
  xjkWwMl720: {
    data: {
      text: "householder 8 weeks",
    },
    type: 100,
  },
  xnKlZ5RBSA: {
    data: {
      fn: "user.role",
      info: "<p>This will affect how we handle your data. If you are not a professional agent applying for someone else, your information will not be published as part of the public planning register.</p>",
      text: "Are you a professional planning agent?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["tFH92t2HOk", "maiYqknBoq"],
  },
  xnfMkgx9Xn: {
    data: {
      text: "[To be replaced with list component]",
    },
    type: 100,
  },
  xpTXs1AhMr: {
    data: {
      val: "owner",
      text: "Owner",
    },
    type: 200,
    edges: ["21DL6H3ge9"],
  },
  xpaP7v9BUG: {
    data: {
      val: "land.park",
      text: "Park",
    },
    type: 200,
  },
  xrZRM9B7fi: {
    data: {
      fn: "application.type",
      val: "preApp",
    },
    type: 380,
  },
  xtrFvDHgOI: {
    data: {
      val: "commercial.industrial",
      text: "Industrial",
    },
    type: 200,
    edges: ["1ElP19Mpqq"],
  },
  xuFhs3Hqr9: {
    data: {
      val: "commercial.leisure",
      text: "Leisure and sport",
    },
    type: 200,
    edges: ["M7Y93oTya3"],
  },
  xzcBX6HseZ: {
    data: {
      text: 'How to address "not include notice served using electronic communications" in the below?',
    },
    type: 100,
  },
  y1vXEBLI3y: {
    data: {
      val: "commercial.medical.lab",
      text: "Medical, testing or research laboratory",
    },
    type: 200,
  },
  y2GZT4wgfu: {
    data: {
      fn: "service.type",
      val: "major",
      operation: "replace",
    },
    type: 380,
  },
  yFNi39B7fi: {
    data: {
      val: "nonMajor",
      text: "Non-major pre application",
    },
    type: 200,
    edges: ["VpqFn9B7fi"],
  },
  yLUEVZqUR1: {
    data: {
      info: "<p>It is a legal requirement to provide requisite notice to all known owners or agricultural tenants of land that is subject to an application for planning permission.</p><p>You cannot submit an application without confirming you have done this.</p>",
      tags: [],
      color: "#ffdd00",
      notes:
        "AN - changed text, reviewed by AL before making the change\n\nPrevious text:\n\nYou can't continue if you haven't provided requisite notice\n\nSave and return to this application at a later time after you have given the pre-defined form to all known owners or agricultural tenants of the land.",
      title: "You cannot continue if you haven't given requisite notice",
      policyRef:
        '<p><a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/article/13">Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015</a></p>',
      description:
        '<p>Your application has been saved so you can return to finish it when you have given requisite notice.</p><p>Find and print the <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">requisite notice form</a> on legislation.gov.uk</p>',
      howMeasured:
        '<p><strong>Requisite notice</strong> means giving the tenants a completed form, as set out in <a target="_blank" rel="external" class="govuk-link" href="https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made">Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015</a> or in a form substantially similar.</p>',
      resetButton: false,
    },
    type: 8,
  },
  yNyWw0Zm6L: {
    data: {
      val: "other",
      text: "Something else",
    },
    type: 200,
    edges: ["Kq2IG1IlSE", "bEEV4icJnv", "FQN1PuenBo", "3i9Uz8w7le"],
  },
  yPVZBqcc1K: {
    data: {
      fn: "applicant.resident",
      text: "Is your contact address the same as the property address?",
    },
    type: 100,
    edges: ["SsXkQovF9D", "zitVUitggM"],
  },
  yRQ759B7fi: {
    data: {
      fn: "siteArea5haOrMore",
      formula: "largerEq(proposal.site.area, 50000)",
      defaults: {
        "proposal.site.area": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  yRuZtDETJk: {
    data: {
      val: "land.open",
      text: "Open space",
    },
    type: 200,
  },
  yScStbKFow: {
    data: {
      val: "commercial.transport.other",
      text: "Another transport use",
    },
    type: 200,
    edges: ["WlBAHtMtuv"],
  },
  yYiBqQ9RfH: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["hhrn3AfCzX", "QX3Pmod219", "aG8yD8tHWI"],
  },
  yZCebOEUnT: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["bvQ1DVdGZn", "A1tiG8eLfg", "oiVGPjA1Of"],
  },
  yhLHkF3VzE: {
    data: {
      text: "tsi@doncaster.gov.uk",
    },
    type: 100,
  },
  yjvubkqzpi: {
    data: {
      fn: "proposal.use.description",
      type: "long",
      title: "What is the proposed use of the building?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/1987/764/contents">https://www.legislation.gov.uk/uksi/1987/764/contents</a></p>',
      description:
        "<p>This is the use of the building(s) that will not be residential.</p><p>In your description you may reference use classes. For more information on use classes please select More information.</p>",
      howMeasured:
        "<p>The different use classes are:</p><ul><li><p>Part B (Schedule 1)</p><ul><li><p>Class B2 – General Industrial</p></li><li><p>Class B8 – Storage and distribution</p></li></ul></li><li><p>Part C (Schedule 1)</p><ul><li><p>Class C1 – Hotels</p></li><li><p>Class C2 – Residential institutions</p></li><li><p>Class C2A – Secure residential institutions</p></li><li><p>Class C3 – Dwellinghouses</p></li><li><p>Class C4 – Small Houses in multiple occupation</p></li></ul></li><li><p>Part A (Schedule 2) Commercial, Business and Service</p><ul><li><p>Class E – Commercial, Business and Service</p></li></ul></li><li><p>Part B (Schedule 2) Local Community and Learning</p><ul><li><p>Class F.1 Learning and non-residential institutions</p></li><li><p>Class F.2 Local community</p></li></ul></li></ul>",
    },
    type: 110,
  },
  ykSg9a0Mcg: {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "9zKtZUbSJR"],
  },
  ysWVmKBMUP: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  yupLEsUTn2: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "WjfeLGXseE"],
  },
  z4cBYRT2RU: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
    },
    type: 200,
    edges: ["7QNDP95hq4"],
  },
  z5aA39B7fi: {
    data: {
      fn: "proposal.parking.existingParkingAffected",
      text: "Will the project result in the loss of existing parking provision or otherwise impact the existing parking layout",
    },
    type: 100,
    edges: ["QJ0ts9B7fi", "UaVk99B7fi"],
  },
  z7IhvBGqTh: {
    data: {
      val: "some",
      text: "Some of them",
    },
    type: 200,
    edges: ["L5Tv8qztB8", "kO217QZUpQ"],
  },
  zCLiTGDlnl: {
    data: {
      val: "charity",
      text: "Charity",
    },
    type: 200,
    edges: ["lXr7ZAkgUe"],
  },
  zHTBssREEw: {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property form adjoining land or neighbouring properties. </p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess your application. If we do, who should we contact to arrange the visit?",
    },
    type: 100,
    edges: ["H8jVd74Mv4", "cDEMhRlIa1"],
  },
  zIm6w1iejy: {
    data: {
      fn: "application.type",
      text: "Is it a householder?",
    },
    type: 100,
    edges: ["A3zEcauz2f", "akB1O13VNA"],
  },
  zJIsnat6Ju: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      notes:
        "AN - deleted hint text. Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  zKqUL7sJNV: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  zOCzb4kwrd: {
    data: {
      fn: "property.ownership.ownerOne.name",
      title: "What is the full name of the occupier?",
    },
    type: 110,
  },
  zRdgt9B7fi: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["1k5I99B7fi"],
  },
  zXimgeZ8U6: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["0wmnKyNNPC"],
  },
  za2DPIqPPQ: {
    data: {
      fn: "applicant.ownership.certificate",
      val: "c",
    },
    type: 380,
  },
  zi2IeYtCaC: {
    data: {
      fn: "property.ownership.ownerOne.interestDescription",
      type: "long",
      title: "What is the nature of their interest in the land?",
    },
    type: 110,
  },
  zifhFqXNJz: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["WiYk8VCJw1"],
  },
  zitVUitggM: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "wvyoRpCjBL"],
  },
  ztkjURtTj9: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  zwHS8byx4h: {
    data: {
      text: "add trees",
    },
    type: 100,
  },
  zwKja7T43j: {
    data: {
      val: "owner",
      text: "Owner",
    },
    type: 200,
    edges: ["HM4ffx9N7u", "ZzIT6wyBRK", "t91Q7UY3HN"],
  },
  "6689164d-2a5e-422f-8d6a-d3ea11a2fbb9": {
    data: {
      text: "opensystemslab/property-types",
      summary: null,
      publishedAt: "2024-08-14T16:47:14.79483+00:00",
      publishedBy: 84,
      publishedFlowId: 3961,
    },
    type: 300,
    edges: ["6FL5k5zovo", "JkyukIyZ5r", "I03hRPF3ck"],
  },
  "6afa7b28-09d1-4401-9c5f-d4faa09cc223": {
    data: {
      text: "doncaster/confirmation-pages",
      summary: "Added pre-app.",
      publishedAt: "2024-12-20T11:44:32.549615+00:00",
      publishedBy: 84,
      publishedFlowId: 4711,
    },
    type: 300,
    edges: ["yhLHkF3VzE", "WEnBsMl720", "ckmP2Vm9bg", "4dFtOxkPcb"],
  },
  "9e3b8eb1-862e-41c5-a7f1-3906897b6bd0": {
    data: {
      text: "doncaster/apply-for-service-declarations",
      summary: null,
      publishedAt: "2024-10-31T14:39:23.492418+00:00",
      publishedBy: 84,
      publishedFlowId: 4323,
    },
    type: 300,
    edges: ["Fm7C92xLAF"],
  },
  "a1cb7594-3e70-4206-bb59-21985ff19dee": {
    data: {
      text: "opensystemslab/research-participation",
      summary: "Updated copy.",
      publishedAt: "2024-11-11T08:50:31.110561+00:00",
      publishedBy: 84,
      publishedFlowId: 4473,
    },
    type: 300,
    edges: ["RnEKNzq4Am"],
  },
  "a6bf5fc1-1da0-46b5-8aed-a3e0243f2677": {
    data: {
      text: "opensystemslab/about-the-applicant",
      summary: "Consolidated flows. Copy changes.",
      publishedAt: "2024-12-18T13:25:01.646429+00:00",
      publishedBy: 84,
      publishedFlowId: 4673,
    },
    type: 300,
    edges: ["BDulPzfy0y"],
  },
  "da0b227c-e4f0-42f6-9c9e-171558fb4360": {
    data: {
      text: "opensystemslab/ownership",
      summary:
        "Substantial copy changes to certificate declarations and notices.",
      publishedAt: "2024-12-18T13:10:44.563963+00:00",
      publishedBy: 84,
      publishedFlowId: 4672,
    },
    type: 300,
    edges: ["ViOKPyGTVg", "zwHS8byx4h", "wvSu1lmvFM"],
  },
};
