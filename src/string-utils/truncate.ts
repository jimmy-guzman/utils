/**
 * Truncates text based on the given length and adds an ellipsis
 * @category String Utils
 * @example
 * truncate("this is very large text") // this ...
 */
export const truncate = (text: string, length = 5): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text
}
