// Write your function here
function areValidCredentials(name, pass){
    if(name.length > 3 && pass.length > 7 ){
        return true
    } else {
        return false
    }
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero