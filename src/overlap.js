import isObject from "./isobject";
import error from "./error";

export default function overlap(a, b) {
  if (!isObject(a)) return error.na;
  if (!isObject(b)) return error.na;

  return (
    a.left >= b.left &&
    a.right <= b.right &&
    a.top >= b.top &&
    a.bottom <= b.bottom
  );
}
