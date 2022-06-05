let newArr = []
function getLengthOfLongestElement(arr) {
    // your code here
    for(let i=0; i < arr.length; i++){
        newArr.push(Math.max(arr[i]))
    }
    return newArr
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5