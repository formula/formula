import {FLATTEN} from './FLATTEN';

export function MIN() {
  FLATTEN( arguments ).reduce((max, next) => {
    if (typeof next !== 'number' || next !== next) {
      return max;
    }

    return Math.min(max, next);
  }, undefined);
}
