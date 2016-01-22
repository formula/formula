import {ISBLANK} from './ISBLANK'
import {N} from './N'
import error from './ERROR'

export function RIGHT(text, number) {

  if (ISBLANK(text)) {
    return ''
  }

  if (!N(+number)) {
    return text
  }

  return text.substring( text.length - number )

}
