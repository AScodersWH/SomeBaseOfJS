'use strict';

function calculate_elements_sum(collection1) {
  var collection = collection1;
  collection.push(100);
 return  collection.reduce(
   function ss(a,b){
     return a+b;
  }
  )

}

module.exports = calculate_elements_sum;

