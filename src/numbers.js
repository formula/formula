// Copyright 2015 JC Fisher

import isnumber from './isnumber'
import reduce from './reduce'

export default function numbers(...values) {
  return reduce(
    values,
    (p, v) => isnumber(v) ? p.concat(v) : p,
    []
  )
}
