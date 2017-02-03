import numbervalue from './numbervalue'
import error from './error'
import iserror from './iserror'

// Returns a random number between bottom and top
export default function randbetween(bottom, top) {
  bottom = numbervalue(bottom)
  top = numbervalue(top)

  if (iserror(bottom) || iserror(top)) return error.value;

  return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
}
