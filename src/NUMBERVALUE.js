import {ISEMPTY} from './ISEMPTY';
import {ISNUMBER} from './ISNUMBER';
import error from './ERROR'

// Convert a text value into a number value.
export function NUMBERVALUE(text, decimal_separator, group_separator)  {
  decimal_separator = decimal_separator || '.'
  group_separator = group_separator || ','

  // Return `#VALUE!` when text is empty
  if (ISEMPTY(text)) {
    return error.value
  }

  // Return the value when it is already a number.
  if (ISNUMBER(text)) {
    return text
  }

  var foundDecimal = false,
  len = text.length-1

  return text.split('').reduce( (acc, item, index) => {
    if (acc === error.value) {
      return error.value;
    } else if (len === index) {
      if (item === '%') {
        return +acc / 100
      }
      return +acc.concat(item)
    } else if (item === decimal_separator) {
      if (foundDecimal) return error.value;
      foundDecimal = true
      return acc.concat('.')
    } else if( item === group_separator ) {
      return acc
    // check if between 0 and 9 ascii codes
    } else if (item.charCodeAt(0) < 48 ||  item.charCodeAt(0) > 57) {
      return error.value
    }

    return acc.concat(item);

  })
};
