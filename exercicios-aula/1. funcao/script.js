// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.

function sub(param1, param2){

    return param1-param2;
}



console.log(sub(1,2));

// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.  

function multiplo(num){
    if(num%5==0 && num%7==0){
        return `o numero ${num} é múltiplo de 5 e 7`;
    }else{
        return`o numero ${num} não é múltiplo de 5 e 7`;
    }
}

console.log(multiplo(6));

console.log(multiplo(35));



const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log (clothing[clothing.length -2]); // 4