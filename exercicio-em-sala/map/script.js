let minhaListaDeCompras = ["maçã", "abacate", "pitaia", "tamarindo", "banana", "cajá", "butiá", "melão"]

//parametros do map function (elemento, indice, lista)
const minhaLista2 = minhaListaDeCompras.map(function (elemento, indice, lista){
    return console.log(`o elemento ${elemento} no indice ${indice} esta na lista ${lista}`)
})
