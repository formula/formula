import parsedate from './parsedate'
import isdate from './isdate'
import isnumber from './isnumber'
import yearfrac from './yearfrac'
import error from './error'

// Returns the accrued interest for a security that pays periodic interest.
export default function accrint(issue, first, settlement, rate, par, frequency, basis=0) {

  // Return error if either date is invalid
  var issueDate      = parsedate(issue);
  var firstDate      = parsedate(first);
  var settlementDate = parsedate(settlement);

  if (!isdate(issueDate) || !isdate(firstDate) || !isdate(settlementDate) || !isnumber(par)) {
    return error.value;
  }

  // Return error if either rate or par are lower than or equal to zero
  if (rate <= 0 || par <= 0) {
    return error.num;
  }

  // Return error if frequency is neither 1, 2, or 4
  if ([1, 2, 4].indexOf(frequency) === -1) {
    return error.num;
  }

  // Return error if basis is neither 0, 1, 2, 3, or 4
  if ([0, 1, 2, 3, 4].indexOf(basis) === -1) {
    return error.num;
  }

  // Return error if settlement is before or equal to issue
  if (settlementDate <= issueDate) {
    return error.num;
  }

  console.log(par, rate, yearfrac(issue, settlement, basis))
  // Compute accrued interest
  return par * rate * yearfrac(issue, settlement, basis);

};
