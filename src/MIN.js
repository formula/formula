import {FLATTEN} from './FLATTEN';
import {ISNUMBER} from './ISNUMBER';

export function MIN(...list) {
  return FLATTEN( list ).reduce((min, next) => {
    if (ISNUMBER(next)) {
      return Math.min(min, next);
    }

    return min;

  }, Number.POSITIVE_INFINITY );
}
