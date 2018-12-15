"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _branch = _interopRequireDefault(require("./branch"));

var _map = _interopRequireDefault(require("./map"));

var _unique = _interopRequireDefault(require("./unique"));

var _parser = _interopRequireDefault(require("./parser"));

var _walker = _interopRequireWildcard(require("./walker"));

var _assign = _interopRequireDefault(require("./assign"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
var compiledNumber = 0;

function compile(exp) {
  var ast = exp,
      jsCode,
      functionCode,
      f,
      suppress = false,
      precedents = [],
      requires = [],
      namespace = "funcs."; // convert to AST when string provided

  if (typeof ast === "string") {
    ast = (0, _parser.default)(exp);
  }

  var walk1 = (0, _walker.default)(_walker.fpConfig);
  var walk2 = (0, _walker.default)((0, _assign.default)(_walker.jsConfig, {
    visit: function visit(config, node, depth) {
      if (node.type === "variable") {
        precedents.push(node);
      }

      if (node.type === "function") {
        requires.push(node.name);
      }
    }
  })); // Walk the AST and convert operators to functions.

  var fpExp = walk1(ast); // Walk result and convert to JSCode.

  var code = walk2(fpExp);
  var id = compiledNumber++;
  precedents = (0, _unique.default)(precedents.map(JSON.stringify)).map(JSON.parse);
  requires = (0, _unique.default)(requires.map(JSON.stringify)).map(JSON.parse);
  f = new Function("context", "Formula", "/* formula: ".concat(exp, " */\nreturn ").concat(code, ";\n//# sourceURL=formula_").concat(id, "\n"));
  f.id = id;
  f.exp = exp;
  f.exp = fpExp;
  f.exp = exp;
  f.ast = ast;
  f.code = code;
  f.precedents = precedents;
  f.requires = requires;
  return f;
}
