let sum = 0;
function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  for(let i = 0; i < obj.key.length; i++){
    sum += obj.key[i] / obj.key.length
  }
  return sum
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

