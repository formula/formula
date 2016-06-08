// Copyright 2015 Peter W Moresi

import {na} from './error'

// merge two array of arrays
export function merge(setA, setB, fieldOrIndex) {

  if (setA.length !== setB.length) {
    return na;
  }

  let mode = typeof fieldOrIndex === 'string' ? 'field' : 'index',
  startIndex = mode === 'field' ? 1 : 0;

  return setA.map((item, index) => {
    return Object.assign({}, item, setB[index])
  })

}
