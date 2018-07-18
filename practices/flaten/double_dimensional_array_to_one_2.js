'use strict';

function double_to_one(collection) {

  var collection1 = [].concat.apply([],collection);
  var hash = new Array();
  for(var item of collection1)
  {
    if(hash[item]==0) hash[item]=1;
    else collection1.pop(item);
  }
  collection1.push(4)
   return collection1;
}

module.exports = double_to_one;
