// Copyright 2015 WebsiteHQ LLC

// ROUNDUP converts a number to a fixed precision by rounding up.
export default function roundup(number, precision) {
  var factors = [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000];
  var factor = factors[precision];
  if (number > 0) {
    return Math.ceil(number * factor) / factor;
  } else {
    return Math.floor(number * factor) / factor;
  }
}
