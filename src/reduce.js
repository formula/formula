// Copyright 2015-2021 JC Fisher

// reduce an array to a value
export default function reduce(arr, func, ...rest) {
  return arr.reduce(func, ...rest);
}
