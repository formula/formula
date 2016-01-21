import error from './ERROR';

export function IF(value, value_if_true, value_if_false) {
    return (
      value || (typeof value === 'string' && value.toLowerCase() === 'true') ?
      value_if_true : value_if_false
    );
}
