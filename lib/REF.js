'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REF = REF;

var _ISBLANK = require('./ISBLANK');

var _ISFUNCTION = require('./ISFUNCTION');

var _ISNUMBER = require('./ISNUMBER');

var _INDEX2COL = require('./INDEX2COL');

var _INDEX2ROW = require('./INDEX2ROW');

var _UNIQUE = require('./UNIQUE');

var _COLUMNLETTER = require('./COLUMNLETTER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REF accepts top and bottom and returns a reference object. It encapsulates a cell or a range.
// Copyright 2015 Peter W Moresi

function REF(top, bottom) {

  // The index must be a number
  if (!(0, _ISNUMBER.ISNUMBER)(top) && !(0, _ISFUNCTION.ISFUNCTION)(top)) {
    return _ERROR2.default.value;
  }

  if ((0, _ISBLANK.ISBLANK)(bottom)) {
    bottom = top;
  }

  var getTop = function getTop() {
    return (0, _ISFUNCTION.ISFUNCTION)(top) ? top() : top;
  };
  var getBottom = function getBottom() {
    return (0, _ISFUNCTION.ISFUNCTION)(bottom) ? bottom() : bottom;
  };

  return {

    get isRef() {
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
      return (0, _INDEX2ROW.INDEX2ROW)(getTop()) + 1;
    },

    // Returns rowIndex (base 0)
    get rowIndex() {
      return (0, _INDEX2ROW.INDEX2ROW)(getTop());
    },

    // Returns column letter
    get column() {
      return (0, _COLUMNLETTER.COLUMNLETTER)((0, _INDEX2COL.INDEX2COL)(getTop()));
    },

    // Returns column index
    get columnIndex() {
      return (0, _INDEX2COL.INDEX2COL)(getTop());
    },

    // Returns row (rowIndex plus 1)
    get bottomRow() {
      return (0, _INDEX2ROW.INDEX2ROW)(getBottom()) + 1;
    },

    // Returns rowIndex (base 0)
    get bottomRowIndex() {
      return (0, _INDEX2ROW.INDEX2ROW)(getBottom());
    },

    // Returns column letter
    get bottomColumn() {
      return (0, _COLUMNLETTER.COLUMNLETTER)((0, _INDEX2COL.INDEX2COL)(getBottom()));
    },

    // Returns column index
    get bottomColumnIndex() {
      return (0, _INDEX2COL.INDEX2COL)(getBottom());
    },

    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    hit: function hit(index) {

      // Return `#NA!` when index is negative.
      if (index < 0) return _ERROR2.default.na;

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
      return (0, _UNIQUE.UNIQUE)(Array.apply(getTop(), Array(1 + (getBottom() - getTop()))).map(function (x, y) {
        return (0, _INDEX2ROW.INDEX2ROW)(y + getTop());
      }));
    }

  };
}