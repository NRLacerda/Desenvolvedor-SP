// QUESTAO 3


const express = require("express");
const app = express();

// express configuracao
app.use(express.urlencoded({extended:false})); //Parse URL-encoded bodies    
app.use(express.json()); //Used to parse JSON bodies

// pega os valores do vetfat

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('db.json'); // puxa os valores como rawdata
let vetvalores = JSON.parse(rawdata); //parseia os valores em json normal pra ser lido no node
console.log("ös valores são->")
console.log(vetvalores);  // printa os valores


const max = Math.max(vetvalores);
let maiornum = vetvalores.indexOf(max)
console.log(maiornum) //deve retornar o maior número do index

const min = Math.min(vetvalores);
let menornum = vetvalores.indexOf(min)
console.log(menornum) //deve retornar o menor número do index

const arr = vetvalores;

let soma = 0;

for (const value of arr) {
  soma += value;
  console.log(soma)
}
//depois seria necessário dividir a soma pelo valor de indexes do array, e comparar o maior valor com à média, tirando assim os dias fora da média
