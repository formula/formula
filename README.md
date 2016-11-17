[![Circle CI](https://circleci.com/gh/WebsiteHQ/functionfoundry.svg?style=svg)](https://circleci.com/gh/WebsiteHQ)

FunctionFoundry is function library written in ES6 and distributed as ES5 on npm.

It is for [formula](https://github.com/WebsiteHQ/formula).

## Install

```sh
npm install --save functionfoundry
```

```js
// import the the entire library
var ff = require('functionfoundry')

// import specific files
var isArray = require('functionfoundry/fn/isarray')
```

## Required Polyfills

The library depends on a modern JavaScript runtime. Load a polyfill like in [core-js](https://github.com/zloirock/core-js#commonjs) or [babel-polyfill](http://babeljs.io/docs/usage/polyfill/) to support old browsers.

Install required polyfills with [core-js](https://github.com/zloirock/core-js):

```js
require('core-js/fn/object/assign');
require('core-js/fn/object/keys');
require('core-js/fn/array/map');
require('core-js/fn/array/reduce');
```

## Examples

```js
var { and, eq, len, gt, lt, isnumber, isText, isEmail, isEmpty, lower, proper, text, date}
= require('functionfoundry')

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
var isNumber = require('functionfoundry/fn/isnumber')
var proper = require('functionfoundry/fn/proper')
```
