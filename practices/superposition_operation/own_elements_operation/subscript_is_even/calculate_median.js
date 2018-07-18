'use strict';

var calculate_median = function (collection) {
    var s = [];
    var num = -1;
    for(var i=1;i<collection.length;i+=2) s[++num] = collection[i];
    return compute_medi(s);
  };

function compute_medi(collection1) {
  var collection = collection1.sort((a,b)=>a-b);
  if(collection.length%2==1) return collection[~~(collection.length/2)];
  else return (collection[~~(collection.length/2)]+collection[~~(collection.length/2-1)])/2;
}

module.exports = calculate_median;
