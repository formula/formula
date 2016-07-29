import {parsedate} from './parsedate'
import {isleapyear} from './isleapyear'
import {serial} from './serial'

export function yearfrac(start_date, end_date, basis) {
  start_date = parsedate(start_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  end_date = parsedate(end_date);
  if (end_date instanceof Error) {
    return end_date;
  }

  basis = basis || 0;
  var sd = start_date.getDate();
  var sm = start_date.getMonth() + 1;
  var sy = start_date.getFullYear();
  var ed = end_date.getDate();
  var em = end_date.getMonth() + 1;
  var ey = end_date.getFullYear();

  function isLeapYear(year) { return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); }
  function daysBetween(a, b) { return serial(b) - serial(a) }

  switch (basis) {
    case 0:
    // US (NASD) 30/360
    if (sd === 31 && ed === 31) {
      sd = 30;
      ed = 30;
    } else if (sd === 31) {
      sd = 30;
    } else if (sd === 30 && ed === 31) {
      ed = 30;
    }
    return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
    case 1:
    // Actual/actual
    var feb29Between = function(date1, date2) {
      var year1 = date1.getFullYear();
      var mar1year1 = new Date(year1, 2, 1);
      if (isLeapYear(year1) && date1 < mar1year1 && date2 >= mar1year1) {
        return true;
      }
      var year2 = date2.getFullYear();
      var mar1year2 = new Date(year2, 2, 1);
      return (isLeapYear(year2) && date2 >= mar1year2 && date1 < mar1year2);
    };
    var ylength = 365;
    if (sy === ey || ((sy + 1) === ey) && ((sm > em) || ((sm === em) && (sd >= ed)))) {
      if ((sy === ey && isLeapYear(sy)) ||
      feb29Between(start_date, end_date) ||
      (em === 1 && ed === 29)) {
        ylength = 366;
      }
      return daysBetween(start_date, end_date) / ylength;
    }
    var years = (ey - sy) + 1;
    var days = (new Date(ey + 1, 0, 1) - new Date(sy, 0, 1)) / 1000 / 60 / 60 / 24;
    var average = days / years;
    return daysBetween(start_date, end_date) / average;
    case 2:
    // Actual/360
    return daysBetween(start_date, end_date) / 360;
    case 3:
    // Actual/365
    return daysBetween(start_date, end_date) / 365;
    case 4:
    // European 30/360
    return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
  }
};
