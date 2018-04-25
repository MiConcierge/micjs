"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenArray;
function flatten(array, result) {
  var length = array.length;
  var ii = 0;

  while (length--) {
    var current = array[ii++];
    if (Array.isArray(current)) {
      flatten(current, result);
    } else {
      result.push(current);
    }
  }
}

function flattenArray(array) {
  var result = [];
  flatten(array, result);
  return result;
}