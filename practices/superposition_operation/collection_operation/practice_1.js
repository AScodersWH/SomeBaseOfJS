'use strict';
var calculate_elements_sum = require("../../../practices/reduce/compute_sum");

function hybrid_operation(collection) {

  var result = collection.map(ellen => ellen*3+2);
  return calculate_elements_sum(result)-100;

}

module.exports = hybrid_operation;

