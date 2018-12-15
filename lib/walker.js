"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.jsConfig = exports.fpConfig = exports.defaultConfig = void 0;

var _and = _interopRequireDefault(require("./and"));

var _branch = _interopRequireDefault(require("./branch"));

var _istext = _interopRequireDefault(require("./istext"));

var _parser = _interopRequireDefault(require("./parser"));

var _some = _interopRequireDefault(require("./some"));

var _assign = _interopRequireDefault(require("./assign"));

var _isarray = _interopRequireDefault(require("./isarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
var defaultConfig = {
  upCase: true,
  visit: function visit() {
    return undefined;
  },
  labelEQ: "=",
  labelNE: "<>",
  labelGT: "<",
  labelGTE: "<=",
  labelLT: ">",
  renderMINUS: function renderMINUS() {
    return "-";
  },
  renderPLUS: function renderPLUS() {
    return "+";
  },
  renderEQ: function renderEQ() {
    return " = ";
  },
  renderNE: function renderNE() {
    return " <> ";
  },
  renderGT: function renderGT() {
    return " > ";
  },
  renderGTE: function renderGTE() {
    return " >= ";
  },
  renderLT: function renderLT() {
    return " < ";
  },
  renderLTE: function renderLTE() {
    return " <= ";
  },
  renderADD: function renderADD() {
    return " + ";
  },
  renderSUBTRACT: function renderSUBTRACT() {
    return " - ";
  },
  renderMULTIPLY: function renderMULTIPLY() {
    return " * ";
  },
  renderDIVIDE: function renderDIVIDE() {
    return " / ";
  },
  renderPOWER: function renderPOWER() {
    return " ^ ";
  },
  renderCONCAT: function renderCONCAT() {
    return " & ";
  },
  renderGroupBegin: function renderGroupBegin() {
    return "(";
  },
  renderGroupEnd: function renderGroupEnd() {
    return ")";
  },
  renderGroup: function renderGroup(config, g, depth) {
    return "".concat(config.renderGroupBegin(config, g, depth)).concat(walk(config, g.exp, depth + 1)).concat(config.renderGroupEnd(config, g, depth));
  },
  renderFunctionBegin: function renderFunctionBegin(config, f, depth) {
    return config.upCase ? f.name.toUpperCase() : f.name;
  },
  renderFunctionEnd: function renderFunctionEnd(config, f, depth) {
    return ")";
  },
  renderFunction: function renderFunction(config, f, depth) {
    return "".concat(config.renderFunctionBegin(config, f, depth), "(").concat(f.args.map(function (d) {
      return walk(config, d, depth + 1);
    }).join(", ")).concat(config.renderFunctionEnd(config, f, depth));
  },
  renderOperator: function renderOperator(config, _ref, depth) {
    var subtype = _ref.subtype,
        operands = _ref.operands;
    return (0, _branch.default)(operands.length == 1, function () {
      return "".concat((0, _branch.default)(subtype == "prefix-minus", config.renderMINUS(config, depth), subtype == "prefix-plus", config.renderPLUS(config, depth))).concat(walk(config, operands[0], depth + 1));
    }, operands.length === 2, function () {
      return "".concat(walk(config, operands[0], depth + 1)).concat((0, _branch.default)(subtype == "infix-eq", config.renderEQ(config, {
        operands: operands
      }, depth), subtype == "infix-ne", config.renderNE(config, {
        operands: operands
      }, depth), subtype == "infix-gt", config.renderGT(config, {
        operands: operands
      }, depth), subtype == "infix-gte", config.renderGTE(config, {
        operands: operands
      }, depth), subtype == "infix-lt", config.renderLT(config, {
        operands: operands
      }, depth), subtype == "infix-lte", config.renderLTE(config, {
        operands: operands
      }, depth), subtype == "infix-add", config.renderADD(config, {
        operands: operands
      }, depth), subtype == "infix-subtract", config.renderSUBTRACT(config, {
        operands: operands
      }, depth), subtype == "infix-multiply", config.renderMULTIPLY(config, {
        operands: operands
      }, depth), subtype == "infix-divide", config.renderDIVIDE(config, {
        operands: operands
      }, depth), subtype == "infix-power", config.renderPOWER(config, {
        operands: operands
      }, depth), subtype == "infix-concat", config.renderCONCAT(config, {
        operands: operands
      }, depth))).concat(walk(config, operands[1], depth + 1));
    });
  },
  renderRangeBetween: function renderRangeBetween() {
    return ":";
  },
  renderRange: function renderRange(config, _ref2, depth) {
    var topLeft = _ref2.topLeft,
        bottomRight = _ref2.bottomRight;
    return "".concat(walk(config, topLeft, depth)).concat(config.renderRangeBetween(config, {
      topLeft: topLeft,
      bottomRight: bottomRight
    }, depth)).concat(walk(config, bottomRight, depth));
  },
  renderVariable: function renderVariable(config, _ref3, depth) {
    var scope = _ref3.scope,
        name = _ref3.name;
    return "".concat(scope ? scope + "!" : "").concat(name);
  },
  renderString: function renderString(value) {
    return "\"".concat(value, "\"");
  },
  renderNumber: function renderNumber(value) {
    return value.toString();
  },
  renderBoolean: function renderBoolean(value) {
    return value ? "TRUE" : "FALSE";
  },
  renderValue: function renderValue(config, _ref4, depth) {
    var subtype = _ref4.subtype,
        items = _ref4.items,
        value = _ref4.value;
    return (0, _branch.default)(subtype === "string", function () {
      return config.renderString(value);
    }, subtype === "number", function () {
      return config.renderNumber(value);
    }, subtype === "boolean", function () {
      return config.renderBoolean(value);
    }, subtype === "array", function () {
      return "".concat(config.renderArray(config, {
        items: items
      }, depth));
    });
  },
  renderArray: function renderArray(config, _ref5, depth) {
    var items = _ref5.items;
    return "{" + items.map(function (d) {
      return config.renderValue(config, d, depth + 1);
    }).join(",") + "}";
  },
  renderRule: function renderRule(config, ast) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var type = ast.type;
    var renderGroup = config.renderGroup,
        renderFunction = config.renderFunction,
        renderOperator = config.renderOperator,
        renderVariable = config.renderVariable,
        renderValue = config.renderValue;
    config.visit(config, ast, depth);
    config.walk = walk;
    return (0, _branch.default)(type === "group", function () {
      return renderGroup(config, ast, depth);
    }, type === "function", function () {
      return renderFunction(config, ast, depth);
    }, type === "operator", function () {
      return renderOperator(config, ast, depth);
    }, type === "variable", function () {
      return renderVariable(config, ast, depth);
    }, type === "value", function () {
      return renderValue(config, ast, config, depth);
    }, type === "range", function () {
      return renderRange(config, ast, config, depth);
    });
  }
};
exports.defaultConfig = defaultConfig;

function runFunc(name, config, _ref6, depth) {
  var operands = _ref6.operands,
      subtype = _ref6.subtype;
  return "".concat(name, "(").concat(walk(config, operands[0], depth + 1), ", ").concat(walk(config, operands[1], depth + 1), ")");
}

var fpConfig = (0, _assign.default)(defaultConfig, {
  renderOperator: function renderOperator(config, _ref7, depth) {
    var subtype = _ref7.subtype,
        operands = _ref7.operands;
    return (0, _branch.default)(subtype == "prefix-minus", "MINUS(".concat(walk(config, operands[0], depth + 1), ")"), subtype == "prefix-plus", "PLUS(".concat(walk(config, operands[0], depth + 1), ")"), subtype == "infix-eq", runFunc("EQ", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-ne", runFunc("NE", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-gt", runFunc("GT", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-gte", runFunc("GTE", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-lt", runFunc("LT", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-lte", runFunc("LTE", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-add", runFunc("ADD", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-subtract", runFunc("SUBTRACT", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-multiply", runFunc("MULTIPLY", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-divide", runFunc("DIVIDE", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-power", runFunc("POWER", config, {
      operands: operands,
      subtype: subtype
    }, depth), subtype == "infix-concat", runFunc("CONCATENATE", config, {
      operands: operands,
      subtype: subtype
    }, depth));
  }
});
exports.fpConfig = fpConfig;
var jsConfig = (0, _assign.default)(fpConfig, {
  renderVariable: function renderVariable(config, v, depth) {
    return v.scope ? "context.get(\"".concat(v.name, "\", \"").concat(v.scope, "\")") : "context.get(\"".concat(v.name, "\")");
  },
  renderFunctionBegin: function renderFunctionBegin(config, f) {
    return "Formula.".concat(fpConfig.renderFunctionBegin(config, f));
  },
  renderArray: function renderArray(config, items, depth) {
    return "[" + items.map(function (d) {
      return config.walk(config, d, depth + 1);
    }) + "]";
  },
  renderValue: function renderValue(config, _ref8, depth) {
    var subtype = _ref8.subtype,
        items = _ref8.items,
        value = _ref8.value;
    return (0, _branch.default)(subtype === "string", function () {
      return "\"".concat(value, "\"");
    }, subtype === "number", function () {
      return "".concat(value);
    }, subtype === "boolean", function () {
      return value ? "true" : "false";
    }, subtype === "array", function () {
      return config.renderArray(config, items, depth);
    });
  }
});
exports.jsConfig = jsConfig;

function walk(config, astOrExp) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var ast = astOrExp;

  if (!ast) {
    return;
  }

  if ((0, _istext.default)(astOrExp)) {
    ast = (0, _parser.default)(astOrExp);
  }

  return config.renderRule(config, ast, depth);
} // return builder


var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;
  return function (ast) {
    return walk(config, ast);
  };
};

exports.default = _default;
