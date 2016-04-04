import {JulianOffset} from './CONSTANTS'
import error from './ERROR'

/* *******************
Extracted from Social Calc

convert_date_julian_to_gregorian(juliandate)

ymd->{}
.year
.month
.day

From: http://aa.usno.navy.mil/faq/docs/JD_Formula.html
Uses: Fliegel, H. F. and van Flandern, T. C. (1968). Communications of the ACM, Vol. 11, No. 10 (October, 1968).
Translated from the FORTRAN

************************* */
function convert_date_julian_to_gregorian(juliandate) {

  var L, N, I, J, K;

  L = juliandate+68569;
  N = Math.floor(4*L/146097);
  L = L-Math.floor((146097*N+3)/4);
  I = Math.floor(4000*(L+1)/1461001);
  L = L-Math.floor(1461*I/4)+31;
  J = Math.floor(80*L/2447);
  K = L-Math.floor(2447*J/80);
  L = Math.floor(J/11);
  J = J+2-12*L;
  I = 100*(N-49)+I+L;

  return new Date(I, J-1, K);

}

export function PARSEDATE(val) {

  if (val instanceof Error) {
    return val;
  } else if (typeof val === 'number') {
    // val is assumed to be serial number.
    return convert_date_julian_to_gregorian( Math.floor(val+JulianOffset) );
  } else if (typeof val === 'string') {
    var timestamp=Date.parse(val)
    if (isNaN(timestamp))
    {
      return error.value;
    }
    return new Date(timestamp);
  }
  return error.value;
}
