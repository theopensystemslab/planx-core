export type Value =
  | string
  | number
  | boolean
  | null
  | Array<Value>
  | { [key: string]: Value };
