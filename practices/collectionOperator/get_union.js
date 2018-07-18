'use strict';

function get_union(collectiona, collectionb) {
  let result = collectiona;
  var num = collectiona.length;
  for (var item of collectionb )
  {
    if(collectiona.indexOf(item)==-1)
    {
      result[num]=item;
      num++;
    }
  }
  return result;
}

module.exports = get_union;

