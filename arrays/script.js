let diasDaSemana = ["segunda", "terça", "quarta"];

//console.log(diasDaSemana[ diasDaSemana.length - 1 ])

//console.log("tamanho da array: ", diasDaSemana.length )
//console.log(diasDaSemana[2]) //diasDaSemana na posição [2]
//console.log(diasDaSemana[diasDaSemana.length - 1]) // a posição da última aluna na lista []


// metodos de arrays - funções pré-prontas
// push() - adiciona ao final 
// pop() - retira no final 
// shift() - retira do inicio
// unshift() - coloca no inicio
// includes() - ve se existe 
// sort() - ordena numerica ou alfabeticamente

/*
diasDaSemana.push("quarta", "quinta"); 
console.log(diasDaSemana);
diasDaSemana.shift();
console.log(diasDaSemana);
diasDaSemana.unshift("domingo");
console.log(diasDaSemana);
console.log(diasDaSemana.includes("abacate"));
diasDaSemana.sort(); 
console.log(diasDaSemana);
console.log(diasDaSemana.length);
*/ 

const lanche = [
    {
        torrada: {
            quantidade: 0,
            caracteristica: 0,
        },
        pastel: {
            quantidade: 0,
            caracteristica: 0,
        }, 
        cachorroQuente: {
            quantidade: 0,
            caracteristica: ["gostoso", "saúdavel"],
        },

    }
]

//console.log(lanche[0].pastel.quantidade)


let minhaListaDeCompras = ["maçã", "abacate", "pitaia", "tamarindo", "banana", "cajá", "butiá", "melão"]

// parametros do map function (elemento, indice, lista)
const minhaLista2 = minhaListaDeCompras.map( 
    function (elemento, indice, lista){
   return `o elemento ${elemento } no indice ${indice} esta na lista ${lista}`
    }   
)


//console.log(minhaLista2)

/*
for(let elemento of minhaListaDeCompras) {
    console.log(elemento)
}
for(let indice in minhaListaDeCompras){
    console.log(minhaListaDeCompras[indice]);
}
console.log(minhaListaDeCompras[0])
console.log(minhaListaDeCompras[1])
console.log(minhaListaDeCompras[2])
console.log(minhaListaDeCompras[3])
console.log(minhaListaDeCompras[4])
console.log(minhaListaDeCompras[5])
console.log(minhaListaDeCompras[6])
*/ 
/*
indice ++ 
indice += 1 
indice = indice + 1
*/

// PARA (inicialização  ; condição  ; incremento/decremento )
/*
for(let indice = 0; indice < minhaListaDeCompras.length; indice ++) {
    console.log(minhaListaDeCompras[indice])
}
let i = 0; 
while (i < minhaListaDeCompras.length) {
    console.log(minhaListaDeCompras[i])
    i += 1;
}
*/ 
