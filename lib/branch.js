"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = branch;

var _isfunction = _interopRequireDefault(require("./isfunction"));

var _istruthy = _interopRequireDefault(require("./istruthy"));

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// This function provides if-elseif-else.
// branch( test, result_if_true, [test2, result_if_true, default_result] ).
function branch() {
  for (var _len = arguments.length, cases = new Array(_len), _key = 0; _key < _len; _key++) {
    cases[_key] = arguments[_key];
  }

  var resolved = false; // Reduce all cases into a value.

  return (0, _reduce.default)(cases, function (acc, item, index) {
    var val; // Return previously resolved result.

    if (resolved === true) return acc; // Handle default case.

    if (index === cases.length - 1) {
      // There is no last item.
      if (index % 2 === 1) return; // return the last item.

      return (0, _isfunction.default)(item) ? item() : item;
    } // Check if condition is true.


    if (index % 2 === 0 && ((0, _isfunction.default)(item) && (0, _istruthy.default)(item()) || !(0, _isfunction.default)(item) && (0, _istruthy.default)(item))) {
      resolved = true;
      val = cases[index + 1];
      return (0, _isfunction.default)(val) ? val() : val;
    }

    return acc;
  }, undefined);
}
