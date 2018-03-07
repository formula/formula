"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = group;

var _reduce = require("./reduce");

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Group a list of objects by one or more fields.
function group(list) {
  for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fields[_key - 1] = arguments[_key];
  }

  // Reduce the list into an object.
  return (0, _reduce2.default)(list, function (acc, item) {
    var parent = undefined,
        key = void 0;

    // Walk through each field and update the accumulator.
    fields.forEach(function (currentField, index) {
      // The key is the value of the current item.
      key = item[currentField];

      // Handle the last field used to group.
      if (index === fields.length - 1) {
        if (!parent) {
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(item);
        } else {
          if (!parent[key]) {
            parent[key] = [];
          }
          parent[key].push(item);
        }

        // Handle the first k fields before the last field
      } else {
        if (!parent) {
          acc[key] = acc[key] || {};
          parent = acc[key];
        } else {
          parent[key] = parent[key] || {};
          parent = parent[key];
        }
      }
    });

    return acc;
  }, {});
}
module.exports = exports["default"];