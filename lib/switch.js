"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SWITCH;

var _error = require("./error");

var _eq = _interopRequireDefault(require("./eq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Search the odd args and return even value when odd arg equals targetValue.
function SWITCH(targetValue) {
  var _ref;

  var result;
  var argc = arguments.length <= 1 ? 0 : arguments.length - 1;
  var switchCount = Math.floor(argc / 2);
  var defaultClause = argc % 2 === 0 ? null : (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref < 1 || arguments.length <= _ref ? undefined : arguments[_ref]);

  if (switchCount) {
    for (var index = 0; index < switchCount; index++) {
      if ((0, _eq.default)(targetValue, index * 2 + 1 < 1 || arguments.length <= index * 2 + 1 ? undefined : arguments[index * 2 + 1])) {
        result = index * 2 + 1 + 1 < 1 || arguments.length <= index * 2 + 1 + 1 ? undefined : arguments[index * 2 + 1 + 1];
        return result;
      }
    }
  }

  return defaultClause || _error.ERRORTYPES.na;
}
