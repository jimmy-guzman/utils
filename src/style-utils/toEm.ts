import { toNumber } from '../string-utils/toNumber'

/**
 * - Calculates 'em' values from 'px' values
 * - Supports multiple 'px' values
 * @category Style Utils
 * @example
 * toEm('0px 10px 20px -5px', '18px') // 0em 0.56em 1.11em -0.28em
 */
export const toEm = (target: string, context = '18px'): string => {
  return target
    .split(' ')
    .map((value) => `${(toNumber(value) / toNumber(context)).toFixed(2)}em`)
    .join(' ')
}
