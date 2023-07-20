export type DataObject = { [key: string]: Value | undefined };

export type Value =
  | null
  | boolean
  | number
  | string
  | DataObject
  | Array<Value>;

// KeyPath is an array of keys representing the path to a property
// for example KeyPath ["a", "b"] for { "a": { "b": true } } === `true`
export type KeyPath = Array<string>;
