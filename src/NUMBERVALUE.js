import {ISEMPTY} from './ISEMPTY';
import error from './ERROR'

// Convert a text value into a number value.
export function NUMBERVALUE(text, decimal_separator, group_separator)  {
  decimal_separator = decimal_separator || '.'
  group_separator = group_separator || ','

  // define factor to be 1 so that it does nothing in most cases
  var factor = 1

  if (ISEMPTY(text)) {
    return error.value
  }

  if (text[text.length-1] === '%') {
    // set the factor to 100 to convert from percentage to decimal
    factor = 100
    text = text.substr(0, text.length - 1)
  }

  return Number(
    text
    .replace(RegExp(`[${group_separator}]`, 'g'), '')
    .replace(decimal_separator, '.')
  ) / factor
};
