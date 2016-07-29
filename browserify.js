if (window) {

  // Polyfill Number.isNaN
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
  Number.isNaN = Number.isNaN || function(value) {
      return value !== value;
  }

  window.FunctionFoundry = require('./lib/functionfoundry')
}
