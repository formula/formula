'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// index returns the value in a row and column from a 2d array
function index(reference, row_num) {
  var column_num = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  var row;

  if (!(0, _isarray2.default)(reference) || (0, _isblank2.default)(row_num)) {
    return _error2.default.value;
  }

  if (reference.length < row_num) {
    return _error2.default.ref;
  }

  row = reference[row_num - 1];

  if (!(0, _isarray2.default)(row)) {
    return _error2.default.value;
  }

  if (row.length < column_num) {
    return _error2.default.ref;
  }

  return row[column_num - 1];
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];