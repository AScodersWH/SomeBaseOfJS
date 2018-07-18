'use strict';

function choose_multiples_of_three(collection) {
  let result = {};
  var num = 0;
  for (var item of collection )
  {
    if(item % 3 == 0)
    {
      result[num]=item;
      num++;
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
