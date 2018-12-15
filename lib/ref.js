"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ref;

var _isblank = _interopRequireDefault(require("./isblank"));

var _isfunction = _interopRequireDefault(require("./isfunction"));

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _index2col = _interopRequireDefault(require("./index2col"));

var _index2row = _interopRequireDefault(require("./index2row"));

var _unique = _interopRequireDefault(require("./unique"));

var _columnletter = _interopRequireDefault(require("./columnletter"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// REF accepts top and bottom and returns a reference object. It encapsulates a cell or a range.
function ref(top, bottom) {
  // The index must be a number
  if (!(0, _isnumber.default)(top) && !(0, _isfunction.default)(top)) {
    return _error.ERRORTYPES.value;
  }

  if ((0, _isblank.default)(bottom)) {
    bottom = top;
  }

  var getTop = function getTop() {
    return (0, _isfunction.default)(top) ? top() : top;
  };

  var getBottom = function getBottom() {
    return (0, _isfunction.default)(bottom) ? bottom() : bottom;
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
      return (0, _index2row.default)(getTop()) + 1;
    },

    // Returns rowIndex (base 0)
    get rowIndex() {
      return (0, _index2row.default)(getTop());
    },

    // Returns column letter
    get column() {
      return (0, _columnletter.default)((0, _index2col.default)(getTop()));
    },

    // Returns column index
    get columnIndex() {
      return (0, _index2col.default)(getTop());
    },

    // Returns row (rowIndex plus 1)
    get bottomRow() {
      return (0, _index2row.default)(getBottom()) + 1;
    },

    // Returns rowIndex (base 0)
    get bottomRowIndex() {
      return (0, _index2row.default)(getBottom());
    },

    // Returns column letter
    get bottomColumn() {
      return (0, _columnletter.default)((0, _index2col.default)(getBottom()));
    },

    // Returns column index
    get bottomColumnIndex() {
      return (0, _index2col.default)(getBottom());
    },

    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    hit: function hit(index) {
      // Return `#NA!` when index is negative.
      if (index < 0) return _error.ERRORTYPES.na; // Check if value is inside range from top to bottom, inclusive.

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
      return (0, _unique.default)(Array.apply(getTop(), Array(1 + (getBottom() - getTop()))).map(function (x, y) {
        return (0, _index2row.default)(y + getTop());
      }));
    }

  };
}
