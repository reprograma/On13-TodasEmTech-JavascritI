// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.

//declaração da função
function subtracao(num1, num2) {
    //ação ou desenvolvimento da função
    return num1 - num2
}
//chamada da função
let subtracao1 = subtracao(10, 8);
let subtracao2 = subtracao(50, 25);
console.log(subtracao1, subtracao2);

// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.  

function multiplo(num) {
    if(num %5 == 0 && num %7 == 0) {
        return `${num} é múltiplo de 5 e 7`;
    } else {
        return `${num} não é múltiplo de 5 e 7`
    }
}
console.log(multiplo(30));