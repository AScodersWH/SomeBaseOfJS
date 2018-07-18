'use strict';

function one_add_next_multiply_three(collection) {
  var result = [];
  for (var item in collection) {
    if (item < collection.length-1) {
      result.push((collection[item]+collection[++item])*3);
    }
  }
  return result;
}

module.exports = one_add_next_multiply_three;
