/* 
1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;
2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;
3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 
4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa
*/

// 1
const funcionarios = [
    {
        nome: 'Natália',
        cargo: 'Desenvolvedora Front-End',
        idade: 28,
        salario: 3200,
        anosDeEmpresa: 3,
    },
    {
        nome: 'Marcelo',
        cargo: 'Desenvolvedor Java',
        idade: 41,
        salario: 5800,
        anosDeEmpresa: 6,
    },
    {
        nome: 'Joana',
        cargo: 'UX Designer',
        idade: 24,
        salario: 2600,
        anosDeEmpresa: 1,
    },
    {
        nome: 'Paula',
        cargo: 'Analista de BI',
        idade: 42,
        salario: 12500,
        anosDeEmpresa: 12,
    },
    {
        nome: 'Jorge',
        cargo: 'Desenvolvedor Back-End',
        idade: 31,
        salario: 4000,
        anosDeEmpresa: 4,
    }
];

// 2
let reajusteSalarial = funcionarios.map(filtrarSalario);

function filtrarSalario(pessoa) {
  if (pessoa.anosDeEmpresa >= 3) {
    return (pessoa.salario += pessoa.salario * 0.1);
  } else {
    return (pessoa.salario += pessoa.salario * 0.05);
  }
};
console.log(`O reajuste salarial conforme o tempo de casa será: ${reajusteSalarial}`);

// 3
function filtrarIdade (pessoa) {
    if (pessoa.idade > 40) {
        return pessoa.nome;
    }
    return pessoa.idade > 40;
}
let funcionariosMais40 = funcionarios
    .filter(filtrarIdade)
    .map(filtrarIdade);

console.log('Os funcionários com mais de 40 anos são:', funcionariosMais40);

// 4
function filtrarAnos(pessoa) {
  return pessoa.idade;
};

function somarIdades(total, numero) {
    return total + numero
}

let idadesFuncionarios = funcionarios.map(filtrarAnos);

let idadeMedia = idadesFuncionarios.reduce(somarIdades);
idadeMedia = idadeMedia/idadesFuncionarios.length;
console.log(idadeMedia);

// Podemos colocar as funções diretamente dentro dos métodos e utilizar arrow function para limpar o código
// Fiz primeiro separado para facilitar a visualização pois: primeiro contato kkkk
let arrayIdadesFuncionarios = funcionarios.map((pessoa) => {
    return pessoa.idade
});

let calculoIdadeMedia = arrayIdadesFuncionarios.reduce((total, numero) => {
    return total + numero
});
calculoIdadeMedia = calculoIdadeMedia/arrayIdadesFuncionarios.length;
console.log(calculoIdadeMedia);