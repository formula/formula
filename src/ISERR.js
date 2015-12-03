import error from './ERROR';

export function ISERR(value) {
  return (
    (
      value !== error.na &&
      value.constructor.name === 'Error'
    ) || (
      typeof value === 'number' && (
        Number.isNaN(value) || !Number.isFinite(value)
      )
    )
  );
}
