//1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

const funcionarios = [
    {
        nome: "Dardânia",
        cargo: "Professora",
        idade: 27,
        salario: 2000,
        anosEmpresa: 1
    },
    {
        nome: "Allan",
        cargo: "QA",
        idade: 40,
        salario: 12000,
        anosEmpresa: 2
    }
]
//. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;
const exercicio = funcionarios.map(function(pessoa){
if (pessoa.anosEmpresa >=3){
    pessoa.salario = parseFloat(pessoa.salario * 1.10).toFixed(2)
} else {
    pessoa.salario = parseFloat(pessoa.salario * 1.05).toFixed(2)
}
return pessoa
})

//3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 
const exercicio = funcionarios.filter(function(pessoa){
    return pessoa.idade > 40
})

//4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

let exercicio = somaIdades = 0
funcionarios.forEach(function(pessoa){
    somaIdades += pessoa.idade
})
//console.log(exercicio)