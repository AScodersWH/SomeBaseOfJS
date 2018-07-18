'use strict';

function even_to_letter(collection) {

  var result =  collection.filter(ellen=>ellen%2==0);
  return result.map(ellen=>
    String.fromCharCode(ellen+96));

}

module.exports = even_to_letter;
