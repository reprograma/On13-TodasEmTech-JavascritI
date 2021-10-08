/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

*/

let funcionaries = [
    {
        nome: 'Marina',
        cargo: 'Gerente',
        idade: 29,
        salario: 10000,
        anosEmpresa: 1,
    },
    {
        nome: 'Wesley',
        cargo: 'atendente',
        idade: 24,
        salario: 8000,
        anosEmpresa: 3,
    },
    {
        nome: 'Lucas',
        cargo: 'Pizzaiolo',
        idade: 28,
        salario: 11000,
        anoEmpresa: 2,
    },
    {
        nome: 'Kelwen',
        cargo: 'Auxiliar-pizzaiolo',
        idade: 26,
        salario: 8000,
        anosEmpresa: 1,
    },
    {
        nome: 'Edson',
        cargo: 'Auxiliar',
        idade: 32,
        salario: 6000,
        anosEmpresa: 2,
    }
];

console.log(funcionaries[1].nome)