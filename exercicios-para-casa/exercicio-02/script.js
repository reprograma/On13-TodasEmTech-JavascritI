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

console.log(pessoas);

for (let pessoas of pessoas) {
    console.log(item.pessoas);
}



const teste = pessoas.map(function(pessoa) {
    if (pessoa.pais == 'Brasil') {
        return { nome: pessoa.nome, profissao: pessoa.profissao }
    } else {
        return { nome: pessoa.nome, mensagem: 'Não reside nessa área pesquisada' }
    }
})

console.log(teste)
    /*
    1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;

    2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada"; 

    3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;
    */