// Logical AND reduction
//
// Author: Peter Moresi
//
// Any list of criteria can be flattened out to a truthy value.
export function AND(...criteria) {
  return criteria.reduce( (previousValue, currentValue) => {
    if (previousValue === false) return false
    return currentValue;
  }, true);
}
