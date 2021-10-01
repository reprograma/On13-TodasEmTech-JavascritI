// considere a lista com objetos:

/*
1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;

2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada"; 

3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;
*/

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


console.log(pessoas)

const infos = pessoas.map((pessoa) => {
    if(pessoa.pais == 'Brasil'){
    return `${pessoa.nome}, ${pessoa.profissao}`;
    }else {
        return `${pessoa.nome} infelizmente não mora na área pesquisada`
    }
    
})

console.log(infos)

const pais = pessoas.map((pessoa) => {
    if(pessoa.profissao == 'desenvolvedora frontend'){
        return `${pessoa.nome} vive em ${pessoa.pais}`
    } 
})

console.log(pais)

