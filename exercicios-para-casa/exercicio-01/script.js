
//1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;


let carrinho = ["batom", "esmalte", "pincel", "mascaraFacial", "base", "perfume"];
console.log(carrinho);


//2. ETAPA2: Remova o primeiro item desta array;


carrinho.shift();
console.log(carrinho);

//3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

carrinho.sort();
console.log(carrinho);


//. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

console.log(carrinho.includes("salada"));
console.log(carrinho.includes("esmalte"));