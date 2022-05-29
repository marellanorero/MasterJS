function isPersonOldEnoughToDrink(person) {
  // tu codigo aqui
  if(person.age > 20){
    return true
  } else {
    return false
  }
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false