'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = branch;

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

var _istruthy = require('./istruthy');

var _istruthy2 = _interopRequireDefault(_istruthy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// branch( test, result_if_true, [test2, result_if_true,] false_result )
// Copyright 2015 JC Fisher

function branch() {
  for (var _len = arguments.length, cases = Array(_len), _key = 0; _key < _len; _key++) {
    cases[_key] = arguments[_key];
  }

  var resolved = false;

  // Reduce all cases into a value.
  return cases.reduce(function (acc, item, index) {
    var val = void 0;

    // Return previously resolved result
    if (resolved === true) return acc;

    // Handle last item
    if (index === cases.length - 1) {
      // There is no last item.
      if (index % 2 === 1) return;

      // return the last item
      return (0, _isfunction2.default)(item) ? item() : item;
    }

    // Check if condition is true
    if (index % 2 === 0 && ((0, _isfunction2.default)(item) && (0, _istruthy2.default)(item()) || !(0, _isfunction2.default)(item) && (0, _istruthy2.default)(item))) {
      resolved = true;
      val = cases[index + 1];
      return (0, _isfunction2.default)(val) ? val() : val;
    }

    return acc;
  }, undefined);
}
module.exports = exports['default'];