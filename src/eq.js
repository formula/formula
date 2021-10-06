// Copyright 2015-2021 JC Fisher

// EQ compares two values and returns a boolean value.
export default function eq(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    // String comparisions are case-insensitive when both are string values.
    return a.toLowerCase() === b.toLowerCase();
  } else {
    // Strict equivalence as the default when non-string values are present.
    return a === b;
  }
}
