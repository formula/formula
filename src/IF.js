// Copyright 2015 Peter W Moresi

import error from './ERROR';

// IF returns second argument if true, other it returns the third argument.
export function IF(value, value_if_true, value_if_false) {
    return (
      value || (typeof value === 'string' && value.toLowerCase() === 'true') ?
      value_if_true : value_if_false
    );
}
