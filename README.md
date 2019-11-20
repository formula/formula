[![Circle CI](https://circleci.com/gh/formula/formula.svg?style=svg)](https://circleci.com/gh/FormBucket/formula)
[![npm version](https://badge.fury.io/js/formula.svg)](https://badge.fury.io/js/formula)

Formula expressions and functions for JavaScript.

## Install

```sh
npm install --save formula
```

## General Usage

```js
import { run } from "formula";
run("sum(a, b, c) = 1+2+3", { a: 1, b: 2, c: 3 });
```

## Browser ready

Add to the browser with:

```html
<script type="text/javascript" src="https://unpkg.com/formula@3.8.1/lib/formula.min.js"
```
