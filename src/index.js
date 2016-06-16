// Copyright 2015 Peter W Moresi

// FunctionFoundry is a collection of pure functions.
//
// The functions accept input and produce output. They do not create side effects and are therefore composable.
//
// The library is organized several core compatibilities:
//
// 1. Logical functions
//   - and, or, nor, eq, ne, gt, gte, lt, lte, branch and more...
//
// 2. Math functions
//   - add, subtract, multiply, divide, sin, cos, ect...
//
// 3. Text manipulation
//   - text, numbervalue, split and more...
//
// 4. Lookup and reference/
//   - lookup, vlookup, hlookup and more...
//
// 5. Date manipulation
//   - Functions withsSupport for spreadsheet serial numbers like date, datedif and more...
//
// 6. Aggregation
//   - sum, average, min, max
//
// The library currently is approaching 100 functions. The long term goal is to support the ~300 functions supported by modern spreadsheet software.
//
// The test suite includes over ~600 assertions to ensure high quality and provide usage examples.
//
export {abs} from './abs'
export {acos} from './acos'
export {add} from './add'
export {and} from './and'
export {average} from './average'
export {bin2dec} from './bin2dec'
export {branch, branch as cond} from './branch'
export {cellindex, cellindex as cellIndex} from './cellindex'
export {changed} from './changed'
export {choose} from './choose'
export {clean} from './clean'
export {code} from './code'
export {column} from './column'
export {columnletter, columnletter as columnLetter} from './columnletter'
export {columnnumber} from './columnnumber'
export {concatenate} from './concatenate'
export {cos} from './cos'
export {date} from './date'
export {datevalue, datevalue as dateValue} from './datevalue'
export {datedif} from './datedif'
export {days360} from './days360'
export {dec2bin} from './dec2bin'
export {diff} from './diff'
export {divide} from './divide'
export {eq} from './eq'
export {exact} from './exact'
export {filter} from './filter'
export {find} from './find'
export {flatten} from './flatten'
export {gt} from './gt'
export {gte} from './gte'
export {guid} from './guid'
export {hlookup} from './hlookup'
export {ifblank, ifblank as ifBlank} from './ifblank'
export {ifempty, ifempty as ifEmpty} from './ifempty'
export {iferror, iferror as ifError} from './iferror'
export {ifna, ifna as ifNA } from './ifna'
export {index2col} from './index2col'
export {index2row} from './index2row'
export {indirect} from './indirect'
export {isarray, isarray as isArray} from './isarray'
export {isblank, isblank as isBlank} from './isblank'
export {isboolean, isboolean as isbool, isboolean as isBoolean, isboolean as isBool} from './isboolean'
export {isdate, isdate as isDate} from './isdate'
export {isemail, isemail as isEmail} from './isemail'
export {isempty, isempty as isEmpty} from './isempty'
export {iserror, iserror as isError} from './iserror'
export {iseven, iseven as isEven} from './iseven'
export {isfunction, isfunction as isFunction} from './isfunction'
export {isna, isna as isNA} from './isna'
export {isnumber, isnumber as isNumber } from './isnumber'
export {isodd, isodd as isOdd } from './isodd'
export {isref, isref as isRef } from './isref'
export {istext, istext as isText} from './istext'
export {isurl, isurl as ISURL} from './isurl'
export {len} from './len'
export {lookup} from './lookup'
export {lower} from './lower'
export {lt} from './lt'
export {lte} from './lte'
export {min} from './min'
export {max} from './max'
export {multiply} from './multiply'
export {n} from './n'
export {numbervalue, numbervalue as numberValue} from './numbervalue'
export {ne} from './ne'
export {not} from './not'
export {oct2dec} from './oct2dec'
export {or} from './or'
export {parsebool, parsebool as parseBool} from './parsebool'
export {parsedate, parsedate as parseDate} from './parsedate'
export {pi} from './pi'
export {pmt} from './pmt'
export {power} from './power'
export {ref} from './ref'
export {replace} from './replace'
export {rept} from './rept'
export {right} from './right'
export {round} from './round'
export {roundup} from './roundup'
export {search} from './search'
export {select} from './select'
export {serial} from './serial'
export {sin} from './sin'
export {some} from './some'
export {sort} from './sort'
export {split} from './split'
export {substitute} from './substitute'
export {subtract} from './subtract'
export {sum} from './sum'
export {tan} from './tan'
export {tau} from './tau'
export {text} from './text'
export {trim} from './trim'
export {unique} from './unique'
export {upper} from './upper'
export {vlookup} from './vlookup'
export {xor} from './xor'
