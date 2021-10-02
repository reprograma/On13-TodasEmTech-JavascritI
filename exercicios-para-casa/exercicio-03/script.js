//1. ETAPA1: Crie uma lista que receba as informações: nome, cargo, idade, salário e anos de empresa de pelo menos 5 funcionáries de alguma empresa;
const revolutionIsNonMale = [{
        nome: 'Malala Yousafzai',
        cargo: 'CEO',
        idade: '28',
        salario: '6000',
        tempoDeEmpresa: 8,
    },

    {
        nome: 'Kathrine Switzer',
        cargo: 'CFO',
        idade: '32',
        salario: '4000',
        tempoDeEmpresa: 5,
    },

    {
        nome: 'Annie Lumpkins',
        cargo: 'CMO',
        idade: '26',
        salario: '5000',
        tempoDeEmpresa: 2,
    },

    {
        nome: 'Marina Ginesta',
        cargo: 'CIO',
        idade: '56',
        salario: '10000',
        tempoDeEmpresa: 20,
    },

    {
        nome: 'Jonathan Van Ness',
        cargo: 'CHRO',
        idade: '46',
        salario: '8000',
        tempoDeEmpresa: 2,
    },

];

//2. ETAPA2: Adicione um aumento de 10% ao salário de funcionáries que tiverem 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;

let aumento10 = revolutionIsNonMale.map(verAumento);

function verAumento(revolutionIsNonMale) {
    if (revolutionIsNonMale.tempoDeEmpresa >= 3) {
        revolutionIsNonMale.salario = revolutionIsNonMale.salario * 1.1
    }
}
console.log(revolutionIsNonMale);

//3. ETAPA3: Crie uma nova lista apenas com funcionáries que tenham mais do que 40 anos; 

let maior40 = revolutionIsNonMale.filter(verifIdade);

function verifIdade(revolutionIsNonMale) {
    if (revolutionIsNonMale.idade > 40) {
        console.log(revolutionIsNonMale)
    }
}

//4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa