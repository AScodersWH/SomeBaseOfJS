'use strict';
var even_asc_odd_desc = function(collection){
    var collectionOdd = collection.filter(ele=>ele%2==1);
    var collectionEven = collection.filter(ele=>ele%2==0);
    var result = collectionEven.sort((a,b)=>a-b);
    var result2 = collectionOdd.sort((a,b)=>b-a);

    return result.concat(result2);
};
module.exports = even_asc_odd_desc;
