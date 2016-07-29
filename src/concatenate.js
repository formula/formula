// Copyright 2015 Peter W Moresi

// CONCATENATE reduces a list of values into a single string.
export function concatenate(...values) {
  // Combine into a single string value
  return values.reduce(
    (acc, item) => `${acc}${item}`
  )
}
