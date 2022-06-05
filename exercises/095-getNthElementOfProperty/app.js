// Write your function here
function getNthElementOfProperty(obj, key, i){
    for(i in obj.key){
      return obj.key[i]
    }
}

var obj = {
    key: [1, 2, 6]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2