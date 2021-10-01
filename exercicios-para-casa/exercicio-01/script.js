/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

2. ETAPA2: Remova o primeiro item desta array;

3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

*/

const cores = ["azul", "preto", "amarelo", "branco", "verde", "cinza"];
console.log(cores);

cores.shift();

cores.sort();

cores.includes("salada");
console.log(cores.includes("salada"));
