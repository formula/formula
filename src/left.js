// Copyright 2015 JC Fisher

import isblank from './isblank'
import n from './n'
import error from './error'

export default function left(text, number) {

  if (isblank(text)) {
    return ''
  }

  if (!n(+number)) {
    return text
  }

  return text.substring( 0, number )

}
