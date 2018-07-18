'use strict';

var calculate_average = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/calculate_average.js');

var even_group_calculate_average = function (collection) {
  var s = [];
  var num = -1;
  for (var i = 1; i < collection.length; i += 2) s[++num] = collection[i];
  var result = s.filter(ele => ele % 2 == 0);
  var resultgg = result;
  var resultbb = result;
  var resultqq = result;
  var resultg = resultgg.filter(ele=>ele<10);
  var resultb = resultbb.filter(ele=>ele>=10&&ele<100);
  var resultq = resultqq.filter(ele=>ele>100);
  var results= [];
  results.push(calculate_average(resultg));
  results.push(calculate_average(resultb));
  results.push(calculate_average(resultq));
  var ss = results.filter(ele=>ele!=0);
  if(ss.length==0) ss=[0];
  return ss;
};
module.exports = even_group_calculate_average;
