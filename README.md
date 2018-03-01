[![Circle CI](https://circleci.com/gh/formula/formula.svg?style=svg)](https://circleci.com/gh/formula/formula)

Formula expressions and functions for JavaScript.

## Install

```sh
# install with npm
npm install --save formula
```

## General Usage

```js
// ES6 import statements
import { run } from 'formula'

// CommonJS
var { and, eq, len, gt, lt, isnumber, isText, isEmail, isEmpty, lower, proper, text, date}
= require('formula')

run("sum(a, b, c) = 6", { a: 1, b: 2, c: 3})
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

## Reduce bundle sizes

Require specific functions to reduce bundle size with tools like webpack.

```js
var isNumber = require('formula/fn/isnumber')
var proper = require('formula/fn/proper')
```

## Browser ready build

There is a browser ready build in the dist folder. You can include with a <script> tag. It uses `formula` as the namespace.


Sponsored by <a href="https://formbucket.com">FormBucket</a>
