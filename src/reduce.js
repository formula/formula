// Copyright 2015-2018 FormBucket LLC

// reduce an array to a value
export default function reduce(arr, func, ...rest) {
  return arr.reduce(func, ...rest);
}
