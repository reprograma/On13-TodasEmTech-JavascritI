// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.


function subtracao (num1, num2) {
    return num1- num2;
}

let sub = subtracao(80, 40);
console.log(sub)


// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.


function multiplos (num) {
    let mult1 = 5
    let mult2 = 7
    if(num % mult1 == 0 && num % mult2 == 0) {
        return console.log(`${num} é múltiplo de ${mult1} e de ${mult2}`)
    } else {
        return console.log(`${num} não é múltiplo de ${mult1} e de ${mult2}`)
    }
}

console.log(multiplos(35))