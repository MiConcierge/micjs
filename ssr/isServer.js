'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isServer;
function isServer() {
  return typeof window === 'undefined';
}