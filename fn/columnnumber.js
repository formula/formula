'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = columnnumber;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert letter to number (e.g A -> 0)
// Copyright 2015 Peter W Moresi

function columnnumber(column) {

  if (!(0, _istext2.default)(column)) {
    return _error2.default.value;
  }

  // see toColumn for rant on why this is sensible even though it is illogical.
  var s = 0,
      secondPass;

  if (column.length > 0) {

    s = column.charCodeAt(0) - 'A'.charCodeAt(0);

    for (var i = 1; i < column.length; i++) {
      // compensate for spreadsheet column naming
      s += 1;
      s *= 26;
      s += column.charCodeAt(i) - 'A'.charCodeAt(0);
      secondPass = true;
    }

    return s;
  }

  return _error2.default.value;
}
module.exports = exports['default'];