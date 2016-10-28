// Copyright 2015 WebsiteHQ LLC

import parsedate from './parsedate';
import error from './error'
 
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
