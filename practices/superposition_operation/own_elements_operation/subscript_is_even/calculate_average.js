'use strict';
var calculate_average = function(collection){
    var result = collection.filter(ellen=> ellen % 2 == 0);
    var sum = eval(result.join("+"));
    return ~~(sum/result.length*100)/100;
};
module.exports = calculate_average;
