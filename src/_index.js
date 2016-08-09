// Copyright @ 2015-2016 Peter W Moresi

// # FunctionFoundry
// Library of functions distributed through npm.
//
// ## Install
//   ```sh
//   npm install --save functionfoundry
//   ```

// ## Polyfills
// The library includes a polyfill for Number.isNaN.

// ### Number.isNaN
// credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
Number.isNaN = Number.isNaN || function(value) {
    return value !== value;
}


// ## Functions
// The library includes functions for logic, math, text, lookup, date/time, aggregation, arrays, objects, finance, statistics and other utilities.

// ### Logical

// #### [branch](./branch)
// `branch` is equivalent to `if-elseif-else`. The alias is `cond`.
export {branch, branch as cond} from './branch'

// #### [choose](./choose)
// `choose` is equivalent to `switch case`.
export {choose} from './choose'

// #### [and](./and)
// `and` returns true when all arguments are true or evaluates to true.
export {and} from './and'

// #### [or](./or)
// `or` returns true when any argument is true or evaluates to true.
export {or} from './or'

// #### [not](./not)
// `not` returns the inverse.
export {not} from './not'

// #### [eq](./eq)
// `eq` returns true when the first and second arguments are equivalent. String comparision is _case insensitive_. 
export {eq} from './eq'

// #### [ne](./ne)
// `ne` returns true when the first and second arguments are not equivalent. String comparision is _case insensitive_. 
export {ne} from './ne'

// #### [gt](./gt)
// `gt` returns true when first argument is greater than the second.
export {gt} from './gt'

// #### [gte](./gte)
// `gte` returns true when first argument is greater than or equal to the second.
export {gte} from './gte'


// #### [lt](./lt)
// `lt` returns true when first argument is less than the second.
export {lt} from './lt'

// #### [lte](./lte)
// `lte` returns true when first argument is less than or equal to the second.
export {lte} from './lte'


// #### [ifblank](./ifblank)
// `ifempty` returns the second argument when the first argument is blank or the third argument
export {ifblank, ifblank as ifBlank} from './ifblank'

// #### [ifempty](./ifempty)
// `ifempty` returns the second argument when the first argument is empty or the third argument
export {ifempty, ifempty as ifEmpty} from './ifempty'

// #### [iferror](./iferror)
// `ifempty` returns the second argument when the first argument is an error or the third argument
export {iferror, iferror as ifError} from './iferror'

// #### [ifna](./ifna)
// `ifempty` returns the second argument when the first argument is #NA! or the third argument
export {ifna, ifna as ifNA } from './ifna'

// #### [isarray](./isarray)
// `isarray` returns true when the value is an array.
export {isarray, isarray as isArray} from './isarray'

// #### [isblank](./isblank)
// `isblank` returns true when the value is undefined or null.
export {isblank, isblank as isBlank} from './isblank'

// #### [isboolean](./isboolean)
// `isboolean` returns true when the value is true or false.
export {isboolean, isboolean as isbool, isboolean as isBoolean, isboolean as isBool} from './isboolean'

// #### [isdate](./isdate)
// `isdate` returns true when the value is a JavaScript Date object.
export {isdate, isdate as isDate} from './isdate'

// #### [isemail](./isemail)
// `isdate` returns true when the value matches the pattern for a valid email address.
export {isemail, isemail as isEmail} from './isemail'

// #### [isempty](./isempty)
// `isempty` returns true when the value is blank or empty string.
export {isempty, isempty as isEmpty} from './isempty'

// #### [iserror](./iserror)
// `iserror` returns true when the value is an error value.
export {iserror, iserror as isError} from './iserror'

// #### [iseven](./iseven)
// `iseven` returns true when the value is an even number.
export {iseven, iseven as isEven} from './iseven'

// #### [isfunction](./isfunction)
// `isfunction` returns true when the value is a JavaScript function.
export {isfunction, isfunction as isFunction} from './isfunction'

// #### [isleapyear](./isleapyear)
// `isfunction` returns true when the value is a leap year.
export {isleapyear, isleapyear as isLeapYear} from './isleapyear'

// #### [isna](./isna)
// `isna` returns true when the value is #NA!.
export {isna, isna as isNA} from './isna'

// #### [isnumber](./isnumber)
// `isnumber` returns true when the value is JavaScript number type and not NaN and not infinite.
export {isnumber, isnumber as isNumber } from './isnumber'

// #### [isodd](./isodd)
// `isodd` returns true when the value is an odd number.
export {isodd, isodd as isOdd } from './isodd'

// #### [isoweeknum](./isoweeknum)
// `isoweeknum` returns number of the ISO week number of the year for a given date.
export {isoweeknum, isoweeknum as isoWeekNum } from './isoweeknum'

// #### [isref](./isref)
// `isref` returns true when value is a ref object.
export {isref, isref as isRef } from './isref'

// #### [istext](./istext)
// `istext` returns true when value is a string.
export {istext, istext as isText} from './istext'

// #### [isurl](./isurl)
// `isurl` returns true when value matches a url pattern.
export {isurl, isurl as ISURL} from './isurl'

// #### [xor](./xor)
// `xor` returns the logical exclusive Or of all arguments.
export {xor} from './xor'

// ### Math functions

// #### [add](./add)
// `add` sums the first and second arguments.
export {add} from './add'

// #### [subtract](./subtract)
// `subtract` returns the difference between the first and second arguments.
export {subtract} from './subtract'

// #### [multiply](./multiply)
// `multiply` returns the product of the first and second arguments.
export {multiply} from './multiply'

// #### [divide](./divide)
// `divide` returns the result of the first argument divided by the second.
export {divide} from './divide'

// #### [abs](./abs)
// `abs` returns the absolute value of the first argument.
export {abs} from './abs'

// #### [acos](./acos)
// `acos` returns the inverse cosine of a number.
export {acos} from './acos'

// #### [cos](./cos)
/// `cos` returns the cosine of a number
export {cos} from './cos'

// #### [pi](./pi)
/// `pi` returns the circle constant 3.14...
export {pi} from './pi'

// #### [power](./power)
// `power` returns the nth power of a number.
export {power} from './power'

// #### [round](./round)
// `round` returns a number rounded to a precision.
export {round} from './round'

// #### [roundup](./roundup)
// `roundup` returns a number rounded up to a precision.
export {roundup} from './roundup'

// #### [sin](./sin)
// `sin` return the sinine of a number.
export {sin} from './sin'

// #### [tan](./tan)
// `tan` returns the tangent of a number.
export {tan} from './tan'

// #### [tau](./tau)
// `tau` returns the circle constant 6.28...
export {tau} from './tau'

// #### [trunc](./trunc)
// `trunc` returns a number truncated to a given precision.
export {trunc} from './trunc'

// ### Text

// #### [code](./code)
// `code` returns the ASCII code for a given character.
export {code} from './code'

// #### [concatenate](./concatenate)
// `concatenate` combines multiple values into a string.
export {concatenate} from './concatenate'

// #### [exact](./exact)
// `exact` compares two values for strict equivalence.
export {exact} from './exact'

// #### [find](./find)
// `find` searches a string for a value and returns the index.
export {find} from './find'

// #### [join](./join)
// `join` combines an array of values into a string with a given delimiter.
export {join} from './join'

// #### [left](./left)
// `left` returns a given number of characters from the left side of a string.
export {left} from './left'

// #### [len](./len)
// `len` returns the size of a string of array.
export {len} from './len'

// #### [lower](./lower)
// `lower` converts text to lower case.
export {lower} from './lower'

// #### [numbervalue](./numbervalue)
// `numbervalue` converts text into a number.
export {numbervalue, numbervalue as numberValue} from './numbervalue'

// #### [parsebool](./parsebool)
// `parsebool` converts text into a boolean value.
export {parsebool, parsebool as parseBool} from './parsebool'

// #### [parsedate](./parsedate)
// `parsedate` converts text into a JavaScript date object
export {parsedate, parsedate as parseDate} from './parsedate'

// #### [parsequery](./parsequery)
// `parsequery` returns a JSObject for a URL query string.
export {parsequery, parsequery as parseQuery} from './parsequery'

// #### [proper](./proper)
// `proper` returns a string as a proper name. 
export {proper} from './proper'

// #### [replace](./replace)
// `replace` returns a string where one value is replaced with a new value.
export {replace} from './replace'

// #### [right](./right)
// `right` returns a given number of characters from the right of a string.
export {right} from './right'

// #### [rept](./rept)
// `rept` returns a string with a given value repeated `n` times.
export {rept} from './rept'

// #### [search](./search)
// `search` returns the index of a value inside a string with wildcard support for single characters (?) and multiple characters (*).
export {search} from './search'

// #### [substitute](./substitute)
// `substitute` returns a new string with every instance of value replaced.
export {substitute} from './substitute'

// #### [split](./split)
// `split` returns an array of strings from a given string separated by a delimiter.
export {split} from './split'

// #### [text](./text)
// `text` formats numbers and dates using a format code.
export {text} from './text'

// #### [trim](./trim)
// `trim` returns a value with the whitespace removed from the left and right.
export {trim} from './trim'

// #### [upper](./upper)
// `upper` returns a value in all upper case.
export {upper} from './upper'

// ### Lookup and reference

// #### [hlookup](./hlookup)
// `hlookup` searches the first row and returns the value from the found column at a given row.
export {hlookup} from './hlookup'

// #### [index](./index)
// `index` returns the value for a given row and column.
export {index} from './index'

// #### [lookup](./lookup)
// `lookup` searches an array and returns the value found or (optionally) the value at the same index in a second array.
export {lookup} from './lookup'

// #### [match](./match)
// `match` searches an array and returns the found index with support for wildcard and range queries.
export {match} from './match'

// #### [vlookup](./vlookup)
// `vlookup` searches the first column and returns the value from the found row at a given column.
export {vlookup} from './vlookup'

// ### Date manipulation

// #### [date](./date)
// `date` returns a serial number for a given year, month and day.
export {date} from './date'

// #### [datevalue](./datevalue)
// `datevalue` returns a serial number for a given date string.
export {datevalue, datevalue as dateValue} from './datevalue'

// #### [datedif](./datedif)
// `datedif` returns the difference between two dates with support for multiple units.
export {datedif} from './datedif'

// #### [day](./day)
// `day` returns the day part from a date or date string.
export {day} from './day'

// #### [days360](./days360)
// `days360` returns the days behind two dates using a 360 day year.
export {days360} from './days360'

// #### [edate](./edate)
// `edate` returns the serial number for a date that is a given number of months before or after a given date.
export {edate} from './edate'

// #### [eomonth](./eomonth)
// `eomonth` returns the last day of the month in future or past months.
export {eomonth} from './eomonth'

// #### [hour](./hour)
// `hour` returns the hour part of a time fraction value.
export {hour} from './hour'

// #### [minute](./minute)
// `minute` returns the minute part of a time fraction value.
export {minute} from './minute'

// #### [month](./month)
// `month` returns the month for a given date.
export {month} from './month'

// #### [now](./now)
// `now` returns the current date time in a serial number and time fraction.
export {now} from './now'

// #### [second](./second)
// `second` return the second part of a time fraction
export {second} from './second'

// #### [today](./today)
// `today` returns a serial number for the current date.
export {today} from './today'

// #### [time](./time)
// `time` returns a time fraction for an hour, minute and second.
export {time} from './time'

// #### [timevalue](./timevalue)
// `timevalue` returns a time fraction given a text value.
export {timevalue} from './timevalue'

// #### [year](./year)
// `year` return the year for a given date.
export {year} from './year'

// #### [yearfrac](./yearfrac)
// `yearfrac` calculates the fraction of a year between two dates.
export {yearfrac} from './yearfrac'

// ### Aggregation

// #### [average](./average)
// `average` returns the sum divided by the number of items.
export {average} from './average'

// #### [min](./min)
// `min` returns the smallest value in an array.
export {min} from './min'

// #### [max](./max)
// `min` returns the largest value in an array.
export {max} from './max'

// #### [sum](./sum)
// `sum` returns the value of all items in an array added together.
export {sum} from './sum'

// ### Finance

// #### [fv](./fv)
// `fv` returns the future value of an investment.
export {fv} from './fv'

// #### [nper](./nper)
// `nper` returns the number of periods for an investment.
export {nper} from './nper'

// #### [npv](./npv)
// `npv` returns the net present value of an investment.
export {npv} from './npv'

// #### [pmt](./pmt)
// `pmt` returns the amortized payment for a loan.
export {pmt} from './pmt'

// #### [pv](./pv)
// `pv` returns the present value of an investment.
export {pv} from './pv'

// ### Engineering

// #### [bin2dec](./bin2dec)
// `bin2dec` converts a binary number into a decimal value.
export {bin2dec} from './bin2dec'

// #### [dec2bin](./dec2bin)
// `dec2bin` converts a decimal value to a binary string.
export {dec2bin} from './dec2bin'

// #### [oct2dec](./oct2dec)
// `oct2dec` converts an octal string to a decimal value.
export {oct2dec} from './oct2dec'

// ### Arrays

// #### [filter](./filter)
// `filter` limits a range based on arrays of true/false values.
export {filter} from './filter'

// #### [flatten](./flatten)
// `flatten` returns an array with values flatten into a single dimension.
export {flatten} from './flatten'

// #### [map](./map)
// `map` returns an array mapped to new values with a given function.
export {map} from './map'

// #### [pluck](./pluck)
// `pluck` returns an array with a property plucked from an array of objects.
export {pluck} from './pluck'

// #### [reduce](./reduce)
// `reduce` converts an array into a value.
export {reduce} from './reduce'

// #### [some](./some)
// `some` returns true if some of the values in an array match the criteria.
export {some, some as in} from './some'

// #### [sort](./sort)
// `sort` returns an array sorted by criteria.
export {sort} from './sort'

// #### [unique](./unique)
// `unique` returns the list of unique values from an array.
export {unique} from './unique'

// ### Objects

// #### [changed](./changed)
// `changed` computes the list of keys that are different between two objects.
export {changed} from './changed'

// #### [diff](./diff)
// `diff` computes the unique left, unique right and changed properties of two objects.
export {diff} from './diff'

// #### [clean](./clean)
// `clean` returns an object skipping properties with empty values.
export {clean} from './clean'

// #### [get](./get)
// `get` returns the value of a property from an object.
export {get} from './get'

// #### [select](./select)
// `select` returns an object with keys limited to a given set.
export {select} from './select'

// ### Utility

// #### [cellindex](./cellindex)
// `cellindex` computes the index of a row/column in a fixed size 1 dimensional space.
export {cellindex, cellindex as cellIndex} from './cellindex'

// #### [column](./column)
// `column` returns the column index from a cell index.
export {column} from './column'

// #### [columnletter](./columnletter)
// `column` returns the column letter from a cell index.
export {columnletter, columnletter as columnLetter} from './columnletter'

// #### [columnnumber](./columnnumber)
// `columnnumber` converts a column letter into a number.
export {columnnumber} from './columnnumber'

// #### [guid](./guid)
// `guid` returns a new globally unique identifier (version 4).
export {guid} from './guid'

// #### [int](./int)
// `int` return the floor of a number.
export {int} from './int'

// #### [index2col](./index2col)
// `index2col` computes the column given a cell index.
export {index2col} from './index2col'

// #### [index2row](./index2row)
// `index2row` computes the row given a cell index.
export {index2row} from './index2row'

// #### [n](./n)
// `n` converts a `value` to a number. It supports numbers, true, false and dates.
export {n} from './n'

// #### [numbers](./numbers)
// `numbers` returns the numbers from an array.
export {numbers} from './numbers'

// #### [ref](./ref)
// `ref` returns a ref object that represents a range.
export {ref} from './ref'

// #### [serial](./serial)
// `serial` converts a JS date into the number of days from 1/1/1900.
export {serial} from './serial'
