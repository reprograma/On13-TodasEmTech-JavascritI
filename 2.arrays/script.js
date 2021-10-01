let alunas = ["Taiana", "Marcela", "Valenthina", "Valentina", "Bruna Mara", "Celina"];

//console.log(alunas[ alunas.length - 1 ])

//console.log("tamanho da array: ", alunas.length )
//console.log(alunas[2]) // aluna na posição [2]
//console.log(alunas[alunas.length - 1]) // a posição da última aluna na lista []


// metodos de arrays - funções pré-prontas:

// push() - adiciona ao final 
// pop() - retira no final 
// shift() - retira do inicio
// unshift() - coloca no inicio
// includes() - ve se existe 
// sort() - ordena numerica ou alfabeticamente

/*
alunas.push("Quezia", "Aida"); 
console.log(alunas);
alunas.shift();
console.log(alunas);
alunas.unshift("Elis", "Ane Carolina");
console.log(alunas);
console.log(alunas.includes("Marcela"));
alunas.sort(); 
console.log(alunas);
console.log(alunas.length);
*/ 

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

//console.log(comidas[0].pastel.quantidade)


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