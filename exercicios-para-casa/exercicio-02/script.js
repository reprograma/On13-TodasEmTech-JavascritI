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

for(let indice= 0; indice < pessoas.length; indice++){
    console.log(pessoas[indice].nome);
    console.log(pessoas[indice].profissao);
    console.log(pessoas[indice].pais);

} 

/*
let indice=0;
do {
  
  console.log(pessoas[indice].nome);
  console.log(pessoas[indice].profissao);
  indice++;
}
while (pessoas[indice].pais  == 'Brasil');

*/



let pessoas2 = (pessoas.slice(2));
console.log(pessoas2);

for(let indice= 0; indice < pessoas2.length; indice++){
    console.log(pessoas2[indice].nome);
    console.log(pessoas2[indice].profissao);
    
}





