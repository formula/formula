// Copyright 2015 JC Fisher

import isnumber from './isnumber'

export default function numbers(...values) {
  console.log(values)
  return values.reduce(
    (p, v) => isnumber(v) ? p.concat(v) : p,
    []
  )
}
