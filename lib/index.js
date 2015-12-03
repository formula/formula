'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packages = exports.engineeringFunctions = exports.textFunctions = exports.statisticFunctions = exports.financialFunctions = exports.dateTimeFunctions = exports.mathFunctions = exports.dataFunctions = exports.referenceFunctions = exports.informationFunctions = exports.logicalFunctions = undefined;

var _ABS = require('./ABS');

var _ACOS = require('./ACOS');

var _ADD = require('./ADD');

var _AND = require('./AND');

var _BIN2DEC = require('./BIN2DEC');

var _CELL = require('./CELL');

var _CELLINDEX = require('./CELLINDEX');

var _CHOOSE = require('./CHOOSE');

var _CONCATENATE = require('./CONCATENATE');

var _COND = require('./COND');

var _COS = require('./COS');

var _DATE = require('./DATE');

var _DATEDIF = require('./DATEDIF');

var _DEC2BIN = require('./DEC2BIN');

var _DIVIDE = require('./DIVIDE');

var _EQ = require('./EQ');

var _FILTER = require('./FILTER');

var _FIND = require('./FIND');

var _FLATTEN = require('./FLATTEN');

var _GT = require('./GT');

var _GTE = require('./GTE');

var _IFNA = require('./IFNA');

var _IN = require('./IN');

var _INDEX2COL = require('./INDEX2COL');

var _INDEX2ROW = require('./INDEX2ROW');

var _INDIRECT = require('./INDIRECT');

var _ISARRAY = require('./ISARRAY');

var _ISBLANK = require('./ISBLANK');

var _ISEMAIL = require('./ISEMAIL');

var _ISERROR = require('./ISERROR');

var _ISEVEN = require('./ISEVEN');

var _ISNA = require('./ISNA');

var _ISNUMBER = require('./ISNUMBER');

var _ISODD = require('./ISODD');

var _ISRANGE = require('./ISRANGE');

var _ISREF = require('./ISREF');

var _ISTEXT = require('./ISTEXT');

var _LOWER = require('./LOWER');

var _LT = require('./LT');

var _LTE = require('./LTE');

var _MAX = require('./MAX');

var _MULTIPLY = require('./MULTIPLY');

var _N = require('./N');

var _NE = require('./NE');

var _OCT2DEC = require('./OCT2DEC');

var _OR = require('./OR');

var _PI = require('./PI');

var _PMT = require('./PMT');

var _POWER = require('./POWER');

var _RANGE = require('./RANGE');

var _REPT = require('./REPT');

var _SIN = require('./SIN');

var _SORT = require('./SORT');

var _SUM = require('./SUM');

var _SWITCH = require('./SWITCH');

var _TAN = require('./TAN');

var _TAU = require('./TAU');

var _TEXT = require('./TEXT');

var _UNIQUE = require('./UNIQUE');

var _UPPER = require('./UPPER');

var logicalFunctions = exports.logicalFunctions = ['if', 'ifna', 'iferror', 'and', 'eq', 'or', 'xor', 'not', 'lt', 'lte', 'gt', 'gte', 'ne', 'switch', 'choose', 'cond'];

var informationFunctions = exports.informationFunctions = ['isarray', 'isblank', 'isemail', 'iserror', 'iseven', 'isformula', 'islogical', 'isna', 'isnontext', 'isnumber', 'isodd', 'istext', 'isrange', 'isref', 'isurl', 'n', 'na', 'precedents', 'sheet', 'sheets', 'type'];

var referenceFunctions = exports.referenceFunctions = ['indirect', 'isref', 'rows', 'columns', 'range', 'cell', 'cellindex', 'index2addr', 'index2col', 'index2row'];

var dataFunctions = exports.dataFunctions = ['sort', 'filter', 'unique'];

var mathFunctions = exports.mathFunctions = ['abs', 'acos', 'acosh', 'acot', 'acoth', 'add', 'aggregate', 'arabic', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'base', 'ceiling', 'combin', 'combina', 'cos', 'cosh', 'cot', 'coth', 'csc', 'csch', 'decimal', 'degrees', 'divide', 'even', 'exp', 'fact', 'factdouble', 'floor', 'gcd', 'gt', 'gte', 'int', 'lcm', 'log', 'log10', 'lt', 'lte', 'mdeterm', 'minus', 'minverse', 'mmult', 'mod', 'mround', 'multinomial', 'multiply', 'odd', 'pi', 'tau', 'power', 'product', 'quotient', 'radians', 'rand', 'randbetween', 'roman', 'round', 'rounddown', 'roundup', 'sec', 'sech', 'seriessum', 'sign', 'sin', 'sqrt', 'sqrtpi', 'subtotal', 'sum', 'tan'];

var dateTimeFunctions = exports.dateTimeFunctions = ['date', 'datevalue', 'datedif', 'day', 'days360', 'edate', 'eomonth', 'hour', 'isleapyear', 'isoweeknum', 'minute', 'month', 'networkdays', 'now', 'second', 'time', 'timevalue', 'today', 'weekday', 'weeknum', 'workday', 'year', 'yearfrac'];

var financialFunctions = exports.financialFunctions = ['accrintm', 'amorlinc', 'coupdays', 'coupdaysnc', 'coupncd', 'coupnum', 'couppcd', 'cumipmt', 'cumprinc', 'db', 'ddb', 'disc', 'dollarde', 'dollarfr', 'duration', 'effect', 'fv', 'fvschedule', 'intrate', 'irr', 'ipmt', 'mduration', 'mirr', 'nominal', 'nper', 'npv', 'oddfprice', 'oddfyield', 'pmt', 'pv'];

var statisticFunctions = exports.statisticFunctions = ['avedev', 'average', 'averagea', 'averageif', 'averageifs', 'correl', 'count', 'counta', 'countin', 'countblank', 'countif', 'countifs', 'countunique', 'devsq', 'fisher', 'fisherinv', 'forecast', 'frequency', 'gammaln', 'geomean', 'growth', 'harmean', 'intercept', 'kurt', 'large', 'linest', 'logest', 'max', 'maxa', 'median', 'min', 'mina', 'pearson', 'permut', 'permutationa', 'phi', 'prob', 'rsq', 'skew', 'slope', 'small', 'standardize', 'stdeva', 'stdevpa', 'steyx', 'transpose', 'trend', 'trimmean', 'vara', 'varpa'];

var textFunctions = exports.textFunctions = ['asc', 'bahttext', 'clean', 'char', 'code', 'concatenate', 'dbcs', 'dollar', 'exact', 'find', 'fixed', 'left', 'len', 'lower', 'join', 'mid', 'numbervalue', 'pronetic', 'proper', 'replace', 'rept', 'right', 'search', 'split', 'substitute', 't', 'text', 'trim', 'upper', 'value'];

var engineeringFunctions = exports.engineeringFunctions = ['besseli', 'besselj', 'besselk', 'bessely', 'bin2dec', 'bin2hex', 'bin2oct', 'bitand', 'bitlshift', 'bitor', 'bitrshift', 'bitxor', 'complex', 'convert', 'dec2bin', 'dec2hex', 'dec2oct', 'delta', 'erf', 'erfc', 'gestep', 'hex2bin', 'hex2dec', 'hex2oct', 'imabs', 'imaginary', 'imargument', 'imconjugate', 'imcos', 'imcosh', 'imcot', 'imdiv', 'imexp', 'imln', 'imlog19', 'imlog2', 'impower', 'improduct', 'imreal', 'imsec', 'imsech', 'imsin', 'imsinh', 'imsqrt', 'imcsc', 'imcsch', 'imsub', 'imtan', 'oct2bin', 'oct2dec', 'oct2hex'];

var packages = exports.packages = (0, _FLATTEN.FLATTEN)([logicalFunctions, informationFunctions, referenceFunctions, dataFunctions, mathFunctions, dateTimeFunctions, financialFunctions, statisticFunctions, textFunctions, engineeringFunctions]).sort();

exports.default = {
  ABS: _ABS.ABS,
  ACOS: _ACOS.ACOS,
  ADD: _ADD.ADD,
  AND: _AND.AND,
  BIN2DEC: _BIN2DEC.BIN2DEC,
  CELL: _CELL.CELL,
  CELLINDEX: _CELLINDEX.CELLINDEX,
  CHOOSE: _CHOOSE.CHOOSE,
  CONCATENATE: _CONCATENATE.CONCATENATE,
  COND: _COND.COND,
  COS: _COS.COS,
  DATE: _DATE.DATE,
  DATEDIF: _DATEDIF.DATEDIF,
  DEC2BIN: _DEC2BIN.DEC2BIN,
  DIVIDE: _DIVIDE.DIVIDE,
  EQ: _EQ.EQ,
  FILTER: _FILTER.FILTER,
  FIND: _FIND.FIND,
  FLATTEN: _FLATTEN.FLATTEN,
  GT: _GT.GT,
  GTE: _GTE.GTE,
  IFNA: _IFNA.IFNA,
  IN: _IN.IN,
  INDEX2COL: _INDEX2COL.INDEX2COL,
  INDEX2ROW: _INDEX2ROW.INDEX2ROW,
  INDIRECT: _INDIRECT.INDIRECT,
  ISARRAY: _ISARRAY.ISARRAY,
  ISBLANK: _ISBLANK.ISBLANK,
  ISEMAIL: _ISEMAIL.ISEMAIL,
  ISERROR: _ISERROR.ISERROR,
  ISEVEN: _ISEVEN.ISEVEN,
  ISNA: _ISNA.ISNA,
  ISNUMBER: _ISNUMBER.ISNUMBER,
  ISODD: _ISODD.ISODD,
  ISRANGE: _ISRANGE.ISRANGE,
  ISREF: _ISREF.ISREF,
  ISTEXT: _ISTEXT.ISTEXT,
  LOWER: _LOWER.LOWER,
  LT: _LT.LT,
  LTE: _LTE.LTE,
  MAX: _MAX.MAX,
  MULTIPLY: _MULTIPLY.MULTIPLY,
  N: _N.N,
  NE: _NE.NE,
  OCT2DEC: _OCT2DEC.OCT2DEC,
  OR: _OR.OR,
  PI: _PI.PI,
  PMT: _PMT.PMT,
  POWER: _POWER.POWER,
  RANGE: _RANGE.RANGE,
  REPT: _REPT.REPT,
  SIN: _SIN.SIN,
  SORT: _SORT.SORT,
  SUM: _SUM.SUM,
  SWITCH: _SWITCH.SWITCH,
  TAN: _TAN.TAN,
  TAU: _TAU.TAU,
  TEXT: _TEXT.TEXT,
  UNIQUE: _UNIQUE.UNIQUE,
  UPPER: _UPPER.UPPER
};