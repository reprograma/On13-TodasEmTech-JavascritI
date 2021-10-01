/* 

1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa; OK

2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%; OK

3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa

*/

//1

const funcionarios = [
    {
        nome: "Alberto",
        idade: 32,
        cargo: "atendente",
        salário: 2500,
        tempo: 3,
    },
    {
        nome: "Juliana",
        idade: 26,
        cargo: "recepcionista",
        salário: 1500,
        tempo: 2,
    },
    {
        nome: "Marisa",
        idade: 45,
        cargo: "gerente",
        salário: 3500,
        tempo: 6,
    },
    {
        nome: "Felipe",
        idade: 28,
        cargo: "designer",
        salário: 4000,
        tempo: 1,
    },
    {
        nome: "Renata",
        idade: 52,
        cargo: "diretora de marketing",
        salário: 4500,
        tempo: 5,
    }
]

// 2

const aumento = funcionarios.map((funcionario) => {

    const percent10 = funcionario.salário * 10 / 100
    const percent5 = funcionario.salário * 5 / 100

    if(funcionario.tempo >= 3){
        return funcionario.salário + percent10
    }else{
        return funcionario.salário + percent5
    }
})
// console.log(aumento)

//3

const maiorDe40 = funcionarios.filter((funcionario) => funcionario.idade >= 40);

// console.log(maisDe40)

//4

let idade = funcionarios.map((pessoa) => {
    return pessoa.idade;
})

let mediaIdade = idade.reduce((acumulador, valorAtual) => {
    let soma = 0
    return (soma = + acumulador + valorAtual / idade.length)

}, [])
console.log(mediaIdade)


