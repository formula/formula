'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compile = require('./compile');

var _compile2 = _interopRequireDefault(_compile);

var _run = require('./run');

var _run2 = _interopRequireDefault(_run);

var _branch = require('./branch');

var _branch2 = _interopRequireDefault(_branch);

var _choose = require('./choose');

var _choose2 = _interopRequireDefault(_choose);

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

var _ifblank = require('./ifblank');

var _ifblank2 = _interopRequireDefault(_ifblank);

var _ifempty = require('./ifempty');

var _ifempty2 = _interopRequireDefault(_ifempty);

var _iferror = require('./iferror');

var _iferror2 = _interopRequireDefault(_iferror);

var _ifna = require('./ifna');

var _ifna2 = _interopRequireDefault(_ifna);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _isboolean = require('./isboolean');

var _isboolean2 = _interopRequireDefault(_isboolean);

var _isdate = require('./isdate');

var _isdate2 = _interopRequireDefault(_isdate);

var _isemail = require('./isemail');

var _isemail2 = _interopRequireDefault(_isemail);

var _isempty = require('./isempty');

var _isempty2 = _interopRequireDefault(_isempty);

var _iserror = require('./iserror');

var _iserror2 = _interopRequireDefault(_iserror);

var _iseven = require('./iseven');

var _iseven2 = _interopRequireDefault(_iseven);

var _isfalsy = require('./isfalsy');

var _isfalsy2 = _interopRequireDefault(_isfalsy);

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

var _isleapyear = require('./isleapyear');

var _isleapyear2 = _interopRequireDefault(_isleapyear);

var _isna = require('./isna');

var _isna2 = _interopRequireDefault(_isna);

var _isnan = require('./isnan');

var _isnan2 = _interopRequireDefault(_isnan);

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _isodd = require('./isodd');

var _isodd2 = _interopRequireDefault(_isodd);

var _isoweeknum = require('./isoweeknum');

var _isoweeknum2 = _interopRequireDefault(_isoweeknum);

var _isref = require('./isref');

var _isref2 = _interopRequireDefault(_isref);

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

var _istruthy = require('./istruthy');

var _istruthy2 = _interopRequireDefault(_istruthy);

var _isurl = require('./isurl');

var _isurl2 = _interopRequireDefault(_isurl);

var _iswholenumber = require('./iswholenumber');

var _iswholenumber2 = _interopRequireDefault(_iswholenumber);

var _xor = require('./xor');

var _xor2 = _interopRequireDefault(_xor);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _subtract = require('./subtract');

var _subtract2 = _interopRequireDefault(_subtract);

var _multiply = require('./multiply');

var _multiply2 = _interopRequireDefault(_multiply);

var _divide = require('./divide');

var _divide2 = _interopRequireDefault(_divide);

var _abs = require('./abs');

var _abs2 = _interopRequireDefault(_abs);

var _acos = require('./acos');

var _acos2 = _interopRequireDefault(_acos);

var _acosh = require('./acosh');

var _acosh2 = _interopRequireDefault(_acosh);

var _acot = require('./acot');

var _acot2 = _interopRequireDefault(_acot);

var _acoth = require('./acoth');

var _acoth2 = _interopRequireDefault(_acoth);

var _cos = require('./cos');

var _cos2 = _interopRequireDefault(_cos);

var _pi = require('./pi');

var _pi2 = _interopRequireDefault(_pi);

var _power = require('./power');

var _power2 = _interopRequireDefault(_power);

var _round = require('./round');

var _round2 = _interopRequireDefault(_round);

var _roundup = require('./roundup');

var _roundup2 = _interopRequireDefault(_roundup);

var _sin = require('./sin');

var _sin2 = _interopRequireDefault(_sin);

var _tan = require('./tan');

var _tan2 = _interopRequireDefault(_tan);

var _tau = require('./tau');

var _tau2 = _interopRequireDefault(_tau);

var _trunc = require('./trunc');

var _trunc2 = _interopRequireDefault(_trunc);

var _char = require('./char');

var _char2 = _interopRequireDefault(_char);

var _code = require('./code');

var _code2 = _interopRequireDefault(_code);

var _concatenate = require('./concatenate');

var _concatenate2 = _interopRequireDefault(_concatenate);

var _exact = require('./exact');

var _exact2 = _interopRequireDefault(_exact);

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _left = require('./left');

var _left2 = _interopRequireDefault(_left);

var _len = require('./len');

var _len2 = _interopRequireDefault(_len);

var _lower = require('./lower');

var _lower2 = _interopRequireDefault(_lower);

var _numbervalue = require('./numbervalue');

var _numbervalue2 = _interopRequireDefault(_numbervalue);

var _parsebool = require('./parsebool');

var _parsebool2 = _interopRequireDefault(_parsebool);

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

var _parsequery = require('./parsequery');

var _parsequery2 = _interopRequireDefault(_parsequery);

var _proper = require('./proper');

var _proper2 = _interopRequireDefault(_proper);

var _replace = require('./replace');

var _replace2 = _interopRequireDefault(_replace);

var _right = require('./right');

var _right2 = _interopRequireDefault(_right);

var _rept = require('./rept');

var _rept2 = _interopRequireDefault(_rept);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _substitute = require('./substitute');

var _substitute2 = _interopRequireDefault(_substitute);

var _substituteAll = require('./substituteAll');

var _substituteAll2 = _interopRequireDefault(_substituteAll);

var _surroundKeys = require('./surroundKeys');

var _surroundKeys2 = _interopRequireDefault(_surroundKeys);

var _split = require('./split');

var _split2 = _interopRequireDefault(_split);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _trim = require('./trim');

var _trim2 = _interopRequireDefault(_trim);

var _upper = require('./upper');

var _upper2 = _interopRequireDefault(_upper);

var _hlookup = require('./hlookup');

var _hlookup2 = _interopRequireDefault(_hlookup);

var _includes = require('./includes');

var _includes2 = _interopRequireDefault(_includes);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _lookup = require('./lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _match = require('./match');

var _match2 = _interopRequireDefault(_match);

var _vlookup = require('./vlookup');

var _vlookup2 = _interopRequireDefault(_vlookup);

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

var _datevalue = require('./datevalue');

var _datevalue2 = _interopRequireDefault(_datevalue);

var _datedif = require('./datedif');

var _datedif2 = _interopRequireDefault(_datedif);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

var _days = require('./days360');

var _days2 = _interopRequireDefault(_days);

var _edate = require('./edate');

var _edate2 = _interopRequireDefault(_edate);

var _eomonth = require('./eomonth');

var _eomonth2 = _interopRequireDefault(_eomonth);

var _hour = require('./hour');

var _hour2 = _interopRequireDefault(_hour);

var _minute = require('./minute');

var _minute2 = _interopRequireDefault(_minute);

var _month = require('./month');

var _month2 = _interopRequireDefault(_month);

var _now = require('./now');

var _now2 = _interopRequireDefault(_now);

var _second = require('./second');

var _second2 = _interopRequireDefault(_second);

var _today = require('./today');

var _today2 = _interopRequireDefault(_today);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

var _timevalue = require('./timevalue');

var _timevalue2 = _interopRequireDefault(_timevalue);

var _year = require('./year');

var _year2 = _interopRequireDefault(_year);

var _yearfrac = require('./yearfrac');

var _yearfrac2 = _interopRequireDefault(_yearfrac);

var _average = require('./average');

var _average2 = _interopRequireDefault(_average);

var _min = require('./min');

var _min2 = _interopRequireDefault(_min);

var _max = require('./max');

var _max2 = _interopRequireDefault(_max);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

var _accrint = require('./accrint');

var _accrint2 = _interopRequireDefault(_accrint);

var _fv = require('./fv');

var _fv2 = _interopRequireDefault(_fv);

var _nper = require('./nper');

var _nper2 = _interopRequireDefault(_nper);

var _npv = require('./npv');

var _npv2 = _interopRequireDefault(_npv);

var _pmt = require('./pmt');

var _pmt2 = _interopRequireDefault(_pmt);

var _pv = require('./pv');

var _pv2 = _interopRequireDefault(_pv);

var _bin2dec = require('./bin2dec');

var _bin2dec2 = _interopRequireDefault(_bin2dec);

var _dec2bin = require('./dec2bin');

var _dec2bin2 = _interopRequireDefault(_dec2bin);

var _oct2dec = require('./oct2dec');

var _oct2dec2 = _interopRequireDefault(_oct2dec);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _pluck = require('./pluck');

var _pluck2 = _interopRequireDefault(_pluck);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _some = require('./some');

var _some2 = _interopRequireDefault(_some);

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

var _unique = require('./unique');

var _unique2 = _interopRequireDefault(_unique);

var _changed = require('./changed');

var _changed2 = _interopRequireDefault(_changed);

var _diff = require('./diff');

var _diff2 = _interopRequireDefault(_diff);

var _clean = require('./clean');

var _clean2 = _interopRequireDefault(_clean);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _cellindex = require('./cellindex');

var _cellindex2 = _interopRequireDefault(_cellindex);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _columnletter = require('./columnletter');

var _columnletter2 = _interopRequireDefault(_columnletter);

var _columnnumber = require('./columnnumber');

var _columnnumber2 = _interopRequireDefault(_columnnumber);

var _decodebase = require('./decodebase64');

var _decodebase2 = _interopRequireDefault(_decodebase);

var _decodejwt = require('./decodejwt');

var _decodejwt2 = _interopRequireDefault(_decodejwt);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _guid = require('./guid');

var _guid2 = _interopRequireDefault(_guid);

var _int = require('./int');

var _int2 = _interopRequireDefault(_int);

var _index2col = require('./index2col');

var _index2col2 = _interopRequireDefault(_index2col);

var _index2row = require('./index2row');

var _index2row2 = _interopRequireDefault(_index2row);

var _n = require('./n');

var _n2 = _interopRequireDefault(_n);

var _numbers = require('./numbers');

var _numbers2 = _interopRequireDefault(_numbers);

var _ref = require('./ref');

var _ref2 = _interopRequireDefault(_ref);

var _serial = require('./serial');

var _serial2 = _interopRequireDefault(_serial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define `cond` alias for branch


// #### [run](./run)
// `run` execute a formula once.
var cond = _branch2.default;

// define `ifs` alias for branch


// ### Logical

// #### [branch](./branch)
// `branch` is equivalent to `if-elseif-else`.
// Copyright @ 2015-2016 JC Fisher

// # Formula's Functions

// ## Functions
// The library includes functions for logic, math, text, lookup, date/time, aggregation, arrays, objects, finance, statistics and other utilities.

// ### Formula

// #### [compile](./compile)
// `compile` converts a formula into a function.
var ifs = _branch2.default;

// #### [choose](./choose)
// `choose` is equivalent to `switch case`.


// #### [and](./and)
// `and` returns true when all arguments are true or evaluates to true.


// #### [or](./or)
// `or` returns true when any argument is true or evaluates to true.


// #### [not](./not)
// `not` returns the inverse.


// #### [eq](./eq)
// `eq` returns true when the first and second arguments are equivalent. String comparision is _case insensitive_.


// #### [ne](./ne)
// `ne` returns true when the first and second arguments are not equivalent. String comparision is _case insensitive_.


// #### [gt](./gt)
// `gt` returns true when first argument is greater than the second.


// #### [gte](./gte)
// `gte` returns true when first argument is greater than or equal to the second.


// #### [lt](./lt)
// `lt` returns true when first argument is less than the second.


// #### [lte](./lte)
// `lte` returns true when first argument is less than or equal to the second.


// #### [ifblank](./ifblank)
// `ifempty` returns the second argument when the first argument is blank or the third argument

var ifBlank = _ifblank2.default;

// #### [ifempty](./ifempty)
// `ifempty` returns the second argument when the first argument is empty or the third argument

var ifEmpty = _ifempty2.default;

// #### [iferror](./iferror)
// `ifempty` returns the second argument when the first argument is an error or the third argument

var ifError = _iferror2.default;

// #### [ifna](./ifna)
// `ifempty` returns the second argument when the first argument is #NA! or the third argument

var ifNA = _ifna2.default;

// #### [isarray](./isarray)
// `isarray` returns true when the value is an array.

var isArray = _isarray2.default;

// #### [isblank](./isblank)
// `isblank` returns true when the value is undefined or null.

var isBlank = _isblank2.default;

// #### [isboolean](./isboolean)
// `isboolean` returns true when the value is true or false.

var isbool = _isboolean2.default;
var isBoolean = _isboolean2.default;
var isBool = _isboolean2.default;

// #### [isdate](./isdate)
// `isdate` returns true when the value is a JavaScript Date object.

var isDate = _isdate2.default;

// #### [isemail](./isemail)
// `isdate` returns true when the value matches the pattern for a valid email address.

var isEmail = _isemail2.default;

// #### [isempty](./isempty)
// `isempty` returns true when the value is blank or empty string.

var isEmpty = _isempty2.default;

// #### [iserror](./iserror)
// `iserror` returns true when the value is an error value.

var isError = _iserror2.default;

// #### [iseven](./iseven)
// `iseven` returns true when the value is an even number.

var isEven = _iseven2.default;

// #### [isfalsy](./isfalsy)
// `isfalsy` returns true when value is a string.

var isFalsy = _isfalsy2.default;

// #### [isfunction](./isfunction)
// `isfunction` returns true when the value is a JavaScript function.

var isFunction = _isfunction2.default;

// #### [isleapyear](./isleapyear)
// `isfunction` returns true when the value is a leap year.

var isLeapYear = _isleapyear2.default;

// #### [isna](./isna)
// `isna` returns true when the value is #NA!.

var isNA = _isna2.default;

// #### [isnan](./isnan)
// `isnan` returns true when the value is NaN.

var isNaN = _isnan2.default;

// #### [isnumber](./isnumber)
// `isnumber` returns true when the value is JavaScript number type and not NaN and not infinite.

var isNumber = _isnumber2.default;

// #### [isodd](./isodd)
// `isodd` returns true when the value is an odd number.

var isOdd = _isodd2.default;

// #### [isoweeknum](./isoweeknum)
// `isoweeknum` returns number of the ISO week number of the year for a given date.

var isoWeekNum = _isoweeknum2.default;

// #### [isref](./isref)
// `isref` returns true when value is a ref object.

var isRef = _isref2.default;

// #### [istext](./istext)
// `istext` returns true when value is a string.

var isText = _istext2.default;

// #### [istruthy](./istruthy)
// `istruthy` returns true when value is a string.

var isTruthy = _istruthy2.default;

// #### [isurl](./isurl)
// `isurl` returns true when value matches a url pattern.

var isURL = _isurl2.default;

// #### [iswholenumber](./iswholenumber)
// `iswholenumber` returns true when value is an integer.

var isWholeNumber = _iswholenumber2.default;
var isInteger = _iswholenumber2.default;

// #### [xor](./xor)
// `xor` returns the logical exclusive Or of all arguments.


// ### Math functions

// #### [add](./add)
// `add` sums the first and second arguments.


// #### [subtract](./subtract)
// `subtract` returns the difference between the first and second arguments.


// #### [multiply](./multiply)
// `multiply` returns the product of the first and second arguments.


// #### [divide](./divide)
// `divide` returns the result of the first argument divided by the second.


// #### [abs](./abs)
// `abs` returns the absolute value of the first argument.


// #### [acos](./acos)
// `acos` returns the inverse cosine of a number.


// #### [acosh](./acosh)
// `acosh` returns the hyperbolic inverse cosine of a number.


// #### [acot](./acot)
/// `acot` returns the arccotangent of a given number.


// #### [acoth](./acoth)
/// `acot` returns the hyperbolic arccotangent of a given number.


// #### [cos](./cos)
/// `cos` returns the cosine of a number


// #### [pi](./pi)
/// `pi` returns the circle constant 3.14...


// #### [power](./power)
// `power` returns the nth power of a number.


// #### [round](./round)
// `round` returns a number rounded to a precision.


// #### [roundup](./roundup)
// `roundup` returns a number rounded up to a precision.


// #### [sin](./sin)
// `sin` return the sinine of a number.


// #### [tan](./tan)
// `tan` returns the tangent of a number.


// #### [tau](./tau)
// `tau` returns the circle constant 6.28...


// #### [trunc](./trunc)
// `trunc` returns a number truncated to a given precision.


// ### Text

// #### [char](./char)
// `char` returns a character given an ASCII code.


// #### [code](./code)
// `code` returns the ASCII code for a given character.


// #### [concatenate](./concatenate)
// `concatenate` combines multiple values into a string.

var concat = _concatenate2.default;

// #### [exact](./exact)
// `exact` compares two values for strict equivalence.


// #### [find](./find)
// `find` searches a string for a value and returns the index.


// #### [join](./join)
// `join` combines an array of values into a string with a given delimiter.


// #### [left](./left)
// `left` returns a given number of characters from the left side of a string.


// #### [len](./len)
// `len` returns the size of a string of array.


// #### [lower](./lower)
// `lower` converts text to lower case.


// #### [numbervalue](./numbervalue)
// `numbervalue` converts text into a number.

var numberValue = _numbervalue2.default;

// #### [parsebool](./parsebool)
// `parsebool` converts text into a boolean value.

var parseBool = _parsebool2.default;

// #### [parsedate](./parsedate)
// `parsedate` converts text into a JavaScript date object

var parseDate = _parsedate2.default;

// #### [parsequery](./parsequery)
// `parsequery` returns a JSObject for a URL query string.

var parseQuery = _parsequery2.default;

// #### [proper](./proper)
// `proper` returns a string as a proper name.


// #### [replace](./replace)
// `replace` returns a string where one value is replaced with a new value.


// #### [right](./right)
// `right` returns a given number of characters from the right of a string.


// #### [rept](./rept)
// `rept` returns a string with a given value repeated `n` times.


// #### [search](./search)
// `search` returns the index of a value inside a string with wildcard support for single characters (?) and multiple characters (*).


// #### [substitute](./substitute)
// `substitute` returns a new string with every instance of value replaced.


// #### [substituteAll](./substituteAll)
// `substituteAll` returns a new string with every instance of set of values replaced.

var template = _substituteAll2.default;

// #### [surroundKeys](./surroundKeys)
// `surroundKeys` returns a new object where the keys have been wrapped with start and end strings.


// #### [split](./split)
// `split` returns an array of strings from a given string separated by a delimiter.


// #### [text](./text)
// `text` formats numbers and dates using a format code.


// #### [trim](./trim)
// `trim` returns a value with the whitespace removed from the left and right.


// #### [upper](./upper)
// `upper` returns a value in all upper case.


// ### Lookup and reference

// #### [hlookup](./hlookup)
// `hlookup` searches the first row and returns the value from the found column at a given row.


// #### [includes](./includes)
// `includes` searches an array and returns the true or false for exact matches.


// #### [index](./index)
// `index` returns the value for a given row and column.


// #### [lookup](./lookup)
// `lookup` searches an array and returns the value found or (optionally) the value at the same index in a second array.


// #### [match](./match)
// `match` searches an array and returns the found index with support for wildcard and range queries.


// #### [vlookup](./vlookup)
// `vlookup` searches the first column and returns the value from the found row at a given column.


// ### Date manipulation

// #### [date](./date)
// `date` returns a serial number for a given year, month and day.


// #### [datevalue](./datevalue)
// `datevalue` returns a serial number for a given date string.

var dateValue = _datevalue2.default;

// #### [datedif](./datedif)
// `datedif` returns the difference between two dates with support for multiple units.


// #### [day](./day)
// `day` returns the day part from a date or date string.


// #### [days360](./days360)
// `days360` returns the days behind two dates using a 360 day year.


// #### [edate](./edate)
// `edate` returns the serial number for a date that is a given number of months before or after a given date.


// #### [eomonth](./eomonth)
// `eomonth` returns the last day of the month in future or past months.


// #### [hour](./hour)
// `hour` returns the hour part of a time fraction value.


// #### [minute](./minute)
// `minute` returns the minute part of a time fraction value.


// #### [month](./month)
// `month` returns the month for a given date.


// #### [now](./now)
// `now` returns the current date time in a serial number and time fraction.


// #### [second](./second)
// `second` return the second part of a time fraction


// #### [today](./today)
// `today` returns a serial number for the current date.


// #### [time](./time)
// `time` returns a time fraction for an hour, minute and second.


// #### [timevalue](./timevalue)
// `timevalue` returns a time fraction given a text value.


// #### [year](./year)
// `year` return the year for a given date.


// #### [yearfrac](./yearfrac)
// `yearfrac` calculates the fraction of a year between two dates.


// ### Aggregation

// #### [average](./average)
// `average` returns the sum divided by the number of items.


// #### [min](./min)
// `min` returns the smallest value in an array.


// #### [max](./max)
// `min` returns the largest value in an array.


// #### [query](./query)
// `min` returns the largest value in an array.


// #### [sum](./sum)
// `sum` returns the value of all items in an array added together.


// ### Finance

// #### [accrint](./accrint)
// `accrint` teturns the accrued interest for a security that pays periodic interest.


// #### [fv](./fv)
// `fv` returns the future value of an investment.


// #### [nper](./nper)
// `nper` returns the number of periods for an investment.


// #### [npv](./npv)
// `npv` returns the net present value of an investment.


// #### [pmt](./pmt)
// `pmt` returns the amortized payment for a loan.


// #### [pv](./pv)
// `pv` returns the present value of an investment.


// ### Engineering

// #### [bin2dec](./bin2dec)
// `bin2dec` converts a binary number into a decimal value.


// #### [dec2bin](./dec2bin)
// `dec2bin` converts a decimal value to a binary string.


// #### [oct2dec](./oct2dec)
// `oct2dec` converts an octal string to a decimal value.


// ### Arrays

// #### [filter](./filter)
// `filter` limits a range based on arrays of true/false values.


// #### [flatten](./flatten)
// `flatten` returns an array with values flatten into a single dimension.


// #### [map](./map)
// `map` returns an array mapped to new values with a given function.


// #### [pluck](./pluck)
// `pluck` returns an array with a property plucked from an array of objects.


// #### [reduce](./reduce)
// `reduce` converts an array into a value.


// #### [some](./some)
// `some` returns true if some of the values in an array match the criteria.


// #### [sort](./sort)
// `sort` returns an array sorted by criteria.


// #### [unique](./unique)
// `unique` returns the list of unique values from an array.


// ### Objects

// #### [changed](./changed)
// `changed` computes the list of keys that are different between two objects.


// #### [diff](./diff)
// `diff` computes the unique left, unique right and changed properties of two objects.


// #### [clean](./clean)
// `clean` returns an object skipping properties with empty values.


// #### [get](./get)
// `get` returns the value of a property from an object.


// #### [select](./select)
// `select` returns an object with keys limited to a given set.


// ### Utility

// #### [cellindex](./cellindex)
// `cellindex` computes the index of a row/column in a fixed size 1 dimensional space.

var cellIndex = _cellindex2.default;

// #### [column](./column)
// `column` returns the column index from a cell index.


// #### [columnletter](./columnletter)
// `column` returns the column letter from a cell index.

var columnLetter = _columnletter2.default;

// #### [columnnumber](./columnnumber)
// `columnnumber` converts a column letter into a number.


// #### [decodebase64](./decodebase64)
// `decodeBase64` decodes the base 64 binary into string

var decodeBase64 = _decodebase2.default;
var atob = _decodebase2.default;

// #### [decodejwt](./decodejwt)
// `decodeJWT` decodes the payload from a JSON Web Token

var decodeJWT = _decodejwt2.default;

// #### [group](./group)
// `group` returns data group by one or more fields.


// #### [guid](./guid)
// `guid` returns a new globally unique identifier (version 4).


// #### [int](./int)
// `int` return the floor of a number.


// #### [index2col](./index2col)
// `index2col` computes the column given a cell index.


// #### [index2row](./index2row)
// `index2row` computes the row given a cell index.


// #### [n](./n)
// `n` converts a `value` to a number. It supports numbers, true, false and dates.


// #### [numbers](./numbers)
// `numbers` returns the numbers from an array.


// #### [ref](./ref)
// `ref` returns a ref object that represents a range.


// #### [serial](./serial)
// `serial` converts a JS date into the number of days from 1/1/1900.
exports.default = {
  run: _run2.default,
  compile: _compile2.default,
  abs: _abs2.default,
  accrint: _accrint2.default,
  acos: _acos2.default,
  acosh: _acosh2.default,
  acot: _acot2.default,
  acoth: _acoth2.default,
  add: _add2.default,
  and: _and2.default,
  atob: atob,
  average: _average2.default,
  bin2dec: _bin2dec2.default,
  branch: _branch2.default,
  cellIndex: cellIndex,
  cellindex: _cellindex2.default,
  changed: _changed2.default,
  char: _char2.default,
  choose: _choose2.default,
  clean: _clean2.default,
  code: _code2.default,
  column: _column2.default,
  columnLetter: columnLetter,
  columnletter: _columnletter2.default,
  columnnumber: _columnnumber2.default,
  concat: concat,
  concatenate: _concatenate2.default,
  cond: cond,
  cos: _cos2.default,
  date: _date2.default,
  dateValue: dateValue,
  datedif: _datedif2.default,
  datevalue: _datevalue2.default,
  day: _day2.default,
  days360: _days2.default,
  dec2bin: _dec2bin2.default,
  decodeBase64: decodeBase64,
  decodeJWT: decodeJWT,
  decodebase64: _decodebase2.default,
  decodejwt: _decodejwt2.default,
  diff: _diff2.default,
  divide: _divide2.default,
  edate: _edate2.default,
  eomonth: _eomonth2.default,
  eq: _eq2.default,
  exact: _exact2.default,
  filter: _filter2.default,
  find: _find2.default,
  flatten: _flatten2.default,
  fv: _fv2.default,
  get: _get2.default,
  group: _group2.default,
  gt: _gt2.default,
  gte: _gte2.default,
  guid: _guid2.default,
  hlookup: _hlookup2.default,
  hour: _hour2.default,
  ifBlank: ifBlank,
  ifEmpty: ifEmpty,
  ifError: ifError,
  ifNA: ifNA,
  ifblank: _ifblank2.default,
  ifempty: _ifempty2.default,
  iferror: _iferror2.default,
  ifna: _ifna2.default,
  ifs: ifs,
  includes: _includes2.default,
  index: _index2.default,
  index2col: _index2col2.default,
  index2row: _index2row2.default,
  int: _int2.default,
  isArray: isArray,
  isBlank: isBlank,
  isBool: isBool,
  isBoolean: isBoolean,
  isDate: isDate,
  isEmail: isEmail,
  isEmpty: isEmpty,
  isError: isError,
  isEven: isEven,
  isFunction: isFunction,
  isInteger: isInteger,
  isLeapYear: isLeapYear,
  isNA: isNA,
  isNumber: isNumber,
  isOdd: isOdd,
  isRef: isRef,
  isText: isText,
  isWholeNumber: isWholeNumber,
  isarray: _isarray2.default,
  isblank: _isblank2.default,
  isbool: isbool,
  isboolean: _isboolean2.default,
  isdate: _isdate2.default,
  isemail: _isemail2.default,
  isempty: _isempty2.default,
  iserror: _iserror2.default,
  iseven: _iseven2.default,
  isfalsy: _isfalsy2.default,
  isfunction: _isfunction2.default,
  isleapyear: _isleapyear2.default,
  isna: _isna2.default,
  isnan: _isnan2.default,
  isnumber: _isnumber2.default,
  isoWeekNum: isoWeekNum,
  isodd: _isodd2.default,
  isoweeknum: _isoweeknum2.default,
  isref: _isref2.default,
  istext: _istext2.default,
  istruthy: _istruthy2.default,
  isurl: _isurl2.default,
  iswholenumber: _iswholenumber2.default,
  join: _join2.default,
  left: _left2.default,
  len: _len2.default,
  lookup: _lookup2.default,
  lower: _lower2.default,
  lt: _lt2.default,
  lte: _lte2.default,
  map: _map2.default,
  match: _match2.default,
  max: _max2.default,
  min: _min2.default,
  minute: _minute2.default,
  month: _month2.default,
  multiply: _multiply2.default,
  n: _n2.default,
  ne: _ne2.default,
  not: _not2.default,
  now: _now2.default,
  nper: _nper2.default,
  npv: _npv2.default,
  numberValue: numberValue,
  numbers: _numbers2.default,
  numbervalue: _numbervalue2.default,
  oct2dec: _oct2dec2.default,
  or: _or2.default,
  parseBool: parseBool,
  parseDate: parseDate,
  parseQuery: parseQuery,
  parsebool: _parsebool2.default,
  parsedate: _parsedate2.default,
  parsequery: _parsequery2.default,
  pi: _pi2.default,
  pluck: _pluck2.default,
  pmt: _pmt2.default,
  power: _power2.default,
  proper: _proper2.default,
  pv: _pv2.default,
  query: _query2.default,
  reduce: _reduce2.default,
  ref: _ref2.default,
  replace: _replace2.default,
  rept: _rept2.default,
  right: _right2.default,
  round: _round2.default,
  roundup: _roundup2.default,
  search: _search2.default,
  second: _second2.default,
  select: _select2.default,
  serial: _serial2.default,
  sin: _sin2.default,
  some: _some2.default,
  sort: _sort2.default,
  split: _split2.default,
  substitute: _substitute2.default,
  substituteAll: _substituteAll2.default,
  subtract: _subtract2.default,
  sum: _sum2.default,
  surroundKeys: _surroundKeys2.default,
  tan: _tan2.default,
  tau: _tau2.default,
  template: template,
  text: _text2.default,
  time: _time2.default,
  timevalue: _timevalue2.default,
  today: _today2.default,
  trim: _trim2.default,
  trunc: _trunc2.default,
  unique: _unique2.default,
  upper: _upper2.default,
  vlookup: _vlookup2.default,
  xor: _xor2.default,
  year: _year2.default,
  yearfrac: _yearfrac2.default
};
module.exports = exports['default'];