'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLUMNNUMBER = COLUMNNUMBER;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISTEXT = require('./ISTEXT');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert letter to number (e.g A -> 0)
// Copyright 2015 Peter W Moresi

function COLUMNNUMBER(column) {

  if (!(0, _ISTEXT.ISTEXT)(column)) {
    return _ERROR2.default.value;
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

  return _ERROR2.default.value;
}