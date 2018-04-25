"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;
/* eslint-disable no-useless-escape */
var EMAIL_REGEX = /^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
/* eslint-enable no-useless-escape */

function isEmail(email) {
  return EMAIL_REGEX.test(email);
}