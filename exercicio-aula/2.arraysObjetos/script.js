// 1. crie uma array com objetos, cada objeto com pelo menos 4 propriedades

let alunos = [
    {
        nome: "Maria",
        idade: 18,
        temIngresso: true,
        temCarteirinha: true,
    },
    {
        nome: "João",
        idade: 17,
        temIngresso: true,
        temCarteirinha: false,
    },
    {
        nome: "Pedro",
        idade: 16,
        temIngresso: false,
        temCarteirinha: true,
    },
    {
        nome: "Joana",
        idade: 15,
        temIngresso: false,
        temCarteirinha: false,
    },
    {
        nome: "Rita",
        idade: 14,
        temIngresso: false,
        temCarteirinha: true,
    },

];

// 2. use métodos para acessar valores das propriedades desses objetos, e encontrar objetos pelo indice da lista.

alunos[2].idade
console.log(alunos[2].idade);

console.log(alunos.length);