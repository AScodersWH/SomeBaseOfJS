var collect_same_element = require("../../section_1/practice_1/practice.js");
function collect_same_elements(collectionaa, object_b) {
  var collectiona = collectionaa.map(ellen=>ellen["key"]);
  var collectionb = object_b["value"];
  return collect_same_element(collectiona,collectionb)
}

module.exports = collect_same_elements;
