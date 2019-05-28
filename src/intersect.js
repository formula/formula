// Computes true or false if two rectangles intersect.
// A rect is defined as having left, right, top and bottom.
import isObject from "./isobject";
import error from "./error";

export default function intersect(a, b) {
  if (!isObject(a)) return error.na;
  if (!isObject(b)) return error.na;

  return (
    Math.max(a.left, b.left) < Math.min(a.right, b.right) &&
    Math.max(a.top, b.top) < Math.min(a.bottom, b.bottom)
  );
}
