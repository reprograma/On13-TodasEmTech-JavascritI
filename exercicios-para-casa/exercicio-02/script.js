// considere a lista com objetos:
const pessoas = [
    {
        nome: 'Joana',
        profissao: 'atriz',
        pais: 'Canadá',
    },
    {
        nome: 'Emma',
        profissao: 'desenvolvedora frontend',
        pais: 'EUA',
    },
    {
        nome: 'Julia',
        profissao: 'economista',
        pais: 'Brasil',
    },
    {
        nome: 'Claudia',
        profissao: 'desenvolvedora frontend',
        pais: 'Brasil',
    },
];


/*
1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;

2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada"; 

3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;
*/


console.log(pessoas);
const pessoasPais= pessoas.filter(function (elemento) {
    if (elemento.pais === 'Brasil') {
        return console.log(elemento.nome, elemento.profissao);
    } else {
        (elemento.pais !== 'Brasil')
        return console.log(`${elemento.nome} 'infelizmente não mora na área pesquisada' `)
    }
});

const pessoasProfissao = pessoas.filter(function (elemento) {
    if (elemento.profissao === 'desenvolvedora frontend') {
        return console.log(elemento.pais);
    }
});