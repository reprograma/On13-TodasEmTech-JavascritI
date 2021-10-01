// funcao comprarLeite
// dinheiro, leite - parametro da funcao
// {sair de casa, caminhar ate a venda, falar com o vendedor, se eu tiver dinheiro para 3 caixas, traz 2 e compra o resto em bala, fazer a troca do dinheiro pelo leite, voltar para casa
// return leite}

// comprarLeite(10, chocolate);
// comprarLeite(5, "amendiom");



function parImpar(num) {
    if (num % 2 == 0) {
        return `o ${num} é um número par`;
    } else {
        return `o ${num} é um número ímpar`;
    }
}

// console.log(parImpar(18));

// let numeroAleatorio = parImpar(7)
// console.log(numeroAleatorio);


// declaracao da funcao

function soma(num1 = 0, num2 = 5) {
    // acao ou desenvolvimento da funcao

    return num1 + num2; /*retorno da funcao*/
}
// chamada da funcao
let soma1 = soma(4);
let soma2 = soma(4,4);
let soma3 = soma();
console.log(soma1, soma2, soma3);