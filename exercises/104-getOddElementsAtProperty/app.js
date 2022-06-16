var obj = {
  key: [1, 2, 3, 4, 5]
};
let newArr=[]
function getOddElementsAtProperty(obj, key) {
    // your code here
    for(let i = 0; i < obj.key.length; i++){
      if(obj.key[i] % 2 !== 0){
        newArr.push( obj.key[i])
      }
    }
    return newArr
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]