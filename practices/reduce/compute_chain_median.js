'use strict';

function compute_chain_median(collection1) {
  var collection2 = convertListToArray(collection1);
  var collection = collection2.sort((a,b)=>a-b);
  if(collection.length%2==1) return collection[~~(collection.length/2)];
  else return (collection[~~(collection.length/2)]+collection[~~(collection.length/2-1)])/2;
}

function convertListToArray(node){
  return  node.split("->").map(ele=>parseInt(ele,10));
}
module.exports = compute_chain_median;
