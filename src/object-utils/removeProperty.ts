type KnownKeys<T> = keyof {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: never
}

/**
 * Safely removes a property from an object and infers new signature
 * @category Object Utils
 * @example
 * const fruit: Fruit = { color: 'yellow', kind: 'banana' }
 * const withoutKind = removeProperty(fruit, 'color') // { kind: 'banana' }
 */
export const removeProperty = <
  T extends { [K in keyof T]: unknown },
  U extends KnownKeys<T>
>(
  object: T,
  key: U
): Omit<T, U> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [key]: deleted, ...trimmed } = object

  return trimmed
}
