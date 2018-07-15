"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRFC;
var RFC_REGEX = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/;

// Registro Federal de Contribuyentes (México)
function isRFC(rfc) {
  return RFC_REGEX.test(rfc);
}