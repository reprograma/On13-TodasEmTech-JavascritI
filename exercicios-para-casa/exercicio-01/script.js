//1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

//2. ETAPA2: Remova o primeiro item desta array;

//3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

//4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array;


const familiaAguilera = ['Taiana', 'Naiara', 'Bete', 'Africa', 'Farofa', 'Luna'];

familiaAguilera.shift();
familiaAguilera.sort();
familiaAguilera.includes("salada");
console.log(familiaAguilera);
