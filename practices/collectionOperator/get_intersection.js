'use strict';

function get_intersection(collectiona, collectionb) {
  let result = [];
  var num = 0;
  for (var item of collectionb )
  {
    if(collectiona.indexOf(item)>=0)
    {
      result[num]=item;
      num++;
    }
  }


  return result;
}

module.exports = get_intersection;
