/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

2. ETAPA2: Remova o primeiro item desta array;

3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

*/


const meusFilmeseSeriesFavoritos =[ 'Mulan','Casa comigo?,','Os delírios de consumo de Becky Bloom','Zoey e a sua Fantástica Playlist',' Greys Anatomy'];

meusFilmeseSeriesFavoritos.shift();
meusFilmeseSeriesFavoritos.sort();

console.log(meusFilmeseSeriesFavoritos.includes("salada"));
console.log(meusFilmeseSeriesFavoritos); 
console.log(meusFilmeseSeriesFavoritos);