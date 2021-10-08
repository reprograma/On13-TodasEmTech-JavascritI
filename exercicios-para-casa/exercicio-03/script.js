/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

*/

const pessoas = [
    {
        nome: 'Joana',
        cargo: 'recepcionista',
       idade: 22,
       salario: 1500,
       anosDeEmpresa: 2,
    },
    {
        nome: 'Joice',
        cargo: 'SDR',
       idade: 45,
       salario: 2500,
       anosDeEmpresa: 3,
    },
    {
        nome: 'Karen',
        cargo: 'CEO',
       idade: 28,
       salario: 4500,
       anosDeEmpresa: 4,
    },
    {
        nome: 'Ivana',
        cargo: 'UX',
       idade: 24,
       salario: 4500,
       anosDeEmpresa: 2,
    },

    {
        nome: 'Ivana',
        cargo: 'UX',
       idade: 24,
       salario: 4500,
       anosDeEmpresa: 3,
    },
    {
        nome: 'Fernanda',
        cargo: 'Front',
       idade: 23,
       salario: 5500,
       anosDeEmpresa: 01,
    },
];
//2
let reajuste = pessoas.map(filtrarSalario);

function filtrarSalario(pessoa){
    if(pessoa.anosDeEmpresa >= 3    ){
        return (pessoa.salario += pessoa.salario * 0.1);
    }else{
        return (pessoa.salario += pessoa.salario * 0.05);
    }
};

console.log(`O reajuste de acordo com o tempo na empresa será ${reajuste}`);


//3
function filtroIdade(pessoa){
    if(pessoa.idade > 40){
        return pessoa.nome;
    }
    return pessoa.idade >40;
}

let funcionariasMaiorDe40 = funcionarias
    .filter(filtroIdade)
    .map(filtroIdade);

console.log(`As funcionarias com mais de 40 anos são:`, funcionariasMaiorDe40);


//4

function filtroAnos(pessoa){
    return pessoa.idade;
};

function somarIdades(total,numero){
    return total+numero
}

let idadeFuncionarias = funcionarias.map(filtroAnos);

let idadeMedia = idadeFuncionarias.reduce(somarIdades);
idadeMedia = idadeMedia/idadeFuncionarias.length;
console.log(idadeMedia);

