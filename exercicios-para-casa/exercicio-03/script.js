/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

*/

const funcionaries = [
    {
        nome: 'Graziele',
        cargo: 'desenvolvedora front-end',
        idade: 26,
        salario: 4000,
        anosDeEmpresa: 1,
    },

    {
        nome: 'Maelie',
        cargo: 'desenvolvedora back-end',
        idade: 28,
        salario: 4000,
        anosDeEmpresa: 1,
    },

    {
        nome: 'Mohamed',
        cargo: 'CTO',
        idade: 28,
        salario: 7000,
        anosDeEmpresa: 3,
    },

    {
        nome: 'Lucineide',
        cargo: 'CEO',
        idade: 48,
        salario: 12000,
        anosDeEmpresa: 5,
    },

    {
        nome: 'Edmilson',
        cargo: 'CFO',
        idade: 58,
        salario: 10000,
        anosDeEmpresa: 2,
    },
];


const novoSalario = funcionaries.map(function (elemento) {
    if (elemento.anosDeEmpresa >= 3) {
        return console.log(elemento.salario * 1.1);
    } else {
        return console.log(elemento.salario * 1.05);
    }
});

const maisDeQuarenta = funcionaries.filter ((elemento) => elemento.idade > 40);
    console.log(maisDeQuarenta);
