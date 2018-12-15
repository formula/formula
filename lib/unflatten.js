"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unflatten;

var _reduce = _interopRequireDefault(require("./reduce"));

var _error = require("./error");

var _isarray = _interopRequireDefault(require("./isarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// convert array into nested array.
// example: unflatten([1,2,3,4]) -> [[1,2], [3, 4]]
function unflatten(ref) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  // if the reference data is not an array then stop.
  if (!(0, _isarray.default)(ref)) {
    return _error.ERRORTYPES.value;
  } // use a reduction algorithm to convert data.


  return (0, _reduce.default)(ref, function (p, v, i) {
    // The first iteration and every nth iteration.
    if (i === 0 || i % len === 0) {
      p = p.concat([[]]);
    } // determine last index in collected value (e.g. p).


    var lastIndex = p.length - 1; // add the value to the last available spot.

    p[lastIndex] = p[lastIndex].concat(v); // return the new collected value.

    return p;
  }, []);
}
