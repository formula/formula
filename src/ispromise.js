export default function ispromise(value) {
  return value && typeof value === "object" && typeof value.then === "function";
}
