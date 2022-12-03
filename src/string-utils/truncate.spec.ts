import { truncate } from './truncate'

describe('truncate', () => {
  it('should truncate text with the default length & adds an ellipsis', () => {
    const text = truncate('this is very long text')

    expect(text).toBe('this ...')
  })
  it('should truncate text based on the given length & adds an ellipsis', () => {
    const text = truncate('this is very long text', 3)

    expect(text).toBe('thi...')
  })

  it('should NOT truncate text when length is less than given length', () => {
    const text = truncate('this', 5)

    expect(text).toBe('this')
  })
})
