'use strict';

function calculate_elements_sum(collection1, element) {
  var collection = collection1.reverse();
  for(var i=0;i<collection.length;i++) if(collection[i]==element)
  {
    return collection.length-i-1;
    break;
  }
}

module.exports = calculate_elements_sum;
