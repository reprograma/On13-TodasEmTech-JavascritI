/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

*/

//ETAPA 1
const funcionarios1 = [
    {
        nome: 'Eduarda',
        cargor: 'Desenvolvedora frontend Sênior',
        idade: 26,
        salário: 10000,
        anosDeEmpresa: 4,
    },
    {
        nome: 'Mariane',
        cargor: 'UX Desing',
        idade: 24,
        salário: 5000,
        anosDeEmpresa: 3,
    },
    {
        nome: 'Ricardo',
        cargor: 'Desenvolvedor frontend Júnior',
        idade: 23,
        salário: 3000,
        anosDeEmpresa: 1,
    },
    {
        nome: 'Luiz',
        cargor: 'Desenvolvedor backend junior',
        idade: 24,
        salário: 2800,
        anosDeEmpresa: 1,
    },
    {
        nome: 'Júlia',
        cargor: 'Jovem aprendiz',
        idade: 18,
        salário: 1045,
        anosDeEmpresa: 1,
    },
]


// const devsFrontEnd = pessoas.filter(function (devs) {
//     //     return devs.profissao == 'desenvolvedora frontend'
//     // });
    
//     // const resultadoFinalDevsFrontEnd = devsFrontEnd.map(function(devs){ return devs.nome + ' - ' + devs.pais + ' - ' + devs.profissao});
    
//     // console.log(resultadoFinalDevsFrontEnd)


// ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;
// funcionários com 3 anos ou mais de empresa
const funcionarios3Anos = funcionarios1.filter(function (antigos) {
    return antigos.anosDeEmpresa >= 3
});

const aumento = funcionarios3Anos.map(function(antigos){ 
    return antigos.nome + ' - ' + antigos.salário + '-' + ' Salário reajustado: ' + (antigos.salário * 0.1 + antigos.salário)
});

console.log(aumento)

// funcionários com menos de 3 anos de empresa
const funcionariosMenosDe3Anos = funcionarios1.filter(function (novos) {
    return novos.anosDeEmpresa < 3
});

const aumento1 = funcionariosMenosDe3Anos.map(function(novos){ 
    return novos.nome + ' - ' + novos.salário + '-' + ' Salário reajustado: ' + (novos.salário * 0.05 + novos.salário)
});

console.log(aumento1)


// 3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 
const funcionarios2 = [
    {
        nome: 'Sandra',
        cargor: 'Coordenadora',
        idade: 46,
        salário: 9000,
        anosDeEmpresa: 6,
    },
    {
        nome: 'Geovane',
        cargor: 'UX Desing',
        idade: 45,
        salário: 7000,
        anosDeEmpresa: 3,
    },
    {
        nome: 'Gustavo',
        cargor: 'Desenvolvedor frontend Senior',
        idade: 42,
        salário: 12000,
        anosDeEmpresa: 1,
    },
    {
        nome: 'Maria',
        cargor: 'Consultora Senior',
        idade: 48,
        salário: 2800,
        anosDeEmpresa: 5,
    },
]

// 4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa
const mediaFuncionarios 
