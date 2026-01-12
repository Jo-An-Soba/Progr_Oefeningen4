import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({ input, output });

let honden = [
    { "naam": "Bella", "leeftijd": 2, "isSpeels": true },
    { "naam": "Ron", "leeftijd": 10, "isSpeels": false }
]

honden[0].kleur = "bruin"
console.log(honden)



process.exit();