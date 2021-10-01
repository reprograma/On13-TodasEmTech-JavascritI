// 1 - Faça uma função que receba 2 parâmetros, e que realizea subtração delete.

function sub(numero1, numero2) {
    return numero1 - numero2;
}

let subtracao = sub(18,8);
console.log(subtracao);

// 2 - Descubra se um número é múltiplo de 5 e de 7 ao mesmo tempo. Use uma função.



function multiplo(num) {
    if (num % 5 == 0 && num % 7 == 0) {
        return `o ${num} é múltiplo de 5 e 7`;
    } else {
        return `o ${num} não é múltiplo de 5 e 7`;
    }
}

let mult = multiplo(70);
console.log(mult);