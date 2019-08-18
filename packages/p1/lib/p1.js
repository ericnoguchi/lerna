"use strict";

const _ = require("lodash");
// C1 change
// C2 change
module.exports = p1;

function p1() {
  console.log(_.chunk(["a", "b", "c", "d"], 2));
}
