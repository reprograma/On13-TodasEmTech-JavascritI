/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;
ok
2. ETAPA2: Remova o primeiro item desta array;
ok
3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);
ok
4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 
ok
*/
var Mareduds = ['42', '31', '24', '13', '12', '04', '02'];
console.log(Mareduds);
var primeiro = Mareduds.shift();
console.log(Mareduds);
Mareduds.sort();
console.log(Mareduds);
console.log(Mareduds.includes('salada'));
