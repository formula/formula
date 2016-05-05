// Author: Peter W Moresi
// Use FunctionFoundry to identify src files without test files.

var fs = require('fs')
var {DIFF} = require('../lib/functionfoundry')

function arrayToObj(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = item
    return acc
  }, {})
}

var srcFiles = fs.readdirSync(__dirname + '/../src')
var testFiles = fs.readdirSync(__dirname + '/../test')

console.log(
  'Missing test cases',
  DIFF(arrayToObj(srcFiles), arrayToObj(testFiles) ).unique_right
)

console.log(
  'Extra test cases?',
  DIFF(arrayToObj(srcFiles), arrayToObj(testFiles) ).unique_left
)

if (process.argv[2] === '--fix') {
  var missing = DIFF(arrayToObj(srcFiles), arrayToObj(testFiles) ).unique_right
  missing.forEach(file => {
    var name = file.substr(0, file.length - 3)

    var content = `import test from 'tape'
    import error from '../src/ERROR'
    import {${name}} from '../src/${name}'

    test('${name}', (t) => {
      t.plan(1)
      t.equal( ${name}( ? ), ?)
    })`

    //console.log('make file', __dirname + '/../test/' + file, content)

    fs.writeFileSync(__dirname + '/../test/' + file, content)

  })

}
