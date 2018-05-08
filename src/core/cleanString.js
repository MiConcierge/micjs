export default function cleanString (string = '') {
  return string
    /**
     * Remove accents/diacritics
     */
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    /**
     * Remove special caracters
     */
    .replace(/[^a-zA-Z0-9]/g, '')
}
