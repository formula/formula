var test = require('tape')
var compile = require('../fn/compile')

test('compiler should pass basic tests', function(t) {

  t.plan(15)

  t.equal(compile('2=2').code, "funcs.eq(2, 2)")
  t.equal(compile('-2').code, "-funcs.numbervalue(2)")
  t.equal(compile('2 = 2').code, "funcs.eq(2, 2)")
  t.equal(compile('2<>2').code, "funcs.ne(2, 2)")
  t.equal(compile('2 > 2').code, "funcs.gt(2, 2)")
  t.equal(compile('2>=2').code, "funcs.gte(2, 2)")
  t.equal(compile('2  < 2').code, "funcs.lt(2, 2)")
  t.equal(compile('2 <=   2').code, "funcs.lte(2, 2)")
  t.equal(compile('2+   2').code, "funcs.add(2, 2)")
  t.equal(compile('2   -2').code, "funcs.subtract(2, 2)")
  t.equal(compile('2     *2').code, "funcs.multiply(2, 2)")
  t.equal(compile('2/2').code, "funcs.divide(2, 2)")
  t.equal(compile('2^2').code, "funcs.power(2, 2)")
  t.equal(compile('"a" & "b"').code, "funcs.concatenate('a', 'b')")
  t.equal(compile('@foo1').code, 'context.get("@foo1")')

})

test('compiler complex nesting should work', function(t) {
  t.plan(1)

  t.equal(compile('2+2=((2-2+2)+(3-1))').code,
  "funcs.eq(funcs.add(2, 2), (funcs.add((funcs.add(funcs.subtract(2, 2), 2)), (funcs.subtract(3, 1)))))")

})

test('compiler should eat array for breakfast', function(t) {
  t.plan(2)

  t.equal( compile('{2,2}').code, "[2, 2]")
  t.equal( compile('{2;2}').code, "[[2], [2]]")
});
