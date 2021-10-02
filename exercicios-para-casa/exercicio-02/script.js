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


/* ETAPA 1 */

//usando for
for (let i = 0; i< pessoas.length; i++){
    console.log(pessoas[i].nome)
    console.log(pessoas[i].profissao)
    console.log(pessoas[i].pais)
}

//usando forEach
pessoas.forEach(function(pessoa){
    console.log(pessoa.nome)
    console.log(pessoa.profissao)
    console.log(pessoa.pais)
})

/* ETAPA 2 */

pessoas.forEach(function(pessoa){

    if(pessoa.pais == "Brasil"){
        console.log(Array.of(pessoa.nome,pessoa.profissao))
    }
    else{
        console.log(`${pessoa.nome} infelizmente não mora na área pesquisada`)
    }
})

/* ETAPA 3 */

const desenvolvedoresFront = pessoas.filter((pessoa) =>{
    return pessoa.profissao =='desenvolvedora frontend'
})
const paisDev = desenvolvedoresFront.map((pessoa) =>{
    return pessoa.pais
})

console.log(paisDev) ;