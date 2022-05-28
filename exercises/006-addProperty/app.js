function addProperty(obj, key) {
  // your code here
  if(key in obj){
    return obj[key];
  } 
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true