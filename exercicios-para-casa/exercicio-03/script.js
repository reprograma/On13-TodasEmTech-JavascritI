/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

*/

const lista = [
  {
    nome: "Lilian",
    cargo: "professora",
    idade: 33,
    salario: 2000,
    tempo: 2,
  },
  {
    nome: "Lupin",
    cargo: "professor",
    idade: 35,
    salario: 2000,
    tempo: 3,
  },
  {
    nome: "Alvos",
    cargo: "diretor",
    idade: 75,
    salario: 8000,
    tempo: 15,
  },
  {
    nome: "Mrs Pomfrey",
    cargo: "enfermeira",
    idade: 40,
    salario: 5000,
    tempo: 10,
  },
  {
    nome: "Snape",
    cargo: "professor",
    idade: 35,
    salario: 2000,
    tempo: 10,
  },
];

const aumento = lista.map((item) => {
  if (item.tempo >= 3) {
    item.salario = (10 / 100) * item.salario + item.salario;
  } else if (item.tempo <= 2) {
    item.salario = (5 / 100) * item.salario + item.salario;
  }
  return item.salario;
});
console.log(aumento);

const maiorQueQuarenta = lista.filter((item) => item.idade >= 40);

console.log(maiorQueQuarenta);

const idade = lista.map((item) => {
  return item.idade;
});
const media = idade.reduce(function (acumulador, valorAtual) {
  let resultado = 0;
  return (resultado = +acumulador + valorAtual / idade.length);
}, []);

console.log(media);
