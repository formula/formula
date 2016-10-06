import isempty from './isempty';
import isnumber from './isnumber';
import error from './error'

// Convert a text value into a number value.
export default function numbervalue(text, decimal_separator, group_separator)  {
  decimal_separator = decimal_separator || '.'
  group_separator = group_separator || ','

  // Return `#VALUE!` when text is empty
  if (isempty(text)) {
    return error.value
  }

  // Return the value when it is already a number.
  if (isnumber(text)) {
    return text
  }

  var foundDecimal = false,
  len = text.length-1

  if (text.length === 1) {
    if (text.charCodeAt(0) < 48 ||  text.charCodeAt(0) > 57) {
      return error.value
    }
    return +text
  }

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
