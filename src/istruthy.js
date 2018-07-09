// Copyright 2015-2018 FormBucket LLC

import isfalsy from "./isfalsy";

// Returns true when the value is not falsey
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
export default function istruthy(value) {
  return !isfalsy(value);
}
