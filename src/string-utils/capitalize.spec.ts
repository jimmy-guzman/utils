import { capitalize } from './capitalize'

test('should capitalize words in a sentence', () => {
  const sentence = capitalize('this is a sentence')

  expect(sentence).toBe('This Is A Sentence')
})
