import type { GraphQLClient } from "graphql-request";

import { getSessionById } from "../requests/session.js";
import { generateBOPSPayload } from "./index.js";

vi.mock("../requests/session.js", () => ({ getSessionById: vi.fn() }));

const client = {} as GraphQLClient;

describe("generateBOPSPayload()", () => {
  it("forwards the cause of an underlying error", async () => {
    const cause = { errors: [], properties: { a: { errors: ["Invalid"] } } };
    vi.mocked(getSessionById).mockRejectedValueOnce(
      new Error("Failed to parse response data", { cause }),
    );

    await expect(
      generateBOPSPayload({ client, sessionId: "abc123" }),
    ).rejects.toThrow(
      expect.objectContaining({
        message: expect.stringMatching(
          /Cannot generate BOPS payload for session abc123/,
        ),
        cause,
      }),
    );
  });

  it("has no cause when the underlying error is not an Error", async () => {
    vi.mocked(getSessionById).mockRejectedValueOnce("Something went wrong");

    await expect(
      generateBOPSPayload({ client, sessionId: "abc123" }),
    ).rejects.toThrow(expect.objectContaining({ cause: undefined }));
  });
});
