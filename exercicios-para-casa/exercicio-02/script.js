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


// 1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;

console.log(pessoas);

// 2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada"; 

let ondeVivem = pessoas.map(filtrarPais);

function filtrarPais(pessoas){
    if (pessoas.pais === "Brasil"){
        console.log("Nome: " + pessoas.nome + ", " + "Profissão: " + pessoas.profissao);
    }else {
        console.log("Não mora na área pesquisada");
    }
};

// 3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;

function ehFrontend(pessoas){
    if (pessoas.profissao === "desenvolvedora frontend"){
        console.log("Esta pessoa é " + pessoas.profissao + " e mora em " + pessoas.pais);
    }else {
        console.log("Nada");
    }
};

ehFrontend(pessoas);