'use strict';

function choose_no_repeat_number(collection) {

  var result = new Array();

  for (var item in collection) {
    result[collection[item]] = 1;
  }
//再把键和值的位置再次调换
  var tmparr = new Array();

  for (var n in result) {
    tmparr.push(parseInt(n));
  }
  return tmparr;
}

module.exports = choose_no_repeat_number;
