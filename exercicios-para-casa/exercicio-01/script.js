
// 1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

let cores = ["amarelo", "verde", "azul", "rosa", "violeta", "preto", "vermelho", "branco"];

console.log(cores.length);

// 2. ETAPA2: Remova o primeiro item desta array;

cores.shift();
console.log(cores);

// 3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

cores.sort();
console.log(cores);

// 4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

console.log(cores.includes("salada"));
