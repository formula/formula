'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMPILE = COMPILE;

var _PARSER = require('./PARSER');

var _index = require('./index');

var Box = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Copyright 2015 Peter W Moresi

function wrapString(s) {
  if (s[0] == "'" && s[s.length - 1] === "'") {
    return s;
  }
  return '\'' + s + '\'';
}

function printItems(items) {
  return items.map(function (n) {
    return compiler(n);
  }).join(', ');
}

var compiledNumber = 0;

function COMPILE(exp) {
  var ast = exp,
      jsCode,
      functionCode,
      f,
      suppress = false,
      precedents = [],
      requires = [],
      namespace = 'requires.';

  // convert to AST when string provided
  if (typeof ast === 'string') {
    ast = _PARSER.parser.parse(exp);
  }

  // define a compiler function to handle recurse the AST.
  function compiler(node) {

    var lhs = undefined,
        rhs = undefined;

    // The node is expected to be either an operator, function or a value.
    switch (node.type) {
      case 'operator':
        switch (node.subtype) {
          case 'prefix-plus':
            return '+' + compiler(node.operands[0]);
          case 'prefix-minus':
            return '-' + compiler(node.operands[0]);
          case 'infix-add':
            requires.push('add');
            return namespace + "ADD(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-subtract':
            requires.push('subtract');
            return namespace + "SUBTRACT(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-multiply':
            requires.push('multiply');
            return namespace + "MULTIPLY(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-divide':
            requires.push('divide');
            return namespace + "DIVIDE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-power':
            requires.push('power');
            return namespace + 'POWER(' + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ')';
          case 'infix-concat':
            lhs = compiler(node.operands[0]);
            rhs = compiler(node.operands[1]);
            requires.push('concatenate');
            return namespace + "CONCATENATE(" + wrapString(lhs) + ', ' + wrapString(rhs) + ")";
          case 'infix-eq':
            requires.push('eq');
            return namespace + "EQ(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-ne':
            requires.push('ne');
            return namespace + "NE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-gt':
            requires.push('gt');
            return namespace + "GT(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-gte':
            requires.push('gte');
            return namespace + "GTE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-lt':
            requires.push('lt');
            return namespace + "LT(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
          case 'infix-lte':
            requires.push('lte');
            return namespace + "LTE(" + compiler(node.operands[0]) + ', ' + compiler(node.operands[1]) + ")";
        }
        throw TypeException("Unknown operator: " + node.subtype);
      case 'group':
        return '(' + compiler(node.exp) + ')';
      case 'function':
        switch (node.name.toUpperCase()) {
          case 'IF':
            requires.push('if');
            if (node.args.length > 3) {
              throw Error("IF sent too many arguments.");
            }
            if (node.args.length !== 3) {
              throw Error("IF expects 3 arguments");
            }
            return '((' + compiler(node.args[0]) + ') ?' + compiler(node.args[1]) + ' : ' + compiler(node.args[2]) + ')';

          case 'NOT':
            requires.push('not');
            if (node.args.length !== 1) {
              throw Error("NOT only accepts one argument");
            }
            return namespace + "NOT(' + compiler( node.args[0] ) + ')";
          case 'AND':
            requires.push('and');
            return namespace + 'AND(' + printItems(node.args) + ')';
          case 'OR':
            requires.push('or');
            return namespace + 'OR(' + printItems(node.args) + ')';
          case 'ABS':
            requires.push('abs');
            return 'ABS(' + compiler(node) + ')';
          case 'MIN':
            requires.push('min');
            return 'Math.min(' + printItems(node.args) + ')';
          case 'MAX':
            requires.push('max');
            return 'Math.max(' + printItems(node.args) + ')';
          default:
            requires.push(name);
            return namespace + node.name + '( ' + printItems(node.args) + ' )';

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

        return 'context.range( ' + lhs + ', ' + rhs + ' )';

      case 'value':
        switch (node.subtype) {
          case 'array':
            return '[' + printItems(node.items) + ']';
          case 'string':
            return "'" + node.value.replace(/'/g, "''") + "'";
          case 'variable':

            if (precedents && !suppress) {
              precedents.push(node);
            }

            return 'context.get(\"' + node.value + '\")';

          default:
            return node.value;
        }
    }
  }

  var id = compiledNumber++;

  var compiled = compiler(ast);

  f = new Function('context', 'requires', '// ' + exp + '\n  if (!requires) { requires = this }\n  return (' + compiled + ');\n  //@ sourceURL=formula_function_' + id + '.js\'\n  ');

  f.id = id;
  f.exp = exp;
  f.ast = ast;
  f.code = compiled;
  f.precedents = precedents;
  f.requires = requires.map(function (n) {
    return n.toUpperCase();
  }).reduce(function (out, name) {
    out[name] = Box[name];
    return out;
  }, {});
  f.run = f.bind(f.requires);

  return f;
}