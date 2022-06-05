function filterEvenLengthWords(words) {
    // your code here
    for ( let i = 0; i < words.length; i++){
        if(words.length % 2 === 0){
            return words[i]
        }
    }
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']