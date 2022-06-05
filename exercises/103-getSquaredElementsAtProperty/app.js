var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    for(let i = 0; i < obj.key.length; i++){
      return Math.pow(obj.key[i], 2)
    }
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]