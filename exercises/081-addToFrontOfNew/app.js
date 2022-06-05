let arr1 = [];
function addToFrontOfNew(arr, element) {
    // Write your function here
    for(let i = 0; i < arr.length; i++){
        arr1.push(arr[i])
   }
   arr1.unshift(element)
   return arr1
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]