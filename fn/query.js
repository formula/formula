'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = query;

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _branch = require('./branch');

var _branch2 = _interopRequireDefault(_branch);

var _and = require('./and');

var _and2 = _interopRequireDefault(_and);

var _or = require('./or');

var _or2 = _interopRequireDefault(_or);

var _not = require('./not');

var _not2 = _interopRequireDefault(_not);

var _eq = require('./eq');

var _eq2 = _interopRequireDefault(_eq);

var _ne = require('./ne');

var _ne2 = _interopRequireDefault(_ne);

var _gt = require('./gt');

var _gt2 = _interopRequireDefault(_gt);

var _gte = require('./gte');

var _gte2 = _interopRequireDefault(_gte);

var _lt = require('./lt');

var _lt2 = _interopRequireDefault(_lt);

var _lte = require('./lte');

var _lte2 = _interopRequireDefault(_lte);

var _match = require('./match');

var _match2 = _interopRequireDefault(_match);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _isobject = require('./isobject');

var _isobject2 = _interopRequireDefault(_isobject);

var _istruthy = require('./istruthy');

var _istruthy2 = _interopRequireDefault(_istruthy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright 2015 JC Fisher
//
// A minimal query engine with a mongodb like syntax.
//
// query([{ foo: 1}, {foo: 2}], { foo: 1 })
// query([{ foo: 1}, {foo: 2}], { foo: { $ne: 1 } })
//
// Supported operators:
//  - $and
//  - $or
//  - $eq
//  - $ne
//  - $gt
//  - $gte
//  - $lt
//  - $lte
//  - $exists
//  - $nin
//  - $in
//  - $text

// Functions for each operator.
var filterTypes = {

  $noop: function $noop() {
    return function () {
      return false;
    };
  },
  $eq: function $eq(queryVal) {
    return function (row, field) {
      return (0, _eq2.default)(row[field], queryVal);
    };
  },
  $ne: function $ne(queryVal) {
    return function (row, field) {
      return (0, _ne2.default)(row[field], queryVal);
    };
  },
  $gt: function $gt(queryVal) {
    return function (row, field) {
      return (0, _gt2.default)(row[field], queryVal);
    };
  },
  $gte: function $gte(queryVal) {
    return function (row, field) {
      return (0, _gte2.default)(row[field], queryVal);
    };
  },
  $lt: function $lt(queryVal) {
    return function (row, field) {
      return (0, _lt2.default)(row[field], queryVal);
    };
  },
  $lte: function $lte(queryVal) {
    return function (row, field) {
      return (0, _lte2.default)(row[field], queryVal);
    };
  },
  $in: function $in(queryVal) {
    return function (row, field) {
      return (0, _match2.default)(row[field], queryVal, 1) > 0;
    };
  },
  $nin: function $nin(queryVal) {
    return function (row, field) {
      return (0, _not2.default)((0, _match2.default)(row[field], queryVal, 1) > 0);
    };
  },
  $text: function $text(queryVal) {
    return function (row, field) {
      return (0, _search2.default)(queryVal, row[field]) > 0;
    };
  },
  $exists: function $exists(queryVal) {
    return function (row, field) {
      return (0, _istruthy2.default)(queryVal) ? row.hasOwnProperty(field) : !row.hasOwnProperty(field);
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

};

// Run the filter against the data with the settings.
function query(data, query) {

  var comparison = function comparison(field, op, value) {
    return function (row) {
      return (filterTypes[op] || filterTypes['$noop'])(value)(row, field);
    };
  };

  var comparator = function comparator(list, key) {
    return function (row) {
      return (0, _branch2.default)((0, _isobject2.default)(list[key]), function () {
        return _and2.default.apply(undefined, _toConsumableArray(Object.keys(list[key]).map(function (d) {
          return comparison(key, d, list[key][d])(row);
        })));
      }, function () {
        return comparison(key, '$eq', list[key])(row);
      });
    };
  };

  var comparisonGroup = function comparisonGroup(row, list, key) {
    var op = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _and2.default;


    if (!(0, _isarray2.default)(list[key])) {
      throw new Error('$' + op.name + ' expects array!');
    }

    return op.apply(undefined, _toConsumableArray(list[key].map(function (d) {
      return op.apply(undefined, _toConsumableArray(Object.keys(d).map(function (e) {
        return comparator(d, e)(row);
      })));
    })));
  };

  var composeQuery = function composeQuery(list) {
    return Object.keys(list).reduce(function (funcs, key) {
      return funcs.concat(function (row) {
        return (0, _branch2.default)(key === '$and', function () {
          return comparisonGroup(row, list, key, _and2.default);
        }, key === '$or', function () {
          return comparisonGroup(row, list, key, _or2.default);
        }, function () {
          return comparator(list, key)(row);
        });
      });
    }, []);
  };

  // Compose a list of functions to filter each field.
  var funcs = composeQuery(query);

  // Execute the filter on the data.
  return _filter2.default.apply(undefined, [data].concat(_toConsumableArray(funcs.map(function (filter) {
    return data.map(function (row) {
      return filter(row);
    });
  }))));
}
module.exports = exports['default'];