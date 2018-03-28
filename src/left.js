// Copyright 2015 JC Fisher

import isblank from './isblank'
import n from './n'
import { ERRORTYPES as error } from './error'

export default function left(text, number) {
  // For blank text value, return empty string.
  if (isblank(text)) {
    return ''
  }
  // When number is invalid, return original value.
  if (!n(+number)) {
    return text
  }
  // Return truncated string value.
  return text.substring( 0, number )

}
