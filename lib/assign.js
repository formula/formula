"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assign;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// assign from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, varArgs) {
  // .length of function is 2
  "use strict";

  if (target == null) {
    return _error.ERRORTYPES.nil;
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) {
      // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }

  return to;
} // Ponyfill or Object.assign with empty initial object.


function assign(initial) {
  var func = Object.assign || assign;

  for (var _len = arguments.length, list = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    list[_key - 1] = arguments[_key];
  }

  return func.apply(void 0, [{}, initial].concat(list));
}
