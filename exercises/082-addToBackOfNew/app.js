let arr1 = [];
function addToBackOfNew(arr, element) {
    // Write your function here
    for(let i = 0; i < arr.length; i++){
        arr1.push(arr[i])
   }
   arr1.push(element)
   return arr1
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]