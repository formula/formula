// Author: Peter W Moresi
// Use FunctionFoundry to identify src files without test files.

var fs = require('fs')
var {SUBSTITUTE} = require('../lib/functionfoundry')

function arrayToObj(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = item
    return acc
  }, {})
}

var srcFiles = fs.readdirSync(__dirname + '/../test')

var lowerKeyWords = srcFiles.map(d => d.substr(0, d.length -3))
var upperKeyWords = lowerKeyWords.map(d => d.toUpperCase()).reverse()
var fileContent = srcFiles
.map( d => fs.readFileSync(__dirname + '/../test/' + d).toString() )

var lowerCaseContent = fileContent
.map( d => upperKeyWords.reduce(
  (acc, item) =>
  acc
  .replace( new RegExp( "test[(]'" +item + "'", 'gi'), 'test(\'' + item.toLowerCase() + "'" )
  // .replace( new RegExp( "{" + item + "}", 'gi'), '{' + item.toLowerCase() + '}' )
  // .replace( new RegExp( item + "[(]", 'gi'), item.toLowerCase() + '(' )
  // .replace( new RegExp( "'\.[/]" + item + "'", 'gi'), "'./" +item.toLowerCase() + "'")
  // .replace( new RegExp( "'\.\.[/]src[/]" + item + "'", 'gi'), "'../src/" +item.toLowerCase() + "'")
, d))

// console.log(lowerCaseContent[0])

srcFiles.forEach( (d, i) => fs.writeFileSync(__dirname + '/../test/' + d, lowerCaseContent[i]))
