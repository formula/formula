// Copyright 2015-2021 JC Fisher

import not from "./not";
import and from "./and";

// Returns the composition of NOT(AND(...))
export default function nand(...args) {
  return not(and(...args));
}
