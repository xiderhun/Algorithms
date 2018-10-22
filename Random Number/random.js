//La función genera un número aleatorio entre 1 y el número deseado

function numRandom (num) {

 return Math.floor((Math.random() * num) + 1); 

}

console.log(numRandom(5));

//Same with arrow function.

randomNum = (x) => Math.floor(Math.random() * x) + 1;

console.log(randomNum(5));
