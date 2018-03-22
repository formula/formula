import not from "./not";
import or from "./or";

export default function nor(...args) {
  return not(or(...args));
}
