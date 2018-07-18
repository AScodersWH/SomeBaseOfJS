'use strict';

function average_uneven(collection) {

  var result = collection.filter(ellen=>ellen%2==1);
  var sum = eval(result.join("+"));
  return ~~(sum/result.length*100)/100;
}

module.exports = average_uneven;
