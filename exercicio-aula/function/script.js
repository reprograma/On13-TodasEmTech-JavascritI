// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.

function subtracao(num1, numb2){
    return num1 - numb2
}

console.log(subtracao(5,3))

// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.

function multiplo(num){
    if (num % 5 == 0 && num % 7 == 0){
        console.log(`${num} é múltiplo de 5 e 7`)
    }

    else {
        console.log(`${num} não é múltiplo de 5 e nem de 7`)
    }
}

multiplo(25)
multiplo(49)
