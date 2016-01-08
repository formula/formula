// Take an object with falsy values and return a clean object with no falsy values
import {ISBLANK} from './ISBLANK'

export function CLEAN(obj) {
  return Object.keys(obj)
  .reduce( (a, b) => ISBLANK(obj[b]) ? a : a.concat(b), [])
  .reduce( (a, b) => { a[b] = obj[b]; return a } , {})
}
