// Copyright @ 2015-2016 JC Fisher

// # Formula's Functions

// ## Functions
// The library includes functions for logic, math, text, lookup, date/time, aggregation, arrays, objects, finance, statistics and other utilities.

// ### Formula

// #### [compile](./compile)
// `compile` converts a formula into a function.
import compile from './compile'

// #### [run](./run)
// `run` execute a formula once.
import run from './run'

// ### Logical

// #### [branch](./branch)
// `branch` is equivalent to `if-elseif-else`.
import branch from './branch'

// define `cond` alias for branch
const cond = branch

// #### [choose](./choose)
// `choose` is equivalent to `switch case`.
import choose from './choose'

// #### [and](./and)
// `and` returns true when all arguments are true or evaluates to true.
import and from './and'

// #### [or](./or)
// `or` returns true when any argument is true or evaluates to true.
import or from './or'

// #### [not](./not)
// `not` returns the inverse.
import not from './not'

// #### [eq](./eq)
// `eq` returns true when the first and second arguments are equivalent. String comparision is _case insensitive_.
import eq from './eq'

// #### [ne](./ne)
// `ne` returns true when the first and second arguments are not equivalent. String comparision is _case insensitive_.
import ne from './ne'

// #### [gt](./gt)
// `gt` returns true when first argument is greater than the second.
import gt from './gt'

// #### [gte](./gte)
// `gte` returns true when first argument is greater than or equal to the second.
import gte from './gte'


// #### [lt](./lt)
// `lt` returns true when first argument is less than the second.
import lt from './lt'

// #### [lte](./lte)
// `lte` returns true when first argument is less than or equal to the second.
import lte from './lte'


// #### [ifblank](./ifblank)
// `ifempty` returns the second argument when the first argument is blank or the third argument
import ifblank from './ifblank'
const ifBlank = ifblank

// #### [ifempty](./ifempty)
// `ifempty` returns the second argument when the first argument is empty or the third argument
import ifempty from './ifempty'
const ifEmpty = ifempty

// #### [iferror](./iferror)
// `ifempty` returns the second argument when the first argument is an error or the third argument
import iferror from './iferror'
const ifError = iferror

// #### [ifna](./ifna)
// `ifempty` returns the second argument when the first argument is #NA! or the third argument
import ifna  from './ifna'
const ifNA = ifna

// #### [isarray](./isarray)
// `isarray` returns true when the value is an array.
import isarray from './isarray'
const isArray = isarray

// #### [isblank](./isblank)
// `isblank` returns true when the value is undefined or null.
import isblank from './isblank'
const isBlank = isblank

// #### [isboolean](./isboolean)
// `isboolean` returns true when the value is true or false.
import isboolean from './isboolean'
const isbool = isboolean
const isBoolean = isboolean
const isBool = isboolean

// #### [isdate](./isdate)
// `isdate` returns true when the value is a JavaScript Date object.
import isdate from './isdate'
const isDate = isdate

// #### [isemail](./isemail)
// `isdate` returns true when the value matches the pattern for a valid email address.
import isemail from './isemail'
const isEmail = isemail

// #### [isempty](./isempty)
// `isempty` returns true when the value is blank or empty string.
import isempty from './isempty'
const isEmpty = isempty

// #### [iserror](./iserror)
// `iserror` returns true when the value is an error value.
import iserror from './iserror'
const isError = iserror

// #### [iseven](./iseven)
// `iseven` returns true when the value is an even number.
import iseven from './iseven'
const isEven = iseven

// #### [isfalsy](./isfalsy)
// `isfalsy` returns true when value is a string.
import isfalsy from './isfalsy'
const isFalsy = isfalsy

// #### [isfunction](./isfunction)
// `isfunction` returns true when the value is a JavaScript function.
import isfunction from './isfunction'
const isFunction = isfunction

// #### [isleapyear](./isleapyear)
// `isfunction` returns true when the value is a leap year.
import isleapyear from './isleapyear'
const isLeapYear = isleapyear

// #### [isna](./isna)
// `isna` returns true when the value is #NA!.
import isna from './isna'
const isNA = isna

// #### [isnan](./isnan)
// `isnan` returns true when the value is NaN.
import isnan from './isnan'
const isNaN = isnan

// #### [isnumber](./isnumber)
// `isnumber` returns true when the value is JavaScript number type and not NaN and not infinite.
import isnumber from './isnumber'
const isNumber = isnumber

// #### [isodd](./isodd)
// `isodd` returns true when the value is an odd number.
import isodd from './isodd'
const isOdd = isodd

// #### [isoweeknum](./isoweeknum)
// `isoweeknum` returns number of the ISO week number of the year for a given date.
import isoweeknum from './isoweeknum'
const isoWeekNum = isoweeknum

// #### [isref](./isref)
// `isref` returns true when value is a ref object.
import isref from './isref'
const isRef = isref

// #### [istext](./istext)
// `istext` returns true when value is a string.
import istext from './istext'
const isText = istext

// #### [istruthy](./istruthy)
// `istruthy` returns true when value is a string.
import istruthy from './istruthy'
const isTruthy = istruthy

// #### [isurl](./isurl)
// `isurl` returns true when value matches a url pattern.
import isurl from './isurl'
const isURL = isurl

// #### [iswholenumber](./iswholenumber)
// `iswholenumber` returns true when value is an integer.
import iswholenumber from './iswholenumber'
const isWholeNumber = iswholenumber
const isInteger = iswholenumber

// #### [xor](./xor)
// `xor` returns the logical exclusive Or of all arguments.
import xor from './xor'

// ### Math functions

// #### [add](./add)
// `add` sums the first and second arguments.
import add from './add'

// #### [subtract](./subtract)
// `subtract` returns the difference between the first and second arguments.
import subtract from './subtract'

// #### [multiply](./multiply)
// `multiply` returns the product of the first and second arguments.
import multiply from './multiply'

// #### [divide](./divide)
// `divide` returns the result of the first argument divided by the second.
import divide from './divide'

// #### [abs](./abs)
// `abs` returns the absolute value of the first argument.
import abs from './abs'

// #### [acos](./acos)
// `acos` returns the inverse cosine of a number.
import acos from './acos'

// #### [cos](./cos)
/// `cos` returns the cosine of a number
import cos from './cos'

// #### [pi](./pi)
/// `pi` returns the circle constant 3.14...
import pi from './pi'

// #### [power](./power)
// `power` returns the nth power of a number.
import power from './power'

// #### [round](./round)
// `round` returns a number rounded to a precision.
import round from './round'

// #### [roundup](./roundup)
// `roundup` returns a number rounded up to a precision.
import roundup from './roundup'

// #### [sin](./sin)
// `sin` return the sinine of a number.
import sin from './sin'

// #### [tan](./tan)
// `tan` returns the tangent of a number.
import tan from './tan'

// #### [tau](./tau)
// `tau` returns the circle constant 6.28...
import tau from './tau'

// #### [trunc](./trunc)
// `trunc` returns a number truncated to a given precision.
import trunc from './trunc'

// ### Text

// #### [char](./char)
// `char` returns a character given an ASCII code.
import char from './char'

// #### [code](./code)
// `code` returns the ASCII code for a given character.
import code from './code'

// #### [concatenate](./concatenate)
// `concatenate` combines multiple values into a string.
import concatenate from './concatenate'
const concat = concatenate

// #### [exact](./exact)
// `exact` compares two values for strict equivalence.
import exact from './exact'

// #### [find](./find)
// `find` searches a string for a value and returns the index.
import find from './find'

// #### [join](./join)
// `join` combines an array of values into a string with a given delimiter.
import join from './join'

// #### [left](./left)
// `left` returns a given number of characters from the left side of a string.
import left from './left'

// #### [len](./len)
// `len` returns the size of a string of array.
import len from './len'

// #### [lower](./lower)
// `lower` converts text to lower case.
import lower from './lower'

// #### [numbervalue](./numbervalue)
// `numbervalue` converts text into a number.
import numbervalue from './numbervalue'
const numberValue = numbervalue

// #### [parsebool](./parsebool)
// `parsebool` converts text into a boolean value.
import parsebool from './parsebool'
const parseBool = parsebool

// #### [parsedate](./parsedate)
// `parsedate` converts text into a JavaScript date object
import parsedate from './parsedate'
const parseDate = parsedate

// #### [parsequery](./parsequery)
// `parsequery` returns a JSObject for a URL query string.
import parsequery from './parsequery'
const parseQuery = parsequery

// #### [proper](./proper)
// `proper` returns a string as a proper name.
import proper from './proper'

// #### [replace](./replace)
// `replace` returns a string where one value is replaced with a new value.
import replace from './replace'

// #### [right](./right)
// `right` returns a given number of characters from the right of a string.
import right from './right'

// #### [rept](./rept)
// `rept` returns a string with a given value repeated `n` times.
import rept from './rept'

// #### [search](./search)
// `search` returns the index of a value inside a string with wildcard support for single characters (?) and multiple characters (*).
import search from './search'

// #### [substitute](./substitute)
// `substitute` returns a new string with every instance of value replaced.
import substitute from './substitute'

// #### [substituteAll](./substituteAll)
// `substituteAll` returns a new string with every instance of set of values replaced.
import substituteAll from './substituteAll'
const template = substituteAll

// #### [surroundKeys](./surroundKeys)
// `surroundKeys` returns a new object where the keys have been wrapped with start and end strings.
import surroundKeys from './surroundKeys'

// #### [split](./split)
// `split` returns an array of strings from a given string separated by a delimiter.
import split from './split'

// #### [text](./text)
// `text` formats numbers and dates using a format code.
import text from './text'

// #### [trim](./trim)
// `trim` returns a value with the whitespace removed from the left and right.
import trim from './trim'

// #### [upper](./upper)
// `upper` returns a value in all upper case.
import upper from './upper'

// ### Lookup and reference

// #### [hlookup](./hlookup)
// `hlookup` searches the first row and returns the value from the found column at a given row.
import hlookup from './hlookup'

// #### [includes](./includes)
// `includes` searches an array and returns the true or false for exact matches.
import includes from './includes'

// #### [index](./index)
// `index` returns the value for a given row and column.
import index from './index'

// #### [lookup](./lookup)
// `lookup` searches an array and returns the value found or (optionally) the value at the same index in a second array.
import lookup from './lookup'

// #### [match](./match)
// `match` searches an array and returns the found index with support for wildcard and range queries.
import match from './match'

// #### [vlookup](./vlookup)
// `vlookup` searches the first column and returns the value from the found row at a given column.
import vlookup from './vlookup'

// ### Date manipulation

// #### [date](./date)
// `date` returns a serial number for a given year, month and day.
import date from './date'

// #### [datevalue](./datevalue)
// `datevalue` returns a serial number for a given date string.
import datevalue from './datevalue'
const dateValue = datevalue

// #### [datedif](./datedif)
// `datedif` returns the difference between two dates with support for multiple units.
import datedif from './datedif'

// #### [day](./day)
// `day` returns the day part from a date or date string.
import day from './day'

// #### [days360](./days360)
// `days360` returns the days behind two dates using a 360 day year.
import days360 from './days360'

// #### [edate](./edate)
// `edate` returns the serial number for a date that is a given number of months before or after a given date.
import edate from './edate'

// #### [eomonth](./eomonth)
// `eomonth` returns the last day of the month in future or past months.
import eomonth from './eomonth'

// #### [hour](./hour)
// `hour` returns the hour part of a time fraction value.
import hour from './hour'

// #### [minute](./minute)
// `minute` returns the minute part of a time fraction value.
import minute from './minute'

// #### [month](./month)
// `month` returns the month for a given date.
import month from './month'

// #### [now](./now)
// `now` returns the current date time in a serial number and time fraction.
import now from './now'

// #### [second](./second)
// `second` return the second part of a time fraction
import second from './second'

// #### [today](./today)
// `today` returns a serial number for the current date.
import today from './today'

// #### [time](./time)
// `time` returns a time fraction for an hour, minute and second.
import time from './time'

// #### [timevalue](./timevalue)
// `timevalue` returns a time fraction given a text value.
import timevalue from './timevalue'

// #### [year](./year)
// `year` return the year for a given date.
import year from './year'

// #### [yearfrac](./yearfrac)
// `yearfrac` calculates the fraction of a year between two dates.
import yearfrac from './yearfrac'

// ### Aggregation

// #### [average](./average)
// `average` returns the sum divided by the number of items.
import average from './average'

// #### [min](./min)
// `min` returns the smallest value in an array.
import min from './min'

// #### [max](./max)
// `min` returns the largest value in an array.
import max from './max'

// #### [query](./query)
// `min` returns the largest value in an array.
import query from './query'

// #### [sum](./sum)
// `sum` returns the value of all items in an array added together.
import sum from './sum'

// ### Finance

// #### [accrint](./accrint)
// `accrint` teturns the accrued interest for a security that pays periodic interest.
import accrint from './accrint'

// #### [fv](./fv)
// `fv` returns the future value of an investment.
import fv from './fv'

// #### [nper](./nper)
// `nper` returns the number of periods for an investment.
import nper from './nper'

// #### [npv](./npv)
// `npv` returns the net present value of an investment.
import npv from './npv'

// #### [pmt](./pmt)
// `pmt` returns the amortized payment for a loan.
import pmt from './pmt'

// #### [pv](./pv)
// `pv` returns the present value of an investment.
import pv from './pv'

// ### Engineering

// #### [bin2dec](./bin2dec)
// `bin2dec` converts a binary number into a decimal value.
import bin2dec from './bin2dec'

// #### [dec2bin](./dec2bin)
// `dec2bin` converts a decimal value to a binary string.
import dec2bin from './dec2bin'

// #### [oct2dec](./oct2dec)
// `oct2dec` converts an octal string to a decimal value.
import oct2dec from './oct2dec'

// ### Arrays

// #### [filter](./filter)
// `filter` limits a range based on arrays of true/false values.
import filter from './filter'

// #### [flatten](./flatten)
// `flatten` returns an array with values flatten into a single dimension.
import flatten from './flatten'

// #### [map](./map)
// `map` returns an array mapped to new values with a given function.
import map from './map'

// #### [pluck](./pluck)
// `pluck` returns an array with a property plucked from an array of objects.
import pluck from './pluck'

// #### [reduce](./reduce)
// `reduce` converts an array into a value.
import reduce from './reduce'

// #### [some](./some)
// `some` returns true if some of the values in an array match the criteria.
import some from './some'

// #### [sort](./sort)
// `sort` returns an array sorted by criteria.
import sort from './sort'

// #### [unique](./unique)
// `unique` returns the list of unique values from an array.
import unique from './unique'

// ### Objects

// #### [changed](./changed)
// `changed` computes the list of keys that are different between two objects.
import changed from './changed'

// #### [diff](./diff)
// `diff` computes the unique left, unique right and changed properties of two objects.
import diff from './diff'

// #### [clean](./clean)
// `clean` returns an object skipping properties with empty values.
import clean from './clean'

// #### [get](./get)
// `get` returns the value of a property from an object.
import get from './get'

// #### [select](./select)
// `select` returns an object with keys limited to a given set.
import select from './select'

// ### Utility

// #### [cellindex](./cellindex)
// `cellindex` computes the index of a row/column in a fixed size 1 dimensional space.
import cellindex from './cellindex'
const cellIndex = cellindex

// #### [column](./column)
// `column` returns the column index from a cell index.
import column from './column'

// #### [columnletter](./columnletter)
// `column` returns the column letter from a cell index.
import columnletter from './columnletter'
const columnLetter = columnletter

// #### [columnnumber](./columnnumber)
// `columnnumber` converts a column letter into a number.
import columnnumber from './columnnumber'

// #### [decodebase64](./decodebase64)
// `decodeBase64` decodes the base 64 binary into string
import decodebase64 from './decodebase64'
const decodeBase64 = decodebase64
const atob = decodebase64

// #### [decodejwt](./decodejwt)
// `decodeJWT` decodes the payload from a JSON Web Token
import decodejwt from './decodejwt'
const decodeJWT = decodejwt

// #### [guid](./guid)
// `guid` returns a new globally unique identifier (version 4).
import guid from './guid'

// #### [int](./int)
// `int` return the floor of a number.
import int from './int'

// #### [index2col](./index2col)
// `index2col` computes the column given a cell index.
import index2col from './index2col'

// #### [index2row](./index2row)
// `index2row` computes the row given a cell index.
import index2row from './index2row'

// #### [n](./n)
// `n` converts a `value` to a number. It supports numbers, true, false and dates.
import n from './n'

// #### [numbers](./numbers)
// `numbers` returns the numbers from an array.
import numbers from './numbers'

// #### [ref](./ref)
// `ref` returns a ref object that represents a range.
import ref from './ref'

// #### [serial](./serial)
// `serial` converts a JS date into the number of days from 1/1/1900.
import serial from './serial'

export default {
  run,
  compile,
  abs,
  accrint,
  acos,
  add,
  and,
  atob,
  average,
  bin2dec,
  branch,
  cellIndex,
  cellindex,
  changed,
  char,
  choose,
  clean,
  code,
  column,
  columnLetter,
  columnletter,
  columnnumber,
  concat,
  concatenate,
  cond,
  cos,
  date,
  dateValue,
  datedif,
  datevalue,
  day,
  days360,
  dec2bin,
  decodeBase64,
  decodeJWT,
  decodebase64,
  decodejwt,
  diff,
  divide,
  edate,
  eomonth,
  eq,
  exact,
  filter,
  find,
  flatten,
  fv,
  get,
  gt,
  gte,
  guid,
  hlookup,
  hour,
  ifBlank,
  ifEmpty,
  ifError,
  ifNA,
  ifblank,
  ifempty,
  iferror,
  ifna,
  includes,
  index,
  index2col,
  index2row,
  int,
  isArray,
  isBlank,
  isBool,
  isBoolean,
  isDate,
  isEmail,
  isEmpty,
  isError,
  isEven,
  isFunction,
  isInteger,
  isLeapYear,
  isNA,
  isNumber,
  isOdd,
  isRef,
  isText,
  isWholeNumber,
  isarray,
  isblank,
  isbool,
  isboolean,
  isdate,
  isemail,
  isempty,
  iserror,
  iseven,
  isfalsy,
  isfunction,
  isleapyear,
  isna,
  isnan,
  isnumber,
  isoWeekNum,
  isodd,
  isoweeknum,
  isref,
  istext,
  istruthy,
  isurl,
  iswholenumber,
  join,
  left,
  len,
  lookup,
  lower,
  lt,
  lte,
  map,
  match,
  max,
  min,
  minute,
  month,
  multiply,
  n,
  ne,
  not,
  now,
  nper,
  npv,
  numberValue,
  numbers,
  numbervalue,
  oct2dec,
  or,
  parseBool,
  parseDate,
  parseQuery,
  parsebool,
  parsedate,
  parsequery,
  pi,
  pluck,
  pmt,
  power,
  proper,
  pv,
  query,
  reduce,
  ref,
  replace,
  rept,
  right,
  round,
  roundup,
  search,
  second,
  select,
  serial,
  sin,
  some,
  sort,
  split,
  substitute,
  substituteAll,
  subtract,
  sum,
  surroundKeys,
  tan,
  tau,
  template,
  text,
  time,
  timevalue,
  today,
  trim,
  trunc,
  unique,
  upper,
  vlookup,
  xor,
  year,
  yearfrac,
}
