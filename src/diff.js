// Copyright 2015 WebsiteHQ LLC

export default function diff(a, b) {
  let keysA = Object.keys(a),
  keysB = Object.keys(b),
  InA = keysB.filter(n => keysA.indexOf(n) > -1),
  NotInA = keysB.filter(n => keysA.indexOf(n) === -1),
  NotInB = keysA.filter(n => keysB.indexOf(n) === -1),
  Diff = InA.filter( n => a[n] !== b[n])

  return {
    unique_left: NotInA,
    unique_right: NotInB,
    diff: Diff.reduce( (x, y) => {
      var diff = { }
      diff[y] = { left: a[y], right: b[y]}
      return Object.assign({}, x, diff)
    }, {})
  }
}
