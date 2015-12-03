import error from './ERROR';

export function FIND(find_text, within_text, position) {
  if (!within_text) { return null; }
  position = (typeof position === 'undefined') ? 1 : position;
  position = within_text.indexOf(find_text, position - 1) + 1;
  return position === 0 ? error.value : position;
}
