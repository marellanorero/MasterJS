// Write your function here
let newArr = [];
function getElementsLessThan100AtProperty(obj, key){
        for(let i = 0; i < obj.key.length; i++){
            if(obj.key[i] < 100){
                newArr.push(obj.key[i])
            }
        }
    return newArr
}

var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]