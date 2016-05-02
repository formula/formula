// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK'
import {N} from './N'
import error from './ERROR'

// RIGHT pulls a given number of character from the right side of `text`.
export function RIGHT(text, number) {

  if (ISBLANK(text)) {
    return ''
  }

  if (!N(+number)) {
    return text
  }

  return text.substring( text.length - number )

}
