"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./lib/formula.min.js");
} else {
  module.exports = require("./lib/formula.js");
}
