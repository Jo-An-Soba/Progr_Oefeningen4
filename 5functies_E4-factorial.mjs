import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let getal = parseFloat(await userInput.question("Geef een getal in: "))

function factorial(getal) {
    //code

    let teller = 1;
    let stapelen = 1
    while (teller <=getal){
        stapelen = teller * stapelen;
        teller++;
        
    }
    return stapelen;
}
let antwoord = factorial(getal)

console.log(antwoord);


process.exit();