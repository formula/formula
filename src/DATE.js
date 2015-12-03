import {SERIAL} from './SERIAL';

export function DATE(year, month, day) {
  return SERIAL(new Date(year, month-1, day));
}   
