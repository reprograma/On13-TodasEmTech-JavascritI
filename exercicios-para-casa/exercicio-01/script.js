/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;
2. ETAPA2: Remova o primeiro item desta array;
3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);
4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 
*/

// 1
let petsNatalia = [
  "Coronga",
  "Flor",
  "Ofelia",
  "Cartola",
  "Caramelo",
  "Magrinis",
  "Dieni",
  "Cleo",
];

// 2
let removerPrimeiroPet = petsNatalia.shift();

//3
let ordenarPets = petsNatalia.sort();

// 4
let encontrarSalada = petsNatalia.includes("salada");
if (encontrarSalada == false) {
  console.log("O item Salada não existe no Array.");
} else {
  console.log("O item Salada existe no Array.");
}