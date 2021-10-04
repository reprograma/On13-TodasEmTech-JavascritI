
// 1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

const cardapio = ['Arroz', 'feijão', 'Macarrão', 'Purê de Batata', 'Maionese', 'Churrasco'];


// 2. ETAPA2: Remova o primeiro item desta array;

cardapio.shift();

// 3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

cardapio.sort();

// 4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

cardapio.includes("salada");

console.log(cardapio);