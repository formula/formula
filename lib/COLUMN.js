'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLUMN = COLUMN;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Convert index to column (e.g A -> 1) */
function toColumnNumber(column) {

  // convert the column name into the column index

  // see toColumn for rant on why this is sensible even though it is illogical.
  var s = 0,
      secondPass;

  if (column != null && column.length > 0) {

    s = column.charCodeAt(0) - 'A'.charCodeAt(0);

    // FIXME: Make me functional
    for (var i = 1; i < column.length; i++) {
      s += 1; // compensate for the weirdos that invented spreadsheet column naming
      s *= 26;
      s += column.charCodeAt(i) - 'A'.charCodeAt(0);
      secondPass = true;
    }
  } else {
    return _ERROR2.default.val;
  }

  return s;
}

function COLUMN(cell_reference) {
  if (ISREF(cell_reference)) {
    return toColumnNumber(cell_reference.column);
  }
}