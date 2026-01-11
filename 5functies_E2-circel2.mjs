import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({ input, output });

let straal = parseFloat(await userInput.question("straal? "))

function circel(straal) {
    return Math.PI * straal
}
//let oppCircel = circel(straal);
console.log(circel(straal))

process.exit();