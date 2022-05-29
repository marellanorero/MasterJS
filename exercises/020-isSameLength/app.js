// Write your function here
function isSameLength (num1, num2){
    if(num1.length === num2.length){
        return true
    } else {
        return false
    }
}

var output = isSameLength('words', 'super');
console.log(output); // --> true