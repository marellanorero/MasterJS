// Write your function here
function getLastElementOfProperty(obj, key){
    for(let i = 0; i < obj.key.length; i++){
      return obj.key.pop()
    }
}

var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5