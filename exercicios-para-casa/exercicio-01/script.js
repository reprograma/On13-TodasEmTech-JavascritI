// 1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

const feira = ["feijão", "arroz", "macarrão", "extrato de tomate", "açúcar", "biscoito"]

//console.log("tamanho da array:",feira);

// 2. ETAPA2: Remova o primeiro item desta array;
feira.shift();
//console.log(feira);
//3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);
feira.sort();
//console.log(feira);
// 4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 
console.log(feira.includes("salada"));