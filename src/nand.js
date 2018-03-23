import not from "./not";
import and from "./and";

// Returns the composition of NOT(AND(...))
export default function nor(...args) {
  return not(and(...args));
}
