'use strict';

function get_letter_interval_2(a,b) {
  var result = [];
  var num=0;
  if(a>b) for(var i=a;i>=b;i--)
  {
    result[num]=changeIntIntoWords(i);
    num++;
  }
  num=0;
  if(a<b) for(var i=a;i<=b;i++){
    result[num]=changeIntIntoWords(i);
    num++;
  }
  num=0;
  if(a==b) {
    result[num]=changeIntIntoWords(a);
  }
  return result;
}

function changeIntIntoWords(a){
  if(a<26) return String.fromCharCode(a+96);
  if(a>=26)
  {
    if(a%26==0)
    {
      if(a>26) return  String.fromCharCode(a/26-1+96)+String.fromCharCode(26+96);
      else return 'z';
    }
    else
    {
      let s = String.fromCharCode(a/26+96);
      s = s + String.fromCharCode(a%26+96);
      return s;
    }
  }

}
module.exports = get_letter_interval_2;

