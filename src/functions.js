// Copyright @ 2015-2016 JC Fisher

// # Formula's Functions

// ## Functions
// The library includes functions for logic, math, text, lookup, date/time, aggregation, arrays, objects, finance, statistics and other utilities.

// ### Formula

// #### [compile](./compile)
// `compile` converts a formula into a function.
export { default as COMPILE } from "./compile";

// #### [run](./run)
// `run` execute a formula once.
export { default as RUN } from "./run";

// ### Logical

// #### [branch](./branch)
// `branch` is equivalent to `if-elseif-else`.
export { default as BRANCH } from "./branch";
export { default as IF } from "./branch";
export { default as IFS } from "./branch";

// #### [choose](./choose)
// `choose` returns value from index_value from argument list.
export { default as CHOOSE } from "./choose";

// #### [Switch](./switch)
// `switch` is equivalent to `switch case`.
export { default as SWITCH } from "./switch";

// #### [and](./and)
// `and` returns true when all arguments are true or evaluates to true.
export { default as AND } from "./and";

// #### [nand](./nand)
// `nand` returns composition `not(and(...))`
export { default as NAND } from "./nand";

// #### [or](./or)
// `or` returns true when any argument is true or evaluates to true.
export { default as OR } from "./or";

// #### [nor](./nor)
// `nor` returns composition `not(or(...))`
export { default as NOR } from "./nor";

// #### [xor](./xor)
// `xor` returns the logical exclusive Or of all arguments.
export { default as XOR } from "./xor";

// #### [not](./not)
// `not` returns the inverse.
export { default as NOT } from "./not";

// #### [eq](./eq)
// `eq` returns true when the first and second arguments are equivalent. String comparision is _case insensitive_.
export { default as EQ } from "./eq";

// #### [ne](./ne)
// `ne` returns true when the first and second arguments are not equivalent. String comparision is _case insensitive_.
export { default as NE } from "./ne";

// #### [gt](./gt)
// `gt` returns true when first argument is greater than the second.
export { default as GT } from "./gt";

// #### [gte](./gte)
// `gte` returns true when first argument is greater than or equal to the second.
export { default as GTE } from "./gte";

// #### [lt](./lt)
// `lt` returns true when first argument is less than the second.
export { default as LT } from "./lt";

// #### [lte](./lte)
// `lte` returns true when first argument is less than or equal to the second.
export { default as LTE } from "./lte";

// #### [ifblank](./ifblank)
// `ifempty` returns the second argument when the first argument is blank or the third argument
export { default as IFBLANK } from "./ifblank";

// #### [ifempty](./ifempty)
// `ifempty` returns the second argument when the first argument is empty or the third argument
export { default as IFEMPTY } from "./ifempty";

// #### [iferror](./iferror)
// `ifempty` returns the second argument when the first argument is an error or the third argument
export { default as IFERROR } from "./iferror";

// #### [ifna](./ifna)
// `ifempty` returns the second argument when the first argument is #NA! or the third argument
export { default as IFNA } from "./ifna";

// #### [isarray](./isarray)
// `isarray` returns true when the value is an array.
export { default as ISARRAY } from "./isarray";

// #### [isblank](./isblank)
// `isblank` returns true when the value is undefined or null.
export { default as ISBLANK } from "./isblank";

// #### [isboolean](./isboolean)
// `isboolean` returns true when the value is true or false.
export { default as ISBOOLEAN } from "./isboolean";

// #### [isdate](./isdate)
// `isdate` returns true when the value is a JavaScript Date object.
export { default as ISDATE } from "./isdate";

// #### [isemail](./isemail)
// `isdate` returns true when the value matches the pattern for a valid email address.
export { default as ISEMAIL } from "./isemail";

// #### [isempty](./isempty)
// `isempty` returns true when the value is blank or empty string.
export { default as ISEMPTY } from "./isempty";

// #### [iserror](./iserror)
// `iserror` returns true when the value is an error value.
export { default as ISERROR } from "./iserror";

// #### [iseven](./iseven)
// `iseven` returns true when the value is an even number.
export { default as ISEVEN } from "./iseven";

// #### [isfalsy](./isfalsy)
// `isfalsy` returns true when value is a string.
export { default as ISFALSY } from "./isfalsy";

// #### [isfunction](./isfunction)
// `isfunction` returns true when the value is a JavaScript function.
export { default as ISFUNCTION } from "./isfunction";

// #### [isleapyear](./isleapyear)
// `isfunction` returns true when the value is a leap year.
export { default as ISLEAPYEAR } from "./isleapyear";

// #### [isobject](./isobject)
// `isobject` return true when object exists and is object or function.
export { default as ISOBJECT } from "./isobject";

// #### [isna](./isna)
// `isna` returns true when the value is #NA!.
export { default as ISNA } from "./isna";

// #### [isnan](./isnan)
// `isnan` returns true when the value is NaN.
export { default as ISNAN } from "./isnan";

// #### [isnumber](./isnumber)
// `isnumber` returns true when the value is JavaScript number type and not NaN and not infinite.
export { default as ISNUMBER } from "./isnumber";

// #### [isodd](./isodd)
// `isodd` returns true when the value is an odd number.
export { default as ISODD } from "./isodd";

// #### [isoweeknum](./isoweeknum)
// `isoweeknum` returns number of the ISO week number of the year for a given date.
export { default as ISOWEEKNUM } from "./isoweeknum";

// #### [isref](./isref)
// `isref` returns true when value is a ref object.
export { default as ISREF } from "./isref";

// #### [istext](./istext)
// `istext` returns true when value is a string.
export { default as ISTEXT } from "./istext";

// #### [istruthy](./istruthy)
// `istruthy` returns true when value is a string.
export { default as ISTRUTHY } from "./istruthy";

// #### [isurl](./isurl)
// `isurl` returns true when value matches a url pattern.
export { default as ISURL } from "./isurl";

// #### [iswholenumber](./iswholenumber)
// `iswholenumber` returns true when value is an integer.
export { default as ISWHOLENUMBER } from "./iswholenumber";

// ### Math functions

// #### [add](./add)
// `add` sums the first and second arguments.
export { default as ADD } from "./add";

// #### [subtract](./subtract)
// `subtract` returns the difference between the first and second arguments.
export { default as SUBTRACT } from "./subtract";

// #### [multiply](./multiply)
// `multiply` returns the product of the first and second arguments.
export { default as MULTIPLY } from "./multiply";

// #### [divide](./divide)
// `divide` returns the result of the first argument divided by the second.
export { default as DIVIDE } from "./divide";

// #### [abs](./abs)
// `abs` returns the absolute value of the first argument.
export { default as ABS } from "./abs";

// #### [acos](./acos)
// `acos` returns the inverse cosine of a number.
export { default as ACOS } from "./acos";

// #### [acosh](./acosh)
// `acosh` returns the hyperbolic inverse cosine of a number.
export { default as ACOSH } from "./acosh";

// #### [acot](./acot)
/// `acot` returns the arccotangent of a given number.
export { default as ACOT } from "./acot";

// #### [acoth](./acoth)
/// `acot` returns the hyperbolic arccotangent of a given number.
export { default as ACOTH } from "./acoth";

// #### [asin](./asin)
/// `asin` returns the arccosin of a given number.
export { default as ASIN } from "./asin";

// #### [asinh](./asinh)
/// `asinh` returns the hyperbolic arccosin of a given number.
export { default as ASINH } from "./asinh";

// #### [atan](./atan)
/// `atan` returns the arctangent of a given number.
export { default as ATAN } from "./atan";

// #### [atan2](./atan2)
/// `atan2` returns the arctangent, or inverse tangent, of the specified x- and y-coordinates.
export { default as ATAN2 } from "./atan2";

// #### [atanh](./atanh)
/// `atanh` returns the arctangent (in radians) of the given number.
export { default as ATANH } from "./atanh";

// #### [cos](./cos)
/// `cos` returns the cosine of a number
export { default as COS } from "./cos";

// #### [degrees](./degrees)
/// `degrees` returns radians converted to degrees.
export { default as DEGREES } from "./degrees";

// #### [pi](./pi)
export { default as PI } from "./pi";

// #### [power](./power)
// `power` returns the nth power of a number.
export { default as POWER } from "./power";

// #### [round](./round)
// `round` returns a number rounded to a precision.
export { default as ROUND } from "./round";

// #### [roundup](./roundup)
// `roundup` returns a number rounded up to a precision.
export { default as ROUNDUP } from "./roundup";

// #### [sin](./sin)
// `sin` return the sinine of a number.
export { default as SIN } from "./sin";

// #### [tan](./tan)
// `tan` returns the tangent of a number.
export { default as TAN } from "./tan";

// #### [tau](./tau)
export { default as TAU } from "./tau";

// #### [trunc](./trunc)
// `trunc` returns a number truncated to a given precision.
export { default as TRUNC } from "./trunc";

// ### Text

// #### [char](./char)
// `char` returns a character given an ASCII code.
export { default as CHAR } from "./char";

// #### [camelcase](./camelcase)
// `camelcase` returns text converted to camel case.
export { default as CAMELCASE } from "./camelcase";

// #### [code](./code)
// `code` returns the ASCII code for a given character.
export { default as CODE } from "./code";

// #### [concatenate](./concatenate)
// `concatenate` combines multiple values into a string.
export { default as CONCATENATE } from "./concatenate";

// #### [exact](./exact)
// `exact` compares two values for strict equivalence.
export { default as EXACT } from "./exact";

// #### [find](./find)
// `find` searches a string for a value and returns the index.
export { default as FIND } from "./find";

// #### [join](./join)
// `join` combines an array of values into a string with a given delimiter.
export { default as JOIN } from "./join";

// #### [left](./left)
// `left` returns a given number of characters from the left side of a string.
export { default as LEFT } from "./left";

// #### [len](./len)
// `len` returns the size of a string of array.
export { default as LEN } from "./len";

// #### [lower](./lower)
// `lower` converts text to lower case.
export { default as LOWER } from "./lower";

// #### [numbervalue](./numbervalue)
// `numbervalue` converts text into a number.
export { default as NUMBERVALUE } from "./numbervalue";

// #### [parsebool](./parsebool)
// `parsebool` converts text into a boolean value.
export { default as PARSEBOOL } from "./parsebool";

// #### [parsedate](./parsedate)
// `parsedate` converts text into a JavaScript date object
export { default as PARSEDATE } from "./parsedate";

// #### [parsequery](./parsequery)
// `parsequery` returns a JSObject for a URL query string.
export { default as PARSEQUERY } from "./parsequery";

// #### [proper](./proper)
// `proper` returns a string as a proper name.
export { default as PROPER } from "./proper";

// #### [replace](./replace)
// `replace` returns a string where one value is replaced with a new value.
export { default as REPLACE } from "./replace";

// #### [right](./right)
// `right` returns a given number of characters from the right of a string.
export { default as RIGHT } from "./right";

// #### [rept](./rept)
// `rept` returns a string with a given value repeated `n` times.
export { default as REPT } from "./rept";

// #### [search](./search)
// `search` returns the index of a value inside a string with wildcard support for single characters (?) and multiple characters (*).
export { default as SEARCH } from "./search";

// #### [snakecase](./snakecase)
// `snakecase` returns text converted to snake case.
export { default as SNAKECASE } from "./snakecase";

// #### [substitute](./substitute)
// `substitute` returns a new string with every instance of value replaced.
export { default as SUBSTITUTE } from "./substitute";

// #### [substituteAll](./substituteAll)
// `substituteAll` returns a new string with every instance of set of values replaced.
export { default as SUBSTITUTEALL } from "./substituteAll";

// #### [surroundKeys](./surroundKeys)
// `surroundKeys` returns a new object where the keys have been wrapped with start and end strings.
export { default as SURROUNDKEYS } from "./surroundKeys";

// #### [split](./split)
// `split` returns an array of strings from a given string separated by a delimiter.
export { default as SPLIT } from "./split";

// #### [text](./text)
// `text` formats numbers and dates using a format code.
export { default as TEXT } from "./text";

// #### [trim](./trim)
// `trim` returns a value with the whitespace removed from the left and right.
export { default as TRIM } from "./trim";

// #### [upper](./upper)
// `upper` returns a value in all upper case.
export { default as UPPER } from "./upper";

// ### Lookup and reference

// #### [hlookup](./hlookup)
// `hlookup` searches the first row and returns the value from the found column at a given row.
export { default as HLOOKUP } from "./hlookup";

// #### [includes](./includes)
// `includes` searches an array and returns the true or false for exact matches.
export { default as INCLUDES } from "./includes";

// #### [notincludes](./notincludes)
// `notincludes` searches an array and returns the true or false for exact matches.
export { default as NOTINCLUDES } from "./notincludes";

// #### [index](./index)
// `index` returns the value for a given row and column.
export { default as INDEX } from "./index";

// #### [lookup](./lookup)
// `lookup` searches an array and returns the value found or (optionally) the value at the same index in a second array.
export { default as LOOKUP } from "./lookup";

// #### [match](./match)
// `match` searches an array and returns the found index with support for wildcard and range queries.
export { default as MATCH } from "./match";

// #### [vlookup](./vlookup)
// `vlookup` searches the first column and returns the value from the found row at a given column.
export { default as VLOOKUP } from "./vlookup";

// ### Date manipulation

// #### [date](./date)
// `date` returns a serial number for a given year, month and day.
export { default as DATE } from "./date";

// #### [datevalue](./datevalue)
// `datevalue` returns a serial number for a given date string.
export { default as DATEVALUE } from "./datevalue";

// #### [datedif](./datedif)
// `datedif` returns the difference between two dates with support for multiple units.
export { default as DATEDIF } from "./datedif";

// #### [day](./day)
// `day` returns the day part from a date or date string.
export { default as DAY } from "./day";

// #### [days360](./days360)
// `days360` returns the days behind two dates using a 360 day year.
export { default as DAYS360 } from "./days360";

// #### [edate](./edate)
// `edate` returns the serial number for a date that is a given number of months before or after a given date.
export { default as EDATE } from "./edate";

// #### [eomonth](./eomonth)
// `eomonth` returns the last day of the month in future or past months.
export { default as EOMONTH } from "./eomonth";

// #### [hour](./hour)
// `hour` returns the hour part of a time fraction value.
export { default as HOUR } from "./hour";

// #### [minute](./minute)
// `minute` returns the minute part of a time fraction value.
export { default as MINUTE } from "./minute";

// #### [month](./month)
// `month` returns the month for a given date.
export { default as MONTH } from "./month";

// #### [now](./now)
// `now` returns the current date time in a serial number and time fraction.
export { default as NOW } from "./now";

// #### [second](./second)
// `second` return the second part of a time fraction
export { default as SECOND } from "./second";

// #### [today](./today)
// `today` returns a serial number for the current date.
export { default as TODAY } from "./today";

// #### [time](./time)
// `time` returns a time fraction for an hour, minute and second.
export { default as TIME } from "./time";

// #### [timevalue](./timevalue)
// `timevalue` returns a time fraction given a text value.
export { default as TIMEVALUE } from "./timevalue";

// #### [year](./year)
// `year` return the year for a given date.
export { default as YEAR } from "./year";

// #### [yearfrac](./yearfrac)
// `yearfrac` calculates the fraction of a year between two dates.
export { default as YEARFRAC } from "./yearfrac";

// ### Aggregation

// #### [average](./average)
// `average` returns the sum divided by the number of items.
export { default as AVERAGE } from "./average";

// #### [min](./min)
// `min` returns the smallest value in an array.
export { default as MIN } from "./min";

// #### [max](./max)
// `min` returns the largest value in an array.
export { default as MAX } from "./max";

// #### [query](./query)
// `min` returns the largest value in an array.
export { default as QUERY } from "./query";

// #### [sum](./sum)
// `sum` returns the value of all items in an array added together.
export { default as SUM } from "./sum";

// ### Finance

// #### [accrint](./accrint)
// `accrint` teturns the accrued interest for a security that pays periodic interest.
export { default as ACCRINT } from "./accrint";

// #### [fv](./fv)
// `fv` returns the future value of an investment.
export { default as FV } from "./fv";

// #### [nper](./nper)
// `nper` returns the number of periods for an investment.
export { default as NPER } from "./nper";

// #### [npv](./npv)
// `npv` returns the net present value of an investment.
export { default as NPV } from "./npv";

// #### [pmt](./pmt)
// `pmt` returns the amortized payment for a loan.
export { default as PMT } from "./pmt";

// #### [cumipmt](./cumipmt)
// `cumipmt` returns the cumulative interest on a loan between start and end period.
export { default as CUMIPMT } from "./cumipmt";

// #### [ipmt](./ipmt)
// `ipmt` returns the portion of the periodic payment which is interest for a fixed rate loan or annuity.
export { default as IPMT } from "./ipmt";

// #### [pv](./pv)
// `pv` returns the present value of an investment.
export { default as PV } from "./pv";

// ### Engineering

// #### [bin2dec](./bin2dec)
// `bin2dec` converts a binary number into a decimal value.
export { default as BIN2DEC } from "./bin2dec";

// #### [dec2bin](./dec2bin)
// `dec2bin` converts a decimal value to a binary string.
export { default as DEC2BIN } from "./dec2bin";

// #### [oct2dec](./oct2dec)
// `oct2dec` converts an octal string to a decimal value.
export { default as OCT2DEC } from "./oct2dec";

// ### Arrays

// #### [filter](./filter)
// `filter` limits a range based on arrays of true/false values.
export { default as FILTER } from "./filter";

// #### [flatten](./flatten)
// `flatten` returns an array with values flatten into a single dimension.
export { default as FLATTEN } from "./flatten";

// #### [map](./map)
// `map` returns an array mapped to new values with a given function.
export { default as MAP } from "./map";

// #### [pluck](./pluck)
// `pluck` returns an array with a property plucked from an array of objects.
export { default as PLUCK } from "./pluck";

// #### [reduce](./reduce)
// `reduce` converts an array into a value.
export { default as REDUCE } from "./reduce";

// #### [some](./some)
// `some` returns true if some of the values in an array match the criteria.
export { default as SOME } from "./some";

// #### [sort](./sort)
// `sort` returns an array sorted by criteria.
export { default as SORT } from "./sort";

// #### [unflatten](./unflatten)
// `unflatten` returns an array with values unflattened into arrays of arrays.
export { default as UNFLATTEN } from "./unflatten";

// #### [unique](./unique)
// `unique` returns the list of unique values from an array.
export { default as UNIQUE } from "./unique";

// ### Objects

// #### [changed](./changed)
// `changed` computes the list of keys that are different between two objects.
export { default as CHANGED } from "./changed";

// #### [diff](./diff)
// `diff` computes the unique left, unique right and changed properties of two objects.
export { default as DIFF } from "./diff";

// #### [clean](./clean)
// `clean` returns an object skipping properties with empty values.
export { default as CLEAN } from "./clean";

// #### [get](./get)
// `get` returns the value of a property from an object.
export { default as GET } from "./get";

// #### [select](./select)
// `select` returns an object with keys limited to a given set.
export { default as SELECT } from "./select";

// ### Utility

// #### [base](./base)
// `base` returns a number into a text representation with the given radix.
export { default as BASE } from "./base";

// #### [cellindex](./cellindex)
// `cellindex` computes the index of a row/column in a fixed size 1 dimensional space.
export { default as CELLINDEX } from "./cellindex";

// #### [ceiling](./ceiling)
// `ceiling` returns a number rounded up to a specified multiple.
export { default as CEILING } from "./ceiling";

// #### [column](./column)
// `column` returns the column index from a cell index.
export { default as COLUMN } from "./column";

// #### [columnletter](./columnletter)
// `column` returns the column letter from a cell index.
export { default as COLUMNLETTER } from "./columnletter";

// #### [columnnumber](./columnnumber)
// `columnnumber` converts a column letter into a number.
export { default as COLUMNNUMBER } from "./columnnumber";

// #### [decodebase64](./decodebase64)
// `decodeBase64` decodes the base 64 binary into string
export { default as DECODEBASE64 } from "./decodebase64";

// #### [decodejwt](./decodejwt)
// `decodeJWT` decodes the payload from a JSON Web Token
export { default as DECODEJWT } from "./decodejwt";

// #### [even](./even)
// `even` returns a number rounded up the nearest even integer.
export { default as EVEN } from "./even";

// #### [floor](./floor)
// `floor` returns a number rounded down to a specified multiple.
export { default as FLOOR } from "./floor";

// #### [group](./group)
// `group` returns data group by one or more fields.
export { default as GROUP } from "./group";

// #### [guid](./guid)
// `guid` returns a new globally unique identifier (version 4).
export { default as GUID } from "./guid";

// #### [int](./int)
// `int` return the floor of a number.
export { default as INT } from "./int";

// #### [index2col](./index2col)
// `index2col` computes the column given a cell index.
export { default as INDEX2COL } from "./index2col";

// #### [index2row](./index2row)
// `index2row` computes the row given a cell index.
export { default as INDEX2ROW } from "./index2row";

// #### [n](./n)
// `n` converts a `value` to a number. It supports numbers, true, false and dates.
export { default as N } from "./n";

// #### [numbers](./numbers)
// `numbers` returns the numbers from an array.
export { default as NUMBERS } from "./numbers";

// #### [ref](./ref)
// `ref` returns a ref object that represents a range.
export { default as REF } from "./ref";

// #### [serial](./serial)
// `serial` converts a JS date into the number of days from 1/1/1900.
export { default as SERIAL } from "./serial";
