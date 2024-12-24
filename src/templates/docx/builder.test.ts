import { vi } from "vitest";

import type { TemplateData } from "./builder.js";
import { buildFormTemplate } from "./builder.js";
import { buildTestTemplate } from "./testTemplate.js";

describe("FormTemplateBuilder", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterAll(() => {
    vi.useRealTimers();
  });
  test("a simple form template", () => {
    const data: TemplateData = {
      presets: {
        title: "A Test",
        subtitle: "This is a test document",
      },
      sections: [
        {
          title: "Test Doc Info",
          fields: [
            {
              name: "Did it work as expected?",
              value: "Yes/No",
            },
            {
              name: "Are you sure",
              value: "Yes/No",
            },
          ],
        },
        {
          title: "Another Section",
          fields: [
            {
              name: "Can it handle multiple sections?",
              value: "Yes/No",
            },
          ],
        },
      ],
    };
    const form = buildFormTemplate(data);
    const expected = buildTestTemplate();
    expect(JSON.stringify(form, null, 2)).toEqual(
      JSON.stringify(expected, null, 2),
    );
  });
});
