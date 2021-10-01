// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.

function subtracao (num1, num2){
    return num1 - num2;
}

console.log (subtracao (10, 5));


// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.  

function multiplo (numero){
    if (numero % 5 == 0 && numero % 7 == 0) {
        return console.log (`${numero} é multiplo de 5 e 7`);

    }else {
        console.log (`${numero} não é multiplo de 5 e 7`);
    }
}

multiplo (35);
multiplo (66);
multiplo (21);
multiplo (70);