import { decrypt, encrypt } from "./encryption";

const key = "mySecretKey".padEnd(32, "0");

describe("encrypt function", () => {
  it("should correctly encrypt a secret", () => {
    const originalSecret = "sensitiveInformation";

    const encrypted = encrypt(originalSecret, key);
    expect(encrypted).toMatch(/:/);

    const decryptedResult = decrypt(encrypted, key);
    expect(decryptedResult).toBe(originalSecret);
  });
});

describe("decrypt function", () => {
  it("should return undefined when secret is null", () => {
    const result = decrypt(null, "someKey");
    expect(result).toBeUndefined();
  });

  it("should correctly decrypt a valid secret", () => {
    const originalSecret = "sensitiveInformation";
    const encryptedSecret = encrypt(originalSecret, key);

    const result = decrypt(encryptedSecret, key);
    expect(result).toBe(originalSecret);
  });
});
