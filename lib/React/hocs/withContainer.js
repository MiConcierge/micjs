'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withContainer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withContainer(Component, Container) {
  function WithContainer(props) {
    return _react2.default.createElement(
      Container,
      props,
      _react2.default.createElement(Component, props)
    );
  }

  var wrappedComponentName = Component.displayName || Component.name || 'Component';

  WithContainer.displayName = 'withContainer(' + wrappedComponentName + ')';
  return WithContainer;
}