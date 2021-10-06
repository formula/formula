// Copyright 2015-2021 JC Fisher

// ISNA returns true when the value is `#NA!`
export default function isnan(value) {
  if (Number.isNaN) return Number.isNaN(value);
  return typeof value === "number" && isNaN(value);
}
