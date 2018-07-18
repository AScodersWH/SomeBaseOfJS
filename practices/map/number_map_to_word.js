'use strict';
var number_map_to_word = function(collection){
  return collection.map(ellen=>String.fromCharCode(ellen+96));
};

module.exports = number_map_to_word;
