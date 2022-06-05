// Write your function here
let sum = 0;

function computeAverageOfNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] / arr.length
    }
    return sum
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3