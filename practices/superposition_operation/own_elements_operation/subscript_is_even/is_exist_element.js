'use strict';
var is_exist_element = function(collection,element){
  var s = [];
  var num = -1;
  for(var i=1;i<collection.length;i+=2) s[num++] = collection[i];
  var flag ;
  if(s.indexOf(element)>=0) flag=false;
  if(s.indexOf(element)==-1) flag = true;
  return flag;
};
module.exports = is_exist_element;
