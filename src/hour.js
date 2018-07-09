// Copyright 2015-2018 FormBucket LLC

import trunc from "./trunc";
import isDate from "./isdate";

export default function hour(value) {
  if (isDate(value)) {
    return value.getHours();
  }

  // remove numbers before decimal place and convert fraction to 24 hour scale.
  return trunc((value - trunc(value)) * 24);
}
