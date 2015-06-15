// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className){
  var result = [];
  function get(documentNode, result, className){
    var children = documentNode.childNodes
    for (var i = 0; i < children.length; i++){
        var classes = children[i].classList;
        if (classes && classes.contains(className)) {
            result.push(children[i]);
        }
        if (children[i].childNodes !== undefined){
            get(children[i], result, className);
        }
    }
  }
  get(document, result, className);
  return result;
};
