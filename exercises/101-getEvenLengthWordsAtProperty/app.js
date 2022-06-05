var obj = {
  key: ['a', 'long', 'game']
};

function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    for(let i = 0; i < obj.key.length; i++){
      if(obj.key[i].length % 2 === 0){
        return obj.key
      }
    }
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']