import numbervalue from './numbervalue'
import isnumber from './isnumber'

// Return true when the value is not text
export default function isnontext(value) {
  let v = numbervalue(value)
  return typeof(value) !== 'string' && !isnumber(v);
};
