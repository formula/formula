// Copyright 2015 JC Fisher
import reduce from './reduce'

// CONCATENATE reduces a list of values into a single string.
export default function concatenate(...values) {
  // Combine into a single string value
  return reduce( values, (acc, item) => `${acc}${item}`, '' )
}
