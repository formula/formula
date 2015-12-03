/* Compute the position in a 2 dimensional array
 */
export function CELLINDEX(row, col) {
  return Math.floor( (row * 16384) + col );
}
