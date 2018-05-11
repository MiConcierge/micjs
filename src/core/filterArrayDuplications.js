/**
 * Stringify will help to compare arrays of objects
 */
export const _mapStringArray = x => JSON.stringify(x)

/**
 * Should restore original array value
 */
export const _mapParseArray = x => JSON.parse(x)

export default function filterArrayDuplications (array) {
  /**
   * Convert an array to a set,
   * the return a new array without the duplications
   */
  return [...new Set([ ...array.map(_mapStringArray) ])].map(_mapParseArray)
}
