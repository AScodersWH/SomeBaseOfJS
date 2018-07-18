'use strict';

function choose_divisible_integer(collectiona, collectionb) {

  let result = [];
  var num = 0;
  for (var item of collectiona )

    for(var i of collectionb) {
      if (item % i == 0) {
        result[num] = item;
        num++;
        break;
      }

  }
  return result;
}

module.exports = choose_divisible_integer;
