import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({ input, output });

let hond1 = { "naam": "Bella", "leeftijd": 2, "isSpeels": true };
let hond2 = { "naam": "Ron", "leeftijd": 10, "isSpeels": false }

function begroet (){
    if(this.isSpeels){
    console.log("Hallo, ik ben " + this.naam + " ,ik ben " + this.leeftijd + " jaar oud en ik ben speels")
}else{
console.log("Hallo, ik ben " + this.naam + " ,ik ben " + this.leeftijd + " jaar oud en ik ben slecht gezind")
}
}

hond1.begroet = begroet; //functie als key in object steken
hond1.begroet(); // funtie aanroepen (betekent: "functie uitvoeren")

hond2.begroet = begroet; 
hond2.begroet(); 


process.exit();