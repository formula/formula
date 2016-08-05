import {isnumber} from './isnumber'

export function numbers(...values) {
  console.log(values)
  return values.reduce(
    (p, v) => isnumber(v) ? p.concat(v) : p,
    []
  )
}
