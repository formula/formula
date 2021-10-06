[![Circle CI](https://circleci.com/gh/formula/formula.svg?style=svg)](https://circleci.com/gh/formula/formula)
[![npm version](https://badge.fury.io/js/formula.svg)](https://badge.fury.io/js/formula)

Best function and expression library for JSON.

## Install

```sh
npm install --save formula
```

## General Usage

```js
import { run } from "formula";

// jsonpath + spreadsheet-like expression system eats json for lunch.
run("$.a.b = 1", '{ "a": { "b": 1 } }')

// sum, vlookup, hlookup and friends.
run("sum(a, b, c) = 1+2+3", { a: 1, b: 2, c: 3 });
```

## Browser ready

Add to the browser with:

```html
<script type="text/javascript" src="https://unpkg.com/formula@3.16.0/lib/formula.min.js"
```
