// Write your function here
let newArr = [];
function getElementsGreaterThan10AtProperty(obj, key){
        for(let i = 0; i < obj.key.length; i++){
            if(obj.key[i] > 10){
                newArr.push(obj.key[i])
            }
        }
    return newArr
}

var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]