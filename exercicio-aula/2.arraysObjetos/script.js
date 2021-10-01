// 1. crie uma array com objetos, cada objeto com pelo menos 4 propriedades

const funcionario=[
  {
    nome: "Raquel",
    idade: 26,
    cargo: "Programadora",
    estado: "RJ",
  },
  {
    nome: "Ana",
    idade: 29,
    cargo: "Gerente",
    estado: "RJ",
  }
];
// 2. use métodos para acessar valores das propriedades desses objetos, e encontrar objetos pelo indice da lista.

console.log(funcionario[1].nome);
funcionario.push({nome: "Tânia", idade: 60, cargo: "Mãe" , estado: "RJ"});
console.log(funcionario);

funcionario.pop();
console.log(funcionario);


funcionario.shift();
console.log(funcionario);

funcionario.unshift({nome: "Débora", idade: 28, cargo: "técnico" , estado: "RJ"})
console.log(funcionario);
