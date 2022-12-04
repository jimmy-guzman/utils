import { removeProperty } from './removeProperty'

interface Fruit {
  color?: string
  kind?: string
}

test('should remove property from object', () => {
  const fruit: Fruit = { color: 'yellow', kind: 'banana' }
  const object = removeProperty(fruit, 'color')

  expect(object).toStrictEqual({ kind: 'banana' })
})
