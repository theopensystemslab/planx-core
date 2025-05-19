import { keys, set } from "lodash-es";

import { Value } from "../../types/data.js";

// Destructures dot-separated passport keys into nested object paths
//   Eg `"offstreet.residential": 2` --> `"offstreet": { "residential": 2 }`
export const unflatten = (flattedObject: Record<string, Value>) => {
  const result = {};
  keys(flattedObject).forEach(function (key, _value) {
    set(result, key, flattedObject[key]);
  });
  return result;
};
