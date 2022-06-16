var obj = {
  key: [2, 1, 5]
};
let newArr = []
function getSquaredElementsAtProperty(obj, key) {
    // your code here
    for(let i = 0; i < obj.key.length; i++){
      newArr.push( Math.pow(obj.key[i], 2))
    }
  return newArr
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]