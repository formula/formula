"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = query;

var _map = _interopRequireDefault(require("./map"));

var _reduce = _interopRequireDefault(require("./reduce"));

var _keys = _interopRequireDefault(require("./keys"));

var _filter = _interopRequireDefault(require("./filter"));

var _branch = _interopRequireDefault(require("./branch"));

var _and = _interopRequireDefault(require("./and"));

var _or = _interopRequireDefault(require("./or"));

var _not = _interopRequireDefault(require("./not"));

var _eq = _interopRequireDefault(require("./eq"));

var _ne = _interopRequireDefault(require("./ne"));

var _gt = _interopRequireDefault(require("./gt"));

var _gte = _interopRequireDefault(require("./gte"));

var _lt = _interopRequireDefault(require("./lt"));

var _lte = _interopRequireDefault(require("./lte"));

var _includes = _interopRequireDefault(require("./includes"));

var _search = _interopRequireDefault(require("./search"));

var _isarray = _interopRequireDefault(require("./isarray"));

var _isobject = _interopRequireDefault(require("./isobject"));

var _istruthy = _interopRequireDefault(require("./istruthy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Functions for each operator.
var filterTypes = {
  $noop: function $noop() {
    return function () {
      return false;
    };
  },
  $eq: function $eq(queryVal) {
    return function (row, field) {
      return (0, _eq.default)(row[field], queryVal);
    };
  },
  $ne: function $ne(queryVal) {
    return function (row, field) {
      return (0, _ne.default)(row[field], queryVal);
    };
  },
  $gt: function $gt(queryVal) {
    return function (row, field) {
      return (0, _gt.default)(row[field], queryVal);
    };
  },
  $gte: function $gte(queryVal) {
    return function (row, field) {
      return (0, _gte.default)(row[field], queryVal);
    };
  },
  $lt: function $lt(queryVal) {
    return function (row, field) {
      return (0, _lt.default)(row[field], queryVal);
    };
  },
  $lte: function $lte(queryVal) {
    return function (row, field) {
      return (0, _lte.default)(row[field], queryVal);
    };
  },
  $in: function $in(queryVal) {
    return function (row, field) {
      return (0, _isarray.default)(queryVal) && (0, _includes.default)(row[field], queryVal);
    };
  },
  $nin: function $nin(queryVal) {
    return function (row, field) {
      return (0, _isarray.default)(queryVal) && !(0, _includes.default)(row[field], queryVal);
    };
  },
  $text: function $text(queryVal) {
    return function (row, field) {
      return (0, _search.default)(queryVal, row[field]) > 0;
    };
  },
  $exists: function $exists(queryVal) {
    return function (row, field) {
      return (0, _istruthy.default)(queryVal) ? row.hasOwnProperty(field) : !row.hasOwnProperty(field);
    };
  },
  $and: function $and(queryVal) {
    return function (row, field) {
      return true;
    };
  },
  $or: function $or(queryVal) {
    return function (row, field) {
      return true;
    };
  }
}; // Run the filter against the data with the settings.

function query(data, query) {
  var comparison = function comparison(field, op, value) {
    return function (row) {
      return (filterTypes[op] || filterTypes["$noop"])(value)(row, field);
    };
  };

  var comparator = function comparator(list, key) {
    return function (row) {
      return (0, _branch.default)((0, _isobject.default)(list[key]), function () {
        return _and.default.apply(void 0, _toConsumableArray((0, _map.default)((0, _keys.default)(list[key]), function (d) {
          return comparison(key, d, list[key][d])(row);
        })));
      }, function () {
        return comparison(key, "$eq", list[key])(row);
      });
    };
  };

  var comparisonGroup = function comparisonGroup(row, list, key) {
    var op = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _and.default;

    if (!(0, _isarray.default)(list[key])) {
      throw new Error("$".concat(op.name, " expects array!"));
    }

    return op.apply(void 0, _toConsumableArray((0, _map.default)(list[key], function (d) {
      return op.apply(void 0, _toConsumableArray((0, _map.default)((0, _keys.default)(d), function (e) {
        return comparator(d, e)(row);
      })));
    })));
  };

  var composeQuery = function composeQuery(list) {
    return (0, _reduce.default)((0, _keys.default)(list), function (funcs, key) {
      return funcs.concat(function (row) {
        return (0, _branch.default)(key === "$and", function () {
          return comparisonGroup(row, list, key, _and.default);
        }, key === "$or", function () {
          return comparisonGroup(row, list, key, _or.default);
        }, function () {
          return comparator(list, key)(row);
        });
      });
    }, []);
  }; // Compose a list of functions to filter each field.


  var funcs = composeQuery(query); // Execute the filter on the data.

  return _filter.default.apply(void 0, [data].concat(_toConsumableArray((0, _map.default)(funcs, function (filter) {
    return (0, _map.default)(data, function (row) {
      return filter(row);
    });
  }))));
}
