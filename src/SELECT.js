// Author: Peter Moresi
// inspired by npm package koa-json-filter
//
// SELECT fields from body
export function SELECT(fields, body) {
  // non-json
  if (!body || 'object' != typeof body) return;

  // check for fields
  if (!fields) return;

  // split
  if ('string' == typeof fields) fields = fields.split(/ *, */);

  // fields array
  if (Array.isArray(body)) {
    return body.map(function(obj){
      return fields.reduce(function(ret, key){
        ret[key] = obj[key];
        return ret;
      }, {});
    });

    return;
  }

  // fields object
  return fields.reduce(function(ret, key){
    ret[key] = body[key];
    return ret;
  }, {});
}
