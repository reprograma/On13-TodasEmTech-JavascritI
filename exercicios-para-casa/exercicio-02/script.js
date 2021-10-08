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

2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, 
para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada"; 

3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;
*/

console.log(pessoas[0])
console.log(pessoas[1])
console.log(pessoas[2])

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

const exibe = pessoas.forEach((item) => {
    console.log(item .nome); 
    console.log(item .profissao);
  });
  
  const resultado = pessoas.map((item) => {
    if (item.pais === "Brasil") {
      return item .nome .profissao;
    } else {
      return item.nome + "Infelizmente não mora na área pesquisada";
    }
  });
  
  console.log(resultado);

  const devFront = pessoas.map((item) => {
    if (item.profissao == "desenvolvedora frontend") {
      return item.pais;
    } else {
      return false;
    }
  });
  
  console.log(devFront);