/**
 * Converts only strings to number
 * @category String Utils
 * @example
 * toNumber("10") // 10
 */
export const toNumber = (target: number | string): number => {
  return typeof target === 'string' ? parseInt(target, 10) : target
}
