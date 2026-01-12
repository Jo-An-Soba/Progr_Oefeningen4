import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let lijstNamen = [];
let naam = await userInput.question("Geef lijst namen op. Druk ENTER om lijst af te printen. ")

while (naam != "") {
     lijstNamen.push(naam)
    naam = await userInput.question("Geef lijst namen op: ")
   }

let teller = 0;
while (teller < lijstNamen.length) {
    console.log("Beste " + lijstNamen[teller] + " jij bent uitgenodigd om deel te nemen aan de leukste cursus van EhB")
    teller++
}

process.exit();