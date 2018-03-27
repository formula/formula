// Copyright 2015 JC Fisher

import parsedate from './parsedate';
import { ERRORTYPES as error } from './error'
 
export default function eomonth(start_date, months) {
  start_date = parsedate(start_date);

  if (start_date instanceof Error) {
    return start_date;
  }
  if (isNaN(months)) {
    return error.value;
  }
  months = parseInt(months, 10);
  return new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0);
}
