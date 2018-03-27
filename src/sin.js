// Copyright 2015 JC Fisher

import isnumber from './isnumber';
import { ERRORTYPES as error } from './error';

// SIN calculates the sinine of a value.
export default function sin(value) {

  if (!isnumber(value)) {
    return error.value;
  }

  return Math.sin(value);

}
