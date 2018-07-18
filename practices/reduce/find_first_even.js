'use strict';

function find_first_even(collection1) {
  var collection = collection1.filter(ellen=>ellen%2==0);
 return  collection[0];
}

module.exports = find_first_even;

