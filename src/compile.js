// Copyright 2015-2018 FormBucket LLC

import branch from "./branch";
import map from "./map";
import unique from "./unique";
import parse from "./parser";
import walker, { fpConfig, jsConfig } from "./walker";
import assign from "./assign";

var compiledNumber = 0;

export default function compile(exp) {
  var ast = exp,
    jsCode,
    functionCode,
    f,
    suppress = false,
    precedents = [],
    requires = [],
    namespace = "funcs.";

  // convert to AST when string provided
  if (typeof ast === "string") {
    ast = parse(exp);
  }

  let walk1 = walker(fpConfig);
  let walk2 = walker(
    assign(jsConfig, {
      visit: (config, node, depth) => {
        if (node.type === "variable") {
          precedents.push(node);
        }
        if (node.type === "function") {
          requires.push(node.name);
        }
      }
    })
  );

  // Walk the AST and convert operators to functions.
  let fpExp = walk1(ast);
  // Walk result and convert to JSCode.
  let code = walk2(fpExp);

  var id = compiledNumber++;

  precedents = unique(precedents.map(JSON.stringify)).map(JSON.parse);
  requires = unique(requires.map(JSON.stringify)).map(JSON.parse);

  f = new Function(
    "context",
    "Formula",
    `/* formula: ${exp} */
return ${code};
//# sourceURL=formula_${id}
`
  );

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
