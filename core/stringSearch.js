'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchString;

var _cleanString = require('./cleanString');

var _cleanString2 = _interopRequireDefault(_cleanString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchString() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return (0, _cleanString2.default)(string).trim().toLowerCase().search((0, _cleanString2.default)(filter).trim().toLowerCase()) >= 0;
}