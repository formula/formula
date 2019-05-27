import interpolator from "./interpolator";

// Compute a number a percentage distance between a and b.
// Usage: interpolate(0, 100, 0.5) == 50
// Credit: https://github.com/sveltejs/svelte/blob/master/src/motion/tweened.ts
export default function interpolate(a, b, percentage) {
  return interpolator(a, b)(percentage);
}
