function getAllElementsButNth(array, n) {
    // Write your function here
    for (i in array) {
        if(array[i] === n){
            array.splice(array[i], 1)
        }
    }
    return array
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']