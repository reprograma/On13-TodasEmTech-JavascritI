/*
function comprarLeite(dinheiro, leite) {
    .... 
    return leite
}

comprarLeite(10, "chocolate")
comprarLeite(5, "amendoim")


funcao comprarLeite
dinheiro, leite - parametro da funcao
{ sair de casa, caminhar ate a venda, falar o vendedor, se eu tiver dinheiro pra 3 caixas, traz 2 e compra o resto em bala, fazer a troca do dinheiro pelo leite, voltar pra casa
return leite } 


console.log("printa isso daqui")
alert("bom dia")
prompt()
*/

function parImpar(num){
    if(num % 2 == 0){
       return `${num} é um número par`;
   }else {
       return `${num} é um numero ímpar`
   }
}
// console.log(parImpar("batata"))

// let numeroAleatorio = parImpar(7); 
// console.log(numeroAleatorio)

//declaracao da funcao
function soma(num1 = 0, num2 = 5) {
 //ação ou desinvolvimento da funcao
   return num1 + num2; // retorno
}
//chamada da funcao
let soma1 = soma(4);
let soma2 = soma(4,4); 
let soma3 = soma();
console.log(soma1, soma2, soma3);