export function NE(a,b) {
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase() !== b.toLowerCase()
  } else {
    return a !== b;
  }
}
