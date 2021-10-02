 
//1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;
const funcionaries = [
    {
        nome: 'Larissa',
        cargo: 'operador de caixa',
        idade: 25,
        salario: 1.255,
        anosDeEmpresa: 5,
    },
    {
        nome: 'Roberta',
        cargo: 'Assistente mercearia',
        idade: 30,
        salario: 1.402,
        anosDeEmpresa: 8,
    },
    {
        nome: 'Marilia',
        cargo: 'Jovem aprendiz',
        idade: 18,
        salario: 1.234,
        anosDeEmpresa: 1,
    },
    {
        nome: 'Joice',
        cargo: 'Padaria',
        idade: 28,
        salario: 1.101,
        anosDeEmpresa: 2,
    },
    {
        nome: 'Nathalia',
        cargo: 'Gerente',
        idade: 40,
        salario: 8.105,
        anosDeEmpresa: 10,
    },
];
//2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;
const aumentoSalario = funcionaries.map(filtrarSalario)

function filtrarSalario(funcionaries){
    if(funcionaries.anosDeEmpresa >= 3){
        console.log(funcionaries.salario * 10 / 100);
    
    } else{
        console.log(funcionaries.salario * 5 / 100)
    }
}
//3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 
let funcionaries40Anos = funcionaries.slice(4)
console.log(funcionaries);
console.log(funcionaries40Anos);
//4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa
const idades = ['25', '30', '18', '28', '40'];
let soma = 25 + 30 + 18 + 28+ 40;
let mult = (soma) / 5;
console.log(mult);
//juro que tentei muito