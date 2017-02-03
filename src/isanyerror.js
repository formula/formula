import iserror from './iserror'

// Return true if any argument is an error
export default function isanyerror(...values) {

  for (var i = 0; i < values.length; i++) {
    if (iserror(values[i])) return true
  }

  return false;
}
