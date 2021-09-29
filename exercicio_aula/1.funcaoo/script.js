// 1. façam uma função, que receba dois parametros, e que realize a subtração deles.


function menos(num1 = 0, num2 = 0) {
    //ação ou desenvolvimento da funcao
      return num1 - num2; // retorno
  }
  //chamada da funcao
  let menos1 = menos(4);
  let menos2 = menos(2, 2); 
  let menos3 = menos( );

  console.log(menos1, menos2, menos3);

  /* 
  Poderia ser tbm assim:
  function subtração(num1 = 0, num2 = 0) {
      return num1 - num2;

      console.log(subtração(10,5));
*/


// 2. descubra se um número é multiplo de 5 E de 7 ao mesmo tempo. Use uma função.

function multiplo (num) {
    if (num % 5 == 0, num % 7 ==0) {
        return `${num} é multiplo de 5 e 7 `;
    } else{
        return `${num} não é multiplo de 5 e 7`;
    }
}

let multiplo1 = multiplo(35);
console.log (multiplo1)

let multiplo2 = multiplo(71);
console.log (multiplo2);
