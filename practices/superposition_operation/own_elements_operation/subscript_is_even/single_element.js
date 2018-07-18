'use strict';
var choose_no_repeat_number = require("../../../../practices/filter/choose_no_repeat_number.js");
var single_element = function(collection){
  var s = [];
  var num = -1;
  for(var i=1;i<collection.length;i+=2) s[++num] = collection[i];

  var result = new Array();
  for (var item of s) {
    if(result[item]==1)
    {
      result[item] = 2;
      continue;
    }
    if(result[item]==2)
    {
      result[item] = 3;
      continue;
    }
    result[item] = 1;
  }
//再把键和值的位置再次调换
  var tmparr = new Array();

  for (var n in result) {
    if(result[n]<=1)
    tmparr.push(parseInt(n));
  }
  return tmparr;

};
module.exports = single_element;
