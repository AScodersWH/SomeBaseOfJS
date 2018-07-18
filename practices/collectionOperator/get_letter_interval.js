'use strict';

function get_letter_interval(a, b) {
  var result = [];
  var num=0;
  if(a>b) for(var i=a;i>=b;i--)
  {
    result[num]=String.fromCharCode(i+96);
    num++;
  }
  num=0;
  if(a<b) for(var i=a;i<=b;i++){
    result[num]=String.fromCharCode(i+96);
    num++;
  }
  num=0;
  if(a==b) result[num]=String.fromCharCode(a+96);
  return result;
}

module.exports = get_letter_interval;
