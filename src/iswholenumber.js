// Copyright 2015-2021 JC Fisher
import isnumber from "./isnumber";

// Returns true when the value is a whole number
export default function iswholenumber(value) {
  return isnumber(value) && value % 1 === 0;
}
