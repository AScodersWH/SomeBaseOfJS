'use strict';

function get_integer_interval(a, b) {
  var result = [];
  var num=0;
  if(a>b) for(var i=a;i>=b;i--)
  {
    result[num]=i;
    num++;
  }
  num=0;
  if(a<b) for(var i=a;i<=b;i++)  {
    result[num]=i;
    num++;
  }
  num=0;
  if(a==b) result[num]=a;
  return result;
}

module.exports = get_integer_interval;

