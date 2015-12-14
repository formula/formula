export {ABS} from './ABS'
export {ACOS} from './ACOS'
export {ADD} from './ADD'
export {AND} from './AND'
export {BIN2DEC} from './BIN2DEC'
export {CELL} from './CELL'
export {CELLINDEX} from './CELLINDEX'
export {CHOOSE} from './CHOOSE'
export {CONCATENATE} from './CONCATENATE'
export {COND} from './COND'
export {COS} from './COS'
export {DATE} from './DATE'
export {DATEDIF} from './DATEDIF'
export {DEC2BIN} from './DEC2BIN'
export {DIVIDE} from './DIVIDE'
export {EQ} from './EQ'
export {FILTER} from './FILTER'
export {FIND} from './FIND'
export {FLATTEN} from './FLATTEN'
export {GT} from './GT'
export {GTE} from './GTE'
export {HLOOKUP} from './HLOOKUP'
export {IFNA} from './IFNA'
export {IN} from './IN'
export {INDEX2COL} from './INDEX2COL'
export {INDEX2ROW} from './INDEX2ROW'
export {INDIRECT} from './INDIRECT'
export {ISARRAY} from './ISARRAY'
export {ISBLANK} from './ISBLANK'
export {ISEMAIL} from './ISEMAIL'
export {ISERROR} from './ISERROR'
export {ISEVEN} from './ISEVEN'
export {ISNA} from './ISNA'
export {ISNUMBER} from './ISNUMBER'
export {ISODD} from './ISODD'
export {ISRANGE} from './ISRANGE'
export {ISREF} from './ISREF'
export {ISTEXT} from './ISTEXT'
export {ISURL} from './ISURL'
export {LOOKUP} from './LOOKUP'
export {LOWER} from './LOWER'
export {LT} from './LT'
export {LTE} from './LTE'
export {MAX} from './MAX'
export {MULTIPLY} from './MULTIPLY'
export {N} from './N'
export {NE} from './NE'
export {OCT2DEC} from './OCT2DEC'
export {OR} from './OR'
export {PI} from './PI'
export {PMT} from './PMT'
export {POWER} from './POWER'
export {RANGE} from './RANGE'
export {REPT} from './REPT'
export {SEARCH} from './SEARCH'
export {SIN} from './SIN'
export {SORT} from './SORT'
export {SUM} from './SUM'
export {SWITCH} from './SWITCH'
export {TAN} from './TAN'
export {TAU} from './TAU'
export {TEXT} from './TEXT'
export {UNIQUE} from './UNIQUE'
export {UPPER} from './UPPER'
export {VLOOKUP} from './VLOOKUP'

export let logicalFunctions = [
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

export let informationFunctions = [
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

export let referenceFunctions = [
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

export let dataFunctions = [
  'sort',
  'filter',
  'unique',
];

export let mathFunctions = [
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

export let dateTimeFunctions = [
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

export let financialFunctions = [
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

export let statisticFunctions = [
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

export let textFunctions = [
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

export let engineeringFunctions = [
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

export let functions = FLATTEN([
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
  ISURL,
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
