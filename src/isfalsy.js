// Copyright 2015-2018 FormBucket LLC
import isnan from "./isnan";
// Returns true when the value is a falsy value.
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
export default function isfalsy(value) {
  return (
    value === false ||
    value === 0 ||
    value === "" ||
    typeof value === "undefined" ||
    value === null ||
    isnan(value)
  );
}
