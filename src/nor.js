// Copyright 2015-2018 FormBucket LLC

import not from "./not";
import or from "./or";

export default function nor(...args) {
  return not(or(...args));
}
