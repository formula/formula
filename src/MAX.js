
import {FLATTEN} from './FLATTEN';

export function MAX() {
    FLATTEN( arguments ).reduce((max, next) => {
        if (typeof x !== 'number' || x !== x) {
            return max;
        }

        return Math.max(max, next);
    });
}
