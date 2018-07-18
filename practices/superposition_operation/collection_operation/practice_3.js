'use strict';
var calculate_elements_sum = require("../../../practices/reduce/compute_sum");
function hybrid_operation_to_uneven(collection) {

  var result = collection.filter(ellen => ellen % 2 == 1);

  return calculate_elements_sum(result.map(ellen => ellen * 3 + 5))-100;
}

module.exports = hybrid_operation_to_uneven;

