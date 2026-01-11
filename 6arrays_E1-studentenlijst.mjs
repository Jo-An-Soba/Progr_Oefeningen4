import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

/*let straal = parseFloat(await userInput.question("straal? "))

function circel(straal) {
    return Math.PI * straal
}
let oppCircel = circel(straal);
console.log(oppCircel)*/


let lijstNamen = [];

let naam = await userInput.question("Geef lijst namen op. Druk ENTER om lijst af te printen. ")
lijstNamen.push(naam)

while(naam != "")
     {
        naam = await userInput.question("Geef lijst namen op: ")
        lijstNamen.push(naam)
        
    }  
        console.log(lijstNamen)




process.exit();