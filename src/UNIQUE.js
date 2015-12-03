export function UNIQUE(arr) {
  return arr.reduce(function(p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, [])
}
