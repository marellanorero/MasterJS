function getNthElement(array, n) {
  // your code here
  for(n in array){
    if(array.length >= 0){
      return array[n]
    } else {
      return undefined
    }
  }
}
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

// pendiente: como indicar el tema del valor de n