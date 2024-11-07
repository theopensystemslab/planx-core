import { load } from "cheerio";
import { isEmpty, isNil } from "lodash";
import { marked } from "marked";

import { Passport } from "../../models/passport";
import { getResultData } from "../../models/result";
import { sortBreadcrumbs } from "../../models/session/logic";
import type {
  ApplicationUserRole,
  Breadcrumbs,
  EnhancedGISResponse,
  FileTag,
  FlowGraph,
  GovUKPayment,
  Passport as IPassport,
  QuestionAndResponses,
  QuestionMetaData,
  Response,
  ResponseMetaData,
  SiteAddress,
  Value,
} from "../../types";
import {
  BOPSFullPayload,
  ComponentType,
  DEFAULT_APPLICATION_TYPE,
  flatFlags,
  GOV_PAY_PASSPORT_KEY,
  USER_ROLES,
} from "../../types";
import { DataObject } from "./../../types/data";

const bopsDictionary = {
  // applicant or agent details can be provided via TextInput(plural) or ContactInput component
  applicant_first_name: "applicant.name.first",
  applicant_last_name: "applicant.name.last",
  applicant_phone: "applicant.phone.primary",
  applicant_email: "applicant.email",

  agent_first_name: "applicant.agent.name.first",
  agent_last_name: "applicant.agent.name.last",
  agent_phone: "applicant.agent.phone.primary",
  agent_email: "applicant.agent.email",

  description: "proposal.description",
} as const;

function isTypeForBopsPayload(type?: ComponentType) {
  if (!type) return false;

  //To-Do Set MapAndLabel to True once we know shape of BOPs data

  switch (type) {
    case ComponentType.Calculate:
    case ComponentType.Confirmation:
    case ComponentType.Content:
    case ComponentType.DrawBoundary:
    case ComponentType.ExternalPortal:
    case ComponentType.FileUpload:
    case ComponentType.FileUploadAndLabel:
    case ComponentType.Filter:
    case ComponentType.FindProperty:
    case ComponentType.Flow:
    case ComponentType.InternalPortal:
    case ComponentType.NextSteps:
    case ComponentType.Notice:
    case ComponentType.Pay:
    case ComponentType.PlanningConstraints:
    case ComponentType.PropertyInformation:
    case ComponentType.Answer:
    case ComponentType.Result:
    case ComponentType.Review:
    case ComponentType.Section:
    case ComponentType.Send:
    case ComponentType.SetValue:
    case ComponentType.TaskList:
    case ComponentType.List:
    case ComponentType.MapAndLabel:
    case ComponentType.Page:
    case ComponentType.Feedback:
      return false;

    case ComponentType.AddressInput:
    case ComponentType.Checklist:
    case ComponentType.DateInput:
    case ComponentType.NumberInput:
    case ComponentType.Question:
    case ComponentType.TextInput:
    case ComponentType.ContactInput:
      return true;

    default:
      return exhaustiveCheck(type);
  }
}

function exhaustiveCheck(type: never): never {
  throw new Error(`Unhandled type ${type}`);
}

function isDataObject(value: Value): value is DataObject {
  return typeof value === "object" && value !== null;
}

export function formatProposalDetails({
  flow,
  breadcrumbs,
  keysToRedact = [],
}: {
  flow: FlowGraph;
  breadcrumbs: Breadcrumbs;
  keysToRedact?: string[];
}): {
  proposalDetails: Array<QuestionAndResponses>;
  feedback?: BOPSFullPayload["feedback"];
} {
  const sortedBreadcrumbs = sortBreadcrumbs(flow as FlowGraph, breadcrumbs);

  const feedback: BOPSFullPayload["feedback"] = {};
  const proposalDetails: Array<QuestionAndResponses> = [];

  let hasSections = false;
  let currentSectionName = "";
  for (const crumb of sortedBreadcrumbs) {
    // Skip nodes that may be in the breadcrumbs which are no longer in flow
    if (!flow[crumb.id]) continue;
    const node = flow[crumb.id];

    try {
      const trimmedFeedback = crumb.feedback?.trim();
      if (trimmedFeedback) {
        switch (crumb.type) {
          case ComponentType.Result:
            feedback["result"] = trimmedFeedback;
            break;
          case ComponentType.FindProperty:
            feedback["find_property"] = trimmedFeedback;
            break;
          case ComponentType.PlanningConstraints:
            feedback["planning_constraints"] = trimmedFeedback;
            break;
          default:
            throw new Error(`Invalid feedback type ${node.type}`);
        }
      }
    } catch (err) {
      throw new Error(`Error parsing feedback: ${err}`);
    }

    // update the section name
    if (crumb.type === ComponentType.Section) {
      currentSectionName = node.data?.title as string;
      hasSections = true;
    }

    // exclude answers that have been extracted into the root object
    const validKey = !Object.values(bopsDictionary).find(
      (val) => val === (node.data?.fn as string),
    );
    if (!isTypeForBopsPayload(crumb.type) || !validKey) continue;

    const answers: Array<string> = (() => {
      switch (crumb.type) {
        case ComponentType.AddressInput:
          try {
            const addressObject = Object.values(crumb.data!)[0];

            if (!addressObject)
              throw Error("Missing AddressInput component type");
            if (!isDataObject(addressObject))
              throw Error(
                "Invalid addressObject produced by AddressInput component",
              );

            // `Object.values(addressObject)` won't guarantee key order, so explicitly create a new array
            const orderedAddressKeys = [
              "line1",
              "line2",
              "town",
              "county",
              "postcode",
              "country",
            ];
            const orderedAddressItems: Array<Value | undefined> = [];
            orderedAddressKeys.forEach((key) => {
              if (addressObject[key]) {
                orderedAddressItems.push(addressObject[key]);
              }
            });
            return [orderedAddressItems.filter(Boolean).join(", ")];
          } catch (err) {
            return [JSON.stringify(crumb.data)];
          }
        case ComponentType.ContactInput:
          try {
            // Get the internally referenced `_contact` object
            const contactObject = Object.values(crumb.data!).filter(
              (x) => typeof x === "object",
            )[0];
            // Get _contact nested entries indpendent of the outer `fn` property set by the flow node
            const contactParts = Object.values(contactObject!).filter(
              (y) => typeof y === "object",
            )[0];

            // `Object.values(contactParts)` won't guarantee key order, so explicitly create a new array
            const orderedContactKeys = [
              "title",
              "firstName",
              "lastName",
              "organisation",
              "phone",
              "email",
            ];
            const orderedContactItems: string[] = [];
            orderedContactKeys.forEach((key) => {
              if (contactParts?.[key]) {
                orderedContactItems.push(contactParts?.[key]);
              }
            });
            return [orderedContactItems.filter(Boolean).join(" ")];
          } catch (err) {
            return [JSON.stringify(crumb.data)];
          }
        case ComponentType.DateInput:
        case ComponentType.NumberInput:
        case ComponentType.TextInput:
          return Object.values(crumb.data ?? {}).map((x) => String(x));
        case ComponentType.Checklist:
        case ComponentType.Question:
        default:
          return crumb.answers;
      }
    })();

    if (!answers) continue; // Quit loop if no answers for node

    const responses = answers.map((id) => {
      let value = id;
      const metadata: ResponseMetaData = {};
      const answerNode = flow[id];

      if (answerNode) {
        if (keysToRedact.includes(answerNode.data?.fn as string)) {
          value = "REDACTED";
        } else {
          // this is how we get the text representation of a node until
          // we have a more standardised way of retrieving it. More info
          // https://github.com/theopensystemslab/planx-new/discussions/386
          value =
            (answerNode.data?.text as string) ??
            (answerNode.data?.title as string) ??
            "";
        }

        if (answerNode.data?.flag) {
          const flag = flatFlags.find((f) => f.value === answerNode.data?.flag);
          if (flag) {
            metadata.flags = [`${flag.category} / ${flag.text}`];
          }
        }
      }

      const ob: Response = { value };
      if (Object.keys(metadata).length > 0) ob.metadata = metadata;
      return ob;
    });

    const metadata = (() => {
      const metadata: QuestionMetaData = {};
      if (hasSections) {
        metadata.section_name = currentSectionName;
      }
      if (crumb.autoAnswered) metadata.auto_answered = true;
      if (node.data?.policyRef) {
        const policyRefs = parsePolicyRefs(node.data.policyRef as string);
        if (policyRefs.length) metadata.policy_refs = policyRefs;
      }
      return metadata;
    })();

    proposalDetails.push({
      question:
        (node.data?.text as string) ?? (node.data?.title as string) ?? "",
      responses,
      metadata,
    });
  }

  return {
    proposalDetails,
    feedback: Object.keys(feedback).length ? feedback : undefined,
  };
}

export const parsePolicyRefs = (markdownOrHTML: string) => {
  const htmlString = marked.parse(markdownOrHTML, { async: false }) as string;
  const $ = load(htmlString);
  const policyRefs = $("a").map((_index, el) => ({
    text: $(el).prop("textContent")?.trim() ?? undefined,
    url: $(el).attr("href"),
  }));

  return policyRefs.toArray();
};

export function computeBOPSParams({
  sessionId,
  flow,
  flowName,
  breadcrumbs,
  passport: originalPassport,
  keysToRedact = [],
}: {
  sessionId: string;
  flow: FlowGraph;
  flowName: string;
  breadcrumbs: Breadcrumbs;
  passport: IPassport;
  keysToRedact?: string[];
}): BOPSFullPayload {
  const isRedacted = keysToRedact && keysToRedact.length > 0;
  const data = {} as BOPSFullPayload;
  data.application_type = DEFAULT_APPLICATION_TYPE;

  const passport = new Passport(originalPassport);

  // Overwrite default application type if this isn't an LDC (relies on LDC flows having consistent slug)
  //   eg because makeCsvData which is used across all/any services calls this method too
  if (flowName !== "Apply for a lawful development certificate") {
    data.application_type = flowName;
  }

  // 1a. address
  const address = passport.any(["_address"]) as SiteAddress;

  if (address) {
    const site = {} as BOPSFullPayload["site"];

    site.uprn = address.uprn && String(address.uprn);

    site.address_1 =
      address.single_line_address?.split(`, ${address.town}`)[0] ||
      address.title;

    site.town =
      address.town || passport.string(["property.localAuthorityDistrict"]);
    site.postcode = address.postcode;

    site.latitude = passport.number(["_address", "latitude"]);
    site.longitude = passport.number(["_address", "longitude"]);

    site.x = passport.number(["_address", "x"]);
    site.y = passport.number(["_address", "y"]);

    site.source = address.source; // reflects "os" or "proposed"

    data.site = site;
  }

  // 1b. property boundary
  const geojson = passport.any(["property.boundary.site"]);
  if (geojson) data.boundary_geojson = geojson;

  // 2. files
  passport.files.forEach(({ key, url }) => {
    try {
      data.files = data.files || [];

      data.files.push({
        filename: url,
        tags: extractTagsFromPassportKey(key),
        applicant_description: extractFileDescriptionForPassportKey(
          passport.data,
          key,
        ),
      });
    } catch (err) {
      throw new Error(`Error formatting files: ${err}`);
    }
  });

  // 3. constraints
  if (passport.has(["_constraints"])) {
    const passportConstraints = passport.any([
      "_constraints",
    ]) as Array<EnhancedGISResponse>;
    const constraints: BOPSFullPayload["constraints"] = {};
    passportConstraints.forEach((response: EnhancedGISResponse) => {
      Object.entries(response.constraints || []).forEach(
        ([key, constraint]) => {
          constraints[key] = constraint.value;
        },
      );
    });
    data.constraints = constraints;

    data.constraints_proposed = passportConstraints;
  }

  // 4. work status
  const workStatus = getWorkStatus(passport);
  if (workStatus) data.work_status = workStatus;

  // 5. keys
  const bopsData = removeNilValues(
    Object.entries(bopsDictionary).reduce(
      (acc, [bopsField, planxField]) => {
        if (passport.has([planxField])) {
          let value = passport.string([planxField]);
          if (keysToRedact.includes(planxField)) {
            value = "REDACTED";
          }
          acc[bopsField as keyof BOPSFullPayload] = value;
        }
        return acc;
      },
      {} as Record<keyof BOPSFullPayload, string>,
    ),
  ) as unknown as Partial<BOPSFullPayload>;

  // 6a. questions+answers array
  const { proposalDetails, feedback } = formatProposalDetails({
    flow,
    breadcrumbs,
    keysToRedact,
  });
  data.proposal_details = proposalDetails;

  // 6b. optional feedback object
  // we include feedback object if it contains at least 1 key/value pair
  if (feedback) {
    data.feedback = feedback;
  }

  // 7. payment
  const payment = passport.any([GOV_PAY_PASSPORT_KEY]) as GovUKPayment;
  if (!isRedacted && payment) {
    data.payment_amount = toPence(payment.amount);
    data.payment_reference = payment.payment_id;
  }

  // 8. flag data
  try {
    const result = getResultData({ breadcrumbs, flow });
    const { flag } = Object.values(result)[0];
    data.result = removeNilValues({
      flag: [flag.category, flag.text].join(" / "),
      heading: flag.text,
      description: flag.description,
      override:
        passport.string(["application.resultOverride.reason"]) || undefined,
    });
  } catch (err) {
    throw new Error(`Error setting flag result: ${err}`);
  }

  // 9. user role
  const userRole = passport.string(["user.role"]) as ApplicationUserRole;
  if (userRole && USER_ROLES.includes(userRole)) data.user_role = userRole;

  // 10. Works
  const works: BOPSFullPayload["works"] = {};

  const startedDate = parseDate(passport.string(["proposal.start.date"]));
  if (startedDate) works.start_date = startedDate;

  const completionDate = parseDate(
    passport.string(["proposal.completion.date"]),
  );
  if (completionDate) works.finish_date = completionDate;

  if (!isEmpty(works)) data.works = works;

  return {
    ...data,
    ...bopsData,
    planx_debug_data: {
      session_id: sessionId,
      breadcrumbs,
      passport: originalPassport,
    },
  };
}

const parseDate = (dateString: string | undefined): string | undefined => {
  try {
    if (dateString) {
      return new Date(dateString).toISOString().split("T")[0];
    }
  } catch (err) {
    throw new Error(`Error parsing date ${dateString}: ${err}`);
  }
};

const getWorkStatus = (passport: IPassport) => {
  switch (passport?.data?.["application.type"]?.toString()) {
    case "ldc.existing":
      return "existing";
    case "ldc.proposed":
      return "proposed";
  }
};

export const extractFileDescriptionForPassportKey = (
  passport: IPassport["data"],
  passportKey: string,
): string | undefined => {
  try {
    // XXX: check for .description or .reason as there might be either atm
    //      i.e. file = photographs.existing, text = photographs.existing.reason
    for (const x of ["description", "reason"]) {
      const key = `${passportKey}.${x}`;
      const val = passport?.[key];
      if (val && typeof val === "string") {
        return val;
      }
    }
  } catch (err) {
    throw new Error(
      `Error extracting file description for ${passportKey}: ${err}`,
    );
  }
  return undefined;
};

/**
 * Accepts a passport key and returns BOPS file tags associated with it
 * More info: https://bit.ly/tags-spreadsheet
 */
export const extractTagsFromPassportKey = (passportKey: string) => {
  const tags: FileTag[] = [];

  if (!passportKey) return tags;

  const splitKey = passportKey.split(".");

  if (splitKey[1] === "proposed") {
    tags.push("Proposed");
  } else if (splitKey[1] === "existing") {
    tags.push("Existing");
  }

  if (splitKey.includes("locationPlan")) {
    // "locationPlan" is DrawBoundary's passport key
    tags.push("Site");
    tags.push("Plan");
  } else if (splitKey.includes("roofPlan")) {
    tags.push("Roof");
    tags.push("Plan");
  } else if (splitKey.includes("elevations")) {
    tags.push("Elevation");
  } else if (splitKey.includes("photographs")) {
    tags.push("Photograph");
  } else if (splitKey.includes("sections")) {
    tags.push("Section");
  } else if (splitKey.includes("floorPlan")) {
    tags.push("Floor");
    tags.push("Plan");
  } else if (splitKey.includes("councilTaxBill")) {
    tags.push("Council Tax Document");
  } else if (splitKey.includes("tenancyAgreement")) {
    tags.push("Tenancy Agreement");
  } else if (splitKey.includes("tenancyInvoice")) {
    tags.push("Tenancy Invoice");
  } else if (splitKey.includes("bankStatement")) {
    tags.push("Bank Statement");
  } else if (splitKey.includes("statutoryDeclaration")) {
    tags.push("Statutory Declaration");
  } else if (passportKey.includes("utilityBill")) {
    tags.push("Utility Bill");
  } else if (passportKey.includes("buildingControlCertificate")) {
    tags.push("Building Control Certificate");
  } else if (passportKey.includes("constructionInvoice")) {
    tags.push("Construction Invoice");
  } else if (splitKey.some((x) => x.endsWith("Plan"))) {
    // eg "sitePlan"
    tags.push("Plan");
  } else if (splitKey.some((x) => x.startsWith("other"))) {
    tags.push("Other");
  }

  return tags;
};

const toPence = (decimal: number) => Math.trunc(decimal * 100);

const removeNilValues = <T extends Record<string, unknown>>(ob: T): T =>
  Object.entries(ob).reduce((acc, [k, v]) => {
    if (!isNil(v)) {
      (acc as Record<string, unknown>)[k] = v;
    }
    return acc;
  }, {} as T);
