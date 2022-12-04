import { toNumber } from './toNumber'

describe('toNumber', () => {
  it('should convert string to a number', () => {
    const number = toNumber('10')

    expect(number).toBe(10)
  })

  it('should NOT convert number to a number', () => {
    const number = toNumber(10)

    expect(number).toBe(10)
  })
})
