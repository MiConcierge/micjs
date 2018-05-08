'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanString;
function cleanString() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return string
  /**
   * Remove accents/diacritics
   */
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  /**
   * Remove special caracters
   */
  .replace(/[^a-zA-Z0-9]/g, '');
}