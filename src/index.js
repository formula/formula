import {ABS} from './ABS'
import {ACOS} from './ACOS'
import {ADD} from './ADD'
import {AND} from './AND'
import {BIN2DEC} from './BIN2DEC'
import {CELL} from './CELL'
import {CELLINDEX} from './CELLINDEX'
import {CHOOSE} from './CHOOSE'
import {CONCATENATE} from './CONCATENATE'
import {COND} from './COND'
import {COS} from './COS'
import {DATE} from './DATE'
import {DATEDIF} from './DATEDIF'
import {DEC2BIN} from './DEC2BIN'
import {DIVIDE} from './DIVIDE'
import {EQ} from './EQ'
import {FILTER} from './FILTER'
import {FIND} from './FIND'
import {FLATTEN} from './FLATTEN'
import {GT} from './GT'
import {GTE} from './GTE'
import {HLOOKUP} from './HLOOKUP'
import {IFNA} from './IFNA'
import {IN} from './IN'
import {INDEX2COL} from './INDEX2COL'
import {INDEX2ROW} from './INDEX2ROW'
import {INDIRECT} from './INDIRECT'
import {ISARRAY} from './ISARRAY'
import {ISBLANK} from './ISBLANK'
import {ISEMAIL} from './ISEMAIL'
import {ISERROR} from './ISERROR'
import {ISEVEN} from './ISEVEN'
import {ISNA} from './ISNA'
import {ISNUMBER} from './ISNUMBER'
import {ISODD} from './ISODD'
import {ISRANGE} from './ISRANGE'
import {ISREF} from './ISREF'
import {ISTEXT} from './ISTEXT'
import {LOOKUP} from './LOOKUP'
import {LOWER} from './LOWER'
import {LT} from './LT'
import {LTE} from './LTE'
import {MAX} from './MAX'
import {MULTIPLY} from './MULTIPLY'
import {N} from './N'
import {NE} from './NE'
import {OCT2DEC} from './OCT2DEC'
import {OR} from './OR'
import {PI} from './PI'
import {PMT} from './PMT'
import {POWER} from './POWER'
import {RANGE} from './RANGE'
import {REPT} from './REPT'
import {SEARCH} from './SEARCH'
import {SIN} from './SIN'
import {SORT} from './SORT'
import {SUM} from './SUM'
import {SWITCH} from './SWITCH'
import {TAN} from './TAN'
import {TAU} from './TAU'
import {TEXT} from './TEXT'
import {UNIQUE} from './UNIQUE'
import {UPPER} from './UPPER'
import {VLOOKUP} from './VLOOKUP'

let logicalFunctions = [
  'if',
  'ifna',
  'iferror',
  'and',
  'eq',
  'or',
  'xor',
  'not',
  'lt',
  'lte',
  'gt',
  'gte',
  'ne',
  'switch',
  'choose',
  'cond'
];

let informationFunctions = [
  'isarray',
  'isblank',
  'isemail',
  'iserror',
  'iseven',
  'isformula',
  'islogical',
  'isna',
  'isnontext',
  'isnumber',
  'isodd',
  'istext',
  'isrange',
  'isref',
  'isurl',
  'n',
  'na',
  'precedents',
  'sheet',
  'sheets',
  'type'
]

let referenceFunctions = [
  'indirect',
  'isref',
  'rows',
  'columns',
  'range',
  'cell',
  'cellindex',
  'index2addr',
  'index2col',
  'index2row',
];

let dataFunctions = [
  'sort',
  'filter',
  'unique',
];

let mathFunctions = [
  'abs',
  'acos',
  'acosh',
  'acot',
  'acoth',
  'add',
  'aggregate',
  'arabic',
  'asin',
  'asinh',
  'atan',
  'atan2',
  'atanh',
  'base',
  'ceiling',
  'combin',
  'combina',
  'cos',
  'cosh',
  'cot',
  'coth',
  'csc',
  'csch',
  'decimal',
  'degrees',
  'divide',
  'even',
  'exp',
  'fact',
  'factdouble',
  'floor',
  'gcd',
  'gt',
  'gte',
  'int',
  'lcm',
  'log',
  'log10',
  'lt',
  'lte',
  'mdeterm',
  'minus',
  'minverse',
  'mmult',
  'mod',
  'mround',
  'multinomial',
  'multiply',
  'odd',
  'pi',
  'tau',
  'power',
  'product',
  'quotient',
  'radians',
  'rand',
  'randbetween',
  'roman',
  'round',
  'rounddown',
  'roundup',
  'sec',
  'sech',
  'seriessum',
  'sign',
  'sin',
  'sqrt',
  'sqrtpi',
  'subtotal',
  'sum',
  'tan',
];

let dateTimeFunctions = [
  'date',
  'datevalue',
  'datedif',
  'day',
  'days360',
  'edate',
  'eomonth',
  'hour',
  'isleapyear',
  'isoweeknum',
  'minute',
  'month',
  'networkdays',
  'now',
  'second',
  'time',
  'timevalue',
  'today',
  'weekday',
  'weeknum',
  'workday',
  'year',
  'yearfrac',
];

let financialFunctions = [
  'accrintm',
  'amorlinc',
  'coupdays',
  'coupdaysnc',
  'coupncd',
  'coupnum',
  'couppcd',
  'cumipmt',
  'cumprinc',
  'db',
  'ddb',
  'disc',
  'dollarde',
  'dollarfr',
  'duration',
  'effect',
  'fv',
  'fvschedule',
  'intrate',
  'irr',
  'ipmt',
  'mduration',
  'mirr',
  'nominal',
  'nper',
  'npv',
  'oddfprice',
  'oddfyield',
  'pmt',
  'pv',
];

let statisticFunctions = [
  'avedev',
  'average',
  'averagea',
  'averageif',
  'averageifs',
  'correl',
  'count',
  'counta',
  'countin',
  'countblank',
  'countif',
  'countifs',
  'countunique',
  'devsq',
  'fisher',
  'fisherinv',
  'forecast',
  'frequency',
  'gammaln',
  'geomean',
  'growth',
  'harmean',
  'intercept',
  'kurt',
  'large',
  'linest',
  'logest',
  'max',
  'maxa',
  'median',
  'min',
  'mina',
  'pearson',
  'permut',
  'permutationa',
  'phi',
  'prob',
  'rsq',
  'skew',
  'slope',
  'small',
  'standardize',
  'stdeva',
  'stdevpa',
  'steyx',
  'transpose',
  'trend',
  'trimmean',
  'vara',
  'varpa',
];

let textFunctions = [
  'asc',
  'bahttext',
  'clean',
  'char',
  'code',
  'concatenate',
  'dbcs',
  'dollar',
  'exact',
  'find',
  'fixed',
  'left',
  'len',
  'lower',
  'join',
  'mid',
  'numbervalue',
  'pronetic',
  'proper',
  'replace',
  'rept',
  'right',
  'search',
  'split',
  'substitute',
  't',
  'text',
  'trim',
  'upper',
  'value',
];

let engineeringFunctions = [
  'besseli',
  'besselj',
  'besselk',
  'bessely',
  'bin2dec',
  'bin2hex',
  'bin2oct',
  'bitand',
  'bitlshift',
  'bitor',
  'bitrshift',
  'bitxor',
  'complex',
  'convert',
  'dec2bin',
  'dec2hex',
  'dec2oct',
  'delta',
  'erf',
  'erfc',
  'gestep',
  'hex2bin',
  'hex2dec',
  'hex2oct',
  'imabs',
  'imaginary',
  'imargument',
  'imconjugate',
  'imcos',
  'imcosh',
  'imcot',
  'imdiv',
  'imexp',
  'imln',
  'imlog19',
  'imlog2',
  'impower',
  'improduct',
  'imreal',
  'imsec',
  'imsech',
  'imsin',
  'imsinh',
  'imsqrt',
  'imcsc',
  'imcsch',
  'imsub',
  'imtan',
  'oct2bin',
  'oct2dec',
  'oct2hex'
];

let packages = FLATTEN([
  logicalFunctions,
  informationFunctions,
  referenceFunctions,
  dataFunctions,
  mathFunctions,
  dateTimeFunctions,
  financialFunctions,
  statisticFunctions,
  textFunctions,
  engineeringFunctions
]).sort();

export default {
  allFunctions,
  logicalFunctions,
  informationFunctions,
  referenceFunctions,
  dataFunctions,
  mathFunctions,
  dateTimeFunctions,
  financialFunctions,
  statisticFunctions,
  textFunctions,
  engineeringFunctions,
  ABS,
  ACOS,
  ADD,
  AND,
  BIN2DEC,
  CELL,
  CELLINDEX,
  CHOOSE,
  CONCATENATE,
  COND,
  COS,
  DATE,
  DATEDIF,
  DEC2BIN,
  DIVIDE,
  EQ,
  FILTER,
  FIND,
  FLATTEN,
  GT,
  GTE,
  HLOOKUP,
  IFNA,
  IN,
  INDEX2COL,
  INDEX2ROW,
  INDIRECT,
  ISARRAY,
  ISBLANK,
  ISEMAIL,
  ISERROR,
  ISEVEN,
  ISNA,
  ISNUMBER,
  ISODD,
  ISRANGE,
  ISREF,
  ISTEXT,
  LOOKUP,
  LOWER,
  LT,
  LTE,
  MAX,
  MULTIPLY,
  N,
  NE,
  OCT2DEC,
  OR,
  PI,
  PMT,
  POWER,
  RANGE,
  REPT,
  SEARCH,
  SIN,
  SORT,
  SUM,
  SWITCH,
  TAN,
  TAU,
  TEXT,
  UNIQUE,
  UPPER,
  VLOOKUP
};
