import error from './error'

// combine a array of strings/numbers into a single string
export default function join(list, delim=', ') {

  // all values must be string or number
  if (list.some(d => typeof d !== 'string' && typeof d !== 'number')) {
    return error.value
  }

  // defer to JS implementation
  return list.join(delim)
}
