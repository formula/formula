import {datevalue} from './datevalue'

export function today() {
  var d = new Date();
  return datevalue(d.toLocaleDateString())
};
