// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.


// function subtracao (num1, num2){
//     return num1 - num2;
// }

// console.log(subtracao(10,5));


// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.  

function multiplo (num){

    if (num % 5 == 0 && num % 7 ==0){
        return (`O numero ${num} é multiplo de 5 e 7`)
    }
    else {
        return(`O numero ${num} não é multiplo de 5 e 7`)
    }
}

console.log(multiplo(35))
console.log(multiplo(20))