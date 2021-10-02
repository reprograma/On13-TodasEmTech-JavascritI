// considere a lista com objetos:
/*
1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;

2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada"; 

3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;
*/
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


console.log(pessoas); //flecha para baixo//

let novaLista = pessoas.map(paisResidencia);

function paisResidencia(pessoas) {
    if (pessoas.pais == 'Brasil') {
        console.log("Nome: " + pessoas.nome + "; Profissão: " + pessoas.profissao);
    } else {
        console.log(pessoas.nome + ": infelizmente não mora na área pesquisada")
    }
}
//ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;

let novalista = pessoas.map(veriProf);

function veriProf(pessoas) {
    if (pessoas.profissao == 'desenvolvedora frontend') {
        console.log(pessoas.pais)
    }
}