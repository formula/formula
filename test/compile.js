var test = require('tape')
import compile from '../fn/compile'

test('compiler should pass basic tests', function(t) {

  t.plan(15)

  t.equal(compile('2=2').code, "funcs.EQ(2, 2)")
  t.equal(compile('-2').code, "-funcs.NUMBERVALUE(2)")
  t.equal(compile('2 = 2').code, "funcs.EQ(2, 2)")
  t.equal(compile('2<>2').code, "funcs.NE(2, 2)")
  t.equal(compile('2 > 2').code, "funcs.GT(2, 2)")
  t.equal(compile('2>=2').code, "funcs.GTE(2, 2)")
  t.equal(compile('2  < 2').code, "funcs.LT(2, 2)")
  t.equal(compile('2 <=   2').code, "funcs.LTE(2, 2)")
  t.equal(compile('2+   2').code, "funcs.ADD(2, 2)")
  t.equal(compile('2   -2').code, "funcs.SUBTRACT(2, 2)")
  t.equal(compile('2     *2').code, "funcs.MULTIPLY(2, 2)")
  t.equal(compile('2/2').code, "funcs.DIVIDE(2, 2)")
  t.equal(compile('2^2').code, "funcs.POWER(2, 2)")
  t.equal(compile('"a" & "b"').code, "funcs.CONCATENATE('a', 'b')")
  t.equal(compile('@foo1').code, 'context.get("@foo1")')

})

test('compiler complex nesting should work', function(t) {
  t.plan(1)

  t.equal(compile('2+2=((2-2+2)+(3-1))').code,
  "funcs.EQ(funcs.ADD(2, 2), (funcs.ADD((funcs.ADD(funcs.SUBTRACT(2, 2), 2)), (funcs.SUBTRACT(3, 1)))))")

})

test('compiler should eat array for breakfast', function(t) {
  t.plan(2)

  t.equal( compile('{2,2}').code, "[2, 2]")
  t.equal( compile('{2;2}').code, "[[2], [2]]")
});
