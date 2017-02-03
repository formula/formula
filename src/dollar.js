import text from './error'

// Converts number into dollar text representation.
export default function dollar(number) {
  return text(number, '$#,##0.00_);($#,##0.00)');
}
