function getElementsAfter(array, n) {
  // your code here
  return array.splice(n + 1, array.length)
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']