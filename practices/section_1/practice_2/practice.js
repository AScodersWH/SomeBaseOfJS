function collect_same_elements(collectiona, collectionbb) {
  var collectionb = [].concat.apply([],collectionbb);

  let result = [];
  var num = 0;
  for (var item of collectiona )
  {
    if(collectionb.indexOf(item)>=0)
    {
      result.push(item);
    }
  }


  return result;
}

module.exports = collect_same_elements;
