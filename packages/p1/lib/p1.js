"use strict";

const _ = require("lodash");

module.exports = p1;

function p1() {
  console.log(_.chunk(["a", "b", "c", "d"], 2));
}
