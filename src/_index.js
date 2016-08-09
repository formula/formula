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
export {branch, branch as cond} from './branch'
export {choose} from './choose'
export {and} from './and'
export {or} from './or'
export {not} from './not'
export {eq} from './eq'
export {ne} from './ne'
export {gt} from './gt'
export {gte} from './gte'
export {lt} from './lt'
export {lte} from './lte'
export {ifblank, ifblank as ifBlank} from './ifblank'
export {ifempty, ifempty as ifEmpty} from './ifempty'
export {iferror, iferror as ifError} from './iferror'
export {ifna, ifna as ifNA } from './ifna'
export {isarray, isarray as isArray} from './isarray'
export {isblank, isblank as isBlank} from './isblank'
export {isboolean, isboolean as isbool, isboolean as isBoolean, isboolean as isBool} from './isboolean'
export {isdate, isdate as isDate} from './isdate'
export {isemail, isemail as isEmail} from './isemail'
export {isempty, isempty as isEmpty} from './isempty'
export {iserror, iserror as isError} from './iserror'
export {iseven, iseven as isEven} from './iseven'
export {isfunction, isfunction as isFunction} from './isfunction'
export {isleapyear, isleapyear as isLeapYear} from './isleapyear'
export {isna, isna as isNA} from './isna'
export {isnumber, isnumber as isNumber } from './isnumber'
export {isodd, isodd as isOdd } from './isodd'
export {isoweeknum, isoweeknum as isoWeekNum } from './isoweeknum'
export {isref, isref as isRef } from './isref'
export {istext, istext as isText} from './istext'
export {isurl, isurl as ISURL} from './isurl'
export {xor} from './xor'

// ### Math functions
export {add} from './add'
export {subtract} from './subtract'
export {multiply} from './multiply'
export {divide} from './divide'
export {abs} from './abs'
export {acos} from './acos'
export {cos} from './cos'
export {pi} from './pi'
export {power} from './power'
export {round} from './round'
export {roundup} from './roundup'
export {sin} from './sin'
export {tan} from './tan'
export {tau} from './tau'
export {trunc} from './trunc'

// ### Text
export {code} from './code'
export {concatenate} from './concatenate'
export {exact} from './exact'
export {find} from './find'
export {join} from './join'
export {left} from './left'
export {len} from './len'
export {lower} from './lower'
export {numbervalue, numbervalue as numberValue} from './numbervalue'
export {parsebool, parsebool as parseBool} from './parsebool'
export {parsedate, parsedate as parseDate} from './parsedate'
export {parsequery, parsequery as parseQuery} from './parsequery'
export {replace} from './replace'
export {right} from './right'
export {rept} from './rept'
export {search} from './search'
export {substitute} from './substitute'
export {split} from './split'
export {text} from './text'
export {trim} from './trim'
export {upper} from './upper'

// ### Lookup and reference
export {hlookup} from './hlookup'
export {index} from './index'
export {lookup} from './lookup'
export {match} from './match'
export {vlookup} from './vlookup'

// ### Date manipulation
export {date} from './date'
export {datevalue, datevalue as dateValue} from './datevalue'
export {datedif} from './datedif'
export {day} from './day'
export {days360} from './days360'
export {edate} from './edate'
export {eomonth} from './eomonth'
export {hour} from './hour'
export {minute} from './minute'
export {month} from './month'
export {now} from './now'
export {second} from './second'
export {today} from './today'
export {time} from './time'
export {timevalue} from './timevalue'
export {year} from './year'
export {yearfrac} from './yearfrac'

// ### Aggregation
export {average} from './average'
export {min} from './min'
export {max} from './max'
export {sum} from './sum'

// ### Finance
export {fv} from './fv'
export {nper} from './nper'
export {npv} from './npv'
export {pmt} from './pmt'
export {pv} from './pv'

// ### Engineering
export {bin2dec} from './bin2dec'
export {dec2bin} from './dec2bin'
export {oct2dec} from './oct2dec'

// ### Arrays
export {filter} from './filter'
export {flatten} from './flatten'
export {map} from './map'
export {pluck} from './pluck'
export {reduce} from './reduce'
export {some, some as in} from './some'
export {sort} from './sort'
export {unique} from './unique'

// ### Objects
export {changed} from './changed'
export {diff} from './diff'
export {clean} from './clean'
export {get} from './get'
export {select} from './select'

// ### Utility
export {cellindex, cellindex as cellIndex} from './cellindex'
export {column} from './column'
export {columnletter, columnletter as columnLetter} from './columnletter'
export {columnnumber} from './columnnumber'
export {guid} from './guid'
export {int} from './int'
export {index2col} from './index2col'
export {index2row} from './index2row'
export {indirect} from './indirect'
export {n} from './n'
export {numbers} from './numbers'
export {ref} from './ref'
export {serial} from './serial'
