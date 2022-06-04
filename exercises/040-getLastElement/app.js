function getLastElement(array) {
  // your code here
  if(array.length >= 0){
    return array.length 
  } else {
    return undefined
  }
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4