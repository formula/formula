"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = entries;

var _keys = _interopRequireDefault(require("./keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert an object in an array of entries.
// Example: { foo: 'bar' } -> [['foo', 'bar']]
function entries(obj) {
  // Run native function if available.
  if (Object.entries) return Object.entries(obj); // Execute polyfill.
  // credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

  var ownProps = (0, _keys.default)(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array

  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
}
