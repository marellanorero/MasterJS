// Write your function here

function countAllCharacters(str){
    let conteo = {}
    str.replace(/\S/g, function(p){
        conteo[p] = (isNaN(conteo[p]) ? 1 : conteo[p] + 1);
    });

    return conteo;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}