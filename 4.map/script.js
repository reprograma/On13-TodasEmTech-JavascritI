/Map - retorna os elementos numa lista 
//Paramentros do map function (elemento, indice, lista)
let minhaListaDeCompras = ["maça", "abacate", "pitaia", "tamarindo", "banana", "caja", "butiá"] 

const minhaLista2 = minhaListaDeCompras.map(function (elemento, indice, lista){
    console.log(`o elemento ${elemento} no indice ${indice} esta na lista ${lista}`)
})

//Outr opção de map


const sobrinhosDaVivian = [
    
    {
        nome: 'beyonce',
        idade:1,
        cor: ['amarelo', 'branco'],
        caracteristica: ['chata', 'birrenta'],

    },
    
    {
        nome: 'iza',
        idede: 1,
        cor: ['vermmelha', 'preta'],
        caracteristica: ['doida', 'sem noção'],
    }

];

 const sobrinhosNome = sobrinhosDaVivian.map(function(sobrinho){
    return console.log(sobrinho.nome);
})
