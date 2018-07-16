'use strict';

function calculate_elements_sum(collection) {
 return  collection.reduce(
   function ss(a,b){
     return a+b;
  }
  )

}

module.exports = calculate_elements_sum;

