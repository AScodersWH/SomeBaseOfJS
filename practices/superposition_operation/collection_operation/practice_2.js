'use strict';

function hybrid_operation_to_uneven(collection) {

  var result = collection.filter(ellen => ellen % 2 == 1);

  return result.map(ellen => ellen * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;

