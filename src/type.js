import isboolean from './isboolean'
import istext from './istext'
import isnumber from './isnumber'
import iserror from './iserror'
import isarray from './isarray'

// Return a number based on type of value
export default function type(value) {

  if (isboolean(value)) {
    return 4;
  }
  else if (istext(value)) {
    return 2;
  }
  else if (isnumber(value)) {
    return 1;
  }
  else if (iserror(value)) {
    return 16;
  }
  else if (isarray(value)) {
    return 64;
  }

};
