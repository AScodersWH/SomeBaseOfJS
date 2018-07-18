'use strict';
var calculate_elements_sum = require("../../../practices/reduce/compute_sum");
function amount_even(collection) {

  var result = collection.filter(ellen=>ellen%2==0);
  return calculate_elements_sum(result)-100;
}

module.exports = amount_even;
