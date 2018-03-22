"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/formula.min.js");
} else {
  module.exports = require("./cjs/formula.js");
}
