import { Passport } from "../../models/passport";
import { mockProposedLDCPassportData } from "../oneApp/mocks/passport";
import { DigitalPlanning } from "./model";

const mockPassport = new Passport({
  data: {
    ...mockProposedLDCPassportData,
  },
});

describe("DigitalPlanning", () => {
  describe("getPayload", () => {
    it("should return valid payload", () => {
      const instance = new DigitalPlanning({
        sessionId: "session123",
        passport: mockPassport,
      });

      const payload = instance.getPayload();

      expect(payload).toEqual(instance.payload);
    });

    describe("invalid payloads", () => {
      test("missing values", () => {
        const instance = new DigitalPlanning({
          sessionId: "session123",
          passport: mockPassport,
        });

        // @ts-expect-error - The operand of a 'delete' operator must be optional
        delete instance.payload.data.applicant;

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("undefined values", () => {
        const instance = new DigitalPlanning({
          sessionId: "session123",
          passport: mockPassport,
        });

        // @ts-expect-error - Type 'undefined' is not assignable to type 'Applicant'
        instance.payload.data.applicant = undefined;

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect types", () => {
        const instance = new DigitalPlanning({
          sessionId: "session123",
          passport: mockPassport,
        });

        // @ts-expect-error - Type 'number' is not assignable to type 'string'
        instance.payload.data.applicant.name = 12345;

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect string format", () => {
        const instance = new DigitalPlanning({
          sessionId: "session123",
          passport: mockPassport,
        });

        instance.payload.metadata.service.url =
          "not a valid URL, but still a string";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect datetime format", () => {
        const instance = new DigitalPlanning({
          sessionId: "session123",
          passport: mockPassport,
        });

        instance.payload.metadata.session.submittedAt =
          "not a valid datetime, but still a string";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect enum value", () => {
        const instance = new DigitalPlanning({
          sessionId: "session123",
          passport: mockPassport,
        });

        // @ts-expect-error Type '"invalid enum"' is not assignable to type '"bar" | "baz" | "boo"'
        instance.payload.files[0].foo = "invalid enum";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });
    });
  });
});
