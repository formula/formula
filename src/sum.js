// Copyright 2015 JC Fisher

import flatten from './flatten'
import error from './error'

// SUM a given list of `numbers`
export default function sum(...numbers) {
    return flatten(flatten(numbers))
    .reduce((a, b) => {
      if (typeof b !== 'number') { return error.value }
      return a + b
    });
}
