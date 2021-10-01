//## exercício 1

//1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

//2. ETAPA2: Remova o primeiro item desta array;

//3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

//4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array;



//Array com 6 itens.
let cidadeBairros = ["Alecrim", "Alvorada", "Santa Rita", "1º de MAio", "Ilha da Conceição", "Vila Batista"];
console.log(cidadeBairros[5]);

// Removendo o primeiro item.
 let eliminaItem = cidadeBairros.shift();
 console.log(eliminaItem);

//Ordenando em ordem alfábética.
let cidadeBairros = ["Alecrim", "Alvorada", "Santa Rita", "1º de MAio", "Ilha da Conceição", "Vila Batista"];
cidadeBairros.sort();
console.log(cidadeBairros);

//Verificando item salada.
cidadeBairros.includes('salada');