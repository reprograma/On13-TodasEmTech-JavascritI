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

//1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;

//console.log(pessoas)
pessoas.forEach(function(pessoas){
    console.log(pessoas.nome)
    console.log(pessoas.profissao)
    console.log(pessoas.pais)
})
//2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: "infelizmente não mora na área pesquisada"; 

const br = pessoas.map(function(pessoa){
    if(pessoa.pais == "Brasil"){
        return {nome: pessoa.nome, profissao: pessoa.profissao}
    }else{
        return {nome: pessoa.nome, mensagem: "infelizmente não mora na área pesquisada"}
    }
    
})
console.log(br)
//3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;

/*const dev = pessoas.map(function(pessoa){
    if(pessoa.profissao == "desenvolvedora frontend"){
        return {pais: pessoa.pais}
    }
    return ""
})
console.log(dev)*/

const dev = pessoas.filter(function(pessoa){
    return pessoa.profissao == "desenvolvedora frontend"
}).map(function(pessoa){
    return pessoa.pais
})
console.log(dev)