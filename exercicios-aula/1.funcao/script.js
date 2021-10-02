// 1. Faça uma função que receba dois parâmetros, e que realize a subtração deles 

function subtracao(num1, num2){
  let result = (num1-num2)
  console.log(result)
}

subtracao(6, 3);
subtracao(8, 7);


//2. Descubra se um número é múltiplo de 5 e 7 ao mesmo tempo. use uma função .
function multiplo(num) {
  if(num %5 == 0 && num %7 == 0) {
       console.log(`${num} é múltiplo de 5 e 7.`)
  }else {
      console.log(`${num} não é múltiplo de 5 e 7.`)
  } 
}
multiplo(35)
multiplo(72)
