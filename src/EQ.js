export function EQ(a,b) {
  // Unlike JavaScript the string comparisions are case-insensitive
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase() === b.toLowerCase()
  } else {
    return a === b;
  }
}
