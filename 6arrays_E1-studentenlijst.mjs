import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let array = [];

let namen = await userInput.question("Geef lijst namen op: ")
array.push(namen)

while (namen != ""){
namen = await userInput.question("Geef lijst namen op: ")
array.push(namen)

}

console.log(array)

process.exit();