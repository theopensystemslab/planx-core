import * as crypto from "crypto";

export function decrypt(secret: string | null, key: string) {
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

export function encrypt(secret: string, key: string) {
  const keyBuffer = Buffer.from(key);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("AES-256-CBC", keyBuffer, iv);
  let encrypted = cipher.update(secret, "utf-8", "hex");
  encrypted += cipher.final("hex");
  const ivString = iv.toString("hex");

  return `${encrypted}:${ivString}`;
}
