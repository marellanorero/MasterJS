function isPersonOldEnoughToVote(person) {
  // tu codigo aqui
  if(person.age > 17) {
    return true
  } else {
    return false
  }
}

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true