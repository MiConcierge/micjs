"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterArrayDuplications;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Stringify will help to compare arrays of objects
 */
var _mapStringArray = exports._mapStringArray = function _mapStringArray(x) {
  return JSON.stringify(x);
};

/**
 * Should restore original array value
 */
var _mapParseArray = exports._mapParseArray = function _mapParseArray(x) {
  return JSON.parse(x);
};

function filterArrayDuplications(array) {
  /**
   * Convert an array to a set,
   * the return a new array without the duplications
   */
  return [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(array.map(_mapStringArray)))))).map(_mapParseArray);
}