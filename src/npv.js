// Copyright 2015-2021 JC Fisher
import reduce from "./reduce";

// `npv` returns the net present value of an investment.
export default function npv(rate, ...values) {
  var result = reduce(
    values,
    (p, v) => {
      let factor = p.factor * (1 + rate);
      let sum = p.sum + +v / factor;
      return { factor, sum };
    },
    {
      factor: 1,
      sum: 0
    }
  );

  return result.sum;
}
