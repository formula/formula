import reduce from './reduce'

export default function group( list, field ) {
  return reduce( list, (acc, item) => {
    var key = item[field]
    if (!p[key]) p[key] = []
    p[key].push(item)
  }, {})
}
