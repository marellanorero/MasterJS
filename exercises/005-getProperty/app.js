function getProperty(obj, key) {
  // your code here
  for(key in obj){
    if(obj[key]){
      return obj[ket];
    } else {
      return undefined;
    }
  }
}

var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'