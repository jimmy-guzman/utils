/**
 * Returns the elements of an array that meet the condition specified in a promise
 * @category Array Utils
 * @example
 * const isDivisibleBy2 = async (num: number) => Promise.resolve(num % 2 === 0)
 * const filtered = await asyncFilter([2, 4, 1, 8, 3], isDivisibleBy2) // [2, 4, 8]
 */
export const asyncFilter = async <T>(
  arr: T[],
  predicate: (value: T) => Promise<boolean>
): Promise<T[]> => {
  const results = await Promise.all(arr.map(predicate))

  return arr.filter((_value, index) => results[index])
}
