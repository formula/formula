[![Circle CI](https://circleci.com/gh/FormBucket/formula.svg?style=svg)](https://circleci.com/gh/FormBucket/formula)

Formula expressions and functions for JavaScript.

## Install

```sh
npm install --save formula
```

## General Usage

```js
import { RUN } from 'formula'
RUN("sum(a, b, c) = 1+2+3", { a: 1, b: 2, c: 3})
```

## Browser ready

Add to your browser with:

```html
<script type="text/javascript" src="https://unpkg.com/formula@3.0.0/umd/formula.min.js"
```

## Reduce bundle sizes

Require specific functions to reduce bundle size.

```js
var isNumber = require('formula/fn/isnumber')
var proper = require('formula/fn/proper')
```

## About this project

Project by <a href="https://formbucket.com">FormBucket</a>
