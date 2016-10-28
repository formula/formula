// Copyright 2015 WebsiteHQ LLC

import error from './error';

// ISNA returns true when the value is `#NA!`
export default function isna(value) {
  return value === error.na;
}
