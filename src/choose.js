// Copyright 2015 WebsiteHQ LLC

import error from './error';

// CHOOSE accepts an index and a list of items. It returns the item that corresponds to the index.
export default function choose(index, ...items) {

  // Return `#NA!` if index or items are not provided.
  if (!index || items.length === 0) {
    return error.na;
  }

  // Return `#VALUE!` if index is less than 1 or greater than 254.
  if (index < 1 || index > 254) {
    return error.value;
  }

  // Return `#VALUE!` if number of items is less than index.
  if (items.length < index) {
    return error.value;
  }

  // Return the item.
  return items[index-1];
}
