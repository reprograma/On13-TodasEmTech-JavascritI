/*funcao comprarLeite
function comprarLeite(dineiro,leite){
    .....
    return leite
}
comprarLeite(10, chocolate);

comprarLeite(5, "amendoim");
    
//dinheiro = paramentro da funcao
{sair de CanvasGradient, caminhar, falar com o vendedor,se eu tiver dinheiro pra duas caixas, trazer duas, fazer a troca do dinheiro, voltar para casa
return leite}
10-dinheiro


comprarLeite(10, chocolate);

comprarLeite(5, "amendoim");
*/

function parImpar (num){
    if( num % 2 == 0){
        return `0 ${num} esse número é par`; "o" + num + "é um numero par"
    }else {
        return ` o ${num} esse número é impar`;
    }
}

/*console.log(parImpar(4))

let numeroAleatorio = partImpar (7);

let numeroAleatorio = parImpar(7);
console.log(numeroAleatorio)*/

//declaração da função
function soma (num1 = 0, num2 = 5) {
    //ação ou desenvolvimento da função
    return num1 + num2;//retono
}
//chamada da função
let soma1 = soma(4);
let soma2 = soma(4,4);
let soma3 = soma ();
console.log(soma1, soma2, soma3);