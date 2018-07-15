export default function filterArrayDuplications (array) {
  /**
   * Convert an array to a set,
   * the return a new array without the duplications
   */
  return [...new Set([ ...array.map(JSON.stringify) ])].map(JSON.parse)
}
