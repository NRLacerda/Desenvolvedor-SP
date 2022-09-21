/* 
Respostas
Nicolas Rocha Lacerda
Desenvolvedor SP
*/
// QUESTÃO 1
let indice= 13;
let soma = 0 ;
let k = 0 ;

while (k < indice){
    k = k + 1
    soma = soma +k
}
console.log(soma)
// Resultado da soma = 91

//--------------------------------------

//QUESTÃO 2


let fibo = [0,1]


var readline = require('readline');
var rl = readline.createInterface(
        process.stdin, process.stdout);
  
rl.setPrompt(`Digite um número `);
rl.prompt()

for (r1 === fibo[0,1]; fibo[0,1]+[2,3];) {
    console.log("a sequencia de Fibonacci é " + fibo);
 }
if (r1 === fibo[0,1,2,3,4,5,6,7,8,9,10,11]){
    console.log("está dentro de fibonacci")
}
else{
    console.log("Nao está dentro de Fibonnaci")
}

//--------------------------------------

// QUESTÃO 3

// no arquivo questao3.js

//--------------------------------------


// QUESTÃO 4

let sp  = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let total
let porsp
let pormg 
let pores
let porrj

total = sp + rj + mg + es
console.log("o total é " + total)
porsp = sp*100/total
porrj = rj*100/total
pormg = mg*100/total
pores = es*100/total
console.log(" SP representa a -> "+ porsp+"%") 
console.log("RJ REPRESENTA A -> "+ porrj+"%") 
console.log("MG REPRESENTA -> " + pormg+"%")
console.log("e ES representa a -> " + pores+"%")
console.log("do TOTAL de faturamento mensal de uma distribuidora")

//--------------------------------------

// QUESTÃO 5

function reverseString(str) {
    var newString = ""; // declara a var como vazio
    for (var i = str.length - 1; i >= 0; i--) { //remove lenght 1 por 1
        newString += str[i]; // remonta
    }
    console.log(newString) //printa na tela o resultado
    return newString;
}
reverseString('desenvolvedorSp');
//--------------------------------------