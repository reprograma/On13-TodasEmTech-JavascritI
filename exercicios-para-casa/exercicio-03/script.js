// 1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

let funcionarios = [
    {
        nome: "Carla",
        cargo: "Gerente",
        idade: 52,
        salário: 5.000,
        anosDeEmpresa: 4,
    },
    {
        nome: "Ruth",
        cargo: "Sub-gerente",
        idade: 50,
        salário: 4.500,
        anosDeEmpresa: 4.5,
    },
    {
        nome: "Bruna",
        cargo: "Operadora",
        idade: 34,
        salário: 4.000,
        anosDeEmpresa: 4,
    },
    {
        nome: "Julia",
        cargo: "Operadora 2",
        idade: 40,
        salário: 3.800,
        anosDeEmpresa: 3,
    },
    {
        nome: "Silvia",
        cargo: "Recepcionista",
        idade: 32,
        salário: 2.000,
        anosDeEmpresa: 2,
    },
    {
        nome: "Maria",
        cargo: "Copeira",
        idade: 50,
        salário: 2.000,
        anosDeEmpresa: 3,
    },
    {
        nome: "Vivian",
        cargo: "Atendente",
        idade: 45,
        salário: 2.000,
        anosDeEmpresa: 2.5,
    },
];

// 2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;



// 3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

let maisDe40 = funcionarios.filter(function(idade){
    return idade >= 40;
})

console.log(maisDe40);

// 4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa;