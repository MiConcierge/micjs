"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reverseArray;
/**
 * Expose a immutable version of Array.prototype.reverse
 */
function reverseArray(array) {
  return array.slice().reverse();
}