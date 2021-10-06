// Copyright 2015-2021 JC Fisher
import reduce from "./reduce";
import keys from "./keys";
import assign from "./assign";

export default function diff(a, b) {
  let keysA = keys(a),
    keysB = keys(b),
    InA = keysB.filter(n => keysA.indexOf(n) > -1),
    NotInA = keysB.filter(n => keysA.indexOf(n) === -1),
    NotInB = keysA.filter(n => keysB.indexOf(n) === -1),
    Diff = InA.filter(n => a[n] !== b[n]);

  return {
    unique_left: NotInA,
    unique_right: NotInB,
    diff: reduce(
      Diff,
      (x, y) => {
        var diff = {};
        diff[y] = { left: a[y], right: b[y] };
        return assign({}, x, diff);
      },
      {}
    )
  };
}
