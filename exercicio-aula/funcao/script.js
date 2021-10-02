// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.
function subtracao(num1, num2){
return num1-num2;
}
subtracao(2, 4)
console.log(subtracao(2, 4))

// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.  
function multiplo (num){
    if (num % 5==0 && num % 7 ==0 ){
        return console.log(`o número ${num} é múltiplo de 5 e 7.` )
    } else{
        console.log(`o número ${num} não é  múltiplo de 5 e 7.` )
    }
}
multiplo(3)