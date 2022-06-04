function getElementsUpTo(array, n) {
  // your code here
  array.splice(n, array.length -1)
  return array
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']


