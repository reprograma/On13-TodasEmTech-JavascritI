// 1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

const objetos = ["planner", "carregador", "post-it", "mouse", "celular", "fone de ouvido"];
console.log("A array contém: ", objetos.length, "objetos." );

// 2. ETAPA2: Remova o primeiro item desta array;

objetos.shift();
console.log(objetos);

// 3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

objetos.sort();
console.log(objetos);

// 4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

console.log(objetos.includes("salada")); 