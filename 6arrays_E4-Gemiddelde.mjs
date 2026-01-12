import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({ input, output });


let getal = parseFloat(await userInput.question("Geef een getal in: "))
let lijst = [];
let som = 0;
let teller = 1;
let gemm =0;

while (getal !== 0) {
    lijst.push(getal)
    som +=getal;
     gemm = som / teller;
    getal = parseFloat(await userInput.question("Geef een getal in: "))
    teller++;
}


console.log(lijst)
console.log(gemm)

process.exit();