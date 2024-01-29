import * as crypto from "crypto";

/**
 * Encrypts a secret using AES-256-CBC encryption
 *
 * @param secret - The secret to be encrypted
 * @param key - The encryption key - a 32-byte string
 * @returns The encrypted secret along with the initialization vector (IV), separated by a colon
 */
export function encrypt(secret: string, key: string): string {
  const keyBuffer = Buffer.from(key);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("AES-256-CBC", keyBuffer, iv);
  let encrypted = cipher.update(secret, "utf-8", "hex");
  encrypted += cipher.final("hex");
  const ivString = iv.toString("hex");

  return `${encrypted}:${ivString}`;
}

/**
 * Decrypts a secret that was encrypted using AES-256-CBC encryption
 *
 * @param secret - The secret to be decrypted. If null, returns undefined.
 * @param key - The encryption key - a 32-byte string
 * @returns The decrypted secret
 */
export function decrypt(
  secret: string | null,
  key: string,
): string | undefined {
  if (!secret) return undefined;

  const [encryptedToken, iv] = secret.split(":");
  const decipher = crypto.createDecipheriv(
    "AES-256-CBC",
    Buffer.from(key, "utf-8"),
    Buffer.from(iv, "hex"),
  );
  let decryptedToken = decipher.update(encryptedToken, "hex", "utf-8");
  decryptedToken += decipher.final("utf-8");

  return decryptedToken;
}
