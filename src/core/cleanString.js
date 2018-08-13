export default function cleanString (string) {
  if (!string) throw new Error('No string')
  return String(string)
    /**
     * Remove special caracters
     */
    .replace(/[^a-zA-Z0-9]/g, '')
    /**
     * Remove accents/diacritics
     */
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
