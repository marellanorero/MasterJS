// Write your function here
let newArr = [];
function getOddLengthWordsAtProperty(obj, key){
    for(let i = 0; i < obj.key.length; i++){
        if(obj.key[i].length % 2 !== 0){
            newArr.push(obj.key[i])
        }
    }
    return newArr
}

var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
