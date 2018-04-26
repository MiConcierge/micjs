"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = weekOfMonth;
function weekOfMonth(date) {
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return Math.ceil((date.getDate() + firstDay) / 7);
}