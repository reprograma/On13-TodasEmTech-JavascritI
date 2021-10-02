const sobrinhosDaVivian = [
    {
        nome: 'Beyoncé',
        idade: 1,
        castrado: true,
        cor: ['amarelo', 'branco', 'marrom', 'dourado'],
        caracteristica: ['brincalhão', 'dengoso'],
    },
    {
        nome: 'Iza',
        idade: 1,
        castrado: true,
        cor: ['branco', 'preto'],
        caracteristica: ['fofinha', 'sociável'],
    }
];


console.log(sobrinhosDaVivian[0]);
console.log(sobrinhosDaVivian[0].cor[1]);


//1. crie uma array com objetos, cada objeto com pelo menos 4 propriedades


const cars = [
{
    model: 'porsche',
    year: 2019,
    color: ['blue', 'white'],
    sistem: 'electric',
},

{
    model: 'range',
    year: 2020,
    color:['black', 'red'],
    sistem: 'electric',
},

{
    model: 'gol',
    year: 2014,
    color:['black', 'grey'],
    sistem: 'electric',
}
];
// 2. use métodos para acessar valores das propriedades desses objetos, e encontrar objetos pelo indice da lista.

console.log(cars[1].model);
console.log(cars[0].color);
console.log(cars.length);