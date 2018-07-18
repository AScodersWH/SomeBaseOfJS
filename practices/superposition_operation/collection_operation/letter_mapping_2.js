'use strict';

function average_to_letter(collection) {
  var sum = eval(collection.join("+"));
  return String.fromCharCode(~~(sum/collection.length*100)/100+97);
}

module.exports = average_to_letter;

