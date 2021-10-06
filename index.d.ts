// Copyright 2015-2021 JC Fisher

// Contains type definitions for typescript users.
export declare enum basisOptions {
  US = 0,
  Actual,
  Actual360,
  // Copyright 2015-2021 JC Fisher
  Actual365,
  European
}

export declare enum roundingMode {
  Floor = 0,
  Ceiling = 1
}

export declare enum paymentTiming {
  End = 0,
  Beginning = 1
}

export declare enum months {
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12
}

export declare enum dateUnits {
  Years = "Y",
  Months = "M",
  Weeks = "W",
  Days = "D",
  DaysIgnoringMonthsAndYears = "MD",
  MonthsIgnoringDaysandYears = "YM",
  DaysIgnoringYears = "YD"
}

export declare enum matchType {
  GreaterThan = -1,
  Exact = 0,
  LessThan = 1
}

/** Compute absolute value */
export function abs(value: number): number;

/** Compute absolute value */
export function accrint(
  issue: string | Date,
  first: string | Date,
  settlement: string | Date,
  rate: number,
  par: number,
  frequency: number,
  basis: basisOptions
): number;

/** Compute the inverse cosine of a number */
export function acos(value: number): number;

/** Compute the hyperbolic inverse cosine of a value. */
export function acosh(value: number): number;

/** Compute the arccotangent of a given number. */
export function acot(value: number): number;

/** Compute the arccotangent of a given number. */
export function acoth(value: number): number;

/** Compute sum of a and b. */
export function add(a: number, b: number): number;

/** Converts a row and column into an address. */
export function address(
  row: string,
  col: string,
  absolute_relative_mode?: number,
  use_a1_notation?: boolean,
  sheet?: string
): string;

/** Reduces list of truthy values into true or false value. */
export function and(...criteria: Array<boolean | Function>): boolean;

/** Compute the inverse sin of a given number. */
export function asin(value: number): number;

/** Compute the inverse hyperbolic sin of a given number. */
export function asinh(value: number): number;

/** Assign properties from a list of objects into the initial object. */
export function assign(initial: object, ...list: Array<object>): number;

/** Compute the arctangent (in radians) of the given number. */
export function atan(value: number): number;

/** Compute the arctangent (in radians) of x and y. */
export function atan2(x: number, y: number): number;

/** Compute the inverse arctangent (in radians) of the given number */
export function atanh(x: number): number;

/** Compute the average of a list of numbers. */
export function average(...items: Array<number>): number;

/** Convert a number into a text representation with the given radix. */
export function base(
  number: number,
  radix: number,
  min_length?: number
): string;

/** Converts binary string into decimal value. */
export function bin2dec(value: string): number;

/** Functional equivalent to if-elseif-else. */
export function branch(...cases: Array<any>): boolean;

/** Convert snakecase to camelcase. */
export function camelcase(value: string): string;

/** Compute number rounded up, away from zero, to the nearest multiple of significance. */
export function ceiling(
  number: number,
  significance: number,
  mode?: roundingMode
): number;

/** Computes row and column in a location in a flat array. */
export function cellindex(row: number, col: number): number;

/** Computes the list of keys that are different between two objects. */
export function changed(a: object, b: object): object;

/** Compile a formula expression into a function. */
export function compile(exp: string): Function;

/** Convert an ascii code into a string. */
export function char(number: number): string;

/** Return the item that corresponds to the index. */
export function choose(index: number, ...items: Array<any>): any;

/** Compute object with blank properties removed. */
export function clean(obj: object): object;

/** Return the character code for a character in a string, optionally specify an index. */
export function code(text: string, index: number): string;

/** Convert column letter into number.  */
export function columnletter(letter: string): number;

/** Convert column number into letter.  */
export function columnnumber(number: number): string;

/** Compile multiple strings into a one. */
export function concatenate(
  ...values: Array<string | number | boolean>
): string;

/** Compute the cosine of a value. */
export function cos(value: number): number;

/** Compute the cumulative interest paid on a loan between start_period and end_period. */
export function cumipmt(
  rate: number,
  periods: number,
  value: number,
  start_period: number,
  end_period: number,
  type: paymentTiming
): number;

/** Compute the serial number given a year, month and day. */
export function date(year: number, month: months, day: number): number;

/** Compute the difference between two dates given a start date, end date and unit.  */
export function datedif(
  start_date: number | string | Date,
  end_date: number | string | Date,
  unit: dateUnits
): number;

/** Compute serial number. */
export function datevalue(d: number | string | Date): number;

/** Return day of month. */
export function day(d: number | string | Date): number;

/** Return number of days between 2 dates based on a 360 day year. */
export function days360(
  start_date: number | string | Date,
  end_date: number | string | Date,
  method?: boolean
);

/** Convert a decimal number into a binary number. */
export function dec2bin(input: number, places?: number): string;

/** Decode a base64 encoded string. */
export function decodebase64(str: string): string;

/** Decode metadata in JSON Web Token. */
export function decodejwt(token: string): object;

/** Converts radians into degrees. */
export function degrees(radians: number): number;

/** Convert differences between two objects */
export function diff(a: object, b: object): object;

/** Compute the product of two numbers. */
export function divide(numerator: number, denominator: number): number;

/** Compute the serial number for a date that is a given number of months before or after a given date. */
export function edate(
  start_date: number | string | Date,
  months: number
): number;

/** Compute the last day of the month in future or past months. */
export function eomonth(start_date: number | string | Date, months);

/** Compare two values with case insensitivity for strings. */
export function eq(a: any, b: any): boolean;

/** Compute number rounded up to the nearest even integer.  */
export function even(number: number): number;

/** Compare two values with strict equivalence. */
export function exact(a: any, b: any): boolean;

/** Filter a range with one or more filters. */
export function filter(
  range: Array<object | Array<any>>,
  ...filters: Array<Array<boolean> | Function | string>
): Array<object | Array<any>>;

/** Search for index of text within a string, optionally starting after position. */
export function find(
  find_text: string,
  within_text: string,
  position?: number
): number;

/** Convert nested array into flat array. */
export function flatten(ref: Array<any>): Array<any>;

/** Compute a number rounded down to a specified significance. */
export function floor(value: number, significance?: number): number;

/** Compute future value. */
export function fv(
  rate: number,
  periods: number,
  payment: number,
  value?: number,
  type?: number
): number;

/** Pluck property from object. */
export function get(property: string, object: object): any;

/** Group a list of objects by one or more fields. */
export function group(list: Array<any>, ...fields: Array<string>): object;

/** Compute if a is greater than b. */
export function gt(a: any, b: any): boolean;

/** Compute if a is greater than or equal to b. */
export function gte(a: any, b: any): boolean;

/** Compute a v4 globally unique identifier. */
export function guid(): string;

/** Find a needle in a table searching horizontally. */
export function hlookup(
  needle: any,
  table: Array<any>,
  index?: number,
  exactmatch?: boolean
);

/** Compute the hours from a value between 0 and 1; or from date. */
export function hour(value: number | Date): number;

/** Return value when non-blank or value_if_blank. */
export function ifblank(value: any, value_if_blank: any): any;

/** Return value when non-empty or value_if_empty. */
export function ifempty(value: any, value_if_empty: any): any;

/** Return value when non-error or value_if_error. */
export function iferror(value: any, value_if_error: any): any;

/** Return value when not #!NA or value_if_na. */
export function ifna(value: any, value_if_na: any): any;

/** Return true when searchElement is present in searchList. */
export function includes(
  searchElement: any,
  searchList: Array<any>,
  fromIndex?: number
): boolean;

/** Compute index of the reference in a row and column from a 2d array */
export function index(
  reference: Array<any>,
  row_num: number,
  column_num?: number
): any;

/** Computes the column number a cell index. */
export function index2col(index: number): number;

/** Computes the row number a cell index. */
export function index2row(index: number): number;

/** Convert a number into an integer. */
export function int(value: number): number;

/** Compute the portion of the periodic payment which is interest for a fixed rate loan or annuity. */
export function ipmt(
  rate: number,
  period: number,
  periods: number,
  present: number,
  future?: number,
  type?: number
): number;

/** Return true when value is an array. */
export function isarray(value: any): boolean;

/** Return true when value is a binary string. */
export function isbinary(value: string): boolean;

/** Return true when value is blank (null or undefined). */
export function isblank(value: any): boolean;

/** Return true when value is boolean. */
export function isboolean(value: any): boolean;

/** Return true when value is boolean. */
export function isboolean(value: any): boolean;

/** Return true when value is a Date. */
export function isdate(value: any): boolean;

/** return true when value is a valid email. */
export function isemail(value: string): boolean;

/** Return true when value is empty (null, undefined, blank string or empty with 0 length). */
export function isempty(value: any): boolean;

/** Return true when value is error except #NA!. */
export function iserr(value: any): boolean;

/** Return true when any value is error. */
export function iserror(...values: Array<any>): boolean;

/** Return true when value is even. */
export function iseven(value: number): boolean;

/** Return true when value is falsy. */
export function isfalsy(value: any): boolean;

/** Return true when value is a function. */
export function isfunction(value: any): boolean;

/** Return true when value is a date in a leapyear. */
export function isleapyear(value: number | string | Date): boolean;

/** Return true when value is all lowercase. */
export function islowercase(value: string): boolean;

/** Return true when value is error #NA!. */
export function isna(value: any): boolean;

/** Return true when value is NaN. */
export function isnan(value: any): boolean;

/** Return true when value is a number. */
export function isnumber(value: any): boolean;

/** Return true when value is an object. */
export function isobject(value: any): boolean;

/** Return true when value is odd. */
export function isodd(value: number): boolean;

/** Compute number of the ISO week number of the year for a given date. */
export function isoweeknum(date: number | string | Date): number;

/** Return true when value is a reference. */
export function isref(value: any): boolean;

/** Return true when value is text. */
export function istext(value: any): boolean;

/** Return true when value is truthy. */
export function istruthy(value: any): boolean;

/** Return true when value is all uppercase. */
export function isuppercase(value: string): boolean;

/** Return true when value is a valid url. */
export function isurl(value: string): boolean;

/** Return true when value is a whole number. */
export function iswholenumber(value: number): boolean;

/** Join a list of values into a string with a delimiter, defaults to ", ". */
export function join(list: Array<number | string>, delim?: string): string;

/** Return list of properties in an object. */
export function keys(subject: object): Array<string>;

/** Return left most `text` truncated to `number` of characters. */
export function left(text: string, number: number): string;

/** Return length of text or list. */
export function len(text: string | Array<any>): number;

//** Lookup value from an array. */
export function lookup(
  lookup_value: any,
  lookup_array: Array<any>,
  results_vector?: Array<any>
): any;

/** Convert `value` to lower case. */
export function lower(value: string): string;

/** Compute if a is less than b. */
export function lt(a: any, b: any): boolean;

/** Compute if a is less than or equal to b. */
export function lte(a: any, b: any): boolean;

/** Map each value in the `list` with `func`.  */
export function map(list: Array<any>, func: Function): Array<any>;

/** Return the index in `lookup_array` by searching for `lookup_value`. */
export function match(
  lookup_value: any,
  lookup_array: Array<any>,
  matchType?: matchType
);

/** Return largest value from `list`. */
export function max(...list: Array<number>): number;

/** Merge objects from setA and setB with corresponding indexes. */
export function merge(setA: Array<object>, setB: Array<object>): Array<object>;

/** Return smallest value from `list`. */
export function min(...list: Array<number>): number;

/** Invert the `value`. */
export function minus(value: number): number;

/** Compute the minutes from a value between 0 and 1; or from a date. */
export function minute(value: number | Date): number;

/** Compute the remainder of division. */
export function mod(number: number, divisor: number): number;

/** Compute the month of a `date`. */
export function month(date: number | string | Date): number;

/** Compute product of a and b. */
export function multiply(a: number, b: number): number;

/** Convert `value` into a number. */
export function n(value: any): number;

/** Return true when at least one value is false. */
export function nand(...criteria: Array<boolean | Function>): boolean;

/** Return true when a and b are not equal. */
export function ne(a: any, b: any): boolean;

/** Return true when all values are true or all values are false. */
export function nor(...criteria: Array<boolean | Function>): boolean;

/** Negate `value`. */
export function not(value: boolean | number): boolean;

/** Return true when searchElement is not present in searchList. */
export function notincludes(
  searchElement: any,
  searchList: Array<any>,
  fromIndex?: number
): boolean;

/** Return serial number for current time. */
export function now(value: boolean | number): boolean;

/** Return the number of periods for an investment. */
export function nper(
  rate: number,
  pmt: number,
  pv: number,
  fv?: number,
  type?: number
): number;

/** Compute the net present value of an investment. */
export function npv(rate: number, ...values: Array<number>): number;

// Filters non-numeric values from `values`.
export function numbers(...values: Array<any>): Array<number>;

/** Convert a text value into a number value. */
export function numbervalue(
  text: string,
  decimal_separator?: string,
  group_separator?: string
): number;

/** Convert an octal value into a decimal value. */
export function oct2dec(octalNumber: string): number;

/** Return true when any of the values are true or 1. */
export function or(...criteria: Array<any>): boolean;

/** Parse `exp` into an abstract syntax tree. */
export function parse(exp: string): object;

/** Convert `value` into a boolean. */
export function parsebool(value: any): boolean;

/** Convert `value` into a date. */
export function parsedate(value: any): Date;

/** Convert `queryString` into an object. */
export function parsequery(queryString: any): object;

/** Return PI. */
export function pi(): number;

/** Pluck a property from a list of objects. */
export function pluck(prop: string, list: Array<object>): Array<any>;

/** Convert `value` to number. */
export function plus(value: number): number;

/** Compute a loan payment */
export function pmt(
  rate: number,
  periods: number,
  present: number,
  future?: number,
  type?: number
): number;

/** Compute the power of `value` to the `nth`. */
export function power(value: number, nth: number): number;

/** Convert text into proper case. */
export function proper(text: string): string;

/** Compute present value. */
export function pv(
  rate: number,
  periods: number,
  payment: number,
  future?: number,
  type?: number
): number;

/** Execute a `query` against `data`. */
export function query(data: Array<any>, query: object): Array<any>;

/** Reduce an array to a value with `func`. */
export function reduce(
  arr: Array<any>,
  func: Function,
  ...rest: Array<any>
): any;

/** Create a reference object with `top` left and `bottom` right. */
export function ref(top: number | Function, bottom: number | Function): object;

/** Replace `num_chars` at `start` in `text` with `new_text`.  */
export function replace(
  text: string,
  start: number,
  num_chars: number,
  new_text: string
): string;

/** Repeat `text` a `number` of times. */
export function rept(text: string, number: number): string;

/** Return right most `text` truncated to `number` of characters. */
export function right(text: string, number: number): string;

/** Round `value` to a fixed `precision`. */
export function round(value: number, precision: number): number;

/** Round up `value` to a fixed `precision`. */
export function roundup(value: number, precision: number): number;

/** Execute a formula `exp` with `params`. */
export function run(exp: string, params: object): any;

/** Search for `find_text` in `within_text` with wildcards ?, \*, ~?, and ~\*.  */
export function search(
  find_text: string,
  within_text: string,
  position?: number
): number;

/** Compute the seconds from a value between 0 and 1; or from date. */
export function second(value: number | Date): number;

/** Select fields from object or array of objects. */
export function select(
  fields: string | Array<string>,
  object: object | Array<object>
): object | Array<object>;

/** Convert date into serial number. */
export function serial(date: Date): number;

/** Compute sin of value. */
export function sin(value: number): number;

/** Convert pascal case to snake case. */
export function snakecase(value: string): string;

/** Return true when needle found in list. */
export function some(needle: any, list: Array<any>): boolean;

/** Sort data with criteria of ordered pairs (field, asc, ...). */
export function sort(
  data: Array<any>,
  ...criteria: Array<string | number | boolean>
): Array<any>;

/** Split `text` with `delimiter`. */
export function split(text: string, delimiter: string): Array<string>;

/** Substitute `old_text` in `text` with `new_text`, optionally only 1 `occurence`. */
export function substitute(
  text: string,
  old_text: string,
  new_text: string,
  occurrence?: number
): string;

/** Lightweight template engine. */
export function substituteAll(
  content: string,
  locals: object,
  startToken?: string,
  endToken?: string
);

/** Compute the difference of two numbers. */
export function subtract(a: number, b: number): number;

/** Sum a list of `numbers`. */
export function sum(...numbers: Array<number>): number;

/** Append/prepend character to keys of subject. */
export function surroundKeys(
  subject: object,
  start?: string,
  end?: string
): object;

/** Search the odd args and return even value when odd arg equals targetValue. */
export function SWITCH(targetValue: any, ...args: Array<any>): any;

/** Compute the tagent of a value. */
export function tan(value: number): number;

/** Compute tau (pi * 2) */
export function tau(): number;

/** Format number. */
export function text(
  value: number,
  format: string,
  currency_char: string
): string;

/** Compute time fraction with hour, minute and second. */
export function time(hour: number, minute: number, second: number): number;

/** Compute time fraction with time string. */
export function timevalue(time: string): number;

/** Return serial number for current date. */
export function today(): number;

/** Remove whitespace from beginning and end of `text`. */
export function trim(text: string): string;

/** Drop decimal from number. */
export function trunc(value: number): number;

/** Nest array with given `length`. */
export function unflatten(list: Array<any>, length?: number): Array<any>;

/** Compute unique values in list. */
export function unique(list: Array<any>): Array<any>;

/** Convert text to upper case. */
export function upper(text: string): string;

/** Find a needle in a table searching vertically. */
export function vlookup(
  needle: any,
  table: Array<any>,
  index?: number,
  exactmatch?: boolean
): any;

/** Create walker function with config. */
export function walker(config): Function;

/** Compute the exclusive or for a given set of `values`. */
export function xor(...values: Array<any>): boolean;

/** Parse year out of date. */
export function year(date: string | number | Date): number;

/** Compute the fraction of a year between two dates. */
export function yearfrac(
  start_date: string | number | Date,
  end_date: string | number | Date,
  basis?: basisOptions
): number;
