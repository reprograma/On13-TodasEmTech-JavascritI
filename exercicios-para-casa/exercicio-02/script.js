// considere a lista com objetos:
const pessoas = [{
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




//1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;
console.log(pessoas[0])
console.log(pessoas[1])
console.log(pessoas[2])
console.log(pessoas[3])

//2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada";
const pessoasQueVivemNoBrasil = pessoas.map(function(item, indice) {
    return {
        nome: item.nome,
        profissao: item.profissao
    }

});

//3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend; * /

const desenvolvedorasFrontend = pessoas.map(function(item, indice) {
    return item.nome;

});