import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({ input, output });

let hond1 = { "naam": "Bella", "leeftijd": 2, "isSpeels": true };
let hond2 = { "naam": "Ron", "leeftijd": 10, "isSpeels": false }

function begroet (){console.log("Hallo, ik ben " + this.naam)}

hond1.begroet = begroet; //functie als key in object steken
hond1.begroet(); // funtie aanroepen (betekent: "functie uitvoeren")




process.exit();