"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeM;
function composeM(method) {
  return function () {
    for (var _len = arguments.length, ms = Array(_len), _key = 0; _key < _len; _key++) {
      ms[_key] = arguments[_key];
    }

    return ms.reduce(function (f, g) {
      return function (x) {
        return g(x)[method](f);
      };
    });
  };
}