// Write your function here
function getIndexOf (caracter, string){
    for(let i = 0; i < string.length; i++){
        if(string[i] === caracter){
            return i
        }
    }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2