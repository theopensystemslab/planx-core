import { FlowGraph } from "../../../../types/index.js";

// Copied from Lambeth on 12 Sept 2025
export const mockPublishedApprovalConditionsFlow: FlowGraph = {
  _root: {
    edges: [
      "4Wpnvi0sCu",
      "DILZ1i0sCu",
      "uWyNBi0sCu",
      "i5SThi0sCu",
      "K6vkt6wbWU",
      "6lL907fwBQ",
      "heyAli0sCu",
      "SLfPBi0sCu",
      "yEcLai0sCu",
      "Bv9cmi0sCu",
      "BTmmji0sCu",
      "XPRBwZ4QNx",
      "6eWxivGfSB",
      "JC0vmi0sCu",
      "3oQvmi0sCu",
      "059Vui0sCu",
      "q83Cgi0sCu",
      "h0oxMi0sCu",
      "hNeidivtCh",
      "qidhti0sCu",
      "QplkW0NMTU",
      "QPo9ki0sCu",
      "Rkyf1i0sCu",
      "2pNLRl8BT1",
    ],
  },
  "059Vui0sCu": {
    data: {
      tags: [],
      title: "Review and confirm",
      length: "short",
    },
    type: 360,
  },
  "0UZTJi0sCu": {
    data: {
      info: "<p>The service is asking for the decision date so that the officer can use it to assess this application.</p>",
      title: "When was the application granted permission?",
      description: "<p>Copy the date on the decision notice.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 120,
  },
  "1HGe2QuNIK": {
    data: {
      text: "No",
    },
    type: 200,
  },
  "1fqIdi0sCu": {
    data: {
      text: "free",
    },
    type: 100,
  },
  "2pNLRl8BT1": {
    type: 300,
    edges: ["5b84a044-a4cc-466c-a8c8-7fb82e5b0340"],
    data: {
      flattenedFromExternalPortal: true,
    },
  },
  "5b84a044-a4cc-466c-a8c8-7fb82e5b0340": {
    edges: ["FiT0f0xl3O", "6am6pbxd5e", "tSxgibr7hd"],
    type: 300,
    data: {
      text: "lambeth/confirmation-pages",
      flattenedFromExternalPortal: true,
      templatedFrom: null,
      publishedFlowId: 6044,
      publishedAt: "2025-08-27T11:42:23.609417+00:00",
      publishedBy: 84,
      summary: "Correct feedback component copy formatting.",
    },
  },
  "2t9su0xl3O": {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 16 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  "400F50xl3O": {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  "5unyb0xl3O": {
    data: {
      text: "8 weeks",
    },
    type: 100,
  },
  "63PxM0xl3O": {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 3 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  "6am6pbxd5e": {
    data: {
      title: "Tell us what you think",
      disclaimer:
        "Please do not include any personal data such as your name, email or address. All feedback is processed according to our privacy notice.",
      description:
        "This service is a work in progress, any feedback you share about your experience will help us to improve it.",
      ratingQuestion: "How would you rate your experience with this service?",
      feedbackRequired: false,
      freeformQuestion: "Please tell us more about your experience.",
    },
    type: 900,
  },
  "7CeL20xl3O": {
    data: {
      text: "8 weeks",
    },
    type: 100,
  },
  "8Oz4L0xl3O": {
    data: {
      val: "hazardousSubstanceConsent",
      text: "Hazardous Substances Consent",
    },
    type: 200,
    edges: ["7CeL20xl3O", "GbMJo0xl3O"],
  },
  A3nYN0xl3O: {
    data: {
      text: "Is this an amendment to a major application?",
    },
    type: 100,
    edges: ["dKmHl0xl3O", "tgC9B0xl3O"],
  },
  AGlW30xl3O: {
    data: {
      text: "first draft",
    },
    type: 100,
  },
  C7ggq0xl3O: {
    data: {
      text: "8 weeks if householder or minor",
    },
    type: 100,
  },
  FBu7I0xl3O: {
    data: {
      text: "householder 8 weeks",
    },
    type: 100,
  },
  FTYyX0xl3O: {
    data: {
      val: "amendment.minorMaterial",
      text: "Minor material amendment",
    },
    type: 200,
    edges: ["A3nYN0xl3O"],
  },
  FiT0f0xl3O: {
    data: {
      fn: "application.type",
      tags: [],
      text: "What type of application is this?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "tY8wE0xl3O",
      "huj9W0xl3O",
      "jcYZS0xl3O",
      "ng6Iu0xl3O",
      "Unu6A0xl3O",
      "w753e0xl3O",
      "y3hjG0xl3O",
      "FTYyX0xl3O",
      "oOGUW0xl3O",
      "sREfF0xl3O",
      "sUfDU0xl3O",
      "8Oz4L0xl3O",
      "KqRmk0xl3O",
    ],
  },
  GXFLF0xl3O: {
    data: {
      color: {
        text: "#000",
        background: "rgba(1, 99, 96, 0.1)",
      },
      heading: "Submission sent",
      moreInfo:
        "<h2>You will be contacted</h2><ul><li><p>if there is anything missing from the information you have provided so far</p></li><li><p>if any additional information is required</p></li></ul>",
      nextSteps: [],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description: "Thank you for your submission.",
    },
    type: 725,
  },
  GbMJo0xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  Iu3PQ0xl3O: {
    data: {
      text: "4 weeks?",
    },
    type: 100,
  },
  JqjUw0xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  KT6a10xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 5 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  KjI1I0xl3O: {
    data: {
      val: "pp.full.minor",
      text: "Minor",
    },
    type: 200,
    edges: ["qCL4u0xl3O", "AGlW30xl3O", "R1rXD0xl3O"],
  },
  KqRmk0xl3O: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["GXFLF0xl3O"],
  },
  PWQwE0xl3O: {
    data: {
      fn: "application.type",
      text: "What type of application is it?",
    },
    type: 100,
    edges: ["tppUo0xl3O", "KjI1I0xl3O", "WsnUJ0xl3O"],
  },
  Q7OCU0xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  R1rXD0xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 12 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  RvC7H0xl3O: {
    data: {
      text: "3 weeks",
    },
    type: 100,
  },
  TZVu90xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 28 days. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  Unu6A0xl3O: {
    data: {
      val: "listed",
      text: "Listed Building Consent",
    },
    type: 200,
    edges: ["5unyb0xl3O", "Q7OCU0xl3O"],
  },
  WsnUJ0xl3O: {
    data: {
      val: "pp.full.major",
      text: "Major",
    },
    type: 200,
    edges: ["fUA1H0xl3O", "AGlW30xl3O", "2t9su0xl3O"],
  },
  Wu4oQ0xl3O: {
    data: {
      tags: [],
      text: "8 weeks",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  dKmHl0xl3O: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["rn96B0xl3O", "gPIK40xl3O"],
  },
  eNc4t0xl3O: {
    data: {
      text: "28 days",
    },
    type: 100,
  },
  fUA1H0xl3O: {
    data: {
      text: "16 weeks",
    },
    type: 100,
  },
  gPIK40xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 16 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  huj9W0xl3O: {
    data: {
      val: "ldc.proposed",
      text: "Lawful Development Certificate for proposed changes",
    },
    type: 200,
    edges: ["Wu4oQ0xl3O", "uOHAs0xl3O"],
  },
  iGRWQ0xl3O: {
    data: {
      text: "5 weeks",
    },
    type: 100,
  },
  jcYZS0xl3O: {
    data: {
      val: "ldc.existing",
      text: "Lawful Development Certificate for existing changes",
    },
    type: 200,
    edges: ["Wu4oQ0xl3O", "uzzt90xl3O"],
  },
  kfpiQ0xl3O: {
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
            "If there are no errors or missing information, you can usually expect to receive a decision within 8 weeks. If we need more time we will contact you to agree this. We will email you a Lawful Development Certificate, or explain why a certificate cannot be granted.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "<p>Thank you for applying for a Lawful Development Certificate. We will email you to confirm we’ve received your application. We will check your application for errors. If there are any issues, we’ll be in touch. If there are no errors, you can expect to receive a decision within 8 weeks. If we need more time, we will contact you to agree this.</p>",
    },
    type: 725,
  },
  lGebO0xl3O: {
    data: {
      text: "digitalplanning@lambeth.gov.uk",
    },
    type: 100,
  },
  ng6Iu0xl3O: {
    data: {
      val: "ldc.breachOfCondition",
      text: "Lawful Development Certificate (lawful not to comply with condition)",
    },
    type: 200,
    edges: ["Wu4oQ0xl3O", "kfpiQ0xl3O"],
  },
  oOGUW0xl3O: {
    data: {
      val: "environmentalImpact.screening",
      text: "Environmental Screening (stage 1)",
    },
    type: 200,
    edges: ["RvC7H0xl3O", "63PxM0xl3O"],
  },
  qCL4u0xl3O: {
    data: {
      text: "12 weeks",
    },
    type: 100,
  },
  rn96B0xl3O: {
    data: {
      text: "majors 16 weeks",
    },
    type: 100,
  },
  sREfF0xl3O: {
    data: {
      val: "environmentalImpact.scoping",
      text: "Environmental Scoping (stage 2)",
    },
    type: 200,
    edges: ["iGRWQ0xl3O", "KT6a10xl3O"],
  },
  sUfDU0xl3O: {
    data: {
      val: "landDrainageConsent",
      text: "Land Drainage Consent",
    },
    type: 200,
    edges: ["7CeL20xl3O", "JqjUw0xl3O"],
  },
  tSxgibr7hd: {
    data: {
      color: "#e8f1f5",
      title: "Thank you for your feedback",
      description: "<p>Use the button below to go back to the start.</p>",
      resetButton: true,
    },
    type: 8,
  },
  tY8wE0xl3O: {
    data: {
      val: "pp",
      text: "Planning permission",
    },
    type: 200,
    edges: ["PWQwE0xl3O"],
  },
  tgC9B0xl3O: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["C7ggq0xl3O", "u7DYp0xl3O"],
  },
  tppUo0xl3O: {
    data: {
      val: "pp.full.householder",
      text: "Householder",
    },
    type: 200,
    edges: ["FBu7I0xl3O", "400F50xl3O"],
  },
  u7DYp0xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 8 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  uOHAs0xl3O: {
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
            "If there are no errors or missing information, you can usually expect to receive a decision within 8 weeks. If we need more time we will contact you to agree this. We will email you a Lawful Development Certificate, or explain why a certificate cannot be granted.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "<p>Thank you for applying for a Lawful Development Certificate. We will email you to confirm we’ve received your application. We will check your application for errors. If there are any issues, we’ll be in touch. If there are no errors, you can expect to receive a decision within 8 weeks. If we need more time, we will contact you to agree this.</p>",
    },
    type: 725,
  },
  uzzt90xl3O: {
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
            "If there are no errors or missing information, you can usually expect to receive a decision within 8 weeks. If we need more time we will contact you to agree this. We will email you a Lawful Development Certificate, or explain why a certificate cannot be granted.",
        },
      ],
      contactInfo:
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "<p>Thank you for applying for a Lawful Development Certificate. We will email you to confirm we’ve received your application. We will check your application for errors. If there are any issues, we’ll be in touch. If there are no errors, you can expect to receive a decision within 8 weeks. If we need more time, we will contact you to agree this.</p>",
    },
    type: 725,
  },
  w753e0xl3O: {
    data: {
      val: "condition.approval",
      text: "Submit details required by a condition",
    },
    type: 200,
    edges: ["Iu3PQ0xl3O", "y871F0xl3O", "lGebO0xl3O"],
  },
  y3hjG0xl3O: {
    data: {
      val: "amendment.nonMaterial",
      text: "Non-material amendment",
    },
    type: 200,
    edges: ["eNc4t0xl3O", "TZVu90xl3O"],
  },
  y871F0xl3O: {
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
        '<p>You can contact us at <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:digitalplanning@lambeth.gov.uk">digitalplanning@lambeth.gov.uk</a><br><br></p><p><strong>What did you think of this service? Please give us your feedback on the next page.</strong></p>',
      description:
        "A payment receipt has been emailed to you. You will usually get a decision in 4 weeks. Do not start work until you have a decision from us.",
    },
    type: 725,
  },
  "3oQvmi0sCu": {
    type: 300,
    edges: ["a6bf5fc1-1da0-46b5-8aed-a3e0243f2677"],
    data: {
      flattenedFromExternalPortal: true,
    },
  },
  "a6bf5fc1-1da0-46b5-8aed-a3e0243f2677": {
    edges: ["BDulPzfy0y"],
    type: 300,
    data: {
      text: "opensystemslab/about-the-applicant",
      flattenedFromExternalPortal: true,
      templatedFrom: null,
      publishedFlowId: 6148,
      publishedAt: "2025-09-08T13:14:27.893532+00:00",
      publishedBy: 84,
      summary: "Add 'Sensitive data' tag to relevant nodes.",
    },
  },
  "00BzDQ8Y9E": {
    data: {
      val: "owner",
      text: "Yes",
    },
    type: 200,
  },
  "06bA9iXPTC": {
    data: {
      val: "applicant",
      text: "Me, the applicant",
    },
    type: 200,
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
  "1Zk55jTsN1": {
    data: {
      fn: "applicant",
      tags: ["sensitiveData"],
      title: "Your contact details",
    },
    type: 135,
  },
  "1typr1z3t8": {
    data: {
      val: "proxy",
      text: "Me",
    },
    type: 200,
    edges: ["bsOKZBRfh5"],
  },
  "2Fypf8lNFx": {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "NPMmcnzCKP"],
  },
  "2eZ0N3YALL": {
    data: {
      val: "charity",
      text: "Charity",
    },
    type: 200,
  },
  "2hapsqAN3L": {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      notes:
        "AN - deleted hint text - Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  "2y4bImiSsM": {
    data: {
      text: "application.fee.reduction.localCharityAndCommunityGroups",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
  },
  "3Imxr9jkir": {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  "3fGe2GB4Im": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  "3pD5SZ1fSq": {
    data: {
      fn: "applicant.address",
      tags: ["sensitiveData"],
      title: "Your contact address",
      description: "<p>This information will not be published.</p>",
    },
    type: 130,
  },
  "3qcB3oenrq": {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property form adjoining land or neighbouring properties. </p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess your application. If we do, who should we contact to arrange the visit?",
    },
    type: 100,
    edges: ["U3jqMW1vWI", "CZTTibL50a"],
  },
  "3vfbjYr6jN": {
    data: {
      fn: "applicant.type",
      text: "Which of these best describes you (or your organisation)?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "kYBEmGD4Hu",
      "qwehoY9gHF",
      "dFP2yHfJxv",
      "F3dsldfsCz",
      "RG2m5wky7W",
    ],
  },
  "3y6n3BZdUm": {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  "4AmayV9v0w": {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      notes:
        "AN - deleted hint text. Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  "4i70PlGZJZ": {
    data: {
      fn: "owner",
      tags: ["sensitiveData"],
      title: "Owner's contact details",
    },
    type: 135,
  },
  "5rEp2cHPsN": {
    data: {
      text: "Someone else",
    },
    type: 200,
    edges: ["opuz96cgSY", "FHdSt1JW1i"],
  },
  "7QNDP95hq4": {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the parish council or community council",
    },
    type: 110,
  },
  "7cynvLcVDd": {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
    edges: ["qS5WXN97G5"],
  },
  "7erj1hXvse": {
    data: {
      val: "true",
      text: "Yes, it's visible from the road or somewhere else",
    },
    type: 200,
  },
  "7tDlF90Ntz": {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "4AmayV9v0w"],
  },
  "85gYgOXpay": {
    data: {
      fn: "applicant.ownership",
      text: "Is the applicant the owner of the tree(s)?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["tb0RY9AvUZ", "9aAFMTVxo0"],
  },
  "8D1PfejmRQ": {
    data: {
      fn: "applicant.address",
      tags: ["sensitiveData"],
      title: "Applicant's contact address",
    },
    type: 130,
  },
  "8NcP8NqC5M": {
    data: {
      fn: "applicant.siteContact.name",
      val: "Contact applicant",
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
  "8kaCyhvpH7": {
    data: {
      fn: "user.role",
      info: "<p>We will use this information to make sure we ask you for the correct information.</p>",
      tags: [],
      text: "Are you applying on behalf of someone else?",
      description:
        "<p>Answer &apos;No&apos; if the applicant is your employer.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["FuyhClwlwt", "PsRnXEO2x7"],
  },
  "8mtSKaatXM": {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  "8o7FI7smUO": {
    data: {
      fn: "applicant",
      tags: ["sensitiveData"],
      title: "Your contact details",
    },
    type: 135,
  },
  "94j15zzdPA": {
    data: {
      fn: "user.role",
      info: "<p>This will affect how we handle your data. If you are not a professional agent applying for someone else, your information will not be published as part of the public planning register.</p>",
      tags: [],
      text: "Are you a professional agent?",
      howMeasured:
        "<p>Agents are people acting in a professional capacity on behalf of the applicant, for example planning agents or solicitors.</p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["stxnZnEGKZ", "yMvdo0kR1E"],
  },
  "9NR3NJPmGw": {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess the application. If we do, who should we contact to arrange the visit?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["E7Kam3yFTp", "7tDlF90Ntz", "9Qej3DqYvY"],
  },
  "9Qej3DqYvY": {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["snifD4Kitp", "pZrMXbCFDi"],
  },
  "9U2ADk9SOu": {
    data: {
      val: "proxy",
      text: "Me",
    },
    type: 200,
    edges: ["Ag05tgUM17"],
  },
  "9aAFMTVxo0": {
    data: {
      val: "other",
      text: "No",
    },
    type: 200,
    edges: ["vza2d7QsfL", "vxwAh01E40"],
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
  "9zKtZUbSJR": {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      notes:
        "AN - deleted hint text - Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  A3zEcauz2f: {
    data: {
      val: "pp.full.householder",
      text: "Yes",
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
  AJgtpQimWP: {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "2hapsqAN3L"],
  },
  Ag05tgUM17: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
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
      alwaysAutoAnswerBlank: true,
    },
    type: 100,
    edges: ["pUpoxdQoL7", "t6RKBmHoxv", "OJvXiKX81f"],
  },
  BH2eL6rZAU: {
    data: {
      fn: "user.role",
      info: "<p>We&apos;ll use this information to make sure we ask you for the correct information.</p>",
      text: "Are you applying on behalf of someone else?",
      description:
        "<p>Answer &apos;No&apos; if the applicant is your employer.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["D95sd8eRww", "jLEs1HNX6H"],
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
  CZTTibL50a: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["GZSNnSxutZ"],
  },
  CinvXjoJGj: {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
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
  DmdeHOewPk: {
    data: {
      val: "agent",
      text: "Me, the agent",
    },
    type: 200,
    edges: ["hhW61nDmAS"],
  },
  Dyi75x20ao: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["ttEt3KA3Wl"],
  },
  E63e1zXlP8: {
    data: {
      fn: "applicant.resident",
      text: "Is your contact address the same as the property address?",
    },
    type: 100,
    edges: ["Ldu681Wb3o", "yupLEsUTn2"],
  },
  E7Kam3yFTp: {
    data: {
      val: "agent",
      text: "Me, the agent",
    },
    type: 200,
    edges: ["qwhLvB9aho"],
  },
  F3dsldfsCz: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
  },
  FHdSt1JW1i: {
    data: {
      fn: "proposal.ownership",
      val: "Reg.4LPA",
      operation: "replace",
    },
    type: 380,
  },
  FMTSaAgSJU: {
    data: {
      fn: "applicant.agent",
      tags: ["sensitiveData"],
      title: "Your contact details",
      description:
        "<p>Enter your contact details, not the applicant&apos;s. </p><p>Some of this information may be included on public planning records.</p>",
    },
    type: 135,
  },
  FSBemuDrKM: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
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
  GCh1PmH3vR: {
    data: {
      val: "individual",
      text: "Private individual",
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
  GO359Q8Cyp: {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
    edges: ["RfPkyvn983"],
  },
  GZSNnSxutZ: {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  H8jVd74Mv4: {
    data: {
      val: "applicant",
      text: "Me, the applicant",
    },
    type: 200,
  },
  Hk1b7pA0xm: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the organisation",
    },
    type: 110,
  },
  IjzPakxp2f: {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
  },
  JMJ60UdgaD: {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  JR13ec91W3: {
    data: {
      fn: "applicant.agent.address",
      tags: ["sensitiveData"],
      title: "Your contact address",
    },
    type: 130,
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
      tags: ["sensitiveData"],
      title: "Applicant's contact address",
    },
    type: 130,
  },
  K4Ew6hDiRv: {
    data: {
      fn: "applicant.company.name",
      title: "Name of the charity",
    },
    type: 110,
  },
  KRqNWugjAy: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  Ldu681Wb3o: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
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
  N8tSe9gGmD: {
    data: {
      tags: [],
      text: "Works to trees",
    },
    type: 300,
    edges: ["nTdAA0OrlY"],
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
      tags: ["sensitiveData"],
      notes:
        "AN - deleted hint text. Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  O95q0Erl7x: {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  OJvXiKX81f: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["XQsWKqj72N"],
  },
  P4VxYlulnY: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  P804o4tRh7: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
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
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  PNDPUXlhwJ: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "3pD5SZ1fSq"],
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
  QMN5xwZRGx: {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
    edges: ["y4TZ2hO7A5"],
  },
  QYvgZxPLdS: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
    edges: ["Hk1b7pA0xm"],
  },
  Qb0tIxIXOB: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  Qm3SvSO9Ml: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
  },
  R0e194dXnc: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  RA22yIIDzp: {
    data: {
      fn: "applicant.agent.address",
      info: "<p>This address may be published on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Your contact address",
    },
    type: 130,
  },
  RG2m5wky7W: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
    },
    type: 200,
  },
  RfPkyvn983: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the company",
    },
    type: 110,
  },
  Ric9LWgOoO: {
    data: {
      fn: "applicant.siteContact.role",
      info: "<p>During a site visit we will look at the areas affected by the changes.</p><p>We will usually:</p><ul><li><p>review the plans</p></li><li><p>take photographs</p></li><li><p>make notes</p></li><li><p>measure distances and heights</p></li></ul><p>We may also view the property from adjoining land or neighbouring properties.</p><p>Any information we collect will be used to help assess your application and will not be made public.</p>",
      text: "We may need to visit the site to assess the application. If we do, who should we contact to arrange the visit?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["1typr1z3t8", "AJgtpQimWP", "VrvJ3bPMTD"],
  },
  SJRiZ1gkrY: {
    data: {
      fn: "applicant.sameAddress.form",
      val: "Yes",
    },
    type: 380,
  },
  SPRq6xeWoq: {
    data: {
      text: "[Review below structure, then copy for other application types as needed]",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  SXCfHPrkEA: {
    data: {
      val: "proxy",
      text: "No",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "JR13ec91W3", "p6pcH5H3r9"],
  },
  SsXkQovF9D: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
  },
  T2QtM64BpR: {
    data: {
      fn: "applicant.agent.form",
      val: "No",
    },
    type: 380,
  },
  T5hD79qDIv: {
    data: {
      fn: "applicant.resident",
      text: "Is the applicant's contact address the same as the property address?",
    },
    type: 100,
    edges: ["3fGe2GB4Im", "AEODp89l6P"],
  },
  TMbaVTXF3d: {
    data: {
      val: "LPA",
      text: "Yes",
    },
    type: 200,
    edges: ["gyW1yFQFDO"],
  },
  Tp6w8nFrm4: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  U1Rkfacjnv: {
    data: {
      val: "applicant",
      text: "The applicant",
    },
    type: 200,
    edges: ["8NcP8NqC5M", "zJIsnat6Ju"],
  },
  U3jqMW1vWI: {
    data: {
      val: "applicant",
      text: "Me, the applicant",
    },
    type: 200,
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
  Vjw3exrW1k: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  VrvJ3bPMTD: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["3Imxr9jkir", "Tp6w8nFrm4"],
  },
  VthxviIaTD: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the organisation",
    },
    type: 110,
  },
  WJWP8eaQR3: {
    data: {
      fn: "applicant.agent.form",
      val: "Yes",
    },
    type: 380,
  },
  WjfeLGXseE: {
    data: {
      fn: "applicant.address",
      tags: ["sensitiveData"],
      title: "Your contact address",
      description: "<p>This information will not be published.</p>",
    },
    type: 130,
  },
  XQsWKqj72N: {
    data: {
      text: "Other applications (LDC, PA, LBC, PreApp, Amendments, Conditions)",
    },
    type: 300,
    edges: ["BH2eL6rZAU"],
  },
  XakhZrTBN3: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  XgOh1F6ccj: {
    data: {
      fn: "owner.address",
      tags: ["sensitiveData"],
      title: "Owner's contact address",
    },
    type: 130,
  },
  Xyjs6kLnqz: {
    data: {
      text: "The same local planning authority as the applicant",
    },
    type: 200,
    edges: ["w4FJRRanh7"],
  },
  Y3468sxJ9S: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      notes:
        "AN - deleted hint text - Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  YdzYUKrszN: {
    data: {
      fn: "applicant.agent.form",
      val: "Yes",
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
  ZbKC18c3Bm: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["3y6n3BZdUm", "ysWVmKBMUP"],
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
    edges: ["2y4bImiSsM"],
  },
  akB1O13VNA: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["M0oc0isZDH"],
  },
  atwOYIwFQp: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  b2bolgXP8u: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["CinvXjoJGj", "Vjw3exrW1k"],
  },
  b8b4cVyvSC: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  bsOKZBRfh5: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
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
  bwvADkktAV: {
    data: {
      fn: "applicant.address",
      tags: ["sensitiveData"],
      title: "Applicant's contact address",
    },
    type: 130,
  },
  cDEMhRlIa1: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["JMJ60UdgaD"],
  },
  dFP2yHfJxv: {
    data: {
      val: "charity",
      text: "Charity",
    },
    type: 200,
  },
  dstHNRpcyt: {
    data: {
      text: "Something else ",
    },
    type: 200,
  },
  dvLSqBR035: {
    data: {
      fn: "applicant.resident",
      text: "Is the applicant's contact address the same as the property address?",
    },
    type: 100,
    edges: ["zAG7vj8orC", "iMz9GltuNB"],
  },
  f75RXHmU92: {
    data: {
      fn: "applicant.agent.address",
      tags: ["sensitiveData"],
      title: "Your contact address",
    },
    type: 130,
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
  fWu8pfkuXl: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["BjCuhNXV9a"],
  },
  gLsFJbrERP: {
    data: {
      val: "true",
      text: "Yes, it's visible from the road or somewhere else",
    },
    type: 200,
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
  heicDAAhbN: {
    data: {
      fn: "applicant.agent.form",
      val: "No",
    },
    type: 380,
  },
  hhW61nDmAS: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  hjLsZ66tQP: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: [
      "YdzYUKrszN",
      "94j15zzdPA",
      "dvLSqBR035",
      "85gYgOXpay",
      "zklIpJ1kYt",
    ],
  },
  iMz9GltuNB: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "bwvADkktAV"],
  },
  ijq2OK2Xa6: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the parish council or community council",
    },
    type: 110,
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
  jispH1HMrD: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
    },
    type: 200,
    edges: ["GHMSwFczjZ"],
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
  kB2AwN1IO6: {
    data: {
      fn: "applicant.agent.address",
      info: "<p>This address may be published on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Your contact address",
    },
    type: 130,
  },
  kP6WjnFuTL: {
    data: {
      fn: "user.role",
      info: "<p>This will affect how we handle your data. If you are not a professional agent applying for someone else, your information will not be published as part of the public planning register.</p>",
      tags: [],
      text: "Are you a professional agent?",
      howMeasured:
        "<p>Agents are people acting in a professional capacity on behalf of the applicant, for example planning agents or solicitors.</p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["mK0ZruLgKZ", "SXCfHPrkEA"],
  },
  kYBEmGD4Hu: {
    data: {
      val: "individual",
      text: "Private individual",
    },
    type: 200,
  },
  l2KWZzWuYo: {
    data: {
      val: "agent",
      text: "Me, the agent",
    },
    type: 200,
    edges: ["XakhZrTBN3"],
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
  lHYvRT3I6G: {
    data: {
      val: "proxy",
      text: "Me",
    },
    type: 200,
    edges: ["P804o4tRh7"],
  },
  lRnk8aGAQw: {
    data: {
      fn: "applicant.type",
      text: "Which of these best describes you (or your organisation)?",
      neverAutoAnswer: false,
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
  lXr7ZAkgUe: {
    data: {
      fn: "applicant.company.name",
      title: "Name of the charity",
    },
    type: 110,
  },
  mH5BnDdGMF: {
    data: {
      fn: "applicant.agent.address",
      info: "<p>This address may be published on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Your contact address",
    },
    type: 130,
  },
  mK0ZruLgKZ: {
    data: {
      val: "agent",
      text: "Yes",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "kB2AwN1IO6", "SPRq6xeWoq", "0UIhsZcOrf"],
  },
  maWtXbsq4u: {
    data: {
      fn: "applicant.resident",
      text: "Is your contact address the same as the property address?",
    },
    type: 100,
    edges: ["R0e194dXnc", "PNDPUXlhwJ"],
  },
  maiYqknBoq: {
    data: {
      val: "proxy",
      text: "No",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "f75RXHmU92", "CukbYBECnz"],
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
  nTdAA0OrlY: {
    data: {
      fn: "user.role",
      info: "<p>We&apos;ll use this information to make sure we ask you for the correct information.</p>",
      text: "Are you applying on behalf of someone else?",
      description:
        "<p>Answer &apos;No&apos; if the applicant is your employer.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["hjLsZ66tQP", "tNUIv32Z1E"],
  },
  oE0KLxVpYQ: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "JwF5C2XHl7"],
  },
  oQG15KUGNi: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
    edges: ["VthxviIaTD"],
  },
  opuz96cgSY: {
    data: {
      text: "Should this be Reg 3 as the LPA is developing the site?",
    },
    type: 100,
  },
  p11Ci13HQ3: {
    data: {
      fn: "applicant",
      tags: ["sensitiveData"],
      title: "Your contact details",
    },
    type: 135,
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
  pS4xqvwZSR: {
    data: {
      fn: "applicant.ownership",
      tags: [],
      text: "Are you the owner of the tree(s)?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["00BzDQ8Y9E", "zKm8uyd4za"],
  },
  pUpoxdQoL7: {
    data: {
      val: "pp",
      text: "Apply for planning permission",
    },
    type: 200,
    edges: ["BdXeZDGaRO", "8ZB2YroEhH"],
  },
  pZrMXbCFDi: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  qS5WXN97G5: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the company",
    },
    type: 110,
  },
  qrBqLm0yes: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
    edges: ["ue6pHPPWSn", "aE3y9pavRx", "uFKnvenGK3"],
  },
  qwehoY9gHF: {
    data: {
      val: "company",
      text: "Company",
    },
    type: 200,
  },
  qwhLvB9aho: {
    data: {
      fn: "applicant",
      info: "<p>This information may be included on public planning records.</p>",
      tags: ["sensitiveData"],
      title: "Applicant's contact details",
      description:
        "<p>If you do not wish to provide an email address or phone number for the applicant, please provide your own.</p>",
    },
    type: 135,
  },
  r2nOxy3raM: {
    data: {
      fn: "applicant.agent.form",
      val: "Yes",
    },
    type: 380,
  },
  snifD4Kitp: {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  stxnZnEGKZ: {
    data: {
      val: "agent",
      text: "Yes",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "mH5BnDdGMF", "9NR3NJPmGw"],
  },
  syRvMx3CVa: {
    data: {
      val: "true",
      text: "Yes, it's visible from the road or somewhere else",
    },
    type: 200,
  },
  t6RKBmHoxv: {
    data: {
      val: "wtt",
      text: "Works to trees",
    },
    type: 200,
    edges: ["N8tSe9gGmD"],
  },
  t7l1q6lUzV: {
    data: {
      val: "pp.full",
      text: "Full planning permission",
    },
    type: 200,
    edges: ["zIm6w1iejy"],
  },
  tFH92t2HOk: {
    data: {
      val: "agent",
      text: "Yes",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "RA22yIIDzp", "aYIXsyr8Ji"],
  },
  tNUIv32Z1E: {
    data: {
      val: "applicant",
      text: "No",
    },
    type: 200,
    edges: [
      "heicDAAhbN",
      "3vfbjYr6jN",
      "8o7FI7smUO",
      "maWtXbsq4u",
      "3qcB3oenrq",
      "pS4xqvwZSR",
    ],
  },
  tb0RY9AvUZ: {
    data: {
      val: "owner",
      text: "Yes",
    },
    type: 200,
  },
  tjuGcGAMhC: {
    data: {
      val: "false",
      text: "No, to see the works you'd have to come onto the property",
    },
    type: 200,
  },
  tp5Z8KxDQV: {
    data: {
      fn: "applicant.agent.address",
      tags: ["sensitiveData"],
      title: "Your contact address",
    },
    type: 130,
  },
  ttEt3KA3Wl: {
    data: {
      fn: "applicant.siteContact",
      tags: ["sensitiveData"],
      title:
        "Contact details of the person we should contact about a site visit",
    },
    type: 135,
  },
  uFKnvenGK3: {
    data: {
      fn: "application.type",
      text: "What type of application is this?",
    },
    type: 100,
    edges: ["t7l1q6lUzV", "dstHNRpcyt"],
  },
  ue6pHPPWSn: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the organisation",
    },
    type: 110,
  },
  uiOtqAgCK5: {
    data: {
      val: "parishCouncil",
      text: "Parish or community council",
    },
    type: 200,
    edges: ["ijq2OK2Xa6"],
  },
  vjhA0IGt46: {
    data: {
      val: "public",
      text: "Public sector organisation",
    },
    type: 200,
  },
  vxwAh01E40: {
    data: {
      fn: "owner.address",
      tags: ["sensitiveData"],
      title: "Owner's contact address",
    },
    type: 130,
  },
  vza2d7QsfL: {
    data: {
      fn: "owner",
      tags: ["sensitiveData"],
      title: "Owner's contact details",
    },
    type: 135,
  },
  w4FJRRanh7: {
    data: {
      fn: "property.ownership",
      val: "Reg.3LPA",
      operation: "replace",
    },
    type: 380,
  },
  wYE2gdrX8E: {
    data: {
      val: "individual",
      text: "Private individual",
    },
    type: 200,
  },
  waRqtru89G: {
    data: {
      val: "charity",
      text: "Charity",
    },
    type: 200,
    edges: ["K4Ew6hDiRv"],
  },
  wvyoRpCjBL: {
    data: {
      fn: "applicant.address",
      tags: ["sensitiveData"],
      title: "Your contact address",
      description: "<p>This information will not be published.</p>",
    },
    type: 130,
  },
  xNvvMhOH2e: {
    data: {
      val: "other",
      text: "Someone else",
    },
    type: 200,
    edges: ["8mtSKaatXM", "KRqNWugjAy"],
  },
  xnKlZ5RBSA: {
    data: {
      fn: "user.role",
      info: "<p>This will affect how we handle your data. If you are not a professional agent applying for someone else, your information will not be published as part of the public planning register.</p>",
      tags: [],
      text: "Are you a professional agent?",
      howMeasured:
        "<p>Agents are people acting in a professional capacity on behalf of the applicant, for example planning agents or solicitors.</p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["tFH92t2HOk", "maiYqknBoq"],
  },
  y4TZ2hO7A5: {
    data: {
      fn: "applicant.company.name",
      type: "short",
      title: "Name of the company",
    },
    type: 110,
  },
  yMvdo0kR1E: {
    data: {
      val: "proxy",
      text: "No",
    },
    type: 200,
    edges: ["FMTSaAgSJU", "tp5Z8KxDQV", "Ric9LWgOoO"],
  },
  yPVZBqcc1K: {
    data: {
      fn: "applicant.resident",
      text: "Is your contact address the same as the property address?",
    },
    type: 100,
    edges: ["SsXkQovF9D", "zitVUitggM"],
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
      tags: ["sensitiveData"],
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
  zAG7vj8orC: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SJRiZ1gkrY"],
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
      tags: ["sensitiveData"],
      notes:
        "AN - deleted hint text. Please include an email address and phone number for the applicant. We may need this to contact them to arrange a site visit.",
      title: "Applicant's contact details",
    },
    type: 135,
  },
  zKm8uyd4za: {
    data: {
      val: "other",
      text: "No",
    },
    type: 200,
    edges: ["4i70PlGZJZ", "XgOh1F6ccj"],
  },
  zitVUitggM: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pNZigFwL0f", "wvyoRpCjBL"],
  },
  zklIpJ1kYt: {
    data: {
      fn: "applicant.type",
      text: "Which of these best describes the applicant?",
    },
    type: 100,
    edges: [
      "wYE2gdrX8E",
      "QMN5xwZRGx",
      "waRqtru89G",
      "QYvgZxPLdS",
      "uiOtqAgCK5",
    ],
  },
  "4Wpnvi0sCu": {
    data: {
      tags: [],
      title: "About the property",
      length: "short",
    },
    type: 360,
  },
  "6eWxivGfSB": {
    data: {
      fn: "proposal.condition",
      info: "<p>The service asks for the details of the condition so the officer can assess this application.</p>",
      tags: [],
      title: "Conditions",
      schema: {
        max: 12,
        min: 1,
        type: "Condition",
        fields: [
          {
            data: {
              fn: "number",
              type: "short",
              title: "Condition number",
              description:
                "This is the number of the condition as shown on the decision notice.",
            },
            type: "text",
          },
          {
            data: {
              fn: "description",
              type: "long",
              title: "Condition description",
              description:
                "This is the exact wording of the condition as shown on the decision notice.",
            },
            type: "text",
          },
          {
            data: {
              fn: "scope",
              title:
                "Are you submitting details for the full condition or part of it?",
              options: [
                {
                  id: "full",
                  data: {
                    val: "full",
                    text: "The full condition",
                  },
                },
                {
                  id: "part",
                  data: {
                    val: "part",
                    text: "Part of the condition",
                  },
                },
              ],
            },
            type: "question",
          },
          {
            data: {
              fn: "scope.description",
              type: "short",
              title:
                "Which part of the condition are you submitting details for?",
            },
            type: "text",
            required: false,
          },
          {
            data: {
              fn: "otherSupporting",
              title: "Supporting documents",
              description:
                "The documents should detail how you intend to meet this condition.",
            },
            type: "fileUpload",
          },
        ],
      },
      schemaName: "Discharge conditions",
      description:
        "<p>For each condition, describe it and upload supporting documents that show how you intend to meet it.</p>",
      howMeasured:
        "<p><strong>A decision notice</strong> is a document confirming the consent and its details. You can find it attached to the consent. Search the site address on the Local Planning Authority's planning register.</p><p><strong>Supporting documents</strong> should detail how you intend to meet the condition, for example through photographs or descriptions of the materials to be used for your works.</p>",
    },
    type: 800,
  },
  "6lL907fwBQ": {
    type: 300,
    edges: ["36f277e4-908f-44db-a2ba-0bbae1a0ad2d"],
    data: {
      flattenedFromExternalPortal: true,
    },
  },
  "36f277e4-908f-44db-a2ba-0bbae1a0ad2d": {
    edges: ["dVZovwxLWJ", "APVNXwxLWJ"],
    type: 300,
    data: {
      text: "opensystemslab/site-area-check",
      flattenedFromExternalPortal: true,
      templatedFrom: null,
      publishedFlowId: 5198,
      publishedAt: "2025-04-02T13:02:01.004905+00:00",
      publishedBy: 84,
      summary: "Add hectares conversion.",
    },
  },
  APVNXwxLWJ: {
    data: {
      fn: "siteAreaProvided",
      text: "Has the user already provided the site area?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["vKlKlwxLWJ", "DrJuFwxLWJ"],
  },
  DrJuFwxLWJ: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["MRt3mwxLWJ", "Tg0GvP4gCe"],
  },
  MRt3mwxLWJ: {
    data: {
      fn: "proposal.site.area",
      info: "<p>Because you uploaded a location plan instead of confirming the red line proposed in the previous step, we cannot automatically calculate your site area. The site area is needed as part of the application.</p>",
      tags: [],
      notes:
        "Kept why it matters to nudge users to use draw boundary component.",
      title: "How big is the site?",
      units: "square metres",
      isInteger: false,
      description:
        "<p>This is the total area identified on your location plan or red line drawing. This should include:</p><ul><li><p>the property boundary</p></li><li><p>areas affected by works outside the property boundary</p></li><li><p>areas that will be closed off or you&apos;ll need access to during the works</p></li></ul>",
      allowNegatives: false,
    },
    type: 150,
  },
  Tg0GvP4gCe: {
    data: {
      fn: "proposal.site.hectares",
      tags: [],
      title: "Calculate hectares",
      formula: "proposal.site.area/10000",
      samples: {},
      defaults: {
        "proposal.site.area": "0",
        "property.boundary.area": "0",
      },
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  dVZovwxLWJ: {
    data: {
      fn: "siteAreaProvided",
      tags: [],
      formula:
        'unequal(compareText(drawBoundary.action, "Uploaded a location plan"), 0)',
      samples: {},
      defaults: {
        "drawBoundary.action": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  vKlKlwxLWJ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  "8DYJOejGjn": {
    data: {
      val: "designated.conservationArea",
      text: "Yes",
    },
    type: 200,
    edges: ["pOmhH6GxTN"],
  },
  "8H8WZi0sCu": {
    data: {
      fn: "proposal.description",
      info: "<p>The service is asking for the description so that the officer can use it to assess this application.</p>",
      type: "extraLong",
      title: "What is the exact description of the development?",
      description:
        "<p>Copy the description as it appears on the decision notice.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 110,
  },
  "8h4Dpi0sCu": {
    data: {
      text: "Another type of application",
    },
    type: 200,
    edges: [
      "zitvUi0sCu",
      "uEDPFi0sCu",
      "tw016i0sCu",
      "IKyxNi0sCu",
      "iE5IKAIQag",
      "0UZTJi0sCu",
    ],
  },
  BTmmji0sCu: {
    data: {
      text: "How does the council keep track of partly discharged conditions? - can planX help?",
      description:
        "<p>Yes, this is normal practice. Conditions can have sub numbering to keep track of this OR the description of development will specify what part of the condition is being discharged.</p>",
    },
    type: 100,
  },
  Bv9cmi0sCu: {
    data: {
      tags: [],
      title: "About the conditions",
      length: "medium",
      description:
        "<ul><li><p>Details of the conditions</p></li><li><p>Supporting information</p></li></ul><p></p>",
    },
    type: 360,
  },
  DILZ1i0sCu: {
    data: {
      info: "<p>Planning conditions are extra details that need to be agreed after a planning consent is granted. They aim to reduce any negative impact of the project on its surroundings.<br><br>The condition itself will say when these details need to be submitted. They are either required before:</p><ul><li><p>the works start (known as &apos;pre-commencement conditions&apos;)</p></li><li><p>a certain stage in the building process</p></li><li><p>the buildings are used or inhabited.</p></li></ul>",
      text: "to do: here is template landing page, agree and add to ODP notion pages content is here V",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/use-of-planning-conditions">Use of planning conditions - </a><a target="_blank" rel="noopener noreferrer nofollow" href="http://GOV.UK">GOV.UK</a><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/use-of-planning-conditions"> (</a><a target="_blank" rel="noopener noreferrer nofollow" href="http://www.gov.uk">www.gov.uk</a><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/use-of-planning-conditions">)</a></p>',
      description:
        "<p>Use this service to send information to your Local Planning Authority required by conditions a planning consent. This is also known as &apos;<em>approving</em>&apos; or &apos;<em>discharging</em>&apos; a condition.</p><p>The information you need to submit depends on the exact condition.</p>",
    },
    type: 100,
  },
  GsV5Ui0sCu: {
    data: {
      info: "<p>The service is asking for the decision date so that the officer can use it to assess this application.</p>",
      title: "When was the planning permission granted?",
      description: "<p>Copy the date on the decision notice.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 120,
  },
  GtUo0i0sCu: {
    data: {
      val: "listed",
      text: "Listed building consent",
    },
    type: 200,
    edges: ["1fqIdi0sCu", "PcnPui0sCu", "vdWebi0sCu", "I2jOgi0sCu"],
  },
  HbPhWi0sCu: {
    data: {
      info: "<p>The service is asking for the reference number so that the officer can use this to assess this application.</p>",
      type: "short",
      title: "What is the reference number of the planning application?",
      description:
        "<p>Find this on the decision notice of the application.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 110,
  },
  I2jOgi0sCu: {
    data: {
      info: "<p>The service is asking for the decision date so that the officer can use it to assess this application.</p>",
      title: "When was the listed building consent was granted?",
      description: "<p>Copy the date on the decision notice.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 120,
  },
  IKyxNi0sCu: {
    data: {
      fn: "proposal.description",
      info: "<p>The service is asking for the description so that the officer can use it to assess this application.</p>",
      type: "extraLong",
      title:
        "What is the description of development as it appears on the consent?",
      description:
        "<p>Copy the description as it appears on the decision notice.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 110,
  },
  IjBTZL3EOS: {
    data: {
      fn: "originalProjectType",
      info: "<p>The service is asking for details about the project so that it can tell you the application fee.</p>",
      text: "What does the project involve?",
      notes:
        "Changed 'The service is asking for details about the project so that it can tell you the application fee.'\nTo: 'The service is asking for details so that it can tell you the application fee.'\n\nChanged 'Otherwise' to 'Also' in description of first option. \n\nWould this be better put as:\n'Does the project involve any demolition?'\n1. Yes, only demolition\n2. Yes, demolition and other works\n3. No\n\nHA",
    },
    type: 100,
    edges: ["zf9mavI6iX", "oSMt3zze8i", "RLzH96fXED"],
  },
  JC0vmi0sCu: {
    data: {
      tags: [],
      title: "About the applicant",
      length: "medium",
    },
    type: 360,
  },
  K6vkt6wbWU: {
    data: {
      fn: "proposal.site",
      info: "<p>This outline identifies the location of the original project on a map. </p>",
      tags: [],
      title: "Confirm the location of the original application",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2015/595/article/7">The Town and Country Planning (Development Management Procedure) (England) Order 2015</a>,</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/collections/planning-practice-guidance">Planning Practice Guidance (PPG)</a></p>',
      description:
        "<p>The red line shown below should be the same as the original application and should cover:</p><ul><li><p>the outline of the property boundary, and</p></li><li><p>any works outside the property boundary, and</p></li><li><p>any areas that will be closed off or you'll need access to during the works</p></li></ul><p>If the red line already includes all these, select continue.</p>",
      howMeasured:
        '<p>We have pre-populated the map with a red outline that includes the entire property using information from Land Registry.</p><p>In some cases, this outline might not include all the works or the areas that will be closed off. This might be because you\'re proposing works to a public highway (such as a dropped kerb), doing works that involve multiple properties, or works to a building that is part of a larger estate.</p><p>In these cases, you should amend the red outline by dragging the edges, or erase it by clicking the 🗑️-icon on the map and draw a new outline.</p><p></p><h1>How to draw and amend the outline</h1><ol><li><p>Move the cursor to the corner you want to start with and click or tap once.<br><br></p><img alt="Move the cursor to the corner you want to start with and click or tap once." src="https://api.editor.planx.uk/file/public/9axlxbxo/Draw%20boundary_step%201.png"><p><br></p></li><li><p>Move the cursor to the next corner and click or tap.<br><br></p><img alt="Move the cursor to the next corner and click or tap." src="https://api.editor.planx.uk/file/public/5npyu7aq/Draw%20boundary_step%202.png"><p><br></p></li><li><p>Repeat until you have the shape you need.<br><br></p><img alt="Repeat until you have the shape you need." src="https://api.editor.planx.uk/file/public/3ddotc4q/Draw%20boundary_step%203.png"><p><br></p></li><li><p>Click or tap the last corner again to stop drawing.<br><br></p><img alt="Click or tap the last corner again to stop drawing." src="https://api.editor.planx.uk/file/public/pen82j73/Draw%20boundary_step%204.png"><p><br></p></li><li><p>To amend the outline, click or tap on a line and drag it into a new position.<br><br></p><img alt="To amend the outline, click or tap on a line and drag it into a new position" src="https://api.editor.planx.uk/file/public/ko11wuez/Draw%20boundary_step%205.png"><p></p></li></ol>',
      hideFileUpload: false,
      titleForUploading: "Upload a location plan",
      descriptionForUploading:
        "<p>Your location plan must:</p><ul><li><p>be based on an accurate, recognisable map</p></li><li><p>be drawn to a scale, labelled, and/or marked with a scale bar</p></li><li><p>show the site outline in red</p></li><li><p>include a<strong> </strong>north point</p></li></ul><p></p>",
    },
    type: 10,
  },
  LKY9kbjkXR: {
    data: {
      val: "listed",
      text: "Yes",
    },
    type: 200,
  },
  OVcnkdg5cF: {
    data: {
      text: "this is for fee exemption",
    },
    type: 100,
  },
  PcnPui0sCu: {
    data: {
      info: "<p>The service is asking for the reference number so that the officer can use this to assess this application.</p>",
      type: "short",
      title: "What is the reference number of the listed building consent?",
      description:
        "<p>Find this on the decision notice of the application.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 110,
  },
  QPo9ki0sCu: {
    data: {
      fn: "application.fee.payable",
      title: "Pay for your application",
      hidePay: false,
      bannerTitle: "The planning fee for this application is",
      description:
        '<p>The planning fee covers the cost of processing your application. <a target="_self" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">Find out more about how planning fees are calculated</a> (opens in new tab).</p>',
      nomineeTitle: "Details of the person paying",
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
  Qj05ji0sCu: {
    data: {
      val: "Lambeth",
      text: "Yes",
    },
    type: 200,
  },
  QplkW0NMTU: {
    data: {
      fn: "application.fee.payable",
      applyCalculatedVAT: false,
      applyServiceCharge: false,
      fastTrackFeeAmount: 0,
      serviceChargeAmount: 40,
      applyPaymentProcessingFee: false,
      paymentProcessingFeePercentage: 0.01,
    },
    type: 381,
  },
  RLzH96fXED: {
    data: {
      text: "Something else",
    },
    type: 200,
  },
  Rkyf1i0sCu: {
    data: {
      title: "Send",
      destinations: ["email"],
    },
    type: 650,
  },
  SLfPBi0sCu: {
    data: {
      tags: [],
      title: "About the original application",
      length: "short",
    },
    type: 360,
  },
  UsTFWi0sCu: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["ivlc9i0sCu"],
  },
  Wb6D2i0sCu: {
    data: {
      val: "pp.full.householder",
      text: "Householder planning permission",
    },
    type: 200,
    edges: ["t9StTi0sCu", "HbPhWi0sCu", "8H8WZi0sCu", "GsV5Ui0sCu"],
  },
  XPRBwZ4QNx: {
    data: {
      text: "WE DON'T REALLY KEEP TRACK. IT WOULD BE GOOD IF BOPS OR SIMILAR HAD A TRACKER FOR US BUT I IMAGINE THAT IS AN ITEM FOR THE BOPS BACKLOG",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
  },
  h0oxMi0sCu: {
    data: {
      title: "Check your answers before sending your application",
    },
    type: 600,
  },
  hNeidivtCh: {
    type: 300,
    edges: ["6d0ed9a0-11e4-4ac9-931c-36fb08c24556"],
    data: {
      flattenedFromExternalPortal: true,
    },
  },
  "6d0ed9a0-11e4-4ac9-931c-36fb08c24556": {
    edges: ["Fm7C9O3Hb2"],
    type: 300,
    data: {
      text: "lambeth/legal-declarations",
      flattenedFromExternalPortal: true,
      templatedFrom: null,
      publishedFlowId: 5460,
      publishedAt: "2025-05-09T14:02:27.154004+00:00",
      publishedBy: 84,
      summary: "Update declarations content.",
    },
  },
  "4OKxcO3Hb2": {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am related to, or partnered with, an elected member for Lambeth Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  "4WqAAO3Hb2": {
    data: {
      val: "relation.employee",
      text: "I am related to, or partnered with, an employee of Lambeth Council",
    },
    type: 200,
    edges: ["LhnWdO3Hb2", "u74UCO3Hb2"],
  },
  "5L9QlO3Hb2": {
    data: {
      val: "ldc",
      text: "Lawful Development Certificate",
    },
    type: 200,
    edges: ["byEHXO3Hb2"],
  },
  "5ao36O3Hb2": {
    data: {
      text: "PP confirmations",
    },
    type: 300,
    edges: ["BpyaOO3Hb2", "Wp3dlO3Hb2", "P3LZKO3Hb2", "o8ZbZO3Hb2"],
  },
  "9ciucO3Hb2": {
    data: {
      val: "true",
      text: "I/we confirm that the above statement is true",
    },
    type: 200,
  },
  BpyaOO3Hb2: {
    data: {
      text: "Add council name to question options and set component",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  E0I7RO3Hb2: {
    data: {
      val: "true",
      text: "I/we confirm that the above statements are true",
    },
    type: 200,
  },
  Fm7C9O3Hb2: {
    data: {
      fn: "application.type",
      text: "What type of application is this?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["ZrRjuO3Hb2", "5L9QlO3Hb2", "Hs9Z8O3Hb2"],
  },
  Hs9Z8O3Hb2: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["g06hLO3Hb2"],
  },
  LhnWdO3Hb2: {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am related to, or partnered with, an employee of Lambeth Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  MKw8hO3Hb2: {
    data: {
      fn: "application.declaration.connection.form",
      val: "No connections",
    },
    type: 380,
  },
  OPNqQO3Hb2: {
    data: {
      fn: "application.declaration.accurate",
      info: "<p>The amended section 194 of the 1990 Act provides that it is an offence to furnish false or misleading information or to withhold material information with intent to deceive. Section 193(7) enables the authority to revoke, at any time, a certificate they may have issued as a result of such false or misleading information.</p>",
      tags: [],
      text: "Confirm the information in this application is correct",
      allRequired: true,
      description:
        "<p>I/we confirm that:</p><ul><li><p>I/we apply for a Lawful Development Certificate as described in this form, the accompanying plans/drawings and additional information</p></li><li><p>the information contained in this application is truthful, accurate and complete to the best of my knowledge</p></li></ul>",
      neverAutoAnswer: true,
    },
    type: 105,
    edges: ["ggyBJO3Hb2"],
  },
  P3LZKO3Hb2: {
    data: {
      fn: "application.declaration.accurate",
      info: "<p>Any decision issued on the basis of inaccurate or knowingly incomplete information may be legally invalid.</p>",
      tags: [],
      text: "Confirm the information in this application is correct",
      allRequired: true,
      description:
        "<p>I/we confirm that:</p><ul><li><p>I/we apply for planning permission/consent as described in this form, the accompanying plans/drawings and additional information</p></li><li><p>the information contained in this application is truthful, accurate and complete to the best of my knowledge</p></li></ul>",
      neverAutoAnswer: true,
    },
    type: 105,
    edges: ["E0I7RO3Hb2"],
  },
  PqqVTO3Hb2: {
    data: {
      val: "employee",
      text: "I am an employee of Lambeth Council",
    },
    type: 200,
    edges: ["qCIwdO3Hb2", "uxRJJO3Hb2"],
  },
  T3FdjO3Hb2: {
    data: {
      val: "relation.electedMember",
      text: "I am related to, or partnered with, an elected member for Lambeth Council",
    },
    type: 200,
    edges: ["4OKxcO3Hb2", "u74UCO3Hb2"],
  },
  TgQ0vYFlaL: {
    data: {
      val: "none",
      text: "None of the above apply to me",
      exclusive: true,
    },
    type: 200,
    edges: ["MKw8hO3Hb2"],
  },
  U0DlaO3Hb2: {
    data: {
      val: "electedMember",
      text: "I am an elected member for Lambeth Council",
    },
    type: 200,
    edges: ["tgtoaO3Hb2"],
  },
  Wp3dlO3Hb2: {
    data: {
      fn: "application.declaration.connection",
      info: "<p>It is an important principle of the planning system that decision-making processes are open and transparent. <strong>Declaring a connection will not affect the way your application is assessed.</strong> It will simply ensure that it is processed in a way that is fair and impartial.</p>",
      tags: [],
      text: "Connections with Lambeth Council",
      allRequired: false,
      description: "<p>This applies to either applicant or agents</p>",
      howMeasured:
        "<p><strong>Partnered</strong><em> </em>includes unmarried couples, as married couples or couples in a civil partnership.</p>\n<p><strong>Related to</strong> can include any relation (whether by birth, marriage or adoption) who is close enough that a fair-minded and informed observer, having considered the facts, might conclude that there was a risk of bias on the part of the decision maker within the planning authority.</p>\n<p>If you are unsure, it is better to declare any connection so steps can be taken to avoid any situation where an accusation of bias could be made.</p>\n<p><strong>Do agents need to declare a connection?</strong></p>\n<p>Yes. You should declare any council connections with either the applicant or an agent completing an application on the applicant's behalf.</p>",
      neverAutoAnswer: false,
    },
    type: 105,
    edges: [
      "PqqVTO3Hb2",
      "4WqAAO3Hb2",
      "U0DlaO3Hb2",
      "T3FdjO3Hb2",
      "TgQ0vYFlaL",
    ],
  },
  ZrRjuO3Hb2: {
    data: {
      val: "pp",
      text: "Planning permission",
    },
    type: 200,
    edges: ["5ao36O3Hb2"],
  },
  byEHXO3Hb2: {
    data: {
      text: "LDC confirmations",
    },
    type: 300,
    edges: ["BpyaOO3Hb2", "Wp3dlO3Hb2", "OPNqQO3Hb2", "xiTuNO3Hb2"],
  },
  g06hLO3Hb2: {
    data: {
      text: "Default confirmations",
    },
    type: 300,
    edges: ["BpyaOO3Hb2", "Wp3dlO3Hb2", "lMy9gO3Hb2", "m1ywRO3Hb2"],
  },
  ggyBJO3Hb2: {
    data: {
      val: "true",
      text: "I/we confirm that the above statements are true",
    },
    type: 200,
  },
  lMy9gO3Hb2: {
    data: {
      fn: "application.declaration.accurate",
      info: "<p>Any decision issued on the basis of inaccurate or knowingly incomplete information may be legally invalid.</p>",
      tags: [],
      text: "Confirm the information in this application is correct",
      allRequired: true,
      description:
        "<p>I/we confirm that:</p><ul><li><p>I/we submit this application as described in this form, the accompanying plans/drawings and additional information</p></li><li><p>the information contained in this application is truthful, accurate and complete to the best of my knowledge</p></li></ul>",
      neverAutoAnswer: true,
    },
    type: 105,
    edges: ["9ciucO3Hb2"],
  },
  m1ywRO3Hb2: {
    data: {
      fn: "application.declaration.accurate.form",
      val: "Yes",
    },
    type: 380,
  },
  o8ZbZO3Hb2: {
    data: {
      fn: "application.declaration.accurate.form",
      val: "Yes",
    },
    type: 380,
  },
  qCIwdO3Hb2: {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am an employee of Lambeth Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  tgtoaO3Hb2: {
    data: {
      fn: "application.declaration.connection.form",
      val: "I am an elected member for Lambeth Council",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  u74UCO3Hb2: {
    data: {
      fn: "application.declaration.connection.description",
      type: "long",
      title: "Describe your connection",
      description:
        "<p>Provide details of their name, role, and your connection to them.</p>",
    },
    type: 110,
  },
  uxRJJO3Hb2: {
    data: {
      fn: "application.declaration.connection.description",
      type: "long",
      title: "Describe your connection",
      description: "<p>Provide details of your role within the council</p>\n",
    },
    type: 110,
  },
  xiTuNO3Hb2: {
    data: {
      fn: "application.declaration.accurate.form",
      val: "Yes",
    },
    type: 380,
  },
  heyAli0sCu: {
    data: {
      fn: "application.type",
      val: "approval.conditions",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  i5SThi0sCu: {
    data: {
      fn: "property.localAuthorityDistrict",
      text: "Is the property in Lambeth?",
      description:
        "<p>This question refers to the local planning authority (LPA).</p>",
    },
    type: 100,
    edges: ["Qj05ji0sCu", "UsTFWi0sCu"],
  },
  iE5IKAIQag: {
    data: {
      fn: "property.constraints.planning",
      text: "Is the property in a conservation area?",
      notes:
        "Should 'I don't know' be an option?\nThink it might need some help text on why we're asking this. \nHA",
    },
    type: 100,
    edges: ["8DYJOejGjn", "1HGe2QuNIK"],
  },
  ivlc9i0sCu: {
    data: {
      color: "#EFEFEF",
      title: "It looks like this property is not in Lambeth",
      description:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.planningportal.co.uk/find-your-local-planning-authority">Find your local planning authority</a></p>',
      resetButton: true,
    },
    type: 8,
  },
  oSMt3zze8i: {
    data: {
      text: "Demolition and other works",
    },
    type: 200,
  },
  pOmhH6GxTN: {
    data: {
      fn: "property.constraints.planning",
      text: "Is the property listed?",
      notes:
        "Should 'I don't know' be an option?\nThink it might need some help text on why we're asking this. \nHA",
    },
    type: 100,
    edges: ["LKY9kbjkXR", "smXo5R8VpV"],
  },
  q83Cgi0sCu: {
    type: 300,
    edges: ["3939b044-227b-4e5c-bb52-28eb24e8daf1"],
    data: {
      flattenedFromExternalPortal: true,
    },
  },
  "3939b044-227b-4e5c-bb52-28eb24e8daf1": {
    edges: [
      "g3R3gPa8F8",
      "dknMGPa8F8",
      "7rlKYcakbx",
      "V6PJfv3iG6",
      "hYuHtPa8F8",
    ],
    type: 300,
    data: {
      text: "opensystemslab/fee-calculator",
      flattenedFromExternalPortal: true,
      templatedFrom: null,
      publishedFlowId: 6150,
      publishedAt: "2025-09-08T13:40:36.071761+00:00",
      publishedBy: 84,
      summary: "Add 'Sensitive data' tag to relevant nodes.",
    },
  },
  "02oU2Urz4y": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["rejaGobYbE"],
  },
  "08KqKkUtJQ": {
    data: {
      val: "new",
      text: "New buildings",
    },
    type: 200,
    edges: ["euBlhLnVNp", "bkjqv8DE5w"],
  },
  "0AI5IPa8F8": {
    data: {
      val: "internal",
      text: "Internal works",
    },
    type: 200,
    edges: ["rwXk7zi8Id"],
  },
  "0HP3UfQTo0": {
    data: {
      val: "demolish.part",
      text: "Demolish part of a building (such as an extension)",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  "0OHoU3h2or": {
    data: {
      val: "residential.dwelling",
      text: "Dwellinghouses",
    },
    type: 200,
    edges: ["euBlhLnVNp", "Z8Hl1ilhqm"],
  },
  "0SoEm8Kw12": {
    data: {
      fn: "application.fee.category.fivetoThirteen",
      text: "Does the proposal include developments in category 5 to 13?",
    },
    type: 100,
    edges: ["b5OPZ4n8zq", "vHlS5J3VeG"],
  },
  "0Uop8FXFXH": {
    data: {
      fn: "application.fee.category.four.lessThanThousand",
      text: "Are you adding less than 1000m² of new floor area?",
    },
    type: 100,
    edges: ["RW5QtIxAdS", "87axVmXEu2"],
  },
  "0ZCQxqEdYM": {
    data: {
      val: "new.residential.dwelling",
      text: "New build dwellinghouses",
      flags: ["flag.cil.liable"],
    },
    type: 200,
    edges: ["euBlhLnVNp", "rLN8SNuEIy"],
  },
  "0b5aVhnxGy": {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      formula: "240",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "0eTsZPa8F8": {
    data: {
      tags: [],
      text: "Category 11 (2) - Other operations",
    },
    type: 300,
    edges: ["rCXJHPa8F8"],
  },
  "0mN90Pa8F8": {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      formula: "516",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "0oxcM6VDS5": {
    data: {
      val: "pp.full.minor",
      text: "Minor development",
    },
    type: 200,
    edges: ["aftjy4dfLS", "Sb77Twm3as"],
  },
  "16XVFDanAN": {
    data: {
      text: "The erection of buildings e.g. commercial, community, charity, residential (not dwellinghouses, agricultural or glasshouses or plant/machinery)",
    },
    type: 100,
  },
  "1Blu9FN9KZ": {
    data: {
      fn: "application.fee.category.twoToFour",
      text: "Does the proposal include development in categories 2, 3 or 4?",
    },
    type: 100,
    edges: ["q2bYVt6t6G", "dZp7iTVnxh"],
  },
  "1CFAPQ9bOS": {
    data: {
      text: "The category is based on the total number of houses, but the fee is based on the additional number of houses, thus we subtract 1",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  "1HEbLwqhxC": {
    data: {
      fn: "application.fee.category.three.noMoreThanFiveHundredForty",
      text: "Are you adding no more than 540m² of new floor area?",
    },
    type: 100,
    edges: ["EhGRyPltbn", "ZW6Jz3mUyv"],
  },
  "1JJZMyuz2L": {
    data: {
      val: "false",
      text: "Yes",
    },
    type: 200,
    edges: ["Q2axEoIVxF"],
  },
  "1QT2TovhPM": {
    data: {
      fn: "proposal.projectType",
      text: "What change of unit does the project involve?",
    },
    type: 100,
    edges: ["ZMAFw0r3gE", "L45qOhB9W4", "VdrBgh4cbh"],
  },
  "1VH3bvWxkd": {
    data: {
      fn: "application.fee.payable",
      title: "Set payable fee to £298",
      formula: "298",
      howMeasured:
        "<p>The fee for an application for a non-material amendment relating to anything other than a householder development is £298.</p>",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "1Vw3Hr0vzV": {
    data: {
      fn: "application.fee.category.six",
      title: "Check if a category 6 change is involved",
      formula: "largerEq(application.fee.category.six.number, 1)",
      defaults: {
        "application.fee.category.six.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "1WONj01xCd": {
    data: {
      fn: "application.fee.calculated",
      info: "<p>Each category of development has its own associated fee. The application fee is calculated from one or more categories of development, depending on the works involved in the project.</p><p>For example, the application fee for a project that includes new build shops and changes of use will be made up of whichever of the two fees is highest.</p>",
      tags: [],
      title: "Highest fee from category 2 to 13?",
      formula:
        "max(application.fee.category.two, application.fee.category.three, application.fee.category.four, application.fee.category.five, application.fee.category.sixAndSeven, application.fee.category.eight, application.fee.category.nine, application.fee.category.ten, application.fee.category.eleven.one, application.fee.category.eleven.two, application.fee.category.twelve.one, application.fee.category.twelve.two, application.fee.category.thirteen)",
      samples: {},
      defaults: {
        "application.fee.category.ten": "0",
        "application.fee.category.two": "0",
        "application.fee.category.five": "0",
        "application.fee.category.four": "0",
        "application.fee.category.nine": "0",
        "application.fee.category.eight": "0",
        "application.fee.category.three": "0",
        "application.fee.category.thirteen": "0",
        "application.fee.category.eleven.one": "0",
        "application.fee.category.eleven.two": "0",
        "application.fee.category.twelve.one": "0",
        "application.fee.category.twelve.two": "0",
        "application.fee.category.sixAndSeven": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">GOV.UK guidance on fees for planning applications.</a></p><p><br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications#mixed-development-calculated">GOV.UK guidance on fees for mixed developments.</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "1ep25IYhwC": {
    data: {
      fn: "application.fee.category.five",
      info: "<p>The fee for the erection, alteration of replacement of plant or machinery on a site with an area of more than 5 hectares is £31,385 + £189 for each 0.1 hectare (or part thereof) in excess of 5 hectares, up to a maximum of £411,885.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-50000)/1000))189+31385),411885))",
      samples: {},
      defaults: {
        "proposal.siteArea": "50000",
        "proposal.site.area": "50000",
        "proposal.newFloorArea": "50000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a target="_self" rel="noopener noreferrer nofollow" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "1g3j0cSDDQ": {
    data: {
      fn: "application.type",
      text: "What type of development are you applying for?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2015/595/article/2">https://www.legislation.gov.uk/uksi/2015/595/article/2</a></p>',
      description: "<p>Please select one.</p>",
      howMeasured:
        "<h2>Householder application</h2><p>Physical changes to an existing home and its curtilage such as:</p><ul><li><p>Extensions</p></li><li><p>Alterations</p></li><li><p>Outbuildings</p></li><li><p>Changes to walls or fences</p></li><li><p>Changes to a garden</p></li></ul><p></p><h2>Minor development</h2><ul><li><p>One to nine new dwellinghouses</p></li><li><p>Developments with a site area of less than 1 ha</p></li><li><p>Buildings with a floor space of less than 1,000 square metres</p></li><li><p>Changes of use of less than 1,000 square metres</p></li></ul><p></p><h2>Major development</h2><ul><li><p>Mineral work</p></li><li><p>Waste development</p></li><li><p>Ten or more new dwellinghouses</p></li><li><p>Developments with a site area of 1 ha or more</p></li><li><p>Buildings with a floor space of 1,000 square metres or more</p></li><li><p>Changes of use of 1,000 square metres or more</p></li></ul>",
    },
    type: 100,
    edges: ["IwE1KYAexf", "0oxcM6VDS5", "UkMpK5NxWm"],
  },
  "1tNcZHfRjn": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["trmjWgRW5t"],
  },
  "1woZz7NfGP": {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for the erection of agricultural buildings on a site with an area of no more than 2.5 hectare is £635 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))635)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2023/1197" rel="noopener noreferrer nofollow" target="_blank">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a target="_self" rel="noopener noreferrer nofollow" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">this guide</a>.</p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "1woqjPa8F8": {
    data: {
      text: "add project of relevant demolition to exemptions for all application types",
    },
    type: 100,
  },
  "281rCAn8eM": {
    data: {
      val: "alter.shutters",
      text: "Alterations to shutters of the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  "28jTUTyAmn": {
    data: {
      fn: "originalApplication.type",
      tags: [],
      text: "What type of application do you want to amend?",
      description:
        "<p>This question is about the permission you want to change.</p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["iYoQBFEcdf", "XRN2yEAVyu"],
  },
  "2CdQmWOFpi": {
    data: {
      fn: "application.fee.category.six",
      tags: ["automation"],
      text: "Does the project involve the enlargement, improvement or other alteration of existing dwellinghouses (fee category 6)?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["SMx1vsSmnn", "dqq7ElIfsN"],
  },
  "2FscnPa8F8": {
    data: {
      val: "pa.part3.classR",
      text: "Convert an agricultural building to a commercial use",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  "2NP2AUkjoK": {
    data: {
      fn: "application.fee.category.fourteen",
      info: "<p>The fee for a change of use of a building or land, other than for the use as a dwellinghouse, waste or mineral development, is £588.</p>",
      tags: [],
      formula: "588",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "2QlIPEZfKR": {
    data: {
      fn: "property.constraints.planning",
      tags: ["automation"],
      text: "Is the property in a conservation area?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["uaZCM39cKR", "T0rSpVPf2j"],
  },
  "2Rfxkih6MU": {
    data: {
      fn: "application.fee.category.two.lessThanThousand",
      text: "Are you adding less than 1000m² of new floor area?",
    },
    type: 100,
    edges: ["zLKHnHrdP9", "auqIOpxore"],
  },
  "2RpQVXeBvk": {
    data: {
      fn: "application.fee.category.twelve.one.fewerThanTen",
      text: "Are you creating fewer than 10 new homes?",
    },
    type: 100,
    edges: ["EuramZlCFE", "pBiZ2RJexI"],
  },
  "2Wim8uoCkG": {
    data: {
      fn: "application.fee.category.sixAndSeven",
      info: "<p>The fee to apply for planning permission for changes to the curtilage of a single home is £262.</p>",
      tags: [],
      formula: "262",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">Find out more about how planning fees in England are calculated (opens in a new tab)</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "2Z868tdQDn": {
    data: {
      tags: [],
      text: "Category 13 - Waste disposal",
    },
    type: 300,
    edges: ["DUkfcmiQDn", "MXbz0Msg6u"],
  },
  "2arW9Pa8F8": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["XifyuPa8F8", "jzNAAPa8F8"],
  },
  "2d0382RrWN": {
    data: {
      fn: "proposal.changeNumberOfDwellinghouses",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: [],
      text: "Does the change of use create new dwellinghouses?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      howMeasured:
        "<p>A dwellinghouse is a building used as a place to live by one household.</p><p>Dwellinghouses can include houses and individual flats, but not Houses in Multiple Occupation or blocks of flats.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["zXDiztR4Kp", "vtPuzM3pVM"],
  },
  "2f1245TriK": {
    data: {
      val: "new.other",
      text: "Other new buildings",
    },
    type: 200,
    edges: ["F0szHoF850"],
  },
  "2fPL5Pa8F8": {
    data: {
      fn: "application.fee.reduction.sports",
      tags: ["automation"],
      text: "Does the application qualify for the sports club fee reduction?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["gD7d1Pa8F8", "ywnW8Pa8F8"],
  },
  "2pjavGv4UC": {
    data: {
      fn: "application.fee.category.withinOne",
      title: "Check if the proposal includes developments in category 1",
      formula: "unequal(0, application.fee.category.one)",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.withinOne": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "2tWGlaXGlp": {
    data: {
      val: "new.agriculture",
      text: "New build agricultural buildings",
    },
    type: 200,
    edges: ["7VaO1TmY4k"],
  },
  "2u5dQPa8F8": {
    data: {
      text: "In any other case, the fee for a county matter application on a site which crosses local planning authority boundaries will be the lesser of either: 150% of the fee which would have been payable if the application had fallen to one authority, or the sum of the fees payable for each part of the site calculated separately.",
    },
    type: 100,
  },
  "34jC1ahqQo": {
    data: {
      info: "<p>Changes to utilities or other equipment are treated differently if they are done to a home than if they are done to the land surrounding it.</p>",
      tags: [],
      text: "Where are you adding or removing utilities or other equipment?",
      allRequired: false,
      howMeasured:
        "<p>The land surrounding a home refers to the surroundings and the boundary of an existing home (its curtilage). For example its garden or driveway.</p>",
      neverAutoAnswer: true,
    },
    type: 105,
    edges: ["r4uqsFIDFR", "bMXF1kUoeO"],
  },
  "37jm5hwYtG": {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["MgAGewSd3Y"],
  },
  "3DnBYmxAcD": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["6r2RBSVY7w"],
  },
  "3EieqlCeyw": {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["RHHM01SdDC"],
  },
  "3HkLBPa8F8": {
    data: {
      text: "Another application type",
    },
    type: 200,
    edges: ["1woqjPa8F8", "5WafuPa8F8"],
  },
  "3J58FPa8F8": {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The fee for an application for Prior Approval related to development involving telecommunications is £588.</p>",
      tags: [],
      formula: "588",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "3RDMblzfpR": {
    data: {
      text: "(7) Where an application is made under section 191(1)(a) or (b) (or under both paragraphs) and under section 191(1)(c), the fee payable shall be the sum of the fees that would have been payable if there had been an application under section 191(1)(a) or (b) (or under both paragraphs, as the case may be) and a separate application under section 191(1)(c).",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  "3RYBsbSscF": {
    data: {
      fn: "application.fee.category.nine",
      info: "<p>The fee for exploratory drilling for oil or natural gas on a site with an area of 7.5 hectares or less is £698 for each 0.1 hectares (or part thereof) of the site area.</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))698)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "3V8fJPa8F8": {
    data: {
      val: "pa.part16.classA",
      text: "Install telecommunications equipment",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "cOSGyPa8F8"],
  },
  "3WWBzPa8F8": {
    data: {
      text: "Withdrawn",
    },
    type: 200,
    edges: ["P15TKPa8F8"],
  },
  "3XrgEHKxtz": {
    data: {
      fn: "application.fee.category.six",
      tags: ["automation"],
      text: "Does the project involve the enlargement, improvement or other alteration of existing dwellinghouses (fee category 6)?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["nBwMhz1e96", "N6UeSFjdRk"],
  },
  "3Y1c2eMGbZ": {
    data: {
      val: "new",
      text: "Construction of a new building",
    },
    type: 200,
    edges: ["oztOfPa8F8"],
  },
  "3ZVXr5U2H0": {
    data: {
      val: "pa.part9.classD",
      text: "Develop toll road facilities",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "RQAPcPa8F8"],
  },
  "3cRIqPa8F8": {
    data: {
      val: "pa.part20.classA",
      text: "Build homes on a detached blocks of flats",
    },
    type: 200,
    edges: ["lIGT9aKbQR", "B9lbP8i2AH", "D5hgd7LndR"],
  },
  "3d85AV2Yus": {
    data: {
      val: "pp.full.householder",
      text: "Householder",
    },
    type: 200,
    edges: ["4LnJ6tL8CX"],
  },
  "3epcJHAlsc": {
    data: {
      val: "extend.rear",
      text: "Add a rear or side extension (or conservatory)",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  "3fDe0xdp7a": {
    data: {
      fn: "application.fee.category.twelve.two",
      info: "<p>The fee for the change of use of a building that results in at least 10 but no more than 50 dwellinghouses is £635 per dwellinghouse.</p>",
      tags: [],
      formula: "proposal.newDwellings.changeToHome.number*635",
      samples: {},
      defaults: {
        "application.numberNewHomes": "1",
        "proposal.newDwellings.number": "1",
        "proposal.newDwellings.changeToHome.number": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "3irSyEpQyk": {
    data: {
      fn: "application.fee.category.eleven.one",
      info: "<p>The fee for winning and working of minerals on a site with an area of 15 hectares or less is £321 for each 0.1 hectare (or part thereof) of the site area.</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))321)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "3nmlRyUyPT": {
    data: {
      text: "[Should this specify 'development is required for a purpose incidental to the existing use of the land?' It's part of the definition of Category 8]",
    },
    type: 100,
  },
  "3sIYdXs79N": {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The fee to apply for planning permission for the enlargement, improvement or other alteration of a single home is £528.</p>",
      formula: "528",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">Find out more about how planning fees in England are calculated (opens in a new tab)</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "4AnLAfuST9": {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for new agricultural buildings where the external floor space created will be greater than 465m2 but no more than 540m2 is £588.</p>",
      tags: [],
      formula: "588",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "4IAFlPa8F8": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["Xc2AWJxJij", "oShcPmeFqp"],
  },
  "4LnJ6tL8CX": {
    data: {
      fn: "application.fee.payable",
      title: "Set payable fee to £86",
      formula: "86",
      howMeasured:
        "<p>The fee for an application for a non-material amendment relating to a householder development is £86.</p>",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "4Xk8IEqr1H": {
    data: {
      val: "complianceConfirmation",
      text: "Confirm compliance with a condition",
    },
    type: 200,
  },
  "4YatDPa8F8": {
    data: {
      text: "I already submitted it earlier today",
    },
    type: 200,
    edges: ["xENX6Pa8F8"],
  },
  "4b2x2PqHs9": {
    data: {
      val: "alter.industrial.plant",
      text: "Installation of plant equipment or machinery",
    },
    type: 200,
    edges: ["oU3gRSsKGy", "Skk3ibpWwu"],
  },
  "4eh5WYYjIr": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["GbRRkilUtP"],
  },
  "52c9I5lfwg": {
    data: {
      val: "extend.porch",
      text: "Add or change a porch",
    },
    type: 200,
  },
  "5IJymy3EjT": {
    data: {
      text: "regulation 5A of the 2012 Fees Regulations, as amended).",
    },
    type: 100,
  },
  "5WafuPa8F8": {
    data: {
      text: "Fee exemptions and adjustments",
    },
    type: 300,
    edges: ["6WoEpPa8F8", "7F6zUd0Pbv", "kH8LlPa8F8"],
  },
  "5ifm7Gy5t9": {
    data: {
      tags: [],
      text: "Category 14 - Other change use",
    },
    type: 300,
    edges: ["2NP2AUkjoK"],
  },
  "5kcjNPa8F8": {
    data: {
      val: "pa.part20.classAB",
      text: "Build homes on an adjoining commercial or mixed use building",
    },
    type: 200,
    edges: ["lIGT9aKbQR", "B9lbP8i2AH", "D5hgd7LndR"],
  },
  "5zz6KHm46O": {
    data: {
      val: "commercial.leisure.sport.playingField",
      text: "Yes, a playing field",
    },
    type: 200,
    edges: ["GnodgiXf6C", "Nqpb6NZ5EF"],
  },
  "6CKtkLQUXd": {
    data: {
      val: "alter.replace",
      text: "Replacements to the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  "6Iz8p4ZPP0": {
    data: {
      val: "noChange",
      text: "No",
    },
    type: 200,
    edges: ["j1RX4O7bIS", "5ifm7Gy5t9"],
  },
  "6MKziuo7YF": {
    data: {
      fn: "application.fee.category.four",
      info: "<p>The fee for new glasshouses on agricultural land where the external floor space created will be 465m2 or less is £122.</p>",
      tags: [],
      formula: "122",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "6SYSQkgwI0": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["FRJRpZkZ6U"],
  },
  "6WoEpPa8F8": {
    data: {
      text: "Fee Exemption for Disability",
    },
    type: 300,
    edges: ["Bndv1Pa8F8", "jhW9jPa8F8", "S1e02Pa8F8", "wg66iPa8F8"],
  },
  "6bVHglsDUG": {
    data: {
      text: "50%",
    },
    type: 100,
  },
  "6c5tqBjCbE": {
    data: {
      fn: "application.fee.category.twelve.one.fewerThanFiftyOne",
      text: "Are you creating fewer than 51 new homes?",
    },
    type: 100,
    edges: ["C9zHLkA83U", "RhksIB2kCB"],
  },
  "6d4s6jGrxF": {
    data: {
      val: "extend",
      text: "Extension",
    },
    type: 200,
    edges: ["sVe9dPa8F8"],
  },
  "6nRH86hisN": {
    data: {
      fn: "application.fee.category.twelve.one.fewerThanTen",
      title: "Is the project creating fewer than 10 homes?",
      formula: "smaller(proposal.newDwellings.changeOfHome.number, 10)",
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "6ncXTPa8F8": {
    data: {
      fn: "application.fee.payable",
      info: "<p>In the case where two alternative applications are being submitted by the same applicant, for the same site and on the same day, then all but the largest of the fees qualify for a reduction of 50%.</p>",
      formula: "application.fee.reduced*0.5",
      defaults: {
        "application.fee.reduced": "1",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10</a></p>',
    },
    type: 700,
  },
  "6r2RBSVY7w": {
    data: {
      fn: "application.fee.category.two",
      info: "<p>The fee for the erection of buildings other than dwellinghouses on a site with an area of no more than 2.5 hectare is £635 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))635)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2023/1197" rel="noopener noreferrer nofollow" target="_blank">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a target="_self" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "6rNQLrYMxA": {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["Gj20wDmb5z"],
  },
  "6sRPISPepN": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["PWpWtYE8HD"],
  },
  "6wcurciVNK": {
    data: {
      fn: "proposal.projectCategory",
      tags: ["automation"],
      text: "Does the application relate to an existing use, building work or activity in breach of a condition?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["i0AeWx2Vsb", "pWvk6g3j0u"],
  },
  "6xOGIyxGiH": {
    data: {
      text: "Something else",
    },
    type: 200,
  },
  "70LcZPa8F8": {
    data: {
      val: "pa.part3.classN",
      text: "Convert a casino or amusement arcade into a home or homes",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  "70VTrPa8F8": {
    data: {
      val: "listed",
      text: "Listed building consent",
    },
    type: 200,
    edges: ["NcU3sPa8F8"],
  },
  "76rlAPa8F8": {
    data: {
      text: "Prior approval fees",
    },
    type: 300,
    edges: ["IBf5oPa8F8"],
  },
  "7CLclW6T8Y": {
    data: {
      fn: "application.fee.exemption.demolition",
      tags: [],
      text: "Does the application qualify for a Regulation 5A exemption?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["hhFDbPjlQY", "taazE7bqLL"],
  },
  "7F6zUd0Pbv": {
    data: {
      tags: [],
      text: "Fee exemption for demolition in conservation area (Reg 5A)",
    },
    type: 300,
    edges: ["iSmESG2Q2r"],
  },
  "7KBWCPa8F8": {
    data: {
      text: "Agree conditions fees",
    },
    type: 300,
    edges: ["VmTkpPa8F8", "CYhkxPa8F8"],
  },
  "7KIbSsuHaf": {
    data: {
      tags: ["toReview"],
      text: "Breaks if user incorrectly select change of use of non dwelling to dwelling (1) for property type residential (as it results in 0)",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
  },
  "7MawGPa8F8": {
    data: {
      val: "pa.part6.classE",
      text: "Build new forestry buildings",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "cOSGyPa8F8"],
  },
  "7Nj5T8gAhi": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["VBEJfX2AH7"],
  },
  "7VaO1TmY4k": {
    data: {
      fn: "proposal.projectType",
      text: "What types of changes does the application relate to?",
      allRequired: false,
    },
    type: 105,
    edges: ["ahSfsQ8kDW", "tQpK2sDsEE"],
  },
  "7WiXPPa8F8": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["WPSmnPa8F8"],
  },
  "7YdKGPa8F8": {
    data: {
      text: "Another day",
    },
    type: 200,
    edges: ["cOSGyPa8F8", "Gqzw4Pa8F8"],
  },
  "7aU2IjJs4H": {
    data: {
      val: "alter.boundary",
      text: "Changes to a fence, wall or gate",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  "7dcQ1C6GSh": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["O0B76UcDOa"],
  },
  "7nqDNwGEAV": {
    data: {
      fn: "application.fee.category.four",
      info: "<p>The fee for new glasshouses on agricultural land where the external floor space created will be more than 465m2 but less than 1000m2 is £3280.</p>",
      tags: [],
      formula: "3280",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "7rlKYcakbx": {
    data: {
      tags: ["automation"],
      text: "Multiple Project Fee Calculation",
    },
    type: 300,
    edges: ["9OMGTgLZsn"],
  },
  "7rwGJibOpQ": {
    data: {
      fn: "application.fee.category.one",
      info: "<p>The fee for building at least 10 but no more than 50 new homes is £635 per new build home.</p>",
      tags: [],
      formula: "proposal.newDwellings.newBuild.number*635",
      samples: {},
      defaults: {
        "application.numberNewHomes": "1",
        "proposal.newDwellings.number": "10",
        "proposal.newDwellings.newBuild.number": "10",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "7tRVgPa8F8": {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["SmcYnPa8F8"],
  },
  "7uJKQPa8F8": {
    data: {
      fn: "application.fee.payable",
      tags: [],
      formula: "application.fee.calculated*1",
      samples: {},
      defaults: {
        "application.fee.calculated": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "87axVmXEu2": {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["J8sc8PuTzK"],
  },
  "8Id5IumGUG": {
    data: {
      fn: "application.fee.category.twelve.two",
      info: "<p>The fee for the change of use of a building that results in more than 50 dwellinghouses is £31,385 + £189 for each additional dwellinghouse in excess of 50, up to a maximum of £411,885.</p>",
      tags: [],
      notes:
        "Full planning fee: If more than 50 homes being created, £22,859+138 for each additional home up to a max of £300,000. LDC-P would be 50% of this",
      formula:
        "(min((31385+((proposal.newDwellings.changeToHome.number-50)*189)),411885))",
      samples: {},
      defaults: {
        "application.numberNewHomes": "50",
        "proposal.newDwellings.number": "51",
        "proposal.newDwellings.changeToHome.number": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "8OrvGPa8F8": {
    data: {
      text: "Yes, I am also submitting an application for planning permission",
    },
    type: 200,
    edges: ["yveZwPa8F8"],
  },
  "8ThBxCCDGi": {
    data: {
      val: "listed",
      text: "Yes",
    },
    type: 200,
    edges: ["Q2axEoIVxF"],
  },
  "8UBvIufLLb": {
    data: {
      fn: "application.fee.reduction.sports",
      val: "false",
    },
    type: 380,
  },
  "8WOqWkBYwK": {
    data: {
      fn: "application.fee.category.nine.noMoreThanSevenFive",
      tags: [],
      title: "Is the site area no more than 7.5 hectares?",
      formula: "smallerEq(proposal.site.area, 75000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "8ZsOdPa8F8": {
    data: {
      val: "pa.part20.classZA",
      text: "Demolish buildings and build homes in their place",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  "8aNajrQAye": {
    data: {
      val: "extend",
      text: "Extension",
    },
    type: 200,
    edges: ["F0szHoF850"],
  },
  "8cESkPa8F8": {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      formula: "240",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "8fqYslir45": {
    data: {
      text: "NMA fees",
    },
    type: 300,
    edges: ["28jTUTyAmn"],
  },
  "8jPUC4bc2A": {
    data: {
      fn: "application.fee.category.five.noMoreThanTwoPointFive",
      text: "Is the site area no more than 2.5 hectares?",
    },
    type: 100,
    edges: ["d4evN6gSDO", "TOzmV1VTad"],
  },
  "8q3z0W6DhU": {
    data: {
      fn: "application.fee.category.one.fewerThanTen",
      title: "Is the project building fewer than 10 homes?",
      formula: "smaller(proposal.newDwellings.newBuild.number, 10)",
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  "8qyCUKjjW5": {
    data: {
      val: "alter.roof",
      text: "Alterations to the roof of the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  "8wmpACT9nf": {
    data: {
      val: "pa.part4.classCA",
      text: "Develop temporary school buildings on vacant commercial land",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  "95qwwghlI3": {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["MxtRkOMMry"],
  },
  "9AedToXUdE": {
    data: {
      fn: "application.fee.category.five.lessThanPointFive",
      text: "Is the site area less than 0.5 hectares?",
    },
    type: 100,
    edges: ["Csuym4ed60", "ZF2kzjzFJR"],
  },
  "9En7YPa8F8": {
    data: {
      val: "pa.part4.classBB",
      text: "Put up a temporary structure (listed)",
    },
    type: 200,
    edges: ["GlubU5UIMq", "o30WVPa8F8"],
  },
  "9G6EtxtS9Z": {
    data: {
      fn: "proposal.demolitionOnly",
      tags: ["automation"],
      text: "Are you also carrying out any other changes as part of the demolition?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["I7u4PbO11l", "1JJZMyuz2L"],
  },
  "9GrP5yZtli": {
    data: {
      fn: "proposal.changeNumberOfDwellinghouses",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: [],
      text: "Does the change of use create new dwellinghouses?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      howMeasured:
        "<p>A dwellinghouse is a building used as a place to live by one household.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["o8boo7N55j", "jM70qsAgf3"],
  },
  "9K1gBqW5cj": {
    data: {
      val: "alter.landscape",
      text: "Landscaping and other outdoor works",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  "9OMGTgLZsn": {
    data: {
      fn: "multipleFees",
      text: "Check for multiple fees?",
    },
    type: 100,
    edges: ["pneC5vcrAd", "CHhc4QbuMO"],
  },
  "9P1UgPAwTL": {
    data: {
      fn: "application.fee.category.eleven.one.noMoreThanFifteen",
      text: "Is the site area no more than 15 hectares?",
    },
    type: 100,
    edges: ["IHVozVgPwu", "msEuQCnHwE"],
  },
  "9VoeTMDU6d": {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The planning fee for an application for a Certificate of Lawfulness for proposed changes is half the amount that would be payable in respect of an application for planning permission.</p>",
      tags: [],
      title: "Set LDCP fee to half of the full application fee",
      formula: "application.fee.calculated*0.5",
      samples: {},
      defaults: {
        "application.fee.calculated": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/11">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 11</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  "9WM7VPa8F8": {
    data: {
      val: "extend",
      text: "Extension",
    },
    type: 200,
    edges: ["rwXk7zi8Id"],
  },
  "9fwh2Pa8F8": {
    data: {
      val: "pa.part20.classAC",
      text: "Build homes on adjoining houses",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  A5UyOO01RG: {
    data: {
      fn: "application.fee.category.two.noMoreThanThreeThousandSevenHundredFifty",
      tags: [],
      title: "Does the project add no more than 3750m² of floor area?",
      formula: "smallerEq(proposal.newFloorArea.other, 3750)",
      samples: {},
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  AA9MGHNtq8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["3fDe0xdp7a"],
  },
  ABQt2Pa8F8: {
    data: {
      text: "2 or more",
    },
    type: 200,
    edges: ["f8pbfPa8F8"],
  },
  AEsUGCbZy9: {
    data: {
      fn: "proposal.changeNumberOfDwellinghouses",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: [],
      text: "Does the change of use create new dwellinghouses?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      howMeasured:
        "<p>A <strong>dwellinghouse</strong> is a building that is used as a single private dwelling and for no other purpose.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["meDDjTpPyn", "Bh65wg9twc"],
  },
  AJIHaPa8F8: {
    data: {
      fn: "application.fee.payable",
      info: "<p>In the case where two alternative applications are being submitted by the same applicant, for the same site and on the same day, then all but the largest of the fees qualify for a reduction of 50%.</p>",
      formula: "application.fee.calculated*0.5",
      defaults: {
        "application.fee.calculated": "1",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10</a></p>',
    },
    type: 700,
  },
  AR0xsPa8F8: {
    data: {
      val: "pp.full",
      text: "Planning permission",
    },
    type: 200,
    edges: ["v3vRZPa8F8"],
  },
  AbOS6Pa8F8: {
    data: {
      val: "pa.part3.classM",
      text: "Convert a mixed use building into a home",
    },
    type: 200,
    edges: ["iADo8Pa8F8"],
  },
  An3PPndUhz: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["1WONj01xCd"],
  },
  AtsVgEHMXL: {
    data: {
      val: "pp.outline",
      text: "Outline Planning Permission",
    },
    type: 200,
    edges: ["Xk4DVf8jLH", "sZA5ZqgKDI", "ZRnTlKMuRe"],
  },
  B2Ze4jA7t1: {
    data: {
      fn: "application.fee.category.ten.noMoreThanFifteen",
      text: "Is the site area no more than 15 hectares?",
    },
    type: 100,
    edges: ["MhS6wiXo1o", "m44ah8UBhl"],
  },
  B9lbP8i2AH: {
    data: {
      fn: "application.fee.pa.part20.fewerThanFiftyOne",
      title: "Is the project building fewer than 51 homes?",
      formula: "smaller(proposal.newDwellings.newBuild.number, 51)",
      samples: {},
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  BFrOnPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  BGOVty0N5P: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: [
      "yPP5tmWDTj",
      "YR4p23OlpU",
      "y9wRdurL2P",
      "DKxqpxpAK7",
      "ieBLtRj7J0",
      "XClwJEPV8Z",
    ],
  },
  BGhWlElSMD: {
    data: {
      color: "#EFEFEF",
      title:
        "Your Local Planning Authority needs to assess your application fee",
      description:
        "<p>If your application requires you to pay a fee, your Local Planning Authority will contact you.</p>",
      resetButton: false,
    },
    type: 8,
  },
  BHrhzPa8F8: {
    data: {
      text: "minors/ majors",
    },
    type: 100,
  },
  BHv4SjXecQ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["CWLHjsilOH"],
  },
  BKv83EXmb6: {
    data: {
      fn: "proposal.projectType",
      tags: [],
      text: "Does your project also involve new build dwellinghouses?",
      description:
        "<p>A dwellinghouse is a building used as a place to live by one household.</p><p>Dwellinghouses can include houses and individual flats, but not Houses in Multiple Occupation or blocks of flats. </p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["nPxNt1wvsb", "f6ywSi1uJW"],
  },
  BRLlgnvz1v: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  BZofSPa8F8: {
    data: {
      val: "false",
      text: "More than 12 months ago",
    },
    type: 200,
    edges: ["vzngKPa8F8"],
  },
  Bh65wg9twc: {
    data: {
      val: "noChange",
      text: "No",
    },
    type: 200,
    edges: ["5ifm7Gy5t9"],
  },
  Bndv1Pa8F8: {
    data: {
      text: "DISABLED EXEMPTION",
    },
    type: 100,
  },
  Bv2KoYv9M9: {
    data: {
      fn: "property.type",
      tags: [],
      text: "Is the property a dwellinghouse?",
      description: "<p>This includes houses and flats.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["vfdpD7BVBs", "J4w0IfyCRx"],
  },
  C9zHLkA83U: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["1CFAPQ9bOS", "V8mFRnCvGa"],
  },
  CCsRsegVuF: {
    data: {
      val: "industrial.drilling",
      text: "Oil and gas working including exploratory, appraisal and production phases",
    },
    type: 200,
    edges: ["J8ip7DDUcs"],
  },
  CEU7l9NJHC: {
    data: {
      val: "alter.trees",
      text: "Changes to trees or hedges",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  CGN0DkgRUY: {
    data: {
      val: "pa.part17",
      text: "Mining",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "RQAPcPa8F8"],
  },
  CHhc4QbuMO: {
    data: {
      text: "No",
    },
    type: 200,
  },
  CWLHjsilOH: {
    data: {
      fn: "application.fee.category.two",
      info: "<p>The fee for erecting new buildings (with the exception of dwellinghouses, agricultural buildings, or plant/machinery) where the external floor space created is 40m2 or less is £298.</p>",
      tags: [],
      formula: "298",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  CYhkxPa8F8: {
    data: {
      fn: "originalApplication.type",
      tags: [],
      text: "What type of application do the conditions relate to?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["KxHVaPa8F8", "70VTrPa8F8", "YnzpnPa8F8"],
  },
  Cizbyiz1GG: {
    data: {
      fn: "proposal.projectCategory",
      tags: ["automation"],
      text: "Does the application relate to an existing use, building work or activity in breach of a condition?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: true,
    },
    type: 100,
    edges: ["DtYtYOgyAE", "dHQfFg7X9E"],
  },
  CrmJZIRP1b: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["aci0YnySmC"],
  },
  CrstmD3EYP: {
    data: {
      fn: "application.type",
      text: "What type of application is it?",
    },
    type: 100,
    edges: ["ew9jcbmnJp", "Upx7BpUEtt", "ktRgX0BsEK"],
  },
  CspJyZNvkx: {
    data: {
      fn: "application.fee.reduction.alternative",
      info: "<p>In the case where 2 alternative applications are being submitted by the same applicant, for the same site and on the same day, then all but the largest of the fees qualify for a reduction of 50%.</p>",
      text: "Have you already paid the full fee for one of the other applications?",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10</a></p>',
    },
    type: 100,
    edges: ["pUvHbyEilx", "BRLlgnvz1v"],
  },
  Csuym4ed60: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["KbjDPi05rA"],
  },
  D5hgd7LndR: {
    data: {
      fn: "application.fee.pa.part20.fewerThanTen",
      text: "Are you building fewer than 10 new homes?",
    },
    type: 100,
    edges: ["Lugp6qCIUH", "sgfsVkSaY5"],
  },
  DBzKKPa8F8: {
    data: {
      text: "Agree conditions fee exemptions",
    },
    type: 300,
    edges: ["olkPUPa8F8"],
  },
  DFQjhPa8F8: {
    data: {
      text: "No, I am submitting another application, such as listed building consent or a lawful development certificate",
    },
    type: 200,
    edges: ["cOSGyPa8F8"],
  },
  DGnd8ihib3: {
    data: {
      fn: "application.fee.category.twoToFour.max",
      title: "Highest fee from category 2, 3 and 4",
      formula:
        "max(application.fee.category.two, application.fee.category.three, application.fee.category.four)",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.ten": "0",
        "application.fee.category.two": "0",
        "application.fee.category.five": "0",
        "application.fee.category.four": "0",
        "application.fee.category.nine": "0",
        "application.fee.category.eight": "0",
        "application.fee.category.three": "0",
        "application.fee.category.thirteen": "0",
        "application.fee.category.eleven.one": "0",
        "application.fee.category.eleven.two": "0",
        "application.fee.category.twelve.one": "0",
        "application.fee.category.twelve.two": "0",
        "application.fee.category.sixAndSeven": "0",
      },
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  DKxqpxpAK7: {
    data: {
      fn: "application.fee.category.three.lessThanThousand",
      title: "Does the project add less than 1000m2 of floor area?",
      formula: "smaller(proposal.newFloorArea.agricultural, 1000)",
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newFloorArea.agricultural": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  DUkfcmiQDn: {
    data: {
      fn: "application.fee.category.thirteen.noMoreThanFifteen",
      tags: [],
      title: "Is the site area no more than 15 hectares?",
      formula: "smallerEq(proposal.site.area, 150000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  DVELONhqdE: {
    data: {
      info: "<p>In the case where 2 alternative applications are sent by the same applicant, for the same site and on the same day, then all but the largest of the fees qualify for a reduction of 50%.</p>",
      text: "Are you also submitting another proposal for the same site today?",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10</a></p>',
      description:
        "<p>Only answer &apos;Yes&apos; if both applications will be submitted by the same applicant, on the same day.</p>",
    },
    type: 100,
    edges: ["O5eCvlaZ0S", "CrmJZIRP1b"],
  },
  Delw8qkG4k: {
    data: {
      info: "<p>There are different fees depending on the purpose of the works</p>",
      text: "The electric vehicle charging point will be used",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Part 2 (7)</a></p>',
    },
    type: 100,
    edges: ["gUtRPIqOR4", "TlEYGBBtUZ"],
  },
  DgGxlBY59M: {
    data: {
      text: "No CIL flag -> except the conversion of a single dwelling house into two or more separate dwellings with no additional gross internal area created",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  DozTGenHPv: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["bJe24GrZDB"],
  },
  DsW4tqd7gq: {
    data: {
      fn: "application.fee.payable",
      tags: [],
      title: "Set payable fee to £2000",
      formula: "2000",
      samples: {},
      defaults: {},
      howMeasured:
        "<p>The fee for an application for a non-material amendment relating to a major development is £2000.</p>",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  DtYtYOgyAE: {
    data: {
      val: "breachOfCondition",
      text: "Yes",
    },
    type: 200,
    edges: ["3RDMblzfpR", "XfrdFv6tnN"],
  },
  E8shnhYhN7: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>Each category of development has its own associated fee. The application fee is calculated from one or more categories of development, depending on the works involved in the project.</p>",
      tags: [],
      title: "Set application fee to category 14",
      formula: "application.fee.category.fourteen",
      samples: {},
      defaults: {
        "application.fee.category.fourteen": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">GOV.UK guidance on fees for planning applications.</a></p><p><br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications#mixed-development-calculated">GOV.UK guidance on fees for mixed developments.</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  EEmIJPa8F8: {
    data: {
      fn: "application.fee.exemption.disability.reason",
      info: "<p>There are no planning fees for applications that are for works to provide access for disabled people into or within a building that can be used by members of the public.</p>",
      type: "long",
      title:
        "How does the project help disabled people access the building, or move around within it?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/4" target="_self">UK Statutory Instruments 2012 No. 2920 Regulation 4</a></p>',
    },
    type: 110,
  },
  EEtIzLsWkI: {
    data: {
      fn: "property.constraints.planning",
      tags: ["automation"],
      text: "Is the property listed?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["8ThBxCCDGi", "xJUQY1JPIg"],
  },
  EKCsx8gmpI: {
    data: {
      text: "No CIL flag -> except the conversion of a single dwelling house into two or more separate dwellings with no additional gross internal area created",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  EhGRyPltbn: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["4AnLAfuST9"],
  },
  El7t6YIzEb: {
    data: {
      val: "false",
      text: "No, it was submitted after 5 December 2023",
    },
    type: 200,
  },
  EuramZlCFE: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["1CFAPQ9bOS", "7KIbSsuHaf", "ph6PRCmPTY"],
  },
  ExIvqcuLeT: {
    data: {
      text: "Class BC",
    },
    type: 100,
  },
  Ey5pmL45Af: {
    data: {
      val: "pa.part19.classTA",
      text: "Development on a closed defence site",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  F08A3ofaQF: {
    data: {
      val: "pa.part4.classBC",
      text: "Develop a temporary campsite (FRZ 2 or 3)",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  F0szHoF850: {
    data: {
      tags: [],
      text: "Category 2 - Other new buildings",
    },
    type: 300,
    edges: ["gOwHhyZhCv"],
  },
  F6C9iK7pql: {
    data: {
      val: "unit.merge",
      text: "Merge two or more properties",
    },
    type: 200,
    edges: ["5ifm7Gy5t9"],
  },
  F7YimFvToT: {
    data: {
      fn: "proposal.newFloorArea.glasshouses",
      tags: [],
      title:
        "How much external floor space is being created by the new agricultural glasshouses?",
      units: "m²",
      isInteger: false,
      howMeasured:
        '<p>A glasshouse is a building that:</p><ul><li><p>has a minimum of three-quarters of its total external area comprised of glass or other translucent material</p></li><li><p>is designed for the production of flowers, fruit, vegetables, herbs or other horticultural produce</p></li><li><p>is used, or is to be used, solely for the purposes of agriculture</p></li></ul><p>External floor space means the gross external area (GEA) created by the development as measured on the outside of the building for each floor, whether or not it is to be bounded (wholly or partly) by external walls of a building.</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/publications/measuring-practice-for-voa-property-valuations/code-of-measuring-practice-definitions-for-rating-purposes#gross-external-area-gea">Find out how to calculate the external floor space on GOV.UK (opens in a new tab)</a>.</p>',
      allowNegatives: false,
    },
    type: 150,
  },
  FK0pCBi0lG: {
    data: {
      val: "exploratory",
      text: "Exploratory phase",
    },
    type: 200,
    edges: ["MgAGewSd3Y"],
  },
  FRJRpZkZ6U: {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for new agricultural buildings where the external floor space created will be 465m2 or less is £122.</p>",
      tags: [],
      formula: "122",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  FYYU0Pa8F8: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["HnUzJGPne6"],
  },
  Fa5EddNOhS: {
    data: {
      text: "The other application",
    },
    type: 200,
    edges: ["ysYGumgA7z", "6bVHglsDUG"],
  },
  FaYYohboSl: {
    data: {
      tags: [],
      text: "Category 4 - Glasshouses on Agriculture Land",
    },
    type: 300,
    edges: ["F7YimFvToT", "gRrFHSK3X8", "JGE58WPlnJ", "s5YEUlL3PE"],
  },
  FeSMlnNGAv: {
    data: {
      val: "alter.openings",
      text: "Alterations to the opening of the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  FgZXwC4KcD: {
    data: {
      fn: "application.fee.category.twelve.two.fewerThanFiftyOne",
      text: "Are you creating fewer than 51 new homes?",
    },
    type: 100,
    edges: ["AA9MGHNtq8", "VQ7I8o2NcX"],
  },
  FhvmpUwt6C: {
    data: {
      val: "alter.chimneys",
      text: "Alterations to chimneys of the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  FkCiEPa8F8: {
    data: {
      text: "Householder Fees",
    },
    type: 300,
    edges: ["u8Xp4iiNSt", "2CdQmWOFpi"],
  },
  FpOeMPa8F8: {
    data: {
      val: "pa.part6.classA",
      text: "Build new agricultural buildings on a unit of 5 hectares or more",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  FtPHsuRgQJ: {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for new agricultural buildings where the external floor space created will be more than 540m2 but less than 1000m2 is £588 + a further £588 for each 75m2 (or part thereof) in excess of 540m2.</p>",
      tags: [],
      formula: "((ceil((proposal.newFloorArea.agricultural-540)/75))588+588)",
      samples: {
        "proposal.newFloorArea.agricultural": "914",
      },
      defaults: {
        "proposal.newFloorArea": "540",
        "proposal.newFloorArea.agricultural": "540",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  FuPCOPBMNJ: {
    data: {
      val: "alter.repair",
      text: "Repairs to the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  Fv01yMBaSg: {
    data: {
      val: "pp.outline",
      text: "Outline Planning Permission",
    },
    type: 200,
    edges: ["xR08KmGx0Q", "yllOi9ficn", "ZyvtIUB6y4"],
  },
  Fv3wLPa8F8: {
    data: {
      text: "Resubmission exemption check",
    },
    type: 300,
    edges: ["UCcrlPa8F8"],
  },
  FynfFPa8F8: {
    data: {
      text: "Fee Exemptions check",
    },
    type: 300,
    edges: ["6WoEpPa8F8", "Tz7roPa8F8"],
  },
  GbRRkilUtP: {
    data: {
      fn: "application.fee.category.thirteen",
      info: "<p>The fee to use of a site with an area of 15 hectares or less for waste or refuse is £321 for each 0.1 hectare (or part thereof) of the site area.</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))321)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  Gj20wDmb5z: {
    data: {
      fn: "application.fee.reduction.parishCouncil",
      val: "false",
    },
    type: 380,
  },
  GlElxPa8F8: {
    data: {
      fn: "application.fee.exemption.planningApplication",
      val: "true",
    },
    type: 380,
  },
  GlubU5UIMq: {
    data: {
      text: "Class BB",
    },
    type: 100,
  },
  GnodgiXf6C: {
    data: {
      text: "Check the below in relation to extensions",
    },
    type: 100,
  },
  Gqzw4Pa8F8: {
    data: {
      color: "#EFEFEF",
      title:
        "You'll have to pay fees for both applications if you submit them on different days.",
      description:
        "<p>If you&apos;d rather wait and submit both applications on the same day, you can select &apos;save and return to this application&apos; and come back when you&apos;re ready to submit both.</p>",
      resetButton: false,
    },
    type: 8,
  },
  GyyEAhmtgt: {
    data: {
      val: "extend.front",
      text: "Add a front extension",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  GzHIDn552p: {
    data: {
      text: "Allow access across the property",
    },
    type: 200,
    edges: ["0eTsZPa8F8"],
  },
  H0jIsBvyvs: {
    data: {
      val: "ldc",
      text: "Lawful development certificate",
    },
    type: 200,
    edges: ["LrNN6jOfqi"],
  },
  H1cfxJoDoq: {
    data: {
      fn: "application.fee.category.two.noMoreThanForty",
      text: "Are you adding 40m² or less of new floor area?",
    },
    type: 100,
    edges: ["BHv4SjXecQ", "IROsSL9vqX"],
  },
  H5kEPckr2q: {
    data: {
      val: "demolish.full",
      text: "Demolish a building",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  H64rkGPcC6: {
    data: {
      val: "new.residential.dwelling",
      text: "Yes",
    },
    type: 200,
    edges: ["qFZHCLI0JU"],
  },
  H6QYFPa8F8: {
    data: {
      val: "false",
      text: "More than 12 months ago",
    },
    type: 200,
    edges: ["vzngKPa8F8"],
  },
  HTPVjdOVLA: {
    data: {
      fn: "proposal.projectType",
      text: "Does the project involve any of these changes?",
    },
    type: 100,
    edges: ["yxODqtq6bv", "hLk6zsTnfn", "Nc5IkLjBz1", "VCi4rul12u"],
  },
  HYkYRvCYQy: {
    data: {
      val: "new.other",
      text: "Other new buildings",
    },
    type: 200,
    edges: ["F0szHoF850"],
  },
  HnUzJGPne6: {
    data: {
      fn: "application.fee.exemption.disability",
      val: "false",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  HqlUd3z8Rq: {
    data: {
      fn: "multipleFees",
      val: "true",
    },
    type: 380,
  },
  HtEnjMn4wp: {
    data: {
      fn: "multipleFees",
      val: "true",
    },
    type: 380,
  },
  HubZR7Eh3l: {
    data: {
      text: "Residents to access the house",
    },
    type: 200,
    edges: ["sVe9dPa8F8"],
  },
  HvA6QPa8F8: {
    data: {
      val: "approval.conditions",
      text: "Submit details required by a condition",
    },
    type: 200,
  },
  I7u4PbO11l: {
    data: {
      val: "true",
      text: "No",
    },
    type: 200,
    edges: ["2QlIPEZfKR"],
  },
  IBf5oPa8F8: {
    data: {
      fn: "application.type",
      text: "What type of prior approval application is it?",
    },
    type: 100,
    edges: [
      "VECP7Pa8F8",
      "z9LzSPa8F8",
      "zXa2PPa8F8",
      "AbOS6Pa8F8",
      "OVTvIPa8F8",
      "b5HfXPa8F8",
      "iagnbPa8F8",
      "figTvPa8F8",
      "x1eYMPa8F8",
      "woJSYPa8F8",
      "9En7YPa8F8",
      "aX5HtgtMcV",
      "dg6Eomp8V6",
      "Kr5NtPa8F8",
      "FpOeMPa8F8",
      "eGYiZPa8F8",
      "IgnpKPa8F8",
      "RSWRYPa8F8",
      "uGngqPa8F8",
      "aGyZ67ZtYs",
      "amYGPPa8F8",
      "tBRukPa8F8",
      "LvkSyPa8F8",
      "3cRIqPa8F8",
      "iJru9Pa8F8",
      "5kcjNPa8F8",
      "IvgUAPa8F8",
      "OJFoiPa8F8",
      "ykTr2Pa8F8",
      "Y1iPAPa8F8",
      "mffyVPa8F8",
      "eJTb6Pa8F8",
    ],
  },
  ICyxaUEUyB: {
    data: {
      text: "Allow access to part of the property",
    },
    type: 200,
    edges: ["0eTsZPa8F8"],
  },
  IE9TMPa8F8: {
    data: {
      fn: "application.fee.payable",
      info: "<p>In the case of an application that is the first resubmission of an application on the same site that is similar in character and description, no planning fee is payable.</p>",
      formula: "0",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
    },
    type: 700,
  },
  IEwBTsnDgs: {
    data: {
      fn: "application.fee.category.ten",
      info: "<p>The fee for winning and working of oil or natural gas on a site with an area of more than 15 hectares is £52,886 + £207 for each additional 0.1 hectares (or part thereof) in excess of 15 hectares, up to a maximum of £107,090.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-150000)/1000))207+52886),107090))",
      samples: {},
      defaults: {
        "proposal.siteArea": "150000",
        "proposal.site.area": "150000",
        "proposal.newFloorArea": "150000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  IHVozVgPwu: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["3irSyEpQyk"],
  },
  INwAxZkrSy: {
    data: {
      val: "alter.shopfronts",
      text: "Alterations to shop fronts of the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  IQrjv8493U: {
    data: {
      fn: "application.fee.category.five.lessThanPointFive",
      tags: [],
      title: "Is the site area less than 0.5 hectares?",
      formula: "smaller(proposal.site.area, 5000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  IROsSL9vqX: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["2Rfxkih6MU"],
  },
  IZWZsbbX6g: {
    data: {
      fn: "application.fee.category.ten.noMoreThanFifteen",
      tags: [],
      title: "Is the site area no more than 15 hectares?",
      formula: "smallerEq(proposal.site.area, 150000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  IgFpmmwKUF: {
    data: {
      fn: "application.fee.category.twelve.one.fewerThanFiftyOne",
      title: "Is the project creating fewer than 51 homes?",
      formula: "smaller(proposal.newDwellings.changeOfHome.number, 51)",
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  IgnpKPa8F8: {
    data: {
      val: "pa.part6.classE",
      text: "Build new forestry buildings",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  IoxH8kQTZA: {
    data: {
      fn: "application.fee.category.one.fewerThanFiftyOne",
      title: "Is the project building fewer than 51 homes?",
      formula: "smaller(proposal.newDwellings.newBuild.number, 51)",
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  IvgUAPa8F8: {
    data: {
      val: "pa.part20.classAC",
      text: "Build homes on adjoining houses",
    },
    type: 200,
    edges: ["lIGT9aKbQR", "B9lbP8i2AH", "D5hgd7LndR"],
  },
  IvhIQPa8F8: {
    data: {
      info: "<p>Applications that involve changes to a single home (house or flat) have different fees than applications that involve changes to two or more homes (houses or flats).</p>",
      tags: [],
      text: "How many homes are affected by the changes in this application?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/contents" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Schedule 1, Part 2</a></p>',
      description: "<p>A home includes houses and flats.</p>",
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">More information about how planning fees in England are calculated (opens in a new tab)</a></p>',
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["RZBWTPa8F8", "ABQt2Pa8F8"],
  },
  IwE1KYAexf: {
    data: {
      val: "pp.full.householder",
      text: "Householder application",
    },
    type: 200,
    edges: ["FkCiEPa8F8", "c0lbdMLG5V"],
  },
  Iy53I4IH58: {
    data: {
      fn: "application.fee.category.nine.noMoreThanSevenFive",
      text: "Is the site area no more than 7.5 hectares?",
    },
    type: 100,
    edges: ["JAViaV8J9K", "VpizNbzwyN"],
  },
  J4w0IfyCRx: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["xzMRlCxdo8"],
  },
  J7G5U5qKpY: {
    data: {
      fn: "multipleFees",
      val: "false",
    },
    type: 380,
  },
  J8ip7DDUcs: {
    data: {
      fn: "project.phase",
      text: "What phase of onshore oil and gas development does this application cover?",
      allRequired: false,
    },
    type: 105,
    edges: ["FK0pCBi0lG", "nnyxbpugak", "MAmWPMtimb"],
  },
  J8sc8PuTzK: {
    data: {
      fn: "application.fee.category.four",
      info: "<p>The fee for new glasshouses on agricultural land where the external floor space created will be greater than 1000m2 is £3542.</p>",
      tags: [],
      formula: "3542",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  JA7Hftt1qU: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["E8shnhYhN7"],
  },
  JAViaV8J9K: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["3RYBsbSscF"],
  },
  JGE58WPlnJ: {
    data: {
      fn: "application.fee.category.four.lessThanThousand",
      title: "Does the project add less than 1000m2 of floor area?",
      formula: "smaller(proposal.newFloorArea.glasshouses, 1000)",
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newFloorArea.glasshouses": "0",
        "proposal.newFloorArea.agricultural": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  JOaROtQ6Ji: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["ozIYYPa8F8", "cgCBiasYsB"],
  },
  JObGRb86D9: {
    data: {
      fn: "application.fee.exemption.demolition",
      tags: [],
      text: "It looks like this project does not need to pay an application fee",
      notes:
        "Previous text: \nBased on the information you have provided, your project may be fee exempt if all of the following apply:\nit is solely about demolishing a building,\nthe building is situated in a conservation area, and\nthe building is not listed or otherwise protected.\nCan you confirm that this is correct?",
      description:
        "<p>Based on the information you have provided, your project may be exempt from paying a fee if all of the following apply:</p><ul><li><p>it is solely about demolishing a building</p></li><li><p>the building is situated in a conservation area</p></li><li><p>the building is not listed or otherwise protected</p></li></ul><p>Can you confirm that this is correct?</p>",
      howMeasured:
        "<p>Some buildings are subject to other protections, including certain ecclesiastical buildings, scheduled monuments and other buildings that the Secretary of State has protected in this way. If you have reason to believe the building being demolished may be subject to these protections, select &apos;This is not correct&apos;.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["z9jUAzJv02", "nllnhTgxl4"],
  },
  JZ6MSmACh8: {
    data: {
      val: "exploratory",
      text: "Exploratory phase",
    },
    type: 200,
    edges: ["MgAGewSd3Y"],
  },
  JaPekPa8F8: {
    data: {
      text: "Prior Approval Fee exemptions",
    },
    type: 300,
    edges: ["FynfFPa8F8", "jgqSaPa8F8"],
  },
  JgBpts5eeQ: {
    data: {
      val: "extend.basement",
      text: "Add a basement extension",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  JpFM9Pa8F8: {
    data: {
      val: "pa.part1.classAA",
      text: "Adding storeys to a house",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  JrmAuRmOmb: {
    data: {
      val: "pp.full.major",
      text: "Major",
    },
    type: 200,
    edges: ["DsW4tqd7gq"],
  },
  K3rhyPa8F8: {
    data: {
      fn: "application.fee.exemption.disability",
      info: "<p>This also applies to projects that support more than one disabled resident.</p><p>This fee exemption does not apply to your application if:</p><ul><li><p>the project also includes work that does not support a disabled resident</p></li><li><p>you are building a new home for a disabled person</p></li></ul><p>The exemption only applies to this planning application. You may have to pay for other applications, such as adding a dropped kerb.</p>",
      tags: ["sensitiveData"],
      text: "Projects that support disabled residents",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p><p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/4">UK Statutory Instruments 2012 No. 2920 Regulation 4</a>,<a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/ukpga/2010/15/section/6"> Equalities Act 2010, Section 6</a></p><p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/ukpga/1989/41/part/III">Children Act 1989, Part 3</a></p>',
      description:
        "<p>Projects that solely support the needs of a disabled resident do not have to pay a fee for this planning application. This is known as a fee exemption.</p><p>This includes projects that:</p><ul><li><p>give access to or within a building to a disabled resident</p></li><li><p>improve a disabled resident&apos;s health, comfort or safety</p></li><li><p>accommodate carers or specialised equipment</p></li></ul><p>To get the exemption you will need to give more information to show how the project supports a disabled person.</p><p><strong>Is this project solely to support the needs of a disabled resident?</strong></p>",
      howMeasured:
        "<p>In this context, the definition of disabled comes from 2 pieces of legislation:</p><ul><li><p>Section 6 of the Equalities Act 2010 defines a disabled person over 18 years old</p></li><li><p>Part 3 of the Children Act 1989 defines a disabled child</p></li></ul><p></p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["4IAFlPa8F8", "BFrOnPa8F8"],
  },
  KOU2ePa8F8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["wNf8uPa8F8"],
  },
  KYsjlsTqiL: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["LiH3XGKtnT"],
  },
  KbjDPi05rA: {
    data: {
      fn: "application.fee.category.five",
      info: "<p>The fee for the erection of dwellinghouses on a site with an area of less than 0.5 hectare is £588 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))588)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  KeiLsEFFIJ: {
    data: {
      info: "<p>There are different fees depending on the purpose of the works.</p>",
      text: "What will the new road, path or driveway will be used for?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Part 2 (7)</a></p>',
    },
    type: 100,
    edges: ["HubZR7Eh3l", "GzHIDn552p", "ICyxaUEUyB"],
  },
  KlFVyPa8F8: {
    data: {
      val: "pa.part3.classS",
      text: "Convert an agricultural building to a school",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  KmCtnBuFRd: {
    data: {
      tags: [],
      text: "Category 12 (1) - Change of use from single home to homes",
    },
    type: 300,
    edges: ["BKv83EXmb6", "6nRH86hisN", "IgFpmmwKUF", "2RpQVXeBvk"],
  },
  Kr5NtPa8F8: {
    data: {
      val: "pa.part4.classE",
      text: "Use a building or land to shoot a film",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  KsHWRvp8QI: {
    data: {
      val: "extend.roof",
      text: "Add a roof extension",
    },
    type: 200,
  },
  Kty9YPa8F8: {
    data: {
      fn: "application.fee.exemption.resubmission",
      text: "Does the application qualify for a resubmission exemption?",
      description: "<p>This is also known as 'free go'.</p>",
    },
    type: 100,
    edges: ["XpK8GPa8F8", "WMxzEPa8F8"],
  },
  KvdnB0XWIs: {
    data: {
      val: "alter.swimmingPool",
      text: "Install a swimming pool",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  KwuNzBII7G: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>Each category of development has its own associated fee. The application fee is calculated from one or more categories of development, depending on the works involved in the project.</p><p>For example, the application fee for a project that includes new build dwellinghouses and changes of use will be made up of whichever of the two fees is highest.</p>",
      tags: [],
      title: "Highest between total of (1 and 2 to 4) or (5 to 13)",
      formula:
        "max(application.fee.category.oneToFour, application.fee.category.fiveToThirteen.max)",
      samples: {},
      defaults: {
        "application.fee.category.oneToFour": "0",
        "application.fee.category.fiveToThirteen.max": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">GOV.UK guidance on fees for planning applications.</a></p><p><br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications#mixed-development-calculated">GOV.UK guidance on fees for mixed developments.</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  KxHVaPa8F8: {
    data: {
      val: "pp.full.householder",
      text: "Householder",
    },
    type: 200,
    edges: ["YizU5Pa8F8", "jxpxcPa8F8"],
  },
  L1mNmWfleR: {
    data: {
      text: "Mineral Extraction fees",
    },
    type: 300,
    edges: ["fNQaWaFYdm", "tCdVX3SUKf"],
  },
  L45qOhB9W4: {
    data: {
      text: "Subdividing multiple homes",
    },
    type: 200,
    edges: ["Z8Hl1ilhqm"],
  },
  L7jClEPwU1: {
    data: {
      fn: "applicant.type",
      info: "<p>Applications from parish councils or community councils pay a reduced planning fee of 50%.</p>",
      tags: [],
      text: "Is the application being made by (or on behalf of) a parish or community council?",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/11">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11</a></p>',
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["NMxAntR0rS", "6rNQLrYMxA"],
  },
  LiH3XGKtnT: {
    data: {
      fn: "application.fee.category.five",
      info: "<p>The fee for the erection, alteration of replacement of plant or machinery on a site with an area of 1 to 5 hectares is £635 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))635)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  LjjCe6JWxZ: {
    data: {
      tags: [],
      text: "Category 10 - Winning and working of oil or natural gas",
    },
    type: 300,
    edges: ["IZWZsbbX6g", "B2Ze4jA7t1"],
  },
  LrNN6jOfqi: {
    data: {
      fn: "proposal.materialChangeOfUse",
      info: "<p>A different fee will apply if a material change of use is taking place.</p>",
      text: "Do the changes represent a 'material' change in the use of the property?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2020/757" target="_self">The Town and Country Planning (Use Classes) (Amendment) (England) Regulations 2020</a></p>',
      description:
        "<p>This means the changes involve using the property for a purpose that is outside its current use class.</p>",
      howMeasured:
        '<p><strong>A material change of use</strong> means any change in the use of the property that causes it to fall into another use class, according to the Use Classes Order.  <a href="https://lichfields.uk/media/6158/guide-to-the-use-classes-order-in-england.pdf" target="_self">Find out more about the use classes in England</a></p>',
    },
    type: 100,
    edges: ["MmQw3Vf3TJ", "dfJrGByrTR"],
  },
  Lugp6qCIUH: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["vBHI6Pa8F8"],
  },
  LvkSyPa8F8: {
    data: {
      val: "pa.part20.classZA",
      text: "Demolish buildings and build homes in their place",
    },
    type: 200,
    edges: ["lIGT9aKbQR", "B9lbP8i2AH", "D5hgd7LndR"],
  },
  LyIRWs6L0T: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["b5HtwfBfzT"],
  },
  MAmWPMtimb: {
    data: {
      val: "production",
      text: "Production phase",
    },
    type: 200,
    edges: ["LjjCe6JWxZ"],
  },
  MQhvwLjFki: {
    data: {
      fn: "application.fee.category.three.lessThanThousand",
      text: "Are you adding less than 1000m² of new floor area?",
    },
    type: 100,
    edges: ["k9agFcLV9g", "7Nj5T8gAhi"],
  },
  MSM7kIMwy7: {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for new agricultural buildings where the external floor space created will be at least 1000m2 but no more than 4215m2 is £5,077 + a further £635 for each 75m2 (or part thereof) in excess of 1000m2.</p>",
      tags: [],
      formula: "((ceil((proposal.newFloorArea.agricultural-1000)/75))635+5077)",
      samples: {},
      defaults: {
        "proposal.newFloorArea": "1000",
        "proposal.newFloorArea.agricultural": "1000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  MV85FPa8F8: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The planning fee for an application for a Certificate of Lawfulness not to comply with a condition or limitation is £298.</p>",
      tags: [],
      formula: "298",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  MXbz0Msg6u: {
    data: {
      fn: "application.fee.category.thirteen.noMoreThanFifteen",
      text: "Is the site area no more than 15 hectares?",
    },
    type: 100,
    edges: ["4eh5WYYjIr", "oshD526uxv"],
  },
  MgAGewSd3Y: {
    data: {
      tags: [],
      text: "Category 9 - Exploratory drilling",
    },
    type: 300,
    edges: ["8WOqWkBYwK", "Iy53I4IH58"],
  },
  MhS6wiXo1o: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["cwGln3TVDu"],
  },
  MmQw3Vf3TJ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["2d0382RrWN"],
  },
  MxtRkOMMry: {
    data: {
      info: "<p>A fee of £578 applies if a non-profit sports organisation makes an application for works to playing fields that do not involve constructing buildings. </p>",
      tags: [],
      text: "Is the applicant a non-profit sports organisation?",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 3</a></p>',
      description:
        "<p>For example, a sports club, society or community organisation.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["tJ1TUo4SnR", "iaq6mdeiAb"],
  },
  N1fwg9KEpi: {
    data: {
      fn: "multipleFees",
      val: "true",
    },
    type: 380,
  },
  N6UeSFjdRk: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["2Wim8uoCkG"],
  },
  N6VFJqu05Q: {
    data: {
      fn: "proposal.projectType",
      tags: [],
      text: "What types of changes does the application relate to?",
      allRequired: false,
      neverAutoAnswer: false,
    },
    type: 105,
    edges: ["0ZCQxqEdYM", "2f1245TriK", "2tWGlaXGlp"],
  },
  NEwa1ZUOqF: {
    data: {
      val: "other",
      text: "Other",
    },
    type: 200,
    edges: ["BGhWlElSMD", "kNVSMHBtiM"],
  },
  NMxAntR0rS: {
    data: {
      val: "parishCouncil",
      text: "Yes",
    },
    type: 200,
    edges: ["zB1Q8MnzRG"],
  },
  NUPN1DlCtF: {
    data: {
      text: "No CIL flag -> except the conversion of a single dwelling house into two or more separate dwellings with no additional gross internal area created",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  NUwFz4Au3d: {
    data: {
      fn: "proposal.projectType",
      text: "What types of changes does the application relate to?",
      allRequired: false,
    },
    type: 105,
    edges: [
      "08KqKkUtJQ",
      "VKzenRXu1z",
      "bi6g439yqx",
      "SXu16l94hR",
      "6d4s6jGrxF",
      "nnpv227SFX",
      "n7SE1HhtvX",
    ],
  },
  Nc5IkLjBz1: {
    data: {
      val: "unit",
      text: "Merging or subdividing a property",
    },
    type: 200,
    edges: ["HnUzJGPne6"],
  },
  NcU3sPa8F8: {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      title: "Set payable fee to £0",
      formula: "0",
      samples: {},
      defaults: {},
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  NkqDGgreCg: {
    data: {
      val: "add",
      text: "Yes",
    },
    type: 200,
    edges: ["NUPN1DlCtF", "KmCtnBuFRd"],
  },
  Nqpb6NZ5EF: {
    data: {
      fn: "proposal.projectType",
      text: "Do the proposals involve the construction of new buildings?",
      allRequired: false,
    },
    type: 105,
    edges: ["vGNV9qIX2X", "95qwwghlI3"],
  },
  Nt0R0Pa8F8: {
    data: {
      fn: "application.fee.payable",
      info: "<p>If the application is being made by a non-profit sports organisation for works to playing fields that do not involve the erection of buildings, a standard flat fee of £588 applies.</p>",
      tags: [],
      formula: "588",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 3</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  O0B76UcDOa: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>A fee of £578 applies if a non-profit sports organisation makes an application for works to playing fields that do not involve constructing buildings. </p>",
      tags: [],
      title: "Set the flat fee as the fee calculated",
      formula: "578",
      samples: {},
      defaults: {
        "application.fee.calculated": "0",
      },
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 3</a></p>',
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  O3FFpIEs30: {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for the erection of agricultural buildings on a site with an area of less than 1 hectare is £588 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))588)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2023/1197" rel="noopener noreferrer nofollow" target="_blank">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a target="_self" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  O5eCvlaZ0S: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["Pj2e1n83xY"],
  },
  OFod3Pa8F8: {
    data: {
      text: "I understand",
    },
    type: 200,
  },
  OJFoiPa8F8: {
    data: {
      val: "pa.part20.classAD",
      text: "Build homes on detached houses",
    },
    type: 200,
    edges: ["lIGT9aKbQR", "B9lbP8i2AH", "D5hgd7LndR"],
  },
  ONCLm6zTcH: {
    data: {
      val: "alter.facades",
      text: "Alterations to facades of the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  OVTvIPa8F8: {
    data: {
      val: "pa.part3.classMA",
      text: "Convert a commercial building into a home or homes",
    },
    type: 200,
    edges: ["iADo8Pa8F8"],
  },
  OXqMmPa8F8: {
    data: {
      val: "pa",
      text: "Prior approval",
    },
    type: 200,
    edges: ["76rlAPa8F8", "JaPekPa8F8", "bZHQGPNb1p"],
  },
  Oo3F9LmEIu: {
    data: {
      fn: "proposal.use",
      tags: [],
      text: "What is the new use?",
      allRequired: false,
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 105,
    edges: [
      "b1iztmE5ZJ",
      "kKoqx2ETO3",
      "0OHoU3h2or",
      "jr55BspqGH",
      "SwpXVAgh3T",
    ],
  },
  Opi14Pa8F8: {
    data: {
      val: "demolition",
      text: "Yes",
    },
    type: 200,
    edges: ["VGTNBPa8F8"],
  },
  P15TKPa8F8: {
    data: {
      info: "<p>You do not have to pay the fee if you re-submit an application for Prior Approval that is for the same site, and of a similar character to a previous application for Prior Approval.</p><p>This fee exemption only applies once.</p>",
      text: "When did you submit the original application?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      howMeasured:
        "<p>The proposals must have been of the same character or description. Your planning officer will assess whether the site and description of the works are the same as the original application.</p>",
    },
    type: 100,
    edges: ["qul7HPa8F8", "H6QYFPa8F8"],
  },
  PEc4YPa8F8: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["fBXtXPa8F8"],
  },
  PLdbaPa8F8: {
    data: {
      info: "<p>If you are not sure whether your application will qualify as a resubmission, you should go back and answer 'No' to that question. You will then be charged the full planning fee.</p>",
      text: "To qualify for a fee exemption, the proposed works must be of a similar description to the original application",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      allRequired: true,
      description:
        "<p>If your planning officer determines that this is not the case, your entire application will be marked as invalid.</p>",
    },
    type: 105,
    edges: ["OFod3Pa8F8"],
  },
  PQrrQg3ZME: {
    data: {
      info: "<p>We will use this to calculate the correct planning fee for your application.</p>",
      text: "Enter the exact amount of new floor area created by the project",
      notes: "Example text for LDC flow",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/contents">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Schedule 1, Part 2</a></p>',
      description:
        '<p>This question refers to the <a target="_self" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/publications/measuring-practice-for-voa-property-valuations/code-of-measuring-practice-definitions-for-rating-purposes">Gross External Area</a> (GEA)</p>',
      howMeasured:
        "<p>Gross External Area (GEA)</p><p>Includes:</p><ul><li><p>perimeter wall thickness and external projections</p></li><li><p>areas occupied by internal walls (whether structural or not) and partitions</p></li><li><p>columns, piers, chimney breasts, stairwells, lift wells etc</p></li><li><p>lift rooms, plant rooms, tank rooms, fuel stores, whether or not above roof level</p></li><li><p>open-sided covered areas (should be stated separately)</p></li></ul><p>Does not include:</p><ul><li><p>open fire escapes</p></li><li><p>open balconies</p></li><li><p>open sided covered ways</p></li><li><p>Open vehicle parking areas, terraces and the like</p></li><li><p>minor canopies</p></li><li><p>any area with a headroom of less than 1.5m (except under stairways)</p></li><li><p>any area under the control of service or other external authorities</p></li></ul>",
    },
    type: 100,
  },
  PWpWtYE8HD: {
    data: {
      fn: "application.fee.category.two",
      info: "<p>The fee for erecting new buildings (with the exception of dwellinghouses, agricultural buildings, or plant/machinery) where the external floor space created is greater than 3750m2 is £31,385 + £189 for every additional 75m2 (or part thereof) in excess of 3750m2, up to a maximum of £411,885.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.newFloorArea.other-3750)/75))189+31385),411885))",
      samples: {},
      defaults: {
        "proposal.newFloorArea": "3750",
        "proposal.newFloorArea.other": "3750",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  PajtUPa8F8: {
    data: {
      val: "pa.part4.classBB",
      text: "Put up a temporary structure (listed)",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  Pe1Qaxggp0: {
    data: {
      text: "Below needs to immediately sort based on project type.",
    },
    type: 100,
  },
  PfVKlCLbTx: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["nD3ebPa8F8"],
  },
  PgCgjPa8F8: {
    data: {
      text: "Fee increases",
    },
    type: 300,
    edges: ["grZh1Pa8F8", "2u5dQPa8F8"],
  },
  Pj2e1n83xY: {
    data: {
      info: "<p>In the case where 2 alternative applications are being submitted by the same applicant, for the same site and on the same day, then all but the largest of the fees qualify for a reduction of 50%.</p>",
      tags: [],
      text: "Which of the applications has the largest planning fee?",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10</a></p>',
      description:
        "<p>This question only applies to applications for alternative proposals on the same site that are sent on the same day.</p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["ymUYdipTPf", "Fa5EddNOhS", "sZrDuhC199"],
  },
  Q2axEoIVxF: {
    data: {
      fn: "application.fee.exemption.demolition",
      val: "false",
      operation: "replace",
    },
    type: 380,
  },
  QI84QPa8F8: {
    data: {
      text: "where's the legislation that says agree condition applications about demolition are fee exempt?",
    },
    type: 100,
  },
  QSv8lWrP4U: {
    data: {
      fn: "application.fee.category.nine",
      info: "<p>The fee for exploratory drilling for oil or natural gas on a site with an area of more than 15 hectares is £52,269 + £207 for each additional 0.1 hectares (or part thereof) in excess of 15 hectares, up to a maximum of £411,885.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-75000)/1000))207+52269),411885))",
      samples: {},
      defaults: {
        "proposal.siteArea": "75000",
        "proposal.site.area": "75000",
        "proposal.newFloorArea": "75000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  QUedSPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["jkGS7Pa8F8"],
  },
  QWqDJWnyMw: {
    data: {
      fn: "multipleFees",
      val: "false",
      operation: "replace",
    },
    type: 380,
  },
  Qb5rTDp4ZZ: {
    data: {
      val: "alter.equipment.charging",
      text: "Install an electric vehicle charging point",
    },
    type: 200,
    edges: ["Delw8qkG4k"],
  },
  QbBsRyCp2f: {
    data: {
      val: "amendment.nonMaterial",
      text: "Non-material amendment",
    },
    type: 200,
    edges: ["8fqYslir45", "dBT3wdKFnx"],
  },
  QuqPEtbCCM: {
    data: {
      fn: "application.fee.pa.part20.fewerThanFiftyOne",
      text: "Are you building fewer than 51 new homes?",
    },
    type: 100,
    edges: ["Zdjjg8xJQV", "PfVKlCLbTx"],
  },
  RHHM01SdDC: {
    data: {
      fn: "proposal.projectType",
      text: "Does the project involve any of these changes?",
    },
    type: 100,
    edges: [
      "wPNig6foFD",
      "tRSUGQKQOM",
      "ZnwjI7YWc7",
      "cKtNQDXG85",
      "i211eDqZ0E",
    ],
  },
  RQAPcPa8F8: {
    data: {
      text: "Planning applications exemption",
    },
    type: 300,
    edges: ["VuEuGPa8F8"],
  },
  RSWRYPa8F8: {
    data: {
      val: "pa.part7.classC",
      text: "Install click and collect facilities",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  RW5QtIxAdS: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["7nqDNwGEAV"],
  },
  RZBWTPa8F8: {
    data: {
      text: "1",
    },
    type: 200,
    edges: ["erMj9Pa8F8"],
  },
  RdMkLJU15a: {
    data: {
      val: "alter.soilPipes",
      text: "Add or replace a soil pipe",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  RhksIB2kCB: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["cobIsVYB05"],
  },
  RkqmVtMddQ: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["XTNM4HDzbA"],
  },
  RlezbU37yg: {
    data: {
      tags: [],
      text: "11 (3) (c) in the case of an application under section 192(1)(a) or (b) (or under both paragraphs), half the amount that would be payable in respect of an application for planning permission to institute the use or carry out the operations specified in the application (or an application for planning permission to do both, as the case may be).",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  S1e02Pa8F8: {
    data: {
      info: "<p>For changes of use permitted made under a permission granted</p>\n<p></p>\n",
      text: "Add GPDO P3, Class V exemption",
      policyRef:
        "<p>https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3/crossheading/class-v-changes-of-use-permitted-under-a-permission-granted-on-an-application</p>\n",
    },
    type: 100,
  },
  SFFaSG3AJ4: {
    data: {
      val: "appraisal",
      text: "Appraisal phase",
    },
    type: 200,
    edges: ["LjjCe6JWxZ"],
  },
  SMx1vsSmnn: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["3sIYdXs79N"],
  },
  SWUTvqoW7C: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["m8heXj36ok"],
  },
  SXB4LUDlk1: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["2pjavGv4UC", "YyQQs1ScBh"],
  },
  SXu16l94hR: {
    data: {
      val: "alter",
      text: "Alteration",
    },
    type: 200,
    edges: ["d5DNs0IMDz"],
  },
  Sb77Twm3as: {
    data: {
      fn: "multipleFees",
      val: "true",
    },
    type: 380,
  },
  SgV6xoOF9Y: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["MSM7kIMwy7"],
  },
  Skk3ibpWwu: {
    data: {
      tags: [],
      text: "Category 5 - Plant equipment or machinery",
    },
    type: 300,
    edges: ["vBcp7IHOl8", "qoen3eFGNY", "ht4PAghId6"],
  },
  SmcYnPa8F8: {
    data: {
      fn: "application.fee.payable",
      info: "<p>If the proposed works (to either a home or within the curtilage of a home) is for the <strong>sole</strong> purpose of providing either:</p>\n<p></p>\n<p>- A means of access to (or within) the dwellinghouse for a disabled resident (current or future)</p>\n<p></p>\n<p>OR</p>\n<p></p>\n<p>- Providing facilities that are designed to ensure the disabled persons safety, health or comfort</p>\n<p></p>\n<p>OR</p>\n<p></p>\n<p>- Providing disabled access to a public building</p>\n<p></p>\n<p>Then no planning fee will be payable for this application.</p>",
      formula: "0",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/4" target="_self">UK Statutory Instruments 2012 No. 2920 Regulation 4</a></p>',
    },
    type: 700,
  },
  SoLrKPa8F8: {
    data: {
      fn: "application.fee.reduction.parishCouncil",
      info: "<p>Applications made by a parish council or community council pay a reduced planning fee (50%).</p>",
      text: "Does the application qualify for the parish council reduction?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/11" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11</a></p>',
    },
    type: 100,
    edges: ["2arW9Pa8F8", "QUedSPa8F8"],
  },
  SsZvSJguD3: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["XKTGA3zvR6"],
  },
  SwpXVAgh3T: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: ["5ifm7Gy5t9"],
  },
  SySW7Pa8F8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["6ncXTPa8F8"],
  },
  T0rSpVPf2j: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["Q2axEoIVxF"],
  },
  TC9NbD9bR7: {
    data: {
      fn: "application.fee.category.one",
      info: "<p>The fee for building more than 50 new homes is £31,385 + £189 for each additional new build home, up to a maximum of £411,885.</p>",
      tags: [],
      formula:
        "(min((31385+((proposal.newDwellings.newBuild.number-50)*189)),411885))",
      samples: {},
      defaults: {
        "application.numberNewHomes": "50",
        "application.numberTotalHomes": "50",
        "proposal.newDwellings.number": "50",
        "proposal.newDwellings.newBuild.number": "51",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  TK7YNbocxE: {
    data: {
      val: "alter.bayWindow",
      text: "Bay window changes to the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  TOzmV1VTad: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["jV7PXzK06A"],
  },
  TbBmGPa8F8: {
    data: {
      val: "pa.part20.classAA",
      text: "Build homes on a detached commercial building",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  TlEYGBBtUZ: {
    data: {
      text: "By others",
    },
    type: 200,
    edges: ["0eTsZPa8F8"],
  },
  TnTiOPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["8cESkPa8F8"],
  },
  Tug4eELBcY: {
    data: {
      fn: "proposal.newFloorArea.other",
      info: "<p>Dwellinghouses and agricultural buildings are treated differently for fee calculations.</p>",
      tags: [],
      title:
        "How much external floor space is being created by the new buildings?",
      units: "m²",
      isInteger: false,
      description: "<p>Exclude dwellinghouses and agricultural buildings.</p>",
      howMeasured:
        '<p><strong>Dwellinghouse </strong>means a building used only as a single private dwellinghouse.</p><p>External floor space means the gross external area (GEA) created by the development as measured on the outside of the building for each floor, whether or not it is to be bounded (wholly or partly) by external walls of a building.</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/publications/measuring-practice-for-voa-property-valuations/code-of-measuring-practice-definitions-for-rating-purposes#gross-external-area-gea">Find out how to calculate the external floor space on GOV.UK (opens in a new tab)</a>.</p>',
      allowNegatives: false,
    },
    type: 150,
  },
  TwEI0WGVZQ: {
    data: {
      val: "alter",
      text: "Alterations",
    },
    type: 200,
    edges: ["c6MLB5JT0B"],
  },
  Tz7roPa8F8: {
    data: {
      fn: "application.type",
      text: "What type of prior approval application is it?",
    },
    type: 100,
    edges: [
      "vBDR7Pa8F8",
      "JpFM9Pa8F8",
      "u5FAnPa8F8",
      "W0musPa8F8",
      "kK1zuPa8F8",
      "70LcZPa8F8",
      "gbKXTPa8F8",
      "2FscnPa8F8",
      "KlFVyPa8F8",
      "ht3DpPa8F8",
      "PajtUPa8F8",
      "F08A3ofaQF",
      "8wmpACT9nf",
      "WOkrcPa8F8",
      "lwpGxPa8F8",
      "zQ1w4Pa8F8",
      "7MawGPa8F8",
      "c4zAkPa8F8",
      "knzX5Pa8F8",
      "3ZVXr5U2H0",
      "qfbJIPa8F8",
      "eb6s0Pa8F8",
      "3V8fJPa8F8",
      "CGN0DkgRUY",
      "YJxuZ8AsO7",
      "Ey5pmL45Af",
      "8ZsOdPa8F8",
      "UAkDvPa8F8",
      "TbBmGPa8F8",
      "c5Hy2Pa8F8",
      "9fwh2Pa8F8",
      "q1PUyPa8F8",
    ],
  },
  U4bTdxgkwA: {
    data: {
      fn: "application.fee.category.five.noMoreThanFive",
      text: "Is the site area no more than 5 hectares?",
    },
    type: 100,
    edges: ["KYsjlsTqiL", "c0ijWTgcv0"],
  },
  UAkDvPa8F8: {
    data: {
      val: "pa.part20.classA",
      text: "Build homes on a detached blocks of flats",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  UCcrlPa8F8: {
    data: {
      fn: "application.resubmission",
      info: "<p>You do not have to pay the fee if you re-submit an application for Prior Approval that is for the same site, and of a similar character to a previous application for Prior Approval.</p><p>This fee exemption only applies once.</p>",
      text: "Is this application a resubmission?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      description:
        "<p>Answer &apos;Yes&apos; if you have submitted an application for Prior Approval related to works of the same character on the same site before.</p>",
      howMeasured:
        "<p>The proposals must have been of the same character or description. Your planning officer will assess whether the site and description of the works are the same as the original application.</p>",
    },
    type: 100,
    edges: ["KOU2ePa8F8", "s8MaZPa8F8"],
  },
  UFADal50zA: {
    data: {
      fn: "application.fee.reduction.sports",
      info: "<p>A fee of £578 applies if a non-profit sports organisation makes an application for works to playing fields that do not involve constructing buildings. </p>",
      title: "Is the calculated fee larger than the sports flat fee?",
      formula: "larger(application.fee.calculated, 578)",
      defaults: {
        "application.fee.calculated": "0",
      },
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 3</a></p>',
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  UHzoCPa8F8: {
    data: {
      fn: "application.fee.payable",
      info: "<p>This application does not qualify for any exemptions or reductions</p>",
      formula: "application.fee.calculated*1",
      defaults: {
        "application.fee.calculated": "1",
      },
    },
    type: 700,
  },
  UOih1OaDcF: {
    data: {
      fn: "proposal.projectType",
      tags: ["automation"],
      text: "Select the changes involved in the project",
      allRequired: false,
      neverAutoAnswer: false,
    },
    type: 105,
    edges: [
      "FuPCOPBMNJ",
      "6CKtkLQUXd",
      "FeSMlnNGAv",
      "TK7YNbocxE",
      "rnRhxJ2aSF",
      "281rCAn8eM",
      "INwAxZkrSy",
      "8qyCUKjjW5",
      "FhvmpUwt6C",
      "hLmz6HwYky",
      "ONCLm6zTcH",
      "n5TWnz4VsT",
      "nu825R4ARb",
      "GyyEAhmtgt",
      "3epcJHAlsc",
      "hh2qoEwYVO",
      "JgBpts5eeQ",
      "H5kEPckr2q",
      "0HP3UfQTo0",
      "YGDKgoMP4Y",
      "i6xpSILxTD",
      "UPEtrdpV9U",
      "uje2VDDgIL",
      "x5NPdGEeZe",
      "dJG10Ys32C",
      "7aU2IjJs4H",
      "9K1gBqW5cj",
      "RdMkLJU15a",
      "dJpXQ0VvSP",
      "Ua9fz76rUI",
      "vnU0feaiqf",
      "KvdnB0XWIs",
      "CEU7l9NJHC",
    ],
  },
  UPEtrdpV9U: {
    data: {
      val: "demolish.boundary",
      text: "Demolition of a fence, gate or boundary wall",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  UQXptW5LMU: {
    data: {
      tags: [],
      text: "Category 8 - Car parks, access roads",
    },
    type: 300,
    edges: ["tXwIiOD5oE"],
  },
  UT2dtglKWd: {
    data: {
      fn: "application.alternative.applicationReference",
      type: "short",
      title:
        "What is the application reference number for the other application for which you have paid full fee?",
    },
    type: 110,
  },
  UTZuBmbrtN: {
    data: {
      fn: "application.fee.category.five",
      info: "<p>The fee for the erection of dwellinghouses on a site with an area of no more than 2.5 hectare is £635 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))635)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  Ua9fz76rUI: {
    data: {
      val: "alter.cables",
      text: "Install underground cables",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  UkMpK5NxWm: {
    data: {
      val: "pp.full.major",
      text: "Major development",
    },
    type: 200,
    edges: ["aftjy4dfLS", "fOBIu1zuWf"],
  },
  Upx7BpUEtt: {
    data: {
      val: "onshoreExtractionOilAndGas.pp.waste",
      text: "Full planning permission for new development involving the storage, treatment or disposal of controlled waste including ancillary and associated development",
    },
    type: 200,
    edges: ["2Z868tdQDn"],
  },
  V6PJfv3iG6: {
    data: {
      text: "don't need to sort for free applications here (LBCs, EIAs, LDCwtlbs)",
    },
    type: 100,
  },
  V8mFRnCvGa: {
    data: {
      fn: "application.fee.category.twelve.one",
      info: "<p>The fee for a change of use of an existing dwellinghouse that results in at least 10 but no more than 50 dwellinghouses is £635 per new dwellinghouse.</p>",
      tags: [],
      formula: "(proposal.newDwellings.changeOfHome.number-1)*635",
      samples: {},
      defaults: {
        "application.numberNewHomes": "1",
        "proposal.newDwellings.number": "1",
        "proposal.newDwellings.changeOfHome.number": "10",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  VBEJfX2AH7: {
    data: {
      fn: "application.fee.category.three.noMoreThanFourThousandTwoHundredFifteen",
      text: "Are you adding no more than 4215² of new floor area?",
    },
    type: 100,
    edges: ["SgV6xoOF9Y", "RkqmVtMddQ"],
  },
  VCi4rul12u: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["xBoPLPa8F8"],
  },
  VECP7Pa8F8: {
    data: {
      val: "pa.part1.classA",
      text: "Larger extension to a house",
    },
    type: 200,
    edges: ["YteHqPa8F8"],
  },
  VGTNBPa8F8: {
    data: {
      fn: "application.fee.payable",
      formula: "0",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  VJNUpnkKo9: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
  },
  VKzenRXu1z: {
    data: {
      val: "internal",
      text: "Internal works",
    },
    type: 200,
    edges: ["sVe9dPa8F8"],
  },
  VQ7I8o2NcX: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["8Id5IumGUG"],
  },
  VdrBgh4cbh: {
    data: {
      val: "unit.merge",
      text: "Merging 2 or more properties",
    },
    type: 200,
    edges: ["5ifm7Gy5t9"],
  },
  Veh7iPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["Kty9YPa8F8"],
  },
  VmTkpPa8F8: {
    data: {
      text: "edit data fields",
    },
    type: 100,
  },
  Von4ctd6Qq: {
    data: {
      val: "amendment.minorMaterial",
      text: "Minor material amendment",
    },
    type: 200,
    edges: ["Xbw5NQiZ8c", "J7G5U5qKpY"],
  },
  VpizNbzwyN: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["QSv8lWrP4U"],
  },
  VuEuGPa8F8: {
    data: {
      info: "<p>If you are also submitting a full planning application about the same works or changes on the same day, you will not have to pay a fee for this application, because the fee for the other application covers both.</p>",
      text: "Are you submitting any other planning applications about the same works or changes?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      description:
        "<p>In addition to this one. For example, you might be submitting an application for planning permission as well as this application for prior approval.</p><p>Most people do not do this.</p>",
      howMeasured:
        "<p>Only answer &apos;yes&apos; if the other application is about the same works or changes.</p>",
    },
    type: 100,
    edges: ["vvpfYPa8F8", "quwxkPa8F8"],
  },
  W0musPa8F8: {
    data: {
      val: "pa.part3.classM",
      text: "Convert a mixed use building into a home",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  W3phGXUdJG: {
    data: {
      val: "pp.outline",
      text: "Outline planning permission",
    },
    type: 200,
    edges: ["aftjy4dfLS", "N1fwg9KEpi"],
  },
  WMxzEPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["dGxzaPa8F8"],
  },
  WOkrcPa8F8: {
    data: {
      val: "pa.part4.classE",
      text: "Use a building or land to shoot a film",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "cOSGyPa8F8"],
  },
  WPSmnPa8F8: {
    data: {
      fn: "application.fee.payable",
      info: "<p>In the case of an application that is the first resubmission of an application on the same site that is similar in character and description, no planning fee is payable.</p>",
      formula: "0",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
    },
    type: 700,
  },
  WVwzJPa8F8: {
    data: {
      val: "approval.conditions",
      text: "Submit details required by a condition",
    },
    type: 200,
    edges: [
      "7KBWCPa8F8",
      "QI84QPa8F8",
      "5IJymy3EjT",
      "DBzKKPa8F8",
      "mE70bl561b",
    ],
  },
  WYp7u7KNnO: {
    data: {
      val: "existingUse",
      text: "Yes, existing use",
    },
    type: 200,
    edges: ["aftjy4dfLS", "HqlUd3z8Rq", "soLrSBtxmn"],
  },
  WxW1WPa8F8: {
    data: {
      val: "amendment",
      text: "Amend a planning permission",
    },
    type: 200,
  },
  X14NqOuR9z: {
    data: {
      val: "new",
      text: "New buildings",
    },
    type: 200,
    edges: ["euBlhLnVNp", "N6VFJqu05Q"],
  },
  X3twnvN5XU: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>Each category of development has its own associated fee. The application fee is calculated from one or more categories of development, depending on the works involved in the project.</p><p></p><p>For example, the application fee for a project that includes new build dwellinghouses and changes of use will be made up of whichever of the two fees is highest.</p>",
      tags: [],
      title: "Highest fee from category 1 and 5 to 13",
      formula:
        "max(application.fee.category.one, application.fee.category.five, application.fee.category.sixAndSeven, application.fee.category.eight, application.fee.category.nine, application.fee.category.ten, application.fee.category.eleven.one, application.fee.category.eleven.two, application.fee.category.twelve.one, application.fee.category.twelve.two, application.fee.category.thirteen)",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.ten": "0",
        "application.fee.category.two": "0",
        "application.fee.category.five": "0",
        "application.fee.category.four": "0",
        "application.fee.category.nine": "0",
        "application.fee.category.eight": "0",
        "application.fee.category.three": "0",
        "application.fee.category.thirteen": "0",
        "application.fee.category.eleven.one": "0",
        "application.fee.category.eleven.two": "0",
        "application.fee.category.twelve.one": "0",
        "application.fee.category.twelve.two": "0",
        "application.fee.category.sixAndSeven": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">GOV.UK guidance on fees for planning applications.</a></p><p><br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications#mixed-development-calculated">GOV.UK guidance on fees for mixed developments.</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  XClwJEPV8Z: {
    data: {
      fn: "application.fee.category.three.noMoreThanFourHundredSixtyFive",
      text: "Are you adding 465m² or less of new floor area?",
    },
    type: 100,
    edges: ["6SYSQkgwI0", "hqd33qvVQR"],
  },
  XEn6OpDMCh: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
  },
  XKTGA3zvR6: {
    data: {
      fn: "proposal.newDwellings.changeToHome.number",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: ["toReview"],
      notes:
        "Previous definition: A dwellinghouse is a building that is used as a single private dwelling and for no other purpose.",
      title: "How many dwellinghouses does your project create?",
      isInteger: false,
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      description:
        "<p>A dwellinghouse is a building used as a place to live by one household.</p><p>Dwellinghouses can include houses and individual flats, but not Houses in Multiple Occupation or blocks of flats. </p>",
      howMeasured:
        "<p>This is the total number of dwellinghouses resulting from your project.</p>",
      allowNegatives: false,
    },
    type: 150,
  },
  XMQSwWgsqe: {
    data: {
      fn: "application.fee.category.eleven.one",
      info: "<p>The fee for winning and working of minerals on a site with an area of more than 15 hectares is £47,963 + £189 for each additional 0.1 hectares (or part thereof) in excess of 15 hectares, up to a maximum of £107,090.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-150000)/1000))189+47963),107090))",
      samples: {},
      defaults: {
        "proposal.siteArea": "150000",
        "proposal.site.area": "150000",
        "proposal.newFloorArea": "150000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  XRN2yEAVyu: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: ["1VH3bvWxkd"],
  },
  XTNM4HDzbA: {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for new agricultural buildings where the external floor space created will be more than 4215m2 is £31,385 + a further £189 for each 75m2 (or part thereof) in excess of 4215m2, up to a maximum of £411,885.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.newFloorArea.agricultural-4215)/75))189+31385),411885))",
      samples: {},
      defaults: {
        "proposal.newFloorArea": "4215",
        "proposal.newFloorArea.agricultural": "4215",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  XVrtU8MVgC: {
    data: {
      val: "ldc.proposed",
      text: "Lawful Development Certificate for proposed changes",
    },
    type: 200,
    edges: ["aftjy4dfLS", "clwYYIcLMb"],
  },
  Xbw5NQiZ8c: {
    data: {
      text: "MMA fees",
    },
    type: 300,
    edges: ["eXcBvKsNsb"],
  },
  Xc2AWJxJij: {
    data: {
      fn: "disabilityExemptionEvidence.rule",
      val: "recommended",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  XfrdFv6tnN: {
    data: {
      fn: "proposal.projectCategory",
      tags: ["automation"],
      text: "Does the application also relate to an existing use or building works (other than those in breach of a condition)?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["zPPjy7yLtj", "WYp7u7KNnO", "JOaROtQ6Ji"],
  },
  XifyuPa8F8: {
    data: {
      fn: "application.fee.reduced",
      info: "<p>Applications made by a Parish Council or Community Council pay a reduced planning fee (50%)</p>",
      formula: "application.fee.calculated*0.5",
      defaults: {
        "application.fee.calculated": "1",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/11" target="_self">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11</a></p>',
    },
    type: 700,
  },
  Xk4DVf8jLH: {
    data: {
      fn: "application.fee.category.two.lessThanOne",
      tags: [],
      title: "Is the site area less than 1 hectares?",
      formula: "smaller(proposal.site.area, 10000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  XpK8GPa8F8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["IE9TMPa8F8"],
  },
  XsVpKF6f6V: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["gwp36BWhwI"],
  },
  Y1iPAPa8F8: {
    data: {
      val: "pa.part17",
      text: "Coal mining",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  Y1zfjOr5OO: {
    data: {
      fn: "proposal.projectType",
      tags: [],
      text: "Does your project also involve new build dwellinghouses?",
      description:
        "<p>A dwellinghouse is a building that is used as a single private dwelling and for no other purpose.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["H64rkGPcC6", "SsZvSJguD3"],
  },
  Y78JXaikdX: {
    data: {
      val: "alter.highways",
      text: "Highway or means of access to a highway",
    },
    type: 200,
    edges: ["Pe1Qaxggp0", "KeiLsEFFIJ"],
  },
  YGDKgoMP4Y: {
    data: {
      val: "changeOfUse",
      text: "Changes of use",
    },
    type: 200,
    edges: ["u13mmo9UgG", "smOmd5Q3Z9"],
  },
  YJxuZ8AsO7: {
    data: {
      val: "pa.part18.classA",
      text: "Local or private act or order",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "RQAPcPa8F8"],
  },
  YMbKtPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["UHzoCPa8F8"],
  },
  YQEPwnHsdZ: {
    data: {
      fn: "project.phase",
      text: "What phase of onshore oil and gas development does this application cover?",
      allRequired: false,
    },
    type: 105,
    edges: ["JZ6MSmACh8", "SFFaSG3AJ4", "gP85IzivIY"],
  },
  YR4p23OlpU: {
    data: {
      fn: "application.fee.category.three.noMoreThanFourHundredSixtyFive",
      title: "Does the project add no more than 465m2 of floor area?",
      formula: "smallerEq(proposal.newFloorArea.agricultural, 465)",
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newFloorArea.agricultural": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  YUBqFPa8F8: {
    data: {
      text: "What was the result of the original application?",
    },
    type: 100,
    edges: ["3WWBzPa8F8", "lhVuhPa8F8", "Z16HyPa8F8"],
  },
  YizU5Pa8F8: {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      title: "Set payable fee to £86",
      formula: "86",
      samples: {},
      defaults: {},
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  YnzpnPa8F8: {
    data: {
      text: "Another type",
    },
    type: 200,
    edges: ["BHrhzPa8F8", "x2PNJPa8F8"],
  },
  YteHqPa8F8: {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      formula: "240",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  YyQQs1ScBh: {
    data: {
      fn: "application.fee.category.withinOne",
      text: "Does the proposal include developments in category 1?",
    },
    type: 100,
    edges: ["aHpK1A5Zsx", "An3PPndUhz"],
  },
  YzszdxmAoq: {
    data: {
      val: "changeOfUse",
      text: "Yes, a change of use",
    },
    type: 200,
    edges: ["Zl4gCy8TLP"],
  },
  Z16HyPa8F8: {
    data: {
      text: "Approved",
    },
    type: 200,
    edges: ["aDEzsPa8F8"],
  },
  Z6Wa6cvyS0: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>Each category of development has its own associated fee. The application fee is calculated from one or more categories of development, depending on the works involved in the project.</p>",
      tags: [],
      title: "Set application fee to category 1",
      formula: "application.fee.category.one",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">GOV.UK guidance on fees for planning applications.</a></p><p><br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications#mixed-development-calculated">GOV.UK guidance on fees for mixed developments.</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  Z8Hl1ilhqm: {
    data: {
      tags: [],
      text: "Category 12 (2) - Change of use to home",
    },
    type: 300,
    edges: ["Y1zfjOr5OO", "tCR4GwaVgi", "lW265r2ara", "cfshP9nlkd"],
  },
  ZF2kzjzFJR: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["8jPUC4bc2A"],
  },
  ZMAFw0r3gE: {
    data: {
      val: "unit.subdivide",
      text: "Subdividing a single home",
    },
    type: 200,
    edges: ["arpJzBOGvA"],
  },
  ZRnTlKMuRe: {
    data: {
      fn: "application.fee.category.two.lessThanOne",
      text: "Is the site area less than 1 hectares?",
    },
    type: 100,
    edges: ["02oU2Urz4y", "fK4Uo0eMHI"],
  },
  ZW6Jz3mUyv: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["MQhvwLjFki"],
  },
  ZaNapBtHVv: {
    data: {
      fn: "application.type",
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["H0jIsBvyvs", "lfG6xnqKKi"],
  },
  Zdjjg8xJQV: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["lpyrUPa8F8"],
  },
  ZhfqUiPNjq: {
    data: {
      tags: [],
      text: "The enlargement, improvement or other alteration of existing dwellinghouses: 528",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  Zl4gCy8TLP: {
    data: {
      fn: "proposal.newDwellings.newBuild.number",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: [],
      title:
        "How many dwellinghouses are being created by the construction of new buildings?",
      isInteger: false,
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      description:
        "<p>This does not include homes that are not dwellinghouses or homes that result from changes of use of existing buildings.</p>",
      howMeasured:
        "<p>A dwellinghouse is a building that&apos;s only used as a place to live by one household.</p><p>Dwellinghouses can include houses and individual flats, but not Houses in Multiple Occupation or blocks of flats. </p>",
      allowNegatives: false,
    },
    type: 150,
  },
  ZnwjI7YWc7: {
    data: {
      val: "internal",
      text: "Internal works",
    },
    type: 200,
    edges: ["K3rhyPa8F8"],
  },
  Zr16ELKeew: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["1woZz7NfGP"],
  },
  ZwFbCQw9lY: {
    data: {
      fn: "proposal.newDwellings.changeOfHome.number",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: ["toReview"],
      notes:
        "AN - previous definition\n\nA dwellinghouse is a building that is used as a single private dwelling and for no other purpose.",
      title: "How many dwellinghouses does your project result in?",
      isInteger: false,
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      description:
        "<p>A dwellinghouse is a building used as a place to live by one household.</p><p>Dwellinghouses can include houses and individual flats, but not Houses in Multiple Occupation or blocks of flats. </p>",
      howMeasured:
        "<p>This is the total number of dwellinghouses resulting from your project.</p>",
      allowNegatives: false,
    },
    type: 150,
  },
  ZyvtIUB6y4: {
    data: {
      fn: "application.fee.category.three.lessThanOne",
      text: "Is the site area less than 1 hectares?",
    },
    type: 100,
    edges: ["dXLwrqFnip", "DozTGenHPv"],
  },
  aAYpMPa8F8: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["HTPVjdOVLA"],
  },
  aDEzsPa8F8: {
    data: {
      fn: "application.fee.exemption.resubmission",
      info: "<p>You do not have to pay the fee if you re-submit an application for Prior Approval that is for the same site, and of a similar character to a previous application for Prior Approval.</p><p>This fee exemption only applies once.</p>",
      text: "When was the original application decided?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      howMeasured:
        "<p>The proposals must have been of the same character or description. Your planning officer will assess whether the site and description of the works are the same as the original application.</p>",
    },
    type: 100,
    edges: ["azvZDPa8F8", "BZofSPa8F8"],
  },
  aGyZ67ZtYs: {
    data: {
      val: "pa.part9.classD",
      text: "Toll road facilities",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  aHpK1A5Zsx: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["rdA39hsJ5r", "1Blu9FN9KZ"],
  },
  aImpqPa8F8: {
    data: {
      text: "Something else",
    },
    type: 200,
  },
  aX5HtgtMcV: {
    data: {
      val: "pa.part4.classBC",
      text: "Development of a temporary campsite (FRZ 2 or 3)",
    },
    type: 200,
    edges: ["ExIvqcuLeT", "0b5aVhnxGy"],
  },
  aaUKwlHhY7: {
    data: {
      val: "ldc.proposed",
      text: "Lawful Development Certificate for proposed changes",
    },
    type: 200,
    edges: ["RlezbU37yg", "9VoeTMDU6d"],
  },
  aci0YnySmC: {
    data: {
      fn: "application.fee.reduction.alternative",
      val: "false",
    },
    type: 380,
  },
  aftjy4dfLS: {
    data: {
      tags: [],
      text: "Full PP / LDC / Outline / Reserved",
    },
    type: 300,
    edges: ["euBlhLnVNp", "Bv2KoYv9M9"],
  },
  ahSfsQ8kDW: {
    data: {
      val: "new.agriculture",
      text: "Build new agricultural building",
    },
    type: 200,
    edges: ["oqvCIJm1Vz"],
  },
  amYGPPa8F8: {
    data: {
      val: "pa.part11.classB",
      text: "Demolish a building",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  arpJzBOGvA: {
    data: {
      fn: "proposal.changeNumberOfDwellinghouses",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      text: "Does the change of use create new dwellinghouses?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      howMeasured:
        "<p>A <strong>dwellinghouse</strong> is a building that is used as a single private dwelling and for no other purpose.</p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["NkqDGgreCg", "6Iz8p4ZPP0"],
  },
  auqIOpxore: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["hDEfMrGCGb"],
  },
  azvZDPa8F8: {
    data: {
      val: "true",
      text: "Within the last 12 months",
    },
    type: 200,
    edges: ["cQwrEKfU22"],
  },
  b1iztmE5ZJ: {
    data: {
      val: "industrial.drilling",
      text: "Drilling for oil or natural gas",
    },
    type: 200,
    edges: ["n9P5vPg7W1"],
  },
  b5HfXPa8F8: {
    data: {
      val: "pa.part3.classN",
      text: "Convert a casino or amusement arcade into a home or homes",
    },
    type: 200,
    edges: ["iADo8Pa8F8"],
  },
  b5HtwfBfzT: {
    data: {
      fn: "proposal.newDwellings.newBuild.number",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: [],
      notes:
        "Previous definition: A dwellinghouse is a building that is used as a single private dwelling and for no other purpose.",
      title: "How many dwellinghouses are you building?",
      isInteger: false,
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      description:
        "<p>A dwellinghouse is a building used as a place to live by one household.</p><p>Dwellinghouses can include houses and individual flats, but not Houses in Multiple Occupation or blocks of flats. </p>",
      howMeasured:
        "<p>This is the total number of dwellinghouses resulting from your project.</p>",
      allowNegatives: false,
    },
    type: 150,
  },
  b5OPZ4n8zq: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["X3twnvN5XU"],
  },
  bJe24GrZDB: {
    data: {
      fn: "application.fee.category.three.noMoreThanTwoPointFive",
      text: "Is the site area no more than 2.5 hectares?",
    },
    type: 100,
    edges: ["Zr16ELKeew", "mhki1gy2eg"],
  },
  bKvEoPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["7CLclW6T8Y"],
  },
  bMXF1kUoeO: {
    data: {
      text: "The land surrounding a home (including outbuildings)",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  bZHQGPNb1p: {
    data: {
      fn: "multipleFees",
      val: "false",
    },
    type: 380,
  },
  bi6g439yqx: {
    data: {
      val: "demolish",
      text: "Demolition",
    },
    type: 200,
    edges: ["sVe9dPa8F8"],
  },
  bkjqv8DE5w: {
    data: {
      fn: "proposal.projectType",
      tags: [],
      text: "What types of changes does the application relate to?",
      allRequired: false,
      neverAutoAnswer: false,
    },
    type: 105,
    edges: ["wOlWzT71cj", "HYkYRvCYQy"],
  },
  c0ijWTgcv0: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["1ep25IYhwC"],
  },
  c0lbdMLG5V: {
    data: {
      fn: "multipleFees",
      val: "false",
    },
    type: 380,
  },
  c4zAkPa8F8: {
    data: {
      val: "pa.part7.classC",
      text: "Install click and collect facilities",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  c5Hy2Pa8F8: {
    data: {
      val: "pa.part20.classAB",
      text: "Build homes on an adjoining commercial or mixed use building",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  c6MLB5JT0B: {
    data: {
      fn: "proposal.projectType",
      tags: [],
      text: "What types of changes does the application relate to?",
      allRequired: false,
      neverAutoAnswer: false,
    },
    type: 105,
    edges: [
      "4b2x2PqHs9",
      "rPJeoYDtJZ",
      "eInYh6BPil",
      "hMRUukYSZu",
      "en5JMtCAve",
    ],
  },
  c8ns239Tww: {
    data: {
      tags: ["toReview"],
      text: "May want to add any local authority capture here for service charge waiver. We already know 'public sector organisation' / 'public' for applicant.type from About the applicant flow.",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
  },
  cIEzuPa8F8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["0mN90Pa8F8"],
  },
  cKtNQDXG85: {
    data: {
      val: "extend",
      text: "Extension",
    },
    type: 200,
    edges: ["K3rhyPa8F8"],
  },
  cOSGyPa8F8: {
    data: {
      fn: "application.fee.exemption.planningApplication",
      val: "false",
    },
    type: 380,
  },
  cQje8Ivm4r: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: ["f5z6RSz0G3"],
  },
  cQwrEKfU22: {
    data: {
      fn: "application.fee.exemption.resubmission",
      text: "Was the original application submitted on or before 5 December 2023?",
    },
    type: 100,
    edges: ["hxSYFSny0S", "El7t6YIzEb"],
  },
  cZvWeQuA0l: {
    data: {
      text: "[noChange isn't correct, as it could remove homes]",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  cfshP9nlkd: {
    data: {
      fn: "application.fee.category.twelve.two.fewerThanTen",
      text: "Are you creating fewer than 10 new homes?",
    },
    type: 100,
    edges: ["qTSi2kR4u0", "sIRmZD8IDO"],
  },
  cgCBiasYsB: {
    data: {
      fn: "multipleFees",
      val: "false",
    },
    type: 380,
  },
  clwYYIcLMb: {
    data: {
      fn: "multipleFees",
      val: "true",
    },
    type: 380,
  },
  cobIsVYB05: {
    data: {
      fn: "application.fee.category.twelve.one",
      info: "<p>The fee for a change of use of an existing dwellinghouse that results in more than 50 dwellinghouses is £31,385 + £189 for each additional dwellinghouse in excess of 50, up to a maximum of £411,885.</p>",
      tags: [],
      formula:
        "(min((31385+((proposal.newDwellings.changeOfHome.number-50)*189)),411885))",
      samples: {},
      defaults: {
        "application.numberNewHomes": "50",
        "proposal.newDwellings.number": "51",
        "proposal.newDwellings.changeOfHome.number": "51",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  csvOqHuy7C: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: ["yU99KR3io8", "8q3z0W6DhU", "IoxH8kQTZA", "j5OElJWetj"],
  },
  cwGln3TVDu: {
    data: {
      fn: "application.fee.category.ten",
      info: "<p>The fee for winning and working of oil or natural gas on a site with an area of 15 hectares or less is £353 for each 0.1 hectare (or part thereof) of the site area.</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))353)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  d4evN6gSDO: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["UTZuBmbrtN"],
  },
  d5DNs0IMDz: {
    data: {
      fn: "proposal.projectType",
      text: "What alterations are being made to the building?",
      allRequired: false,
    },
    type: 105,
    edges: ["Y78JXaikdX", "Qb5rTDp4ZZ", "nVVcIa9vQW"],
  },
  d5x7FpECEU: {
    data: {
      val: "onshoreExtractionOilAndGas",
      text: "Onshore oil and gas developments",
    },
    type: 200,
    edges: ["tTMyyLnsfI", "omhXpdOedQ"],
  },
  dBT3wdKFnx: {
    data: {
      fn: "multipleFees",
      val: "false",
    },
    type: 380,
  },
  dGxzaPa8F8: {
    data: {
      fn: "application.fee.exemption.planningApplication",
      info: "<p>An application for prior approval that is submitted on the same day as an application for planning permission that relates to the same development does not have to pay a fee.</p>",
      text: "Does the application qualify to the same-day-planning-application exemption?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
    },
    type: 100,
    edges: ["7WiXPPa8F8", "YMbKtPa8F8"],
  },
  dHQfFg7X9E: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["aftjy4dfLS", "HqlUd3z8Rq"],
  },
  dJG10Ys32C: {
    data: {
      val: "alter.surfaces",
      text: "Add a decked area or patio",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  dJpXQ0VvSP: {
    data: {
      val: "alter.drains",
      text: "Work on drains",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  dXLwrqFnip: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["O3FFpIEs30"],
  },
  dZp7iTVnxh: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["eId8Z1EQ7q", "0SoEm8Kw12"],
  },
  dfJrGByrTR: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["sVe9dPa8F8"],
  },
  dg6Eomp8V6: {
    data: {
      val: "pa.part4.classCA",
      text: "Put temporary school buildings on vacant commercial land",
    },
    type: 200,
    edges: ["yr26otWtSQ", "ofpUw8Ujco"],
  },
  dknMGPa8F8: {
    data: {
      fn: "application.type",
      tags: [],
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "hz5h3Pa8F8",
      "W3phGXUdJG",
      "XVrtU8MVgC",
      "qUpHMBqLWr",
      "OXqMmPa8F8",
      "WVwzJPa8F8",
      "QbBsRyCp2f",
      "Von4ctd6Qq",
      "dy5KXOeKLF",
      "d5x7FpECEU",
      "p1KRMO00fP",
      "sibSw8Kpdq",
    ],
  },
  dqq7ElIfsN: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["g0b2iPa8F8"],
  },
  dwikpJ7eVS: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["Q2axEoIVxF"],
  },
  dy5KXOeKLF: {
    data: {
      val: "approval.reservedMatters",
      text: "Apply to agree reserved matters",
    },
    type: 200,
    edges: ["aftjy4dfLS", "HtEnjMn4wp"],
  },
  e6pNcTq29v: {
    data: {
      fn: "application.fee.category.oneToThirteen",
      text: "Does the proposal include fees in category 1 or 2 to 13?",
    },
    type: 100,
    edges: ["SXB4LUDlk1", "JA7Hftt1qU"],
  },
  eGYiZPa8F8: {
    data: {
      val: "pa.part6.classB",
      text: "Build new agricultural buildings on a unit of less than 5 hectares",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  eId8Z1EQ7q: {
    data: {
      fn: "application.fee.category.fivetoThirteen",
      title: "Check if the proposal includes developments in category 5 to 13",
      formula:
        "unequal(0, sum(application.fee.category.five, application.fee.category.sixAndSeven, application.fee.category.eight, application.fee.category.nine, application.fee.category.ten, application.fee.category.eleven.one, application.fee.category.eleven.two, application.fee.category.twelve.one, application.fee.category.twelve.two, application.fee.category.thirteen))",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.ten": "0",
        "application.fee.category.two": "0",
        "application.fee.category.five": "0",
        "application.fee.category.four": "0",
        "application.fee.category.nine": "0",
        "application.fee.category.eight": "0",
        "application.fee.category.three": "0",
        "application.fee.category.thirteen": "0",
        "application.fee.category.eleven.one": "0",
        "application.fee.category.eleven.two": "0",
        "application.fee.category.twelve.one": "0",
        "application.fee.category.twelve.two": "0",
        "application.fee.category.sixAndSeven": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  eInYh6BPil: {
    data: {
      val: "alter.surfaces.parking",
      text: "Hard surfaces used for car parking",
    },
    type: 200,
    edges: ["3nmlRyUyPT", "UQXptW5LMU"],
  },
  eJTb6Pa8F8: {
    data: {
      val: "pa.part19.classTA",
      text: "Development on a closed defence site",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  eXcBvKsNsb: {
    data: {
      fn: "originalApplication.type",
      tags: [],
      text: "What type of application do you want to amend?",
      description:
        "<p>This question is about the permission you want to change.</p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["3d85AV2Yus", "JrmAuRmOmb", "cQje8Ivm4r"],
  },
  eb6s0Pa8F8: {
    data: {
      val: "pa.part14.classJ",
      text: "Install or change solar panels",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "cOSGyPa8F8"],
  },
  eenWfENwYg: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: [
      "Tug4eELBcY",
      "pcHLXmh7AP",
      "lolWA8KdK7",
      "A5UyOO01RG",
      "16XVFDanAN",
      "H1cfxJoDoq",
      "PQrrQg3ZME",
    ],
  },
  elmwFgVvtn: {
    data: {
      fn: "application.fee.category.fiveToThirteen.max",
      title: "Highest fee from category 5 to 13",
      formula:
        "max(application.fee.category.five, application.fee.category.sixAndSeven, application.fee.category.eight, application.fee.category.nine, application.fee.category.ten, application.fee.category.eleven.one, application.fee.category.eleven.two, application.fee.category.twelve.one, application.fee.category.twelve.two, application.fee.category.thirteen)",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.ten": "0",
        "application.fee.category.two": "0",
        "application.fee.category.five": "0",
        "application.fee.category.four": "0",
        "application.fee.category.nine": "0",
        "application.fee.category.eight": "0",
        "application.fee.category.three": "0",
        "application.fee.category.thirteen": "0",
        "application.fee.category.eleven.one": "0",
        "application.fee.category.eleven.two": "0",
        "application.fee.category.twelve.one": "0",
        "application.fee.category.twelve.two": "0",
        "application.fee.category.sixAndSeven": "0",
      },
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  en5JMtCAve: {
    data: {
      val: "alter",
      text: "Other alterations",
    },
    type: 200,
    edges: ["0eTsZPa8F8"],
  },
  erMj9Pa8F8: {
    data: {
      fn: "application.fee.category.sixAndSeven",
      info: "<p>The fee to apply for planning permission for the enlargement, improvement or other alteration of a single home is £528.</p>",
      tags: [],
      formula: "528",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  euBlhLnVNp: {
    data: {
      tags: [],
      text: "⚠️ Automation too generic? Need dwellinghouse specification. ⚠️",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  ew9jcbmnJp: {
    data: {
      val: "onshoreExtractionOilAndGas.pp.working",
      text: "Full planning permission for oil and gas working including exploratory, appraisal and production phases",
    },
    type: 200,
    edges: ["YQEPwnHsdZ"],
  },
  f5z6RSz0G3: {
    data: {
      fn: "application.fee.payable",
      tags: [],
      title: "Set payable fee to £586",
      formula: "586",
      samples: {},
      defaults: {},
      howMeasured:
        "<p>The fee for an application for minor material amendments to a non-major development other than householder is £586.</p>",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  f6ywSi1uJW: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["ZwFbCQw9lY"],
  },
  f8pbfPa8F8: {
    data: {
      fn: "application.fee.category.sixAndSeven",
      info: "<p>The fee to apply for planning permission for the enlargement, improvement or other alteration of two or more homes is £1043.</p>",
      tags: [],
      formula: "1043",
      samples: {},
      defaults: {
        "application.numberOfHomes": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  fA1M5pseeY: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["7rwGJibOpQ"],
  },
  fBXtXPa8F8: {
    data: {
      fn: "originalProjectType",
      text: "Is this about an application solely involving demolition of an unlisted building in a conservation area?",
    },
    type: 100,
    edges: ["Opi14Pa8F8", "q8HLsPa8F8"],
  },
  fK4Uo0eMHI: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["jJomd4uRlL"],
  },
  fMEVbmTXjD: {
    data: {
      val: "unit",
      text: "Yes, a change of unit",
    },
    type: 200,
    edges: ["Zl4gCy8TLP"],
  },
  fNQaWaFYdm: {
    data: {
      tags: [],
      text: "Category 11 (1) - Other operations (Mining)",
    },
    type: 300,
    edges: ["g3Nrba6mV4", "9P1UgPAwTL"],
  },
  fOBIu1zuWf: {
    data: {
      fn: "multipleFees",
      val: "true",
    },
    type: 380,
  },
  figTvPa8F8: {
    data: {
      val: "pa.part3.classR",
      text: "Convert an agricultural building to a commercial use",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  fzb4zGzoZw: {
    data: {
      fn: "application.fee.payable",
      title: "Set payable fee to £44",
      formula: "44",
      howMeasured:
        "<p>The fee for an application for a non-material amendment relating to a householder development is £44.</p>",
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  g0b2iPa8F8: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The fee to apply for planning permission for changes to the curtilage of a single home is £262.</p>",
      formula: "262",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">Find out more about how planning fees in England are calculated (opens in a new tab)</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  g3Nrba6mV4: {
    data: {
      fn: "application.fee.category.eleven.one.noMoreThanFifteen",
      tags: [],
      title: "Is the site area no more than 15 hectares?",
      formula: "smallerEq(proposal.site.area, 150000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  g3R3gPa8F8: {
    data: {
      text: "The PlanX calculator component uses MathsJS notation",
      description:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://mathjs.org/">https://mathjs.org/</a></p>',
    },
    type: 100,
  },
  gD7d1Pa8F8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["Nt0R0Pa8F8"],
  },
  gOwHhyZhCv: {
    data: {
      fn: "application.type",
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["AtsVgEHMXL", "eenWfENwYg"],
  },
  gP85IzivIY: {
    data: {
      val: "production",
      text: "Production phase",
    },
    type: 200,
    edges: ["LjjCe6JWxZ"],
  },
  gRrFHSK3X8: {
    data: {
      fn: "application.fee.category.four.noMoreThanFourHundredSixtyFive",
      title: "Does the project add no more than 465m2 of floor area?",
      formula: "smallerEq(proposal.newFloorArea.glasshouses, 465)",
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newFloorArea.glasshouses": "0",
        "proposal.newFloorArea.agricultural": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  gUtRPIqOR4: {
    data: {
      text: "By residents only",
    },
    type: 200,
    edges: ["sVe9dPa8F8"],
  },
  gX4lAMvbWp: {
    data: {
      fn: "application.fee.category.one.fewerThanFiftyOne",
      text: "Are you building fewer than 51 new homes?",
    },
    type: 100,
    edges: ["fA1M5pseeY", "h3DfPrrrA1"],
  },
  gY9yDXLdBp: {
    data: {
      val: "demolish",
      text: "Yes",
    },
    type: 200,
    edges: ["lteNLIP7jX", "9G6EtxtS9Z"],
  },
  gbKXTPa8F8: {
    data: {
      val: "pa.part3.classQ",
      text: "Convert an agricultural building into a home",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  grZh1Pa8F8: {
    data: {
      text: "Cross-boundary applications have been removed for now",
    },
    type: 100,
  },
  gsnkURauio: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["U4bTdxgkwA"],
  },
  gwp36BWhwI: {
    data: {
      fn: "application.fee.category.one",
      info: "<p>The fee for building fewer than 10 new homes is £588 per new build home.</p>",
      tags: [],
      formula: "proposal.newDwellings.newBuild.number*588",
      samples: {},
      defaults: {
        "application.numberNewHomes": "1",
        "proposal.newDwellings.number": "1",
        "proposal.newDwellings.newBuild.number": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  h3DfPrrrA1: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["TC9NbD9bR7"],
  },
  hDEfMrGCGb: {
    data: {
      fn: "application.fee.category.two.noMoreThanThreeThousandSevenHundredFifty",
      text: "Are you adding no more than 3750m² of new floor area?",
    },
    type: 100,
    edges: ["1tNcZHfRjn", "6sRPISPepN"],
  },
  hLk6zsTnfn: {
    data: {
      val: "changeOfUse",
      text: "Changing the use of a property",
    },
    type: 200,
    edges: ["HnUzJGPne6"],
  },
  hLmz6HwYky: {
    data: {
      val: "alter.balcony",
      text: "Alterations to balconies of the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  hMRUukYSZu: {
    data: {
      val: "alter.highways.access",
      text: "Access roads",
    },
    type: 200,
    edges: ["3nmlRyUyPT", "UQXptW5LMU"],
  },
  hYuHtPa8F8: {
    data: {
      fn: "application.type",
      tags: [],
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: [
      "xhjeCPa8F8",
      "WxW1WPa8F8",
      "HvA6QPa8F8",
      "4Xk8IEqr1H",
      "3HkLBPa8F8",
    ],
  },
  hZNYbbtjhd: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["8UBvIufLLb"],
  },
  hh2qoEwYVO: {
    data: {
      val: "extend.roof",
      text: "Add a roof extension",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  hhFDbPjlQY: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["vgx9ouiXUl"],
  },
  hkkOLPa8F8: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["YUBqFPa8F8"],
  },
  hpSAzuRmCc: {
    data: {
      fn: "proposal.newDwellings.changeOfHome.number",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      tags: [],
      notes:
        "AN - Previous definition of dwellinghouse:  A dwellinghouse is a building that is used as a single private dwelling and for no other purpose. Do not include dwellinghouses created by changing the use of any other type of existing building.",
      title:
        "How many dwellinghouses are being created by the change of use of an existing dwellinghouse?",
      isInteger: false,
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      description: "<p>This includes the existing dwellinghouse.</p>",
      howMeasured:
        "<p>A dwellinghouse is a building used as a place to live by one household.</p><p>Dwellinghouses can include houses and individual flats, but not Houses in Multiple Occupation or blocks of flats. </p><p>Do not include dwellinghouses created by changing the use of any other type of existing building in your answer.</p>",
      allowNegatives: false,
    },
    type: 150,
  },
  hqd33qvVQR: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["1HEbLwqhxC"],
  },
  hrajyiwbGF: {
    data: {
      fn: "proposal.projectType",
      text: "Does the project involve any of these changes?",
    },
    type: 100,
    edges: ["3Y1c2eMGbZ", "n7YhKwM1H9", "wuOEh5Enkt", "3EieqlCeyw"],
  },
  ht3DpPa8F8: {
    data: {
      val: "pa.part3.classT",
      text: "Convert a commercial building to a school",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  ht4PAghId6: {
    data: {
      fn: "application.fee.category.five.lessThanOne",
      text: "Is the site area less than 1 hectares?",
    },
    type: 100,
    edges: ["ok7g9hAith", "gsnkURauio"],
  },
  hxSYFSny0S: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["PLdbaPa8F8"],
  },
  hz5h3Pa8F8: {
    data: {
      val: "pp.full",
      text: "Full planning permission",
    },
    type: 200,
    edges: ["1g3j0cSDDQ"],
  },
  i0AeWx2Vsb: {
    data: {
      val: "breachOfCondition",
      text: "Yes",
    },
    type: 200,
    edges: ["tYxLjqJKEQ"],
  },
  i211eDqZ0E: {
    data: {
      text: "None of these",
    },
    type: 200,
    edges: ["oztOfPa8F8"],
  },
  i6xpSILxTD: {
    data: {
      val: "demolish.outbuilding",
      text: "Demolition of an outbuilding",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  iADo8Pa8F8: {
    data: {
      fn: "proposal.buildingOperations",
      info: "<p>The fee for a prior approval application is £258 if it involves both a change in the use of the property and physical building operations (for example, to convert the building)</p><p>The fee is £120 if it only relates to a change of use where no physical development is taking place.</p>",
      text: "Does the project involve any building works?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      description:
        "<p>This includes any physical alterations to the building that would normally be carried out by a professional builder.</p>",
    },
    type: 100,
    edges: ["cIEzuPa8F8", "TnTiOPa8F8"],
  },
  iJru9Pa8F8: {
    data: {
      val: "pa.part20.classAA",
      text: "Build homes on a detached commercial building",
    },
    type: 200,
    edges: ["lIGT9aKbQR", "B9lbP8i2AH", "D5hgd7LndR"],
  },
  iR1BIrvCLX: {
    data: {
      text: "[noChange isn't correct, as it could remove homes]",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  iSmESG2Q2r: {
    data: {
      fn: "proposal.projectType",
      tags: ["automation"],
      text: "Does the project involve a demolition?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["gY9yDXLdBp", "dwikpJ7eVS"],
  },
  iYoQBFEcdf: {
    data: {
      val: "pp.full.householder",
      text: "Householder",
    },
    type: 200,
    edges: ["fzb4zGzoZw"],
  },
  iagnbPa8F8: {
    data: {
      val: "pa.part3.classQ",
      text: "Convert an agricultural building into a home",
    },
    type: 200,
    edges: ["iADo8Pa8F8"],
  },
  iaq6mdeiAb: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["8UBvIufLLb"],
  },
  ieBLtRj7J0: {
    data: {
      fn: "application.fee.category.three.noMoreThanFourThousandTwoHundredFifteen",
      title: "Does the project add no more than 4215m2 of floor area?",
      formula: "smallerEq(proposal.newFloorArea.agricultural, 4215)",
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newFloorArea.agricultural": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  j1RX4O7bIS: {
    data: {
      text: "[noChange isn't correct, as it could remove homes]",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  j5OElJWetj: {
    data: {
      fn: "application.fee.category.one.fewerThanTen",
      text: "Are you building fewer than 10 new homes?",
    },
    type: 100,
    edges: ["XsVpKF6f6V", "jIvXfWKl0b"],
  },
  jD6EtPa8F8: {
    data: {
      text: "Later today",
    },
    type: 200,
    edges: ["GlElxPa8F8", "wpZSTPa8F8"],
  },
  jIvXfWKl0b: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["gX4lAMvbWp"],
  },
  jJomd4uRlL: {
    data: {
      fn: "application.fee.category.two.noMoreThanTwoPointFive",
      text: "Is the site area no more than 2.5 hectares?",
    },
    type: 100,
    edges: ["3DnBYmxAcD", "yyHoT1Lxaq"],
  },
  jLXFwBomNH: {
    data: {
      fn: "application.type",
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["Fv01yMBaSg", "BGOVty0N5P"],
  },
  jM70qsAgf3: {
    data: {
      val: "noChange",
      text: "No",
    },
    type: 200,
    edges: ["cZvWeQuA0l", "5ifm7Gy5t9"],
  },
  jMlObT5G3G: {
    data: {
      val: "demolish",
      text: "Demolition",
    },
    type: 200,
    edges: ["0eTsZPa8F8"],
  },
  jRXA4ujmia: {
    data: {
      fn: "proposal.projectType",
      text: "What type of development does the extension of the existing site relate to?",
    },
    type: 100,
    edges: ["CCsRsegVuF", "yjvpCVG10l", "NEwa1ZUOqF"],
  },
  jV7PXzK06A: {
    data: {
      fn: "application.fee.category.five",
      info: "<p>The fee for the erection of dwellinghouses on a site with an area of more than 2.5 hectare is £15,695 and an additional £189 for each 0.1 hectare (or part thereof) in excess of 2.5 hectares, up to a maximum of £205,943.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-25000)/1000))189+15695),205943))",
      samples: {},
      defaults: {
        "proposal.siteArea": "25000",
        "proposal.site.area": "25000",
        "proposal.newFloorArea": "50000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a target="_self" rel="noopener noreferrer nofollow" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  jftkrWQu88: {
    data: {
      val: "ldc.existing",
      text: "Lawful Development Certificate for existing changes",
    },
    type: 200,
    edges: ["6wcurciVNK"],
  },
  jgqSaPa8F8: {
    data: {
      fn: "application.fee.exemption.disability",
      tags: ["sensitiveData"],
      text: "Does the application qualify for a disability exemption?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["xb9ygPa8F8", "Veh7iPa8F8"],
  },
  jhW9jPa8F8: {
    data: {
      fn: "property.type",
      text: "Is the property a home?",
      description:
        "<p>This includes any dwelling, such as a house or flat.</p>",
    },
    type: 100,
    edges: ["jqor9Pa8F8", "aAYpMPa8F8"],
  },
  jkGS7Pa8F8: {
    data: {
      fn: "application.fee.reduction.alternative",
      info: "<p>In the case where two alternative applications are being submitted by the same applicant, for the same site and on the same day, then all but the largest of the fees qualify for a reduction of 50%.</p>",
      text: "Does the application qualify for the alternative application reduction?",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10</a></p>',
    },
    type: 100,
    edges: ["qdKVpPa8F8", "pDbALPa8F8"],
  },
  jqor9Pa8F8: {
    data: {
      val: "residential",
      text: "Yes",
    },
    type: 200,
    edges: ["hrajyiwbGF"],
  },
  jr55BspqGH: {
    data: {
      val: "industrial.waste",
      text: "Waste storage or disposal",
    },
    type: 200,
    edges: ["2Z868tdQDn"],
  },
  jsveePa8F8: {
    data: {
      val: "demolish",
      text: "Demolition",
    },
    type: 200,
    edges: ["nIMKcdJosp", "rwXk7zi8Id"],
  },
  jxMuKofw6z: {
    data: {
      val: "commercial.leisure.sport.recreationGround",
      text: "Yes, a recreation ground",
    },
    type: 200,
    edges: ["GnodgiXf6C", "Nqpb6NZ5EF"],
  },
  jxpxcPa8F8: {
    data: {
      text: "regulation 16 of the 2012 Fees Regulations, as amended",
      description:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/contents/made">https://www.legislation.gov.uk/uksi/2023/1197/contents/made</a></p>',
    },
    type: 100,
  },
  jzNAAPa8F8: {
    data: {
      fn: "application.fee.reduction.alternative",
      info: "<p>In the case where two alternative applications are being submitted by the same applicant, for the same site and on the same day, then all but the largest of the fees qualify for a reduction of 50%.</p>",
      text: "Does the application qualify for the alternative application reduction?",
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10</a></p>',
    },
    type: 100,
    edges: ["SySW7Pa8F8", "zYsTwPa8F8"],
  },
  k9agFcLV9g: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["FtPHsuRgQJ"],
  },
  kH8LlPa8F8: {
    data: {
      fn: "application.fee.exemption.disability",
      tags: ["automation", "sensitiveData"],
      text: "Does the application qualify for a disability exemption?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["7tRVgPa8F8", "bKvEoPa8F8"],
  },
  kK1zuPa8F8: {
    data: {
      val: "pa.part3.classMA",
      text: "Convert a commercial building into a home or homes",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "RQAPcPa8F8"],
  },
  kKoqx2ETO3: {
    data: {
      val: "industrial.mining",
      text: "Mining",
    },
    type: 200,
    edges: ["fNQaWaFYdm"],
  },
  kNVSMHBtiM: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>If your application requires you to pay a fee, your Local Planning Authority will contact you.</p>",
      formula: "0",
      samples: {},
      defaults: {},
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  kOLXmPa8F8: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["GlElxPa8F8", "mNcLMPa8F8"],
  },
  knzX5Pa8F8: {
    data: {
      val: "pa.part7.classM",
      text: "Erect, extend or alter a university",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  ktRgX0BsEK: {
    data: {
      val: "onshoreExtractionOilAndGas.pp.extension",
      text: "Extension to an existing site including associated development",
    },
    type: 200,
    edges: ["jRXA4ujmia"],
  },
  lIGT9aKbQR: {
    data: {
      fn: "application.fee.pa.part20.fewerThanTen",
      title: "Is the project building fewer than 10 homes?",
      formula: "smaller(proposal.newDwellings.newBuild.number, 10)",
      samples: {},
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  lV42lXAWDY: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["6MKziuo7YF"],
  },
  lW265r2ara: {
    data: {
      fn: "application.fee.category.twelve.two.fewerThanFiftyOne",
      title: "Is the project creating fewer than 51 homes?",
      formula: "smaller(proposal.newDwellings.changeToHome.number, 51)",
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  lfG6xnqKKi: {
    data: {
      text: "Something else",
    },
    type: 200,
    edges: ["9GrP5yZtli"],
  },
  lhVuhPa8F8: {
    data: {
      text: "Refused",
    },
    type: 200,
    edges: ["aDEzsPa8F8"],
  },
  lolWA8KdK7: {
    data: {
      fn: "application.fee.category.two.lessThanThousand",
      tags: [],
      title: "Does the project add less than 1000m² of floor area?",
      formula: "smaller(proposal.newFloorArea.other, 1000)",
      samples: {},
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  lpyrUPa8F8: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The plannning fee for a Prior Approval application relating to creation of at least 10 but no more than 50 new homes on rooftops, or on a site created by demolishing vacant buildings is £459 per new home</p>",
      tags: [],
      formula: "proposal.newDwellings.newBuild.number*459",
      samples: {},
      defaults: {
        "proposal.newDwellings.number": "1",
        "proposal.newDwellings.newBuild.number": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  lteNLIP7jX: {
    data: {
      fn: "proposal.demolitionOnly",
      tags: ["automation"],
      title: "Check if the user selected demolition as their only project",
      formula: "equal(count(proposal.projectType), 1)",
      samples: {},
      defaults: {
        "proposal.projectType": "1",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  lwpGxPa8F8: {
    data: {
      val: "pa.part6.classA",
      text: "Build new agricultural buildings on a unit of 5 hectares or more",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "cOSGyPa8F8"],
  },
  m44ah8UBhl: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["IEwBTsnDgs"],
  },
  m4AyuZRnpj: {
    data: {
      fn: "application.fee.category.oneToThirteen",
      title: "Check if the proposal includes fees in category 1 or 2 to 13",
      formula:
        "unequal(0, sum(application.fee.category.one, application.fee.category.two, application.fee.category.three, application.fee.category.four, application.fee.category.five, application.fee.category.sixAndSeven, application.fee.category.eight, application.fee.category.nine, application.fee.category.ten, application.fee.category.eleven.one, application.fee.category.eleven.two, application.fee.category.twelve.one, application.fee.category.twelve.two, application.fee.category.thirteen))",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.ten": "0",
        "application.fee.category.two": "0",
        "application.fee.category.five": "0",
        "application.fee.category.four": "0",
        "application.fee.category.nine": "0",
        "application.fee.category.eight": "0",
        "application.fee.category.three": "0",
        "application.fee.category.thirteen": "0",
        "application.fee.category.eleven.one": "0",
        "application.fee.category.eleven.two": "0",
        "application.fee.category.twelve.one": "0",
        "application.fee.category.twelve.two": "0",
        "application.fee.category.sixAndSeven": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  m8heXj36ok: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>Each category of development has its own associated fee. The application fee is calculated from one or more categories of development, depending on the works involved in the project.</p><p>For example, the application fee for a project that includes new build dwellinghouses and new build shops will be made up by adding the fees of both together.</p>",
      tags: [],
      title: "Set application fee to total of category 1 to 4",
      formula: "application.fee.category.oneToFour",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.oneToFour": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications">GOV.UK guidance on fees for planning applications.</a></p><p><br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/guidance/fees-for-planning-applications#mixed-development-calculated">GOV.UK guidance on fees for mixed developments.</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  mE70bl561b: {
    data: {
      fn: "multipleFees",
      val: "false",
    },
    type: 380,
  },
  mNcLMPa8F8: {
    data: {
      type: "short",
      title: "Enter the reference of that application",
      description:
        "<p>This is written on the confirmation email you received after submitting the application</p>",
    },
    type: 110,
  },
  meDDjTpPyn: {
    data: {
      val: "add",
      text: "Yes",
      flags: ["flag.cil.liable"],
    },
    type: 200,
    edges: ["Z8Hl1ilhqm"],
  },
  mffyVPa8F8: {
    data: {
      val: "pa.part18.classA",
      text: "Development under private acts or orders",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  mhki1gy2eg: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["x9cTbNYDNc"],
  },
  mhprcRe0DQ: {
    data: {
      fn: "application.fee.category.six.number",
      tags: [],
      title: "Category 6 change",
      formula: "application.fee.category.six.number+1",
      samples: {},
      defaults: {
        "application.fee.category.six.number": "0",
      },
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  msEuQCnHwE: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["XMQSwWgsqe"],
  },
  n5TWnz4VsT: {
    data: {
      val: "internal",
      text: "Internal changes to the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  n7SE1HhtvX: {
    data: {
      val: "unit",
      text: "Change of unit",
    },
    type: 200,
    edges: ["1QT2TovhPM"],
  },
  n7YhKwM1H9: {
    data: {
      val: "changeOfUse",
      text: "Changing the use of a property",
    },
    type: 200,
    edges: ["oztOfPa8F8"],
  },
  n8SRjOZLlv: {
    data: {
      fn: "application.fee.reduction.alternative",
      val: "false",
    },
    type: 380,
  },
  n9P5vPg7W1: {
    data: {
      text: "Are the drilling operations exploratory?",
    },
    type: 100,
    edges: ["37jm5hwYtG", "qX60HNxei1"],
  },
  nBwMhz1e96: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["IvhIQPa8F8"],
  },
  nD3ebPa8F8: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The plannning fee for a Prior Approval application relating to the addition of more than 50 new homes on rooftops or on a site created by demolishing vacant buildings is £22,688 plus £137 for each additional home beyond 50, up to a maximum of £411,885.</p>",
      tags: [],
      formula:
        "(min((22688+(proposal.newDwellings.newBuild.number-50)*137),411885))",
      samples: {},
      defaults: {
        "proposal.newDwellings.number": "51",
        "proposal.newDwellings.newBuild.number": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  nGOzVNAMle: {
    data: {
      val: "extend.front",
      text: "Add a front extension",
    },
    type: 200,
  },
  nHOJdzmJZX: {
    data: {
      fn: "application.fee.category.fivetoThirteen",
      text: "Does the proposal include developments in category 5 to 13?",
    },
    type: 100,
    edges: ["xmnzPWtHes", "SWUTvqoW7C"],
  },
  nIMKcdJosp: {
    data: {
      text: "Of an unlisted building in a CA https://www.legislation.gov.uk/uksi/2012/2920/regulation/5A",
    },
    type: 100,
  },
  nPxNt1wvsb: {
    data: {
      val: "new.residential.dwelling",
      text: "Yes",
    },
    type: 200,
    edges: ["hpSAzuRmCc"],
  },
  nVVcIa9vQW: {
    data: {
      text: "Other alterations not on this list",
    },
    type: 200,
    edges: ["sVe9dPa8F8"],
  },
  nllnhTgxl4: {
    data: {
      val: "false",
      text: "This is not correct",
    },
    type: 200,
  },
  nnpv227SFX: {
    data: {
      val: "changeOfUse",
      text: "Change of use",
    },
    type: 200,
    edges: ["ZaNapBtHVv"],
  },
  nnyxbpugak: {
    data: {
      val: "appraisal",
      text: "Appraisal phase",
    },
    type: 200,
    edges: ["LjjCe6JWxZ"],
  },
  notjwRy86D: {
    data: {
      fn: "property.type",
      info: '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 3</a></p>',
      text: "Is the site a sports field?",
    },
    type: 100,
    edges: ["5zz6KHm46O", "jxMuKofw6z", "hZNYbbtjhd"],
  },
  nrPq3o5Axe: {
    data: {
      val: "changeOfUse",
      text: "Change use",
    },
    type: 200,
    edges: ["Oo3F9LmEIu"],
  },
  nu825R4ARb: {
    data: {
      val: "extend.porch",
      text: "Add or change a porch",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  o30WVPa8F8: {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      formula: "240",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  o8boo7N55j: {
    data: {
      val: "add",
      text: "Yes",
    },
    type: 200,
    edges: ["EKCsx8gmpI", "KmCtnBuFRd"],
  },
  oMQvgYRqHG: {
    data: {
      fn: "application.fee.reduction.sports",
      text: "Is the calculated fee larger than the sports flat fee?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["XEn6OpDMCh", "7dcQ1C6GSh"],
  },
  oShcPmeFqp: {
    data: {
      fn: "application.fee.exemption.disability.reason",
      info: "<p>Give as much information as you can on how the project supports a disabled resident.</p><p>For example:</p><ul><li><p>an extension to create a downstairs bedroom for a person who uses a wheelchair</p></li><li><p>a loft conversion to accommodate live-in help</p></li><li><p>adding an access ramp</p></li></ul><p></p><p>This fee exemption does not apply to your application if:</p><ul><li><p>the project also includes work that does not support a disabled resident</p></li><li><p>you are building a new home for a disabled person</p></li></ul><p></p><p>We'll ask for a supporting document later on. Examples of this might be:</p><ul><li><p>PIP award letters</p></li><li><p>Supporting statements, such as from a council or therapist</p></li><li><p>NHS letters</p></li><li><p>Disabled bus passes, blue badges, or related documents</p></li></ul><p></p>",
      tags: ["sensitiveData"],
      type: "long",
      title: "How does the project support the needs of a disabled resident?",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/4" target="_self">UK Statutory Instruments 2012 No. 2920 Regulation 4</a></p>',
      description:
        "<p>Tell us how the project does any of the following:</p><ul><li><p>gives access to or within a building</p></li><li><p>improves a disabled resident's health, safety or comfort</p></li></ul><p></p>",
    },
    type: 110,
  },
  oU3gRSsKGy: {
    data: {
      text: "Should renewables point to plant?",
    },
    type: 100,
  },
  ofpUw8Ujco: {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      formula: "240",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  ogDMi2JURw: {
    data: {
      val: "unit.subdivide",
      text: "Subdivide a property",
    },
    type: 200,
    edges: ["AEsUGCbZy9"],
  },
  ojMZ0IUB3Y: {
    data: {
      fn: "application.type",
      tags: [],
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["tdDiIA2tj8", "csvOqHuy7C"],
  },
  ok7g9hAith: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["zbc3uVxij5"],
  },
  olkPUPa8F8: {
    data: {
      fn: "originalApplication.type",
      tags: [],
      text: "What type of application do the conditions relate to?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["AR0xsPa8F8", "aImpqPa8F8"],
  },
  omhXpdOedQ: {
    data: {
      fn: "multipleFees",
      val: "true",
    },
    type: 380,
  },
  oqvCIJm1Vz: {
    data: {
      tags: [],
      text: "Category 3 - Agricultural buildings",
    },
    type: 300,
    edges: ["jLXFwBomNH"],
  },
  oshD526uxv: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["pgusvGSTa8"],
  },
  ozIYYPa8F8: {
    data: {
      text: "LDC - Lawful not to comply with a condition",
    },
    type: 300,
    edges: ["MV85FPa8F8"],
  },
  oztOfPa8F8: {
    data: {
      fn: "application.fee.exemption.disability",
      val: "false",
      tags: ["sensitiveData"],
      operation: "replace",
    },
    type: 380,
  },
  p1KRMO00fP: {
    data: {
      val: "pp.mineralExtraction",
      text: "Mineral extraction",
    },
    type: 200,
    edges: ["L1mNmWfleR", "QWqDJWnyMw"],
  },
  pBiZ2RJexI: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["6c5tqBjCbE"],
  },
  pDbALPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["7uJKQPa8F8"],
  },
  pUvHbyEilx: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["UT2dtglKWd", "6bVHglsDUG"],
  },
  pWvk6g3j0u: {
    data: {
      text: "No",
    },
    type: 200,
  },
  pcHLXmh7AP: {
    data: {
      fn: "application.fee.category.two.noMoreThanForty",
      tags: [],
      title: "Does the project add no more than 40m² of floor area?",
      formula: "smallerEq(proposal.newFloorArea.other, 40)",
      samples: {},
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  pgusvGSTa8: {
    data: {
      fn: "application.fee.category.thirteen",
      info: "<p>The fee to use of a site with an area of more than 15 hectares for waste or refuse is £47,963 + £189 for each additional 0.1 hectares (or part thereof) in excess of 15 hectares, up to a maximum of £107,090.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-150000)/1000))189+47963),107090))",
      samples: {},
      defaults: {
        "proposal.siteArea": "150000",
        "proposal.site.area": "150000",
        "proposal.newFloorArea": "150000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  ph6PRCmPTY: {
    data: {
      fn: "application.fee.category.twelve.one",
      info: "<p>The fee for a change of use of an existing dwellinghouse that results in fewer than 10 dwellinghouses is £588 per new dwellinghouse.</p>",
      tags: [],
      formula: "(proposal.newDwellings.changeOfHome.number-1)*588",
      samples: {
        "proposal.newDwellings.changeOfHome.number": "3",
      },
      defaults: {
        "application.numberNewHomes": "1",
        "proposal.newDwellings.number": "1",
        "proposal.newDwellings.changeOfHome.number": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  pneC5vcrAd: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["m4AyuZRnpj", "e6pNcTq29v", "zs70hRzLxT"],
  },
  q1PUyPa8F8: {
    data: {
      val: "pa.part20.classAD",
      text: "Build homes on detached houses",
    },
    type: 200,
    edges: ["Fv3wLPa8F8", "cOSGyPa8F8"],
  },
  q1rqRR6buM: {
    data: {
      fn: "application.fee.category.two",
      info: "<p>The fee for erecting new buildings (with the exception of dwellinghouses, agricultural buildings, or plant/machinery) where the external floor space created is more than 40m2 but less than 1000m2 is £588 for every 75m2 (or part thereof).</p>",
      tags: [],
      formula: "(ceil(proposal.newFloorArea.other/75))*588",
      samples: {},
      defaults: {
        "proposal.newFloorArea": "41",
        "proposal.newFloorArea.other": "41",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  q2bYVt6t6G: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["DGnd8ihib3", "qqzlksh0Bi", "eId8Z1EQ7q", "nHOJdzmJZX"],
  },
  q8HLsPa8F8: {
    data: {
      text: "No",
    },
    type: 200,
  },
  qF5IBPa8F8: {
    data: {
      text: "Are you submitting an application for planning permission?",
      description:
        "<p>The application must be about the same works or changes.</p>",
    },
    type: 100,
    edges: ["8OrvGPa8F8", "DFQjhPa8F8"],
  },
  qFZHCLI0JU: {
    data: {
      fn: "proposal.newDwellings.changeToHome.number",
      info: "<p>Dwellinghouses are treated differently for fee calculations.</p>",
      title:
        "How many dwellinghouses are being created by the change of use of the existing building?",
      isInteger: false,
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Scale of Fees</a></p>',
      description:
        "<p>This does not include dwellinghouses created by changing the use of any existing dwellinghouses.</p>",
      howMeasured:
        "<p>A <strong>dwellinghouse</strong> is a building that is used as a single private dwelling and for no other purpose. Do not include dwellinghouses created by changing the use of any existing dwellinghouses.</p>",
      allowNegatives: false,
    },
    type: 150,
  },
  qJHTgURErF: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["0Uop8FXFXH"],
  },
  qTSi2kR4u0: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["wkA5KlRSE3"],
  },
  qUpHMBqLWr: {
    data: {
      val: "ldc.existing",
      text: "Lawful Development Certificate for existing changes",
    },
    type: 200,
    edges: ["Cizbyiz1GG"],
  },
  qX60HNxei1: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["LjjCe6JWxZ"],
  },
  qdKVpPa8F8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["AJIHaPa8F8"],
  },
  qfbJIPa8F8: {
    data: {
      val: "pa.part11.classB",
      text: "Demolish a building",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "cOSGyPa8F8"],
  },
  qoen3eFGNY: {
    data: {
      fn: "application.fee.category.five.noMoreThanFive",
      tags: [],
      title: "Is the site area no more than 5 hectares?",
      formula: "smaller(proposal.site.area, 50000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  qqzlksh0Bi: {
    data: {
      fn: "application.fee.category.oneToFour",
      title: "Total fee for category 1 to 4",
      formula:
        "application.fee.category.twoToFour.max + application.fee.category.one",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.twoToFour.max": "0",
      },
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  qul7HPa8F8: {
    data: {
      text: "Within the last 12 months",
    },
    type: 200,
    edges: ["cQwrEKfU22"],
  },
  quwxkPa8F8: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["cOSGyPa8F8"],
  },
  r4uqsFIDFR: {
    data: {
      text: "A home",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  rCXJHPa8F8: {
    data: {
      fn: "application.fee.category.eleven.two",
      info: "<p>The fee for other operations is £298 for each 0.1 Hectares (or part thereof) within the site area, up to a maximum of £2578.</p>",
      tags: [],
      formula: "(min((ceil(proposal.site.area/1000))298,2578))",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  rLN8SNuEIy: {
    data: {
      tags: [],
      text: "Category 1 - New dwellinghouses",
    },
    type: 300,
    edges: ["ojMZ0IUB3Y"],
  },
  rPJeoYDtJZ: {
    data: {
      val: "alter.equipment",
      text: "Installation of other equipment",
    },
    type: 200,
    edges: ["Skk3ibpWwu"],
  },
  rU1gvcRzmj: {
    data: {
      val: "internal",
      text: "Internal works",
    },
    type: 200,
    edges: ["0eTsZPa8F8"],
  },
  rdA39hsJ5r: {
    data: {
      fn: "application.fee.category.twoToFour",
      title: "Does the proposal include development in categories 2, 3 or 4?",
      formula:
        "unequal(0, sum(application.fee.category.two, application.fee.category.three, application.fee.category.four))",
      samples: {},
      defaults: {
        "application.fee.category.one": "0",
        "application.fee.category.ten": "0",
        "application.fee.category.two": "0",
        "application.fee.category.five": "0",
        "application.fee.category.four": "0",
        "application.fee.category.nine": "0",
        "application.fee.category.eight": "0",
        "application.fee.category.three": "0",
        "application.fee.category.thirteen": "0",
        "application.fee.category.eleven.one": "0",
        "application.fee.category.eleven.two": "0",
        "application.fee.category.twelve.one": "0",
        "application.fee.category.twelve.two": "0",
        "application.fee.category.sixAndSeven": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  rejaGobYbE: {
    data: {
      fn: "application.fee.category.two",
      info: "<p>The fee for the erection of buildings other than dwellinghouses on a site with an area of less than 1 hectare is £588 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))588)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2023/1197" rel="noopener noreferrer nofollow" target="_blank">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a target="_self" href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  rnRhxJ2aSF: {
    data: {
      val: "alter.secondaryGlazing",
      text: "Window glazing changes to the main dwelling",
    },
    type: 200,
    edges: ["ZhfqUiPNjq", "mhprcRe0DQ"],
  },
  rwXk7zi8Id: {
    data: {
      fn: "application.fee.exemption.disability",
      info: "<p>This information will help us calculate your application fee. There are no planning fees for applications that are for works to provide access for disabled people into or within a building that can be used by members of the public.</p><p>If the application also includes any works that are not for these purposes, then the fee exemption does not apply.</p><p>This can include any type of building that is accessed by members of the public, regardless of whether they pay to enter the building or can enter it for free.</p>",
      tags: [],
      text: "Projects that provide access for disabled people",
      notes:
        "AN \nPrevious content: \nFee exemption for projects providing access for disabled people\n\nProjects that solely provide access for disabled people to (or within) a publicly accessible building can get a fee exemption.\n\nThis can include any type of building that is used by members of the public, regardless of whether they pay to enter the building or can enter it for free.\n\nIf the application also includes any works that are not for these purposes, then the fee exemption does not apply.\n\nIs this project solely to provide access for disabled people to a public building?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a> &amp; <a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/4">Regulation 4 (1)(b)</a></p>',
      description:
        "<p>Projects that solely provide access for disabled people to (or within) a publicly accessible building do not have to pay a fee for this planning application. This is known as a fee exemption.</p><p>Projects can include any building used by the public, regardless of whether they pay to enter the building or can enter it for free.</p><p>If the application also includes any works that are not for these purposes, then the fee exemption does not apply.</p><p><strong>Is this project solely to provide access for disabled people to a public building?</strong></p>",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["xqVMStBxOZ", "VJNUpnkKo9"],
  },
  s5YEUlL3PE: {
    data: {
      fn: "application.fee.category.four.noMoreThanFourHundredSixtyFive",
      text: "Are you adding 465m² or less of new floor area?",
    },
    type: 100,
    edges: ["lV42lXAWDY", "qJHTgURErF"],
  },
  s8MaZPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["wzMyVPa8F8"],
  },
  sIRmZD8IDO: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["FgZXwC4KcD"],
  },
  sTd4PPa8F8: {
    data: {
      text: "I already submitted it before today",
    },
    type: 200,
    edges: ["cOSGyPa8F8"],
  },
  sVe9dPa8F8: {
    data: {
      tags: [],
      text: "Category 6 & 7 - Home or curtilage of home",
    },
    type: 300,
    edges: ["UOih1OaDcF", "1Vw3Hr0vzV", "3XrgEHKxtz"],
  },
  sZA5ZqgKDI: {
    data: {
      fn: "application.fee.category.two.noMoreThanTwoPointFive",
      tags: [],
      title: "Is the site area no more than 2.5 hectares?",
      formula: "smaller(proposal.site.area, 25000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  sZrDuhC199: {
    data: {
      text: "Both or all have the same planning fee",
    },
    type: 200,
    edges: ["CspJyZNvkx"],
  },
  sgfsVkSaY5: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["QuqPEtbCCM"],
  },
  sibSw8Kpdq: {
    data: {
      val: "complianceConfirmation",
      text: "Confirm compliance with conditions",
    },
    type: 200,
    edges: ["7KBWCPa8F8", "DBzKKPa8F8", "J7G5U5qKpY"],
  },
  smOmd5Q3Z9: {
    data: {
      tags: [],
      text: "The carrying out of operations (including the erection of a building) within the curtilage of an existing dwellinghouse, for purposes ancillary to the enjoyment of the dwellinghouse as such, or the erection or construction of gates, fences, walls or other means of enclosure along a boundary of the curtilage of an existing dwellinghouse:  262",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  soLrSBtxmn: {
    data: {
      text: "Breach fee will be added to other LDCE fee in the Multiple Project Fee Calculation",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  tBRukPa8F8: {
    data: {
      val: "pa.part14.classJ",
      text: "Install or change solar panels",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  tCR4GwaVgi: {
    data: {
      fn: "application.fee.category.twelve.two.fewerThanTen",
      title: "Is the project creating fewer than 10 homes?",
      formula: "smaller(proposal.newDwellings.changeToHome.number, 10)",
      defaults: {
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  tCdVX3SUKf: {
    data: {
      fn: "application.fee.calculated",
      title: "Set calculated fee to Category 11 fee",
      formula: "application.fee.category.eleven.one",
      samples: {},
      defaults: {
        "application.fee.category.eleven.one": "0",
      },
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  tI7EDiRsso: {
    data: {
      val: "extend.basement",
      text: "Add a basement extension",
    },
    type: 200,
  },
  tJ1TUo4SnR: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["UFADal50zA", "oMQvgYRqHG"],
  },
  tQpK2sDsEE: {
    data: {
      val: "new.agriculture.glasshouse",
      text: "Build new glasshouse",
    },
    type: 200,
    edges: ["FaYYohboSl"],
  },
  tRSUGQKQOM: {
    data: {
      val: "alter",
      text: "Alteration",
    },
    type: 200,
    edges: ["K3rhyPa8F8"],
  },
  tTMyyLnsfI: {
    data: {
      text: "Onshore Oil and Gas fees",
    },
    type: 300,
    edges: ["CrstmD3EYP"],
  },
  tXwIiOD5oE: {
    data: {
      fn: "application.fee.category.eight",
      info: "<p>The fee for the creation of car parks, service roads or other means of access is £298.</p>",
      tags: [],
      formula: "(298)",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  tYxLjqJKEQ: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The planning fee for an application for a Certificate of Lawfulness that includes the lawfulness not to comply with a condition or limitation alongside other existing uses or works is the sum of the flat fee of £298 for the activity in breach of condition and the fee for the other existing uses or works.</p>",
      tags: [],
      title: "Add breach of condition flat fee to existing LDCE fee",
      formula: "application.fee.calculated+298",
      samples: {},
      defaults: {
        "application.fee.calculated": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/11">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 11</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  taazE7bqLL: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["xWbhANVtfd", "2fPL5Pa8F8", "PgCgjPa8F8"],
  },
  tdDiIA2tj8: {
    data: {
      val: "pp.outline",
      text: "Outline Planning Permission",
    },
    type: 200,
    edges: ["IQrjv8493U", "wWUncOXLS8", "9AedToXUdE"],
  },
  trmjWgRW5t: {
    data: {
      fn: "application.fee.category.two",
      info: "<p>The fee for erecting new buildings (with the exception of dwellinghouses, agricultural buildings, or plant/machinery) where the external floor space created is between 1000m2 and 3750m2 is £635 for every 75m2 (or part thereof).</p>",
      tags: [],
      formula: "((ceil((proposal.newFloorArea.other-75)/75))635+635)",
      samples: {},
      defaults: {
        "proposal.newFloorArea": "75",
        "proposal.newFloorArea.other": "1000",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  u13mmo9UgG: {
    data: {
      text: "This should really never be a development at all (there is no Material CoU within category 6 & 7), so we will set the lower fee.",
      neverAutoAnswer: false,
    },
    type: 100,
  },
  u5FAnPa8F8: {
    data: {
      val: "pa.part3.classG",
      text: "Convert a commercial building to mixed use",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  u8Xp4iiNSt: {
    data: {
      fn: "application.fee.category.six",
      title: "Check if a category 6 change is involved",
      formula: "largerEq(application.fee.category.six.number, 1)",
      defaults: {
        "application.fee.category.six.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  uGngqPa8F8: {
    data: {
      val: "pa.part7.classM",
      text: "Extend a university",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  uPeJNPa8F8: {
    data: {
      text: "No, an exemption or reduction was applied",
    },
    type: 200,
    edges: ["cOSGyPa8F8"],
  },
  uaZCM39cKR: {
    data: {
      val: "designated.conservationArea",
      text: "Yes",
    },
    type: 200,
    edges: ["EEtIzLsWkI"],
  },
  ueqySqCf5e: {
    data: {
      fn: "application.fee.category.two",
      info: "<p>The fee for the erection of buildings other than dwellinghouses on a site with an area of more than 2.5 hectare is £15,695 and an additional £189 for each 0.1 hectare (or part thereof) in excess of 2.5 hectares, up to a maximum of £205,943.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-25000)/1000))189+15695),205943))",
      samples: {},
      defaults: {
        "proposal.siteArea": "25000",
        "proposal.site.area": "25000",
        "proposal.newFloorArea": "50000",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2023/1197" rel="noopener noreferrer nofollow" target="_blank">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" rel="noopener noreferrer nofollow" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  uje2VDDgIL: {
    data: {
      val: "extend.outbuilding",
      text: "Construction of a new outbuilding",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  v3vRZPa8F8: {
    data: {
      fn: "originalApplication.type",
      tags: [],
      text: "Is the original application a householder planning application?",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["vL6jAPa8F8", "PEc4YPa8F8"],
  },
  vBDR7Pa8F8: {
    data: {
      val: "pa.part1.classA",
      text: "Larger extension to a house",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "RQAPcPa8F8"],
  },
  vBHI6Pa8F8: {
    data: {
      fn: "application.fee.calculated",
      info: "<p>The plannning fee for a Prior Approval application relating to creation of fewer than 10 new homes on rooftops, or on a site created by demolishing vacant buildings is £425 per new home</p>",
      tags: [],
      formula: "proposal.newDwellings.newBuild.number*425",
      samples: {},
      defaults: {
        "proposal.newDwellings.number": "1",
        "proposal.newDwellings.newBuild.number": "0",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  vBcp7IHOl8: {
    data: {
      fn: "application.fee.category.five.lessThanOne",
      tags: [],
      title: "Is the site area less than 1 hectares?",
      formula: "smaller(proposal.site.area, 10000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  vGNV9qIX2X: {
    data: {
      val: "new",
      text: "Yes",
    },
    type: 200,
    edges: ["8UBvIufLLb"],
  },
  vHlS5J3VeG: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["Z6Wa6cvyS0"],
  },
  vL6jAPa8F8: {
    data: {
      val: "pp.full.householder",
      text: "Yes",
    },
    type: 200,
  },
  vfdpD7BVBs: {
    data: {
      val: "residential",
      text: "Yes",
    },
    type: 200,
    edges: ["NUwFz4Au3d"],
  },
  vgx9ouiXUl: {
    data: {
      fn: "application.fee.payable",
      info: "<p>No planning fee will be payable for this application if the proposed works are:</p><ul><li><p>solely about demolishing a building,</p></li><li><p>the building is situated in a conservation area, and</p></li><li><p>the building is not listed or otherwise protected.</p></li></ul>",
      tags: [],
      formula: "0",
      samples: {},
      defaults: {},
      policyRef:
        '<p><a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/5A">UK Statutory Instruments 2012 No. 2920 Regulation </a><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/5A">5</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  vlIXqPa8F8: {
    data: {
      fn: "application.fee.payable",
      tags: [],
      formula: "application.fee.reduced*1",
      samples: {},
      defaults: {
        "application.fee.reduced": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197/">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  vnU0feaiqf: {
    data: {
      val: "alter.equipment",
      text: "Addition, removal or alteration of utilities or other equipment",
    },
    type: 200,
    edges: ["34jC1ahqQo"],
  },
  vtPuzM3pVM: {
    data: {
      val: "noChange",
      text: "No",
    },
    type: 200,
    edges: ["iR1BIrvCLX", "5ifm7Gy5t9"],
  },
  vvpfYPa8F8: {
    data: {
      text: "Yes",
    },
    type: 200,
    edges: ["qF5IBPa8F8"],
  },
  vzngKPa8F8: {
    data: {
      fn: "application.fee.exemption.resubmission",
      val: "false",
    },
    type: 380,
  },
  wNf8uPa8F8: {
    data: {
      info: "<p>You do not have to pay the fee if you re-submit an application for Prior Approval that is for the same site, and of a similar character to a previous application for Prior Approval.</p><p>This fee exemption only applies once.</p>",
      text: "Is this the first time you have resubmitted an application for this site?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      description:
        "<p>Answer &apos;No&apos; if you have already resubmitted another application for similar proposals on the same site, or part of the same site. This question only refers to applications for Prior Approval.</p>",
      howMeasured:
        "<p>The proposals must have been of the same character or description. Your planning officer will assess whether the site and description of the works are the same as the original application.</p>",
    },
    type: 100,
    edges: ["hkkOLPa8F8", "yUrqbPa8F8"],
  },
  wOlWzT71cj: {
    data: {
      val: "new.residential.dwelling",
      text: "New build dwellinghouses",
      flags: ["flag.cil.liable"],
    },
    type: 200,
    edges: ["rLN8SNuEIy"],
  },
  wPNig6foFD: {
    data: {
      val: "demolish",
      text: "Demolition",
    },
    type: 200,
    edges: ["K3rhyPa8F8"],
  },
  wWUncOXLS8: {
    data: {
      fn: "application.fee.category.five.noMoreThanTwoPointFive",
      tags: [],
      title: "Is the site area no more than 2.5 hectares?",
      formula: "smaller(proposal.site.area, 25000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  wg66iPa8F8: {
    data: {
      info: "<p>The applicant isnt required to pay the fee if:  the application is for works that are considered permitted development, that the works is not on under an article 4 direction or there is no condition on the property</p>",
      text: "Does your proposal relate to an alternate use of buildings or land within the same Use Class that requires planning permission only by the requirements of a condition imposed on a permission granted or deemed to be granted under Part 3 of the Town and Country Planning Act 1990 (as amended).",
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/5" target="_self">UK Statutory Instruments 2012 No. 2920 Regulation 5</a></p>',
    },
    type: 100,
  },
  wkA5KlRSE3: {
    data: {
      fn: "application.fee.category.twelve.two",
      info: "<p>The fee for the change of use of a building that results in fewer than 10 dwellinghouses is £588 per dwellinghouse.</p>",
      tags: [],
      formula: "proposal.newDwellings.changeToHome.number*588",
      samples: {},
      defaults: {
        "application.numberNewHomes": "1",
        "proposal.newDwellings.number": "1",
        "proposal.newDwellings.changeToHome.number": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  woJSYPa8F8: {
    data: {
      val: "pa.part3.classT",
      text: "Convert a commercial building to a school",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  wpZSTPa8F8: {
    data: {
      color: "#ffffff",
      title:
        "You must submit the planning application today, and you must pay the full fee for that application.",
      description:
        "<p>If you do not, this application for prior approval will be marked as invalid.</p>",
      resetButton: false,
    },
    type: 8,
  },
  wuOEh5Enkt: {
    data: {
      val: "unit",
      text: "Merging or subdividing a property",
    },
    type: 200,
    edges: ["oztOfPa8F8"],
  },
  wzMyVPa8F8: {
    data: {
      fn: "application.fee.exemption.resubmission",
      val: "false",
    },
    type: 380,
  },
  x1eYMPa8F8: {
    data: {
      val: "pa.part3.classS",
      text: "Convert an agricultural building to a school",
    },
    type: 200,
    edges: ["o30WVPa8F8"],
  },
  x2PNJPa8F8: {
    data: {
      fn: "application.fee.calculated",
      tags: [],
      title: "Set payable fee to £298",
      formula: "298",
      samples: {},
      defaults: {},
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  x5NPdGEeZe: {
    data: {
      val: "alter.highways",
      text: "Changes to a public road, pavement or path",
    },
    type: 200,
    edges: ["smOmd5Q3Z9"],
  },
  x9cTbNYDNc: {
    data: {
      fn: "application.fee.category.three",
      info: "<p>The fee for the erection of agricultural buildings on a site with an area of more than 2.5 hectare is £15,695 and an additional £189 for each 0.1 hectare (or part thereof) in excess of 2.5 hectares, up to a maximum of £205,943.</p>",
      tags: [],
      formula:
        "(min(((ceil((proposal.site.area-25000)/1000))189+15695),205943))",
      samples: {},
      defaults: {
        "proposal.siteArea": "25000",
        "proposal.site.area": "25000",
        "proposal.newFloorArea": "50000",
      },
      policyRef:
        '<p><a href="https://www.legislation.gov.uk/uksi/2023/1197" rel="noopener noreferrer nofollow" target="_blank">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" rel="noopener noreferrer nofollow" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  xBoPLPa8F8: {
    data: {
      fn: "proposal.projectType",
      text: "Does the project involve any of these changes?",
    },
    type: 100,
    edges: [
      "jsveePa8F8",
      "yXmPsPa8F8",
      "0AI5IPa8F8",
      "9WM7VPa8F8",
      "FYYU0Pa8F8",
    ],
  },
  xENX6Pa8F8: {
    data: {
      info: "<p>The prior approval application is only exempt from paying a fee if you paid the full fee for the application for planning permission.</p>",
      text: "Did you pay the full fee?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      description:
        "<p>This question refers to your application for planning permission that relates to the same works or changes as this application for prior approval.</p>",
    },
    type: 100,
    edges: ["kOLXmPa8F8", "uPeJNPa8F8"],
  },
  xFA7hTVPy4: {
    data: {
      val: "extend.rear",
      text: "Add a rear or side extension (or conservatory)",
    },
    type: 200,
  },
  xJUQY1JPIg: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["JObGRb86D9"],
  },
  xR08KmGx0Q: {
    data: {
      fn: "application.fee.category.three.lessThanOne",
      tags: [],
      title: "Is the site area less than 1 hectares?",
      formula: "smaller(proposal.site.area, 10000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  xWbhANVtfd: {
    data: {
      text: "Fee Reductions",
    },
    type: 300,
    edges: ["notjwRy86D", "c8ns239Tww", "L7jClEPwU1", "DVELONhqdE"],
  },
  xb9ygPa8F8: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["zyTyWPa8F8"],
  },
  xhjeCPa8F8: {
    data: {
      val: "pa",
      text: "Prior approval",
    },
    type: 200,
  },
  xmnzPWtHes: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["elmwFgVvtn", "KwuNzBII7G"],
  },
  xqVMStBxOZ: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["EEmIJPa8F8"],
  },
  xzMRlCxdo8: {
    data: {
      fn: "proposal.projectType",
      text: "What types of changes does the application relate to?",
      allRequired: false,
    },
    type: 105,
    edges: [
      "X14NqOuR9z",
      "8aNajrQAye",
      "jMlObT5G3G",
      "TwEI0WGVZQ",
      "rU1gvcRzmj",
      "nrPq3o5Axe",
      "ogDMi2JURw",
      "F6C9iK7pql",
    ],
  },
  y9wRdurL2P: {
    data: {
      fn: "application.fee.category.three.noMoreThanFiveHundredForty",
      title: "Does the project add no more than 540m2 of floor area?",
      formula: "smallerEq(proposal.newFloorArea.agricultural, 540)",
      defaults: {
        "proposal.newFloorArea.other": "0",
        "proposal.newFloorArea.agricultural": "0",
        "proposal.newDwellings.newBuild.number": "0",
        "proposal.newDwellings.changeOfHome.number": "0",
        "proposal.newDwellings.changeToHome.number": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  yPP5tmWDTj: {
    data: {
      fn: "proposal.newFloorArea.agricultural",
      tags: [],
      title:
        "How much external floor space is being created by the new agricultural buildings?",
      units: "m²",
      isInteger: false,
      description:
        "<p>This does not include<strong> </strong>any glasshouses.</p>",
      howMeasured:
        '<p>A glasshouse is a building that:</p><ul><li><p>has a minimum of three-quarters of its total external area comprised of glass or other translucent material</p></li><li><p>is designed for the production of flowers, fruit, vegetables, herbs or other horticultural produce</p></li><li><p>is used, or is to be used, solely for the purposes of agriculture</p></li></ul><p>External floor space means the gross external area (GEA) created by the development as measured on the outside of the building for each floor, whether or not it is to be bounded (wholly or partly) by external walls of a building.</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.gov.uk/government/publications/measuring-practice-for-voa-property-valuations/code-of-measuring-practice-definitions-for-rating-purposes#gross-external-area-gea">Find out how to calculate the external floor space on GOV.UK (opens in a new tab)</a>.</p>',
      allowNegatives: false,
    },
    type: 150,
  },
  yU99KR3io8: {
    data: {
      fn: "proposal.projectType",
      tags: [],
      text: "Does your project also involve a change of use or unit?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["YzszdxmAoq", "fMEVbmTXjD", "LyIRWs6L0T"],
  },
  yUrqbPa8F8: {
    data: {
      val: "not.resubmission",
      text: "No",
    },
    type: 200,
    edges: ["vzngKPa8F8"],
  },
  yXmPsPa8F8: {
    data: {
      val: "alter",
      text: "Alteration",
    },
    type: 200,
    edges: ["rwXk7zi8Id"],
  },
  yjvpCVG10l: {
    data: {
      val: "industrial.waste",
      text: "Storage, treatment or disposal of controlled waste including ancillary and associated development",
    },
    type: 200,
    edges: ["2Z868tdQDn"],
  },
  ykTr2Pa8F8: {
    data: {
      val: "pa.part16.classA",
      text: "Install telecommunications equipment",
    },
    type: 200,
    edges: ["3J58FPa8F8"],
  },
  yllOi9ficn: {
    data: {
      fn: "application.fee.category.three.noMoreThanTwoPointFive",
      tags: [],
      title: "Is the site area no more than 2.5 hectares?",
      formula: "smaller(proposal.site.area, 25000)",
      samples: {},
      defaults: {
        "proposal.siteArea": "0",
        "proposal.site.area": "0",
      },
      formatOutputForAutomations: true,
    },
    type: 700,
  },
  ymUYdipTPf: {
    data: {
      text: "This application",
    },
    type: 200,
    edges: ["n8SRjOZLlv"],
  },
  yr26otWtSQ: {
    data: {
      text: "Class CA",
    },
    type: 100,
  },
  ysYGumgA7z: {
    data: {
      fn: "application.fee.reduction.alternative",
      val: "true",
    },
    type: 380,
  },
  yveZwPa8F8: {
    data: {
      info: "<p>You do not need to pay a fee for your application for Prior Approval if, on the same day you are also submitting a full planning application about the same development.</p>",
      text: "When are you submitting it?",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a></p>',
      description:
        "<p>This question refers to your application for planning permission that relates to the same works as this application for prior approval.</p>",
    },
    type: 100,
    edges: ["sTd4PPa8F8", "4YatDPa8F8", "jD6EtPa8F8", "7YdKGPa8F8"],
  },
  ywnW8Pa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["SoLrKPa8F8"],
  },
  yxODqtq6bv: {
    data: {
      val: "new",
      text: "Construction of a new building",
    },
    type: 200,
    edges: ["HnUzJGPne6"],
  },
  yyHoT1Lxaq: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["ueqySqCf5e"],
  },
  z9LzSPa8F8: {
    data: {
      val: "pa.part1.classAA",
      text: "Adding storeys to a house",
    },
    type: 200,
    edges: ["YteHqPa8F8"],
  },
  z9jUAzJv02: {
    data: {
      val: "true",
      text: "This is correct",
    },
    type: 200,
  },
  zB1Q8MnzRG: {
    data: {
      fn: "application.fee.reduction.parishCouncil",
      val: "true",
      tags: [],
      operation: "replace",
    },
    type: 380,
  },
  zLKHnHrdP9: {
    data: {
      val: "true",
      text: "Yes",
    },
    type: 200,
    edges: ["q1rqRR6buM"],
  },
  zPPjy7yLtj: {
    data: {
      val: "existingWorks",
      text: "Yes, existing building works",
    },
    type: 200,
    edges: ["aftjy4dfLS", "HqlUd3z8Rq", "soLrSBtxmn"],
  },
  zQ1w4Pa8F8: {
    data: {
      val: "pa.part6.classB",
      text: "Build new agricultural buildings on a unit of less than 5 hectares",
    },
    type: 200,
    edges: ["wzMyVPa8F8", "cOSGyPa8F8"],
  },
  zXDiztR4Kp: {
    data: {
      val: "add",
      text: "Yes",
    },
    type: 200,
    edges: ["DgGxlBY59M", "KmCtnBuFRd"],
  },
  zXa2PPa8F8: {
    data: {
      val: "pa.part3.classG",
      text: "Convert a commercial building to mixed use",
    },
    type: 200,
    edges: ["iADo8Pa8F8"],
  },
  zYsTwPa8F8: {
    data: {
      val: "false",
      text: "No",
    },
    type: 200,
    edges: ["vlIXqPa8F8"],
  },
  zbc3uVxij5: {
    data: {
      fn: "application.fee.category.five",
      info: "<p>The fee for the erection, alteration of replacement of plant or machinery on a site with an area of less than 1 hectare is £588 for each 0.1 hectare (or part thereof).</p>",
      tags: [],
      formula: "((ceil(proposal.site.area/1000))588)",
      samples: {},
      defaults: {
        "proposal.siteArea": "1",
        "proposal.site.area": "1",
      },
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2023/1197">https://www.legislation.gov.uk/uksi/2023/1197</a></p>',
      howMeasured:
        '<p>For more information about planning fees in England are calculated, view <a href="https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf" target="_self">this guide</a></p>',
      formatOutputForAutomations: false,
    },
    type: 700,
  },
  zs70hRzLxT: {
    data: {
      fn: "application.type",
      tags: ["automation"],
      text: "What type of application is it?",
      neverAutoAnswer: false,
    },
    type: 100,
    edges: ["jftkrWQu88", "aaUKwlHhY7", "6xOGIyxGiH"],
  },
  zyTyWPa8F8: {
    data: {
      fn: "application.fee.payable",
      info: "<p>If the proposed works (to either a home or within the curtilage of a home) is for the <strong>sole</strong> purpose of providing either:</p>\n<p></p>\n<p>- A means of access to (or within) the dwellinghouse for a disabled resident (current or future)</p>\n<p></p>\n<p>OR</p>\n<p></p>\n<p>- Providing facilities that are designed to ensure the disabled persons safety, health or comfort</p>\n<p></p>\n<p>OR</p>\n<p></p>\n<p>- Providing disabled access to a public building</p>\n<p></p>\n<p>Then no planning fee will be payable for this application.</p>",
      formula: "0",
      policyRef:
        '<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/14">The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14</a>, &amp; <a target="_self" rel="noopener noreferrer nofollow" href="https://www.legislation.gov.uk/uksi/2012/2920/regulation/4"> Regulation 4</a></p>',
    },
    type: 700,
  },
  qidhti0sCu: {
    data: {
      tags: [],
      title: "Pay and send",
      length: "short",
    },
    type: 360,
  },
  smXo5R8VpV: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["OVcnkdg5cF", "IjBTZL3EOS"],
  },
  t9StTi0sCu: {
    data: {
      text: "£43",
    },
    type: 100,
  },
  tw016i0sCu: {
    data: {
      fn: "referenceNumber",
      info: "<p>The service is asking for the reference number so that the officer can use this to assess this application.</p>",
      type: "short",
      title: "What is the reference number of the application?",
      description:
        "<p>Find this on the decision notice of the application.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 110,
  },
  uEDPFi0sCu: {
    data: {
      text: "£145",
    },
    type: 100,
  },
  uWyNBi0sCu: {
    data: {
      title: "Enter the postcode of the property",
      description: "<p>For example, SW2 1EG</p>",
      newAddressTitle: "Point at where your site is on the map",
      allowNewAddresses: true,
      newAddressDescription: "<p>Then name the site below.</p>",
    },
    type: 9,
  },
  vdWebi0sCu: {
    data: {
      fn: "proposal.description",
      info: "<p>The service is asking for the description so that the officer can use it to assess this application.</p>",
      type: "extraLong",
      title:
        "What is the description of the development as it appears on the listed building consent?",
      description:
        "<p>Copy the description as it appears on the decision notice.</p>",
      howMeasured:
        "<p>A decision notice is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul>",
    },
    type: 110,
  },
  yEcLai0sCu: {
    data: {
      fn: "originalApplication.type",
      info: "<p>The service is asking this so that it collects the right information for this application.</p><p></p><p><strong>Why can I only choose one?</strong><br><br>You can only use this service to submit details for conditions relating to a single application.</p><p>For example, you'll need to use this service twice if you need to submit details for either:</p><ul><li><p>two different applications for planning permission, or</p></li><li><p>a planning permission and a Listed Building Consent.</p></li></ul><p></p>",
      tags: [],
      text: "What type of application do the conditions relate to?",
      description:
        "<p>Select one option.</p><p>This information is on your decision notice.</p>",
      howMeasured:
        "<p><strong>A decision notice</strong> is a document confirming the consent and its details. You can find it either on the:</p><ul><li><p>email you used to make the application</p></li><li><p>Local Planning Authority&apos;s planning register by searching the application address</p></li></ul><p><strong>Householder planning permission</strong> is an application for physical works to a home or within its garden. It does not include a change of use of a home to a shop for example.<br><br><strong>Listed building consent</strong> is an application to carry out works to a listed building.</p>",
      neverAutoAnswer: false,
      alwaysAutoAnswerBlank: false,
    },
    type: 100,
    edges: ["Wb6D2i0sCu", "GtUo0i0sCu", "8h4Dpi0sCu"],
  },
  zf9mavI6iX: {
    data: {
      val: "demolition",
      text: "Only demolition",
      description: "Also known as 'relevant demolition'",
    },
    type: 200,
  },
  zitvUi0sCu: {
    data: {
      text: "prior approval/ minor/ major",
    },
    type: 100,
  },
};
