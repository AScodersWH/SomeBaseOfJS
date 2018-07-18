'use strict';

function get_integer_interval_2(a, b) {
  var result = [];
  var num=0;
  if(a>b) for(var i=a;i>=b;i--) if(i%2==0)
  {
    result[num]=i;
    num++;

  }
  num=0;
  if(a<b) for(var i=a;i<=b;i++) if(i%2==0) {
    result[num]=i;
    num++;
  }
  num=0;
  if(a==b&&a%2==0) result[num]=a;
  return result;
}

module.exports = get_integer_interval_2;
