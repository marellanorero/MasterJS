// Write your function here
let newArr= [];
function keep(arr, el){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === el){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); 