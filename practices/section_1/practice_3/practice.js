var collect_same_element = require("../../section_1/practice_1/practice.js");
function collect_same_elements(collection_a, object_b) {
  var collection_b = object_b["value"];
  return collect_same_element(collection_a,collection_b);
}

module.exports = collect_same_elements;
