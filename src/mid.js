import numbervalue from './numbervalue'

export default function mid(text, start, number) {
    start = numbervalue(start);
    number = numbervalue(number);
    if (fn.isAnyError(start, number) || typeof text !== 'string') {
        return number;
    }
    return text.substring(start - 1, number+1);
};
