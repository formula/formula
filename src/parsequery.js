import error from './error'

// parse querystring into object
export function parsequery(query='') {

  if (typeof query !== 'string') {
    return error.na;
  }

  if (query.length === 0) {
    return {}
  }

  return (query[0] === '?' ? query.substr(1) : query)
  .split('&')
  .reduce((acc, item) => {
    var n = item.split('=');
    acc[n[0]] = n[1] ? n[1] : '';
    return acc }, {}
  )
}
