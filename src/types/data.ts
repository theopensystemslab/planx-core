export type Value =
  | string
  | number
  | boolean
  | null
  | Array<Value>
  | { [key: string]: Value };

// KeyPath is an array of keys representing the path to a property
// for example KeyPath ["a", "b"] for { "a": { "b": true } } === `true`
export type KeyPath = Array<string>;
