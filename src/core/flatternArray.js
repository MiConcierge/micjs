function flatten (array, result) {
  let length = array.length
  let ii = 0

  while (length--) {
    const current = array[ii++]
    if (Array.isArray(current)) {
      flatten(current, result)
    } else {
      result.push(current)
    }
  }
}

export default function flattenArray (array) {
  const result = []
  flatten(array, result)
  return result
}
