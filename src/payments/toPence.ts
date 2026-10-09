/**
 * Convert a passport amount in pounds (123.45) to an integer in pence (12345)
 *
 * Rounds rather than truncates - floating point math means some values land just
 * under a whole penny (e.g. 300.15 * 100 = 30014.999...)
 */
export const toPence = (pounds: number): number => Math.round(pounds * 100);
