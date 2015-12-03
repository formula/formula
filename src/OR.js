// Logical OR operation

export function OR(...criteria) {
  return criteria.reduce( (a, b) => {
    if (a === true) return true;
    return b;
  }, false)
}
