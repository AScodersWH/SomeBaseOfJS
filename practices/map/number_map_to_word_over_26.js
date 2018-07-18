'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(ellen=>changeIntIntoWords(ellen));
};

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
module.exports = number_map_to_word_over_26;
