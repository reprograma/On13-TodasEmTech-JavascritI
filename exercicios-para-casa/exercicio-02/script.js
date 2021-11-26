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


/*console.log(pessoas);

let novaPesquisa = pessoas.map(filtrarPais);

function filtrarPais(pessoa) {
  if (pessoa.pais == "Brasil") {
    return (`Nome: ${pessoa.nome} | Profissão: ${pessoa.profissao}`)
  }
  else {
    return `Infelizmente não mora na área pesquisada`
  }
};

console.log(novaPesquisa);


let novaPesquisa = [];
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].pais == "Brasil") {
    novaPesquisa.push(`Nome: ${pessoas[i].nome} | Profissão: ${pessoas[i].profissao}`);
  } else {
    novaPesquisa.push(`Infelizmente não mora na área pesquisada`)
  }
};
console.log(novaPesquisa);


function filtrarProfissao(pessoa) {
  if (pessoa.profissao == "desenvolvedora frontend") {
    return pessoa.pais
  }
  return pessoa.profissao == "desenvolvedora frontend"
}

let devsFrontend = pessoas
  .filter(filtrarProfissao)
  .map(filtrarProfissao);

console.log('Países onde moram as pessoas que trabalham como desenvolvedoras frontend:', devsFrontend);



let devsFrontend = [];
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].profissao == "desenvolvedora frontend") {
    devsFrontend.push(pessoas[i].pais);
  }
};
console.log('Países onde moram as pessoas que trabalham como desenvolvedoras frontend: ', devsFrontend); */

console.log(pessoas);

for (let exemplo of pessoas){
    console.log(exemplo.nome);
} 