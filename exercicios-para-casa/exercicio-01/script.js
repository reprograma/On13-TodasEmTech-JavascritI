/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;*/
let itens = ["pão", "manteiga", "leite", "farinha", "ovo"];
//console.log("tamanho da array: ", itens.length)
//2. ETAPA2: Remova o primeiro item desta array;
    let primeiroElemento = itens.shift();
    //console.log(itens)
//3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);
    itens.sort()
    //console.log(itens)
//4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 
    itens.includes("salada");
   console.log(itens.includes("salada"))

