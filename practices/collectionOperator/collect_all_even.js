'use strict';

function collect_all_even(collection) {
  let result = {};
  result = collection;
  result = result.filter(ellen=>ellen%2==0);
  return result;
}

module.exports = collect_all_even;
