// map an array to a new array
export default function map(arr, f) {
  return arr.map(d => f(d))
}
