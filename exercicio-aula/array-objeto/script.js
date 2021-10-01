// 1. crie uma array com objetos, cada objeto com pelo menos 4 propriedades

let alunos = [
    {
        nome: "Maria",
        idade: 10,
        temIngresso: true,
        temCarteirinha: true,
    },
    {
        nome: "Pedro",
        idade: 25,
        temIngresso: true,
        temCarteirinha: false,
    },
    {
        nome: "Antonio",
        idade: 18,
        temIngresso: false,
        temCarteirinha: true,
    },
    {
        nome: "Luisa",
        idade: 15,
        temIngresso: false,
        temCarteirinha: false,
    },
    {
        nome: "Julia",
        idade: 12,
        temIngresso: false,
        temCarteirinha: true,
    },

];

// 2. use métodos para acessar valores das propriedades desses objetos, e encontrar objetos pelo indice da lista.

alunos[2].idade
console.log(alunos[2].idade);

console.log(alunos.length);