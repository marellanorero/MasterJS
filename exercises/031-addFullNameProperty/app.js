let fullName = ''
function addFullNameProperty(obj) {
  // tu codigo aqui
  return Object.defineProperty(obj, 'fullName', {value: obj.firstName+ ' ' + obj.lastName, writable: false, enumerable: true})
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'