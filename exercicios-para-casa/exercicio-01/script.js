//1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

let maravilhosas = ["anitta", "iza", "lexa", "luiza", "gloria", "pocah"]
//2. ETAPA2: Remova o primeiro item desta array;

maravilhosas.shift();
console.log(maravilhosas)
//3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

maravilhosas.sort();
console.log(maravilhosas)
//4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

console.log(maravilhosas.includes("salada"));