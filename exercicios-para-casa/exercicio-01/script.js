/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

2. ETAPA2: Remova o primeiro item desta array;

3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

*/
1.
const familia = ["Esmeraldina", "Valdir", "Rita", "Rafael", "Celina", "Rogério"];

2.
const elemento1Familia = familia.shift();
console.log(elemento1Familia);
console.log(familia);

3.
const familiaSort = familia.sort();
console.log (familia);

4.
familia.includes("salada");
console.log(familia.includes("salada"));




