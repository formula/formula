import error from './ERROR';

export function IFNA(value, value_if_na) {
    return value === error.na ? value_if_na : value;
}
