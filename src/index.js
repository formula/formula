// Copyright 2015 Peter W Moresi

// FunctionFoundry is a collection of pure functions.
//
// The functions accept input and produce output. They do not create side effects and are therefore composable.
//
// The library is organized several core compatibilities:
//
// 1. Logical functions
//   - AND, OR, NOT, EQ, NE, GT, GTE, LT, LTE, SWITCH, COND and more...
//
// 2. Math functions
//   - ADD, SUBTRACT, MULTIPLY, DIVIDE, SIN, COS, ect...
//
// 3. Text manipulation
//   - TEXT, NUMBERVALUE, SPLIT and more...
//
// 4. Lookup and reference/
//   - LOOKUP, VLOOKUP, HLOOKUP and more...
//
// 5. Date manipulation
//   - Functions withsSupport for spreadsheet serial numbers like DATE, DATEDIF and more...
//
// 6. Aggregation
//   - SUM, AVERAGE, MIN, MAX
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
export {branch} from './branch'
export {cellindex} from './cellindex'
export {changed} from './changed'
export {choose} from './choose'
export {clean} from './clean'
export {code} from './code'
export {column} from './column'
export {columnletter} from './columnletter'
export {columnnumber} from './columnnumber'
export {concatenate} from './concatenate'
export {cos} from './cos'
export {date} from './date'
export {datevalue} from './datevalue'
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
export {ifblank} from './ifblank'
export {ifempty} from './ifempty'
export {iferror} from './iferror'
export {ifna} from './ifna'
export {index2col} from './index2col'
export {index2row} from './index2row'
export {indirect} from './indirect'
export {isarray} from './isarray'
export {isblank} from './isblank'
export {isdate} from './isdate'
export {isemail} from './isemail'
export {isempty} from './isempty'
export {iserror} from './iserror'
export {iseven} from './iseven'
export {isfunction} from './isfunction'
export {isna} from './isna'
export {isnumber} from './isnumber'
export {isodd} from './isodd'
export {isref} from './isref'
export {istext} from './istext'
export {isurl} from './isurl'
export {len} from './len'
export {lookup} from './lookup'
export {lower} from './lower'
export {lt} from './lt'
export {lte} from './lte'
export {min} from './min'
export {max} from './max'
export {multiply} from './multiply'
export {n} from './n'
export {numbervalue} from './numbervalue'
export {ne} from './ne'
export {not} from './not'
export {oct2dec} from './oct2dec'
export {or} from './or'
export {parsebool} from './parsebool'
export {parsedate} from './parsedate'
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
