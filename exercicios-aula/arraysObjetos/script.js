// 1. crie uma array com objetos, cada objeto com pelo menos 4 propriedades

let comidas = ['Moqueca', 'Pastel', 'Salada', 'Torta'];

const Moqueca = {
    nome: 'moqueca de camarão',
    quantidade: '500g',
    categoria: 'Baiana',
    caracteristica: ['com dendê', 'com camarão', 'não contem leite'],
    preco: 95,
}

const Pastel = {
    nome: 'pastel de costelinha com barbecue',
    quantidade: '200g',
    categoria: 'Petisco',
    caracteristica: ['com leite', 'com carne suína'],
    preco: 20,
}

const Salada = {
    nome: 'salada com molho pesto',
    quantidade: ['200g'],
    categoria: 'Fitness',
    caracteristica: ['sem leite', 'com frango'],
    preco: 35,
}

const Torta = {
    nome: 'torta romeu e julieta',
    quantidade: '350g',
    categoria: 'Sobremesa',
    caracteristica: ['com leite', 'contem gordura vegetal'],
    preco: 25,
}


//2. use metodos para acessar valores das propriedades desses objetos e encontrar objetos pelo indice da lista

console.log(Torta.nome);
console.log(comidas.length);
console.log(comidas[comidas.length - 2]);

Salada.quantidade.push('500g');
console.log(Salada);

/*
const comidas = [
    {
        moqueca: {
            quantidade: 0,
            caracteristica: 0,
        },
        pastel: {
            quantidade: 0,
            caracteristica: 0,
        }, 
        salada: {
            quantidade: 0,
            caracteristica: ["gostoso", "saúdavel"],
        },

    }
]

console.log(comidas[0].pastel.quantidade)


for(let indice= 0; indice < familia.length; indice++){
    console.log(familia[indice].nome);
}

*/