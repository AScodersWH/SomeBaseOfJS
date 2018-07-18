'use strict';

function find_last_even(collection1) {
  var collection = collection1.filter(ellen=>ellen%2==0);
  return  collection[collection.length-1];
}

module.exports = find_last_even;
