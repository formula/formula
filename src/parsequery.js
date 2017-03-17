// Copyright 2015 JC Fisher

import error from './error'

// parse querystring into object
export default function parsequery(query='') {

  if (typeof query !== 'string') {
    return error.na;
  }

  if (query.length === 0) {
    return {}
  }

  return (query[0] === '?' ? query.substr(1) : query)
  .split('&')
  .reduce( (acc, item) => {
    var n = item.split('=');
    var key = decodeURIComponent(n[0]);
    var value = decodeURIComponent(n[1] || '');
    acc[key] = value;
    return acc
  }, {} )
}
