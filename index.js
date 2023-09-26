const readline = require("readline-sync");

const interest = 0.03; 
let capital = Number(readline.question("Ingrese el capital inicial: "));
let time = Number(readline.question("Ingrese el tiempo de la inversión: "));

const result = capital * Math.pow((1 + interest), time);
console.log(`Usted tendrá en su cuenta ${result.toFixed(2)}$`);