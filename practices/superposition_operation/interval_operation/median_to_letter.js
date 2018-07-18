'use strict';
var compute_median = require("../../../practices/reduce/compute_median.js");
function median_to_letter(collection) {

  var result= ~~compute_median(collection);
  return changeIntIntoWords(result+1);
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
module.exports = median_to_letter;
