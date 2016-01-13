import {ISBLANK} from './ISBLANK'
import {ISARRAY} from './ISARRAY'
import {ISTEXT} from './ISTEXT'

export function ISEMPTY(value) {
    return (
      ISBLANK(value) ||
      ISARRAY(value) && value.length === 0 ||
      ISTEXT(value) && value === ''
    );
};
