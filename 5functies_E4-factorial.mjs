import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

function circel(straal) {
    return Math.PI * straal
}
let oppCircel = circel(3);
console.log(oppCircel)

process.exit();