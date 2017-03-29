'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ref;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _index2col = require('./index2col');

var _index2col2 = _interopRequireDefault(_index2col);

var _index2row = require('./index2row');

var _index2row2 = _interopRequireDefault(_index2row);

var _unique = require('./unique');

var _unique2 = _interopRequireDefault(_unique);

var _columnletter = require('./columnletter');

var _columnletter2 = _interopRequireDefault(_columnletter);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REF accepts top and bottom and returns a reference object. It encapsulates a cell or a range.
// Copyright 2015 JC Fisher

function ref(top, bottom) {

  // The index must be a number
  if (!(0, _isnumber2.default)(top) && !(0, _isfunction2.default)(top)) {
    return _error2.default.value;
  }

  if ((0, _isblank2.default)(bottom)) {
    bottom = top;
  }

  var getTop = function getTop() {
    return (0, _isfunction2.default)(top) ? top() : top;
  };
  var getBottom = function getBottom() {
    return (0, _isfunction2.default)(bottom) ? bottom() : bottom;
  };

  return {

    get _isref() {
      return true;
    },

    get top() {
      return getTop();
    },

    get bottom() {
      return getBottom();
    },

    // Returns row (rowIndex plus 1)
    get row() {
      return (0, _index2row2.default)(getTop()) + 1;
    },

    // Returns rowIndex (base 0)
    get rowIndex() {
      return (0, _index2row2.default)(getTop());
    },

    // Returns column letter
    get column() {
      return (0, _columnletter2.default)((0, _index2col2.default)(getTop()));
    },

    // Returns column index
    get columnIndex() {
      return (0, _index2col2.default)(getTop());
    },

    // Returns row (rowIndex plus 1)
    get bottomRow() {
      return (0, _index2row2.default)(getBottom()) + 1;
    },

    // Returns rowIndex (base 0)
    get bottomRowIndex() {
      return (0, _index2row2.default)(getBottom());
    },

    // Returns column letter
    get bottomColumn() {
      return (0, _columnletter2.default)((0, _index2col2.default)(getBottom()));
    },

    // Returns column index
    get bottomColumnIndex() {
      return (0, _index2col2.default)(getBottom());
    },

    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    hit: function hit(index) {

      // Return `#NA!` when index is negative.
      if (index < 0) return _error2.default.na;

      // Check if value is inside range from top to bottom, inclusive.
      return index >= getTop() && index <= getBottom();
    },


    get size() {
      return 1 + (getBottom() - getTop());
    },

    // Return array with every cell index
    get cells() {
      return Array.apply(getTop(), Array(1 + (getBottom() - getTop()))).map(function (x, y) {
        return y + getTop();
      });
    },

    // Return array with every row
    get rows() {
      return (0, _unique2.default)(Array.apply(getTop(), Array(1 + (getBottom() - getTop()))).map(function (x, y) {
        return (0, _index2row2.default)(y + getTop());
      }));
    }

  };
}
module.exports = exports['default'];