/**
 * Capitalize words in a sentence
 * @example
 * capitalize("this is a sentence") // This Is A Sentence
 */
export const capitalize = (sentence: string): string => {
  return sentence.replace(/\b\w/g, (word) => word.toUpperCase())
}
