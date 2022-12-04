import { hasProperty } from './hasProperty'

interface Fruit {
  color?: string
  kind?: string
}

describe('hasProperty', () => {
  it('should return true when property exists', () => {
    const fruit: Fruit = { color: 'yellow' }
    const shouldPropertyExist = hasProperty(fruit, 'color')

    expect(shouldPropertyExist).toBe(true)
  })
  it('should return false when property does NOT exist', () => {
    const fruit: Fruit = { color: 'yellow' }
    const shouldPropertyExist = hasProperty(fruit, 'kind')

    expect(shouldPropertyExist).toBe(false)
  })
})
