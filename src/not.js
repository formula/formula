// Copyright 2015-2021 JC Fisher
import { ERRORTYPES as error } from "./error";

// NOT negates a `value`
export default function not(value) {
  return value !== true && value !== false && value !== 1 && value !== 0
    ? error.value
    : !value;
}
