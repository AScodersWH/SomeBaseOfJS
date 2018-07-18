'use strict';

function compute_median(collection1) {
  var collection = collection1.sort((a,b)=>a-b);
  if(collection.length%2==1) return collection[~~(collection.length/2)];
  else return (collection[~~(collection.length/2)]+collection[~~(collection.length/2-1)])/2;
}

module.exports = compute_median;


