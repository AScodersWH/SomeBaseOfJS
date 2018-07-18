function collect_same_elements(collectiona, collectionb) {
  let result = [];
  var num = 0;
  for (var item of collectiona )
  {
    if(collectionb.indexOf(item)>=0)
    {
      result[num]=item;
      num++;
    }
  }


  return result;
}

module.exports = collect_same_elements;
