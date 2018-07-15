'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = omitNull;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function omitNull(object) {
  if (Object.prototype.toString.call(object) !== '[object Object]' && Object.prototype.toString.call(object) !== '[object Array]') {
    return object;
  }

  return Object.keys(object).reduce(function (res, f) {
    if (!object[f]) return res;

    switch (Object.prototype.toString.call(object[f])) {
      case '[object Object]':
        return _extends({}, res, _defineProperty({}, f, omitNull(object[f])));
      case '[object Array]':
        return _extends({}, res, _defineProperty({}, f, object[f].map(omitNull)));
      default:
        return _extends({}, res, _defineProperty({}, f, object[f]));
    }
  }, {});
}