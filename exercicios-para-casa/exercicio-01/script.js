/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens; Ok

2. ETAPA2: Remova o primeiro item desta array; Ok

3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente); Ok

4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

*/


const items = ["Brasil", "Espanha", "Portugal", "Austrália", "França", "Alemanha"];

items.shift();
items.sort();
console.log(items.includes("salada"));
console.log(items)

