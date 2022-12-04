import { asyncFilter } from './asyncFilter'

test('should only return elements that meet the condition specified by the promise', async () => {
  const isDivisibleBy2 = async (num: number) => Promise.resolve(num % 2 === 0)

  const filtered = await asyncFilter([2, 4, 1, 8, 3], isDivisibleBy2)

  expect(filtered).toStrictEqual([2, 4, 8])
})
