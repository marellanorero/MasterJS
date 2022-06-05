// Write your function here
function getFirstElementOfProperty(obj, key){
        for(let i = 0; i < obj.key.length; i++){
          return obj.key[0]
        }
}

var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1