// Copyright 2015-2021 JC Fisher

import not from "./not";
import or from "./or";

export default function nor(...args) {
  return not(or(...args));
}
