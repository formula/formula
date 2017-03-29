[![Circle CI](https://circleci.com/gh/formula/formula.svg?style=svg)](https://circleci.com/gh/formula/formula)

# formula

A formula parser and function library for browsers and Node.js.

## Install

```sh
npm install --save formula
```

## Usage

```js
var { run, and, eq, len, gt, lt, isnumber, isText, isEmail, isEmpty, lower, proper, text, date}
= require('formula')

run("a + b", { a: 2, b: 2})
isnumber(1),
isText('this is'),
isEmail('me@gmail.com'),
isEmpty(''),
gt(2, 1),
lt(1, 2),
and(true, false, true),
eq(len('foo'), 3),
eq(lower('HAPPY'), 'happy'),
eq(proper('happy'), 'Happy'),
eq(text(4200.00, "$#,###.00"), '$4,200.00'),
eq(text(date(2000, 2, 1), "m-d-yyyy"), '2-1-2000')
```

Optionally, may load specific functions to reduce bundle size.

```
var isNumber = require('formula/fn/isnumber')
var proper = require('formula/fn/proper')
```


## Runtime Dependencies

**formula** depends on a modern JavaScript runtime.

Load [polyfills](https://github.com/zloirock/core-js#commonjs) for old browsers:

```js
require('core-js/fn/array/filter');
require('core-js/fn/array/map');
require('core-js/fn/array/reduce');
require('core-js/fn/object/assign');
require('core-js/fn/object/keys');
require('core-js/fn/number/is-nan');
```
