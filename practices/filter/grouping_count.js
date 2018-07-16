'use strict';

function grouping_count(collection) {
  let result = {}
  collection.map(ele=>
  {
    if(ele in result) result[ele]+=1;
    else result[ele]=1;
  }
  )
  return result;
}

module.exports = grouping_count;
