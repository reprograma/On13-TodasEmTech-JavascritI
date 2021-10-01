//1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

const funcionaries = [
    {
        nome: 'Joana',
        cargo: 'dev',
        idade: 25,
        salario: 5000,
        anoEmpresa: 10,
    },
    {
        nome: 'Paula',
        cargo: 'estagiária',
        idade: 20,
        salario: 1000,
        anoEmpresa: 1,
    },
    {
        nome: 'Maria',
        cargo: 'marketing',
        idade: 27,
        salario: 3500,
        anoEmpresa: 4,
    },
    {
        nome: 'Ana',
        cargo: 'CEO',
        idade: 60,
        salario: 20000,
        anoEmpresa: 40,
    },
];
//2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

/*const sal = funcionaries.map(function(funcionarie){
    if(funcionarie.anoEmpresa >= 3){
        funcionarie.salario = parseFloat(funcionarie.salario * 1.10).toFixed(2)
    }else{
        funcionarie.salario = parseFloat(funcionarie.salario * 1,05).toFixed(2)
    }
    return funcionarie
})
console.log(sal)*/
//3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

/*let lista = funcionaries.filter(function(funcionarie){
    return funcionarie.idade > 24
})
console.log(lista)*/
//4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa;

let somaIdades = 0
funcionaries.forEach(function(funcionarie){
    somaIdades += funcionarie.idade
})
let media= parseFloat(somaIdades/4)
console.log(media)