function isOldEnoughToDrink(edad){
    // your code here	
    if(edad < 21) {
        return false;
    } else {
        return true;
    }
}

var output = isOldEnoughToDrink(22);
console.log(output); // --> true