(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var FF = require('./lib/index')
var COMPILE = require('./lib/COMPILE').COMPILE

if (window) {

  // This is a sham that makes Object.freeze work (insecurely) in ES3 environments
  // ES5 15.2.3.9
  // http://es5.github.com/#x15.2.3.9
  if (!Object.freeze) {
      Object.freeze = function freeze(object) {
          if (Object(object) !== object) {
              throw new TypeError('Object.freeze can only be called on Objects.');
          }
          // this is misleading and breaks feature-detection, but
          // allows "securable" code to "gracefully" degrade to working
          // but insecure code.
          return object;
      };
  }

  FF.COMPILE = COMPILE

  window.FunctionFoundry = Object.freeze(FF);
}

},{"./lib/COMPILE":16,"./lib/index":105}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ABS = ABS;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ABS computes absolute value of a number
// Copyright 2015 Peter W Moresi

function ABS(value) {

  // Return `#VALUE!` if not number
  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  // Use built-in Math.abs
  return Math.abs(value);
}
},{"./ERROR":29,"./ISNUMBER":57}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACOS = ACOS;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ACOS computes the inverse cosine of a number
// Copyright 2015 Peter W Moresi

function ACOS(value) {

  // Return `#VALUE!` if not number
  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  // Use built-in Math.acos
  return Math.acos(value);
}
},{"./ERROR":29,"./ISNUMBER":57}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD = ADD;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ADD calculates the sum of two numbers.
// Copyright 2015 Peter W Moresi

function ADD() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return _ERROR2.default.na;
  }

  // decompose values into a and b.
  var a = values[0];
  var b = values[1];

  // Return `#VALUE!` if either a or b is not a number.

  if (!(0, _ISNUMBER.ISNUMBER)(a) || !(0, _ISNUMBER.ISNUMBER)(b)) {
    return _ERROR2.default.value;
  }

  // Return a + b.
  return a + b;
}
},{"./ERROR":29,"./ISNUMBER":57}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AND = AND;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// AND reduces list of truthy values into true or false value
function AND() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  // Reduce criteria into boolean value.
  return criteria.reduce(function (acc, item) {

    // return `#VALUE!` if not true, false, 1 or 0
    if (item !== true && item !== false && item !== 1 && item !== 0) {
      return _ERROR2.default.value;
    }

    // Once `#VALUE!` is found then always return `#VALUE!`
    if (acc === _ERROR2.default.value) return _ERROR2.default.value;

    // Once `false` is found always return `false`
    if (acc === false) return false;

    // Return the current value whether true or false
    return item === true || item === 1;
  });
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVERAGE = AVERAGE;

var _SUM = require('./SUM');

var _ISERROR = require('./ISERROR');

// AVERAGE computes sum of items divided by number of items
// Copyright 2015 Peter W Moresi

function AVERAGE() {
  for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  // compute sum all of the items.
  var sum = _SUM.SUM.apply(undefined, items);

  // return sum when computed error.
  if ((0, _ISERROR.ISERROR)(sum)) {
    return sum;
  }

  // return sum divided by item count
  return sum / items.length;
}
},{"./ISERROR":53,"./SUM":95}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BIN2DEC = BIN2DEC;

var _ERROR = require("./ERROR");

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// BIN2DEC converts binary string into decimal value
function BIN2DEC(value) {
    var valueAsString;

    if (typeof value === "string") {
        valueAsString = value;
    } else if (typeof value !== "undefined") {
        valueAsString = value.toString();
    } else {
        return _ERROR2.default.NA;
    }

    if (valueAsString.length > 10) return _ERROR2.default.NUM;

    // we subtract 512 when the leading number is 0.
    if (valueAsString.length === 10 && valueAsString[0] === '1') {
        return parseInt(valueAsString.substring(1), 2) - 512;
    }

    // Convert binary number to decimal with built-in facility
    return parseInt(valueAsString, 2);
} // Copyright 2015 Peter W Moresi

;
},{"./ERROR":29}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CELLINDEX = CELLINDEX;

var _CONSTANTS = require('./CONSTANTS');

// CELLINDEX computes the index for row and column in a 2 dimensional array.
function CELLINDEX(row, col) {
  // Multiple row by maximum columns plus the col.
  return Math.floor(row * _CONSTANTS.MaxCols + col);
} // Copyright 2015 Peter W Moresi
},{"./CONSTANTS":19}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGED = CHANGED;

var _UNIQUE = require('./UNIQUE');

// CHANGED computes the list of keys that are different between two objects.
function CHANGED(a, b) {

  // Compute the keys in object a and b.
  var keysA = Object.keys(a),
      keysB = Object.keys(b);

  // Find the unique set of properties comparing a to b and b to a.
  return (0, _UNIQUE.UNIQUE)(keysA.filter(function (n) {
    return a[n] !== b[n];
  }).concat(keysB.filter(function (n) {
    return a[n] !== b[n];
  })));
} // Copyright 2015 Peter W Moresi
},{"./UNIQUE":101}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHOOSE = CHOOSE;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CHOOSE accepts an index and a list of items. It returns the item that corresponds to the index.
function CHOOSE(index) {
  for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }

  // Return `#NA!` if index or items are not provided.
  if (!index || items.length === 0) {
    return _ERROR2.default.na;
  }

  // Return `#VALUE!` if index is less than 1 or greater than 254.
  if (index < 1 || index > 254) {
    return _ERROR2.default.value;
  }

  // Return `#VALUE!` if number of items is less than index.
  if (items.length < index) {
    return _ERROR2.default.value;
  }

  // Return the item.
  return items[index - 1];
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLEAN = CLEAN;

var _ISBLANK = require('./ISBLANK');

var _SELECT = require('./SELECT');

// CLEAN accepts an object and remove properties that are blank.
// Copyright 2015 Peter W Moresi

function CLEAN(obj) {
  // Compute keys where value is non blank.
  var keys = Object.keys(obj).filter(function (n) {
    return !(0, _ISBLANK.ISBLANK)(obj[n]);
  });

  // Compute object with only non-blank keys.
  return (0, _SELECT.SELECT)(keys, obj);
}
},{"./ISBLANK":48,"./SELECT":88}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CODE = CODE;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CODE accepts text and optionally index (default 1) returning the character code.
function CODE() {
  var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var index = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (index < 1) return _ERROR2.default.na;
  if (text.length < index) return _ERROR2.default.value;
  return text.charCodeAt(index - 1);
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLUMN = COLUMN;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISTEXT = require('./ISTEXT');

var _ISREF = require('./ISREF');

var _COLUMNNUMBER = require('./COLUMNNUMBER');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COLUMN return the column number that corresponds to the reference.
// Copyright 2015 Peter W Moresi

function COLUMN(value) {

  // Return `#VALUE!` when the value is not a reference.
  if (!(0, _ISREF.ISREF)(value)) {
    return _ERROR2.default.value;
  }

  // Run the COLUMNNUMBER and convert to base 1.
  return (0, _COLUMNNUMBER.COLUMNNUMBER)(value.column) + 1;
}
},{"./COLUMNNUMBER":15,"./ERROR":29,"./ISREF":59,"./ISTEXT":60}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLUMNLETTER = COLUMNLETTER;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISNUMBER = require('./ISNUMBER');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert index to letter (e.g 0 -> A)
// Copyright 2015 Peter W Moresi

function COLUMNLETTER(index) {

  if (!(0, _ISNUMBER.ISNUMBER)(index)) {
    return _ERROR2.default.value;
  }

  // The column is determined by applying a modified Hexavigesimal algorithm.
  // Normally BA follows Z but spreadsheets count wrong and nobody cares.

  // Instead they do it in a way that makes sense to most people but
  // is mathmatically incorrect. So AA follows Z which in the base 10
  // system is like saying 01 follows 9.

  // In the least significant digit
  // A..Z is 0..25

  // For the second to nth significant digit
  // A..Z is 1..26

  var converted = "",
      secondPass = false,
      remainder,
      value = Math.abs(index);

  do {
    remainder = value % 26;

    if (secondPass) {
      remainder--;
    }

    converted = String.fromCharCode(remainder + 'A'.charCodeAt(0)) + converted;
    value = Math.floor((value - remainder) / 26);

    secondPass = true;
  } while (value > 0);

  return converted;
}
},{"./ERROR":29,"./ISNUMBER":57}],15:[function(require,module,exports){
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
},{"./ERROR":29,"./ISTEXT":60}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMPILE = COMPILE;

var _PARSER = require('../lib/PARSER');

var _index = require('./index');

var Box = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Copyright 2015 Peter W Moresi

function wrapString(s) {
  if (s[0] == "'" && s[s.length - 1] === "'") {
    return s;
  }
  return '\'' + s + '\'';
}

function printItems(items) {
  return items.map(function (n) {
    return compiler(n);
  }).join(', ');
}

var compiledNumber = 0;

function COMPILE(exp) {
  var ast = exp,
      jsCode,
      functionCode,
      f,
      suppress = false,
      precedents = [],
      requires = [],
      namespace = 'this.';

  // convert to AST when string provided
  if (typeof ast === 'string') {
    ast = _PARSER.parser.parse(exp);
  }

  // define a compiler function to handle recurse the AST.
  function compiler(node) {

    var lhs = undefined,
        rhs = undefined;

    // The node is expected to be either an operator, function or a value.
    switch (node.type) {
      case 'operator':
        switch (node.subtype) {
          case 'prefix-plus':
            return '+' + compiler(node.operands[0]);
          case 'prefix-minus':
            return '-' + compiler(node.operands[0]);
          case 'infix-add':
            requires.push('add');
            return namespace + "ADD(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-subtract':
            requires.push('subtract');
            return namespace + "SUBTRACT(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-multiply':
            requires.push('multiply');
            return namespace + "MULTIPLY(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-divide':
            requires.push('divide');
            return namespace + "DIVIDE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-power':
            requires.push('power');
            return namespace + 'POWER(' + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ')';
          case 'infix-concat':
            lhs = compiler(node.operands[0]);
            rhs = compiler(node.operands[1]);
            requires.push('concatenate');
            return namespace + "CONCATENATE(" + wrapString(lhs) + ', ' + wrapString(rhs) + ")";
          case 'infix-eq':
            requires.push('eq');
            return namespace + "EQ(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-ne':
            requires.push('ne');
            return namespace + "NE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-gt':
            requires.push('gt');
            return namespace + "GT(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-gte':
            requires.push('gte');
            return namespace + "GTE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-lt':
            requires.push('lt');
            return namespace + "LT(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-lte':
            requires.push('lte');
            return namespace + "LTE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
        }
        throw TypeException("Unknown operator: " + node.subtype);
      case 'group':
        return '(' + compiler(node.exp) + ')';
      case 'function':
        switch (node.name.toUpperCase()) {
          case 'IF':
            requires.push('if');
            if (node.args.length > 3) {
              throw Error("IF sent too many arguments.");
            }
            if (node.args.length !== 3) {
              throw Error("IF expects 3 arguments");
            }
            return '((' + compiler(node.args[0]) + ') ?' + compiler(node.args[1]) + ' : ' + compiler(node.args[2]) + ')';

          case 'NOT':
            requires.push('not');
            if (node.args.length !== 1) {
              throw Error("NOT only accepts one argument");
            }
            return namespace + "NOT(' + compiler( node.args[0] ) + ')";
          case 'AND':
            requires.push('and');
            return namespace + 'AND(' + printItems(node.args) + ')';
          case 'OR':
            requires.push('or');
            return namespace + 'OR(' + printItems(node.args) + ')';
          case 'ABS':
            requires.push('abs');
            return 'ABS(' + compiler(node) + ')';
          case 'MIN':
            requires.push('min');
            return 'Math.min(' + printItems(node.args) + ')';
          case 'MAX':
            requires.push('max');
            return 'Math.max(' + printItems(node.args) + ')';
          default:
            requires.push(name);
            return namespace + node.name + '( ' + printItems(node.args) + ' )';

        }
      case 'cell':
        if (typeof precedents !== "undefined" && !suppress) {
          precedents.push(node);
        }

        return 'context.get(\"' + node.addr + '\")';

      case 'range':

        if (typeof precedents !== "undefined") {
          precedents.push(node);suppress = true;
        }
        lhs = compiler(node.topLeft);
        rhs = compiler(node.bottomRight);
        suppress = false;

        // anonymous functions are the perfect solution for dynamic ranges but was not immediately obvious to me
        if (node.topLeft.type === "function") {
          lhs = "function() { return (" + lhs + "); }";
        }

        if (node.bottomRight.type === "function") {
          rhs = "function() { return (" + rhs + "); }";
        }

        return 'context.range( ' + lhs + ', ' + rhs + ' )';

      case 'value':
        switch (node.subtype) {
          case 'array':
            return '[' + printItems(node.items) + ']';
          case 'string':
            return "'" + node.value.replace(/'/g, "''") + "'";
          case 'variable':

            if (precedents && !suppress) {
              precedents.push(node);
            }

            return 'context.get(\"' + node.value + '\")';

          default:
            return node.value;
        }
    }
  }

  var id = compiledNumber++;

  var compiled = compiler(ast);

  f = new Function('context', '// ' + exp + '\n  return (' + compiled + ');\n  //@ sourceURL=formula_function_' + id + '.js\'\n  ');

  f.id = id;
  f.exp = exp;
  f.ast = ast;
  f.code = compiled;
  f.precedents = precedents;
  f.requires = requires.map(function (n) {
    return n.toUpperCase();
  }).reduce(function (out, name) {
    out[name] = Box[name];
    return out;
  }, {});
  f.run = f.bind(f.requires);

  return f;
}
},{"../lib/PARSER":77,"./index":105}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONCATENATE = CONCATENATE;
// Copyright 2015 Peter W Moresi

// CONCATENATE reduces a list of values into a single string.
function CONCATENATE() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Combine into a single string value
  return values.reduce(function (acc, item) {
    return "" + acc + item;
  });
}
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COND = COND;
// Copyright 2015 Peter W Moresi

// COND accepts conditions and returns the even value after the first odd
// value that is true. If no odd value is true then it returns the last odd
// value when present.
//
// SYNTAX( cond1, result_if_true [, cond2, result_if_true, default_result] )
function COND() {
  for (var _len = arguments.length, cases = Array(_len), _key = 0; _key < _len; _key++) {
    cases[_key] = arguments[_key];
  }

  var found = false;

  // Reduce all cases into a value.
  return cases.reduce(function (acc, item, index) {

    // Return previously found result
    if (found === true) return acc;

    // Handle last item
    if (index === cases.length - 1) {
      // There is no last item.
      if (index % 2 === 1) return;

      // return the last item
      return item;
    }

    // Check if condition is true
    if (index % 2 === 0 && item === true) {
      found = true;
      // return the found item
      return cases[index + 1];
    }

    return acc;
  }, undefined);
}
},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright 2015 Peter W Moresi

// Shared constants
var d1900 = exports.d1900 = new Date(1900, 0, 1),
    JulianOffset = exports.JulianOffset = 2415019,
    MinutesInHour = exports.MinutesInHour = 60,
    MinutesInDay = exports.MinutesInDay = 1440,
    SecondsInMinute = exports.SecondsInMinute = 60,
    SecondsInHour = exports.SecondsInHour = 3600,
    SecondsInDay = exports.SecondsInDay = 86400,
    DaysInYear = exports.DaysInYear = 365.25,
    MilliSecondsInDay = exports.MilliSecondsInDay = 86400000,
    AllowedDates = exports.AllowedDates = { H: "h]", M: "m]", MM: "mm]", S: "s]", SS: "ss]" },
    DayNames = exports.DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    DayNames3 = exports.DayNames3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    MonthNames = exports.MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    MonthNames3 = exports.MonthNames3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    AM = exports.AM = "AM",
    AM1 = exports.AM1 = "A",
    PM = exports.PM = "PM",
    PM1 = exports.PM1 = "P",

// Circle Constants
τ = exports.τ = 6.28318530717958,
    // http://tauday.com/tau-manifesto

// Address System Constants
MaxCols = exports.MaxCols = 16384,
    // 14 bits, 2^14
MaxRows = exports.MaxRows = 1048576,
    // 20 bits, 2^20

// Formatting Constants
SeparatorChar = exports.SeparatorChar = ",",
    DecimalChar = exports.DecimalChar = ".",
    DefaultCurrency = exports.DefaultCurrency = "$",
    // the currency string used if none specified
AllowedColors = exports.AllowedColors = {
  BLACK: "#000000",
  BLUE: "#0000FF",
  CYAN: "#00FFFF",
  GREEN: "#00FF00",
  MAGENTA: "#FF00FF",
  RED: "#FF0000",
  WHITE: "#FFFFFF",
  YELLOW: "#FFFF00"
};
},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COS = COS;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COS returns the cosine of a value.
// Copyright 2015 Peter W Moresi

function COS(value) {

  // Return `#VALUE!` when value is not a number.
  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  return Math.cos(value);
}
},{"./ERROR":29,"./ISNUMBER":57}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATE = DATE;

var _SERIAL = require('./SERIAL');

// DATE returns a serial number given a year, month and day.
function DATE(year, month, day) {
  return (0, _SERIAL.SERIAL)(new Date(year, month - 1, day));
} // Copyright 2015 Peter W Moresi
},{"./SERIAL":89}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATEDIF = DATEDIF;
// Copyright 2015 Peter W Moresi

// DATEDIF return the difference between two dates given a start date, end date and unit.
function DATEDIF(start_date, end_date, unit) {
  var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;
  start_date = new Date(start_date);
  end_date = new Date(end_date);

  var timediff = end_date - start_date;
  if (isNaN(timediff)) return NaN;

  switch (unit) {
    case "Y":
      return end_date.getFullYear() - start_date.getFullYear();
    case "M":
      return end_date.getFullYear() * 12 + end_date.getMonth() - (start_date.getFullYear() * 12 + start_date.getMonth());
    case "W":
      return Math.floor(timediff / week);
    case "D":
      return Math.floor(timediff / day);
    case "MD":
      return end_date.getDate() - start_date.getDate();
    case "YM":
      return end_date.getMonth() - start_date.getMonth();
    case "YD":
      return new Error("NOT IMPLEMENTED");
    default:
      return undefined;
  }
}
},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATEVALUE = DATEVALUE;

var _PARSEDATE = require('./PARSEDATE');

var _SERIAL = require('./SERIAL');

// DATEVALUE parses a date string and returns a serial number.
// Copyright 2015 Peter W Moresi

function DATEVALUE(d) {
  return (0, _SERIAL.SERIAL)((0, _PARSEDATE.PARSEDATE)(d));
}
},{"./PARSEDATE":76,"./SERIAL":89}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DAYS360 = DAYS360;

var _PARSEBOOL = require('./PARSEBOOL');

var _PARSEDATE = require('./PARSEDATE');

// Copyright 2015 Peter W Moresi

function DAYS360(start_date, end_date, method) {
    method = (0, _PARSEBOOL.PARSEBOOL)(method);
    start_date = (0, _PARSEDATE.PARSEDATE)(start_date);
    end_date = (0, _PARSEDATE.PARSEDATE)(end_date);

    if (start_date instanceof Error) {
        return start_date;
    }
    if (end_date instanceof Error) {
        return end_date;
    }
    if (method instanceof Error) {
        return method;
    }
    var sm = start_date.getMonth();
    var em = end_date.getMonth();
    var sd, ed;
    if (method) {
        sd = start_date.getDate() === 31 ? 30 : start_date.getDate();
        ed = end_date.getDate() === 31 ? 30 : end_date.getDate();
    } else {
        var smd = new Date(start_date.getFullYear(), sm + 1, 0).getDate();
        var emd = new Date(end_date.getFullYear(), em + 1, 0).getDate();
        sd = start_date.getDate() === smd ? 30 : start_date.getDate();
        if (end_date.getDate() === emd) {
            if (sd < 30) {
                em++;
                ed = 1;
            } else {
                ed = 30;
            }
        } else {
            ed = end_date.getDate();
        }
    }
    return 360 * (end_date.getFullYear() - start_date.getFullYear()) + 30 * (em - sm) + (ed - sd);
}
},{"./PARSEBOOL":75,"./PARSEDATE":76}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEC2BIN = DEC2BIN;

var _REPT = require('./REPT');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based on https://github.com/sutoiku/formula.js/blob/mast../src/engineering.js
// Copyright 2015 Peter W Moresi

function DEC2BIN(input, places) {

  // exit if input is an error
  if (input instanceof Error) {
    return number;
  }

  // cast input to number
  var number = parseInt(input);

  if (Number.isNaN(number)) {
    return _ERROR2.default.value;
  }

  // Return error.if number is not decimal, is lower than -512, or is greater than 511
  if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
    return _ERROR2.default.num;
  }

  // Ignore places and return a 10-character binary number if number is negative
  if (number < 0) {
    return '1' + (0, _REPT.REPT)('0', 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
  }

  // Convert decimal number to binary
  var result = parseInt(number, 10).toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error.if places is nonnumeric
    if (isNaN(places)) {
      return _ERROR2.default.value;
    }

    // Return error.if places is negative
    if (places < 0) {
      return _ERROR2.default.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return places >= result.length ? (0, _REPT.REPT)('0', places - result.length) + result : _ERROR2.default.num;
  }
}
},{"./ERROR":29,"./REPT":83}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIFF = DIFF;
// Copyright 2015 Peter W Moresi

function DIFF(a, b) {
  var keysA = Object.keys(a),
      keysB = Object.keys(b),
      InA = keysB.filter(function (n) {
    return keysA.indexOf(n) > -1;
  }),
      NotInA = keysB.filter(function (n) {
    return keysA.indexOf(n) === -1;
  }),
      NotInB = keysA.filter(function (n) {
    return keysB.indexOf(n) === -1;
  }),
      Diff = InA.filter(function (n) {
    return a[n] !== b[n];
  });

  return {
    left: a,
    right: b,
    unique_left: NotInA,
    unique_right: NotInB,
    diff: Diff.reduce(function (x, y) {
      var diff = {};
      diff[y] = { left: a[y], right: b[y] };
      return Object.assign({}, x, diff);
    }, {})
  };
}
},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIVIDE = DIVIDE;
// Copyright 2015 Peter W Moresi

// DIVIDE returns the result of dividing a by b.
function DIVIDE(a, b) {
  return a / b;
}
},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EQ = EQ;
// Copyright 2015 Peter W Moresi

// EQ compares two values and returns a boolean value.
function EQ(a, b) {
  // String comparisions are case-insensitive
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase() === b.toLowerCase();
  } else {
    return a === b;
  }
}
},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright 2015 Peter W Moresi

// List of errors in the spreadsheet system

var nil = new Error('#NULL!'),
    div0 = new Error('#DIV/0!'),
    value = new Error('#VALUE?'),
    ref = new Error('#REF!'),
    name = new Error('#NAME?'),
    num = new Error('#NUM!'),
    na = new Error('#N/A'),
    error = new Error('#Error('),
    data = new Error('#GETTING_DATA'),
    missing = new Error('#MISSING'),
    unknown = new Error('#UNKNOWN');

exports.default = {
  nil: nil,
  div0: div0,
  value: value,
  ref: ref,
  name: name,
  num: num,
  na: na,
  error: error,
  data: data,
  missing: missing,
  unknown: unknown
};
},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXACT = undefined;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Exact compares two values and only returns true if they meet strict equivalence.
var EXACT = exports.EXACT = function EXACT(a, b) {
  return a === b;
}; // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FILTER = FILTER;
// Copyright 2015 Peter W Moresi

// FILTER limits a range based on arrays of boolean values.
function FILTER(range) {
  for (var _len = arguments.length, filters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    filters[_key - 1] = arguments[_key];
  }

  // A filter is an array of true/false values.
  // The filter may be for rows or for columns but not both.
  // A array filter may only filter a range that covers a single row or a single column.

  function makeFilter() {
    return function (value, index) {
      return filters.reduce(function (previousValue, currentValue) {
        if (previousValue === false) {
          return false;
        } else {
          return currentValue[index];
        }
      }, true);
    };
  }

  return range.filter(makeFilter());
}
},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIND = FIND;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIND searches for text within a string
function FIND(find_text) {
  var within_text = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var position = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  // Find the position of the text
  position = within_text.indexOf(find_text, position - 1);

  // If found return the position as base 1.
  return position === -1 ? _ERROR2.default.value : position + 1;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FLATTEN = FLATTEN;
// Copyright 2015 Peter W Moresi

// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
function FLATTEN(ref) {
  return ref.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}
},{}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GT = GT;

var _ISARRAY = require('./ISARRAY');

var _ISREF = require('./ISREF');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GT(a, b) {
  if ((0, _ISREF.ISREF)(a) && (0, _ISREF.ISREF)(b)) {
    return _ERROR2.default.na;
  } else if ((0, _ISARRAY.ISARRAY)(a) && (0, _ISARRAY.ISARRAY)(b)) {
    return _ERROR2.default.na;
  } else if ((0, _ISREF.ISREF)(a) || (0, _ISARRAY.ISARRAY)(a)) {
    return a.map(function (d) {
      return d > b;
    });
  } else if ((0, _ISREF.ISREF)(b) || (0, _ISARRAY.ISARRAY)(b)) {
    return b.map(function (d) {
      return d > a;
    });
  } else {
    return a > b;
  }
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29,"./ISARRAY":47,"./ISREF":59}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GTE = GTE;

var _ISARRAY = require('./ISARRAY');

var _ISREF = require('./ISREF');

// Copyright 2015 Peter W Moresi

function GTE(a, b) {
  if ((0, _ISREF.ISREF)(a) && (0, _ISREF.ISREF)(b)) {
    return error.na;
  } else if ((0, _ISARRAY.ISARRAY)(a) && (0, _ISARRAY.ISARRAY)(b)) {
    return error.na;
  } else if ((0, _ISREF.ISREF)(a) || (0, _ISARRAY.ISARRAY)(a)) {
    return a.map(function (d) {
      return d >= b;
    });
  } else if ((0, _ISREF.ISREF)(b) || (0, _ISARRAY.ISARRAY)(b)) {
    return b.map(function (d) {
      return d >= a;
    });
  } else {
    return a >= b;
  }
}
},{"./ISARRAY":47,"./ISREF":59}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GUID = GUID;
// Copyright 2015 Peter W Moresi

// credit to http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
// rfc4122 version 4 compliant solution

// Generate a globally unique identifier
function GUID() {
  var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return guid;
};
},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HLOOKUP = HLOOKUP;

var _ISBLANK = require("./ISBLANK");

// HLOOKUP searches for a needle across the rows.
function HLOOKUP(needle, table, index, exactmatch) {
    if (typeof needle === "undefined" || (0, _ISBLANK.ISBLANK)(needle)) {
        return null;
    }

    var index = index || 0,
        row = table[0];

    for (var i = 0; i < row.length; i++) {

        if (exactmatch && row[i] === needle || row[i].toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
            return index < table.length + 1 ? table[index - 1][i] : table[0][i];
        }
    }

    return error.na;
} // Copyright 2015 Peter W Moresi
},{"./ISBLANK":48}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IF = IF;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IF returns second argument if true, other it returns the third argument.
function IF(value, value_if_true, value_if_false) {
  return value || typeof value === 'string' && value.toLowerCase() === 'true' ? value_if_true : value_if_false;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFBLANK = IFBLANK;

var _ISBLANK = require('./ISBLANK');

// IFBLANK return the `value` if non-blank, otherwise it returns `value_if_blank`.
function IFBLANK(value, value_if_blank) {
    return (0, _ISBLANK.ISBLANK)(value) ? value_if_blank : value;
} // Copyright 2015 Peter W Moresi
},{"./ISBLANK":48}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFEMPTY = IFEMPTY;

var _ISEMPTY = require('./ISEMPTY');

// IFBLANK return the `value` if empty, otherwise it returns `value_if_empty`.
function IFEMPTY(value, value_if_empty) {
    return (0, _ISEMPTY.ISEMPTY)(value) ? value_if_empty : value;
} // Copyright 2015 Peter W Moresi
},{"./ISEMPTY":51}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFERROR = IFERROR;

var _ISERROR = require('./ISERROR');

// IFBLANK return the `value` if error, otherwise it returns `value_if_error`.
function IFERROR(value) {
    var value_if_error = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    return (0, _ISERROR.ISERROR)(value) ? value_if_error : value;
} // Copyright 2015 Peter W Moresi
},{"./ISERROR":53}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFNA = IFNA;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IFBLANK return the `value` if `#NA!`, otherwise it returns `value_if_na`.
function IFNA(value, value_if_na) {
    return value === _ERROR2.default.na ? value_if_na : value;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTAINS = undefined;
exports.IN = IN;

var _ISBLANK = require('./ISBLANK');

var _ISARRAY = require('./ISARRAY');

var _EQ = require('./EQ');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// INT returns true when a needle is found in a lookup.
// Copyright 2015 Peter W Moresi

function IN(needle, lookup) {

  // Return `#NA!` when the needle and lookup are blank.
  if ((0, _ISBLANK.ISBLANK)(needle) && (0, _ISBLANK.ISBLANK)(lookup)) {
    return _ERROR2.default.na;
  }

  // Return `#NA!` when the lookup is not an array.
  if (!(0, _ISARRAY.ISARRAY)(lookup)) {
    return _ERROR2.default.na;
  }

  // Return true when some of the values match the needle.
  return lookup.some(function (n) {
    return (0, _EQ.EQ)(n, needle);
  });
}

// ALIAS CONTAINS
var CONTAINS = exports.CONTAINS = IN;
},{"./EQ":28,"./ERROR":29,"./ISARRAY":47,"./ISBLANK":48}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEX2COL = INDEX2COL;

var _CONSTANTS = require('./CONSTANTS');

var _INDEX2ROW = require('./INDEX2ROW');

// INDEX2COL computes the column given a cell index
// Copyright 2015 Peter W Moresi

function INDEX2COL(index) {
  return index - (0, _INDEX2ROW.INDEX2ROW)(index) * _CONSTANTS.MaxCols;
}
},{"./CONSTANTS":19,"./INDEX2ROW":45}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEX2ROW = INDEX2ROW;

var _CONSTANTS = require('./CONSTANTS');

// INDEX2COL computes the row given a cell index
function INDEX2ROW(index) {
  return Math.floor(index / _CONSTANTS.MaxCols);
} // Copyright 2015 Peter W Moresi
},{"./CONSTANTS":19}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDIRECT = INDIRECT;

var _REF = require('./REF');

// Returns a cell indirection
function INDIRECT(ref) {
  return (0, _REF.REF)(ref);
} // Copyright 2015 Peter W Moresi
},{"./REF":81}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISARRAY = ISARRAY;
// Copyright 2015 Peter W Moresi

// ISARRAY returns true when the value is an aray.
function ISARRAY(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}
},{}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISBLANK = ISBLANK;
// Copyright 2015 Peter W Moresi

// ISBLANK returns true when the value is undefined or null.
function ISBLANK(value) {
    return typeof value === 'undefined' || value === null;
};
},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISDATE = ISDATE;
// Copyright 2015 Peter W Moresi

// ISDATE returns true when the `value` is a JavaScript date object.
function ISDATE(value) {
    return value && Object.prototype.toString.call(value) == '[object Date]';
};
},{}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISEMAIL = ISEMAIL;
// Copyright 2015 Peter W Moresi

// ISEMAIL returns true when the `value` matches the regex.
function ISEMAIL(value) {
  // credit to http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};
},{}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISEMPTY = ISEMPTY;

var _ISBLANK = require('./ISBLANK');

var _ISARRAY = require('./ISARRAY');

var _ISTEXT = require('./ISTEXT');

// ISEMPTY returns true when the value is blank, is an empty array or when it
// is an empty string.
function ISEMPTY(value) {
  return (0, _ISBLANK.ISBLANK)(value) || (0, _ISARRAY.ISARRAY)(value) && value.length === 0 || (0, _ISTEXT.ISTEXT)(value) && value === '';
} // Copyright 2015 Peter W Moresi

;
},{"./ISARRAY":47,"./ISBLANK":48,"./ISTEXT":60}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISERR = ISERR;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
function ISERR(value) {
  return value !== _ERROR2.default.na && value.constructor.name === 'Error' || typeof value === 'number' && (Number.isNaN(value) || !Number.isFinite(value));
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISERROR = ISERROR;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISERR = require('./ISERR');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISERROR returns true when the value is an error.
// Copyright 2015 Peter W Moresi

function ISERROR(value) {
    return (0, _ISERR.ISERR)(value) || value === _ERROR2.default.na;
}
},{"./ERROR":29,"./ISERR":52}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISEVEN = ISEVEN;
// Copyright 2015 Peter W Moresi

// ISEVEN returns true when the value is even.
function ISEVEN(value) {
    return !(Math.floor(Math.abs(value)) & 1);
}
},{}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISFUNCTION = ISFUNCTION;
// Copyright 2015 Peter W Moresi

// ISFUNCTION returns true when `value` is a function.
function ISFUNCTION(value) {
    return value && Object.prototype.toString.call(value) == '[object Function]';
};
},{}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISNA = ISNA;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISNA returns true when the value is `#NA!`
function ISNA(value) {
  return value === _ERROR2.default.na;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISNUMBER = ISNUMBER;
// Copyright 2015 Peter W Moresi

// Returns true when the value is a finite number.
function ISNUMBER(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
},{}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISODD = ISODD;
// Copyright 2015 Peter W Moresi

// ISODD returns true when the value is odd.
function ISODD(value) {
    return Math.floor(Math.abs(value)) & 1;
}
},{}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISREF = ISREF;

var _ISBLANK = require('./ISBLANK');

// ISREF returns true when the value is a reference.
function ISREF(value) {
  if (!value) return false;
  return value.isRef === true;
} // Copyright 2015 Peter W Moresi
},{"./ISBLANK":48}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISTEXT = ISTEXT;
// Copyright 2015 Peter W Moresi

// ISTEXT returns true when the value is a string.
function ISTEXT(value) {
    return 'string' === typeof value;
};
},{}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISURL = ISURL;
// Copyright 2015 Peter W Moresi

// ISURL returns true when the value matches the regex for a uniform resource locator.
function ISURL(str) {
  // credit: http://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-an-url
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return pattern.test(str);
}
},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEN = LEN;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LEN returns the size of a string or array.
function LEN(text) {
  if (arguments.length === 0) {
    return _ERROR2.default.error;
  }

  if (typeof text === 'string') {
    return text.length;
  }

  if (text.length) {
    return text.length;
  }

  return _ERROR2.default.value;
} // Copyright 2015 Peter W Moresi

;
},{"./ERROR":29}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOOKUP = LOOKUP;
// Copyright 2015 Peter W Moresi

// LOOKUP find a value in an array.
function LOOKUP() {
    var lookup_value, lookup_array, lookup_vector, results_vector;
    if (arguments.length === 2) {
        // array form
        var wide = false;

        lookup_value = arguments[0].valueOf();
        lookup_array = arguments[1];

        for (var i = 0; i < lookup_array.length; i++) {
            if (typeof lookup_array[i] !== 'undefined' && lookup_value === lookup_array[i].valueOf()) {
                return lookup_array[i];
            }
        }
    } else if (arguments.length === 3) {
        // vector form`
        lookup_value = arguments[0].valueOf();
        lookup_vector = arguments[1];
        results_vector = arguments[2];

        for (var i = 0; i < lookup_vector.length; i++) {
            if (typeof lookup_vector[i] !== 'undefined' && lookup_value === lookup_vector[i].valueOf()) {
                return results_vector[i];
            }
        }
    }

    return error.na;
}
},{}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOWER = LOWER;

var _ISTEXT = require('./ISTEXT');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LOWER converts `value` to lower case
// Copyright 2015 Peter W Moresi

function LOWER(value) {
  if (!(0, _ISTEXT.ISTEXT)(value)) return _ERROR2.default.value;
  return str.toLowerCase();
}
},{"./ERROR":29,"./ISTEXT":60}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LT = LT;

var _ISARRAY = require('./ISARRAY');

var _ISREF = require('./ISREF');

// LT compares two values and returns true when a is less than b.
// Copyright 2015 Peter W Moresi

function LT(a, b) {
  if ((0, _ISREF.ISREF)(a) && (0, _ISREF.ISREF)(b)) {
    return error.na;
  } else if ((0, _ISARRAY.ISARRAY)(a) && (0, _ISARRAY.ISARRAY)(b)) {
    return error.na;
  } else if ((0, _ISREF.ISREF)(a) || (0, _ISARRAY.ISARRAY)(a)) {
    return a.map(function (d) {
      return d < b;
    });
  } else if ((0, _ISREF.ISREF)(b) || (0, _ISARRAY.ISARRAY)(b)) {
    return b.map(function (d) {
      return d < a;
    });
  } else {
    return a < b;
  }
}
},{"./ISARRAY":47,"./ISREF":59}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LTE = LTE;

var _ISARRAY = require('./ISARRAY');

var _ISREF = require('./ISREF');

// LT compares two values and returns true when a is less than or equal to b.
// Copyright 2015 Peter W Moresi

function LTE(a, b) {
  if ((0, _ISREF.ISREF)(a) && (0, _ISREF.ISREF)(b)) {
    return error.na;
  } else if ((0, _ISARRAY.ISARRAY)(a) && (0, _ISARRAY.ISARRAY)(b)) {
    return error.na;
  } else if ((0, _ISREF.ISREF)(a) || (0, _ISARRAY.ISARRAY)(a)) {
    return a.map(function (d) {
      return d <= b;
    });
  } else if ((0, _ISREF.ISREF)(b) || (0, _ISARRAY.ISARRAY)(b)) {
    return b.map(function (d) {
      return d <= a;
    });
  } else {
    return a <= b;
  }
}
},{"./ISARRAY":47,"./ISREF":59}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX = MAX;

var _FLATTEN = require('./FLATTEN');

var _ISNUMBER = require('./ISNUMBER');

// MAX returns the largest number from a `list`.
// Copyright 2015 Peter W Moresi

function MAX() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)(list).reduce(function (max, next) {
    if ((0, _ISNUMBER.ISNUMBER)(next)) {
      return Math.max(max, next);
    }

    return max;
  }, Number.NEGATIVE_INFINITY);
}
},{"./FLATTEN":33,"./ISNUMBER":57}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN = MIN;

var _FLATTEN = require('./FLATTEN');

var _ISNUMBER = require('./ISNUMBER');

// MIN returns the smallest number from a `list`.
// Copyright 2015 Peter W Moresi

function MIN() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)(list).reduce(function (min, next) {
    if ((0, _ISNUMBER.ISNUMBER)(next)) {
      return Math.min(min, next);
    }

    return min;
  }, Number.POSITIVE_INFINITY);
}
},{"./FLATTEN":33,"./ISNUMBER":57}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MULTIPLY = MULTIPLY;
// Copyright 2015 Peter W Moresi

// MULTIPLY returns the product of a and b.
function MULTIPLY(a, b) {
  return a * b;
}
},{}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.N = N;

var _ISNUMBER = require('./ISNUMBER');

var _ISERROR = require('./ISERROR');

var _SERIAL = require('./SERIAL');

// N converts a `value` to a number. It supports numbers, true, false and dates.
function N(value) {

  // Pass numbers and errors back out.
  if ((0, _ISNUMBER.ISNUMBER)(value) || (0, _ISERROR.ISERROR)(value)) {
    return value;
  }

  // Convert dates to serial number.
  if (value instanceof Date) {
    return (0, _SERIAL.SERIAL)(value);
  }

  // Convert true to 1
  if (value === true) {
    return 1;
  }

  // Convert false to 0
  if (value === false) {
    return 0;
  }

  // Return 0 in all other cases.
  return 0;
} // Copyright 2015 Peter W Moresi
},{"./ISERROR":53,"./ISNUMBER":57,"./SERIAL":89}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NE = NE;

var _EQ = require('./EQ');

// NE returns true when a is not equal to b.
function NE(a, b) {
  return !(0, _EQ.EQ)(a, b);
} // Copyright 2015 Peter W Moresi
},{"./EQ":28}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT = NOT;
// Copyright 2015 Peter W Moresi

// NOT negates a `value`
function NOT(value) {
  return !value;
}
},{}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OCT2DEC = OCT2DEC;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// OCT2DEC converts a octal value into a decimal value.
function OCT2DEC(octalNumber) {
  // Credits: Based on implementation found in https://gist.github.com/ghalimi/4525876#file-oct2dec-js
  // Return error.when number passed in is not octal or has more than 10 digits
  if (!/^[0-7]{1,10}$/.test(octalNumber)) return _ERROR2.default.num;

  // Convert octal number to decimal number
  var nonNegativeDecimalNumber = parseInt(octalNumber, 8);

  // Returns the corresponding decimal number
  // Two's Complement Decimal Range: -(2^N-1) to (2^N-1 - 1) where N=30 (N = number of bits) and ^ means raised to the power of
  // 2^N-1 = 2^(30 - 1) = 2^29 = 536870912
  // 2^N-1 - 1 = 536870912 - 1 = 536870911
  // 2^N = 2^30 = 1073741824
  // Two's Complement Decimal Range: [-536870912,536870911]
  // Largest octal number allowed: 7777777777 which in decimal is 1073741823 = 2^N - 1
  // Case 1: Negative Range
  //  if nonNegativeDecimalNumber >= 2^N-1, then return (nonNegativeNumber - 2^N)
  //  Smallest Number: 2^N-1 - 2^N = 2^N-1 - 2*2^N-1 = 2^N-1 * (1 - 2) = 2^N-1 * (-1) = -2^N-1
  //  Largest Number: (2^N - 1) - (2^N) = (2^N - 2^N) - 1 = -1
  //  Range: [-2^N-1, -1] = [-536870912, -1]
  //
  // Smallest octal number allowed: 0 which in decimal is 0
  // Case 2: Non-Negative Range
  //   Range: [0, 2^N-1 - 1] = [0, 536870911]

  return nonNegativeDecimalNumber >= 536870912 ? nonNegativeDecimalNumber - 1073741824 : nonNegativeDecimalNumber;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OR = OR;
// Copyright 2015 Peter W Moresi

// OR returns true when any of the criter is true or 1.
function OR() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  return criteria.reduce(function (acc, item) {
    if (acc === true) return true;
    return item || item === 1;
  }, false);
}
},{}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PARSEBOOL = PARSEBOOL;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PARSEBOOL converts a truthy value into a boolean value.
function PARSEBOOL(val) {

  if (val instanceof Error) {
    return val;
  } else if (typeof val === 'boolean') {
    return val;
  } else if (typeof val === 'number') {
    return val !== 0;
  } else if (typeof val === 'string') {
    var up = val.toUpperCase();
    if (up === 'TRUE' || up === 'FALSE') {
      return up === 'TRUE';
    }
  }

  return _ERROR2.default.value;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PARSEDATE = PARSEDATE;

var _CONSTANTS = require('./CONSTANTS');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PARSEDATE converts a value into a Date object.
// Copyright 2015 Peter W Moresi

function PARSEDATE(val) {

  /* *******************
  Extracted from Social Calc
   convert_date_julian_to_gregorian(juliandate)
   ymd->{}
  .year
  .month
  .day
   From: http://aa.usno.navy.mil/faq/docs/JD_Formula.html
  Uses: Fliegel, H. F. and van Flandern, T. C. (1968). Communications of the ACM, Vol. 11, No. 10 (October, 1968).
  Translated from the FORTRAN
   ************************* */
  function convert_date_julian_to_gregorian(juliandate) {

    var L, N, I, J, K;

    L = juliandate + 68569;
    N = Math.floor(4 * L / 146097);
    L = L - Math.floor((146097 * N + 3) / 4);
    I = Math.floor(4000 * (L + 1) / 1461001);
    L = L - Math.floor(1461 * I / 4) + 31;
    J = Math.floor(80 * L / 2447);
    K = L - Math.floor(2447 * J / 80);
    L = Math.floor(J / 11);
    J = J + 2 - 12 * L;
    I = 100 * (N - 49) + I + L;

    return new Date(I, J - 1, K);
  }

  if (val instanceof Error) {
    return val;
  } else if (typeof val === 'number') {
    // val is assumed to be serial number.
    return convert_date_julian_to_gregorian(Math.floor(val + _CONSTANTS.JulianOffset));
  } else if (typeof val === 'string') {
    var timestamp = Date.parse(val);
    if (isNaN(timestamp)) {
      return _ERROR2.default.value;
    }
    return new Date(timestamp);
  }

  return _ERROR2.default.value;
}
},{"./CONSTANTS":19,"./ERROR":29}],77:[function(require,module,exports){
(function (process){
/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,6],$V2=[1,7],$V3=[1,8],$V4=[1,9],$V5=[1,10],$V6=[1,12],$V7=[1,13],$V8=[1,14],$V9=[1,15],$Va=[1,16],$Vb=[1,17],$Vc=[1,25],$Vd=[1,19],$Ve=[1,20],$Vf=[1,21],$Vg=[1,22],$Vh=[1,23],$Vi=[1,24],$Vj=[1,26],$Vk=[1,27],$Vl=[1,28],$Vm=[1,29],$Vn=[1,30],$Vo=[1,31],$Vp=[5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,33,34,37],$Vq=[5,6,7,8,12,13,14,15,16,17,20,33,34,37],$Vr=[1,62],$Vs=[1,63],$Vt=[20,33,34,37],$Vu=[5,6,7,8,9,10,12,13,14,15,16,17,20,33,34,37],$Vv=[5,6,12,13,14,15,16,20,33,34,37],$Vw=[5,6,12,13,14,15,16,17,20,33,34,37];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"=":6,"+":7,"-":8,"*":9,"/":10,"^":11,"<>":12,">":13,"<":14,">=":15,"<=":16,"&":17,"func":18,"(":19,")":20,":":21,"CELL":22,"SHEET":23,"IDENT":24,"array_literal":25,"TRUE":26,"FALSE":27,"STRING":28,"NUMBER":29,"%":30,"range":31,"param_list":32,",":33,";":34,"FUNC":35,"{":36,"}":37,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"=",7:"+",8:"-",9:"*",10:"/",11:"^",12:"<>",13:">",14:"<",15:">=",16:"<=",17:"&",19:"(",20:")",21:":",22:"CELL",23:"SHEET",24:"IDENT",26:"TRUE",27:"FALSE",28:"STRING",29:"NUMBER",30:"%",33:",",34:";",35:"FUNC",36:"{",37:"}"},
productions_: [0,[3,2],[3,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,3],[4,3],[4,2],[4,3],[4,3],[4,1],[4,2],[4,1],[4,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,2],[4,1],[31,3],[32,1],[32,3],[32,3],[18,4],[18,3],[25,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: case 2:
 return $$[$0-1]; 
break;
case 3:
this.$ = { type: "operator", subtype: 'infix-add', operands:[$$[$0-2], $$[$0]]}; 
break;
case 4:
this.$ = { type: "operator", subtype: 'infix-subtract', operands:[$$[$0-2], $$[$0]]}; 
break;
case 5:
this.$ = { type: "operator", subtype: 'infix-multiply', operands:[$$[$0-2], $$[$0]]}; 
break;
case 6:
this.$ = { type: "operator", subtype: 'infix-divide', operands:[$$[$0-2], $$[$0]] }; 
break;
case 7:
this.$ = { type: "operator", subtype: 'infix-power', operands:[$$[$0-2], $$[$0]] }; 
break;
case 8:
this.$ = { type: "operator", subtype: 'infix-ne', operands:[$$[$0-2], $$[$0]] }; 
break;
case 9:
this.$ = { type: "operator", subtype: 'infix-eq', operands:[$$[$0-2], $$[$0]] }; 
break;
case 10:
this.$ = { type: "operator", subtype: 'infix-gt', operands:[$$[$0-2], $$[$0]] }; 
break;
case 11:
this.$ = { type: "operator", subtype: 'infix-lt', operands:[$$[$0-2], $$[$0]] }; 
break;
case 12:
this.$ = { type: "operator", subtype: 'infix-gte', operands:[$$[$0-2], $$[$0]] }; 
break;
case 13:
this.$ = { type: "operator", subtype: 'infix-lte', operands:[$$[$0-2], $$[$0]] }; 
break;
case 14:
this.$ = { type: "operator", subtype: 'prefix-plus', operands:[$$[$0]] }; 
break;
case 15: case 16:
this.$ = { type: "operator", subtype: 'infix-concat', operands:[$$[$0-2], $$[$0]] }; 
break;
case 17:
this.$ = { type: "operator", subtype: 'prefix-minus', operands:[$$[$0]] }; 
break;
case 18:
this.$ = { type: 'group', exp:$$[$0-1] }; 
break;
case 19:
this.$ = { type: 'range', subtype: 'local', topLeft:$$[$0-2], bottomRight:$$[$0] }; 
break;
case 20:
this.$ = { type: 'cell', subtype: 'local', addr:$$[$0] }; 
break;
case 21:
 this.$ = { type: 'cell', subtype: 'remote', worksheet: $$[$0-1], addr:$$[$0] }; 
break;
case 22:
 this.$ = { type: 'value', subtype: 'variable', value:$$[$0] }; 
break;
case 23:
 this.$ = { type: 'cell', subtype: 'remote-named', worksheet: $$[$0-1], addr:$$[$0] }; 
break;
case 24: case 25:
 this.$ = $$[$0]; 
break;
case 26:
this.$ = { type: 'value', subtype: 'boolean', value: true }; 
break;
case 27:
this.$ = { type: 'value', subtype: 'boolean', value: false }; 
break;
case 28:
this.$ = { type: 'value', subtype: 'string', value:String(yytext)}; 
break;
case 29:
this.$ = { type: 'value', subtype: 'number', value:$$[$0-1]/100 }; 
break;
case 30:
this.$ = { type: 'value', subtype: 'number', value:Number(yytext) }; 
break;
case 32:
 this.$ = [$$[$0]]; 
break;
case 33:
 this.$ = $$[$0-2].concat([$$[$0]]); 
break;
case 34:
 this.$ = ($$[$0][0].subtype !== 'array') ? [{ type: 'value', subtype: 'array', items:$$[$0-2] }, { type: 'value', subtype: 'array', items:$$[$0] }] : [{ type: 'value', subtype: 'array', items:$$[$0-2] }].concat($$[$0]); 
break;
case 35:
 this.$ = { type: 'function', name: $$[$0-3], args:$$[$0-1] }; 
break;
case 36:
 this.$ = { type: 'function', name: $$[$0-2], args:[] }; 
break;
case 37:
 this.$ = { type: 'value', subtype: 'array', items:$$[$0-1] }; 
break;
}
},
table: [{3:1,4:2,6:[1,3],7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{1:[3]},{5:[1,18],6:$Vc,7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,12:$Vi,13:$Vj,14:$Vk,15:$Vl,16:$Vm,17:$Vn,21:$Vo},{4:32,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:33,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},o([5,6,7,8,9,10,11,12,13,14,15,16,20,21,33,34,37],[2,24],{17:[1,34]}),{4:35,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:36,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},o($Vp,[2,20]),{22:[1,37],24:[1,38]},o($Vp,[2,22]),o($Vp,[2,25]),o($Vp,[2,26]),o($Vp,[2,27]),o($Vp,[2,28]),o($Vp,[2,30],{30:[1,39]}),{19:[1,40]},{4:42,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,32:41,35:$Va,36:$Vb},{1:[2,1]},{4:43,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:44,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:45,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:46,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:47,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:48,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:49,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:50,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:51,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:52,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:53,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:54,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:55,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{5:[1,56],6:$Vc,7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,12:$Vi,13:$Vj,14:$Vk,15:$Vl,16:$Vm,17:$Vn,21:$Vo},o($Vq,[2,14],{9:$Vf,10:$Vg,11:$Vh,21:$Vo}),{4:57,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},o($Vp,[2,17]),{6:$Vc,7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,12:$Vi,13:$Vj,14:$Vk,15:$Vl,16:$Vm,17:$Vn,20:[1,58],21:$Vo},o($Vp,[2,21]),o($Vp,[2,23]),o($Vp,[2,29]),{4:42,7:$V0,8:$V1,18:5,19:$V2,20:[1,60],22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,32:59,35:$Va,36:$Vb},{33:$Vr,34:$Vs,37:[1,61]},o($Vt,[2,32],{6:$Vc,7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,12:$Vi,13:$Vj,14:$Vk,15:$Vl,16:$Vm,17:$Vn,21:$Vo}),o($Vq,[2,3],{9:$Vf,10:$Vg,11:$Vh,21:$Vo}),o($Vq,[2,4],{9:$Vf,10:$Vg,11:$Vh,21:$Vo}),o($Vu,[2,5],{11:$Vh,21:$Vo}),o($Vu,[2,6],{11:$Vh,21:$Vo}),o([5,6,7,8,9,10,11,12,13,14,15,16,17,20,33,34,37],[2,7],{21:$Vo}),o($Vv,[2,8],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,17:$Vn,21:$Vo}),o($Vv,[2,9],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,17:$Vn,21:$Vo}),o($Vv,[2,10],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,17:$Vn,21:$Vo}),o($Vv,[2,11],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,17:$Vn,21:$Vo}),o($Vv,[2,12],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,17:$Vn,21:$Vo}),o($Vv,[2,13],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,17:$Vn,21:$Vo}),o($Vw,[2,15],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,21:$Vo}),o($Vp,[2,19]),{1:[2,2]},o($Vw,[2,16],{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,21:$Vo}),o($Vp,[2,18]),{20:[1,64],33:$Vr,34:$Vs},o($Vp,[2,36]),o($Vp,[2,37]),{4:65,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,35:$Va,36:$Vb},{4:42,7:$V0,8:$V1,18:5,19:$V2,22:$V3,23:$V4,24:$V5,25:11,26:$V6,27:$V7,28:$V8,29:$V9,32:66,35:$Va,36:$Vb},o($Vp,[2,35]),o($Vt,[2,33],{6:$Vc,7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,12:$Vi,13:$Vj,14:$Vk,15:$Vl,16:$Vm,17:$Vn,21:$Vo}),o([20,37],[2,34],{33:$Vr,34:$Vs})],
defaultActions: {18:[2,1],56:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 29
break;
case 2:return 26
break;
case 3:return 27
break;
case 4:return 9
break;
case 5:return 10
break;
case 6:return 8
break;
case 7:return 7
break;
case 8:return 17
break;
case 9:return 11
break;
case 10:return 19
break;
case 11:return 20
break;
case 12:return ">="
break;
case 13:return "<="
break;
case 14:return "<>"
break;
case 15:return "="
break;
case 16:return ">"
break;
case 17:return "<"
break;
case 18:return "{"
break;
case 19:return "}"
break;
case 20:return "!"
break;
case 21:return ","
break;
case 22:return ":"
break;
case 23:return ";"
break;
case 24:return "%"
break;
case 25:return 35;
break;
case 26:return 35;
break;
case 27:yy_.yytext = yy_.yytext.substr(2,yy_.yyleng-3).replace(/\"\"/g, "\""); return "SHEET";
break;
case 28:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-3).replace(/\"\"/g, "\""); return "SHEET";
break;
case 29:yy_.yytext = yy_.yytext.slice(0, -1); return "SHEET"
break;
case 30:yy_.yytext = yy_.yytext.slice(1, -1); return "SHEET"
break;
case 31:return "CELL";
break;
case 32:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\"\"/g, "\""); return "STRING";
break;
case 33:return 24
break;
case 34:return 5
break;
case 35:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:TRUE\b)/,/^(?:FALSE\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:&)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:>=)/,/^(?:<=)/,/^(?:<>)/,/^(?:=)/,/^(?:>)/,/^(?:<)/,/^(?:\{)/,/^(?:\})/,/^(?:!)/,/^(?:,)/,/^(?::)/,/^(?:;)/,/^(?:%)/,/^(?:[A-Za-z](?=[(]))/,/^(?:[A-Za-z][A-Za-z0-9\.]+(?=[(]))/,/^(?:\$'(?:''|[^'])*'!)/,/^(?:'(?:''|[^'])*'!)/,/^(?:[a-zA-Z]([a-zA-Z0-9.$]+)?!)/,/^(?:\$([a-zA-Z])([a-zA-Z0-9.$]+)?!)/,/^(?:\$?([a-zA-Z]+)\$?([0-9]+))/,/^(?:"(?:""|[^"])*")/,/^(?:[a-zA-Z]([a-zA-Z0-9.$^\(]+)?)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
}).call(this,require('_process'))
},{"_process":108,"fs":106,"path":107}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PI = PI;

var _CONSTANTS = require('./CONSTANTS');

// PI returns half the universal circle constant
function PI() {
  return _CONSTANTS.τ / 2;
} // Copyright 2015 Peter W Moresi
},{"./CONSTANTS":19}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PMT = PMT;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PMT returns a loan payment
// Copyright 2015 Peter W Moresi

function PMT(rate, periods, present) {
  var future = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
  var type = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

  if (!(0, _ISNUMBER.ISNUMBER)(rate) || !(0, _ISNUMBER.ISNUMBER)(periods)) {
    return _ERROR2.default.value;
  }

  if (rate === 0) {
    return -((present + future) / periods);
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      return -((future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate));
    } else {
      return -(future * rate / (term - 1) + present * rate / (1 - 1 / term));
    }
  }
};
},{"./ERROR":29,"./ISNUMBER":57}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POWER = POWER;
// Copyright 2015 Peter W Moresi

// POWER computes the power of a value and nth degree.
function POWER(val, nth) {
  return Math.pow(val, nth);
}
},{}],81:[function(require,module,exports){
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

  // References are frozen and immutable
  return Object.freeze({

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

  });
}
},{"./COLUMNLETTER":14,"./ERROR":29,"./INDEX2COL":44,"./INDEX2ROW":45,"./ISBLANK":48,"./ISFUNCTION":55,"./ISNUMBER":57,"./UNIQUE":101}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REPLACE = REPLACE;

var _ISERROR = require('./ISERROR');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REPLACE returns a new string after replacing with `new_text`.
// Copyright 2015 Peter W Moresi

function REPLACE(text, position, length, new_text) {

  if ((0, _ISERROR.ISERROR)(position) || (0, _ISERROR.ISERROR)(length) || typeof text !== 'string' || typeof new_text !== 'string') {
    return _ERROR2.default.value;
  }
  return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
}
},{"./ERROR":29,"./ISERROR":53}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REPT = REPT;
// Copyright 2015 Peter W Moresi

// REPT creates string by repeating text a given number of times.
function REPT(text, number) {
  var r = '';
  for (var i = 0; i < number; i++) {
    r += text;
  }
  return r;
}
},{}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RIGHT = RIGHT;

var _ISBLANK = require('./ISBLANK');

var _N = require('./N');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RIGHT pulls a given number of character from the right side of `text`.
function RIGHT(text, number) {

  if ((0, _ISBLANK.ISBLANK)(text)) {
    return '';
  }

  if (!(0, _N.N)(+number)) {
    return text;
  }

  return text.substring(text.length - number);
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29,"./ISBLANK":48,"./N":70}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUND = ROUND;
// Copyright 2015 Peter W Moresi

// CONVERT a number to a fixed precision.
function ROUND(number, precision) {
  return +number.toFixed(precision);
}
},{}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUNDUP = ROUNDUP;
// Copyright 2015 Peter W Moresi

// ROUNDUP converts a number to a fixed precision by rounding up.
function ROUNDUP(number, precision) {
  var factors = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
  var factor = factors[precision];
  if (number > 0) {
    return Math.ceil(number * factor) / factor;
  } else {
    return Math.floor(number * factor) / factor;
  }
}
},{}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SEARCH = SEARCH;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SEARCH finds text using wildcards ?, *, ~?, and ~*.
function SEARCH(find_text, within_text, position) {
    if (!within_text) {
        return null;
    }
    position = typeof position === 'undefined' ? 1 : position;

    // The SEARCH function translated the find_text into a regex.
    var find_exp = find_text.replace(/([^~])\?/g, '$1.') // convert ? into .
    .replace(/([^~])\*/g, '$1.*') // convert * into .*
    .replace(/([~])\?/g, '\\?') // convert ~? into \?
    .replace(/([~])\*/g, '\\*'); // convert ~* into \*

    position = new RegExp(find_exp, "i").exec(within_text);

    if (position) {
        return position.index + 1;
    }
    return _ERROR2.default.value;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECT = SELECT;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

// Copyright 2015 Peter W Moresi

// SELECT fields from object
function SELECT(fields, body) {
  // non-json
  if (!body || 'object' != (typeof body === 'undefined' ? 'undefined' : _typeof(body))) return;

  // check for fields
  if (!fields) return;

  // split
  if ('string' == typeof fields) fields = fields.split(/ *, */);

  // fields array
  if (Array.isArray(body)) {
    return body.map(function (obj) {
      return fields.reduce(function (ret, key) {
        ret[key] = obj[key];
        return ret;
      }, {});
    });

    return;
  }

  // fields object
  return fields.reduce(function (ret, key) {
    ret[key] = body[key];
    return ret;
  }, {});
}
},{}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SERIAL = SERIAL;

var _CONSTANTS = require('./CONSTANTS');

var _ISDATE = require('./ISDATE');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SERIAL convert a date object into a serial number.
function SERIAL(date) {
  // Credit: https://github.com/sutoiku/formula.js/
  if (!(0, _ISDATE.ISDATE)(date)) {
    return _ERROR2.default.na;
  }
  var diff = Math.ceil((date - _CONSTANTS.d1900) / _CONSTANTS.MilliSecondsInDay);
  return diff + (diff > 59 ? 2 : 1);
} // Copyright 2015 Peter W Moresi
},{"./CONSTANTS":19,"./ERROR":29,"./ISDATE":49}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIN = SIN;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SIN calculates the sinine of a value.
// Copyright 2015 Peter W Moresi

function SIN(value) {

  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  return Math.sin(value);
}
},{"./ERROR":29,"./ISNUMBER":57}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SORT = SORT;

var _ISREF = require('./ISREF');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SORT a reference or an array.
//
// The criteria may use 1 of several forms:
//
// SORT(reference(reference: Array, ...criteria : List<string>)
// SORT(reference(reference: Range, ...criteria : List<string>)
//
// The List<function> will be reduced into a single function.
//
// The list<string> will also be reduced into a single function which
// interprets the strings as pairs. The odd items are fields and the
// even ones are direction (ASC|DESC).
// Copyright 2015 Peter W Moresi

function SORT(ref) {
  for (var _len = arguments.length, criteria = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    criteria[_key - 1] = arguments[_key];
  }

  // reduce the criteria array into a function
  var makeComparer = function makeComparer() {
    return function (a, b) {
      var result = 0;
      for (var i = 0; i < criteria.length; i + 2) {
        var field = typeof criteria[i] === 'string' ? criteria[i] : criteria[i] - 1,
            order = criteria[i + 1];

        if (a[field] < b[field]) {
          return order ? -1 : 1;
        } else {
          return order ? 1 : -1;
        }
      }

      return result;
    };
  };

  if ((0, _ISREF.ISREF)(ref) || Array.isArray(ref)) {
    return ref.sort(makeComparer());
  }

  return _ERROR2.default.na;
}
},{"./ERROR":29,"./ISREF":59}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SPLIT = SPLIT;
// Copyright 2015 Peter W Moresi

// SPLIT `text` given a `delimiter`.
function SPLIT(text, delimiter) {
  return text.split(delimiter);
}
},{}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBSTITUTE = SUBSTITUTE;
// Copyright 2015 Peter W Moresi

// SUBSTITUTE `old_text` with `new_text` a given number of occurrences in `text`.
function SUBSTITUTE(text, old_text, new_text, occurrence) {
  if (!text || !old_text || !new_text) {
    return text;
  } else if (occurrence === undefined) {
    return text.replace(new RegExp(old_text, 'g'), new_text);
  } else {
    var index = 0;
    var i = 0;
    while (text.indexOf(old_text, index) > 0) {
      index = text.indexOf(old_text, index + 1);
      i++;
      if (i === occurrence) {
        return text.substring(0, index) + new_text + text.substring(index + old_text.length);
      }
    }
  }
}
},{}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBTRACT = SUBTRACT;
// Copyright 2015 Peter W Moresi

// SUBTRACT computes a minus b.
function SUBTRACT(a, b) {
  return a - b;
}
},{}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUM = SUM;

var _FLATTEN = require('./FLATTEN');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SUM a given list of `numbers`
// Copyright 2015 Peter W Moresi

function SUM() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)((0, _FLATTEN.FLATTEN)(numbers)).reduce(function (a, b) {
    if (typeof b !== 'number') {
      return _ERROR2.default.value;
    }
    return a + b;
  });
}
},{"./ERROR":29,"./FLATTEN":33}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH = SWITCH;

var _COND = require('./COND');

// SWITCH is alias for COND
function SWITCH() {
  return _COND.COND.apply(undefined, arguments);
} // Copyright 2015 Peter W Moresi

;
},{"./COND":18}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TAN = TAN;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TAN computes the tagent of a value.
// Copyright 2015 Peter W Moresi

function TAN(value) {

  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  return Math.tan(value);
}
},{"./ERROR":29,"./ISNUMBER":57}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TAU = TAU;

var _CONSTANTS = require('./CONSTANTS');

// TAU returns the universal circle constant
function TAU() {
  return _CONSTANTS.τ;
} // Copyright 2015 Peter W Moresi
},{"./CONSTANTS":19}],99:[function(require,module,exports){
// Copyright 2015 Peter W Moresi
// based heavily on code from socialcalc
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT = TEXT;

var _CONSTANTS = require('./CONSTANTS');

var _PARSEDATE = require('./PARSEDATE');

var FormatNumber = {};

FormatNumber.format_definitions = {}; // Parsed formats are stored here globally

// Other constants

FormatNumber.commands = {
  copy: 1, color: 2, integer_placeholder: 3, fraction_placeholder: 4, decimal: 5,
  currency: 6, general: 7, separator: 8, date: 9, comparison: 10, section: 11, style: 12
};

/* *******************

result = FormatNumber.formatNumberWithFormat = function(rawvalue, format_string, currency_char)

************************* */

FormatNumber.formatNumberWithFormat = function (rawvalue, format_string, currency_char) {

  var scfn = FormatNumber;

  var op, operandstr, fromend, cval, operandstrlc;
  var startval, estartval;
  var hrs, mins, secs, ehrs, emins, esecs, ampmstr, ymd;
  var minOK, mpos, mspos;
  var result = '';
  var format;
  var section, gotcomparison, compop, compval, cpos, oppos;
  var sectioninfo;
  var i, decimalscale, scaledvalue, strvalue, strparts, integervalue, fractionvalue;
  var integerdigits2, integerpos, fractionpos, textcolor, textstyle, separatorchar, decimalchar;
  var value; // working copy to change sign, etc.

  rawvalue = rawvalue - 0; // make sure a number
  value = rawvalue;
  if (!isFinite(value)) return 'NaN';

  var negativevalue = value < 0 ? 1 : 0; // determine sign, etc.
  if (negativevalue) value = -value;
  var zerovalue = value == 0 ? 1 : 0;

  currency_char = currency_char || _CONSTANTS.DefaultCurrency;

  FormatNumber.parse_format_string(scfn.format_definitions, format_string); // make sure format is parsed
  //console.log("format_string", format_string, format)
  format = scfn.format_definitions[format_string]; // Get format structure
  //console.log("format", format)

  if (!format) throw 'Format not parsed error.';

  section = format.sectioninfo.length - 1; // get number of sections - 1

  // has comparisons - determine which section
  if (format.hascomparison) {
    section = 0; // set to which section we will use
    gotcomparison = 0; // this section has no comparison
    for (cpos = 0;; cpos++) {
      // scan for comparisons
      op = format.operators[cpos];
      operandstr = format.operands[cpos]; // get next operator and operand

      // at end with no match
      if (!op) {
        // if comparison but no match
        if (gotcomparison) {
          format_string = 'General'; // use default of General
          scfn.parse_format_string(scfn.format_definitions, format_string);
          format = scfn.format_definitions[format_string];
          section = 0;
        }
        break; // if no comparision, matches on this section
      }
      // end of section
      if (op == scfn.commands.section) {
        if (!gotcomparison) {
          // no comparison, so it's a match
          break;
        }
        gotcomparison = 0;
        section++; // check out next one
        continue;
      }
      // found a comparison - do we meet it?
      if (op == scfn.commands.comparison) {
        i = operandstr.indexOf(':');
        compop = operandstr.substring(0, i);
        compval = operandstr.substring(i + 1) - 0;
        if (compop == '<' && rawvalue < compval || compop == '<=' && rawvalue <= compval || compop == '=' && rawvalue == compval || compop == '<>' && rawvalue != compval || compop == '>=' && rawvalue >= compval || compop == '>' && rawvalue > compval) {
          break;
        }
        gotcomparison = 1;
      }
    }
  }
  // more than one section (separated by ";")
  else if (section > 0) {
      // two sections
      if (section == 1) {
        if (negativevalue) {
          negativevalue = 0; // sign will provided by section, not automatically
          section = 1; // use second section for negative values
        } else {
            section = 0; // use first for all others
          }
      }
      // three sections
      else if (section == 2) {
          if (negativevalue) {
            negativevalue = 0; // sign will provided by section, not automatically
            section = 1; // use second section for negative values
          } else if (zerovalue) {
              section = 2; // use third section for zero values
            } else {
                section = 0; // use first for positive
              }
        }
    }

  sectioninfo = format.sectioninfo[section]; // look at values for our section

  if (sectioninfo.commas > 0) {
    // scale by thousands
    for (i = 0; i < sectioninfo.commas; i++) {
      value /= 1000;
    }
  }
  if (sectioninfo.percent > 0) {
    // do percent scaling
    for (i = 0; i < sectioninfo.percent; i++) {
      value *= 100;
    }
  }

  decimalscale = 1; // cut down to required number of decimal digits
  for (i = 0; i < sectioninfo.fractiondigits; i++) {
    decimalscale *= 10;
  }
  scaledvalue = Math.floor(value * decimalscale + 0.5);
  scaledvalue = scaledvalue / decimalscale;

  if (typeof scaledvalue != 'number') return 'NaN';
  if (!isFinite(scaledvalue)) return 'NaN';

  strvalue = scaledvalue + ''; // convert to string (Number.toFixed doesn't do all we need)

  //   strvalue = value.toFixed(sectioninfo.fractiondigits); // cut down to required number of decimal digits
  // and convert to string

  if (scaledvalue == 0 && (sectioninfo.fractiondigits || sectioninfo.integerdigits)) {
    negativevalue = 0; // no "-0" unless using multiple sections or General
  }

  //console.log(rawvalue+'')

  // converted to scientific notation
  if (strvalue.indexOf('e') >= 0) {
    return rawvalue + ''; // Just return plain converted raw value
  }

  strparts = strvalue.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/); // get integer and fraction parts
  if (!strparts) return 'NaN'; // if not a number
  integervalue = strparts[1];
  if (!integervalue || integervalue == '0') integervalue = '';
  fractionvalue = strparts[2];
  if (!fractionvalue) fractionvalue = '';

  // there are date placeholders
  if (sectioninfo.hasdate) {
    //console.log('hasdate')
    // bad date
    if (rawvalue < 0) {
      return '??-???-?? ??:??:??';
    }
    startval = (rawvalue - Math.floor(rawvalue)) * _CONSTANTS.SecondsInDay; // get date/time parts
    estartval = rawvalue * _CONSTANTS.SecondsInDay; // do elapsed time version, too
    hrs = Math.floor(startval / _CONSTANTS.SecondsInHour);
    ehrs = Math.floor(estartval / _CONSTANTS.SecondsInHour);
    startval = startval - hrs * _CONSTANTS.SecondsInHour;
    mins = Math.floor(startval / 60);
    emins = Math.floor(estartval / 60);
    secs = startval - mins * 60;
    decimalscale = 1; // round appropriately depending if there is ss.0
    for (i = 0; i < sectioninfo.fractiondigits; i++) {
      decimalscale *= 10;
    }
    secs = Math.floor(secs * decimalscale + 0.5);
    secs = secs / decimalscale;
    esecs = Math.floor(estartval * decimalscale + 0.5);
    esecs = esecs / decimalscale;
    if (secs >= 60) {
      // handle round up into next second, minute, etc.
      secs = 0;
      mins++;emins++;
      if (mins >= 60) {
        mins = 0;
        hrs++;ehrs++;
        if (hrs >= 24) {
          hrs = 0;
          rawvalue++;
        }
      }
    }
    fractionvalue = secs - Math.floor(secs) + ''; // for "hh:mm:ss.000"
    fractionvalue = fractionvalue.substring(2); // skip "0."

    ymd = (0, _PARSEDATE.PARSEDATE)(rawvalue);
    ymd = {
      year: ymd.getFullYear(),
      month: ymd.getMonth() + 1,
      day: ymd.getDate()
    };

    minOK = 0; // says "m" can be minutes if true
    mspos = sectioninfo.sectionstart; // m scan position in ops
    for (;; mspos++) {
      // scan for "m" and "mm" to see if any minutes fields, and am/pm
      op = format.operators[mspos];
      operandstr = format.operands[mspos]; // get next operator and operand
      if (!op) break; // don't go past end
      if (op == scfn.commands.section) break;
      if (op == scfn.commands.date) {
        if ((operandstr.toLowerCase() == 'am/pm' || operandstr.toLowerCase() == 'a/p') && !ampmstr) {
          if (hrs >= 12) {
            hrs -= 12;
            ampmstr = operandstr.toLowerCase() == 'a/p' ? _CONSTANTS.PM1 : _CONSTANTS.PM; // "P" : "PM";
          } else {
              ampmstr = operandstr.toLowerCase() == 'a/p' ? _CONSTANTS.AM1 : _CONSTANTS.AM; // "A" : "AM";
            }
          if (operandstr.indexOf(ampmstr) < 0) ampmstr = ampmstr.toLowerCase(); // have case match case in format
        }
        if (minOK && (operandstr == 'm' || operandstr == 'mm')) {
          format.operands[mspos] += 'in'; // turn into "min" or "mmin"
        }
        if (operandstr.charAt(0) == 'h') {
          minOK = 1; // m following h or hh or [h] is minutes not months
        } else {
            minOK = 0;
          }
      } else if (op != scfn.commands.copy) {
        // copying chars can be between h and m
        minOK = 0;
      }
    }
    minOK = 0;
    for (--mspos;; mspos--) {
      // scan other way for s after m
      op = format.operators[mspos];
      operandstr = format.operands[mspos]; // get next operator and operand
      if (!op) break; // don't go past end
      if (op == scfn.commands.section) break;
      if (op == scfn.commands.date) {
        if (minOK && (operandstr == 'm' || operandstr == 'mm')) {
          format.operands[mspos] += 'in'; // turn into "min" or "mmin"
        }
        if (operandstr == 'ss') {
          minOK = 1; // m before ss is minutes not months
        } else {
            minOK = 0;
          }
      } else if (op != scfn.commands.copy) {
        // copying chars can be between ss and m
        minOK = 0;
      }
    }
  }

  integerdigits2 = 0; // init counters, etc.
  integerpos = 0;
  fractionpos = 0;
  textcolor = '';
  textstyle = '';
  separatorchar = _CONSTANTS.SeparatorChar;
  if (separatorchar.indexOf(' ') >= 0) separatorchar = separatorchar.replace(/ /g, ' ');
  decimalchar = _CONSTANTS.DecimalChar;
  if (decimalchar.indexOf(' ') >= 0) decimalchar = decimalchar.replace(/ /g, ' ');

  oppos = sectioninfo.sectionstart;

  while (op = format.operators[oppos]) {
    // execute format
    operandstr = format.operands[oppos++]; // get next operator and operand

    if (op == scfn.commands.copy) {
      // put char in result
      result += operandstr;
    } else if (op == scfn.commands.color) {
      // set color
      textcolor = operandstr;
    } else if (op == scfn.commands.style) {
      // set style
      textstyle = operandstr;
    } else if (op == scfn.commands.integer_placeholder) {
      // insert number part
      if (negativevalue) {
        result += '-';
        negativevalue = 0;
      }
      integerdigits2++;
      if (integerdigits2 == 1) {
        // first one
        if (integervalue.length > sectioninfo.integerdigits) {
          // see if integer wider than field
          for (; integerpos < integervalue.length - sectioninfo.integerdigits; integerpos++) {
            result += integervalue.charAt(integerpos);
            if (sectioninfo.thousandssep) {
              // see if this is a separator position
              fromend = integervalue.length - integerpos - 1;
              if (fromend > 2 && fromend % 3 == 0) {
                result += separatorchar;
              }
            }
          }
        }
      }
      if (integervalue.length < sectioninfo.integerdigits && integerdigits2 <= sectioninfo.integerdigits - integervalue.length) {
        // field is wider than value
        if (operandstr == '0' || operandstr == '?') {
          // fill with appropriate characters
          result += operandstr == '0' ? '0' : ' ';
          if (sectioninfo.thousandssep) {
            // see if this is a separator position
            fromend = sectioninfo.integerdigits - integerdigits2;
            if (fromend > 2 && fromend % 3 == 0) {
              result += separatorchar;
            }
          }
        }
      } else {
        // normal integer digit - add it
        result += integervalue.charAt(integerpos);
        if (sectioninfo.thousandssep) {
          // see if this is a separator position
          fromend = integervalue.length - integerpos - 1;
          if (fromend > 2 && fromend % 3 == 0) {
            result += separatorchar;
          }
        }
        integerpos++;
      }
    } else if (op == scfn.commands.fraction_placeholder) {
      // add fraction part of number
      if (fractionpos >= fractionvalue.length) {
        if (operandstr == '0' || operandstr == '?') {
          result += operandstr == '0' ? '0' : ' ';
        }
      } else {
        result += fractionvalue.charAt(fractionpos);
      }
      fractionpos++;
    } else if (op == scfn.commands.decimal) {
      // decimal point
      if (negativevalue) {
        result += '-';
        negativevalue = 0;
      }
      result += decimalchar;
    } else if (op == scfn.commands.currency) {
      // currency symbol
      if (negativevalue) {
        result += '-';
        negativevalue = 0;
      }
      result += operandstr;
    } else if (op == scfn.commands.general) {
      // insert "General" conversion

      // *** Cut down number of significant digits to avoid floating point artifacts:

      if (value != 0) {
        // only if non-zero
        var factor = Math.floor(Math.LOG10E * Math.log(value)); // get integer magnitude as a power of 10
        factor = Math.pow(10, 13 - factor); // turn into scaling factor
        value = Math.floor(factor * value + 0.5) / factor; // scale positive value, round, undo scaling
        if (!isFinite(value)) return 'NaN';
      }
      if (negativevalue) {
        result += '-';
      }
      strvalue = value + ''; // convert original value to string
      if (strvalue.indexOf('e') >= 0) {
        // converted to scientific notation
        result += strvalue;
        continue;
      }
      strparts = strvalue.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/); // get integer and fraction parts
      integervalue = strparts[1];
      if (!integervalue || integervalue == '0') integervalue = '';
      fractionvalue = strparts[2];
      if (!fractionvalue) fractionvalue = '';
      integerpos = 0;
      fractionpos = 0;
      if (integervalue.length) {
        for (; integerpos < integervalue.length; integerpos++) {
          result += integervalue.charAt(integerpos);
          if (sectioninfo.thousandssep) {
            // see if this is a separator position
            fromend = integervalue.length - integerpos - 1;
            if (fromend > 2 && fromend % 3 == 0) {
              result += separatorchar;
            }
          }
        }
      } else {
        result += '0';
      }
      if (fractionvalue.length) {
        result += decimalchar;
        for (; fractionpos < fractionvalue.length; fractionpos++) {
          result += fractionvalue.charAt(fractionpos);
        }
      }
    } else if (op == scfn.commands.date) {
      // date placeholder
      operandstrlc = operandstr.toLowerCase();
      if (operandstrlc == 'y' || operandstrlc == 'yy') {
        result += (ymd.year + '').substring(2);
      } else if (operandstrlc == 'yyyy') {
        result += ymd.year + '';
      } else if (operandstrlc == 'd') {
        result += ymd.day + '';
      } else if (operandstrlc == 'dd') {
        cval = 1000 + ymd.day;
        result += (cval + '').substr(2);
      } else if (operandstrlc == 'ddd') {
        cval = Math.floor(rawvalue + 6) % 7;
        result += _CONSTANTS.DayNames3[cval];
      } else if (operandstrlc == 'dddd') {
        cval = Math.floor(rawvalue + 6) % 7;
        result += _CONSTANTS.DayNames[cval];
      } else if (operandstrlc == 'm') {
        result += ymd.month + '';
      } else if (operandstrlc == 'mm') {
        cval = 1000 + ymd.month;
        result += (cval + '').substr(2);
      } else if (operandstrlc == 'mmm') {
        result += _CONSTANTS.MonthNames3[ymd.month - 1];
      } else if (operandstrlc == 'mmmm') {
        result += _CONSTANTS.MonthNames[ymd.month - 1];
      } else if (operandstrlc == 'mmmmm') {
        result += _CONSTANTS.MonthNames[ymd.month - 1].charAt(0);
      } else if (operandstrlc == 'h') {
        result += hrs + '';
      } else if (operandstrlc == 'h]') {
        result += ehrs + '';
      } else if (operandstrlc == 'mmin') {
        cval = 1000 + mins + '';
        result += cval.substr(2);
      } else if (operandstrlc == 'mm]') {
        if (emins < 100) {
          cval = 1000 + emins + '';
          result += cval.substr(2);
        } else {
          result += emins + '';
        }
      } else if (operandstrlc == 'min') {
        result += mins + '';
      } else if (operandstrlc == 'm]') {
        result += emins + '';
      } else if (operandstrlc == 'hh') {
        cval = 1000 + hrs + '';
        result += cval.substr(2);
      } else if (operandstrlc == 's') {
        cval = Math.floor(secs);
        result += cval + '';
      } else if (operandstrlc == 'ss') {
        cval = 1000 + Math.floor(secs) + '';
        result += cval.substr(2);
      } else if (operandstrlc == 'am/pm' || operandstrlc == 'a/p') {
        result += ampmstr;
      } else if (operandstrlc == 'ss]') {
        if (esecs < 100) {
          cval = 1000 + Math.floor(esecs) + '';
          result += cval.substr(2);
        } else {
          cval = Math.floor(esecs);
          result += cval + '';
        }
      }
    } else if (op == scfn.commands.section) {
      // end of section
      break;
    } else if (op == scfn.commands.comparison) {
      // ignore
      continue;
    } else {
      result += '!! Parse error.!!';
    }
  }

  if (textcolor) {
    result = '<span style="color:' + textcolor + ';">' + result + '</span>';
  }
  if (textstyle) {
    result = '<span style="' + textstyle + ';">' + result + '</span>';
  }

  //console.log(result)

  return result;
};

/* *******************

FormatNumber.parse_format_string(format_defs, format_string)

Takes a format string (e.g., "#,##0.00_);(#,##0.00)") and fills in format_defs with the parsed info

format_defs
["#,##0.0"]->{} - elements in the hash are one hash for each format
.operators->[] - array of operators from parsing the format string (each a number)
.operands->[] - array of corresponding operators (each usually a string)
.sectioninfo->[] - one hash for each section of the format
.start
.integerdigits
.fractiondigits
.commas
.percent
.thousandssep
.hasdates
.hascomparison - true if any section has [<100], etc.

************************* */

FormatNumber.parse_format_string = function (format_defs, format_string) {

  var scfn = FormatNumber;

  var format, section, sectioninfo;
  var integerpart = 1; // start out in integer part
  var lastwasinteger; // last char was an integer placeholder
  var lastwasslash; // last char was a backslash - escaping following character
  var lastwasasterisk; // repeat next char
  var lastwasunderscore; // last char was _ which picks up following char for width
  var inquote, quotestr; // processing a quoted string
  var inbracket, bracketstr, bracketdata; // processing a bracketed string
  var ingeneral, gpos; // checks for characters "General"
  var ampmstr, part; // checks for characters "A/P" and "AM/PM"
  var indate; // keeps track of date/time placeholders
  var chpos; // character position being looked at
  var ch; // character being looked at

  if (format_defs[format_string]) return; // already defined - nothing to do

  format = { operators: [], operands: [], sectioninfo: [{}] }; // create info structure for this format
  format_defs[format_string] = format; // add to other format definitions

  section = 0; // start with section 0
  sectioninfo = format.sectioninfo[section]; // get reference to info for current section
  sectioninfo.sectionstart = 0; // position in operands that starts this section
  sectioninfo.integerdigits = 0; // number of integer-part placeholders
  sectioninfo.fractiondigits = 0; // fraction placeholders
  sectioninfo.commas = 0; // commas encountered, to handle scaling
  sectioninfo.percent = 0; // times to scale by 100

  for (chpos = 0; chpos < format_string.length; chpos++) {
    // parse
    ch = format_string.charAt(chpos); // get next char to examine
    if (inquote) {
      if (ch == '"') {
        inquote = 0;
        format.operators.push(scfn.commands.copy);
        format.operands.push(quotestr);
        continue;
      }
      quotestr += ch;
      continue;
    }
    if (inbracket) {
      if (ch == ']') {
        inbracket = 0;
        bracketdata = FormatNumber.parse_format_bracket(bracketstr);
        if (bracketdata.operator == scfn.commands.separator) {
          sectioninfo.thousandssep = 1; // explicit [,]
          continue;
        }
        if (bracketdata.operator == scfn.commands.date) {
          sectioninfo.hasdate = 1;
        }
        if (bracketdata.operator == scfn.commands.comparison) {
          format.hascomparison = 1;
        }
        format.operators.push(bracketdata.operator);
        format.operands.push(bracketdata.operand);
        continue;
      }
      bracketstr += ch;
      continue;
    }

    if (lastwasslash) {
      format.operators.push(scfn.commands.copy);
      format.operands.push(ch);
      lastwasslash = false;
      continue;
    }

    if (lastwasasterisk) {
      format.operators.push(scfn.commands.copy);
      format.operands.push(ch + ch + ch + ch + ch); // do 5 of them since no real tabs
      lastwasasterisk = false;
      continue;
    }

    if (lastwasunderscore) {
      format.operators.push(scfn.commands.copy);
      format.operands.push(' ');
      lastwasunderscore = false;
      continue;
    }

    if (ingeneral) {
      if ('general'.charAt(ingeneral) == ch.toLowerCase()) {
        ingeneral++;
        if (ingeneral == 7) {
          format.operators.push(scfn.commands.general);
          format.operands.push(ch);
          ingeneral = 0;
        }
        continue;
      }
      ingeneral = 0;
    }

    // last char was part of a date placeholder
    if (indate) {
      //console.log('foo')
      if (indate.charAt(0) == ch) {
        // another of the same char
        indate += ch; // accumulate it
        continue;
      }
      format.operators.push(scfn.commands.date); // something else, save date info
      format.operands.push(indate);
      sectioninfo.hasdate = 1;
      indate = '';
    }
    if (ampmstr) {
      ampmstr += ch;
      part = ampmstr.toLowerCase();
      if (part != 'am/pm'.substring(0, part.length) && part != 'a/p'.substring(0, part.length)) {
        ampstr = '';
      } else if (part == 'am/pm' || part == 'a/p') {
        format.operators.push(scfn.commands.date);
        format.operands.push(ampmstr);
        ampmstr = '';
      }
      continue;
    }
    if (ch == '#' || ch == '0' || ch == '?') {
      // placeholder
      if (integerpart) {
        sectioninfo.integerdigits++;
        if (sectioninfo.commas) {
          // comma inside of integer placeholders
          sectioninfo.thousandssep = 1; // any number is thousands separator
          sectioninfo.commas = 0; // reset count of "thousand" factors
        }
        lastwasinteger = 1;
        format.operators.push(scfn.commands.integer_placeholder);
        format.operands.push(ch);
      } else {
        sectioninfo.fractiondigits++;
        format.operators.push(scfn.commands.fraction_placeholder);
        format.operands.push(ch);
      }
    } else if (ch == '.') {
      lastwasinteger = 0;
      format.operators.push(scfn.commands.decimal);
      format.operands.push(ch);
      integerpart = 0;
    } else if (ch === '$') {
      lastwasinteger = 0;
      format.operators.push(scfn.commands.currency);
      format.operands.push(ch);
    } else if (ch == ',') {
      if (lastwasinteger) {
        sectioninfo.commas++;
      } else {
        format.operators.push(scfn.commands.copy);
        format.operands.push(ch);
      }
    } else if (ch == '%') {
      lastwasinteger = 0;
      sectioninfo.percent++;
      format.operators.push(scfn.commands.copy);
      format.operands.push(ch);
    } else if (ch == '"') {
      lastwasinteger = 0;
      inquote = 1;
      quotestr = '';
    } else if (ch == '[') {
      lastwasinteger = 0;
      inbracket = 1;
      bracketstr = '';
    } else if (ch == '\\') {
      lastwasslash = 1;
      lastwasinteger = 0;
    } else if (ch == '*') {
      lastwasasterisk = 1;
      lastwasinteger = 0;
    } else if (ch == '_') {
      lastwasunderscore = 1;
      lastwasinteger = 0;
    } else if (ch == ';') {
      section++; // start next section
      format.sectioninfo[section] = {}; // create a new section
      sectioninfo = format.sectioninfo[section]; // get reference to info for current section
      sectioninfo.sectionstart = 1 + format.operators.length; // remember where it starts
      sectioninfo.integerdigits = 0; // number of integer-part placeholders
      sectioninfo.fractiondigits = 0; // fraction placeholders
      sectioninfo.commas = 0; // commas encountered, to handle scaling
      sectioninfo.percent = 0; // times to scale by 100
      integerpart = 1; // reset for new section
      lastwasinteger = 0;
      format.operators.push(scfn.commands.section);
      format.operands.push(ch);
    } else if (ch.toLowerCase() == 'g') {
      ingeneral = 1;
      lastwasinteger = 0;
    } else if (ch.toLowerCase() == 'a') {
      ampmstr = ch;
      lastwasinteger = 0;
    } else if ('dmyhHs'.indexOf(ch) >= 0) {
      //console.log('foo')
      indate = ch;
    } else {
      lastwasinteger = 0;
      format.operators.push(scfn.commands.copy);
      format.operands.push(ch);
    }
  }

  // last char was part of unsaved date placeholder
  if (indate) {
    format.operators.push(scfn.commands.date);
    format.operands.push(indate);
    sectioninfo.hasdate = 1;
  }

  return;
};

/* *******************

bracketdata = FormatNumber.parse_format_bracket(bracketstr)

Takes a bracket contents (e.g., "RED", ">10") and returns an operator and operand

bracketdata->{}
.operator
.operand

************************* */

FormatNumber.parse_format_bracket = function (bracketstr) {

  var scfn = FormatNumber;

  var bracketdata = {};
  var parts;

  // currency
  if (bracketstr.charAt(0) == '$') {
    bracketdata.operator = scfn.commands.currency;
    parts = bracketstr.match(/^\$(.+?)(\-.+?){0,1}$/);
    if (parts) {
      bracketdata.operand = parts[1] || _CONSTANTS.DefaultCurrency || '$';
    } else {
      bracketdata.operand = bracketstr.substring(1) || _CONSTANTS.DefaultCurrency || '$';
    }
  } else if (bracketstr == '?$') {
    bracketdata.operator = scfn.commands.currency;
    bracketdata.operand = '[?$]';
  } else if (_CONSTANTS.AllowedColors[bracketstr.toUpperCase()]) {
    bracketdata.operator = scfn.commands.color;
    bracketdata.operand = _CONSTANTS.AllowedColors[bracketstr.toUpperCase()];
  } else if (parts = bracketstr.match(/^style=([^']*)$/)) {
    // [style=...]
    bracketdata.operator = scfn.commands.style;
    bracketdata.operand = parts[1];
  } else if (bracketstr == ',') {
    bracketdata.operator = scfn.commands.separator;
    bracketdata.operand = bracketstr;
  } else if (AllowedDates[bracketstr.toUpperCase()]) {
    bracketdata.operator = scfn.commands.date;
    bracketdata.operand = AllowedDates[bracketstr.toUpperCase()];
  } else if (parts = bracketstr.match(/^[<>=]/)) {
    // comparison operator
    parts = bracketstr.match(/^([<>=]+)(.+)$/); // split operator and value
    bracketdata.operator = scfn.commands.comparison;
    bracketdata.operand = parts[1] + ':' + parts[2];
  } else {
    // unknown bracket
    bracketdata.operator = scfn.commands.copy;
    bracketdata.operand = '[' + bracketstr + ']';
  }

  return bracketdata;
};

function TEXT(value, format, currency_char) {
  return FormatNumber.formatNumberWithFormat(value, format, currency_char);
}
},{"./CONSTANTS":19,"./PARSEDATE":76}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TRIM = TRIM;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TRIMS returns a string without whitespace at the beginning or end.
function TRIM(text) {
    if (typeof text !== 'string') {
        return _ERROR2.default.value;
    }
    return text.trim();
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNIQUE = UNIQUE;
// Copyright 2015 Peter W Moresi

// UNIQUE reduces an `array` into an array without duplicate values.
function UNIQUE(array) {
  return array.reduce(function (p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
}
},{}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPPER = UPPER;
// Copyright 2015 Peter W Moresi

// UPPER converts a string to upper case
function UPPER(string) {
  return string.toUpperCase();
}
},{}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VLOOKUP = VLOOKUP;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISBLANK = require('./ISBLANK');

var _ISERROR = require('./ISERROR');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// VLOOKUP find a needle in a table searching vertically.
function VLOOKUP(needle, table, index, exactmatch) {

    if ((0, _ISERROR.ISERROR)(needle) || (0, _ISBLANK.ISBLANK)(needle)) {
        return needle;
    }

    index = index || 0;
    exactmatch = exactmatch || false;
    for (var i = 0; i < table.length; i++) {
        var row = table[i];
        if (exactmatch && row[0] === needle || row[0] === needle || typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1) {
            return index < row.length + 1 ? row[index - 1] : row[0];
        }
    }

    return _ERROR2.default.na;
} // Copyright 2015 Peter W Moresi
},{"./ERROR":29,"./ISBLANK":48,"./ISERROR":53}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XOR = XOR;

var _FLATTEN = require('./FLATTEN');

// XOR computes the exclusive or for a given set of `values`.
function XOR() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)(values).reduce(function (a, b) {
    if (b) {
      return a + 1;
    }
    return a;
  }, 0) & 1;
} // Copyright 2015 Peter W Moresi
},{"./FLATTEN":33}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ABS = require('./ABS');

Object.defineProperty(exports, 'ABS', {
  enumerable: true,
  get: function get() {
    return _ABS.ABS;
  }
});

var _ACOS = require('./ACOS');

Object.defineProperty(exports, 'ACOS', {
  enumerable: true,
  get: function get() {
    return _ACOS.ACOS;
  }
});

var _ADD = require('./ADD');

Object.defineProperty(exports, 'ADD', {
  enumerable: true,
  get: function get() {
    return _ADD.ADD;
  }
});

var _AND = require('./AND');

Object.defineProperty(exports, 'AND', {
  enumerable: true,
  get: function get() {
    return _AND.AND;
  }
});

var _AVERAGE = require('./AVERAGE');

Object.defineProperty(exports, 'AVERAGE', {
  enumerable: true,
  get: function get() {
    return _AVERAGE.AVERAGE;
  }
});

var _BIN2DEC = require('./BIN2DEC');

Object.defineProperty(exports, 'BIN2DEC', {
  enumerable: true,
  get: function get() {
    return _BIN2DEC.BIN2DEC;
  }
});

var _CELLINDEX = require('./CELLINDEX');

Object.defineProperty(exports, 'CELLINDEX', {
  enumerable: true,
  get: function get() {
    return _CELLINDEX.CELLINDEX;
  }
});

var _CHANGED = require('./CHANGED');

Object.defineProperty(exports, 'CHANGED', {
  enumerable: true,
  get: function get() {
    return _CHANGED.CHANGED;
  }
});

var _CHOOSE = require('./CHOOSE');

Object.defineProperty(exports, 'CHOOSE', {
  enumerable: true,
  get: function get() {
    return _CHOOSE.CHOOSE;
  }
});

var _CLEAN = require('./CLEAN');

Object.defineProperty(exports, 'CLEAN', {
  enumerable: true,
  get: function get() {
    return _CLEAN.CLEAN;
  }
});

var _CODE = require('./CODE');

Object.defineProperty(exports, 'CODE', {
  enumerable: true,
  get: function get() {
    return _CODE.CODE;
  }
});

var _COLUMN = require('./COLUMN');

Object.defineProperty(exports, 'COLUMN', {
  enumerable: true,
  get: function get() {
    return _COLUMN.COLUMN;
  }
});

var _COLUMNLETTER = require('./COLUMNLETTER');

Object.defineProperty(exports, 'COLUMNLETTER', {
  enumerable: true,
  get: function get() {
    return _COLUMNLETTER.COLUMNLETTER;
  }
});

var _COLUMNNUMBER = require('./COLUMNNUMBER');

Object.defineProperty(exports, 'COLUMNNUMBER', {
  enumerable: true,
  get: function get() {
    return _COLUMNNUMBER.COLUMNNUMBER;
  }
});

var _CONCATENATE = require('./CONCATENATE');

Object.defineProperty(exports, 'CONCATENATE', {
  enumerable: true,
  get: function get() {
    return _CONCATENATE.CONCATENATE;
  }
});

var _COND = require('./COND');

Object.defineProperty(exports, 'COND', {
  enumerable: true,
  get: function get() {
    return _COND.COND;
  }
});

var _IN = require('./IN');

Object.defineProperty(exports, 'CONTAINS', {
  enumerable: true,
  get: function get() {
    return _IN.CONTAINS;
  }
});

var _COS = require('./COS');

Object.defineProperty(exports, 'COS', {
  enumerable: true,
  get: function get() {
    return _COS.COS;
  }
});

var _DATE = require('./DATE');

Object.defineProperty(exports, 'DATE', {
  enumerable: true,
  get: function get() {
    return _DATE.DATE;
  }
});

var _DATEVALUE = require('./DATEVALUE');

Object.defineProperty(exports, 'DATEVALUE', {
  enumerable: true,
  get: function get() {
    return _DATEVALUE.DATEVALUE;
  }
});

var _DATEDIF = require('./DATEDIF');

Object.defineProperty(exports, 'DATEDIF', {
  enumerable: true,
  get: function get() {
    return _DATEDIF.DATEDIF;
  }
});

var _DAYS = require('./DAYS360');

Object.defineProperty(exports, 'DAYS360', {
  enumerable: true,
  get: function get() {
    return _DAYS.DAYS360;
  }
});

var _DEC2BIN = require('./DEC2BIN');

Object.defineProperty(exports, 'DEC2BIN', {
  enumerable: true,
  get: function get() {
    return _DEC2BIN.DEC2BIN;
  }
});

var _DIFF = require('./DIFF');

Object.defineProperty(exports, 'DIFF', {
  enumerable: true,
  get: function get() {
    return _DIFF.DIFF;
  }
});

var _DIVIDE = require('./DIVIDE');

Object.defineProperty(exports, 'DIVIDE', {
  enumerable: true,
  get: function get() {
    return _DIVIDE.DIVIDE;
  }
});

var _EQ = require('./EQ');

Object.defineProperty(exports, 'EQ', {
  enumerable: true,
  get: function get() {
    return _EQ.EQ;
  }
});

var _EXACT = require('./EXACT');

Object.defineProperty(exports, 'EXACT', {
  enumerable: true,
  get: function get() {
    return _EXACT.EXACT;
  }
});

var _FILTER = require('./FILTER');

Object.defineProperty(exports, 'FILTER', {
  enumerable: true,
  get: function get() {
    return _FILTER.FILTER;
  }
});

var _FIND = require('./FIND');

Object.defineProperty(exports, 'FIND', {
  enumerable: true,
  get: function get() {
    return _FIND.FIND;
  }
});

var _FLATTEN = require('./FLATTEN');

Object.defineProperty(exports, 'FLATTEN', {
  enumerable: true,
  get: function get() {
    return _FLATTEN.FLATTEN;
  }
});

var _GT = require('./GT');

Object.defineProperty(exports, 'GT', {
  enumerable: true,
  get: function get() {
    return _GT.GT;
  }
});

var _GTE = require('./GTE');

Object.defineProperty(exports, 'GTE', {
  enumerable: true,
  get: function get() {
    return _GTE.GTE;
  }
});

var _GUID = require('./GUID');

Object.defineProperty(exports, 'GUID', {
  enumerable: true,
  get: function get() {
    return _GUID.GUID;
  }
});

var _HLOOKUP = require('./HLOOKUP');

Object.defineProperty(exports, 'HLOOKUP', {
  enumerable: true,
  get: function get() {
    return _HLOOKUP.HLOOKUP;
  }
});

var _IF = require('./IF');

Object.defineProperty(exports, 'IF', {
  enumerable: true,
  get: function get() {
    return _IF.IF;
  }
});

var _IFBLANK = require('./IFBLANK');

Object.defineProperty(exports, 'IFBLANK', {
  enumerable: true,
  get: function get() {
    return _IFBLANK.IFBLANK;
  }
});

var _IFEMPTY = require('./IFEMPTY');

Object.defineProperty(exports, 'IFEMPTY', {
  enumerable: true,
  get: function get() {
    return _IFEMPTY.IFEMPTY;
  }
});

var _IFERROR = require('./IFERROR');

Object.defineProperty(exports, 'IFERROR', {
  enumerable: true,
  get: function get() {
    return _IFERROR.IFERROR;
  }
});

var _IFNA = require('./IFNA');

Object.defineProperty(exports, 'IFNA', {
  enumerable: true,
  get: function get() {
    return _IFNA.IFNA;
  }
});
Object.defineProperty(exports, 'IN', {
  enumerable: true,
  get: function get() {
    return _IN.IN;
  }
});

var _INDEX2COL = require('./INDEX2COL');

Object.defineProperty(exports, 'INDEX2COL', {
  enumerable: true,
  get: function get() {
    return _INDEX2COL.INDEX2COL;
  }
});

var _INDEX2ROW = require('./INDEX2ROW');

Object.defineProperty(exports, 'INDEX2ROW', {
  enumerable: true,
  get: function get() {
    return _INDEX2ROW.INDEX2ROW;
  }
});

var _INDIRECT = require('./INDIRECT');

Object.defineProperty(exports, 'INDIRECT', {
  enumerable: true,
  get: function get() {
    return _INDIRECT.INDIRECT;
  }
});

var _ISARRAY = require('./ISARRAY');

Object.defineProperty(exports, 'ISARRAY', {
  enumerable: true,
  get: function get() {
    return _ISARRAY.ISARRAY;
  }
});

var _ISBLANK = require('./ISBLANK');

Object.defineProperty(exports, 'ISBLANK', {
  enumerable: true,
  get: function get() {
    return _ISBLANK.ISBLANK;
  }
});

var _ISDATE = require('./ISDATE');

Object.defineProperty(exports, 'ISDATE', {
  enumerable: true,
  get: function get() {
    return _ISDATE.ISDATE;
  }
});

var _ISEMAIL = require('./ISEMAIL');

Object.defineProperty(exports, 'ISEMAIL', {
  enumerable: true,
  get: function get() {
    return _ISEMAIL.ISEMAIL;
  }
});

var _ISEMPTY = require('./ISEMPTY');

Object.defineProperty(exports, 'ISEMPTY', {
  enumerable: true,
  get: function get() {
    return _ISEMPTY.ISEMPTY;
  }
});

var _ISERROR = require('./ISERROR');

Object.defineProperty(exports, 'ISERROR', {
  enumerable: true,
  get: function get() {
    return _ISERROR.ISERROR;
  }
});

var _ISEVEN = require('./ISEVEN');

Object.defineProperty(exports, 'ISEVEN', {
  enumerable: true,
  get: function get() {
    return _ISEVEN.ISEVEN;
  }
});

var _ISFUNCTION = require('./ISFUNCTION');

Object.defineProperty(exports, 'ISFUNCTION', {
  enumerable: true,
  get: function get() {
    return _ISFUNCTION.ISFUNCTION;
  }
});

var _ISNA = require('./ISNA');

Object.defineProperty(exports, 'ISNA', {
  enumerable: true,
  get: function get() {
    return _ISNA.ISNA;
  }
});

var _ISNUMBER = require('./ISNUMBER');

Object.defineProperty(exports, 'ISNUMBER', {
  enumerable: true,
  get: function get() {
    return _ISNUMBER.ISNUMBER;
  }
});

var _ISODD = require('./ISODD');

Object.defineProperty(exports, 'ISODD', {
  enumerable: true,
  get: function get() {
    return _ISODD.ISODD;
  }
});

var _ISREF = require('./ISREF');

Object.defineProperty(exports, 'ISREF', {
  enumerable: true,
  get: function get() {
    return _ISREF.ISREF;
  }
});

var _ISTEXT = require('./ISTEXT');

Object.defineProperty(exports, 'ISTEXT', {
  enumerable: true,
  get: function get() {
    return _ISTEXT.ISTEXT;
  }
});

var _ISURL = require('./ISURL');

Object.defineProperty(exports, 'ISURL', {
  enumerable: true,
  get: function get() {
    return _ISURL.ISURL;
  }
});

var _LEN = require('./LEN');

Object.defineProperty(exports, 'LEN', {
  enumerable: true,
  get: function get() {
    return _LEN.LEN;
  }
});

var _LOOKUP = require('./LOOKUP');

Object.defineProperty(exports, 'LOOKUP', {
  enumerable: true,
  get: function get() {
    return _LOOKUP.LOOKUP;
  }
});

var _LOWER = require('./LOWER');

Object.defineProperty(exports, 'LOWER', {
  enumerable: true,
  get: function get() {
    return _LOWER.LOWER;
  }
});

var _LT = require('./LT');

Object.defineProperty(exports, 'LT', {
  enumerable: true,
  get: function get() {
    return _LT.LT;
  }
});

var _LTE = require('./LTE');

Object.defineProperty(exports, 'LTE', {
  enumerable: true,
  get: function get() {
    return _LTE.LTE;
  }
});

var _MIN = require('./MIN');

Object.defineProperty(exports, 'MIN', {
  enumerable: true,
  get: function get() {
    return _MIN.MIN;
  }
});

var _MAX = require('./MAX');

Object.defineProperty(exports, 'MAX', {
  enumerable: true,
  get: function get() {
    return _MAX.MAX;
  }
});

var _MULTIPLY = require('./MULTIPLY');

Object.defineProperty(exports, 'MULTIPLY', {
  enumerable: true,
  get: function get() {
    return _MULTIPLY.MULTIPLY;
  }
});

var _N = require('./N');

Object.defineProperty(exports, 'N', {
  enumerable: true,
  get: function get() {
    return _N.N;
  }
});

var _NE = require('./NE');

Object.defineProperty(exports, 'NE', {
  enumerable: true,
  get: function get() {
    return _NE.NE;
  }
});

var _NOT = require('./NOT');

Object.defineProperty(exports, 'NOT', {
  enumerable: true,
  get: function get() {
    return _NOT.NOT;
  }
});

var _OCT2DEC = require('./OCT2DEC');

Object.defineProperty(exports, 'OCT2DEC', {
  enumerable: true,
  get: function get() {
    return _OCT2DEC.OCT2DEC;
  }
});

var _OR = require('./OR');

Object.defineProperty(exports, 'OR', {
  enumerable: true,
  get: function get() {
    return _OR.OR;
  }
});

var _PARSEBOOL = require('./PARSEBOOL');

Object.defineProperty(exports, 'PARSEBOOL', {
  enumerable: true,
  get: function get() {
    return _PARSEBOOL.PARSEBOOL;
  }
});

var _PARSEDATE = require('./PARSEDATE');

Object.defineProperty(exports, 'PARSEDATE', {
  enumerable: true,
  get: function get() {
    return _PARSEDATE.PARSEDATE;
  }
});

var _PI = require('./PI');

Object.defineProperty(exports, 'PI', {
  enumerable: true,
  get: function get() {
    return _PI.PI;
  }
});

var _PMT = require('./PMT');

Object.defineProperty(exports, 'PMT', {
  enumerable: true,
  get: function get() {
    return _PMT.PMT;
  }
});

var _POWER = require('./POWER');

Object.defineProperty(exports, 'POWER', {
  enumerable: true,
  get: function get() {
    return _POWER.POWER;
  }
});

var _REF = require('./REF');

Object.defineProperty(exports, 'REF', {
  enumerable: true,
  get: function get() {
    return _REF.REF;
  }
});

var _REPLACE = require('./REPLACE');

Object.defineProperty(exports, 'REPLACE', {
  enumerable: true,
  get: function get() {
    return _REPLACE.REPLACE;
  }
});

var _REPT = require('./REPT');

Object.defineProperty(exports, 'REPT', {
  enumerable: true,
  get: function get() {
    return _REPT.REPT;
  }
});

var _RIGHT = require('./RIGHT');

Object.defineProperty(exports, 'RIGHT', {
  enumerable: true,
  get: function get() {
    return _RIGHT.RIGHT;
  }
});

var _ROUND = require('./ROUND');

Object.defineProperty(exports, 'ROUND', {
  enumerable: true,
  get: function get() {
    return _ROUND.ROUND;
  }
});

var _ROUNDUP = require('./ROUNDUP');

Object.defineProperty(exports, 'ROUNDUP', {
  enumerable: true,
  get: function get() {
    return _ROUNDUP.ROUNDUP;
  }
});

var _SEARCH = require('./SEARCH');

Object.defineProperty(exports, 'SEARCH', {
  enumerable: true,
  get: function get() {
    return _SEARCH.SEARCH;
  }
});

var _SELECT = require('./SELECT');

Object.defineProperty(exports, 'SELECT', {
  enumerable: true,
  get: function get() {
    return _SELECT.SELECT;
  }
});

var _SERIAL = require('./SERIAL');

Object.defineProperty(exports, 'SERIAL', {
  enumerable: true,
  get: function get() {
    return _SERIAL.SERIAL;
  }
});

var _SIN = require('./SIN');

Object.defineProperty(exports, 'SIN', {
  enumerable: true,
  get: function get() {
    return _SIN.SIN;
  }
});

var _SORT = require('./SORT');

Object.defineProperty(exports, 'SORT', {
  enumerable: true,
  get: function get() {
    return _SORT.SORT;
  }
});

var _SPLIT = require('./SPLIT');

Object.defineProperty(exports, 'SPLIT', {
  enumerable: true,
  get: function get() {
    return _SPLIT.SPLIT;
  }
});

var _SUBSTITUTE = require('./SUBSTITUTE');

Object.defineProperty(exports, 'SUBSTITUTE', {
  enumerable: true,
  get: function get() {
    return _SUBSTITUTE.SUBSTITUTE;
  }
});

var _SUBTRACT = require('./SUBTRACT');

Object.defineProperty(exports, 'SUBTRACT', {
  enumerable: true,
  get: function get() {
    return _SUBTRACT.SUBTRACT;
  }
});

var _SUM = require('./SUM');

Object.defineProperty(exports, 'SUM', {
  enumerable: true,
  get: function get() {
    return _SUM.SUM;
  }
});

var _SWITCH = require('./SWITCH');

Object.defineProperty(exports, 'SWITCH', {
  enumerable: true,
  get: function get() {
    return _SWITCH.SWITCH;
  }
});

var _TAN = require('./TAN');

Object.defineProperty(exports, 'TAN', {
  enumerable: true,
  get: function get() {
    return _TAN.TAN;
  }
});

var _TAU = require('./TAU');

Object.defineProperty(exports, 'TAU', {
  enumerable: true,
  get: function get() {
    return _TAU.TAU;
  }
});

var _TEXT = require('./TEXT');

Object.defineProperty(exports, 'TEXT', {
  enumerable: true,
  get: function get() {
    return _TEXT.TEXT;
  }
});

var _TRIM = require('./TRIM');

Object.defineProperty(exports, 'TRIM', {
  enumerable: true,
  get: function get() {
    return _TRIM.TRIM;
  }
});

var _UNIQUE = require('./UNIQUE');

Object.defineProperty(exports, 'UNIQUE', {
  enumerable: true,
  get: function get() {
    return _UNIQUE.UNIQUE;
  }
});

var _UPPER = require('./UPPER');

Object.defineProperty(exports, 'UPPER', {
  enumerable: true,
  get: function get() {
    return _UPPER.UPPER;
  }
});

var _VLOOKUP = require('./VLOOKUP');

Object.defineProperty(exports, 'VLOOKUP', {
  enumerable: true,
  get: function get() {
    return _VLOOKUP.VLOOKUP;
  }
});

var _XOR = require('./XOR');

Object.defineProperty(exports, 'XOR', {
  enumerable: true,
  get: function get() {
    return _XOR.XOR;
  }
});
},{"./ABS":2,"./ACOS":3,"./ADD":4,"./AND":5,"./AVERAGE":6,"./BIN2DEC":7,"./CELLINDEX":8,"./CHANGED":9,"./CHOOSE":10,"./CLEAN":11,"./CODE":12,"./COLUMN":13,"./COLUMNLETTER":14,"./COLUMNNUMBER":15,"./CONCATENATE":17,"./COND":18,"./COS":20,"./DATE":21,"./DATEDIF":22,"./DATEVALUE":23,"./DAYS360":24,"./DEC2BIN":25,"./DIFF":26,"./DIVIDE":27,"./EQ":28,"./EXACT":30,"./FILTER":31,"./FIND":32,"./FLATTEN":33,"./GT":34,"./GTE":35,"./GUID":36,"./HLOOKUP":37,"./IF":38,"./IFBLANK":39,"./IFEMPTY":40,"./IFERROR":41,"./IFNA":42,"./IN":43,"./INDEX2COL":44,"./INDEX2ROW":45,"./INDIRECT":46,"./ISARRAY":47,"./ISBLANK":48,"./ISDATE":49,"./ISEMAIL":50,"./ISEMPTY":51,"./ISERROR":53,"./ISEVEN":54,"./ISFUNCTION":55,"./ISNA":56,"./ISNUMBER":57,"./ISODD":58,"./ISREF":59,"./ISTEXT":60,"./ISURL":61,"./LEN":62,"./LOOKUP":63,"./LOWER":64,"./LT":65,"./LTE":66,"./MAX":67,"./MIN":68,"./MULTIPLY":69,"./N":70,"./NE":71,"./NOT":72,"./OCT2DEC":73,"./OR":74,"./PARSEBOOL":75,"./PARSEDATE":76,"./PI":78,"./PMT":79,"./POWER":80,"./REF":81,"./REPLACE":82,"./REPT":83,"./RIGHT":84,"./ROUND":85,"./ROUNDUP":86,"./SEARCH":87,"./SELECT":88,"./SERIAL":89,"./SIN":90,"./SORT":91,"./SPLIT":92,"./SUBSTITUTE":93,"./SUBTRACT":94,"./SUM":95,"./SWITCH":96,"./TAN":97,"./TAU":98,"./TEXT":99,"./TRIM":100,"./UNIQUE":101,"./UPPER":102,"./VLOOKUP":103,"./XOR":104}],106:[function(require,module,exports){

},{}],107:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":108}],108:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
