var obj = {
  key: ['a', 'long', 'game']
};
let newArray = []

function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    for(let i = 0; i < obj.key.length; i++){
      if(obj.key[i].length % 2 === 0){
        newArray.push(obj.key[i])
      }
    }
    return newArray
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']