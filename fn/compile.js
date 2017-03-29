'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _parser = require('./parser');

var compiledNumber = 0; // Copyright 2015 Peter W Moresi

function compile(exp) {
  var ast = exp,
      jsCode,
      functionCode,
      f,
      suppress = false,
      precedents = [],
      requires = [],
      namespace = 'funcs.';

  // convert to AST when string provided
  if (typeof ast === 'string') {
    ast = _parser.parser.parse(exp);
  }

  function wrapString(s) {
    if (s[0] == "'" && s[s.length - 1] === "'") {
      return s;
    }
    return '\'' + s + '\'';
  }

  function printFuncs(items) {
    return items.map(function (n) {
      return 'function() { return (' + compiler(n) + ') }';
    }).join(', ');
  }

  function printItems(items) {
    return items.map(function (n) {
      return compiler(n);
    }).join(', ');
  }

  // define a compiler function to handle recurse the AST.
  function compiler(node) {

    var lhs = void 0,
        rhs = void 0;

    // The node is expected to be either an operator, function or a value.
    switch (node.type) {
      case 'operator':
        switch (node.subtype) {
          case 'prefix-plus':
            return namespace + "numbervalue(" + printItems(node.operands) + ")";
          case 'prefix-minus':
            return "-" + namespace + "numbervalue(" + printItems(node.operands) + ")";
          case 'infix-add':
            requires.push('add');
            return namespace + "add(" + printItems(node.operands) + ")";
          case 'infix-subtract':
            requires.push('subtract');
            return namespace + "subtract(" + printItems(node.operands) + ")";
          case 'infix-multiply':
            requires.push('multiply');
            return namespace + "multiply(" + printItems(node.operands) + ")";
          case 'infix-divide':
            requires.push('divide');
            return namespace + "divide(" + printItems(node.operands) + ")";
          case 'infix-power':
            requires.push('power');
            return namespace + 'power(' + printItems(node.operands) + ')';
          case 'infix-concat':
            requires.push('concatenate');
            return namespace + "concatenate(" + printItems(node.operands) + ")";
          case 'infix-eq':
            requires.push('eq');
            return namespace + "eq(" + printItems(node.operands) + ")";
          case 'infix-ne':
            requires.push('ne');
            return namespace + "ne(" + printItems(node.operands) + ")";
          case 'infix-gt':
            requires.push('gt');
            return namespace + "gt(" + printItems(node.operands) + ")";
          case 'infix-gte':
            requires.push('gte');
            return namespace + "gte(" + printItems(node.operands) + ")";
          case 'infix-lt':
            requires.push('lt');
            return namespace + "lt(" + printItems(node.operands) + ")";
          case 'infix-lte':
            requires.push('lte');
            return namespace + "lte(" + printItems(node.operands) + ")";
        }
        throw TypeException("Unknown operator: " + node.subtype);
      case 'group':
        return '(' + compiler(node.exp) + ')';
      case 'function':
        requires.push(node.name.toLowerCase() === 'if' ? 'branch' : node.name.toLowerCase());
        switch (node.name.toLowerCase()) {
          case 'if':
            return namespace + 'branch( ' + printFuncs(node.args) + ' )';
          case 'and':
          case 'or':
            return namespace + node.name.toLowerCase() + '( ' + printFuncs(node.args) + ' )';
          default:
            return namespace + node.name.toLowerCase() + '( ' + printItems(node.args) + ' )';
        }
      case 'cell':
        if (typeof precedents !== "undefined" && !suppress) {
          precedents.push(node);
        }

        return 'context.get(\"' + node.addr + '\")';

      case 'range':

        if (typeof precedents !== "undefined") {
          precedents.push(node);suppress = true;
        }
        lhs = compiler(node.topLeft);
        rhs = compiler(node.bottomRight);
        suppress = false;

        // anonymous functions are the perfect solution for dynamic ranges but was not immediately obvious to me
        if (node.topLeft.type === "function") {
          lhs = "function() { return (" + lhs + "); }";
        }

        if (node.bottomRight.type === "function") {
          rhs = "function() { return (" + rhs + "); }";
        }

        requires.push('ref');
        return 'this.ref( ' + lhs + ', ' + rhs + ' )';

      case 'variable':
        if (precedents && !suppress) {
          precedents.push(node);
        }
        if (node.scope) {
          return 'context.get(\"' + node.name + '\", \"' + node.scope + '\")';
        }
        return 'context.get(\"' + node.name + '\")';
      case 'value':
        switch (node.subtype) {
          case 'array':
            return '[' + printItems(node.items) + ']';
          case 'string':
            return "'" + node.value.replace(/'/g, "''") + "'";

          default:
            return node.value;
        }
    }
  }

  var id = compiledNumber++;

  var compiled = compiler(ast);

  f = new Function('context', 'funcs', '/* formula: ' + exp + ' */\nreturn (' + compiled + ');\n//# sourceURL=formula_' + id + '\n');

  f.id = id;
  f.exp = exp;
  f.ast = ast;
  f.code = compiled;
  f.precedents = precedents;
  f.requires = requires;

  return f;
}
module.exports = exports['default'];