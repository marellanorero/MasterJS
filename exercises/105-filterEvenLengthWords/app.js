let newArr = []
function filterEvenLengthWords(words) {
    // your code here
    for ( let i = 0; i < words.length; i++){
        if(words[i].length % 2 === 0){
           newArr.push( words[i])
        }
    }
    return newArr
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']