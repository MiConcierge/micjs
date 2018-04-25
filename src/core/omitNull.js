export default function omitNull (object) {
  if (Object.prototype.toString.call(object) !== '[object Object]' &&
      Object.prototype.toString.call(object) !== '[object Array]') {
    return object
  }

  return Object.keys(object).reduce((res, f) => {
    if (!object[f]) return res

    switch (Object.prototype.toString.call(object[f])) {
      case '[object Object]':
        return {
          ...res,
          [f]: omitNull(object[f])
        }
      case '[object Array]':
        return {
          ...res,
          [f]: object[f].map(omitNull)
        }
      default:
        return {
          ...res,
          [f]: object[f]
        }
    }
  }, {})
}
