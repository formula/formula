// Copyright 2015-2021 JC Fisher

import { ERRORTYPES as error } from "./error";

// ISNA returns true when the value is `#NA!`
export default function isna(value) {
  return value === error.na;
}
