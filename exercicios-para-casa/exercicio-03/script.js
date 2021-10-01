/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

*/


const funcionarios = [{
    nome: 'Ana',
    cargo: 'Diretora',
    idade: '40',
    salário: 2.100,
    tempoEmpresa: 7,
},
{
    nome: 'Paola',
    cargo: 'Auxiliar',
    idade: '27',
    salário: 1.100,
    tempoEmpresa: 4,
},
{
    nome: 'Marcos',
    cargo: 'Segurança',
    idade: '30',
    salário: 1.800,
    tempoEmpresa: 5,
},
{
    nome: 'Maria',
    cargo: 'Auxiliar de limpeza',
    idade: '336',
    salário: 1.200,
    tempoEmpresa: 2,
},
{
    nome: 'Fátima',
    cargo: 'Advogada',
    idade: '55',
    salário: 4.000,
    tempoEmpresa: 6,
}
]; 
 funcionarios.map (function(pessoa){
     if (pessoa.anosEmporesa >=3){
         pessoa.salario = parseFloat(pessoa.salario * 1.10)
     } else{
        pessoa.salario = parseFloat(pessoa.salario * 1.05)
     }
     return pessoa
 })