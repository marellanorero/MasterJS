// Write your function here
function removeElement (arr, item){
    for(let i = 0; i < arr.length; i++){
        if( arr[i] === item){
            arr.splice(i, 1)
        }
    }
    return arr
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]