
/* 
DICAS [] E {} QUANDO USAR
abriu e fechou colchete [ ] --- listas const lista = [item1, item2 ...]  ou acessar a posição da lista array[posição]
abriu e fechou chaves { } ----se não for no escopo de uma função, condição, iteração.. é um objeto const objeto = { chave: "valor", }
*/


const alunas = ["Taiana", "Marcela", "Valenthina", "Valentina", "Bruna Mara", "Celina"];

console.log("tamanho da array: ", alunas.length )
console.log(alunas[2]) // aluna na posição [2]
console.log(alunas[alunas.length - 1]) // a posição da última aluna na lista []


let alunas = ["Taiana", "Marcela", "Valenthina", "Valentina", "Bruna Mara", "Celina"];

//console.log("tamanho da array: ", alunas.length )
//console.log(alunas[2]) // aluna na posição [2]
//console.log(alunas[alunas.length - 1]) // a posição da última aluna na lista []


// metodos de arrays - funções pré-prontas
// push() - adiciona ao final 
// pop() - retira no final 
// shift() - retira do inicio
// unshift() - coloca no inicio
// includes() - ve se existe 
// sort() - ordena numerica ou alfabeticamente

alunas.push("Quezia", "Aida"); 
console.log(alunas);
alunas.pop();
console.log(alunas);
alunas.shift();
console.log(alunas);
alunas.unshift("Elis", "Ane Carolina");
console.log(alunas);
console.log(alunas.includes("Marcela"));
alunas.sort(); 
console.log(alunas);
console.log(alunas.length);
