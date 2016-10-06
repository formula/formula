// reduce an array to a value
export default function reduce(arr, f) {
  return arr.reduce((p,v) => f(p,v))
}
