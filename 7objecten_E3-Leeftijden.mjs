import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({ input, output });

let persoon1 = {
    "naam": "Jos",
    "leeftijd": 12
}
let persoon2 = {
    "naam": "Kevin",
    "leeftijd": 16
}

function vergelijkLeeftijd() {
    if (persoon1.leeftijd < persoon2.leeftijd) {
        let verschil = persoon2.leeftijd - persoon1.leeftijd
        console.log(persoon1.naam + " is de jongste en ze schelen " + verschil + " jaren")
    } else {
        console.log("else")
    }
}
vergelijkLeeftijd()

process.exit();