import datevalue from './datevalue'
import timevalue from './timevalue'

export default function now() {
  var d = new Date();
  return datevalue(d.toLocaleDateString()) + timevalue(d.toLocaleTimeString());
};
