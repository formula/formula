// Creates a new object where all of the keys are surrounded by
// start and end delimiters.
export default function surroundKeys(obj, start='-', end) {
  end = end || start
  return Object.keys(obj).reduce((p, v) => {
    p[`${start}${v}${end}`] = obj[v];
    return p;
  }, {})
}
