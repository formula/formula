import error from './ERROR'
export function TRIM(text) {
    if (typeof text !== 'string') {
        return error.value;
    }
    return text.trim();
}
