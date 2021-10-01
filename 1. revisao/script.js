// funcao par ou impar

function parImpar(num) {
    if (num % 2 == 0) {
        return `o ${num} é número é par`;
    } else {
        return `o ${num} é número é impar`;

    }
}
console.log(parImpar(4))

let numeroAleatorio = parImpar(7);
console.log(numeroAleatorio)

//declaracao da funcao
function soma(num1 = 0, num2 = 5) {
    //ação ou desinvolvimento da funcao
    return num1 + num2; // retorno
}
//chamada da funcao
let soma1 = soma(4);
let soma2 = soma(4, 4);
let soma3 = soma();
console.log(soma1, soma2, soma3);