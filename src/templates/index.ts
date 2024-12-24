import { Document, Packer } from "docx";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import type {
  DrawBoundaryUserAction,
  Passport,
  PlanXExportData,
} from "../types/index.js";
import { LDCETemplate } from "./docx/LDCETemplate.js";
import { LDCPTemplate } from "./docx/LDCPTemplate.js";
import { applyRedactions, getString, hasValue } from "./helpers.js";
import { ApplicationHTML } from "./html/application/ApplicationHTML.js";
import { MapHTML } from "./html/map/MapHTML.js";

export type Template = {
  template: (passport: Passport) => Document;
  redactions?: string[] | undefined;
  requirements: { key: string; value: string | undefined }[];
};

export const TEMPLATES: Record<string, Template> = {
  _blank: {
    template: () => new Document({ sections: [] }),
    requirements: [],
  },
  LDCE: {
    template: LDCETemplate,
    requirements: [{ key: "application.type", value: "ldc.existing" }],
  },
  LDCE_redacted: {
    template: LDCETemplate,
    redactions: [
      "applicant.email",
      "applicant.phone.primary",
      "applicant.phone.secondary",
      "applicant.address.line1",
      "applicant.address.line2",
      "applicant.address.town",
      "applicant.address.county",
      "applicant.address.postcode",
      "applicant.address.country",
      "applicant.sameAddress.form",
      "applicant.agent.email",
      "applicant.agent.phone.primary",
      "applicant.agent.phone.secondary",
      "applicant.siteContact.telephone",
      "applicant.siteContact.email",
    ],
    requirements: [{ key: "application.type", value: "ldc.existing" }],
  },
  LDCP: {
    template: LDCPTemplate,
    requirements: [{ key: "application.type", value: "ldc.proposed" }],
  },
  LDCP_redacted: {
    template: LDCPTemplate,
    redactions: [
      "applicant.email",
      "applicant.phone.primary",
      "applicant.phone.secondary",
      "applicant.address.line1",
      "applicant.address.line2",
      "applicant.address.town",
      "applicant.address.county",
      "applicant.address.postcode",
      "applicant.address.country",
      "applicant.sameAddress.form",
      "applicant.agent.email",
      "applicant.agent.phone.primary",
      "applicant.agent.phone.secondary",
      "applicant.siteContact.telephone",
      "applicant.siteContact.email",
    ],
    requirements: [{ key: "application.type", value: "ldc.proposed" }],
  },
};

export function generateApplicationHTML({
  planXExportData,
  boundingBox,
  userAction,
}: {
  planXExportData: PlanXExportData[];
  boundingBox: GeoJSON.Feature;
  userAction?: DrawBoundaryUserAction;
}): string {
  return renderToStaticMarkup(
    React.createElement(ApplicationHTML, {
      data: planXExportData,
      boundingBox,
      userAction,
    }),
  );
}

export function generateMapHTML({
  geojson,
  boundingBox,
  userAction,
}: {
  geojson: object;
  boundingBox: GeoJSON.Feature;
  userAction?: DrawBoundaryUserAction;
}): string {
  return renderToStaticMarkup(
    React.createElement(MapHTML, { geojson, boundingBox, userAction }),
  );
}

export function generateDocxTemplateStream({
  templateName,
  passport,
}: {
  templateName: string;
  passport: Passport;
}) {
  if (!TEMPLATES[templateName]) {
    throw new Error(`Template "${templateName}" not found`);
  }
  if (!hasRequiredDataForTemplate({ templateName, passport })) {
    throw new Error(`Template "${templateName}" is missing required fields`);
  }
  const { redactions, template } = TEMPLATES[templateName]!;
  let data = passport!;
  if (redactions && redactions.length) {
    data = applyRedactions(passport!, redactions);
  }
  const document: Document = template(data);
  return Packer.toStream(document);
}

export function hasRequiredDataForTemplate({
  templateName,
  passport,
}: {
  templateName: string;
  passport: Passport;
}): boolean {
  const template: Template | undefined = TEMPLATES[templateName];
  if (!template) throw new Error(`Template "${templateName}" not found`);
  for (const { key, value } of template.requirements) {
    if (!passport.data || !hasValue(passport.data, key)) {
      return false;
    }
    if (value) {
      return getString(passport.data, key) === value;
    }
  }
  return true;
}
