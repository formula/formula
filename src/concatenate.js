// Copyright 2015 WebsiteHQ LLC

// CONCATENATE reduces a list of values into a single string.
export default function concatenate(...values) {
  // Combine into a single string value
  return values.reduce(
    (acc, item) => `${acc}${item}`
  )
}
