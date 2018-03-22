// Copyright 2015 JC Fisher
import includes from './includes'

// notincludes returns true when the searchElement is not found in the searchList.
export default function notincludes(searchElement, searchList, fromIndex) {
  return !includes(searchElement, searchList, fromIndex);
}
