// Copyright 2015 Peter W Moresi
import error from './ERROR'

// NOT negates a `value`
export function NOT(value) {
  return (value !== true && value !== false && value !== 1 && value !== 0) ? 
  error.value :
  !value
}
