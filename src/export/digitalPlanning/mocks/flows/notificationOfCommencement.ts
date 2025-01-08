import { FlowGraph } from "../../../../types/index.js";

// Copied from Buckinghamshire on 08 Jan 2025
export const mockPublishedNOCFlow: FlowGraph = {
  _root: {
    edges: [
      "PckGxO4AgQ",
      "CReH0ZUnB3",
      "Z28tn2t9BM",
      "XJtWHBn8KR",
      "P4fRVlKmNI",
      "8Mzv0b42Oi",
      "4I52b5H8rL",
      "asb0FVgtVm",
      "s2YTmALWV0",
      "4nnttggnfo",
      "mFwLvDuxLF",
    ],
  },
  "1AtpbUszBk": { data: { title: "When did the works start?" }, type: 120 },
  "1zl0bfRMLa": {
    data: { val: "Commencement", text: "Commencement" },
    type: 200,
  },
  "3NhRaQKv45": {
    data: { val: "Commencement", text: "Yes" },
    type: 200,
    edges: ["z0b63MQEEV", "1AtpbUszBk", "K1Z8oWKho2"],
  },
  "4I52b5H8rL": {
    data: { type: "short", title: "Application Number" },
    type: 110,
  },
  "4nnttggnfo": { data: { title: "Send", destinations: ["email"] }, type: 650 },
  "8Mzv0b42Oi": {
    data: { fn: "site.address", title: "Site Address Details" },
    type: 130,
  },
  CReH0ZUnB3: {
    data: {
      color: "#EFEFEF",
      title: "This is a new service",
      description:
        "<p>We&apos;re always working to improve this service. If you spot issues or have comments on how to make it better, you can leave feedback using the link to the bottom left of your browser window as you go along.</p><p>Please use the screenshot button for feedback. This will not capture any of your personal data but it helps us to see where you were in the service.</p>",
      resetButton: false,
    },
    type: 8,
  },
  K1Z8oWKho2: {
    data: { text: "I confirm that:", allRequired: true },
    type: 105,
    edges: ["sG3PED8dKU"],
  },
  P4fRVlKmNI: { data: { fn: "contact", title: "Contact details" }, type: 135 },
  PckGxO4AgQ: {
    data: {
      content:
        "<h1>Notification of commencement</h1><p>You can use this free service to notify the commencement of works to a member of the Building Control team.</p><p>You can leave and return to this service using the same link at any time.</p>",
    },
    type: 250,
  },
  V9Nmizh8Tx: {
    data: {
      text: "I confirm that we intend to start the works on the stated date and will notify you no more than five working days after the work has satisfied the definition of the commencement of work.",
    },
    type: 200,
  },
  XJtWHBn8KR: {
    data: {
      color: "#EFEFEF",
      title:
        "You are required to notify Building Control twice of work starting:",
      description:
        "<p>1. A notification must be submitted to building control at least two working days before intention to start work.</p><p>2. A further notification must be submitted, no more than five working days after the work has satisfied the above definition of the commencement of work.</p>",
      resetButton: false,
    },
    type: 8,
  },
  Z28tn2t9BM: {
    data: {
      color: "#EFEFEF",
      title: "From 1st October 2023, the definition of a commencement is:",
      description:
        "<p>· Where the work is a new build or a horizontal extension of a building, work is to be regarded as commenced when the sub-surface structure of the building or the extension including all foundations, any basement level (if any) and the structure of ground floor level is completed.</p><p>· Where the work consists of any other building work, the work is to be regarded as commenced when 15% of the proposed work has been completed.</p>",
      resetButton: false,
    },
    type: 8,
  },
  asb0FVgtVm: {
    data: { fn: "works.started", text: "Have the works started?" },
    type: 100,
    edges: ["3NhRaQKv45", "qs1gXUH8ZN"],
  },
  b5pK0rrHKH: { data: { val: "Start", text: "Start" }, type: 200 },
  lQJYfgKqZx: {
    data: { text: "I confirm that:", allRequired: true },
    type: 105,
    edges: ["V9Nmizh8Tx"],
  },
  mFwLvDuxLF: {
    data: {
      heading: "Notification sent",
      moreInfo:
        "<h2>You will be contacted</h2><ul><li><p>if there is anything missing from the information you have provided so far</p></li><li><p>if any additional information is required</p></li></ul>",
      contactInfo:
        "You can contact us at <em>planning@lambeth.gov.uk</em>\n          <br/><br/>\n          What did you think of this service? Please give us your feedback using the link in the footer below.",
      description:
        "Thank you for your submission. You will also receive an email to confirm when your request has been received.",
    },
    type: 725,
  },
  qs1gXUH8ZN: {
    data: { val: "Start", text: "No" },
    type: 200,
    edges: ["z0b63MQEEV", "tTvgNj1TTX", "lQJYfgKqZx"],
  },
  s2YTmALWV0: {
    data: { title: "Check your answers before sending" },
    type: 600,
  },
  sG3PED8dKU: {
    data: {
      text: "That the work has satisfied the definition of the commencement of work.",
    },
    type: 200,
  },
  tTvgNj1TTX: { data: { title: "When will the works start?" }, type: 120 },
  z0b63MQEEV: {
    data: { fn: "works.started", text: "What is the status?" },
    type: 100,
    edges: ["1zl0bfRMLa", "b5pK0rrHKH"],
  },
};
