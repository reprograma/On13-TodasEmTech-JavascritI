/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

2. ETAPA2: Remova o primeiro item desta array;

3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

*/

let esportes = ["volei", "futebol", "basquete", "natacao", "handball", "surf"];

const caldo = esportes.shift();
const organiza = esportes.sort ();
Let includesSalada = esportes.includes("salada");
console.log(esportes)