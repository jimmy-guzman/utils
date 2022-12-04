type RequiredBy<T, K extends keyof T> = Omit<T, K> & Pick<Required<T>, K>

/**
 * Asserts wether an object has a property and narrows down the signature
 * @category Object Utils
 * @example
 * const fruit: Fruit = { color: 'yellow' }
 *
 * if (hasProperty(fruit, 'color')) {
 *  console.log(fruit.color)
 * }
 */
export const hasProperty = <T, K extends keyof T>(
  object: T,
  key: K
): object is RequiredBy<T, K> & T => {
  return Object.prototype.hasOwnProperty.call(object, key)
}
