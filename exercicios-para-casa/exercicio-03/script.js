
// 1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;

const funcionaries = [
    { 
    nome: "Anna Maria",
    cargo: "Advogada",
    idade: 21,
    salario: 3500,
    anosEmpresa: 2 
    },

    { 
    nome: "Luíza",
    cargo: "Diretora Administrativa",
    idade: 40,
    salario: 6000,
    anosEmpresa: 7  
    },

    { 
    nome: "Roberto",
    cargo: "UI Designer",
    idade: 30,
    salario: 7000,
    anosEmpresa: 6  
    },

    { 
    nome: "Ahlan",
    cargo: "Desenvolvedor BackEnd",
    idade: 28,
    salario: 7500,
    anosEmpresa: 2  
    },

    { 
    nome: "Luna",
    cargo: "Desenvolvedora FrontEnd",
    idade: 27,
    salario: 7500,
    anosEmpresa: 3  
    },
]

// 2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

const testeAumentoSalario = funcionaries.map(function(pessoa){
    if (pessoa.anosEmpresa >=3){
        pessoa.salario = parseFloat(pessoa.salario * 1.10).toFixed(2)
    } else {
        pessoa.salario = parseFloat(pessoa.salario * 1.05).toFixed(2)
    }
    return pessoa
    })

// 3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

const funcionariesSenior = funcionaries.filter(function(pessoa){
    return pessoa.idade > 40
})

// 4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

let mediaIdade= somaIdades = 0
funcionaries.forEach(function(pessoa){
    somaIdades += pessoa.idade
})

console.log(mediaIdade)
