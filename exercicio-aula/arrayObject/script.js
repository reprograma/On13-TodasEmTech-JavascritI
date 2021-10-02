// 1. crie uma array com objetos, cada objeto com pelo menos 4 propriedades

const moradores = [
    {
        nome: 'Ylana',
        ocupacao: ['estuda'],
        idade: 21,
        comidaPredileta: "Hamburguer"
    },
    {
        nome: 'Francisco',
        ocupacao: 'trabalha',
        idade: 25,
        comidaPredileta: "Frutos do Mar"
    },
    {
        nome: 'Forlan',
        ocupacao: 'come e dorme',
        idade: 2,
        comidaPredileta: "atum"
    },
    {
        nome: 'Jamez',
        ocupacao: 'come e dorme',
        idade: 0.6,
        comidaPredileta: "literalmente qualquer coisa"
    },
];

// 2. use métodos para acessar valores das propriedades desses objetos, e encontrar objetos pelo indice da lista.

console.log(moradores.length)
moradores[0].ocupacao.push("escrava da casa")
console.log(moradores)
console.log(moradores[0].nome.includes("Ylana"))
console.log(moradores[3].ocupacao)
console.log(moradores[1].idade)



// let familia =[
//     {
//         nome: 'Maria',
//         grauParentesco: 'mãe',
//         peso: 70,
//         altura: '150cm',
//     },

//     {
//         nome: 'Hadassa',
//         grauParentesco: 'filha',
//         peso: 32,
//         altura: '140',
//     },
//     {
//       nome: 'nicodemio',
//       grauParentesco: 'pai',
//       peso: 67,
//       altura: '175 cm',
//     }
//   ];
  
// // 2. use métodos para acessar valores das propriedades desses objetos, e encontrar objetos pelo indice da lista.
// console.log(familia[1].altura);
// console.log(familia[0].grauParentesco);
// console.log(familia.length);
// //console.log(familia[0],[1],[2].nome);

// for(let indice= 0; indice < familia.length; indice++){
//     console.log(familia[indice].nome);
// }