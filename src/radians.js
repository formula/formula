import numbervalue from './numbervalue'
import iserror from './iserror'

export default function radians(value) {
  let number = numbervalue(value);

  if (iserror(number)) {
    return number;
  }

  return number * Math.PI / 180;
};
