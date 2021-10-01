/* 
    callback ou "chamar de volta" 
    é uma função que chama a si mesma. 
    ou que retorna a si mesma. 
*/
//exemplo com fatoriais: 
// 5! == 5 * 4 * 3 * 2 * 1 = 120
// 4! == 4 * 3 * 2 * 1 = 24 

/*
function fatorial (numero) {
    let contador = 1; 
    for( let indice = numero; indice > 1; indice-- ){
       contador = contador * indice
    }
    return contador; 
}
*/
//console.log( fatorial(6) )

 function fatorial(numero){
    if(numero == 1){
        return numero
    } 
    return numero * fatorial(numero - 1)
}


console.log(fatorial(6))