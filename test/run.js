var test = require('tape')
var run = require('../fn/run')

test('run: basic tests', function(t) {

  // run exp "2=2" 1000 times.
  var start = new Date();
  for (var i = 0; i<1000; i++) {
    run('2=2')
  }

  console.log('ms', new Date() - start)

  var timeTest = new Date() - start;

  t.plan(10)

  // running the same expression 1000x should be fast (<20ms)
  t.equal( timeTest < 20, true )
  t.equal( run('2=2'), true )
  // second time should return cached function.
  t.equal( run('2=2'), true )

  t.equal( run('2<>2'), false )
  t.equal( run('a=a', { a: 1 }), true )
  t.equal( run('a=b', { a: 1, b: 1 }), true )
  t.equal( run('a<>b', { a: 1, b: 1 }), false )
  t.equal( run('a!b1<>b', { 'a': { b1: 1 }, b: 1 }), false )
  t.equal( run('Tran55Fee<>b', { 'Tran55Fee': 1, b: 1 }), false )
  t.equal( run('@Tran55Fee<>b', { '@Tran55Fee': 1, b: 1 }), false )

})

test('run: functions should work', function(t) {

  t.plan(5)
  t.equal( run('NUMBERVALUE("2")'), 2 )
  t.equal( run('numbervalue("2,000,000.00")'), 2000000 )

  // all variations of IF should work
  t.equal( run('IF(6, 2)'), 2 )
  t.equal( run('If(6, 2)'), 2 )
  t.equal( run('if(6, 2)'), 2 )

})

test('run: complex nesting should work', function(t) {
  t.plan(1)
  t.equal(run('2+2=((2-2+2)+(3-1))'), true)
})


test('run: variable names can include underscore', function(t) {
  t.plan(1)
  t.equal( run('a_1=b_1', { a_1: 1, b_1: 1 }), true )
})

test('run: scope/sheet names should be supported', function(t) {
  t.plan(3)
  t.equal( run('abc!xyz', { abc: { xyz: 1 } }), 1 )
  t.equal( run('abc_def!xyz', { abc_def: { xyz: 1 } }), 1 )
  t.equal( run("'abc_def'!xyz", { abc_def: { xyz: 1 } }), 1 )
})
