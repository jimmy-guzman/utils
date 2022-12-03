import { toEm } from './toEm'

describe('em', () => {
  it('should convert pixels to em relative to default context', () => {
    const em = toEm('20px')

    expect(em).toBe('1.11em')
  })
  it('should convert pixels to em relative to target context', () => {
    const em = toEm('20px 5px', '5px')

    expect(em).toBe('4.00em 1.00em')
  })
})
