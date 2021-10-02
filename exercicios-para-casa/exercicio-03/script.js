/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;*/

const funcionaries = [
    {
        nome: 'Celina Marinho',
        cargo: 'analista de hospitalidade',
        idade: 36,
        salario: 4.200,
        anosEmpresa: 5
    },

    {
        nome: 'Ana Paula',
        cargo: 'coordenadora pedagógica',
        idade: 36,
        salario: 4.700,
        anosEmpresa: 9
    },

    {
        nome: 'Kátia Emericiano',
        cargo: 'gerente geral',
        idade: 45,
        salario: 6.800,
        anosEmpresa: 9
    },

    {
        nome: 'Vitor Sampaio',
        cargo: 'coordenador de operações',
        idade: 37,
        salario: 4.000,
        anosEmpresa: 3
    },

    {
        nome: 'Mercia Araújo',
        cargo: 'gerente de unidade',
        idade: 52,
        salario: 8.700,
        anosEmpresa: 25
    },

    {
        nome: 'Marcio Dornelas',
        cargo: 'vendedor',
        idade: 28,
        salario: 2.000,
        anosEmpresa: 2
    }
];

//2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

const aumentoSalario = funcionaries.map(function(pessoa){
    if (pessoa.anosEmpresa >= 3) {
        pessoa.salario  = Number(pessoa.salario * 1.10).toFixed(4)
    } else{
        pessoa.salario  = Number(pessoa.salario * 1.05).toFixed(4)
        
    }
    return pessoa
}
)
console.log(aumentoSalario);

//3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

const verificacao3 = funcionaries.filter(function(pessoa){
    if (pessoa.idade > 40){
        return pessoa.nome
    }
})
console.log(verificacao3);


//4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa
let somaIdades = 0
funcionaries.forEach(function(pessoa){
    somaIdades += pessoa.idade
}
)
console.log(somaIdades);

let media = somaIdades/funcionaries.length
console.log(media);

