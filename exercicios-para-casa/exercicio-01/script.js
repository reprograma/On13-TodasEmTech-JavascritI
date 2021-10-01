// ETAPA 1: Crie uma variável que contenha uma array com até 6 itens;


const frutas = ["Pitaia", "Abacaxi", "Uva", "Sapoti ", "Pera", "Banana"];

//  ETAPA 2: Remova o primeiro item desta array;

frutas.shift();
console.log(frutas);

//ETAPA 3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

frutas.sort();
console.log(frutas);

//ETAPA 4: Veja se existe o item com valor "salada" dentro da sua array;

console.log(frutas.includes("salada"));