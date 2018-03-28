import and from "./and";
import branch from "./branch";
import isText from "./istext";
import parse from "./parser";
import some from "./some";
import assign from "./assign";
import isArray from "./isarray";

export let defaultConfig = {
  upCase: true,
  visit: () => undefined,
  labelEQ: "=",
  labelNE: "<>",
  labelGT: "<",
  labelGTE: "<=",
  labelLT: ">",
  renderMINUS: () => "-",
  renderPLUS: () => "+",
  renderEQ: () => " = ",
  renderNE: () => " <> ",
  renderGT: () => " > ",
  renderGTE: () => " >= ",
  renderLT: () => " < ",
  renderLTE: () => " <= ",
  renderADD: () => " + ",
  renderSUBTRACT: () => " - ",
  renderMULTIPLY: () => " * ",
  renderDIVIDE: () => " / ",
  renderPOWER: () => " ^ ",
  renderCONCAT: () => " & ",
  renderGroupBefore: () => "(",
  renderGroupAfter: () => ")",
  renderGroup: (config, g, depth) => {
    return `${config.renderGroupBefore(config, g, depth)}${walk(
      config,
      g.exp,
      depth + 1
    )}${config.renderGroupAfter(config, g, depth)}`;
  },
  renderFunctionBefore: (config, f, depth) =>
    config.upCase ? f.name.toUpperCase() : f.name,
  renderFunctionAfter: (config, f, depth) => ")",
  renderFunction: (config, f, depth) =>
    `${config.renderFunctionBefore(config, f, depth)}(${f.args
      .map(d => walk(config, d, depth + 1))
      .join(", ")}${config.renderFunctionAfter(config, f, depth)}`,
  renderOperator: (config, { subtype, operands }, depth) =>
    branch(
      operands.length == 1,
      () =>
        `${branch(
          subtype == "prefix-minus",
          config.renderMINUS(config, depth),
          subtype == "prefix-plus",
          config.renderPLUS(config, depth)
        )}${walk(config, operands[0], depth + 1)}`,
      operands.length === 2,
      () =>
        `${walk(config, operands[0], depth + 1)}${branch(
          subtype == "infix-eq",
          config.renderEQ(config, { operands }, depth),
          subtype == "infix-ne",
          config.renderNE(config, { operands }, depth),
          subtype == "infix-gt",
          config.renderGT(config, { operands }, depth),
          subtype == "infix-gte",
          config.renderGTE(config, { operands }, depth),
          subtype == "infix-lt",
          config.renderLT(config, { operands }, depth),
          subtype == "infix-lte",
          config.renderLTE(config, { operands }, depth),
          subtype == "infix-add",
          config.renderADD(config, { operands }, depth),
          subtype == "infix-subtract",
          config.renderSUBTRACT(config, { operands }, depth),
          subtype == "infix-multiply",
          config.renderMULTIPLY(config, { operands }, depth),
          subtype == "infix-divide",
          config.renderDIVIDE(config, { operands }, depth),
          subtype == "infix-power",
          config.renderPOWER(config, { operands }, depth),
          subtype == "infix-concat",
          config.renderCONCAT(config, { operands }, depth)
        )}${walk(config, operands[1], depth + 1)}`
    ),
  renderRangeBetween: () => ":",
  renderRange: (config, { topLeft, bottomRight }, depth) =>
    `${walk(config, topLeft, depth)}${config.renderRangeBetween(
      config,
      { topLeft, bottomRight },
      depth
    )}${walk(config, bottomRight, depth)}`,
  renderVariable: (config, { scope, name }, depth) =>
    `${scope ? scope + "!" : ""}${name}`,
  renderValue: (config, { subtype, items, value }, depth) => {
    return branch(
      subtype === "string",
      () => `"${value}"`,
      subtype === "number",
      () => `${value}`,
      subtype === "boolean",
      () => (value ? "TRUE" : "FALSE"),
      subtype === "array",
      () => `{${config.renderArray(config, { items }, depth)}}`
    );
  },
  renderArray: (config, { items }, depth) =>
    branch(
      and(...items.map(d => d.type === "value" && d.subtype !== "array")),
      () => items.map(d => d.value).join(","),
      some(items, d => isArray),
      () => items.map(d => config.renderArray(config, d, depth + 1)).join(";"),
      items.join(",")
    )
};

function runFunc(name, config, { operands, subtype }, depth) {
  return `${name}(${walk(config, operands[0], depth + 1)}, ${walk(
    config,
    operands[1],
    depth + 1
  )})`;
}
export let fpConfig = assign(defaultConfig, {
  renderOperator: (config, { subtype, operands }, depth) =>
    branch(
      subtype == "prefix-minus",
      `MINUS(${walk(config, operands[0], depth + 1)})`,
      subtype == "prefix-plus",
      `PLUS(${walk(config, operands[0], depth + 1)})`,
      subtype == "infix-eq",
      runFunc("EQ", config, { operands, subtype }, depth),
      subtype == "infix-ne",
      runFunc("NE", config, { operands, subtype }, depth),
      subtype == "infix-gt",
      runFunc("GT", config, { operands, subtype }, depth),
      subtype == "infix-gte",
      runFunc("GTE", config, { operands, subtype }, depth),
      subtype == "infix-lt",
      runFunc("LT", config, { operands, subtype }, depth),
      subtype == "infix-lte",
      runFunc("LTE", config, { operands, subtype }, depth),
      subtype == "infix-add",
      runFunc("ADD", config, { operands, subtype }, depth),
      subtype == "infix-subtract",
      runFunc("SUBTRACT", config, { operands, subtype }, depth),
      subtype == "infix-multiply",
      runFunc("MULTIPLY", config, { operands, subtype }, depth),
      subtype == "infix-divide",
      runFunc("DIVIDE", config, { operands, subtype }, depth),
      subtype == "infix-power",
      runFunc("POWER", config, { operands, subtype }, depth),
      subtype == "infix-concat",
      runFunc("CONCATENATE", config, { operands, subtype }, depth)
    )
});

export let jsConfig = assign(fpConfig, {
  renderVariable: (config, v, depth) => {
    return v.scope
      ? `context.get("${v.name}", "${v.scope}")`
      : `context.get("${v.name}")`;
  },
  renderFunctionBefore: (config, f) =>
    `Formula.${fpConfig.renderFunctionBefore(config, f)}`,
  renderArray: (config, items, depth) =>
    "[" + items.map(d => config.walk(config, d, depth + 1)) + "]",
  renderValue: (config, { subtype, items, value }, depth) => {
    return branch(
      subtype === "string",
      () => `"${value}"`,
      subtype === "number",
      () => `${value}`,
      subtype === "boolean",
      () => (value ? "true" : "false"),
      subtype === "array",
      () => config.renderArray(config, items, depth)
    );
  }
});

function walk(config, astOrExp, depth = 0) {
  let ast = astOrExp;

  if (!ast) {
    return;
  }
  if (isText(astOrExp)) {
    ast = parse(astOrExp);
  }

  let { type } = ast;
  let {
    renderGroup,
    renderFunction,
    renderOperator,
    renderVariable,
    renderValue
  } = config;

  config.visit(config, ast, depth);
  config.walk = walk;

  return branch(
    type === "group",
    () => renderGroup(config, ast, depth),
    type === "function",
    () => renderFunction(config, ast, depth),
    type === "operator",
    () => renderOperator(config, ast, depth),
    type === "variable",
    () => renderVariable(config, ast, depth),
    type === "value",
    () => renderValue(config, ast, config, depth),
    type === "range",
    () => renderRange(config, ast, config, depth)
  );
}

// return builder
export default (config = defaultConfig) => ast => walk(config, ast);
