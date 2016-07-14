// Copyright 2015 Peter W Moresi

import {isblank} from './isblank'
import {n} from './n'
import error from './error'

export function left(text, number) {

  if (isblank(text)) {
    return ''
  }

  if (!n(+number)) {
    return text
  }

  return text.substring( 0, number )

}
