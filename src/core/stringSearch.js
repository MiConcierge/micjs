import cleanString from './cleanString'

export default function searchString (string = '', filter = '') {
  return cleanString(string)
    .trim()
    .toLowerCase()
    .search(
      cleanString(filter)
        .trim()
        .toLowerCase()
    ) >= 0
}
