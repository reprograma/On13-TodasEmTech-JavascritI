/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

2. ETAPA2: Remova o primeiro item desta array;

3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

*/


//Criando uma variável
const series = ['Greys Anatomy', 'Friends', 'Lúcifer', 'Dark', 'Lupin', 'Suits'];
console.log(series);

//Removendo primeiro item
series.shift();
console.log(series);

//Ordenando a lista em ordem alfabética
series.sort();
console.log(series);

//Vendo se existe algum item com nome salada dentro da array
console.log(series.includes("Salada"));