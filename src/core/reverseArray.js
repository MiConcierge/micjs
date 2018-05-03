/**
 * Expose a immutable version of Array.prototype.reverse
 */
export default function reverseArray (array) {
  return array.slice().reverse()
}
