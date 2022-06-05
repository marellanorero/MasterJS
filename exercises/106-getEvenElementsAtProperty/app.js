
var obj = {
  key: [1000, 11, 50, 17]
};
let newArr=[];
function getEvenElementsAtProperty(obj, key) {
    // your code here
    for(let i = 0; i < obj.key.length; i++){
      if(obj.key % 2 === 0){
        newArr.push( obj.key[i])
      }
    }
    return newArr
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]